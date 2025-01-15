import hero from "../assets/hero.png";
import SearchBar from "../components/SearchBar";
import {IoIosArrowForward} from "react-icons/io";
import fresher from "../assets/fresher.webp";
import international from "../assets/international.webp";
import partTime from "../assets/part-time.webp";
import women from "../assets/women.webp";
import workFromHome from "../assets/work-from-home.webp";

const Home = () => {
  const scrollData = [
    {
      img: "1.jpeg",
      desc: " Rohit Kumar got job 2 hours ago",
    },
    {
      img: "2.jpeg",
      desc: " Jayshankar has fixed an interview",
    },
    {
      img: "3.jpeg",
      desc: " Ajit Vedal got job 4 hours ago",
    },
    {
      img: "4.jpeg",
      desc: " Suman Biswas has fixed an interview",
    },
    {
      img: "5.jpeg",
      desc: " Saloni Kondhalkar has fixed an interview",
    },
    {
      img: "6.jpeg",
      desc: " M.Mahesh has fixed an interview",
    },
    {
      img: "7.jpeg",
      desc: " Ajit Pawar got job 1 hour ago",
    },
    {
      img: "8.jpeg",
      desc: " Mungesh Haluwar has fixed an interview",
    },
    {
      img: "9.jpeg",
      desc: " Chingi Chulbuli got job 6 hours ago",
    },
    {
      img: "10.jpeg",
      desc: " Katik Hoshiyar got job 1 hour ago",
    },
    {
      img: "11.jpeg",
      desc: " Allu Arjun has fixed an interview",
    },
    {
      img: "12.jpeg",
      desc: " Lallu Mastmola got job 4 hours ago",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="h-[850px] px-7 lg:px-32 bg-faintGray  py-16 relative -z-0 overflow-hidden">
        <div className="flex flex-col gap-7 -z-50">
          <h2 className="text-faintGreen font-bold text-xl ">
            INDIA'S #1 JOB PLATFORM
          </h2>
          <h1 className="text-3xl w-56 md:text-6xl md:w-auto font-bold">
            Your job search ends here
          </h1>
          <h2 className="text-lg font-semibold opacity-70">
            Discover 50 lakh+ career opportunities
          </h2>
          <SearchBar></SearchBar>

          {/* Scroll Animation  */}
          <div className="absolute bottom-5 md:bottom-12 flex gap-10 anim">
            {scrollData.map((data) => (
              <div className="bg-white w-72 flex gap-2 rounded-s-full rounded-e-full p-4 items-center">
                <div className="rounded-full overflow-hidden w-12 h-12 ">
                  <img src={data.img} alt="" className="w-full" />
                </div>
                <p className="max-w-44 text-sm font-bold leading-tight">
                  {data.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bg image */}
          <img
            src={hero}
            alt=""
            className="-z-10 w-72 md:w-96 absolute right-5 lg:right-14 bottom-40 "
          />
        </div>
      </section>

      {/* Cards Section */}

      <section className="lg:py-28 lg:px-32 md:py-5 px-4 w-full bg-white md:grid lg:grid-cols-3 md:grid-cols-2 space-y-5 space-x-3 -z-50">
        {/* Text content */}
        <div className="py-10 text-6xl max-w-96 m-h-72 font-bold leading-1 m-auto">
          Popular Searches on our site
        </div>

        {/* Box First Freshers*/}
        <a href="#">
          <div className="h-72 max-h-72  max-w-96 py-10 px-7 flex flex-col justify-between hover:bg-gradient-to-t from-orange-200 to-orange-50 transition-all duration-150 border  hover:border-orange-500 rounded-3xl relative group m-auto">
            <div className="space-y-5 z-10">
              <h1 className="font-semibold opacity-75 ">TRENDING AT #1</h1>
              <h1 className="text-2xl font-bold group-hover:text-orange-600">
                Jobs for Freshers
              </h1>
            </div>

            <div className="z-10">
              <button className="text-lg font-semibold py-2 px-4 rounded-xl group-hover:bg-orange-400 transition-all duration-200 group-hover:text-white flex items-center ">
                View all
                <IoIosArrowForward className="ml-3" />
              </button>
            </div>

            <img
              src={fresher}
              alt=""
              className="absolute right-2 bottom-0 w-32 md:w-44 -z-0"
            />
          </div>
        </a>

        <a href="#">
          <div className="h-72 max-h-72 max-w-96 py-10 px-7 flex flex-col justify-between  rounded-3xl relative group hover:bg-gradient-to-t from-purple-200 to-purple-50 transition-all duration-150 border  hover:border-purple-500 m-auto">
            <div className="space-y-5 z-10">
              <h1 className="font-semibold opacity-75 ">TRENDING AT #2</h1>
              <h1 className="text-2xl font-bold group-hover:text-purple-900">
                Work from home Jobs
              </h1>
            </div>

            <div className="z-10">
              <button className="text-lg font-semibold py-2 px-4 rounded-xl group-hover:bg-purple-600 transition-all duration-200 group-hover:text-white flex items-center ">
                View all
                <IoIosArrowForward className="ml-3" />
              </button>
            </div>

            <img
              src={workFromHome}
              alt=""
              className="absolute right-2 bottom-0 w-32 md:w-44 -z-0"
            />
          </div>
        </a>

        <a href="#">
          <div className="h-72 max-h-72 max-w-96 py-10 px-7 flex flex-col justify-between rounded-3xl relative group hover:bg-gradient-to-t from-red-200 to-red-50 transition-all duration-150 border  hover:border-red-500 m-auto">
            <div className="space-y-5 z-10">
              <h1 className="font-semibold opacity-75 ">TRENDING AT #3</h1>
              <h1 className="text-2xl font-bold group-hover:text-red-600">
                Part time Jobs
              </h1>
            </div>

            <div className="z-10">
              <button className="text-lg font-semibold py-2 px-4 rounded-xl group-hover:bg-red-600 transition-all duration-200 group-hover:text-white flex items-center ">
                View all
                <IoIosArrowForward className="ml-3" />
              </button>
            </div>

            <img
              src={partTime}
              alt=""
              className="absolute right-2 bottom-0 w-28 md:w-36 -z-0"
            />
          </div>
        </a>

        <a href="#">
          <div className="h-72 max-h-72 max-w-96 py-10 px-7 flex flex-col justify-between rounded-3xl relative group hover:bg-gradient-to-t from-green-200 to-green-50 transition-all duration-150 border  hover:border-green-500 m-auto">
            <div className="space-y-5 z-10">
              <h1 className="font-semibold opacity-75 ">TRENDING AT #4</h1>
              <h1 className="text-2xl font-bold group-hover:text-green-700">
                Jobs for Women
              </h1>
            </div>

            <div className="z-10">
              <button className="text-lg font-semibold py-2 px-4 rounded-xl group-hover:bg-green-400 transition-all duration-200 group-hover:text-white flex items-center ">
                View all
                <IoIosArrowForward className="ml-3" />
              </button>
            </div>

            <img
              src={women}
              alt=""
              className="absolute right-2 bottom-0 w-28 md:w-32 -z-0"
            />
          </div>
        </a>

        <a href="#">
          <div className="h-72 max-h-72 max-w-96 py-10 px-7 flex flex-col justify-between rounded-3xl relative group hover:bg-gradient-to-t from-blue-200 to-blue-50 transition-all duration-150 border  hover:border-blue-500 m-auto">
            <div className="space-y-5 z-10">
              <h1 className="font-semibold opacity-75 ">TRENDING AT #5</h1>
              <h1 className="text-2xl font-bold group-hover:text-blue-600">
                International Jobs
              </h1>
            </div>

            <div className="z-10">
              <button className="text-lg font-semibold py-2 px-4 rounded-xl group-hover:bg-blue-400 transition-all duration-200 group-hover:text-white flex items-center ">
                View all
                <IoIosArrowForward className="ml-3" />
              </button>
            </div>

            <img
              src={international}
              alt=""
              className="absolute right-2 bottom-0 w-40 md:w-48 -z-0"
            />
          </div>
        </a>
      </section>
    </>
  );
};

export default Home;
