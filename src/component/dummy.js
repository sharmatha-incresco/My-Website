<div>
<div class="relative z-10 bg-slate-700 shadow">
  <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
    <div class="relative inline-flex items-center justify-between h-16">
      <div class="flex items-center px-2 lg:px-0">
        <div class="hidden lg:block lg:ml-2 text-white">
          JOBS
        </div>
      </div>
      <div class="flex-1 flex justify-center content-center pl-72 px-2 lg:ml-6 lg:justify-end">
        <div className="pl-9 inline-flex">
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
      </div>
      <div class="flex lg:hidden">
        <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
          <span className="hidden group-hover:inline-block absolute bg-gray-100 text-gray-800 px-2 py-1 rounded-md mt-2">
  Description or Tooltip
</span>
        </button>
      </div>
      <button>
        <div
          class="pl-96 pt-11"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div>
            <svg
              width="165"
              height="129"
              viewBox="0 0 165 129"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
          <g filter="url(#filter0_dd_0_79)">
            <circle cx="82.5" cy="46.5" r="22.5" fill="#242D40" />
          </g>
          <path d="M83 47C84.1867 47 85.3467 46.6481 86.3334 45.9888C87.3201 45.3295 88.0892 44.3925 88.5433 43.2961C88.9974 42.1997 89.1162 40.9933 88.8847 39.8295C88.6532 38.6656 88.0818 37.5965 87.2426 36.7574C86.4035 35.9182 85.3344 35.3468 84.1705 35.1153C83.0067 34.8838 81.8003 35.0026 80.7039 35.4567C79.6075 35.9109 78.6705 36.6799 78.0112 37.6666C77.3519 38.6533 77 39.8133 77 41C77.0016 42.5908 77.6342 44.116 78.7591 45.2409C79.884 46.3658 81.4092 46.9984 83 47ZM83 37C83.7911 37 84.5645 37.2346 85.2223 37.6741C85.8801 38.1136 86.3928 38.7384 86.6955 39.4693C86.9983 40.2002 87.0775 41.0044 86.9231 41.7804C86.7688 42.5563 86.3878 43.269 85.8284 43.8284C85.269 44.3878 84.5563 44.7688 83.7804 44.9231C83.0044 45.0775 82.2002 44.9983 81.4693 44.6955C80.7384 44.3928 80.1136 43.8801 79.6741 43.2223C79.2346 42.5645 79 41.7911 79 41C79 39.9391 79.4214 38.9217 80.1716 38.1716C80.9217 37.4214 81.9391 37 83 37V37Z" fill="white" />
          <path d="M83 49C80.6139 49.0026 78.3262 49.9517 76.639 51.639C74.9517 53.3262 74.0026 55.6139 74 58C74 58.2652 74.1054 58.5196 74.2929 58.7071C74.4804 58.8946 74.7348 59 75 59C75.2652 59 75.5196 58.8946 75.7071 58.7071C75.8946 58.5196 76 58.2652 76 58C76 56.1435 76.7375 54.363 78.0503 53.0503C79.363 51.7375 81.1435 51 83 51C84.8565 51 86.637 51.7375 87.9497 53.0503C89.2625 54.363 90 56.1435 90 58C90 58.2652 90.1054 58.5196 90.2929 58.7071C90.4804 58.8946 90.7348 59 91 59C91.2652 59 91.5196 58.8946 91.7071 58.7071C91.8946 58.5196 92 58.2652 92 58C91.9974 55.6139 91.0483 53.3262 89.361 51.639C87.6738 49.9517 85.3861 49.0026 83 49V49Z" fill="white" />
          <defs>
            <filter id="filter0_dd_0_79" x="0" y="-36" width="165" height="165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="15" dy="15" />
              <feGaussianBlur stdDeviation="22.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0916667 0 0 0 0 0.116667 0 0 0 0 0.166667 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_79" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="-15" dy="-15" />
              <feGaussianBlur stdDeviation="22.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.168627 0 0 0 0 0.211765 0 0 0 0 0.301961 0 0 0 1 0" />
              <feBlend mode="normal" in2="effect1_dropShadow_0_79" result="effect2_dropShadow_0_79" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_79" result="shape" />
            </filter>
          </defs>
          </svg>
          </div>
          {isHovering && (
            <div class="bg-slate-700 text-bold text-xs uppercase text-white">
              <h2> Sharmatha</h2>
              <h2 class="inline-flex"> sharmatha1823@gmail.com</h2>
            </div>
          )}
        </div>
      </button>
     <button>
      <div class="pl-2 pt-7">
        <svg width="105" height="104" viewBox="0 0 105 104" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_dd_0_84)">
            <circle cx="41" cy="40" r="23" fill="#242D40" />
          </g>
          <path d="M47.9004 36.5504C47.9004 34.7204 47.1734 32.9654 45.8794 31.6714C44.5854 30.3774 42.8304 29.6504 41.0004 29.6504C39.1704 29.6504 37.4154 30.3774 36.1214 31.6714C34.8274 32.9654 34.1004 34.7204 34.1004 36.5504C34.1004 44.6004 30.6504 46.9004 30.6504 46.9004H51.3504C51.3504 46.9004 47.9004 44.6004 47.9004 36.5504Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M42.9897 51.5C42.7876 51.8485 42.4974 52.1378 42.1482 52.339C41.799 52.5401 41.4032 52.6459 41.0002 52.6459C40.5973 52.6459 40.2014 52.5401 39.8523 52.339C39.5031 52.1378 39.2129 51.8485 39.0107 51.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <defs>
            <filter id="filter0_dd_0_84" x="0.71738" y="-0.28262" width="103.609" height="103.609" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="11.5217" dy="11.5217" />
              <feGaussianBlur stdDeviation="14.4022" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0977083 0 0 0 0 0.122552 0 0 0 0 0.175 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_84" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="-3.45652" dy="-3.45652" />
              <feGaussianBlur stdDeviation="5.76087" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.175781 0 0 0 0 0.219727 0 0 0 0 0.3125 0 0 0 1 0" />
              <feBlend mode="normal" in2="effect1_dropShadow_0_84" result="effect2_dropShadow_0_84" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_84" result="shape" />
            </filter>
          </defs>
        </svg>

      </div>
      </button>
    </div>
  </div>
  <div x-show="menu" class="block md:hidden">
    <div class="px-2 pt-2 pb-3">

    </div>
  </div>
