import LogoLuan from "../../assets/LogoLuan.png";
import HeaderLink from "../HeaderLink";

const Header = () => {
  return (
    <>
      <header className="flex h-16 items-center justify-center bg-neutral-900">
        <div className="container flex items-center justify-between">
          <img width={45} height={45} src={LogoLuan} alt="LogoLuan" />
          <nav className="flex items-center">
            <HeaderLink text="Sobre mim" link="Resume" />
            <HeaderLink text="Skills" link="Skills" />
            <HeaderLink text="Projetos" link="Projects" />
            <HeaderLink text="Contatos" link="Contact" />
            <div className="animation ml-2 cursor-pointer rounded bg-blue-600 px-4 py-3 hover:bg-blue-500">
              Download CV
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
