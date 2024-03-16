import { Linkedin, Github } from "lucide-react";
import Lottie from "react-lottie";
import animationData from "../../assets/DevThinking.json";
import JavaScriptLogo from "../../assets/JavaScriptLogo.png";
import PHPLogo from "../../assets/PHPLogo.png";
import SqlLogo from "../../assets/SqlLogo.png";

const Resume = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <section className="my-10 flex justify-center">
        <div className="container flex h-96 items-center justify-center gap-56">
          <div className="flex w-[40%] flex-col">
            <div className="text-3xl font-medium">Bem-vindo, me chamo</div>
            <div className="mb-4 mt-2 text-6xl font-bold text-blue-600">
              Luan Sarti
            </div>
            <div className="text-xl">Full-stack web developer</div>
            <div className="mt-8 flex items-center gap-20">
              <a
                target="_blank"
                className="animation flex items-center gap-4 rounded bg-zinc-600 px-12 py-6 hover:bg-zinc-500"
                href="https://www.linkedin.com/in/luan-sarti-06495322b/"
              >
                <Linkedin size={30} />
                <span>Linkedin</span>
              </a>
              <a
                target="_blank"
                className="animation flex items-center gap-4 rounded bg-blue-600 px-12 py-6 hover:bg-blue-500"
                href="https://github.com/LuanSarti"
              >
                <Github size={30} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          <div>
            <Lottie width={400} height={400} options={defaultOptions} />
          </div>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="container flex flex-col justify-center">
          <div className="mb-8 flex w-full justify-center gap-44">
            <img width={150} src={JavaScriptLogo} alt="JavaScriptLogo" />
            <p className="w-[50%]">
              Sou um profissional dedicado e versátil, com experiência anterior
              como faturista e atualmente atuando como Full-Stack Web Developer.
              Minha transição de funções reflete minha paixão pela tecnologia e
              meu comprometimento em buscar desafios significativos. Na minha
              carreira como faturista, desenvolvi habilidades analíticas e
              organizacionais essenciais para garantir precisão e eficiência nos
              processos.
            </p>
          </div>
          <div className="mb-8 flex w-full justify-center gap-44">
            <p className="w-[50%]">
              No campo de desenvolvimento, concentro-me em tecnologias web
              full-stack, demonstrando competência tanto no frontend quanto no
              backend. Minhas habilidades incluem o domínio de linguagens como
              HTML, CSS, JavaScript, e experiência em frameworks como React e
              Node.js. Além disso, tenho conhecimento em gerenciamento de dados,
              utilizando ferramentas e linguagens como SQL.
            </p>
            <img width={200} src={PHPLogo} alt="JavaScriptLogo" />
          </div>
          <div className="flex w-full justify-center gap-44">
            <img width={200} src={SqlLogo} alt="JavaScriptLogo" />
            <p className="w-[50%]">
              Minha abordagem proativa para resolução de problemas, aprendizado
              contínuo e adaptabilidade destaca minha capacidade de prosperar em
              ambientes desafiadores. Estou entusiasmado em contribuir para
              projetos inovadores, aplicando minha experiência técnica e
              habilidades interpessoais para impulsionar o sucesso da equipe.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
