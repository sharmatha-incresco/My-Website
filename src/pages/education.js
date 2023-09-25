import Footer from "./footer";
import Topbar from "./topbar";
import clg from "../clg.jpeg";
import { MdLocationPin, MdMenuBook } from "react-icons/md";
import { BsCalendarWeekFill, BsBookmarkStarFill } from "react-icons/bs";
import gg from "../gg.jpeg";
import vellalar from "../vellalar.jpeg";
import urc from "../urc.jpeg";
import AnnaiMarry from "../annaimarry.jpeg"
export default function Education() {
  function Institution({
    name,
    img,
    year,
    std,
    location,
    place,
    website,
    percentege,
  }) {
    return (
      <div className="border-2 custom-card p-4 lg:w-[1024px]  hover:scale-105 transform transition-transform  rounded-xl shadow-md shadow-gray-500 ">
        <div className="text-xl pb-3 font-semibold ">{name}</div>
        <div className="flex md:flex-row lg:flex-row flex-col  gap-10">
          <div>
            <a href={website} className="cursor-pointer">
              <img
                className="avatar border-2 border-lime-400  md:h-[300px] md:w-[500px]"
                src={img}
                alt="education"
              />
            </a>
          </div>
          <div className="flex-col overflow-scroll flex justify-between">
            <div className="flex">
              <BsCalendarWeekFill className="w-5 h-5 backround " />
              <p className=" font-semibold backround text-base pl-1 pr-4">
                Year :
              </p>
              {year}
            </div>
            <div className="flex pt-5 pb-5 ">
              <MdMenuBook className="w-6 h-6 backround" />
              <p className=" font-semibold backround text-base pl-1 pr-4">
                Course:
              </p>
              {std}
            </div>
            <div className="flex  pb-5 ">
              <BsBookmarkStarFill className="w-5 h-5 backround" />
              <p className=" font-semibold backround text-base pl-1 pr-4">
                Percentege:
              </p>
              {percentege}
            </div>
            <a href={location}>
              <div className="flex">
                <MdLocationPin className="w-6 h-6 backround" />
                <p className="font-semibold backround text-base pr-4">
                  Location:
                </p>
                {place}
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Topbar />
      </div>
      <div className="flex-grow justify-center items-center p-4">
        <div className="text-3xl backround font-bold pb-2">
          EDUCATION
        </div>
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-1 items-center justify-center p-10 gap-4 overflow-scroll">
            <Institution
              name="Velalar College Of Engineering & Technology"
              img={clg}
              year="2020-Till Now"
              std="BE-CSE"
              location="https://maps.app.goo.gl/TZ3A8tLxULhucNJK6?g_st=iw"
              website="https://velalarengg.ac.in/"
              place="Thindal,Erode"
              percentege="90%"
            />
            <Institution
              name="Green Graden Mr.Hr.Sec School "
              img={gg}
              year="2018-2020"
              std="11th,12th"
              website="http://www.greengardenschool.co.in/"
              location="https://goo.gl/maps/WPmVBKqjC1NtZwmD6"
              place="Perundurai R.S,Erode"
              percentege="80.2%"
            />
            <Institution
              name="Vellalar Girls Mr.Hr.Sec School "
              img={vellalar}
              year="2016-2018"
              std="9th,10th"
              website="https://schools.org.in/erode/33100704802/vellalar-high-school-for-girls-thindal.html"
              location="https://goo.gl/maps/BF8W4zhSZWJ28Q9d8"
              place="Thindal,Erode"
              percentege="89%"
            />
            <Institution
              name="URC Palaniammal Mr.Hr.Sec School"
              img={urc}
              year="2013-2016"
              std="6th,7th,8th"
              website="http://urcpmhss.edu.in/"
              location="https://goo.gl/maps/96twi98NtPWPqMmX7"
              place="Palayapalayam,Erode"
              percentege="90%"
            />
             <Institution
              name="Annai Mary Convent School"
              img={AnnaiMarry}
              year="2006-2013"
              std="6th,7th,8th"
              website="https://www.justdial.com/Erode/Annai-Mary-Nursury-Primary-School-Para/9999P4295-4295-101029191826-Y3J6_BZDET"
              location="https://maps.app.goo.gl/k9sjFr4Y4bpDPJu96"
              place="Marapalam,Erode"
              percentege="90%"
            />
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
