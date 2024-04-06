import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="px-4 py-32 mx-auto bg-black">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold  mb-5">
          Welcome to my Site
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5">
          Start your blog now and join the league of writers and readers who
          loves to share their stories. We offer everything you need to get
          started, from helpful tips and tutorials
        </p>
        <div>
          <Link className="text-medium hover:text-red-500 inline-flex items-center">
            Learn more <FaArrowRight className="mt-1 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
