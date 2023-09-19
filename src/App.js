import React, { useRef, useState, useEffect } from "react";
import Footer from "./pages/footer";
import Topbar from "./pages/topbar";
import profile from "./profile.jpeg";
import { MdEdit, MdOutlineCancel } from "react-icons/md";
import { BiSave } from "react-icons/bi";
import ReactModal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
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
  const firstNameInputRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [password, setPassword] = useState("");
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
  useEffect(() => {
    if (isEditing) {
      firstNameInputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className="flex flex-col  min-h-screen">
      <div>
        <Topbar />
      </div>
      <div className="flex-grow">
        <div className="flex justify-center items-start pt-1">
          <div className="  justify-center items-start pt-10 ">
            <div className="rounded-full  overflow-hidden w-32 h-32 bg-gray-200 border-2 border-red-300 flex items-center justify-center">
              <img
                src={profile}
                className="w-32 h-32 object-cover "
                alt="Profile"
              />
            </div>
            <div className="pl-10 pt-2 pb-2">
              <button
                onClick={openModal}
                className="rounded-full bg-red-300 p-2"
              >
                <MdEdit className="w-5 h-5 rounded-full" />
              </button>
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
                  className="absolute top-2 right-2 text-gray-600 hover:text-red-300"
                >
                  <MdOutlineCancel />
                </button>
                <p className="font-semibold text-2xl text-red-300 text-center pt-4 ">
                  Hii Sharmatha 🤝
                </p>
                <div className=" pl-4 p-5">
                  <p className=" font-bold text-lg  text-red-300">Password:</p>
                  <input
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-2 border-red-300 focus:outline-none focus:border-red-300 px-1 py-1 rounded"
                  />
                </div>
                <div className="inline-flex justify-center items-center ">
                  <button
                    onClick={handleAuth}
                    className="flex bottom-2 text-red-300 "
                  >
                    <p className="font-semibold">SignIn 🔐</p>
                  </button>
                </div>
              </div>
            </ReactModal>
          </div>
        </div>

        <div className="flex-row md:p-10 lg:p-10 sm:p-10 p-2 lg:justify-center lg:items-start">
          <div className="flex lg:items-center lg:justify-center">
            <p className=" font-bold text-lg text-red-300">NAME:</p>

            {isEditing ? (
              <>
                <input
                  type="text"
                  value={tempFirstName}
                  onChange={(e) => setTempFirstName(e.target.value)}
                  ref={firstNameInputRef}
                  className="border-2 border-red-300 focus:outline-none focus:border-red-300 px-1 py-1 rounded w-full"
                />
                <input
                  type="text"
                  value={tempLastName}
                  onChange={(e) => setTempLastName(e.target.value)}
                  ref={firstNameInputRef}
                  className="border-2 border-red-300 focus:outline-none focus:border-red-300 px-1 py-1 rounded w-full"
                />
              </>
            ) : (
              <>
                <p className="pl-3 text-lg">{`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</p>
              </>
            )}
          </div>
          <div className="flex lg:items-center lg:justify-center pt-4 pb-4">
            <p className=" font-bold text-lg  text-red-300">AGE:</p>

            {isEditing ? (
              <>
                <input
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  ref={firstNameInputRef}
                  className="border-2 border-red-300 focus:outline-none focus:border-red-300 px-1 py-1 rounded w-full"
                />
              </>
            ) : (
              <>
                <p className="pl-3 text-lg">{age}</p>
              </>
            )}
          </div>
          <div className=" lg:flex md:flex lg:items-center lg:justify-center ">
            <p className=" font-bold text-lg  text-red-300">ADDRESS:</p>

            {isEditing ? (
              <>
                <input
                  type="text"
                  placeholder="Line 1"
                  value={tempLine1}
                  onChange={(e) => setTempLine1(e.target.value)}
                  ref={firstNameInputRef}
                  className="border-2 border-red-300 focus:outline-none focus:border-red-300 px-1 py-1 rounded"
                />
                <input
                  type="text"
                  placeholder="Line 2"
                  value={tempLine2 || ""}
                  onChange={(e) => setTempLine2(e.target.value)}
                  ref={firstNameInputRef}
                  className="border-2 border-red-300 focus:outline-none focus:border-red-300 px-1 py-1 rounded"
                />
                <input
                  type="text"
                  placeholder="District"
                  value={tempDistrict || ""}
                  onChange={(e) => setTempDistrict(e.target.value)}
                  ref={firstNameInputRef}
                  className="border-2 border-red-300 focus:outline-none focus:border-red-300 px-1 py-1 rounded"
                />
                <input
                  type="text"
                  placeholder="Pincode"
                  value={tempPincode || ""}
                  onChange={(e) => setTempPincode(e.target.value)}
                  ref={firstNameInputRef}
                  className="border-2 border-red-300 focus:outline-none focus:border-red-300 px-1 py-1 rounded"
                />
              </>
            ) : (
              <>
                <p className="pl-3 text-lg">{address}</p>
              </>
            )}
          </div>
          <div className="flex lg:items-center lg:justify-center pt-4 pb-4">
            <p className=" font-bold text-lg  text-red-300">Ph.No:</p>
            {isEditing ? (
              <>
                <input
                  value={tempContact}
                  ref={firstNameInputRef}
                  onChange={(e) => setTempContact(e.target.value)}
                  type="tel"
                  className="border-2 border-red-300 focus:outline-none focus:border-red-300 px-1 py-1 rounded"
                />
              </>
            ) : (
              <>
                <p className="pl-3 text-lg">{contact}</p>
              </>
            )}
          </div>
          <div className="flex lg:items-center lg:justify-center">
            <p className=" font-bold text-lg  text-red-300">Email:</p>
            {isEditing ? (
              <>
                <input
                  value={tempEmail}
                  ref={firstNameInputRef}
                  onChange={(e) => setTempEmail(e.target.value)}
                  type="email"
                  className="border-2 border-red-300 focus:outline-none focus:border-red-300 px-1 py-1 rounded"
                />
              </>
            ) : (
              <>
                <p className="pl-3 text-lg">{email}</p>
              </>
            )}
          </div>
       
          <div className="flex md:pt-6 xl:pt-6 lg:pt-6 pt-2 items-center justify-center ">
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
      </div>
      <div>
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
