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

export type IElement = IImageElement | ITextElement;

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
  },
});

export const { addElement, setSelectedElement } = elementsSlice.actions;
export const elementsReducer = elementsSlice.reducer;