</div>

</div>

{/* <div class="footer col-span-12 rounded-lg border border-gray-400 bg-gray-600 p-1 ">
<div className="text-white text-xs inline-flex pt-6">SEARCH RESULTS/JOBS-{searchResults.length} results</div>
<div className="pl-40 justify-end">
  <button
    onClick={handleSortBy}
    className="bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
  >
    Sort By {sortAscending ? "A-Z" : "Z-A"}
  </button>
</div>
</div>
// import React from "react";
// import Sidebar from "./sidebar";
// import Image from "./applelogo.jpg";
// function Module({ position, company, location }){

//     return(
//       <div>
//         <div className="rounded-lg border border-gray-400 bg-gray-600   ">

//          {/* <div class="flex pt-2 allign-justify text-sm text-gray-400"> */}
//             <div className="col-span-5 py-2 pl-4 rounded-lg border border-gray-500 bg-gray-700 p-32 sm:col-span-12">
//               {/* <!-- Main Content --> */}
//               <img src={Image}  alt="Logo" />
//               {/* <div className="flex-auto sm:ml-5 justify-evenly">
//                 <div className="flex items-center justify-between sm:mt-2">
//                   <div className="flex items-center"> */}
//                     <div className=" flex  flex-col text-white">
//                       <div className=" inline-flex flex-nowrap  text-sm font-bold leading-none">
//                         {position}
//                       </div>
//                       <br/>
//                       <div className="flex-auto text-sm my-1">
//                         <span className="mr-3 inline-flex ">{company}</span>
//                         <br/>
//                         <span>{location}</span>
//                       </div>
//                     </div>
//                     <div class="  flex-1 inline-flex place-items-center justify-end">
//                   <div className=" text-white ">Skillmatch</div>
//                   <div className="pl-10 ">
//                     <svg width="73" height="74" viewBox="0 0 73 74" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <svg width="73" height="74" viewBox="0 0 73 74" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M22.2199 42.5918L27.3799 30.8718V29.2518H17.7599V31.3118H24.6799L19.6399 42.5918H22.2199ZM33.8245 42.8318C36.5445 42.8318 38.9445 41.5518 38.9445 39.1518C38.9445 37.4718 37.5645 36.2518 35.9445 35.7118C37.4445 35.2318 38.7245 34.2318 38.7245 32.5518C38.7245 30.0718 36.1845 29.0518 33.8245 29.0518C31.4645 29.0518 28.9245 30.0718 28.9245 32.5518C28.9245 34.2318 30.2045 35.2318 31.7045 35.7118C30.0845 36.2518 28.7045 37.4718 28.7045 39.1518C28.7045 41.5518 31.0845 42.8318 33.8245 42.8318ZM33.8245 34.7718C33.0245 34.6318 31.3045 34.1518 31.3045 32.9118C31.3045 31.7718 32.3845 31.1318 33.8245 31.1318C35.2645 31.1318 36.3445 31.7718 36.3445 32.9118C36.3445 34.1518 34.6445 34.6318 33.8245 34.7718ZM33.8245 40.7518C32.3045 40.7518 31.0845 40.0318 31.0845 38.8518C31.0845 37.4718 32.9845 36.8718 33.8245 36.7518C34.6445 36.8718 36.5645 37.4718 36.5645 38.8518C36.5645 40.0318 35.3045 40.7518 33.8245 40.7518ZM43.6585 35.6718C45.6585 35.6718 46.9785 34.2318 46.9785 32.3718C46.9785 30.4918 45.6585 29.0518 43.6585 29.0518C41.6785 29.0518 40.3385 30.4918 40.3385 32.3718C40.3385 34.2318 41.6785 35.6718 43.6585 35.6718ZM43.6985 42.5918L52.2385 29.2518H50.8785L42.3585 42.5918H43.6985ZM50.8385 42.8318C52.8185 42.8318 54.1585 41.3918 54.1585 39.5318C54.1585 37.6518 52.8185 36.2118 50.8385 36.2118C48.8585 36.2118 47.5185 37.6518 47.5185 39.5318C47.5185 41.3918 48.8585 42.8318 50.8385 42.8318ZM43.6585 34.3318C42.6385 34.3318 41.8985 33.5318 41.8985 32.3718C41.8985 31.1918 42.6385 30.3718 43.6585 30.3718C44.6985 30.3718 45.4385 31.1918 45.4385 32.3718C45.4385 33.5318 44.6985 34.3318 43.6585 34.3318ZM50.8385 41.4918C49.7985 41.4918 49.0585 40.6918 49.0585 39.5318C49.0585 38.3518 49.7985 37.5318 50.8385 37.5318C51.8785 37.5318 52.6185 38.3518 52.6185 39.5318C52.6185 40.6918 51.8785 41.4918 50.8385 41.4918Z" fill="white"/>
// <circle cx="36.4519" cy="37.0573" r="34.3112" stroke="#E83363" stroke-width="2.41369"/>
// <mask id="path-3-outside-1_0_137" maskUnits="userSpaceOnUse" x="2.39453" y="0" width="71" height="74" fill="black">
// <rect fill="white" x="2.39453" width="71" height="74"/>
// <path d="M4.37523 49.4948C3.58363 49.8105 3.19478 50.7099 3.5443 51.4871C5.99179 56.9297 9.76491 61.6823 14.5284 65.304C19.7019 69.2374 25.8486 71.6885 32.3092 72.3943C38.7698 73.1001 45.3006 72.0341 51.2015 69.3106C57.1023 66.587 62.1505 62.3087 65.8048 56.9343C69.4591 51.56 71.5816 45.2923 71.9447 38.8034C72.3078 32.3145 70.8978 25.8492 67.866 20.1007C64.8341 14.3522 60.2948 9.53731 54.7346 6.17242C49.6152 3.07424 43.8082 1.31288 37.8469 1.03801C36.9956 0.99875 36.3023 1.69103 36.2997 2.54326C36.2972 3.39549 36.9864 4.08462 37.8376 4.12734C43.2384 4.39838 48.4966 6.00467 53.1367 8.81277C58.2176 11.8876 62.3657 16.2874 65.1362 21.5404C67.9067 26.7934 69.1951 32.7014 68.8633 38.631C68.5315 44.5605 66.5919 50.2879 63.2527 55.199C59.9134 60.1101 55.3003 64.0197 49.9081 66.5084C44.516 68.9972 38.548 69.9713 32.6443 69.3263C26.7407 68.6813 21.1239 66.4416 16.3963 62.8472C12.0788 59.5646 8.65165 55.2654 6.4138 50.3425C6.06111 49.5667 5.16682 49.1791 4.37523 49.4948Z"/>
// </mask>
// <path d="M4.37523 49.4948C3.58363 49.8105 3.19478 50.7099 3.5443 51.4871C5.99179 56.9297 9.76491 61.6823 14.5284 65.304C19.7019 69.2374 25.8486 71.6885 32.3092 72.3943C38.7698 73.1001 45.3006 72.0341 51.2015 69.3106C57.1023 66.587 62.1505 62.3087 65.8048 56.9343C69.4591 51.56 71.5816 45.2923 71.9447 38.8034C72.3078 32.3145 70.8978 25.8492 67.866 20.1007C64.8341 14.3522 60.2948 9.53731 54.7346 6.17242C49.6152 3.07424 43.8082 1.31288 37.8469 1.03801C36.9956 0.99875 36.3023 1.69103 36.2997 2.54326C36.2972 3.39549 36.9864 4.08462 37.8376 4.12734C43.2384 4.39838 48.4966 6.00467 53.1367 8.81277C58.2176 11.8876 62.3657 16.2874 65.1362 21.5404C67.9067 26.7934 69.1951 32.7014 68.8633 38.631C68.5315 44.5605 66.5919 50.2879 63.2527 55.199C59.9134 60.1101 55.3003 64.0197 49.9081 66.5084C44.516 68.9972 38.548 69.9713 32.6443 69.3263C26.7407 68.6813 21.1239 66.4416 16.3963 62.8472C12.0788 59.5646 8.65165 55.2654 6.4138 50.3425C6.06111 49.5667 5.16682 49.1791 4.37523 49.4948Z" fill="#5CA4A9"/>
// <path d="M4.37523 49.4948C3.58363 49.8105 3.19478 50.7099 3.5443 51.4871C5.99179 56.9297 9.76491 61.6823 14.5284 65.304C19.7019 69.2374 25.8486 71.6885 32.3092 72.3943C38.7698 73.1001 45.3006 72.0341 51.2015 69.3106C57.1023 66.587 62.1505 62.3087 65.8048 56.9343C69.4591 51.56 71.5816 45.2923 71.9447 38.8034C72.3078 32.3145 70.8978 25.8492 67.866 20.1007C64.8341 14.3522 60.2948 9.53731 54.7346 6.17242C49.6152 3.07424 43.8082 1.31288 37.8469 1.03801C36.9956 0.99875 36.3023 1.69103 36.2997 2.54326C36.2972 3.39549 36.9864 4.08462 37.8376 4.12734C43.2384 4.39838 48.4966 6.00467 53.1367 8.81277C58.2176 11.8876 62.3657 16.2874 65.1362 21.5404C67.9067 26.7934 69.1951 32.7014 68.8633 38.631C68.5315 44.5605 66.5919 50.2879 63.2527 55.199C59.9134 60.1101 55.3003 64.0197 49.9081 66.5084C44.516 68.9972 38.548 69.9713 32.6443 69.3263C26.7407 68.6813 21.1239 66.4416 16.3963 62.8472C12.0788 59.5646 8.65165 55.2654 6.4138 50.3425C6.06111 49.5667 5.16682 49.1791 4.37523 49.4948Z" stroke="#5CA4A9" stroke-width="2" mask="url(#path-3-outside-1_0_137)"/>
// </svg>

