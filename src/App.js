import React, { useRef, useState, useEffect } from "react";
import Footer from "./pages/footer";
import Topbar from "./pages/topbar";
import profile from "./profile.jpeg";
import { MdEdit, MdOutlineCancel } from "react-icons/md";
import { BiSave } from "react-icons/bi";

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
                onClick={handleEditClick}
                className="rounded-full bg-red-300  p-2"
              >
                <MdEdit className="w-5 h-5 rounded-full" />
              </button>
            </div>
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
                  value={tempLine1 || ""}
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
       
        <div className="flex pt-6 items-center justify-center ">
          {isEditing && (
            <>
              <button onClick={handleSaveClick}>
                <BiSave className="w-6 h-6" />
              </button>
              <button onClick={handleCancelClick} className="pr-2">
                <MdOutlineCancel className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
