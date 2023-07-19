import React from "react";
import DropdownList from "./dropdownlist";
import { useTranslation } from "react-i18next";

function Sidebar({ handleFilterChange }) {
  const { t } = useTranslation();

  const filterOptions = [
    {
      name: t('sidebar.companies.companyName'),
      filterKey: 'company',
      options: [
        { id: 1, name: t('sidebar.companies.options.0.name') },
        { id: 2, name: t('sidebar.companies.options.1.name') },
        { id: 3, name: t('sidebar.companies.options.2.name') },
        { id: 4, name: t('sidebar.companies.options.3.name') },
      ],
    },
    {
      name: t('sidebar.locations.companyName'),
      filterKey: 'location',
      options: [
        { id: 4, name: t('sidebar.locations.options.0.name') },
        { id: 5, name: t('sidebar.locations.options.1.name') },
        { id: 6, name: t('sidebar.locations.options.2.name') },
        { id: 7, name: t('sidebar.locations.options.3.name') },
      ],
    },
    {
      name: t('sidebar.datePosted.companyName'),
      filterKey: 'date',
      options: [
        { id: 4, name: t('sidebar.datePosted.options.0.name') },
        { id: 5, name: t('sidebar.datePosted.options.1.name') },
        { id: 6, name: t('sidebar.datePosted.options.2.name') },
        { id: 7, name: t('sidebar.datePosted.options.3.name') },
      ],
    },
    {
      name: t('sidebar.skills.companyName'),
      filterKey: 'skills',
      options: [
        { id: 4, name: t('sidebar.skills.options.0.name') },
        { id: 5, name: t('sidebar.skills.options.1.name') },
        { id: 6, name: t('sidebar.skills.options.2.name') },
        { id: 7, name: t('sidebar.skills.options.3.name') },
      ],
    },
    {
      name: t('sidebar.experience.companyName'),
      filterKey: 'experience',
      options: [
        { id: 4, name: t('sidebar.experience.options.0.name') },
        { id: 5, name: t('sidebar.experience.options.1.name') },
        { id: 6, name: t('sidebar.experience.options.2.name') },
        { id: 7, name: t('sidebar.experience.options.3.name') },
      ],
    },
    {
      name: t('sidebar.education.companyName'),
      filterKey: 'education',
      options: [
        { id: 4, name: t('sidebar.education.options.0.name') },
        { id: 5, name: t('sidebar.education.options.1.name') },
        { id: 6, name: t('sidebar.education.options.2.name') },
        { id: 7, name: t('sidebar.education.options.3.name') },
      ],
    },
  ];

  const handleOptionToggle = (filterKey, optionId, optionName) => {
    handleFilterChange(filterKey, optionId, optionName);
  };

  return (
    <div className="w-full bg-slate-800">
      <div className="mt-5">
        {filterOptions.map((filter) => (
          <DropdownList
            key={filter.name}
            companyName={filter.name}
            options={filter.options}
            handleOptionToggle={handleOptionToggle}
            filterKey={filter.filterKey}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
