import Footer from "./footer";
import Topbar from "./topbar";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import incresco from "../incresco.logo.jpeg";
import mednucleus from "../mednucleus.jpeg";
import greenclub from "../greenclub.jpeg";
import pylamp from "../pylamp.jpeg";
import pals from "../pals.jpeg";
function Experience() {
  function Work({
    src,
    role,
    company,
    duration,
    place,
    type,
    location,
    website,
  }) {
    return (
      <Card className="mt-6 bg-red-100 md:w-96 xl:w-96 lg:w-64 h-96 border-red-200 border-2 hover:scale-105 transform transition-transform hover:bg-white hover:border-2 hover:border-red-100">
        <CardHeader className="relative h-40 w-40 border-red-100 border-2 p-3">
          <a href={website}>
            <img src={src} className="w-full h-full object-cover " alt="wrk" />
          </a>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col justify-between gap-2">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {role}
            </Typography>
            <Typography variant="h4" className="mb-2">
              {company}
            </Typography>
            <Typography variant="h5" className="mb-2">
              📆 {duration}
            </Typography>
            <Typography variant="h5" className="mb-2">
              <a href={location}>📍 {place}</a>
            </Typography>
            <Typography variant="h5" className="mb-2">
              💻 {type}
            </Typography>
          </div>
        </CardBody>
      </Card>
    );
  }
  return (
    <div className="flex flex-col  min-h-screen">
      <div>
        <Topbar />
      </div>
      <div className="flex-grow p-4 ">
        <div className="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <Work
            src={incresco}
            place="Bengaluru, Karnataka, India"
            type="On-Site"
            company=" 🏢 Incresco"
            role=" Front End Developer Intern"
            duration="June-2022 - Now"
            location="https://maps.app.goo.gl/UCzcH45uuvBXxatv7"
            website="https://www.increscotech.com/"
          />
          <Work
            src={pylamp}
            place="Erode, TamilNadu, India"
            type="On-Site"
            company=" 🏫 VCET"
            role=" Senior Pymentor "
            duration="Jul 2022 - Now"
            location="https://maps.app.goo.gl/TZ3A8tLxULhucNJK6?g_st=iw"
            website="https://velalarengg.ac.in/"
          />
          <Work
            src={mednucleus}
            place="Erode, TamilNadu, India"
            type="Remote"
            company=" 🏢 Mednucleus "
            role=" Student Intern "
            duration="Jul 2022 - Jan 2023 · (7mos)"
            location="https://maps.app.goo.gl/CUDGcvV4x1a1AWAbA"
            website="https://www.mednucleus.in/"
          />
          <Work
            src={greenclub}
            place="Erode, TamilNadu, India"
            type="On-Site"
            company=" 🏫 VCET"
            role=" Senior Public Relations Officer "
            duration="Aug 2022 - Jun 2023 · (11mos)"
            location="https://maps.app.goo.gl/TZ3A8tLxULhucNJK6?g_st=iw"
            website="https://velalarengg.ac.in/"
          />

          <Work
            src={pylamp}
            place="Erode, TamilNadu, India"
            type="On-Site"
            company=" 🏫 VCET"
            role="Pymentor "
            duration="Sep 2022 - May 2023 · (9mos)"
            location="https://maps.app.goo.gl/TZ3A8tLxULhucNJK6?g_st=iw"
            website="https://velalarengg.ac.in/"
          />
          <Work
            src={pals}
            place="Erode, TamilNadu, India"
            type="On-Site"
            company=" 🏫 VCET"
            role=" Department Student Coordinator"
            duration="Jul 2022 - May 2023 · (11mos)"
            location="https://maps.app.goo.gl/TZ3A8tLxULhucNJK6?g_st=iw"
            website="https://velalarengg.ac.in/"
          />
          <Work
            src={pylamp}
            place="Erode, TamilNadu, India"
            type="On-Site"
            company=" 🏫 VCET"
            role="Pymentor "
            duration="Oct 2021 - May 2022 · (8mos)"
            location="https://maps.app.goo.gl/TZ3A8tLxULhucNJK6?g_st=iw"
            website="https://velalarengg.ac.in/"
          />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Experience;
