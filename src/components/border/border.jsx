import cmr from "./cmr.jpeg";

const Border = () => {
  return (
    <div className=" h-screen container mx-auto flex flex-col md:flex-row py-8 bg-black ">
      <div className="w-full md:w-1/2">
        <img className="w-full h-auto" src={cmr} />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
        <h1 className="text-white text-5xl font-bold mb-2">This is</h1>
        <div className="text-white text-2xl font-semibold mb-2">
          <h1 className="text-2xl text-white font-bold">My Chemical Romance</h1>
        </div>
        <h2 className="text-gray-200 text-2xl font-semibold mb-2"></h2>
        <p className="text-white mb-4">
          My Chemical Romance is a band which, according to the media, has the
          genre of pop punk, post-hardcore, "punk revival", alternative rock.
        </p>

        <a
          href="#"
          className="bg-white  hover:bg-white text-black font-semibold py-2 px-3 rounded-md text-center self-start "
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Border;
