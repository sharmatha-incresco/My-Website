import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { initialCardColor} from "../useCardColor";
export default function Footer() {
  return (
    <div className="flex gap-4 justify-between p-4 " style={{backgroundColor:initialCardColor}}>
      <a href="https://github.com/sharmatha-incresco">
        <div className="flex gap-2 hover custom-barhover  rounded-lg ">
          <BsGithub className="w-6 h-6" />
          <p className="hidden md:block lg:block">GitHub</p>
        </div>
      </a>
      <a href="https://linkedin.com/in/sharmatha-venkateswaran">
        <div className="flex gap-2 hover custom-barhover  rounded-lg ">
          <BsLinkedin className="w-6 h-6" />
          <p className="hidden md:block lg:block">LinkedIn</p>
        </div>
      </a>
      <a href="https://instagram.com/sharmatha__1823?igshid=OGQ5ZDc2ODk2ZA==">
        <div className="flex gap-2 hover custom-barhover  rounded-lg ">
          <BsInstagram className="w-6 h-6" />
          <p className="hidden md:block lg:block">Instagram</p>
        </div>
      </a>
    </div>
  );
}
