import React, { useRef, useState, useEffect } from "react";
import Footer from "./pages/footer";
import Topbar from "./pages/topbar";
import profile from "./profile.jpeg";
import { MdEdit, MdOutlineCancel } from "react-icons/md";
import { BiSave } from "react-icons/bi";
import ReactModal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

import { Carousel } from "@material-tailwind/react";
function App() {
  const hobby = [
    "Music 🎼",
    "Dance 💃",
    "Singing 🎤",
    "Shuttle 🏸",
    "Reading📖",
  ];
  const skill = ["Java", "React", "C", "Python"];
  const [firstName, setFirstName] = useState("SHARMATHA");
  const [lastName, setLastName] = useState("VENKATESWARAN");
  const [age, setAge] = useState("20");
  const [address, setAddress] = useState(
    "27, ANGAMUTHU LANE, NEAR MANDAPAM STREET, ERODE , 638001"
  );
  const [email, setEmail] = useState("sharmatha1823@gmail.com");
  const [contact, setContact] = useState("7904063682");
  const [tempLine1, setTempLine1] = useState("27, ANGAMUTHU LANE");
  const [tempLine2, setTempLine2] = useState("NEAR MANDAPAM STREET");
  const [tempDistrict, setTempDistrict] = useState("ERODE");
  const [tempPincode, setTempPincode] = useState("638001");
  const [tempEmail, setTempEmail] = useState(email);
  const [tempContact, setTempContact] = useState(contact);
  const [tempFirstName, setTempFirstName] = useState(firstName);
  const [tempLastName, setTempLastName] = useState(lastName);
  const [isEditing, setIsEditing] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const firstNameInputRef = useRef(null);

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

  const handleSaveClick = () => {
    setFirstName(tempFirstName);
    setLastName(tempLastName);
    setTempFirstName(firstName);
    setTempLastName(lastName);
    setContact(tempContact);
    setEmail(tempEmail);
    setPassword("");
    const newAddress = [tempLine1, tempLine2, tempDistrict, tempPincode]
      .filter(Boolean)
      .join(", ");
    setAddress(newAddress);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setTempLine1(null);
    setTempLine2(null);
    setTempDistrict(null);
    setTempPincode(null);
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

  useEffect(() => {
    if (isEditing) {
      firstNameInputRef.current.focus();
    }
  }, [isEditing]);

  function Badge({ size, className, children }) {
    const badgeClasses = `rounded-full text-white px-4 py-1 font-normal ${size} ${className}`;

    return <span className={`bg-red-200 ${badgeClasses}`}>{children}</span>;
  }

  return (
    <div className="flex flex-col min-h-screen max-h-screen">
      <div>
        <Topbar />
      </div>
      <div className="flex-grow p-4 xl:p-0">
        <div className="flex overflow-scroll flex-col md:flex-row lg:flex-row  gap-4">
          <div className="flex flex-col lg:p-10">
            <div className="flex justify-between">
              <div className="rounded-full  overflow-hidden w-32 h-32 bg-gray-200 border-2 border-red-200 flex items-center justify-center">
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
                        className="rounded-full bg-red-200 p-2 cursor-pointer"
                      >
                        <MdEdit className="w-5 h-5 text-white rounded-full" />
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
                        className="rounded-full bg-red-200 p-2"
                      >
                        <MdEdit className="w-5 h-5 text-white rounded-full" />
                      </button>
                    )}
                  </div>

                  <ReactModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Authentication Modal"
                    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
                  >
                    <div className="bg-white flex flex-col p-4 rounded-lg shadow-lg">
                      <button
                        onClick={closeModal}
                        className="absolute top-2 right-2 text-gray-600 hover:text-red-200"
                      >
                        <MdOutlineCancel />
                      </button>
                      <p className="font-semibold text-2xl text-red-200 text-center pt-4 ">
                        Hii Sharmatha 🤝
                      </p>
                      <div className=" pl-4 p-5">
                        <p className=" font-bold text-lg  text-red-200">
                          Password:
                        </p>
                        <input
                          placeholder="Enter your password"
                          onChange={(e) => setPassword(e.target.value)}
                          className="border-2 border-red-200 focus:outline-none focus:border-red-200 px-1 py-1 rounded"
                        />
                      </div>
                      <div className="inline-flex justify-center items-center ">
                        <button
                          onClick={handleAuth}
                          className="flex bottom-2 text-red-200 "
                        >
                          <p className="font-semibold">SignIn 🔐</p>
                        </button>
                      </div>
                    </div>
                  </ReactModal>
                </div>
              </div>
            </div>
            <Card className="mt-6 bg-red-100  overflow-scroll md:w-96 lg:w-96 border-red-200 border-2">
              <CardBody>
                <div className="flex flex-col  ">
                  <div>
                    <p className=" font-bold text-lg text-red-200">NAME:</p>

                    {isEditing ? (
                      <>
                        <div className="flex">
                          <input
                            type="text"
                            value={tempFirstName}
                            onChange={(e) => setTempFirstName(e.target.value)}
                            ref={firstNameInputRef}
                            className="border-2 border-red-200 focus:outline-none focus:border-red-200 px-1 py-1 rounded "
                          />
                          <input
                            type="text"
                            value={tempLastName}
                            onChange={(e) => setTempLastName(e.target.value)}
                            ref={firstNameInputRef}
                            className="border-2 border-red-200 focus:outline-none focus:border-red-200 px-1 py-1 rounded "
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="pl-3 text-lg">{`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</p>
                      </>
                    )}
                  </div>
                  <div className="">
                    <p className=" font-bold text-lg  text-red-200">AGE:</p>

                    {isEditing ? (
                      <>
                        <input
                          type="text"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          ref={firstNameInputRef}
                          className="border-2 border-red-200 focus:outline-none focus:border-red-200 px-1 py-1 rounded w-full"
                        />
                      </>
                    ) : (
                      <>
                        <p className="pl-3 text-lg">{age}</p>
                      </>
                    )}
                  </div>
                  <div className="  ">
                    <p className=" font-bold text-lg  text-red-200">ADDRESS:</p>

                    {isEditing ? (
                      <>
                        <div className="flex">
                          <input
                            type="text"
                            placeholder="Line 1"
                            value={tempLine1}
                            onChange={(e) => setTempLine1(e.target.value)}
                            ref={firstNameInputRef}
                            className="border-2 border-red-200 focus:outline-none focus:border-red-200 px-1 py-1 rounded"
                          />
                          <input
                            type="text"
                            placeholder="Line 2"
                            value={tempLine2 || ""}
                            onChange={(e) => setTempLine2(e.target.value)}
                            ref={firstNameInputRef}
                            className="border-2 border-red-200 focus:outline-none focus:border-red-200 px-1 py-1 rounded"
                          />
                        </div>
                        <div className="flex">
                          <input
                            type="text"
                            placeholder="District"
                            value={tempDistrict || ""}
                            onChange={(e) => setTempDistrict(e.target.value)}
                            ref={firstNameInputRef}
                            className="border-2 border-red-200 focus:outline-none focus:border-red-200 px-1 py-1 rounded"
                          />
                          <input
                            type="text"
                            placeholder="Pincode"
                            value={tempPincode || ""}
                            onChange={(e) => setTempPincode(e.target.value)}
                            ref={firstNameInputRef}
                            className="border-2 border-red-200 focus:outline-none focus:border-red-200 px-1 py-1 rounded"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="pl-3 text-lg">{address}</p>
                      </>
                    )}
                  </div>
                  <div className="">
                    <p className=" font-bold text-lg  text-red-200">Ph.No:</p>
                    {isEditing ? (
                      <>
                        <input
                          value={tempContact}
                          ref={firstNameInputRef}
                          onChange={(e) => setTempContact(e.target.value)}
                          type="tel"
                          className="border-2 border-red-200 focus:outline-none focus:border-red-200 px-1 py-1 rounded"
                        />
                      </>
                    ) : (
                      <>
                        <p className="pl-3 text-lg">{contact}</p>
                      </>
                    )}
                  </div>
                  <div className="">
                    <p className=" font-bold text-lg  text-red-200">Email:</p>
                    {isEditing ? (
                      <>
                        <input
                          value={tempEmail}
                          ref={firstNameInputRef}
                          onChange={(e) => setTempEmail(e.target.value)}
                          type="email"
                          className="border-2 border-red-200 focus:outline-none focus:border-red-200 px-1 py-1 rounded"
                        />
                      </>
                    ) : (
                      <>
                        <p className="pl-3 text-lg">{email}</p>
                      </>
                    )}
                  </div>
                  <div className="flex  items-center justify-center ">
                    {isEditing && (
                      <>
                        <button onClick={handleSaveClick}>
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
                  {skill.map(skill=>(
                    <Badge size="sm" className="my-custom-class">
                    {skill}
                  </Badge>
                  ))}
                </ul>
              </CardFooter>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <Card className="mt-6 bg-red-100 md:w-96 xl:w-96 lg:w-64 h-96 border-red-200 border-2 ">
              <CardHeader
                color="blue-gray"
                className="relative h-40 w-40 border-red-100 border-2"
              >
                <img
                  src={skills}
                  className="w-full h-full object-cover "
                  alt="Skills"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Front End Developer
                </Typography>
                <Typography>
                  I am good in teamwork. I finished many webinar courses and I
                  learned basis of different programming languages and
                  interested in problem solving. Learning with android app
                  development.
                </Typography>
              </CardBody>
            </Card>
            <div className="lg:pl-2">
              <Card className="mt-6 bg-red-100 md:w-96 xl:w-96 lg:w-64 h-96 border-red-200 border-2 ">
                <CardHeader className="relative  w-10 border-red-100 border-2">
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
                  <Carousel className="rounded-xl ">
                    <img src={img1} alt="image1" className=" object-cover" />
                    <img src={img2} alt="image2" className="object-cover" />
                    <img src={img3} alt="image3" className="object-cover" />
                    <img src={img4} alt="image4" className="object-cover" />
                  </Carousel>
                </CardBody>
              </Card>
            </div>
            <div className="xl:pl-56">
              <Card className="mt-6 bg-red-100 md:w-96 lg:w-80 xl:w-96 h-56 border-red-200 border-2 ">
                <CardHeader
                  color="blue-gray"
                  className="relative flex h-40 w-28 border-red-100 border-2"
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
                          <Badge size="sm" className="my-custom-class">
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
      <div >
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
