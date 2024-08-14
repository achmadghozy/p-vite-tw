import Strings from "../string/String";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { IoArrowForwardOutline } from "react-icons/io5";

interface ProfileIF {}

function Introduction() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="h-[120px] border-r-[1px] mt-[-20px]" />
      <div className="w-[5px] h-[5px] bg-green-600 rounded-full"></div>
      <h2
        className="mt-5 text-white font-medium text-[13px]
        tracking-widest"
      >
        {Strings.GREETINGS}
      </h2>
      <h2 className="text-[70px] font-bold text-white tracking-widest mt-5 justify-center text-center">
        ACHMAD GHOZY
      </h2>
      <img
        src="/profilepic.jpg"
        className="w-[160px] h-[160xp] bg-gray-200 p-7 rounded-full mt-5"
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

function Speciality() {
  const servicesList = [
    {
      id: 1,
      title: Strings.FRONTED,
      desc: Strings.FRONTED_DESC,
      logo: "/web-design.png",
    },
    {
      id: 2,
      title: Strings.BACKEND,
      desc: Strings.BACKEND_DESC,
      logo: "/backend-coding.png",
    },
    {
      id: 3,
      title: Strings.FULLSTACK,
      desc: Strings.FULLSTACK_DESC,
      logo: "/computer.png",
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

function WorkExperience() {
  const listExperience = [
    {
      id: 1,
      company: Strings.JOB_EPSON_NAME,
      company_logo: "/epson-2.svg",
      position: Strings.JOB_EPSON_TITLE,
      job_start_m: Strings.JOB_EPSON_JOIN_MONTH,
      job_start_y: Strings.JOB_EPSON_JOIN_YEAR,
    },
    {
      id: 2,
      company: Strings.JOB_TDS_NAME,
      company_logo: "TDS_logo.jpg",
      position: Strings.JOB_TDS_TITLE,
      job_start_m: Strings.JOB_TDS_JOIN_MONTH,
      job_start_y: Strings.JOB_TDS_JOIN_YEAR,
    },
  ];
  return (
    <div className="px-12 mt-12">
      <div className="flex items-center">
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
        <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
        <h2 className="text-[24px] font-bold">{Strings.EXPERIENCE}</h2>
        <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
      </div>

      <div className="flex justify-around mt-5 flex-col">
        {listExperience.map((item) => (
          <div className="grid grid-cols-6 gap-1 w-full mt-10">
            <div className="col-span-1 content-center">
              <div className="bg-white rounded-full w-[80px] h-[80px] col-span-1">
                <img
                  src={item.company_logo}
                  className="w-[80px] h-[80px]
                    p-5 hover:scale-110 transition-all cursor-pointer"
                />
              </div>
            </div>
            <div className="col-span-4">
              <h2 className="font-bold">{item.company}</h2>
              <h2 className="font-bold">{item.position}</h2>
              <h2 className="text-gray-400">{item.job_start_m}</h2>
            </div>
            <div className="col-span-1 content-center">
              <IoArrowForwardOutline
                className="bg-green-500 text-[35px]
                  p-2 text-white rounded-full cursor-pointer hover:scale-110
                  transition-all"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const SecProfile: React.FC<ProfileIF> = ({}) => {
  return (
    <div>
      <section id="Intro">{Introduction()}</section>
      <section id="About">{AboutMe()}</section>
      <section id="Speciality">{Speciality()}</section>
      <section id="Work Experience">{WorkExperience()}</section>
    </div>
  );
};

export default SecProfile;
