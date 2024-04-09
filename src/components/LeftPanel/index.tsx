"use client";
import { useDrag } from "react-dnd";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { ItemType } from "@/utils/constant";
import ImageEditor from "./ImageEditor";
import TextEditor from "./TextEditor";

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

  const [, dragCarousel] = useDrag(
    () => ({
      type: ItemType.CAROUSEL,
      item: {
        hint: "輪播元件",
        type: ItemType.CAROUSEL,
      },
    }),
    []
  );

  return (
    <div className="h-screen w-[300px] px-3 flex items-center border-r border-white">
      <div className="flex flex-col w-full">
        {selectedElement ? (
          <>
            {selectedElement.type === "image" && (
              <ImageEditor element={selectedElement} />
            )}
            {selectedElement.type === "text" && (
              <TextEditor element={selectedElement} />
            )}
          </>
        ) : (
          <>
            <button ref={dragImage} className="w-full border">
              圖片元件
            </button>
            <button ref={dragText} className="w-full border mt-4">
              文字元件
            </button>
            <button ref={dragCarousel} className="w-full border mt-4">
              輪播元件
            </button>
          </>
        )}
      </div>
    </div>
  );
}
