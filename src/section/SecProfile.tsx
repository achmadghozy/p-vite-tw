import Strings from "../string/String";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { IoArrowForwardOutline } from "react-icons/io5";
import String from "../string/String";

function Introduction() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="h-[120px] border-r-[1px] mt-[-20px]" />
      <div className="w-[5px] h-[5px] bg-green-600 rounded-full"></div>
      <h2
        className="mt-5 text-black font-medium text-[13px]
        tracking-widest"
      >
        {String.GREETINGS}
      </h2>
      <h2 className="text-[70px] font-bold text-black tracking-widest mt-5">
        ACHMAD <br></br>GHOZY
      </h2>
      <img
        src="/avatar.jpg"
        className="w-[160px] h-[160xp] bg-gray-200 p-7 rounded-full"
      />
    </div>
  );
}

function AboutMe() {
  return (
    <div className="mt-12 px-44 text-center flex flex-col items-center">
      <h2 className="text-[40px] font-bold">{Strings.ABOUT_HEADING}</h2>
      <BiSolidQuoteAltLeft
        className="bg-green-500 p-3 text-[44px] rounded-full
            mt-6 text-white"
      />
      <h2 className="my-5 text-gray-400 text-[14px]">{Strings.ABOUT_DESC}</h2>
      <BiSolidQuoteAltRight
        className="bg-green-500 p-3 text-[44px] rounded-full
            mt-6 text-white"
      />
    </div>
  );
}

function ProfilePic() {
  return (
    <div className="fixed mt-[90px]">
      <img src="/user-image.png" className="h-screen object-cover w-screen" />
    </div>
  );
}

function Speciality() {
  const servicesList = [
    {
      id: 1,
      title: Strings.FRONTED,
      desc: Strings.FRONTED_DESC,
      logo: "../assets/web-design.png",
    },
    {
      id: 2,
      title: Strings.BACKEND,
      desc: Strings.BACKEND_DESC,
      logo: "../assets/backend_coding.png",
    },
    {
      id: 3,
      title: Strings.PT_TITLE,
      desc: Strings.PT_DESC,
      logo: "../muscle.png",
    },
  ];
  return (
    <div className="px-12 mt-12">
      <div className="flex items-center">
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
        <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
        <h2 className="text-[24px] font-bold">{Strings.SERVICES}</h2>
        <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
      </div>
      <div className="flex justify-around mt-16">
        {servicesList.map((item) => (
          <div
            className="text-center flex flex-col justify-center items-center
            gap-6"
          >
            <div className="bg-gray-200 rounded-full w-[80px] h-[80px]">
              <img
                src={item.logo}
                className="w-[80px] h-[80px]
                    p-5 hover:scale-110 transition-all cursor-pointer"
              />
            </div>
            <h2 className="mt-5 font-bold">{item.title}</h2>
            <h2 className="text-gray-400">{item.desc}</h2>
            <IoArrowForwardOutline
              className="bg-green-500 text-[35px]
                p-2 text-white rounded-full cursor-pointer hover:scale-110
                transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function SecProfile() {
  return (
    <div>
      {Introduction()}
      {AboutMe()}
      {Speciality()}
    </div>
  );
}

export default SecProfile;
