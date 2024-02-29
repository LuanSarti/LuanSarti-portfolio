import { Linkedin, Github } from "lucide-react";
import Lottie from "react-lottie";
import animationData from "../../assets/DevThinking.json";

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
        <div className="container flex h-96 items-center gap-56">
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
          <div className="">
            <Lottie width={400} height={400} options={defaultOptions} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
