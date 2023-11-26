
import React from "react";
import ascipng from "/public/asci.png";
import Image from "next/image";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <div className="fixed top-0 left-0 w-screen h-25 m-0 ps-12 pl-5
                    flex flex-row bg-gray-400 bg-opacity-30 text-white shadow
                    items-center justify-evenly">
                    <Image
                    src="/asci.svg"
                    style= {{borderRadius:'20%',
                    border: '1px solid #000'}}
                    width={65}
                    height={65}
                    alt="asCi"/>
                 <div className="inline-block w-20 h-20"></div>
                 <div className="inline-block px-4 h-10 bg-slate-500 rounded-[10px] opacity-70
                   hover:opacity-100 transition-opacity duration-300 border-gray-300 border-1">
                  <a href ='/' className="justify pt-3 align-middle text-lg">Home</a> </div>
                 <div className="inline-block px-4 h-10 bg-slate-500 rounded-2xl opacity-70
                   hover:opacity-100 transition-opacity duration-300 border-gray-300 border-1">
                  <a href ='/register' className="justify-centre pt-3 align-middle text-lg">Register</a> </div>
                 <div className="inline-block px-4 h-10 bg-slate-500 rounded-2xl opacity-70
                   hover:opacity-100 transition-opacity duration-300 border-gray-300 border-1"> 
                  <a href ='/events/1' className="justify-centre pt-3 align-middle text-lg">Events</a> </div>
                 <div className="inline-block px-4 h-10 bg-slate-500 rounded-2xl opacity-70
                   hover:opacity-100 transition-opacity duration-300 border-gray-300 border-1"> 
                  <a href ='/execom' className="justify-centre pt-3 align-middle text-lg">Execom</a> </div>  
                 <div className="inline-block px-4 h-10 bg-slate-500 rounded-2xl opacity-70
                   hover:opacity-100 transition-opacity duration-300 border-gray-300 border-1"> 
                  <a href ='/about' className="justify-centre pt-3 align-middle text-lg">About</a> </div>
                 <div></div>
    </div>
    <div className="w-screen">{children}</div>
    </>
  );
}; 

export default Layout;
