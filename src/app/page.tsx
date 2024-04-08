"use client";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import ReduxProvider from "../store/redux-provider";

export default function Home() {
  return (
    <ReduxProvider>
      <div className="flex">
        <DndProvider backend={HTML5Backend}>
          <LeftPanel />
          <RightPanel />
        </DndProvider>
      </div>
    </ReduxProvider>
  );
}
