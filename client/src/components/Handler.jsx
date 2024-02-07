import React from "react";
import { BsMicMute } from "react-icons/bs";
import { CiVideoOn } from "react-icons/ci";
import { MdOutlineCallEnd } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { MdOutlineScreenShare } from "react-icons/md";

function Handler() {
  return (
    <div className="absolute bottom-0 w-full">
      <div className="w-2/5 block bg-gray-200 mx-auto my-auto rounded-md h-20">
        <div className="flex justify-evenly items-center h-16">
          <div className="w-10 h-10 border-gray-500 rounded-xl border-black flex items-center justify-center cursor-pointer">
            <BsMicMute size={20} />
          </div>
          <div className="w-10 h-10 border-gray-500 rounded-xl border-black flex items-center justify-center cursor-pointer">
            <CiVideoOn size={20} />
          </div>
          <div className="w-10 h-10 border-gray-500 rounded-xl border-black flex items-center justify-center cursor-pointer">
            <MdOutlineScreenShare size={20} />
          </div>
          <div className="w-10 h-10 border-gray-500 rounded-xl border-black flex items-center justify-center cursor-pointer">
            <MdOutlineCallEnd size={20} />
          </div>
          <div className="w-10 h-10 border-gray-500 rounded-xl border-black flex items-center justify-center cursor-pointer">
            <CiMenuKebab size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Handler;
