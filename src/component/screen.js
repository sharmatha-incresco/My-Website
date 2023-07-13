import React, { useState, useEffect } from "react";
import axios from "axios";
import Topbar from "./topbar";
import Sidebar from "./sidebar";
import Module from "./module";
import { useTranslation } from "react-i18next";

const languageOptions = {
  en: 'English',
  ta: 'Tamil',
  ar: 'Arabic',
};

function Screen() {
  const { t, i18n } = useTranslation();
  const getAllURL = "job";
  const [searchQuery, setSearchQuery] = useState("");
  const [alljob, setAllJob] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [sortAscending, setSortAscending] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 2;

  const handleSearch = () => {
    const filteredResults = alljob.filter(
      (job) =>
        job.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
    if (filteredResults.length === 0) {
      alert(t('screen.noResults'));
    }
  };

  const getAllPost = async () => {
    try {
      const response = await axios.get(getAllURL);
      setAllJob(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPost();
  }, []);

  const comparePositions = (a, b) => {
    if (a.position < b.position) return sortAscending ? -1 : 1;
    if (a.position > b.position) return sortAscending ? 1 : -1;
    return 0;
  };

  const sortedJobs = [
    ...(searchResults.length > 0 ? searchResults : alljob),
  ].sort(comparePositions);

  const handleSortBy = () => {
    setSortAscending(!sortAscending);
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = sortedJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="mx-auto gap-4 w-full bg-slate-800 min-h-screen">
      <select
        className="appearance-none rounded-full p-2 px-5 drop-shadow-2xl text-xs outline-none bg-gray-800 text-white"
        onChange={handleLanguageChange}
      >
        {Object.entries(languageOptions).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <div className="header rounded-lg w-full border border-black bg-slate-800 py-5">
        <Topbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
      </div>
      <div className="grid  grid-cols-12">
        <div className="col-span-2 p-3 px-8 pl-2 bottom-20 sm:col-span-2  rounded-lg border border-black bg-slate-800">
          <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">{t('screen.filterBy')}</label>
          <hr className="h-px w-32 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <Sidebar />
        </div>
        <div className="col-span-10 pl-2 w-full sm:col-span-10 rounded-lg border border-black bg-slate-800">
          <div className="pt-2 w-full inline-flex pl-3 justify-between text-sm text-white">
            <div className="text-white text-base inline-flex pt-6">
              {t('screen.searchResults')} - {searchResults.length}
            </div>
            <div className="pt-3 flex-1 inline-flex place-items-center pr-4 flex-end justify-end">
              <button
                onClick={handleSortBy}
                className="bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-3 rounded"
              >
                {t('screen.sortBy')} {sortAscending ? "A-Z" : "Z-A"}
              </button>
            </div>
          </div>
          <div className="pb-2 w-2 content-center">
            <svg
              width="250"
              height="48"
              viewBox="0 0 652 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 0.5H651.5V47.5H24C11.0213 47.5 0.5 36.9787 0.5 24C0.5 11.0213 11.0213 0.5 24 0.5Z"
                stroke="url(#paint0_linear_0_12)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_12"
                  x1="-1.21445e-06"
                  y1="24"
                  x2="652"
                  y2="23.9999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#566292" />
                  <stop offset="1" stopColor="#566292" stopOpacity="0" />
                </linearGradient>
              </defs>
              <input
                type="text"
                name="s"
                id="s"
                className="block w-full pl-10 pr-3 py-2 border border-transparent text-white rounded-md leading-5 bg-slate-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
                placeholder="jobs"
              />
            </svg>
          </div>
          <div>
            {currentJobs.map((job) => (
              <Module
                key={job.id}
                position={job.position}
                company={job.company}
                location={job.location}
                date={job.date}
              />
            ))}
          </div>
          <div className="flex justify-center my-4">
            {Array(Math.ceil(sortedJobs.length / jobsPerPage))
              .fill()
              .map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`mx-1 px-3 py-2 rounded ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-800"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen;
