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
import ReactModal from "react-modal";

import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdAddPhotoAlternate, MdOutlineCancel } from "react-icons/md";

export default function CertificateGalery() {
  const [isAdd, setIsAdd] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleAdd = () => {
    setIsAdd(true);
    setSelectedFile(null);
  };

  const handleClose = () => {
    setIsAdd(false);
  };

  const handleAddImage = () => {
    setIsAdd(false);
    handleClose();
  };
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };
  function Profile({ src, imageSize = 500 }) {
    const [isMoadlOpen, setModalOpen] = useState(false);

    const HandleClick = () => {
      setModalOpen(true);
    };
    const CloseModal = () => {
      setModalOpen(false);
    };

    return (
      <div className="border-2 items-center  hover:scale-105 transform justify-center transition-transform border-red-300 ">
        <div className="flex justify-center border-red-300  hover:bg-slate-200">
          <img
            alt="certificate"
            className="avatar  md:h-[300px] md:w-[500px]"
            src={src}
            width={imageSize}
            height={imageSize}
            onClick={HandleClick}
          />
        </div>

        {isMoadlOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="modal p-4 bg-red-100 rounded-lg ">
              <button className="modal-close" onClick={CloseModal}>
                <AiFillCloseCircle className="text-red-300 " />
              </button>
              <img
                alt="certificate modal"
                className="modal-image hover "
                src={src}
               
              />
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
          <h1 className="text-3xl font-bold text-red-300 pb-2 underline ">
            CERTIFICATES
          </h1>
          <button onClick={handleAdd}>
            <MdAddPhotoAlternate className="w-10 h-10 text-red-300 pb-2" />
          </button>
          <ReactModal
            isOpen={isAdd}
            contentLabel="Authentication Modal"
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          >
            <div className="bg-white  flex flex-col p-4 rounded-lg shadow-lg">
              <button
                onClick={() => setIsAdd(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-red-300"
              >
                <MdOutlineCancel />
              </button>
              <div >
                <h2 className="text-red-300 font-bold">Add Image:</h2>
                <input type="file" onChange={handleChange} />
                {selectedFile && (
                  <>
                    <img src={selectedFile} alt="Selected" />
                    <button onClick={handleAddImage} className="text-gray-600 hover:text-red-300 font-semibold pt-5 ">Add</button>
                  </>
                )}
              </div>
            </div>
          </ReactModal>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 p-10 gap-10">
          <Profile src={certificate1} />
          <div>
            <Profile src={certificate2} />
          </div>
          <div>
            <Profile src={certificate3} />
          </div>
          <div>
            <Profile src={certificate4} />
          </div>
          <div>
            <Profile src={certificate5} />
          </div>
          <div>
            <Profile src={certificate6} />
          </div>
          <div>
            <Profile src={certificate7} />
          </div>
          <div>
            <Profile src={certificate8} />
          </div>
          <div>
            <Profile src={certificate9} />
          </div>
          <div>
            <Profile src={certificate10} />
          </div>
          <div>
            <Profile src={certificate11} />
          </div>
          {selectedFile && <Profile src={selectedFile} />}
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
