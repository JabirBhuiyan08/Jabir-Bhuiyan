import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Emails = () => {
  const [emails, setEmails] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    const fetchData = async () => {
        const response = await axiosPublic.get("/user");
        setEmails(response.data);
    }
    fetchData();
  },[emails, axiosPublic]);

  return (
    <div className=" bg-amber-100/30 w-90 h-180 p-4 rounded-2xl overflow-y-scroll">
      Emails

      <li>Can mail from here</li>
      <li>Show Notifiaction, like new Email add. for the new email add a dot with the email</li>
      <br />
      
        {emails.map((email) => (
          <div key={email._id} className="flex justify-between items-center border-y-1 p-1 border-gray-400">
            <div>
            {email.email}
            </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded mt-2">Mail</button>
          </div>
        ))}
      
    </div>
  );
};

export default Emails;
