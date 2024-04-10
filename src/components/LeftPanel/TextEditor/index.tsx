import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { ITextElement } from "@/store/elements";
import { updateElement } from "@/store/elements";
import { useAppDispatch } from "@/store/store";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(
  () => import("react-quill").then((mod) => mod.default),
  {
    ssr: false,
  }
);

interface ITextEditorProps {
  element: ITextElement;
}

function TextEditor(props: ITextEditorProps) {
  const { element } = props;
  const [value, setValue] = useState(element.content);
  const dispatch = useAppDispatch();

  const toolbarOptions = [[{ header: [1, 2, 3] }], ["bold"], [{ color: [] }]];

  const handleChange = (html: string) => {
    setValue(html);
    dispatch(
      updateElement({
        ...element,
        content: html,
      })
    );
  };

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={handleChange}
      modules={{ toolbar: toolbarOptions }}
    />
  );
}

export default TextEditor;
