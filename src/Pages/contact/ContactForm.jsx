import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  return (
   <div className="flex flex-col justify-center  items-center h-screen text-white  my-32">
        <form 
          onSubmit={handleSubmit((data) => console.log(data))}
           className="flex flex-col gap-2 justify-center items-start w-1/2"
        >
          <label
              htmlFor="title"
              className=" block text-sm font-medium mb-2 mt-4"
            >
              Your Name
            </label>
          <input
            type="text"
            {...register("name")}
            className="w-full border border-gray-300 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
          <label
              htmlFor="title"
              className=" block text-sm font-medium mb-2 mt-4"
            >
              Email
            </label>
          <input
            type="text"
            {...register("Email")}
            className="w-full border border-gray-300 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
          />
          <label
              htmlFor="title"
              className=" block text-sm font-medium mb-2 mt-4"
            >
              Phone Number
            </label>
          <input
            type="text"
            {...register("PhoneNumber")}
            className="w-full border border-gray-300 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Phone Number"
          />
          <label
              htmlFor="title"
              className=" block text-sm font-medium mb-2 mt-4"
            >
              Your Country Name
            </label>
          <input
            type="text"
            {...register("country")}
            className="w-full border border-gray-300 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Country Name"
          />
          <label
              htmlFor="title"
              className=" block text-sm font-medium mb-2 mt-4"
            >
              Your Message
            </label>
          <input
            type="text"
            {...register("Message")}
            className="w-full h-48 border border-gray-300 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
          />
         {/* submit Button */}
          
          <button type="submit"
          className="mt-4 w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            Send Message
          </button>
        </form>
        </div>
  
  );
};

export default ContactForm;
