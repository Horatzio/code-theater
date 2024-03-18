import { basicSetup } from "codemirror"
import { EditorView } from "@codemirror/view"
import { oneDark } from "@codemirror/theme-one-dark"
import { Compartment, EditorState } from "@codemirror/state"
import { defaultHighlightStyle, syntaxHighlighting } from "@codemirror/language"
import { javascript } from "@codemirror/lang-javascript"
import { html } from "@codemirror/lang-html"
import { EditorLanguages } from "./EditorLanguages"

export class CodeEditor {
    private editor: EditorView;
    private languageCompartment: Compartment

    constructor(parent: HTMLElement) {
        this.languageCompartment = new Compartment();
        const editorState = EditorState.create({
            doc: 'console.log("Hello, World!")',
            extensions: [
                basicSetup,
                oneDark,
                EditorState.tabSize.of(2),
                syntaxHighlighting(defaultHighlightStyle),
                this.languageCompartment.of([])
            ],
        })

        this.editor = new EditorView({
            state: editorState,
            parent,
        });
    }

    public changeLanguage(language: EditorLanguages) {
        const extension = this.getExtension(language);
        this.editor.dispatch({
            effects: this.languageCompartment.reconfigure(extension),
        })
    }

    private getExtension(language: string) {
        if (language == 'js') {
            return javascript();
        } else if (language == 'ts') {
            return javascript({
                typescript: true
            });
        } else if (language == 'html') {
            return html();
        }
        return javascript();
    }

    public changeContent(content: string) {
        this.editor.dispatch({
            changes: { from: 0, to: this.editor.state.doc.length, insert: content },
        });
    }

    public dispose() {
        this.editor.destroy();
    }
}


export function createEditor(parent: HTMLElement) {
    return new CodeEditor(parent);

    // const languageName = 'html';
    // const languageData = languages.find((l) => l.name === languageName || l.alias.includes(languageName));
    // const languageExtension = await languageData.load();

    // editor.dispatch({
    //     effects: languageCompartment.reconfigure(languageExtension),
    // })
}