import { SimpleDB } from "aws-sdk";
import React from "react";
import DropdownList from "./dropdownlist";
import { useState } from "react";
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
const [selectedFilters, setSelectedFilters] = useState({});

  const handleOptionToggle = (filterKey, optionId) => {
    if (selectedFilters[filterKey]?.includes(optionId)) {
      setSelectedFilters((prevSelectedFilters) => ({
        ...prevSelectedFilters,
        [filterKey]: prevSelectedFilters[filterKey].filter((item) => item !== optionId),
      }));
    } else {
      setSelectedFilters((prevSelectedFilters) => ({
        ...prevSelectedFilters,
        [filterKey]: [...(prevSelectedFilters[filterKey] || []), optionId],
      }));
    }
  };
    return(
        
        //<div className="-mx-3 space-y-6 bg-black">
        <div className="w-full bg-slate-800">
        <div className="h-fit w-fit">
          <div className="mt-5 w-20 items-center justify-between ">
            {companies.map((company) => (
              <DropdownList
                key={company.companyName}
                companyName={company.companyName}
                options={company.options}
                handleOptionToggle={handleOptionToggle}
                selectedOptions={selectedFilters[company.companyName] || []}
              />
            ))}
          </div>
        </div>
      </div>
    );
}
export default Sidebar;
              