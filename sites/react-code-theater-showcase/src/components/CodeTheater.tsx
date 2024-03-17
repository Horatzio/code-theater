import { useEffect, useRef } from "react";
import { createEditor } from "./Editor";
import { EditorView } from "@codemirror/view";

const CodeTheater = () => {
  const ref = useRef<HTMLDivElement>();
  const editorViewRef = useRef<EditorView>();

  useEffect(() => {
    if (ref.current && !editorViewRef.current) {
      editorViewRef.current = createEditor(ref.current);
    }
  }, []);

  return (
    <div ref={ref} id="code-theater-showcase" style={{ height: "100vh", width: "500px" }}>
    </div>
  );
};

export default CodeTheater;
