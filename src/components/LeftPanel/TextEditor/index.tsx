import { ITextElement } from "@/store/elements";
import { updateElement } from "@/store/elements";
import { useAppDispatch } from "@/store/store";

interface ITextEditorProps {
  element: ITextElement;
}

export default function ITextEditor(props: ITextEditorProps) {
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
