import Footer from "./footer";
import Topbar from "./topbar";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import incresco from "../incresco.logo.jpeg";
import mednucleus from "../mednucleus.jpeg";
import greenclub from "../greenclub.jpeg";
import pylamp from "../pylamp.jpeg";
import pals from "../pals.jpeg";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import ReactModal from "react-modal";
import { darktheme } from "../globalstate";
import { MdOutlineCancel } from "react-icons/md";
import { BsBuildingAdd } from "react-icons/bs";
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
function Experience() {
  const [isAdd, setIsAdd] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [role, setRole] = useState();
  const [company, setCompany] = useState();
  const [duration, setDuration] = useState();
  const [place, setPlace] = useState();
  const [type, setType] = useState();
  const [website, setWebsite] = useState();
  const [location, setLocation] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showPassword, setShowpassword] = useState(false);
  const [password, setPassword] = useState("");
  const handleAdd = () => {
    setModalIsOpen(true);
    setSelectedFile(null);
  };

  const handleClose = () => {
    setIsAdd(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setPassword("");
  };
  const handleAuth = () => {
    if (password === "sharmatha@18") {
      setIsAdd(true);
      setModalIsOpen(false);
    } else {
      toast.error("Sorry Wrong Password", {
        hideProgressBar: true,
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1000,
      });
    }
  };

  const handleAddImage = () => {
    toast.success("Sucessfully Experience Added", {
      hideProgressBar: true,
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1000,
    });
    setIsAdd(false);
    handleClose();
  };
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };
  const passwordVisibility = () => {
    setShowpassword(!showPassword);
  };
  function Work({
    src,
    role,
    company,
    duration,
    place,
    type,
    location,
    website,
  }) {
    return (
      <Card
        className="mt-6 custom-card md:w-96 xl:w-96 lg:w-64 h-96  border-2 hover:scale-105 transform transition-transform  hover:border-2 shadow-sm shadow-gray-500"
        style={{ backgroundColor: initialCardColor }}
      >
        <CardHeader className="relative h-40 w-40 custom-input border-2 p-3">
          <a href={website}>
            <img src={src} className="w-full h-full object-cover " alt="wrk" />
          </a>
        </CardHeader>
        <CardBody>
          <div
            className="flex flex-col justify-between gap-2"
            style={{ color: initialContentColor }}
          >
            <p
              className="text-2xl mb-2 font-bold"
              style={{ color: initialTextColor }}
            >
              {role}
            </p>
            <p className="text-2xl font-semibold mb-2">{company}</p>
            <p className=" text-1xl mb-2">📆 {duration}</p>
            <p className=" text-1xl mb-2">
              <a href={location}>📍 {place}</a>
            </p>
            <p className="text-1xl mb-2">💻 {type}</p>
          </div>
        </CardBody>
      </Card>
    );
  }
  const containerStyle = {
    backgroundColor: darktheme ? "#181818" : "white",
  };

  return (
    <div className="flex flex-col  min-h-screen" style={containerStyle}>
      <div>
        <Topbar />
      </div>
      <div className="flex-grow p-4 xl:pl-16 items-center justify-center">
        <div className="flex justify-between">
          <h1
            className="text-3xl font-bold backround"
            style={{ color: initialTextColor }}
          >
            EXPERIENCE
          </h1>
          <button
            onClick={handleAdd}
            className="rounded-full custom-input p-2 border-2 hover:scale-105 transform transition-transform  hover:border-2 shadow-md shadow-gray-500"
          >
            <BsBuildingAdd
              className="w-10 h-10 "
              style={{ color: darktheme ? "white" : "black" }}
            />
          </button>
          <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Authentication Modal"
            className="fixed top-1/2 rounded-lg left-1/2 transform -translate-x-1/2  border-2 custom-card -translate-y-1/2 "
          >
            <>
            <motion.div
                className="container"
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}>
            <div className="bg-white flex flex-col p-4 rounded-lg shadow-md">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-600 "
              >
                <MdOutlineCancel />
              </button>
              <p className="font-semibold text-2xl backround text-center pt-4  " style={{color:initialTextColor}}>
                Hii Sharmatha 🤝
              </p>
              <div className=" pl-4 p-5">
                <p className=" font-bold text-lg  backround" style={{color:initialTextColor}} >Password:</p>
                <div className="flex gap-2">
                  <input
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-2 custom-input focus:outline-none  px-1 py-1 rounded"
                  />

                  <button onClick={passwordVisibility} className="">
                    {showPassword ? (
                      <AiFillEyeInvisible className="backround text-lg" style={{color:initialTextColor}} />
                    ) : (
                      <AiFillEye className="backround text-lg" style={{color:initialTextColor}} />
                    )}
                  </button>
                </div>
              </div>
              <div className="inline-flex justify-center items-center ">
                <button
                  onClick={handleAuth}
                  className="flex bottom-2 backround "
                >
                  <p className="font-semibold" style={{color:initialTextColor}}>SignIn 🔐</p>
                </button>
              </div>
            </div>
            </motion.div>
            </>
          </ReactModal>
          <ReactModal
            isOpen={isAdd}
            contentLabel="Authentication Modal"
            className="fixed top-1/2 rounded-lg left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 custom-card overflow-scroll "
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <div className="bg-white  flex flex-col p-4 rounded-lg shadow-md">
                <button
                  onClick={() => setIsAdd(false)}
                  className="absolute top-2 right-2 text-gray-600 "
                >
                  <MdOutlineCancel style={{ color: initialTextColor }} />
                </button>
                <div>
                  <h2
                    className="backround font-bold"
                    style={{ color: initialTextColor }}
                  >
                    Add logo:
                  </h2>
                  <input
                    type="file"
                    className="border-2 custom-input focus:outline-none  px-1 py-1 rounded"
                    onChange={handleChange}
                  />
                  {selectedFile && (
                    <>
                      <img src={selectedFile} alt="Selected" />
                      <div className="grid grid-cols-2 gap-2 p-4">
                        <input
                          placeholder="Role"
                          onChange={(e) => setRole(e.target.value)}
                          className="border-2  custom-input focus:outline-none  px-1 py-1 rounded w-full"
                        />
                        <input
                          placeholder="Company"
                          onChange={(e) => setCompany(e.target.value)}
                          className="border-2 custom-input focus:outline-none  px-1 py-1 rounded w-full"
                        />
                        <input
                          placeholder="Website"
                          onChange={(e) => setWebsite(e.target.value)}
                          className="border-2 custom-input focus:outline-none  px-1 py-1 rounded w-full"
                        />
                        <input
                          placeholder="Duration"
                          onChange={(e) => setDuration(e.target.value)}
                          className="border-2 custom-input focus:outline-none  px-1 py-1 rounded w-full"
                        />
                        <input
                          placeholder="Place"
                          onChange={(e) => setPlace(e.target.value)}
                          className="border-2 custom-input focus:outline-none  px-1 py-1 rounded w-full"
                        />
                        <input
                          placeholder="Type"
                          onChange={(e) => setType(e.target.value)}
                          className="border-2 custom-input focus:outline-none  px-1 py-1 rounded w-full"
                        />
                        <input
                          placeholder="Location"
                          onChange={(e) => setLocation(e.target.value)}
                          className="border-2 custom-input focus:outline-none  px-1 py-1 rounded w-full"
                        />
                      </div>
                      <button
                        onClick={handleAddImage}
                        className="backround font-semibold pt-5 "
                        style={{ color: initialTextColor }}
                      >
                        Add
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </ReactModal>
        </div>
        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <motion.li className="item" variants={item}>
              <Work
                src={incresco}
                place="Bengaluru, Karnataka, India"
                type="On-Site"
                company=" 🏢 Incresco"
                role=" Front End Developer Intern"
                duration="June-2022 - Now"
                location="https://maps.app.goo.gl/UCzcH45uuvBXxatv7"
                website="https://www.increscotech.com/"
              />
            </motion.li>
            <motion.li className="item" variants={item}>
              <Work
                src={pylamp}
                place="Erode, TamilNadu, India"
                type="On-Site"
                company=" 🏫 VCET"
                role=" Senior Pymentor "
                duration="Jul 2022 - Now"
                location="https://maps.app.goo.gl/TZ3A8tLxULhucNJK6?g_st=iw"
                website="https://velalarengg.ac.in/"
              />
            </motion.li>
            <motion.li className="item" variants={item}>
              <Work
                src={mednucleus}
                place="Erode, TamilNadu, India"
                type="Remote"
                company=" 🏢 Mednucleus "
                role=" Student Intern "
                duration="Jul 2022 - Jan 2023 · (7mos)"
                location="https://maps.app.goo.gl/CUDGcvV4x1a1AWAbA"
                website="https://www.mednucleus.in/"
              />
            </motion.li>
            <motion.li className="item" variants={item}>
              <Work
                src={greenclub}
                place="Erode, TamilNadu, India"
                type="On-Site"
                company=" 🏫 VCET"
                role=" Senior Public Relations Officer "
                duration="Aug 2022 - Jun 2023 · (11mos)"
                location="https://maps.app.goo.gl/TZ3A8tLxULhucNJK6?g_st=iw"
                website="https://velalarengg.ac.in/"
              />
            </motion.li>
            <motion.li className="item" variants={item}>
              <Work
                src={pylamp}
                place="Erode, TamilNadu, India"
                type="On-Site"
                company=" 🏫 VCET"
                role="Pymentor "
                duration="Sep 2022 - May 2023 · (9mos)"
                location="https://maps.app.goo.gl/TZ3A8tLxULhucNJK6?g_st=iw"
                website="https://velalarengg.ac.in/"
              />
            </motion.li>
            <motion.li className="item" variants={item}>
              <Work
                src={pals}
                place="Erode, TamilNadu, India"
                type="On-Site"
                company=" 🏫 VCET"
                role=" Department Student Coordinator"
                duration="Jul 2022 - May 2023 · (11mos)"
                location="https://maps.app.goo.gl/TZ3A8tLxULhucNJK6?g_st=iw"
                website="https://velalarengg.ac.in/"
              />
            </motion.li>
            <motion.li className="item" variants={item}>
              <Work
                src={pylamp}
                place="Erode, TamilNadu, India"
                type="On-Site"
                company=" 🏫 VCET"
                role="Pymentor "
                duration="Oct 2021 - May 2022 · (8mos)"
                location="https://maps.app.goo.gl/TZ3A8tLxULhucNJK6?g_st=iw"
                website="https://velalarengg.ac.in/"
              />
            </motion.li>
            <motion.li className="item" variants={item}>
              {selectedFile && (
                <Work
                  src={selectedFile}
                  place={place}
                  type={type}
                  company={company}
                  role={role}
                  duration={duration}
                  location={location}
                  website={website}
                />
              )}
            </motion.li>
          </div>
        </motion.ul>
        <ToastContainer />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Experience;
