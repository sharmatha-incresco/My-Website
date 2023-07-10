import React from "react";

function Applyform() {
  const handleClick = () => {
    alert("Application Submitted Sucessfully ");
  };

  return (
    <>
    <div className='flex items-center justify-center min-h-screen bg-slate-700'>
      <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl'>
        <div className='max-w-md mx-auto space-y-6'>

          <div>
            <h2 className="text-2xl font-bold">Submit your application</h2>
            <p className="my-4 opacity-70">
             Fill the following feilds to send your application
            </p>
            <hr className="my-6" />
            <label  className="uppercase text-sm font-bold opacity-70">Name</label>
            <input
              type="text"
              className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
            />
            <label htmlFor="email" className="uppercase text-sm font-bold opacity-70">Email</label>
            <input
              type="text"
              id="email"
              className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded"
            />
            <label htmlFor="language" className="uppercase text-sm font-bold opacity-70">Language</label>
            <select
              id="language"
              className="w-full p-3 mt-2 mb-4 bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
            >
              <option value="">Javascript</option>
              <option value="">Ruby</option>
              <option value="">Python</option>
              <option value="">PHP</option>
              <option value="">Java</option>
            </select>
            <label htmlFor="language" className="uppercase text-sm font-bold opacity-70">Experience</label>
            <select
              id="language"
              className="w-full p-3 mt-2 mb-4 bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
            >
              <option value="">0-1</option>
              <option value="">2-5</option>
              <option value="">above 5</option>
            </select>
            <div class="relative mb-3" data-te-input-wrapper-init>
  <label
    for="exampleFormControlTextarea1"
    class="uppercase text-sm font-bold opacity-70"
    >About Yourself
  </label>
  <textarea
    class="p-3 mt-2 mb-4 w-full bg-slate-200 rounded"
    id="exampleFormControlTextarea1"
    rows="4"
    placeholder="max 100 words"></textarea>
</div>
<div >
      <button type="button" onClick={handleClick} class="bg-slate-700 py-2 mt-6 text-white text-base  rounded-sm p-px ">
        Apply
      </button>
    </div>
</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Applyform;