//                     </svg>
//                   </div>
//                 </div>
//               </div>
//               </div>
//             {/* </div>
//             </div>
//             </div> */}
//             <div class="footer col-span-12 rounded-lg border border-gray-400 bg-gray-600 p-6">
//                             {/* <!-- Footer content --> */}
//                              <div class="flex pt-2 allign-justify text-sm text-gray-400">
//                                  <div class="flex-1 inline-flex items-center">
//                                      <p class="">posted 1 day ago </p>

//                                     <p class="pl-7"><span>.10 applicants</span></p>
//                                 </div>
//                                 <div class="  flex-1 inline-flex place-items-center justify-end">
//                                    <div>
//                                          <button  class="flex-no-shrink bg-teal-500 hover:bg-slate-400 px-5 ml-4 py-2 pl-7 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 hover:border-green-500 text-white rounded-full transition ease-in duration-300">APPLY NOW</button>
//                                    </div>
//                                     <div class="pl-5 h-6">
//                                        <svg
//                                            fill="currentColor"
//                                             viewBox="0 0 16 16"
//                                            height="1em"
//                                           width="1em"
//                                         >
//                                              <path d="M3 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z" />
//                                        </svg>
//                                     </div>
//                                </div>
//                             </div>
//                         </div>
//                         </div>
         
