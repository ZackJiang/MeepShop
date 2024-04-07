"use client";
import { useState } from "react";
import { useDrop } from "react-dnd";

const ItemType = {
  IMAGE: "image",
  TEXT: "text",
};

interface DropItem {
  text: string;
  type: string;
}

interface Element {
  id: number;
  type: string;
  text: string;
  url?: string;
  content?: string;
}

export default function RightPanel() {
  const [elements, setElements] = useState<Element[]>([]);
  const [hoveredElement, setHoveredElement] = useState<number | null>(null);

  const [, drop] = useDrop({
    accept: [ItemType.IMAGE, ItemType.TEXT],
    drop: (item: DropItem) => {
      const newElement: Element = {
        id: Date.now(),
        type: item.type,
        text: item.text,
      };

      if (item.type === ItemType.IMAGE) {
        newElement.url =
          "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg";
      } else if (item.type === ItemType.TEXT) {
        newElement.content = "Hello from Meepshop!";
      }

      setElements((prevElements) => [...prevElements, newElement]);
    },
  });

  const handleEdit = () => {
    // Implement edit functionality based on element type
    // console.log("Editing", element);
  };

  const handleHover = (id: number | null) => {
    setHoveredElement(id);
  };

  return (
    <div className="w-full">
      <div className="w-full border text-center">
        This is a fixed header, no need to modify
      </div>
      <div ref={drop} className="h-full">
        {elements.map((element) => (
          <div
            key={element.id}
            onClick={() => handleEdit()}
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
                {element.text}
              </div>
            )}
            {element.type === ItemType.IMAGE && (
              <img src={element.url} width={300} height={300} alt="image" />
            )}
            {element.type === ItemType.TEXT && <div>{element.content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
