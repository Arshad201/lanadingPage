import MainSection from "./components/MainSection";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Section10 from "./components/Section10";
import Section11 from "./components/Section11";
import Section12 from "./components/Section12";
import Section13 from "./components/Section13";
import Section14 from "./components/Section14";

function App() {
  return (
    <>
    <Header/>
      <div className="text-custom-black flex flex-col tablet:gap-20 mobile-xxs:gap-5">
        <MainSection/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
        <Section9/>
        <Section10/>
        <Section11/>
        <Section12/>
        <Section13/>
        <Section14/>
      </div>
    <Footer/>
    </>
  );
}

export default App;
