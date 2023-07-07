import SvgLogo from "./SvgLogo";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center h-[44px] shadow-[0_-3px_6px_rgba(0,0,0,0.16)] relative top-auto bottom-0">
      <SvgLogo className="mx-auto"/>
    </footer>
  );
};

export default Footer
