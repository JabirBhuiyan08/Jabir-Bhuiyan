import Emails from "../emails";
import AddSkills from "./AddSkills";
import Massege from "./Massege";
import Offers from "./Offers";
import Portfolios from "./DashboardPortfolios";

const DashHome = () => {
  return (
    <div className="flex  gap-4">
      <div>
        <Emails></Emails>
      </div>
      <div>
        <Portfolios></Portfolios>
      </div>
      <div className="flex flex-col gap-2">
        <Massege></Massege>
      
        <AddSkills></AddSkills>
      </div>
      <div>
        <Offers></Offers>
      </div>
    </div>
  );
};

export default DashHome;
