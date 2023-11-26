/*import ExecomCard from "@/components/shared/ExecomCard";
import { execomCore, execomSquad } from "@/constants";*/
import React from "react";
import Image from "next/image";

const Execom = () => {
  return (
    <div className="">
      <section className="bg-[url('/bg2.png')] flex w-screen h-20 max-md:pb-14">
      </section>
      <Image
        src="/execom.png"
        width={1920}
        height={1080}
        alt="Mission"
        style = {{opacity : '100%'}}
      />
      <Image
        src="/execom2.png"
        width={1920}
        height={1080}
        alt="Mission"
        style = {{opacity : '100%'}}
      />

      {/*<div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-screen-md bg-white rounded-3xl shadow-lg p-6 space-y-4">
          <h1 className="text-2xl font-semibold text-gray-900">Our Execoms</h1>
          <div className="w-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full">
            <div className="flex items-center justify-between w-full  px-4 text-white text-xl rounded-full">
              <span>Member pic</span>
              <span>P</span>
            </div>
          </div>
          <div className="w-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full">
            <div className="flex items-center justify-between w-full h-16 px-4 text-white text-xl rounded-full">
              <span>Member 2</span>
              <span>Position</span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-screen-md bg-white rounded-3xl shadow-lg p-6 space-y-4">
          <h1 className="text-2xl font-semibold text-gray-900">Our Execoms</h1>
          <div className="w-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full">
            <div className="flex items-center justify-between w-full h-16 px-4 text-white text-xl rounded-full">
              <span>Member 1</span>
              <span>Position</span>
            </div>
          </div>
          <div className="w-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full">
            <div className="flex items-center justify-between w-full h-16 px-4 text-white text-xl rounded-full">
              <span>Member 2</span>
              <span>Position</span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-screen-md bg-white rounded-3xl shadow-lg p-6 space-y-4">
          <h1 className="text-2xl font-semibold text-gray-900">Our Execoms</h1>
          <div className="w-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full">
            <div className="flex items-center justify-between w-full h-16 px-4 text-white text-xl rounded-full">
              <span>Member 1</span>
              <span>Position</span>
            </div>
          </div>
          <div className="w-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full">
            <div className="flex items-center justify-between w-full h-16 px-4 text-white text-xl rounded-full">
              <span>Member 2</span>
              <span>Position</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Execom;
