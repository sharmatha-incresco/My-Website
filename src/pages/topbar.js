import React from "react";
import { HiHome ,HiAcademicCap,HiIdentification} from "react-icons/hi";
import {RiGalleryFill} from "react-icons/ri"
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-4 justify-between p-4  bg-red-300">
      <button onClick={() => navigate("/home")}>
        <div className="flex gap-2">
          <HiHome className="w-6 h-6" />
          <p className="hidden md:block lg:block">Home</p>
        </div>
      </button>
      <button onClick={() => navigate("/education")}>
        <div className="flex gap-2">
          <HiAcademicCap className="w-6 h-6" />
          <p className="hidden md:block lg:block">Education</p>
        </div>
      </button>
      <button onClick={() => navigate("/experience")}>
        <div className="flex gap-2">
          <HiIdentification className="w-6 h-6" />
          <p className="hidden md:block lg:block">Experience</p>
        </div>
      </button>
      <button onClick={() => navigate("/certificategallery")}>
        <div className="flex gap-2">
          <RiGalleryFill className="w-6 h-6" />
          <p className="hidden md:block lg:block">Certificate Gallery</p>
        </div>
      </button>
    </div>
  );
}
