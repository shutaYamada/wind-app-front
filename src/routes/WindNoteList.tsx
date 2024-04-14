import React from "react";
import Header from "../components/Header";
import { Input } from "antd";
import Button from "../components/Button";
import WindNote from "../components/WindNote";

const WindNoteList = () => {
  return (
    <div>
      <Header />
      <div className="flex h-10 justify-around">
        <div className="w-[60%]">
          <input
            className="w-full shadow appearance-none border rounded py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:border-black h-full"
            placeholder="検索"
          />
        </div>
        <Button className="h-full w-[30%]" text="ノートを追加" type="button" />
      </div>
      <div>
        <WindNote />
      </div>
    </div>
  );
};

export default WindNoteList;