//     );

// }
// export default Module;
// // import Image from "./applelogo.jpg"
// // import Topbar from "./topbar";
// // import Sidebar from "./sidebar";
// // import Module from "./module";
// // import { useState, React, useEffect } from "react";
// // import axios from "axios";
// // function Screen() {
// //     const getAllURL = "jobs/jobs";
// //     const [searchQuery, setSearchQuery] = useState("");
// //     const [alljob, setalljob] = useState("");
// //     const [searchResults, setSearchResults] = useState([]);
// //     const handleSearch = () => {
// //         const filteredResults = jobs.filter(
// //             (job) =>
// //                 job.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //                 job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //                 job.location.toLowerCase().includes(searchQuery.toLowerCase())
// //         );
// //         setSearchResults(filteredResults);
// //     };
// //     function getAllPost() {
// //         axios.get(getAllURL).then((response) => {
// //             setalljob(response.data);
// //             console.log(response.data);
// //         }).catch((error) => { console.log(error) });


// //     }
// //     useEffect(() => {
// //         getAllPost()
// //     }, [])
// //     const jobs = [
// //         {
// //             id: 1,
// //             position: "Juni.Ast",
// //             company: "Apple",
// //             location: "Mumbai",
// //         },
// //         {
// //             id: 2,
// //             position: "aaa",
// //             company: "ans",
// //             location: "India"
// //         },
// //         // Add more job data objects here
// //     ];
// //     return (
// //         <div class="mx-auto gap-4 bg-slate-800 min-h-screen">
// //             <div class="header rounded-lg border border-black bg-slate-800 py-8">
// //                 {/* <!-- Header content --> */}
// //                 <Topbar
// //                     searchQuery={searchQuery}
// //                     setSearchQuery={setSearchQuery}
// //                     handleSearch={handleSearch}
// //                 />
// //             </div>
// //             <div class="grid grid-cols-12">
// //                 <div class="col-span-2 p-8 pl-2 bottom-20 sm:col-span-2 rounded-lg border border-black bg-slate-800 ">
// //                     {/* <!-- Sidebar --> */}
// //                     <Sidebar />
// //                 </div>
// //                 <div class="col-span-10 pl-2 w-full sm:col-span-10 rounded-lg border border-black bg-slate-800 ">
// //                     {/* <!-- Main Content --> */}
// //                     <div class="inline-flex">
// //                         <div class="text-white text-base pt-6">SEARCH RESULTS/JOBS-{searchResults.length} results
// //                         </div>

