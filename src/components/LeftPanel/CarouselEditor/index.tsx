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
        <div key={index}>
          <input
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
          <button
            className="bg-orange-900"
            onClick={() => {
              let newUrls = [...element.urls];
              newUrls.splice(index, 0, newUrls[index]);
              dispatch(
                updateElement({
                  ...element,
                  urls: newUrls,
                })
              );
            }}
          >
            append
          </button>
          <button
            className="bg-orange-900 ml-2"
            onClick={() => {
              let newUrls = [...element.urls];
              newUrls.splice(index, 1);
              dispatch(
                updateElement({
                  ...element,
                  urls: newUrls,
                })
              );
            }}
          >
            delete
          </button>
        </div>
      ))}
    </>
  );
}
