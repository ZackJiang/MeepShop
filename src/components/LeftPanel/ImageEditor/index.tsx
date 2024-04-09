import { IImageElement } from "@/store/elements";
import { updateElement } from "@/store/elements";
import { isValidCssLength, isValidUrl } from "@/utils/common";
import { useAppDispatch } from "@/store/store";

interface ImageEditorProps {
  element: IImageElement;
}

export default function ImageEditor(props: ImageEditorProps) {
  const dispatch = useAppDispatch();
  const { element } = props;

  return (
    <>
      <input
        type="text"
        className="w-full text-black"
        defaultValue={element.width}
        onChange={(event) => {
          if (isValidCssLength(event.target.value)) {
            dispatch(
              updateElement({
                ...element,
                width: event.target.value,
              })
            );
          }
        }}
      />
      <input
        type="text"
        className="w-full text-black mt-4"
        defaultValue={element.height}
        onChange={(event) => {
          if (isValidCssLength(event.target.value)) {
            dispatch(
              updateElement({
                ...element,
                height: event.target.value,
              })
            );
          }
        }}
      />
      <input
        type="text"
        className="w-full text-black mt-4"
        defaultValue={element.url}
        onChange={(event) => {
          if (isValidUrl(event.target.value)) {
            dispatch(
              updateElement({
                ...element,
                url: event.target.value,
              })
            );
          }
        }}
      />
    </>
  );
}
