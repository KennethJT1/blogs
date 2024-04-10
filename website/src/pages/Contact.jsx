import { FaPaperPlane } from "react-icons/fa";


const Contact = () => {
  return (
    <div>
      <div className="px-4 py-40 text-white text-center mx-auto bg-black">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold  mb-5">
          Contact Us
        </h1>
      </div>

      <div className="bg-gray-100 text-center mt-10">
        <h2 className="text-xl h-12 font-semibold mb-4 mt-6 uppercase">
          Contact us Here!
        </h2>
        <form className="px-4 mx-12">
          <div className="mb-5">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="DesignKJT@email.com"
              className="w-full rounded-md border border-[#e0e0e0e] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[#6a64f1]"
            />
          </div>
          <div className="mb-3">
            <input
              type="subject"
              id="subject"
              name="subject"
              placeholder="Enter your Subject"
              className="w-full rounded-md border border-[#e0e0e0e] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[#6a64f1]"
            />
          </div>
          <div className="mb-3 flex flex-col items-start">
            <label className="text-base font-medium text-[#6B7280]">
              Message
            </label>
            <input
              type="message"
              id="message"
              name="message"
              className="w-full rounded-md border border-[#e0e0e0e] bg-white py-[125px] px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[#6a64f1]"
            />
          </div>

          <div>
            <button className="mb-[55px] hover:shadow-md rounded-sm bg-black hover:bg-red-600 py-3 px-8 text-base font-semibold text-white outline-none">
            Send <FaPaperPlane className="inline-flex ml-1" /> 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
