import Footer from "./footer";
import Topbar from "./topbar";
import certificate1 from "../certi1.jpeg";
import certificate2 from "../certi2.jpeg";
import certificate3 from "../certi3.jpg";
import certificate4 from "../certi4.jpeg";
import certificate5 from "../certi5.jpg";
import certificate6 from "../certi6.jpg";
import certificate7 from "../certi7.jpg";
import certificate8 from "../certi8.jpg";
import certificate9 from "../certi9.jpg";
import certificate10 from "../certi10.jpg";
import certificate11 from "../certi11.jpg";
import certificate12 from "../certi12.jpeg";
import certificate13 from "../certi13.jpeg";
import ReactModal from "react-modal";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineAddPhotoAlternate, MdOutlineCancel } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

export default function CertificateGalery() {
  const [isAdd, setIsAdd] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState();
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
    toast.success("Sucessfully Certificate Added", {
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
  function Profile({ src, imageSize = 500, description }) {
    const [isMoadlOpen, setModalOpen] = useState(false);
    const [emojiCounts, setEmojiCounts] = useState({
      claps: 0,
      thumbsUp: 0,
      thumbsDown: 0,
    });

    const HandleClick = () => {
      setModalOpen(true);
    };
    const CloseModal = () => {
      setModalOpen(false);
    };
    const handleEmojiClick = (emoji) => {
      const updatedEmojiCounts = { ...emojiCounts };
      updatedEmojiCounts[emoji] += 1;
      setEmojiCounts(updatedEmojiCounts);
    };

    return (
      <div className="border-2 items-center justify-center xl:rounded-xl border-blue-200 shadow-md shadow-gray-500 ">
        <div className="flex justify-center hover:scale-105 xl:rounded-lg transform bg-blue-100 transition-transform hover:bg-white hover:border-2 hover:border-blue-100">
          <img
            className="avatar md:h-[450px] md:w-[500px] h-56"
            src={src}
            onClick={HandleClick}
            alt="certificate"
          />
        </div>
        {isMoadlOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="modal p-4 bg-white rounded-lg border-blue-200 border-2 ">
              <button className="modal-close" onClick={CloseModal}>
                <AiFillCloseCircle />
              </button>
              <img
                className="modal-image"
                src={src}
                width={imageSize}
                height={imageSize}
                alt="modal"
              />
              <div className="p-4 md:text-base text-xs">{description}</div>
              <div className="flex text-2xl justify-between ">
                <button onClick={() => handleEmojiClick("claps")}>
                  👏 {emojiCounts.claps}
                </button>
                <button onClick={() => handleEmojiClick("thumbsUp")}>
                  👍 {emojiCounts.thumbsUp}
                </button>
                <button onClick={() => handleEmojiClick("thumbsDown")}>
                  👎 {emojiCounts.thumbsDown}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Topbar />
      </div>
      <div className="flex-grow p-4 overflow-scroll ">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-blue-200  ">CERTIFICATES</h1>
          <button
            onClick={handleAdd}
            className="rounded-full bg-blue-100 p-2 border-blue-200 border-2 hover:scale-105 transform transition-transform hover:bg-blue-100 hover:border-2 hover:border-blue-200 shadow-md shadow-gray-500"
          >
            <MdOutlineAddPhotoAlternate className="w-10 h-10 " />
          </button>
          <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Authentication Modal"
            className="fixed top-1/2 left-1/2 transform  border-2 border-blue-200 -translate-x-1/2 -translate-y-1/2 "
          >
            <div className="bg-white flex flex-col p-4 rounded-lg shadow-md">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-blue-200"
              >
                <MdOutlineCancel />
              </button>
              <p className="font-semibold text-2xl text-blue-200 text-center pt-4 ">
                Hii Sharmatha 🤝
              </p>
              <div className=" pl-4 p-5">
                <p className=" font-bold text-lg  text-blue-200">Password:</p>
                <div className="flex gap-2">
                  <input
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-2 border-blue-200 focus:outline-none focus:border-blue-200 px-1 py-1 rounded"
                  />

                  <button onClick={passwordVisibility} className="">
                    {showPassword ? (
                      <AiFillEyeInvisible className="text-blue-300 text-lg" />
                    ) : (
                      <AiFillEye className="text-blue-300 text-lg" />
                    )}
                  </button>
                </div>
              </div>
              <div className="inline-flex justify-center items-center ">
                <button
                  onClick={handleAuth}
                  className="flex bottom-2 text-blue-200 "
                >
                  <p className="font-semibold">SignIn 🔐</p>
                </button>
              </div>
            </div>
          </ReactModal>
          <ReactModal
            isOpen={isAdd}
            contentLabel="Authentication Modal"
            className="fixed top-1/2 left-1/2 transform  border-2 border-blue-200 -translate-x-1/2 -translate-y-1/2 "
          >
            <div className="bg-white  flex flex-col p-4 rounded-lg shadow-md">
              <button
                onClick={() => setIsAdd(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-blue-200 "
              >
                <MdOutlineCancel />
              </button>
              <div>
                <h2 className="text-blue-200 font-bold">Add Image:</h2>
                <input
                  type="file"
                  className="border-2 border-blue-200 focus:outline-none focus:border-blue-200 px-1 py-1 rounded"
                  onChange={handleChange}
                />
                {selectedFile && (
                  <>
                    <img src={selectedFile} alt="Selected" />
                    <div className="p-4">
                      <input
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                        className="border-2 border-blue-200 focus:outline-none focus:border-blue-200 px-1 py-1 rounded w-full"
                      />
                    </div>
                    <button
                      onClick={handleAddImage}
                      className="text-blue-200 font-semibold pt-5 "
                    >
                      Add
                    </button>
                  </>
                )}
              </div>
            </div>
          </ReactModal>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 p-10 gap-10">
          <Profile
            src={certificate1}
            description="This is one of my participant certificate in Great Learning"
          />
          <div>
            <Profile
              src={certificate2}
              description="This is one of my participant certificate in Great Learning"
            />
          </div>
          <div>
            <Profile
              src={certificate3}
              description="This is one of my participant certificate in Kongu Engineering College"
            />
          </div>
          <div>
            <Profile
              src={certificate4}
              description="This is one of my participant certificate in PALS presentation"
            />
          </div>
          <div>
            <Profile
              src={certificate5}
              description="This is one of my participant certificate in Nipam Awareness program"
            />
          </div>
          <div>
            <Profile
              src={certificate6}
              description="This is one of my participant certificate in Presentation in my college club"
            />
          </div>
          <div>
            <Profile
              src={certificate7}
              description="This is one of my participant certificate in 5days Ethical Hacking workshop"
            />
          </div>
          <div>
            <Profile
              src={certificate8}
              description="This is one of my certificate in RDBMS"
            />
          </div>
          <div>
            <Profile
              src={certificate9}
              description="This is one of my certificate in Java Training"
            />
          </div>
          <div>
            <Profile
              src={certificate10}
              description="This is one of my participant certificate in Unreal Game Engine"
            />
          </div>
          <div>
            <Profile
              src={certificate11}
              description="This is one of my participant certificate in Rotract club of my college"
            />
          </div>
          <div>
            <Profile
              src={certificate12}
              description="This is one of my certificate for the second price in paper presentation of EDC & IIC cell of my college"
            />
          </div>
          <div>
            <Profile
              src={certificate13}
              description="This is the certificate for the posting of PRO in green club of my college"
            />
          </div>
          {selectedFile && (
            <Profile src={selectedFile} description={description} />
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
