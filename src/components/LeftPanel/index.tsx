"use client";
import { useRef, useEffect } from "react";
import { useDrag } from "react-dnd";
import { useAppSelector } from "@/store/store";
import { ItemType } from "@/utils/constant";
import ImageEditor from "./ImageEditor";
import TextEditor from "./TextEditor";
import CarouselEditor from "./CarouselEditor";

export default function LeftPanel() {
  const dragImageRef = useRef<HTMLButtonElement>(null);
  const dragTextRef = useRef<HTMLButtonElement>(null);
  const dragCarouselRef = useRef<HTMLButtonElement>(null);
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

  useEffect(() => {
    dragImage(dragImageRef);
  }, [selectedElement, dragImage]);

  useEffect(() => {
    dragText(dragTextRef);
  }, [selectedElement, dragText]);

  useEffect(() => {
    dragCarousel(dragCarouselRef);
  }, [selectedElement, dragCarousel]);

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
            {selectedElement.type === "carousel" && (
              <CarouselEditor element={selectedElement} />
            )}
          </>
        ) : (
          <>
            <button ref={dragImageRef} className="w-full border">
              圖片元件
            </button>
            <button ref={dragTextRef} className="w-full border mt-4">
              文字元件
            </button>
            <button ref={dragCarouselRef} className="w-full border mt-4">
              輪播元件
            </button>
          </>
        )}
      </div>
    </div>
  );
}
