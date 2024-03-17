import { basicSetup } from "codemirror"
import { EditorView } from "@codemirror/view"
import { javascript } from "@codemirror/lang-javascript"

export function createEditor() {
    const editorDiv = document.querySelector("#code-editor")

    return new EditorView({
        doc: 'console.log("Hello, World!")',
        extensions: [basicSetup, javascript()],
        parent: editorDiv
    })
}