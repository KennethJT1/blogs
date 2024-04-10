import { useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import SideBar from "../components/SideBar";

const SingleBlogPage = () => {
  const data = useLoaderData();

  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];
  return (
    <div>
      <div className="px-4 py-40 text-white text-center mx-auto bg-black">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold  mb-5">
          {title}
        </h1>
        <p className="text-3xl items-center">
          <FaClock className="inline-flex items-center mr-2" />
          {reading_time} read
        </p>
      </div>

      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt={title} className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 cursor-pointer">
            {title}
          </h2>
          <p className="text-gray-600 mb-3">
            <FaUser className="inline-flex items-center mr-2" /> {author} |
            {published_date}
          </p>
          <p className="text-gray-600 mb-3">
            <FaClock className="inline-flex items-center mr-2" />
            {reading_time}
          </p>
          <p className="text-base text-gray-500 mb-6">{content}</p>

          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut id
              provident quasi odio tempore vero, quisquam quibusdam at dolor,
              dolorem, error voluptas rerum fuga qui quo omnis? Quae, dicta
              pariatur! Porro provident repudiandae exercitationem nesciunt
              illo, ullam expedita natus doloremque maiores quisquam deserunt
              quam deleniti beatae sequi temporibus blanditiis quidem mollitia
              debitis ex at architecto eius? Eos corporis culpa hic.
            </p>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut id
              provident quasi odio tempore vero, quisquam quibusdam at dolor,
              dolorem, error voluptas rerum fuga qui quo omnis? Quae, dicta
              pariatur! Porro provident repudiandae exercitationem nesciunt
              illo, ullam expedita natus doloremque maiores quisquam deserunt
              quam deleniti beatae sequi temporibus blanditiis quidem mollitia
              debitis ex at architecto eius? Eos corporis culpa hic.
            </p>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut id
              provident quasi odio tempore vero, quisquam quibusdam at dolor,
              dolorem, error voluptas rerum fuga qui quo omnis? Quae, dicta
              pariatur! Porro provident repudiandae exercitationem nesciunt
              illo, ullam expedita natus doloremque maiores quisquam deserunt
              quam deleniti beatae sequi temporibus blanditiis quidem mollitia
              debitis ex at architecto eius? Eos corporis culpa hic.
            </p>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut id
              provident quasi odio tempore vero, quisquam quibusdam at dolor,
              dolorem, error voluptas rerum fuga qui quo omnis? Quae, dicta
              pariatur! Porro provident repudiandae exercitationem nesciunt
              illo, ullam expedita natus doloremque maiores quisquam deserunt
              quam deleniti beatae sequi temporibus blanditiis quidem mollitia
              debitis ex at architecto eius? Eos corporis culpa hic.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
