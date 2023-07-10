import React from "react";
import { useState } from "react";
function Topbar({ searchQuery, setSearchQuery, handleSearch }) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div class="col-span-12 rounded-lg border  border-gray-400 bg-gray-600 p-4">
      <div class="flex pt-2 allign-justify place-items-center text-sm text-gray-400">
      <div class="text-white">
          JOBS
        </div>
        <div class="  flex-1 inline-flex place-items-center pr-10 justify-end">
        <div className=" inline-flex">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search jobs..."
            className="px-2 py-1 border bg-slate-700 border-slate-800 rounded"
          />
          <button
            onClick={handleSearch}
            className="ml-2 px-4 py-1 bg-slate-800 text-white rounded"
          >
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
            </svg>
          </button>
        </div>
        <div class="pl-2 pt-1">
        <button>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          
            <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="3em"
      width="3em"
    >
      <path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z" />
    </svg>
    {isHovering && (
            <div class="bg-slate-700 text-bold text-xs uppercase text-white">
              <h2> Sharmatha</h2>
              <h2 class="inline-flex"> sharmatha1823@gmail.com</h2>
            </div>
          )}
          </div>
          </button>
        </div>
        <div class="pl-1" >
          <button>
          <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="3em"
      width="3em"
    >
      <path d="M12 2a10 10 0 0110 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2m5 14v-1l-1-1v-2.61c0-1.09-.27-2.05-.79-2.86C14.7 7.72 13.96 7.21 13 7v-.5a1 1 0 00-1-1 1 1 0 00-1 1V7c-.96.21-1.7.72-2.21 1.53-.52.81-.79 1.77-.79 2.86V14l-1 1v1h10m-3.5 1h-3a1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5z" />
    </svg>
    {isHovering && (
            <div class="bg-slate-700 text-bold text-xs uppercase text-white">
              <h2>5 notifications</h2>
            </div>
          )}
    </div>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
