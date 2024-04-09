import { ITextElement } from "@/store/elements";

interface ITextElementProps {
  element: ITextElement;
}

export default function ImageElement(props: ITextElementProps) {
  const { element } = props;

  return <div>{element.content}</div>;
}
