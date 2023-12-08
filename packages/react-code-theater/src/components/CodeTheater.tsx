import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css"; // Choose a theme
import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import "./CodeShowcase.css";
import { useEffect, useRef } from "react";
import { EditorState } from "@codemirror/state";

const CODE_THEATER_ID = "code-theater-container";

const CodeShowcase = () => {
  const code = "abc \n bcca \n affak";

  const codeMirrorRef = useRef<EditorView>();
  useEffect(() => {
    codeMirrorRef.current = new EditorView({
      state: EditorState.create({
        extensions: [basicSetup, javascript()], // Add other extensions if needed
      }),
      parent: document.getElementById(CODE_THEATER_ID) ?? undefined,
    });
  }, []);

  return (
    <div id={CODE_THEATER_ID} style={{ height: "300px" }}>
      {code}
    </div>
  );
};

export default CodeShowcase;
