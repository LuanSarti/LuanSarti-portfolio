import LogoLuan from "../../assets/LogoLuan.jpeg";
import HeaderLink from "../HeaderLink";

const Header = () => {
  return (
    <>
      <header className="bg-neutral-900 h-16 flex items-center justify-center">
        <div className="container flex items-center justify-between">
          <img width={45} height={45} src={LogoLuan} alt="LogoLuan" />
          <nav className="flex items-center">
            <HeaderLink text="Sobre mim" link="Resume" />
            <HeaderLink text="Skills" link="Skills" />
            <HeaderLink text="Projetos" link="Projects" />
            <HeaderLink text="Contatos" link="Contact" />
            <div className="px-4 py-3 ml-2 bg-blue-600 rounded hover:bg-blue-500 animation cursor-pointer">
              Download CV
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
