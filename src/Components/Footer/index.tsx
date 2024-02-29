import { Github, Linkedin } from "lucide-react";
import IconLink from "../IconLink";

const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-center">
        <div className="absolute left-0 h-1 w-[43%] rounded-e-full border-2"></div>
        <div className="absolute right-0 w-[43%] rounded-s-full border-2"></div>
        <div className="container mt-4 flex flex-col items-center justify-center">
          <nav className="flex flex-1 gap-4">
            <IconLink link="https://github.com/LuanSarti" icon={Github} />
            <IconLink
              link="https://www.linkedin.com/in/luan-sarti-06495322b/"
              icon={Linkedin}
            />
          </nav>
          <span className="mt-4 text-xs">@2024 LuanSarti</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
