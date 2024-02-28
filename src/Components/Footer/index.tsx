import { Github, Linkedin } from "lucide-react";
import IconLink from "../IconLink";

const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-center">
        <div className="w-[43%] border-2 rounded-e-full h-1 absolute left-0"></div>
        <div className="w-[43%] border-2 rounded-s-full absolute right-0"></div>
        <div className="container flex items-center justify-center flex-col mt-4">
          <nav className="flex flex-1 gap-4">
            <IconLink link="https://github.com/LuanSarti" icon={Github} />
            <IconLink
              link="https://www.linkedin.com/in/luan-sarti-06495322b/"
              icon={Linkedin}
            />
          </nav>
          <span className="text-xs mt-4">@2024 LuanSarti</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
