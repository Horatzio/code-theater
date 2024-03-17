import { EditorState } from "@codemirror/state";
import { EditorView, keymap, gutter, lineNumbers } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { javascript } from "@codemirror/lang-javascript";
import {
    indentOnInput,
    bracketMatching,
    syntaxHighlighting,
    defaultHighlightStyle,
} from "@codemirror/language";


export function createEditor(parent: HTMLElement, content: string = "console.log('hello world')     asfsfsaaaaaaaaaaaaaaaaaaaf\n\n\n\n\n\n\n\n\ndagsagasg") {
    const someContent = 'console.log("hello world")\n       \n\n\n\n\n\nasaaaas'
    const editorState = EditorState.create({
        extensions: [
            keymap.of(defaultKeymap),
            EditorView.baseTheme({ "&": { height: "200px", width: "200px" } }),
            gutter({
                renderEmptyElements: true,
            }),
            lineNumbers(),
            javascript(),
            indentOnInput(),
            syntaxHighlighting(defaultHighlightStyle),
            bracketMatching(),
        ],
    });

    return new EditorView({
        doc: someContent,
        state: editorState,
        parent,
    });
}