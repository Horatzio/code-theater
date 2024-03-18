import { useEffect, useRef } from "react"
import { CodeEditor, createEditor } from "./editor/CodeEditor"
import "./CodeTheater.scss"
import { EditorLanguages } from "./editor/EditorLanguages"

interface CodeTheaterProps {
    language?: EditorLanguages
}

export const CodeTheater = ({ language = EditorLanguages.javascript }: CodeTheaterProps) => {
    const editorParent = useRef<HTMLDivElement>();
    const editorViewRef = useRef<CodeEditor>(null);

    useEffect(() => {
        if (editorParent.current && !editorViewRef.current) {
            editorViewRef.current = createEditor(editorParent.current);
        }

        return () => {
            if (editorViewRef.current) {
                editorViewRef.current.dispose();
                editorViewRef.current = null;
            }
        }
    }, []);

    useEffect(() => {
        if (editorViewRef.current) {
            editorViewRef.current.changeLanguage(language);
        }
    }, [language]);

    return <div className="code-theater-container">
        HELLO WORLD
        <div className="code-editor-container" ref={editorParent}></div>
    </div>
}