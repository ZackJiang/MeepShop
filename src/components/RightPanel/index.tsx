"use client";
import { useState } from "react";
import { useDrop } from "react-dnd";
import {
  addElement,
  setSelectedElement,
  IElement,
  IImageElement,
  ITextElement,
  ICarouselElement,
} from "@/store/elements";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { ItemType } from "@/utils/constant";
import ImageElement from "./ImageElement";
import TextElement from "./TextElement";
import CarouselElement from "./CarouselElement";

interface DropItem {
  hint: string;
  type: string;
}

export default function RightPanel() {
  const elements = useAppSelector((state) => state.elements);
  const dispatch = useAppDispatch();
  const [hoveredElement, setHoveredElement] = useState<number | null>(null);

  const [, drop] = useDrop({
    accept: [ItemType.IMAGE, ItemType.TEXT, ItemType.CAROUSEL],
    drop: (item: DropItem) => {
      if (item.type === ItemType.IMAGE) {
        const newElement: IImageElement = {
          id: Date.now(),
          type: "image",
          hint: item.hint,
          width: "300px",
          height: "300px",
          url: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
        };
        dispatch(addElement(newElement));
      } else if (item.type === ItemType.TEXT) {
        const newElement: ITextElement = {
          id: Date.now(),
          type: "text",
          hint: item.hint,
          content: "<p>Hello from Meepshop!</p>",
        };
        dispatch(addElement(newElement));
      } else if (item.type === ItemType.CAROUSEL) {
        const newElement: ICarouselElement = {
          id: Date.now(),
          type: "carousel",
          hint: item.hint,
          width: "300px",
          height: "300px",
          urls: [
            "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
            "https://res.cloudinary.com/demo/w_300/basketball_shot.jpg",
          ],
        };
        dispatch(addElement(newElement));
      }
    },
  });

  const handleEdit = (element: IElement | null) => {
    dispatch(setSelectedElement(element));
  };

  const handleHover = (id: number | null) => {
    setHoveredElement(id);
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="border text-center">
        This is a fixed header, no need to modify
      </div>
      <div
        ref={drop}
        className="flex-1 overflow-y-scroll"
        onClick={() => handleEdit(null)}
      >
        {elements.map((element) => (
          <div
            key={element.id}
            onClick={(event) => {
              event.stopPropagation();
              handleEdit(element);
            }}
            onMouseEnter={() => handleHover(element.id)}
            onMouseLeave={() => handleHover(null)}
            className={`relative p-4 mb-4 ${
              hoveredElement === element.id
                ? "border-blue-300"
                : "border-transparent"
            } transition duration-300 border-2`}
          >
            {hoveredElement === element.id && (
              <div className="absolute p-2 rounded-md shadow-md top-0 left-1/2 transform -translate-x-1/2">
                {element.hint}
              </div>
            )}
            {element.type === "image" && <ImageElement element={element} />}
            {element.type === "text" && <TextElement element={element} />}
            {element.type === "carousel" && (
              <CarouselElement element={element} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
