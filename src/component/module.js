import Sidebar from "./sidebar";
import Image from "../applelogo.jpg"
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow, parseISO, differenceInDays } from 'date-fns';
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
import Applyform from "./applyform";
import axios from 'axios'; // Import axios

function Module({ jobId, position, company, location, date, applicantsCount, skills, userSkills }) {
  console.log(jobId)
  const [skillMatchPercentage, setSkillMatchPercentage] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const nav = () => {
    setShowForm(true);
  };

  let postedAgo = '';
  if (date) {
    const parsedDate = parseISO(date);

    if (!isNaN(parsedDate)) {
      postedAgo = formatDistanceToNow(parsedDate, { addSuffix: true });
    }
  }
  const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
  };
  const calculateDaysAgo = (date) => {
    const currentDate = getCurrentDate();
    const daysAgo = differenceInDays(new Date(currentDate), new Date(date));
    return daysAgo;
  };
  const getPostedText = (daysAgo) => {
    if (daysAgo === 0) {
      return "Posted today";
    } else {
      return `Posted ${daysAgo} days ago`;
    }
  };
  const { t, i18n } = useTranslation();
  useEffect(() => {
    console.log("userSkills:", userSkills);
    console.log("skills:", skills);
    const totalSkills = userSkills.length; // Total user skills
    const lowercaseUserSkills = userSkills.map(skill => skill.toLowerCase());
    const lowercaseSkills = skills.map(skill => skill.toLowerCase());
    console.log("lowercaseUserSkills:", lowercaseUserSkills);
    console.log("lowercaseSkills:", lowercaseSkills);
    const matchingSkills = lowercaseUserSkills.filter(skill => lowercaseSkills.includes(skill));
    console.log("matchingSkills:", matchingSkills);
    const matchingSkillsCount = matchingSkills.length;
    console.log("matchingSkillsCount:", matchingSkillsCount);
    const percentage = (matchingSkillsCount / totalSkills) * 100;
    console.log("percentage:", percentage);
    setSkillMatchPercentage(percentage.toFixed(2));
  }, [skills, userSkills]);



  const circleStyle = {
    background: `conic-gradient(rgba(92, 164, 169, 1) ${skillMatchPercentage}%, rgba(232, 51, 99, 1) 0)`,
  }


  return (
    <div className=" w-844 h-204 top-316 left-478 mb-5">
      <div class="header col-span-12 rounded-lg border border-gray-400 bg-gray-700 py-6 ">

        <div class="flex pt-2 allign-justify text-sm text-gray-400">
          <img src={Image} class="w-20 h-20 pb-2 pl-2" alt="Logo" />
          <div class="flex-1 inline-flex items-center">
            <div className=" flex pl-3 flex-col text-white">
              <div className=" inline-flex flex-nowrap  text-sm font-bold leading-none">
                {position}
              </div>
              <br />
              <div className="flex-auto text-sm my-1">
                <span className="mr-3 inline-flex ">{company}</span>
                <br />
                <span>{location}</span>
              </div>
            </div>
            <div class=" flex-1 inline-flex place-items-center pr-3 justify-end">
              <div>
                <div className=" text-white ">{t('module.skillMatch')}</div>
              </div>
              <div class="">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full">
                  <div className="flex items-center justify-center  w-full h-full rounded-full z-0" style={circleStyle}>
                    <div className="flex items-center justify-center w-full h-full z-1">
                      <p className="text-white font-bold w-11/12 h-11/12 rounded-full bg-gray-700 p-6">
                        {skillMatchPercentage}
                        <span className="font-normal">%</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer col-span-12 rounded-lg border border-gray-400 bg-gray-600 p-1 ">
        {/* <!-- Footer content --> */}
        <div class="flex pt-2 allign-justify text-sm text-gray-400">
          <div class="flex-1 inline-flex items-center">
            <p class="pl-2">{getPostedText(calculateDaysAgo(date))}</p>

            <p class="pl-7"><span>.{applicantsCount} applicants</span></p>
          </div>
          <div class="  flex-1 inline-flex place-items-center justify-end">
            <div>
              <button onClick={nav} class="flex-no-shrink bg-teal-500 hover:bg-slate-400 px-5 ml-4 py-2 pl-7 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 hover:border-green-500 text-white rounded-full transition ease-in duration-300">APPLY NOW</button>
            </div>
            <div class="pl-2 h-6">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path d="M3 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {showForm && (
        <Applyform
          jobId={jobId}
          //setApplicantsCount={setApplicantsCount}
          setShowForm={setShowForm}
        // prevCount={applicantsCount}
        />
      )}
    </div>

  );

}
export default Module;