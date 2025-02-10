import { useState } from "react";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter an email address.");
      return;
    }

    setMessage("Email submitted successfully!");
    setEmail(""); // Clear input after submission
  };

  return (
    <div className="flex md:fixed pt-20 sm:pt-0 top-0 right-0 items-center animation-img1 rounded-4xl">
      <form onSubmit={handleSubmit} className=" p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 ">Subscribe</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-white text-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="w-full mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Submit
        </button>
        {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
      </form>
    </div>
  );
};

export default EmailForm;
