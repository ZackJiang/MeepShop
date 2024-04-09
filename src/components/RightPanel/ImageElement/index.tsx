import { IImageElement } from "@/store/elements";

interface ImageElementProps {
  element: IImageElement;
}

export default function ImageElement(props: ImageElementProps) {
  const { element } = props;

  return (
    <img
      src={element.url}
      style={{ width: element.width, height: element.height }}
      alt="image"
    />
  );
}
