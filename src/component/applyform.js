import React, { useState } from "react";

function Applyform({ setApplicantsCount, setShowForm }) {
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    email: "",
    experience: "",
    language: "",
  });
  const [emailError, setEmailError] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      if (!validateEmail(formData.email)) {
        setEmailError("Invalid email address");
        return;
      }
  
      try {
        const response = await fetch(
          "http://ec2-15-206-167-181.ap-south-1.compute.amazonaws.com:3000/job/create",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

      if (response.ok) {
        alert("Application Submitted Successfully");
        setFormData({
          name: "",
          about: "",
          email: "",
          experience: "",
          language: "",
        });
        setApplicantsCount((prevCount) => prevCount + 1);
        setShowForm(false);
      } else {
        alert("Failed to submit application");
      }
    } catch (error) {
      console.error("Error submitting application", error);
      alert("Failed to submit application");
    }
  };
  const validateEmail = (email) => {
    // Email validation regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <div className='flex items-center justify-center min-h-screen bg-slate-700'>
        <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl'>
          <div className='max-w-md mx-auto space-y-6'>
            <div>
              <h2 className='text-2xl font-bold'>Submit your application</h2>
              <p className='my-4 opacity-70'>
                Fill the following fields to send your application
              </p>
              <hr className='my-6' />
              <form onSubmit={handleSubmit}>
                <label className='uppercase text-sm font-bold opacity-70'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none'
                />
                <label className='uppercase text-sm font-bold opacity-70'>
                  About Yourself
                </label>
                <textarea
                  name='about'
                  value={formData.about}
                  onChange={handleChange}
                  className='p-3 mt-2 mb-4 w-full bg-slate-200 rounded'
                  rows='4'
                  placeholder='max 100 words'
                ></textarea>
                <label className="uppercase text-sm font-bold opacity-70">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`p-3 mt-2 mb-4 w-full bg-slate-200 rounded ${
                    emailError ? "border-red-500" : "border-slate-200"
                  } focus:border-slate-600 focus:outline-none`}
                />
                {emailError && (
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>
                )}
                <label className='uppercase text-sm font-bold opacity-70'>
                  Experience
                </label>
                <select
                  name='experience'
                  value={formData.experience}
                  onChange={handleChange}
                  className='w-full p-3 mt-2 mb-4 bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none'
                >
                  <option value='0-1'>0-1</option>
                  <option value='2-5'>2-5</option>
                  <option value='above 5'>above 5</option>
                </select>
                <label className='uppercase text-sm font-bold opacity-70'>
                  Language
                </label>
                <select
                  name='language'
                  value={formData.language}
                  onChange={handleChange}
                  className='w-full p-3 mt-2 mb-4 bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none'
                >
                  <option value='Javascript'>Javascript</option>
                  <option value='Ruby'>Ruby</option>
                  <option value='Python'>Python</option>
                  <option value='PHP'>PHP</option>
                  <option value='Java'>Java</option>
                </select>
                <button
                  type='submit'
                  className='bg-slate-700 py-2 mt-6 text-white text-base rounded-sm p-px'
                >
                  Apply
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Applyform;
