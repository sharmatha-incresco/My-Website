import { SimpleDB } from "aws-sdk";
import React from "react";
import DropdownList from "./dropdownlist";
function Sidebar()
{
    const companies = [
        {
 companyName :"Company",
options : [
    { id: 1, name: "Amazon" },
    { id: 2, name: "CVS HEALTH" },
    { id: 3, name: "TOYOTA" },
    { id: 4, name: "Apple" },
    ],
},
{
  companyName: "Location",
  options: [
    { id: 4, name: "Mumbai" },
    { id: 5, name: "Chandigarh" },
    { id: 6, name: "Karnataka" },
    { id: 7, name: "Bangalore" },
  ],
},
{
    companyName: "Date Posted",
    options: [
      { id: 4, name: "Last 24 hours" },
      { id: 5, name: "Last 48 hours" },
      { id: 6, name: "Last 7 days" },
      { id: 7, name: "Last 14 days" },
      
    ],
  },
  {
    companyName: "Skills",
    options: [
      { id: 4, name: "Javascript" },
      { id: 5, name: "Machine Learning" },
      { id: 6, name: "JQuery" },
      { id: 7, name: "Artificial Intelligence" },
    ],
  },
  {
    companyName: "Experience",
    options: [
      { id: 4, name: "0-2 years" },
      { id: 5, name: "3-5 years" },
      { id: 6, name: "5-8 years" },
      { id: 7, name: "Above 8 years" },
      
    ],
  },
  {
    companyName: "Education",
    options: [
      { id: 4, name: "Bachelors" },
      { id: 5, name: "Masters" },
      { id: 6, name: "Phd" },
      { id: 7, name: "Diploma" },
      
    ],
  },
];
    return(
        
        //<div className="-mx-3 space-y-6 bg-black">
          <div className=" w-full bg-slate-800 ">
           
            <div class="h-fit w-fit">
               <div class="mt-5 w-20 items-center justify-between ">
               {companies.map((company, index) => (
                <>
                <DropdownList
          key={index}
          companyName={company.companyName}
          options={company.options}
        /><br></br></>
        
        
      ))}
        </div>
            </div>
            </div>
    );
}
export default Sidebar;
               {/* <ul>
                   <div class="flex items-center justify-center gap-2">
                   <li class ="inline-flex">
                   <label className="px-2 text-base text-gray-500  dark:text-gray-400">Company</label>
                   <div class="pl-14">
                   <svg
      fill="white"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
      />
    </svg>
    </div>
                   </li></div>
                   <br></br>
                   <li> 
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox  relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                        Amazon
                       </p>
                   </div></li> <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base inline-flex font-bold text-navy-700 dark:text-white">
                       CVS Health
                       </p>
                   </div> </li>
                    <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly" 
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                       Toyota
                       </p>
                   </div></li>
                   <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                       Apple
                       </p>
                   </div> </li> 
                   </ul>
               </div>
            </div>
            <hr class="h-px w-20 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div class="h-full w-full">
               <div class="mt-5 flex items-center justify-between p-2">
               <ul>
                   <div class="flex items-center justify-center gap-2">
                   <li class="inline-flex">
                   <label className="px-2 text-base text-gray-500  dark:text-gray-400">Location</label>
                   <div class="pl-14">
                   <svg
      fill="white"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
      />
    </svg>
    </div>
                   </li></div>
                   <br></br>
                   <li> 
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox  relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                       Mumbai
                       </p>
                   </div></li> <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base inline-flex font-bold text-navy-700 dark:text-white">
                       Chandigarh
                       </p>
                   </div> </li>
                    <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly" 
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                       Karnataka
                       </p>
                   </div></li>
                   <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                       Bangalore
                       </p>
                   </div> </li> 
                   </ul>
               </div>
            </div> <hr class="h-px w-20 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div class="h-full w-full">
               <div class="mt-5 flex items-center justify-between p-2">
               <ul>
                   <div class="flex items-center  gap-2">
                   <li classname="inline-flex">
                   <label className="px-2 text-base text-gray-500 inline-flex dark:text-gray-400">DatePosted<div class="pl-14">
                   <svg
      fill="white"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
      />
    </svg>
    </div></label>

                   </li></div>
                   <br></br>
                   <li> 
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox  relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                       Last 24 hours
                       </p>
                   </div></li> <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base inline-flex font-bold text-navy-700 dark:text-white">
                       
                       Last 48 hours
                       </p>
                   </div> </li>
                    <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly" 
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                       Last 7 days
                       </p>
                   </div></li>
                   <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                       Last 14 days
                       </p>
                   </div> </li> 
                   <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                       Last month
                       </p>
                   </div> </li> 
                   </ul>
               </div>
            </div>
            <hr class="h-px w-20 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div class="h-full w-full">
               <div class="mt-5 flex items-center justify-between p-2">
               <ul>
                   <div class="flex items-center justify-center gap-2">
                   <li>
                   <label className="px-2 text-base text-gray-500 inline-flex  dark:text-gray-400">Salary Range
                   <div class="pl-14">
                   <svg
      fill="white"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
      />
    </svg>
    </div></label>
                   </li></div>
                   <br></br>
                   <li> 
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox  relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                      3Lakhs+
                       </p>
                   </div></li> <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base inline-flex font-bold text-navy-700 dark:text-white">
                       6Lakhs+
                       </p>
                   </div> </li>
                    <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly" 
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                       10Lakhs+
                       </p>
                   </div></li>
                   <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                       15Lakhs+
                       </p>
                   </div> </li> 
                   <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                       25Lakhs+
                       </p>
                   </div> </li> 
                   </ul>
               </div>
            </div>
            <hr class="h-px w-20 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div class="h-full w-full">
               <div class="mt-5 flex items-center justify-between p-2">
               <ul>
                   <div class="flex items-center justify-center gap-2">
                   <li>
                   <label className="px-2 text-base text-gray-500 inline-flex dark:text-gray-400">Skills
                   <div class="pl-14">
                   <svg
      fill="white"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
      />
    </svg>
    </div></label>
                   </li></div>
                   <br></br>
                   <li> 
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox  relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                       JavaScript
                       </p>
                   </div></li> <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base inline-flex font-bold text-navy-700 dark:text-white">
                       Machine Learning
                       </p>
                   </div> </li>
                    <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly" 
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                       JQuery
                       </p>
                   </div></li>
                   <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                       Artificial Intelligence
                       </p>
                   </div> </li> 
                   </ul>
               </div>
            </div>
            <hr class="h-px w-20 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div class="h-full w-full">
               <div class="mt-5 flex items-center justify-between p-2">
               <ul>
                   <div class="flex items-center justify-center gap-2">
                   <li>
                   <label className="px-2 text-base text-gray-500 inline-flex dark:text-gray-400">Experience
                   <div class="pl-14">
                   <svg
      fill="white"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
      />
    </svg>
    </div></label>
                   </li></div>
                   <br></br>
                   <li> 
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox  relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                       0-2 years
                       </p>
                   </div></li> <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base inline-flex font-bold text-navy-700 dark:text-white">
                       3-5 years
                       </p>
                   </div> </li>
                    <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly" 
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                       5-8 years
                       </p>
                   </div></li>
                   <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                       Above 8 years
                       </p>
                   </div> </li> 
                   </ul>
               </div>
            </div>
            <hr class="h-px w-20 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div class="h-full w-full">
               <div class="mt-5 flex items-center justify-between p-2">
               <ul>
                   <div class="flex items-center justify-center gap-2">
                   <li>
                   <label className="px-2 text-base text-gray-500 inline-flex dark:text-gray-400">Education
                   <div class="pl-14">
                   <svg
      fill="white"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
      />
    </svg>
    </div></label>
                   </li></div>
                   <br></br>
                   <li> 
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox  relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                       Bachelors
                       </p>
                   </div></li> <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base inline-flex font-bold text-navy-700 dark:text-white">
                      Masters
                       </p>
                   </div> </li>
                    <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly" 
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                       Phd
                       </p>
                   </div></li>
                   <li>
                   <div class="inline-flex px-2">
                       <input
                           type="checkbox"
                           class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                           justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                           checked:border-none  checked:text-white hover:cursor-pointer dark:border-white checked:bg-brand-500 dark:checked:bg-brand-400"
                           name="weekly"
                       />
                       <p class="text-base font-bold text-navy-700 dark:text-white">
                      Diploma
                       </p>
                   </div> </li> 
                   </ul> */}
             