"use client";
import { useDrag } from "react-dnd";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { ItemType } from "@/utils/constant";

export default function LeftPanel() {
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
                  value={selectedElement.width}
                />
                <input
                  type="text"
                  className="text-black mt-4"
                  value={selectedElement.height}
                />
                <input
                  type="text"
                  className="text-black mt-4"
                  value={selectedElement.url}
                />
              </>
            )}
            {selectedElement.type === "text" && (
              <>
                <input
                  type="text"
                  className="text-black"
                  value={selectedElement.content}
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
