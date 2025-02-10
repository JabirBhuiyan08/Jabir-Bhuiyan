import one from "../../assets/one.png";


const HeaderSection = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-32 sm:pt-20 mx-4 sm:mx-10 text-center sm:text-left mb-10">
      <h1 className="text-lg sm:text-xl font-bold">
        Hi! I'm

          <div className="text-green-600 animate-bounce  inline-block pl-2">
            {" "}
            Jabir Bhuiyan{" "}
          </div>
      </h1>

      {/* <img 
        className="border-4 rounded w-24 sm:w-32 md:w-40 shadow-lg" 
        src={jabir} 
        alt="Jabir Bhuiyan" 
      
      /> */}

      <div className="flex flex-col sm:flex-row items-center justify-center mt-6 sm:mt-10 gap-6 sm:gap-12">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight text-center sm:text-left flex items-center">
          Create your own <br />
          <img
            src={one}
            alt="One"
            className="w-10 sm:w-20 md:w-28 mx-2 inline-block animation-img1"
          />
          <span className="text-green-600">Website</span> with me
        </h1>
      </div>

      <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold mt-6 sm:mt-8 text-center">
        I am your best <span className="">Web</span> Developer Choice
      </h1>
    </div>
  );
};

export default HeaderSection;
