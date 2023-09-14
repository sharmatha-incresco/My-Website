import Footer from "./footer";
import Topbar from "./topbar";
import certificate1 from "../certi1.jpeg";
import certificate2 from "../certi2.jpeg";
import certificate4 from "../certi4.jpeg";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
export default function CertificateGalery() {
  function Profile({ src, imageSize = 500 }) {
    const [isMoadlOpen, setModalOpen] = useState(false);
    const HandleClick = () => {
      setModalOpen(true);
    };
    const CloseModal = () => {
      setModalOpen(false);
    };
    return (
      <div className="border-2 items-center justify-center border-red-300 ">
        <div className="flex justify-center">
          <img
            className="avatar"
            src={src}
            width={imageSize}
            height={imageSize}
            onClick={HandleClick}
          />
        </div>
        {isMoadlOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="modal p-4 bg-white rounded-lg ">
              <button className="modal-close" onClick={CloseModal}>
                <AiFillCloseCircle />
              </button>
              <img
                className="modal-image"
                src={src}
                width={imageSize}
                height={imageSize}
                alt="Profile Image"
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
        <h1 className="text-3xl font-bold text-red-300 pb-2 underline ">
          CERTIFICATES
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 p-10 gap-10">
          <Profile src={certificate1} />
          <div>
            <Profile src={certificate1} />
          </div>
          <div>
            <Profile src={certificate4} />
          </div>
          <div>
            <Profile src={certificate4} />
          </div>
          <div>
            <Profile src={certificate2} />
          </div>
          <div>
            <Profile src={certificate2} />
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
