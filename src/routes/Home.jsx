import hero from "../assets/hero.png";
import SearchBar from "../components/SearchBar";

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
          <div className="absolute bottom-5 md:bottom-60 flex gap-10 anim">
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
    </>
  );
};

export default Home;
