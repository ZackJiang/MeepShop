"use client";
import { useDrag } from "react-dnd";
import { updateElement } from "@/store/elements";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { ItemType } from "@/utils/constant";
import { isValidCssLength, isValidUrl } from "@/utils/common";

export default function LeftPanel() {
  const dispatch = useAppDispatch();
  const selectedElement = useAppSelector((state) => state.selectedElement);

  const [, dragImage] = useDrag(
    () => ({
      type: ItemType.IMAGE,
      item: {
        hint: "圖片元件",
        type: ItemType.IMAGE,
      },
    }),
    []
  );

  const [, dragText] = useDrag(
    () => ({
      type: ItemType.TEXT,
      item: {
        hint: "文字元件",
        type: ItemType.TEXT,
      },
    }),
    []
  );

  return (
    <div className="h-screen px-8 flex items-center border-r border-white">
      <div className="flex flex-col">
        {selectedElement ? (
          <>
            {selectedElement.type === "image" && (
              <>
                <input
                  type="text"
                  className="text-black"
                  defaultValue={selectedElement.width}
                  onChange={(event) => {
                    if (isValidCssLength(event.target.value)) {
                      dispatch(
                        updateElement({
                          ...selectedElement,
                          width: event.target.value,
                        })
                      );
                    }
                  }}
                />
                <input
                  type="text"
                  className="text-black mt-4"
                  defaultValue={selectedElement.height}
                  onChange={(event) => {
                    if (isValidCssLength(event.target.value)) {
                      dispatch(
                        updateElement({
                          ...selectedElement,
                          height: event.target.value,
                        })
                      );
                    }
                  }}
                />
                <input
                  type="text"
                  className="text-black mt-4"
                  defaultValue={selectedElement.url}
                  onChange={(event) => {
                    if (isValidUrl(event.target.value)) {
                      dispatch(
                        updateElement({
                          ...selectedElement,
                          url: event.target.value,
                        })
                      );
                    }
                  }}
                />
              </>
            )}
            {selectedElement.type === "text" && (
              <>
                <input
                  type="text"
                  className="text-black"
                  defaultValue={selectedElement.content}
                  onChange={(event) => {
                    dispatch(
                      updateElement({
                        ...selectedElement,
                        content: event.target.value,
                      })
                    );
                  }}
                />
              </>
            )}
          </>
        ) : (
          <>
            <button ref={dragImage} className="border">
              圖片元件
            </button>
            <button ref={dragText} className="border mt-4">
              文字元件
            </button>
          </>
        )}
      </div>
    </div>
  );
}
