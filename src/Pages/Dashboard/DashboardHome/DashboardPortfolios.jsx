import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Portfolios = () => {
  const [portfolios, setPortfolios] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosPublic.get("/user");
      setPortfolios(response.data);
    };
    fetchData();
  }, [portfolios, axiosPublic]);
  return (
    <div className="bg-blue-300/70 w-120 h-180 p-4 rounded-2xl overflow-y-auto">
      <h1>This is Portfolios</h1>
      <h1>Show portfolios here. and add or edit option here</h1>

      {portfolios.map((portfolio) => (
        <div
          key={portfolio._id}
          className="flex flex-col justify-between items-center border-y-1 p-1 border-gray-400"
        >
            <h1>Portfolio Name :</h1>
            <h1>Portfolio Discription :</h1>
            <h1>Portfolio Photo:</h1>
          <div >{portfolio.email}</div>
          <div>{portfolio.name}</div>
          <div>{portfolio.password}</div>
          <div>{portfolio.role}</div>
          <div>{portfolio.createdAt}</div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded mt-2">
            Mail
          </button>
        </div>
      ))}
    </div>
  );
};

export default Portfolios;
