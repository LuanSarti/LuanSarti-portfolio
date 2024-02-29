import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Contacts from "./Components/Contacts";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Resume />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default App;
