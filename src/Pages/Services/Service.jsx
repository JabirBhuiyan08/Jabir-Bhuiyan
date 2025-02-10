import four from "../../assets/four.png";

const Service = () => {
  return (
    <div className="flex flex-col items-center sm:mt-60 mb-32">
      {/* Header */}
      <h1 className="text-sm sm:text-lg font-bold uppercase text-gray-300">
        What I Offer
      </h1>

      {/* Service List */}
      <div className="relative w-full max-w-7xl mt-6">
        <div className="flex flex-col text-white text-4xl sm:text-6xl font-bold space-y-6">
          <div className="border-b border-gray-600 pb-2">
            <div className="collapse border border-base-300">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                Web Development
              </div>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </div>
          </div>
          <div className="border-b border-gray-600 pb-2">
            <div className="collapse border border-base-300">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                Landing Page
              </div>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </div>
          </div>
          <div className="border-b border-gray-600 pb-2">
            <div className="collapse border border-base-300">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                Mobile Responsive
              </div>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </div>
          </div>
          
        </div>

        {/* Floating Image */}
        <img
          src={four}
          alt=""
          className="absolute top-60 right-10 w-16 sm:w-32 md:w-40 animation-img3"
        />
      </div>
    </div>
  );
};

export default Service;
