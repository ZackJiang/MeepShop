import { ITextElement } from "@/store/elements";
import { updateElement } from "@/store/elements";
import { useAppDispatch } from "@/store/store";

interface TextEditorProps {
  element: ITextElement;
}

export default function ITextEditor(props: TextEditorProps) {
  const dispatch = useAppDispatch();
  const { element } = props;

  return (
    <input
      type="text"
      className="w-full text-black"
      defaultValue={element.content}
      onChange={(event) => {
        dispatch(
          updateElement({
            ...element,
            content: event.target.value,
          })
        );
      }}
    />
  );
}
