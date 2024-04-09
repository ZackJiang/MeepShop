import { ICarouselElement } from "@/store/elements";
import { updateElement } from "@/store/elements";
import { isValidCssLength, isValidUrl } from "@/utils/common";
import { useAppDispatch } from "@/store/store";

interface ICarouselEditorProps {
  element: ICarouselElement;
}

export default function CarouselEditor(props: ICarouselEditorProps) {
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
      {element.urls.map((url, index) => (
        <input
          key={index}
          type="text"
          className="w-full text-black mt-4"
          defaultValue={url}
          onChange={(event) => {
            if (isValidUrl(event.target.value)) {
              let newUrls = [...element.urls];
              newUrls[index] = event.target.value;
              dispatch(
                updateElement({
                  ...element,
                  urls: newUrls,
                })
              );
            }
          }}
        />
      ))}
    </>
  );
}
