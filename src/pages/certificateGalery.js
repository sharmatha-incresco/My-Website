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
      <div
        className="border-2 items-center justify-center xl:rounded-xl  shadow-sm shadow-gray-500 custom-card "
        style={{ backgroundColor: initialCardColor }}
      >
        <div
          className="flex justify-center hover:scale-105 xl:rounded-lg transform custom-carousel transition-transform shadow-sm shadow-gray-500 custom-card "
          style={{ backgroundColor: initialCardColor }}
        >
          <img
            className="avatar md:h-[450px] md:w-[500px] h-56"
            src={src}
            onClick={HandleClick}
            alt="certificate"
          />
        </div>
        {isMoadlOpen && (
          <div className="fixed inset-0 flex items-center justify-center  z-50 bg-black bg-opacity-50">
            
              <div className="modal p-4 bg-white rounded-lg custom-view  border-2 ">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
              <div>
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
                <div
                  className="p-4 md:text-base text-xs"
                  style={{ color: initialContentColor }}
                >
                  {description}
                </div>
                <div
                  className="flex text-2xl justify-between "
                  style={{ color: initialContentColor }}
                >
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
                </motion.div>
              </div>
           
          </div>
        )}
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
      <div className="flex-grow p-4 xl:pl-16 overflow-scroll ">
        <div className="flex justify-between">
          <h1
            className="text-3xl font-bold backround  "
            style={{ color: initialTextColor }}
          >
            CERTIFICATES
          </h1>
          <button
            onClick={handleAdd}
            className="rounded-full custom-input  p-2  border-2 hover:scale-105 transform transition-transform  hover:border-2 shadow-md shadow-gray-500"
          >
            <MdOutlineAddPhotoAlternate
              className="w-10 h-10 "
              style={{ color: darktheme ? "white" : "black" }}
            />
          </button>

          <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Authentication Modal"
            className="fixed custom-card rounded-lg top-1/2 left-1/2 transform  border-2  -translate-x-1/2 -translate-y-1/2 "
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
                }}
              >
                <div className="bg-white flex flex-col p-4 rounded-lg shadow-md">
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2"
                    style={{ color: initialTextColor }}
                  >
                    <MdOutlineCancel />
                  </button>
                  <p
                    className="font-semibold text-2xl backround text-center pt-4 "
                    style={{ color: initialTextColor }}
                  >
                    Hii Sharmatha 🤝
                  </p>
                  <div className="pl-4 p-5">
                    <p
                      className=" font-bold text-lg  backround"
                      style={{ color: initialTextColor }}
                    >
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
                          <AiFillEyeInvisible
                            className="backround text-lg"
                            style={{ color: initialTextColor }}
                          />
                        ) : (
                          <AiFillEye
                            className="backround text-lg"
                            style={{ color: initialTextColor }}
                          />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="inline-flex justify-center items-center ">
                    <button
                      onClick={handleAuth}
                      className="flex bottom-2 backround "
                    >
                      <p
                        className="font-semibold"
                        style={{ color: initialTextColor }}
                      >
                        SignIn 🔐
                      </p>
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          </ReactModal>

          <ReactModal
            isOpen={isAdd}
            contentLabel="Authentication Modal"
            className="fixed top-1/2 left-1/2 transform rounded-lg  border-2 custom-card -translate-x-1/2 -translate-y-1/2 "
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
                className="absolute top-2 right-2 text-gray-600  "
              >
                <MdOutlineCancel style={{ color: initialTextColor }} />
              </button>
              <div>
                <h2
                  className="backround font-bold"
                  style={{ color: initialTextColor }}
                >
                  Add Image:
                </h2>
                <input
                  type="file"
                  className="border-2 custom-input focus:outline-none px-1 py-1 rounded"
                  onChange={handleChange}
                />
                {selectedFile && (
                  <>
                    <img src={selectedFile} alt="Selected" />
                    <div className="p-4">
                      <input
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                        className="border-2  focus:outline-none custom-input px-1 py-1 rounded w-full"
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
          <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 p-10 gap-10 xl:pr-1">
            <motion.li className="item" variants={item}>
              <div>
                <Profile
                  src={certificate1}
                  description="This is one of my participant certificate in Great Learning"
                />
              </div>
            </motion.li>
            <motion.li className="item" variants={item}>
              <div>
                <Profile
                  src={certificate2}
                  description="This is one of my participant certificate in Great Learning"
                />
              </div>
            </motion.li>
            <motion.li className="item" variants={item}>
              <div>
                <Profile
                  src={certificate3}
                  description="This is one of my participant certificate in Kongu Engineering College"
                />
              </div>
            </motion.li>
            <motion.li className="item" variants={item}>
              <div>
                <Profile
                  src={certificate4}
                  description="This is one of my participant certificate in PALS presentation"
                />
              </div>
            </motion.li>
            <motion.li className="item" variants={item}>
              <div>
                <Profile
                  src={certificate5}
                  description="This is one of my participant certificate in Nipam Awareness program"
                />
              </div>
            </motion.li>
            <motion.li className="item" variants={item}>
              <div>
                <Profile
                  src={certificate6}
                  description="This is one of my participant certificate in Presentation in my college club"
                />
              </div>
            </motion.li>
            <motion.li className="item" variants={item}>
              <div>
                <Profile
                  src={certificate7}
                  description="This is one of my participant certificate in 5days Ethical Hacking workshop"
                />
              </div>
            </motion.li>
            <motion.li className="item" variants={item}>
              <div>
                <Profile
                  src={certificate8}
                  description="This is one of my certificate in RDBMS"
                />
              </div>
            </motion.li>
            <motion.li className="item" variants={item}>
              <div>
                <Profile
                  src={certificate9}
                  description="This is one of my certificate in Java Training"
                />
              </div>
            </motion.li>
            <motion.li className="item" variants={item}>
              <div>
                <Profile
                  src={certificate10}
                  description="This is one of my participant certificate in Unreal Game Engine"
                />
              </div>
            </motion.li>
            <motion.li className="item" variants={item}>
              <div>
                <Profile
                  src={certificate11}
                  description="This is one of my participant certificate in Rotract club of my college"
                />
              </div>
            </motion.li>
            <motion.li className="item" variants={item}>
              <div>
                <Profile
                  src={certificate12}
                  description="This is one of my certificate for the second price in paper presentation of EDC & IIC cell of my college"
                />
              </div>
            </motion.li>
            <motion.li className="item" variants={item}>
              <div>
                <Profile
                  src={certificate13}
                  description="This is the certificate for the posting of PRO in green club of my college"
                />
              </div>
              {selectedFile && (
                <Profile src={selectedFile} description={description} />
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
