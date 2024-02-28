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
        className="p-2 rounded-2xl animation hover:bg-neutral-800"
        href={`${link}`}
        target="_blank"
      >
        {icon && React.createElement(icon, { size: 40 })}
      </a>
    </>
  );
};

export default IconLink;
