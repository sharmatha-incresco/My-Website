import { SimpleDB } from "aws-sdk";
import React from "react";
import DropdownList from "./dropdownlist";
import { useState } from "react";
import { useTranslation } from "react-i18next";
function Sidebar()
{
  const { t } = useTranslation();

  const companies = [
    {
      companyName: t('sidebar.companies.companyName'),
      options: [
        { id: 1, name: t('sidebar.companies.options.0.name') },
        { id: 2, name: t('sidebar.companies.options.1.name') },
        { id: 3, name: t('sidebar.companies.options.2.name') },
        { id: 4, name: t('sidebar.companies.options.3.name') },
      ],
    },
    {
      companyName: t('sidebar.locations.companyName'),
      options: [
        { id: 4, name: t('sidebar.locations.options.0.name') },
        { id: 5, name: t('sidebar.locations.options.1.name') },
        { id: 6, name: t('sidebar.locations.options.2.name') },
        { id: 7, name: t('sidebar.locations.options.3.name') },
      ],
    },
    {
      companyName: t('sidebar.datePosted.companyName'),
      options: [
        { id: 4, name: t('sidebar.datePosted.options.0.name') },
        { id: 5, name: t('sidebar.datePosted.options.1.name') },
        { id: 6, name: t('sidebar.datePosted.options.2.name') },
        { id: 7, name: t('sidebar.datePosted.options.3.name') },
      ],
    },
    {
      companyName: t('sidebar.skills.companyName'),
      options: [
        { id: 4, name: t('sidebar.skills.options.0.name') },
        { id: 5, name: t('sidebar.skills.options.1.name') },
        { id: 6, name: t('sidebar.skills.options.2.name') },
        { id: 7, name: t('sidebar.skills.options.3.name') },
      ],
    },
    {
      companyName: t('sidebar.experience.companyName'),
      options: [
        { id: 4, name: t('sidebar.experience.options.0.name') },
        { id: 5, name: t('sidebar.experience.options.1.name') },
        { id: 6, name: t('sidebar.experience.options.2.name') },
        { id: 7, name: t('sidebar.experience.options.3.name') },
      ],
    },
    {
      companyName: t('sidebar.education.companyName'),
      options: [
        { id: 4, name: t('sidebar.education.options.0.name') },
        { id: 5, name: t('sidebar.education.options.1.name') },
        { id: 6, name: t('sidebar.education.options.2.name') },
        { id: 7, name: t('sidebar.education.options.3.name') },
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
              