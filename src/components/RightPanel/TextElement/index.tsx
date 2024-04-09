import { ITextElement } from "@/store/elements";

interface ImageElementProps {
  element: ITextElement;
}

export default function ImageElement(props: ImageElementProps) {
  const { element } = props;

  return <div>{element.content}</div>;
}
