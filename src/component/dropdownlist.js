import React, { useState } from "react";

function DropdownList({ companyName, options, handleOptionToggle, filterKey }) {
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown open/close

  const isDateFilter = filterKey === 'date';

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (optionId, optionName) => {
    handleOptionToggle(filterKey, optionId, optionName);
  };

  return (
    <div className="w-fit">
      <div className="mt-5 pb-44 w-16">
        <label className="text-xs text-gray-500 dark:text-gray-400">{companyName}</label>
        <div className="relative inline-block">
          <button
            type="button"
            className="justify-center rounded-md border shadow-sm px-1 py-0.5 text-sm font-medium text-black"
            onClick={toggleDropdown}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M21.886 5.536A1.002 1.002 0 0021 5H3a1.002 1.002 0 00-.822 1.569l9 13a.998.998 0 001.644 0l9-13a.998.998 0 00.064-1.033zM12 17.243L4.908 7h14.184L12 17.243z" />
            </svg>
          </button>
          {isOpen && (
            <ul className="absolute text-xs rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
              {options.map((option) => (
                <li key={option.id}>
                  <label className="flex items-center px-4 w-fit py-2">
                    {isDateFilter ? (
                      <input
                        type="checkbox"
                        className="mr-2 leading-tight"
                        name={companyName}
                        value={option.name}
                        onChange={() =>
                          handleOptionChange(option.id, option.name)
                        }
                      />
                    ) : (
                      <input
                        type="checkbox"
                        className="mr-2 leading-tight"
                        name={companyName}
                        value={option.name}
                        onChange={() =>
                          handleOptionChange(option.id, option.name)
                        }
                      />
                    )}
                    <span className="text-gray-700 w-52 dark:text-gray-400">
                      {option.name}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default DropdownList;
