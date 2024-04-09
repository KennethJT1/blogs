import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-800">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div className="grid pb-8 lg:grid-col-6">
          <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="text-gray-300 font-medium tracking-wide">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-red-500"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-red-500"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-red-500"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-red-500"
                  >
                    References
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-gray-300 font-medium tracking-wide">
                Services
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-red-500"
                  >
                    Entertainments
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-red-500"
                  >
                    Ecommerce
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-red-500"
                  >
                    Tech
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-red-500"
                  >
                    Health
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-gray-300 font-medium tracking-wide">Cherry</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-red-500"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-red-500"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-red-500"
                  >
                    Non-Pr-fit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-red-500"
                  >
                    Education
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-gray-300 font-medium tracking-wide">Company</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-red-500"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-red-500"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-red-500"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <form className="mt-4 flex flex-col md:flex-row">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus-border-purple-400 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center h-8 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-red-500 focus:outline-none border"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="mt-4 text-sm text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veritatis ab adipisci assumenda minima, numquam omnis
                    repellendus, ratione autem deserunt ex iusto, totam odio?
                    Modi error maxime vero officia.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justtify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
            <p className="">©Copyright {currentYear} | All right reserved</p>
            <div className="flex items-centerm mt-4 space-x-4 sm:mt-0">
              <a
                href=""
                className="text-gray-500 transition-all duration-300 hover:text-red-500"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href=""
                className="text-gray-500 transition-all duration-300 hover:text-red-500"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href=""
                className="text-gray-500 transition-all duration-300 hover:text-red-500"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
