import { useEffect, useRef, useState } from "react"
import { createEditor } from "./Editor"
import { EditorView } from "@codemirror/view"

interface CodeTheaterProps {
    count?: number
}

export const CodeTheater = (props: CodeTheaterProps) => {
    const [count, setCount] = useState(0)

    const ref = useRef<HTMLDivElement>();
    const editorViewRef = useRef<EditorView>(null);

    useEffect(() => {
        if (ref.current && !editorViewRef.current) {
            editorViewRef.current = createEditor();
        }
    }, []);

    return <>
        HELLO WORLD
        <button onClick={() => setCount((c) => c + 1)}>
            {count}
        </button>
        <div id="code-editor" ref={ref}></div>
    </>
}