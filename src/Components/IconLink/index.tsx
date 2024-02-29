import { LucideIcon } from "lucide-react";
import React from "react";

interface propsType {
  link: string;
  icon: LucideIcon;
}

const IconLink = ({ link, icon }: propsType) => {
  return (
    <>
      <a
        className="animation rounded-2xl p-2 hover:bg-neutral-800"
        href={`${link}`}
        target="_blank"
      >
        {icon && React.createElement(icon, { size: 40 })}
      </a>
    </>
  );
};

export default IconLink;
