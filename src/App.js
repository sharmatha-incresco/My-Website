import React, { useState } from "react";
import Footer from "./pages/footer";
import Topbar from "./pages/topbar";
import profile from "./profile.jpeg";
import { MdEdit, MdOutlineCancel } from "react-icons/md";
import { BiSave, BiSun } from "react-icons/bi";
import ReactModal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, Controller } from "react-hook-form";
import { SketchPicker } from "react-color";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import skills from "./skills.jpg";
import hobbies from "./hobbies.jpg";
import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import img3 from "./img3.jpeg";
import img4 from "./img4.jpeg";
import img5 from "./img5.jpeg";
import "./App.css";
import { Carousel } from "@material-tailwind/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { HiOutlineMoon } from "react-icons/hi";
import { useDarktheme } from "./globalstate";
import { useCardColor } from "./useCardColor";
function App() {
  const hobby = [
    "Music 🎼",
    "Dance 💃",
    "Singing 🎤",
    "Shuttle 🏸",
    "Reading📖",
  ];
  const skill = ["Java", "React", "C", "Python"];
  const [darktheme, toggleTheme] = useDarktheme();
  const [isEditing, setIsEditing] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPassword, setShowpassword] = useState(false);
  const [cardColor, changeCardColor] = useCardColor();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { handleSubmit, control, reset, formState } = useForm({
    defaultValues: {
      firstName: "Sharmatha",
      lastName: "Venkateswaran",
      age: "20",
      tempLine1: "27, Angamuthu Lane",
      tempLine2: "Near Mandapam Street",
      tempDistrict: "Erode",
      tempPincode: "638001",
      tempContact: "7904063682",
      tempEmail: "sharmatha1823@gmail.com",
    },
  });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setPassword("");
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (data) => {
    setIsEditing(false);
  };
  const handleCancelClick = () => {
    reset();
    setIsEditing(false);
    setSelectedFile("");
  };
  const handleAuth = () => {
    if (password === "sharmatha@18") {
      handleEditClick();
      setModalIsOpen(false);
    } else {
      toast.error("Sorry Wrong Password", {
        hideProgressBar: true,
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1000,
      });
    }
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

  function Badge({ size, className, children }) {
    const badgeClasses = `rounded-full text-white px-4 py-1 font-normal ${size} ${className}`;

    return <span className={`bg-blue-200 ${badgeClasses}`}>{children}</span>;
  }
  const containerStyle = {
    backgroundColor: darktheme ? "#181818" : "white",
  };
  const handleColorChange = (color) => {
    changeCardColor(color.hex);
  };
  return (
    <div
      className="flex flex-col min-h-screen max-h-screen"
      style={containerStyle}
    >
      <div>
        <Topbar />
       </div>

      <div className="flex-grow p-4 xl:p-0" style={containerStyle}>
      <div className="flex justify-end items-center pr-1 gap-4 pt-2">
          {!darktheme ? (
            <button
              onClick={() => toggleTheme(true)}
              className="rounded-full custom-input  p-1  border-2 hover:scale-105 transform transition-transform  hover:border-2 shadow-md shadow-gray-500 "
            >
              <HiOutlineMoon
                className="w-7 h-7"
                style={{ color: darktheme ? "white" : "black" }}
              />
            </button>
          ) : (
            <button
              onClick={() => toggleTheme(false)}
              className="rounded-full  p-1  border-2 hover:scale-105 transform transition-transform  hover:border-2 shadow-md shadow-gray-500 "
            >
              <BiSun
                className="w-7 h-7"
                style={{ color: darktheme ? "white" : "black" }}
              />
            </button>
          )}
          <div className="flex justify-end items-center pr-1 pt-2">
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              className=" text-3xl hover:scale-105 transform transition-transform  "
            >
              🎨
            </button>
            {showColorPicker && (
              <SketchPicker
                color={cardColor}
                onChangeComplete={handleColorChange}
                className="absolute z-50 top-28"
              />
            )}
          </div>
        </div>
        <div className="flex overflow-scroll flex-col md:flex-row lg:flex-row  gap-4">
          
          <div className="flex flex-col lg:p-10">
            <div className="flex justify-between">
              <div
                className="rounded-full  overflow-hidden w-32 h-32 bg-gray-200 border-2 custom-card flex items-center justify-center"
                style={{ backgroundColor: cardColor }}
              >
                {isEditing ? (
                  <div className="relative group">
                    <img
                      src={selectedFile || profile}
                      className="w-32 h-32 object-cover"
                      alt="edit Profile"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <label
                        htmlFor="imageInput"
                        className="rounded-full custom-badge p-2 cursor-pointer "
                      >
                        <MdEdit className="w-5 h-5 text-white rounded-full " />
                        <input
                          type="file"
                          id="imageInput"
                          accept="image/*"
                          onChange={handleChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedFile || profile}
                    className="w-32 h-32 object-cover"
                    alt="Profile"
                  />
                )}
              </div>
              <div className="flex justify-center items-start pt-20 relative">
                <div className="  justify-center items-start ">
                  <div className=" pb-2">
                    {!isEditing && (
                      <button
                        onClick={openModal}
                        className="rounded-full custom-input p-2  border-2 hover:scale-105 transform transition-transform hover:border-2  shadow-md shadow-gray-500"
                      >
                        <MdEdit
                          className="w-5 h-5 background rounded-full"
                          style={{ color: darktheme ? "white" : "black" }}
                        />
                      </button>
                    )}
                  </div>

                  <ReactModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Authentication Modal"
                    className="fixed custom-card rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white "
                  >
                    <div className="flex flex-col p-4 rounded-lg shadow-md ">
                      <button
                        onClick={closeModal}
                        className="absolute top-2  right-2 text-gray-600"
                      >
                        <MdOutlineCancel />
                      </button>
                      <p className="font-semibold text-2xl backround text-center pt-4">
                        Hii Sharmatha 🤝
                      </p>

                      <div className=" pl-4 p-5">
                        <p className=" font-bold text-lg backround ">
                          Password:
                        </p>
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
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit(handleSaveClick)}>
              <Card
                className="mt-6 custom-card overflow-scroll md:w-96 lg:w-96  border-2 hover:scale-90 transform transition-transform hover:bg-white hover:border-2  shadow-md shadow-gray-500"
                style={{ backgroundColor: cardColor }}
              >
                <CardBody>
                  <div className="flex flex-col  ">
                    <div>
                      <p className=" font-bold backround text-lg ">NAME:</p>

                      {isEditing ? (
                        <>
                          <div className="flex">
                            <Controller
                              name="firstName"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <input
                                  {...field}
                                  type="text"
                                  className="border-2 focus:outline-none 
                                  custom-input px-1 py-1 rounded "
                                />
                              )}
                            />
                            <Controller
                              name="lastName"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <input
                                  {...field}
                                  type="text"
                                  className="border-2  focus:outline-none 
                                  custom-input px-1 py-1 rounded "
                                />
                              )}
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <p className="pl-3 text-lg ">{`${formState.defaultValues.firstName} ${formState.defaultValues.lastName}`}</p>
                        </>
                      )}
                    </div>
                    <div className="">
                      <p className=" font-bold text-lg backround">AGE:</p>

                      {isEditing ? (
                        <>
                          <Controller
                            name="age"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <input
                                {...field}
                                type="text"
                                className="border-2  focus:outline-none custom-input px-1 py-1 rounded w-full"
                              />
                            )}
                          />
                        </>
                      ) : (
                        <>
                          <p className="pl-3 text-lg">
                            {formState.defaultValues.age}
                          </p>
                        </>
                      )}
                    </div>
                    <div className="  ">
                      <p className=" font-bold text-lg  backround ">ADDRESS:</p>

                      {isEditing ? (
                        <>
                          <div className="flex">
                            <Controller
                              name="tempLine1"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <input
                                  {...field}
                                  type="text"
                                  placeholder="Line 1"
                                  className="border-2 focus:outline-none custom-input px-1 py-1 rounded"
                                />
                              )}
                            />
                            <Controller
                              name="tempLine2"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <input
                                  {...field}
                                  type="text"
                                  placeholder="Line 2"
                                  className="border-2  focus:outline-none custom-input px-1 py-1 rounded"
                                />
                              )}
                            />
                          </div>
                          <div className="flex">
                            <Controller
                              name="tempDistrict"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <input
                                  {...field}
                                  type="text"
                                  placeholder="District"
                                  className="border-2 custom-input focus:outline-none  px-1 py-1 rounded"
                                />
                              )}
                            />
                            <Controller
                              name="tempPincode"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <input
                                  {...field}
                                  type="text"
                                  placeholder="Pincode"
                                  className="border-2 custom-input focus:outline-none  px-1 py-1 rounded"
                                />
                              )}
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <p className="pl-3 text-lg">{`${formState.defaultValues.tempLine1},${formState.defaultValues.tempLine2},${formState.defaultValues.tempDistrict},${formState.defaultValues.tempPincode} `}</p>
                        </>
                      )}
                    </div>
                    <div className="">
                      <p className=" font-bold text-lg  backround">Ph.No:</p>
                      {isEditing ? (
                        <>
                          <Controller
                            name="tempContact"
                            control={control}
                            defaultValue=""
                            rules={{
                              required: "Contact number is required",
                              pattern: {
                                value: /^\d{10}$/,
                                message: "Invalid contact number format",
                              },
                            }}
                            render={({ field }) => (
                              <div>
                                <input
                                  {...field}
                                  type="tel"
                                  className="border-2 custom-input focus:outline-none  px-1 py-1 rounded"
                                />
                                {formState.errors.tempContact && (
                                  <p className="text-red-500">
                                    {formState.errors.tempContact.message}
                                  </p>
                                )}
                              </div>
                            )}
                          />
                        </>
                      ) : (
                        <>
                          <p className="pl-3 text-lg">
                            {formState.defaultValues.tempContact}
                          </p>
                        </>
                      )}
                    </div>
                    <div className="">
                      <p className=" font-bold text-lg  backround">Email:</p>
                      {isEditing ? (
                        <>
                          <Controller
                            name="tempEmail"
                            control={control}
                            defaultValue=""
                            rules={{
                              required: "Email is required",
                              pattern: {
                                value:
                                  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                                message: "Invalid email format",
                              },
                            }}
                            render={({ field }) => (
                              <div>
                                <input
                                  {...field}
                                  type="email"
                                  className="border-2 custom-input focus:outline-none px-1 py-1 rounded"
                                />
                                {formState.errors.tempEmail && (
                                  <p className="text-red-500">
                                    {formState.errors.tempEmail.message}
                                  </p>
                                )}
                              </div>
                            )}
                          />
                        </>
                      ) : (
                        <>
                          <p className="pl-3 text-lg">
                            {formState.defaultValues.tempEmail}
                          </p>
                        </>
                      )}
                    </div>
                    <div className="flex  items-center justify-center ">
                      {isEditing && (
                        <>
                          <button type="submit">
                            <BiSave className="w-6 h-6" />
                          </button>
                          <div className="pl-10 pt-1">
                            <button onClick={handleCancelClick} className="">
                              <MdOutlineCancel className="w-6 h-6" />
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="pt-0">
                  <ul className="grid grid-cols-2 gap-4">
                    {skill.map((skill, index) => (
                      <li key={index}>
                        <Badge size="sm" className="custom-badge">
                          {skill}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardFooter>
              </Card>
            </form>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <Card className="mt-6  md:w-96 xl:w-96 lg:w-64 h-96 custom-card border-2 hover:scale-90 transform transition-transform hover:bg-white hover:border-2 hover:border-blue-100 shadow-sm shadow-gray-500"
             style={{ backgroundColor: cardColor }}>
              <CardHeader
                color="blue-gray"
                className="relative h-40 w-40 custom-input border-2"
              >
                <img
                  src={skills}
                  className="w-full h-full object-cover  "
                  alt="Skills"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" className="mb-2 backround">
                  Front End Developer
                </Typography>
                <Typography>
                  I excel in teamwork and have completed numerous webinar
                  courses, gaining a solid foundation in various programming
                  languages. My passion lies in problem-solving, with a
                  particular focus on React for front-end development. I'm
                  dedicated to honing my skills in this area.
                </Typography>
              </CardBody>
            </Card>
            <div className="lg:pl-2">
              <Card className="mt-6  md:w-96 custom-card xl:w-96 lg:w-64 h-96 border-2 hover:scale-90 transform transition-transform hover:bg-white hover:border-2 hover:border-blue-100 shadow-md shadow-gray-500 "
               style={{ backgroundColor: cardColor }}>
                <CardHeader className="relative  w-10 custom-input border-2">
                  <div>
                    <span
                      role="img"
                      aria-label="camera icon"
                      className="text-3xl pl-0.5"
                    >
                      📸
                    </span>
                  </div>
                </CardHeader>

                <CardBody className="pt-1">
                  <Carousel className="rounded-xl">
                    <img src={img1} alt="image1" className=" object-cover" />
                    <img src={img2} alt="image2" className="object-cover" />
                    <img src={img3} alt="image3" className="object-cover" />
                    <img src={img4} alt="image4" className="object-cover" />
                    <img src={img5} alt="image5" className="object-cover" />
                  </Carousel>
                </CardBody>
              </Card>
            </div>
            <div className="xl:pl-56 pb-3">
              <Card className="mt-6 custom-card md:w-96 lg:w-80 xl:w-96 h-56  border-2 hover:scale-90 shadow-md  shadow-gray-500 transform transition-transform  hover:border-2 "
               style={{ backgroundColor: cardColor }}>
                <CardHeader
                  color="blue-gray"
                  className="relative flex h-40 w-28 custom-input border-2"
                >
                  <img
                    src={hobbies}
                    className="w-full h-full object-cover"
                    alt="hobbies"
                  />
                </CardHeader>
                <CardBody>
                  <>
                    <ul className="grid grid-cols-2 gap-4">
                      {hobby.map((hobby, index) => (
                        <li key={index}>
                          <Badge size="sm" className="custom-badge">
                            {hobby}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
