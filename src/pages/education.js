import Footer from "./footer";
import Topbar from "./topbar";
import clg from "../clg.jpeg";
import { MdLocationPin, MdMenuBook } from "react-icons/md";
import { BsCalendarWeekFill, BsBookmarkStarFill } from "react-icons/bs";
import gg from "../gg.jpeg";
import vellalar from "../vellalar.jpeg";
import urc from "../urc.jpeg";
import AnnaiMarry from "../annaimarry.jpeg";
import { darktheme } from "../globalstate";
import { initialCardColor } from "../useCardColor";
import { initialTextColor } from "../useTextColor";
import { initialContentColor } from "../useText";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
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
      <div
        className="border-2 custom-card p-4 lg:w-[1024px]  hover:scale-105 transform transition-transform  rounded-xl shadow-sm shadow-gray-500 "
        style={{ backgroundColor: initialCardColor }}
      >
        <div
          className="text-xl pb-3 font-semibold "
          style={{ color: initialTextColor }}
        >
          {name}
        </div>
        <div className="flex md:flex-row lg:flex-row flex-col  gap-10">
          <div>
            <a href={website} className="cursor-pointer">
              <img
                className="avatar border-2 custom-card md:h-[300px] md:w-[500px] "
                src={img}
                alt="education"
              />
            </a>
          </div>
          <div className="flex-col overflow-scroll flex align-middle  justify-between">
            <div className="flex align-middle">
              <BsCalendarWeekFill
                className="w-5 h-5 backround "
                style={{ color: initialTextColor }}
              />
              <p
                className=" font-semibold backround text-base pl-1 pr-4"
                style={{ color: initialTextColor }}
              >
                Year :
              </p>
              <p style={{ color: initialContentColor }}>{year}</p>
            </div>
            <div className="flex pt-5 pb-5 align-middle ">
              <MdMenuBook
                className="w-6 h-6 backround"
                style={{ color: initialTextColor }}
              />
              <p
                className=" font-semibold backround text-base pl-1 pr-4"
                style={{ color: initialTextColor }}
              >
                Course:
              </p>
              <p style={{ color: initialContentColor }}> {std}</p>
            </div>
            <div className="flex align-middle  pb-5 ">
              <BsBookmarkStarFill
                className="w-5 h-5 backround"
                style={{ color: initialTextColor }}
              />
              <p
                className=" font-semibold backround text-base pl-1 pr-4"
                style={{ color: initialTextColor }}
              >
                Percentege:
              </p>
              <p style={{ color: initialContentColor }}>{percentege}</p>
            </div>
            <a href={location}>
              <div className="flex align-middle">
                <MdLocationPin
                  className="w-6 h-6 backround"
                  style={{ color: initialTextColor }}
                />
                <p
                  className="font-semibold backround text-base pr-4"
                  style={{ color: initialTextColor }}
                >
                  Location:
                </p>
                <p style={{ color: initialContentColor }}>{place}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
  const containerStyle = {
    backgroundColor: darktheme ? "#181818" : "white",
  };

  return (
    <div className="flex flex-col min-h-screen" style={containerStyle}>
      <div>
        <Topbar />
      </div>
      <div className="flex-grow xl:pl-16 justify-center items-center p-4">
        <div
          className="text-3xl backround font-bold pb-2"
          style={{ color: initialTextColor }}
        >
          EDUCATION
        </div>
        <div className="flex justify-center items-center ">
        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 items-center justify-center p-10 gap-4 overflow-scroll">
          <motion.li className="item" variants={item}>
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
            </motion.li>
            <motion.li className="item" variants={item}>
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
             </motion.li>
            <motion.li className="item" variants={item}>
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
             </motion.li>
            <motion.li className="item" variants={item}>
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
             </motion.li>
            <motion.li className="item" variants={item}>
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
            </motion.li>
          </div>
          </motion.ul>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
