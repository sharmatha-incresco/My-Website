import Footer from "./footer";
import Topbar from "./topbar";


function Experience() {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Topbar />
      </div>
      <div className="flex-grow"></div>
      <div className="">
        <Footer/>
      </div>
    </div>
  );
}

export default Experience;