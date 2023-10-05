import React from "react";
import { HiHome, HiAcademicCap, HiIdentification } from "react-icons/hi";
import { RiGalleryFill } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";
import "../App.css";
import {initialCardColor } from "../useCardColor";
export default function Topbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const buttonClass = (path1, path2) =>
  location.pathname === path1
    ? "custom-bar-hover text-black"
    : location.pathname === path2
    ? "custom-bar-hover " 
    : "bg-transparent text-black";
  
  return (
    <div className="flex gap-4 justify-between p-4" style={{ backgroundColor: initialCardColor}} >
      <button onClick={() => navigate("/home")} className={`flex gap-2 hover custom-barhover rounded-lg ${buttonClass("/home","/")} `}>
        <HiHome className="w-6 h-6" />
        <p className="hidden md:block lg:block">Home</p>
      </button>
      <button onClick={() => navigate("/education")} className={`flex gap-2 hover custom-barhover  rounded-lg ${buttonClass("/education")}`}>
        <HiAcademicCap className="w-6 h-6" />
        <p className="hidden md:block lg:block">Education</p>
      </button>
      <button onClick={() => navigate("/experience")} className={`flex gap-2 hover custom-barhover   rounded-lg ${buttonClass("/experience")}`}>
        <HiIdentification className="w-6 h-6" />
        <p className="hidden md:block lg:block">Experience</p>
      </button>
      <button onClick={() => navigate("/certificategallery")} className={`flex gap-2 hover custom-barhover   rounded-lg ${buttonClass("/certificategallery")}`}>
        <RiGalleryFill className="w-6 h-6" />
        <p className="hidden md:block lg:block">Certificate Gallery</p>
      </button>
    </div>
  );
}
