
const Portfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 ">
      <h1 className="text-3xl font-bold mb-10">My Projects</h1>
        <div className="flex justify-center flex-col">

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 md: gap-6 mx-auto">
        {/* card one */}
        <div className="card border sm:w-60 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
          </div>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="card border sm:w-60 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
          </div>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="card border sm:w-60 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
          </div>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Portfolio;
