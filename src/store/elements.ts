import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface IImageElement {
  id: number;
  type: "image";
  hint: string;
  width: string;
  height: string;
  url: string;
}

export interface ITextElement {
  id: number;
  type: "text";
  hint: string;
  content: string;
}

export interface ICarouselElement {
  id: number;
  type: "carousel";
  hint: string;
  width: string;
  height: string;
  urls: string[];
}

export type IElement = IImageElement | ITextElement | ICarouselElement;

export interface IElements {
  elements: IElement[];
  selectedElement: IElement | null;
}

const initialState: IElements = {
  elements: [],
  selectedElement: null,
};

export const elementsSlice = createSlice({
  name: "elements",
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<IElement>) => {
      state.elements = [...state.elements, action.payload];
    },
    setSelectedElement: (state, action: PayloadAction<IElement | null>) => {
      state.selectedElement = action.payload;
    },
    updateElement: (state, action: PayloadAction<IElement>) => {
      const updatedElements = state.elements;
      for (let i = 0; i < updatedElements.length; i++) {
        if (updatedElements[i].id === action.payload.id) {
          updatedElements[i] = action.payload;
          break;
        }
      }
      if (state.selectedElement?.id === action.payload.id) {
        state.selectedElement = action.payload;
      }
      state.elements = updatedElements;
    },
  },
});

export const { addElement, setSelectedElement, updateElement } =
  elementsSlice.actions;
export const elementsReducer = elementsSlice.reducer;
