import Footer from "./footer";
import Topbar from "./topbar";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
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
      <Card className="mt-6 custom-card md:w-96 xl:w-96 lg:w-64 h-96  border-2 hover:scale-105 transform transition-transform  hover:border-2 shadow-sm shadow-gray-500" style={{backgroundColor:initialCardColor}}>
        <CardHeader className="relative h-40 w-40 custom-input border-2 p-3">
          <a href={website}>
            <img src={src} className="w-full h-full object-cover " alt="wrk" />
          </a>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col justify-between gap-2">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {role}
            </Typography>
            <Typography variant="h4" className="mb-2">
              {company}
            </Typography>
            <Typography variant="h5" className="mb-2">
              📆 {duration}
            </Typography>
            <Typography variant="h5" className="mb-2">
              <a href={location}>📍 {place}</a>
            </Typography>
            <Typography variant="h5" className="mb-2">
              💻 {type}
            </Typography>
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
          <h1 className="text-3xl font-bold backround">EXPERIENCE</h1>
          <button
            onClick={handleAdd}
            className="rounded-full custom-input p-2 border-2 hover:scale-105 transform transition-transform  hover:border-2 shadow-md shadow-gray-500"
          >
            <BsBuildingAdd className="w-10 h-10 " style={{ color: darktheme ? "white" : "black" }} />
          </button>
          <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Authentication Modal"
            className="fixed top-1/2 rounded-lg left-1/2 transform -translate-x-1/2  border-2 custom-card -translate-y-1/2 "
          >
            <div className="bg-white flex flex-col p-4 rounded-lg shadow-md">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-600 "
              >
                <MdOutlineCancel />
              </button>
              <p className="font-semibold text-2xl backround text-center pt-4 ">
                Hii Sharmatha 🤝
              </p>
              <div className=" pl-4 p-5">
                <p className=" font-bold text-lg  backround">Password:</p>
                <div className="flex gap-2">
                  <input
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-2 custom-input focus:outline-none  px-1 py-1 rounded"
                  />

                  <button onClick={passwordVisibility} className="">
                    {showPassword ? (
                      <AiFillEyeInvisible className="backround text-lg" />
                    ) : (
                      <AiFillEye className="backround text-lg" />
                    )}
                  </button>
                </div>
              </div>
              <div className="inline-flex justify-center items-center ">
                <button
                  onClick={handleAuth}
                  className="flex bottom-2 backround "
                >
                  <p className="font-semibold">SignIn 🔐</p>
                </button>
              </div>
            </div>
          </ReactModal>
          <ReactModal
            isOpen={isAdd}
            contentLabel="Authentication Modal"
            className="fixed top-1/2 rounded-lg left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 custom-card overflow-scroll "
          >
            <div className="bg-white  flex flex-col p-4 rounded-lg shadow-md">
              <button
                onClick={() => setIsAdd(false)}
                className="absolute top-2 right-2 text-gray-600 "
              >
                <MdOutlineCancel />
              </button>
              <div>
                <h2 className="backround font-bold">Add logo:</h2>
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
                    >
                      Add
                    </button>
                  </>
                )}
              </div>
            </div>
          </ReactModal>
        </div>
        <div className="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
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
        </div>
        <ToastContainer />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Experience;
