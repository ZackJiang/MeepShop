"use client";
import { useDrag } from "react-dnd";

const ItemType = {
  IMAGE: "image",
  TEXT: "text",
};

export default function LeftPanel() {
  const [, dragImage] = useDrag(
    () => ({
      type: ItemType.IMAGE,
      item: {
        text: "圖片元件",
        type: ItemType.IMAGE,
      },
    }),
    []
  );

  const [, dragText] = useDrag(
    () => ({
      type: ItemType.TEXT,
      item: {
        text: "文字元件",
        type: ItemType.TEXT,
      },
    }),
    []
  );

  return (
    <div className="h-screen px-8 flex items-center border-r border-white">
      <div className="flex flex-col">
        <button ref={dragImage} className="border">
          圖片元件
        </button>
        <button ref={dragText} className="border mt-4">
          文字元件
        </button>
      </div>
    </div>
  );
}
