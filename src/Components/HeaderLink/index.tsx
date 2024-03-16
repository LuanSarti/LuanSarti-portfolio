interface IProps {
  text: string;
  link: string;
}

const HeaderLink = ({ text, link }: IProps) => {
  return (
    <>
      <a
        className="animation mx-2 rounded px-4 py-3 hover:bg-blue-600"
        href={`#${link}`}
      >
        {text}
      </a>
    </>
  );
};

export default HeaderLink;
