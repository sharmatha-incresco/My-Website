import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="flex gap-4 justify-between p-4 bg-red-200">
      <a href="https://github.com/sharmatha-incresco">
        <div className="flex gap-2 hover hover:bg-red-100 rounded-lg ">
          <BsGithub className="w-6 h-6" />
          <p className="hidden md:block lg:block">GitHub</p>
        </div>
      </a>
      <a href="https://linkedin.com/in/sharmatha-venkateswaran">
        <div className="flex gap-2 hover hover:bg-red-100 rounded-lg ">
          <BsLinkedin className="w-6 h-6" />
          <p className="hidden md:block lg:block">LinkedIn</p>
        </div>
      </a>
      <a href="https://instagram.com/sharmatha__1823?igshid=OGQ5ZDc2ODk2ZA==">
        <div className="flex gap-2 hover hover:bg-red-100 rounded-lg ">
          <BsInstagram className="w-6 h-6" />
          <p className="hidden md:block lg:block">Instagram</p>
        </div>
      </a>
    </div>
  );
}
