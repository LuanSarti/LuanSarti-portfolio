interface propsType {
  text: string;
  link: string;
}

const HeaderLink = ({ text, link }: propsType) => {
  return (
    <>
      <a
        className="px-4 py-3 rounded mx-2 hover:bg-blue-600 animation"
        href={`#${link}`}
      >
        {text}
      </a>
    </>
  );
};

export default HeaderLink;