// //                         <div class="pl-96 pt-6">
// //                             <svg width="188" height="40" viewBox="0 0 188 40" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                                 <rect x="79.5" y="0.5" width="108" height="39" rx="4.5" fill="white" stroke="#EDEDED" />
// //                                 <path d="M111.584 25V23.352H106.88V14.328H105.008V25H111.584ZM119.761 25V19.864C119.761 17.8 118.258 17.08 116.53 17.08C115.297 17.08 114.177 17.464 113.281 18.328L113.985 19.496C114.641 18.824 115.409 18.504 116.273 18.504C117.329 18.504 118.082 19.048 118.082 19.944V21.096C117.505 20.44 116.625 20.104 115.569 20.104C114.305 20.104 112.897 20.84 112.897 22.632C112.897 24.328 114.321 25.192 115.569 25.192C116.594 25.192 117.505 24.824 118.082 24.152V25H119.761ZM116.241 24.04C115.297 24.04 114.577 23.496 114.577 22.648C114.577 21.816 115.297 21.256 116.241 21.256C116.961 21.256 117.681 21.528 118.082 22.056V23.24C117.681 23.768 116.961 24.04 116.241 24.04ZM124.595 25.192C125.363 25.192 125.859 24.968 126.163 24.696L125.763 23.416C125.635 23.56 125.347 23.704 125.027 23.704C124.547 23.704 124.291 23.304 124.291 22.776V18.728H125.859V17.272H124.291V15.16H122.611V17.272H121.331V18.728H122.611V23.192C122.611 24.488 123.283 25.192 124.595 25.192ZM131.273 25.192C132.489 25.192 133.625 24.792 134.409 24.056L133.641 22.952C133.081 23.512 132.201 23.816 131.433 23.816C129.977 23.816 129.113 22.84 128.985 21.688H134.937V21.272C134.937 18.84 133.465 17.08 131.145 17.08C128.857 17.08 127.225 18.888 127.225 21.128C127.225 23.576 128.937 25.192 131.273 25.192ZM133.321 20.488H128.969C129.033 19.56 129.705 18.456 131.129 18.456C132.649 18.456 133.273 19.576 133.321 20.488ZM139.571 25.192C141.651 25.192 142.787 24.152 142.787 22.776C142.787 19.704 138.115 20.728 138.115 19.368C138.115 18.824 138.659 18.408 139.539 18.408C140.515 18.408 141.363 18.824 141.827 19.336L142.531 18.152C141.843 17.544 140.851 17.08 139.539 17.08C137.587 17.08 136.499 18.152 136.499 19.416C136.499 22.392 141.171 21.304 141.171 22.824C141.171 23.432 140.643 23.848 139.635 23.848C138.643 23.848 137.571 23.336 137.027 22.776L136.259 23.976C137.059 24.76 138.243 25.192 139.571 25.192ZM147.118 25.192C147.886 25.192 148.382 24.968 148.686 24.696L148.286 23.416C148.158 23.56 147.87 23.704 147.55 23.704C147.07 23.704 146.814 23.304 146.814 22.776V18.728H148.382V17.272H146.814V15.16H145.134V17.272H143.854V18.728H145.134V23.192C145.134 24.488 145.806 25.192 147.118 25.192Z" fill="#333333" />
// //                                 <path d="M4.704 25.192C7.584 25.192 8.64 23.592 8.64 22.056C8.64 18.072 2.32 19.448 2.32 17.048C2.32 16.04 3.248 15.352 4.512 15.352C5.68 15.352 6.8 15.736 7.6 16.632L8.4 15.656C7.504 14.712 6.24 14.152 4.624 14.152C2.512 14.152 0.944 15.368 0.944 17.128C0.944 20.936 7.264 19.4 7.264 22.152C7.264 22.984 6.656 24.008 4.752 24.008C3.248 24.008 2.096 23.272 1.408 22.472L0.608 23.496C1.488 24.488 2.864 25.192 4.704 25.192ZM14.271 25.192C16.623 25.192 18.095 23.368 18.095 21.128C18.095 18.888 16.623 17.08 14.271 17.08C11.919 17.08 10.447 18.888 10.447 21.128C10.447 23.368 11.919 25.192 14.271 25.192ZM14.271 24.12C12.623 24.12 11.711 22.712 11.711 21.128C11.711 19.56 12.623 18.152 14.271 18.152C15.919 18.152 16.831 19.56 16.831 21.128C16.831 22.712 15.919 24.12 14.271 24.12ZM21.5712 25V19.528C21.9232 18.904 22.9312 18.296 23.6832 18.296C23.8592 18.296 24.0032 18.312 24.1472 18.328V17.096C23.0912 17.096 22.1952 17.704 21.5712 18.504V17.272H20.3712V25H21.5712ZM27.9405 25.192C28.6285 25.192 29.0605 24.984 29.3645 24.696L29.0125 23.784C28.8525 23.96 28.5485 24.12 28.1965 24.12C27.6845 24.12 27.4285 23.704 27.4285 23.128V18.328H28.9965V17.272H27.4285V15.16H26.2125V17.272H24.9325V18.328H26.2125V23.384C26.2125 24.536 26.7885 25.192 27.9405 25.192ZM36.6562 22.904V19.4C37.0722 18.728 38.0162 18.152 38.9762 18.152C40.5282 18.152 41.4562 19.432 41.4562 21.144C41.4562 22.856 40.5282 24.12 38.9762 24.12C38.0162 24.12 37.0722 23.576 36.6562 22.904ZM36.6562 25V23.848C37.2322 24.632 38.1762 25.192 39.2642 25.192C41.2802 25.192 42.7042 23.656 42.7042 21.144C42.7042 18.664 41.2962 17.08 39.2642 17.08C38.2242 17.08 37.2802 17.592 36.6562 18.44V14.328H35.4562V25H36.6562ZM44.5634 28.024C44.7714 28.088 45.1714 28.136 45.4274 28.136C46.4514 28.12 47.2354 27.688 47.6994 26.568L51.5714 17.272H50.2754L47.6994 23.608L45.1394 17.272H43.8274L47.0594 25.08L46.5474 26.248C46.2754 26.888 45.9234 27.064 45.3954 27.064C45.2034 27.064 44.9154 27.016 44.7394 26.936L44.5634 28.024Z" fill="#BDBDBD" />
// //                                 <path d="M162.999 17L167.999 22L172.999 17" stroke="black" />
// //                             </svg>
// //                         </div>
// //                     </div>
// //                     <div class=" w-full content-center">
// //                         <label for="search" class="sr-only text-white ">Jobs</label>
// //                         <svg width="652" height="48" viewBox="0 0 652 48" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                             <path d="M24 0.5H651.5V47.5H24C11.0213 47.5 0.5 36.9787 0.5 24C0.5 11.0213 11.0213 0.5 24 0.5Z" stroke="url(#paint0_linear_0_12)" />
// //                             <defs>
// //                                 <linearGradient id="paint0_linear_0_12" x1="-1.21445e-06" y1="24" x2="652" y2="23.9999" gradientUnits="userSpaceOnUse">
// //                                     <stop stop-color="#566292" />
// //                                     <stop offset="1" stop-color="#566292" stop-opacity="0" />
// //                                 </linearGradient>
// //                             </defs>
// //                             <input type="text" name="s" id="s" class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-slate-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out" placeholder="jobs" />
// //                         </svg></div>
// //                     <div>
// //                         {searchResults.length > 0 ? (
// //                             searchResults.map((job) => (
// //                                 <Module
// //                                     key={job.id}
// //                                     position={job.position}
// //                                     company={job.company}
// //                                     location={job.location}
// //                                 />
// //                             ))
// //                         ) : (
// //                             jobs.map((job) => (
// //                                 <Module
// //                                     key={job.id}
// //                                     position={job.position}
// //                                     company={job.company}
// //                                     location={job.location}
// //                                 />
// //                             ))
// //                         )}
// //                         {/* {jobs.map((job) => (
// //               <Module
// //                 key={job.id}
// //                 position={job.position}
// //                 company={job.company}
// //                 location={job.location}
// //               />
// //             ))} */}
// //                     </div>
// //                 </div>
// //             </div>


// //         </div>

// //         // {/* <div class="mx-auto grid max-w-4xl grid-cols-12 gap-4 bg-zinc-50 p-1">
// //         //   <div class="header col-span-12 rounded-lg border border-gray-300 bg-gray-600 py-8">
// //         //     {/* <!-- Header content --> */}
// //         //     <Topbar/>
// //         //   </div>
// //         //   <div class="col-span-12 rounded-lg border border-gray-400 bg-gray-200 p-16 sm:col-span-4">
// //         //     {/* <!-- Sidebar --> */}
// //         //     <Sidebar/>
// //         //   </div>
// //         //   <div class="col-span-12 rounded-lg border border-gray-500 bg-gray-200 p-32 sm:col-span-8">
// //         //     {/* <!-- Main Content --> */}
// //         //     <Module/>
// //         //   </div>
// //         // </div> */}
// //     );
// // }
// // export default Screen; */}