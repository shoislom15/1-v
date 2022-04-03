import logo from "../../assets/logo.svg";
import desktopActive from "../../assets/desktopActive.svg";
import desktopNonActive from "../../assets/desktopNonActive.svg";
import mobileActive from "../../assets/mobileActive.svg";
import mobileNonActive from "../../assets/mobileNonActive.svg";
import { useState } from "react";
import { Divider } from "@mui/material";

const Header = () => {
  const [device, setDevice] = useState("desctop");

  return (
    <div className="flex  py-4 px-12 shadow-md items-center justify-between">
      <div className="flex">
        <div className="w-[66px] sm:mr-14">
          <img src={logo} className="w-full h-full" />
        </div>
        <button
          onClick={() => setDevice("desctop")}
          className="w-7 xs:hidden sm:inline-block"
        >
          <img
            src={device == "desctop" ? desktopActive : desktopNonActive}
            className="w-full h-full"
          />
        </button>
        <div className="w-[1px] bg-gray-400 mx-[26px] xs:hidden sm:inline-block" />
        <button
          onClick={() => setDevice("mobile")}
          className="w-4 xs:hidden sm:inline-block"
        >
          <img
            src={device == "mobile" ? mobileActive : mobileNonActive}
            className="w-full h-full"
          />
        </button>
      </div>
      <div className="flex items-center">
        <p className="text-gray-700 font-normal mr-6 xs:hidden lg:inline-block">
          Нажмите чтобы Редактировать, чтобы создать ваш сайт!
        </p>
        <a className="text-sm text-gray-700 underline hover:text-blue-600 cursor-pointer xs:hidden md:inline-block">
          Подробнее
        </a>
        <button className="text-white bg-blue-600 hover:bg-blue-500 rounded-full text-md px-8 p-2 ml-11">
          Редактировать
        </button>
      </div>
    </div>
  );
};

export default Header;
