import { ReactNode } from "react";
import SvgLogo from "./SvgLogo";
import SvgEmail from "./SvgEmail";
import SvgFacebook from "./SvgFacebook";
import SvgPrinter from "./SvgPrinter";
import SvgBack from "./SvgBack";
import SvgTwitter from "./SvgTwitter";

const Header = () => {
  const svgComponents: ReactNode[] = [
    <SvgFacebook key="facebook" />,
    <SvgTwitter key="twitter" />,
    <SvgEmail key="email" />,
    <SvgPrinter key="printer" />,
  ];
  return (
    <header className="flex justify-between w-full items-center bg-white h-[44px] px-5 top-0 left-0 z-20 fixed shadow-[0_3px_6px_rgba(0,0,0,0.3)]">
      <div className="flex-none mobile:flex-1">
        <SvgBack />
        <p
          className="font-pt-sans cursor-pointer tablet-landscape:bottom-3 tracking-wide self-center text-2xs 
        transition-opacity duration-1000 ease-out hidden tablet-landscape:block tablet-landscape:hover:opacity-100 opacity-0 uppercase absolute ml-8"
        >
          Back to main site
        </p>
      </div>
      <div className="grow shrink basis-0">
        <SvgLogo className="m-auto w-[200px]" />
      </div>
      <div className="grow shrink basis-0 hidden mobile:flex justify-end">
        <ul className="mobile:flex mobile:flex-row mobile:flex-wrap">
          <li className="tablet-landscape:block hidden uppercase text-3xs font-pt-sans font-bold tracking-widest">
            Share
          </li>
          {svgComponents.map((svgComponent, index) => (
            <li key={index} className="px-1 hover:scale-110 duration-500">
              {svgComponent}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
export default Header;