import { IImageElement } from "@/store/elements";

interface IImageElementProps {
  element: IImageElement;
}

export default function ImageElement(props: IImageElementProps) {
  const { element } = props;

  return (
    <img
      src={element.url}
      style={{ width: element.width, height: element.height }}
      alt="image"
    />
  );
}
