import orng from "./orng.jpg";
const Border2 = () => {
  return (
    <div className="bg-black m-7">
      <section className="  py-5">
        <div className="container mx-auto text-center">
          <h2 className="text-white text-2xl font-semibold mb-2">
            Developer Team
          </h2>
          <p className=" text-white mb-8">
            Expert team working behind the scenes.
          </p>
          <div className="flex flex-wrap justify-center space-x-4  ">
            <div className="w-20 mb-4 ">
              <img
                src={orng}
                alt="Developer 1"
                className="w-full h-auto rounded-full "
              />
              <p className="text-white mt-2 font-semibold">Vadd</p>
            </div>
            <div className="w-20 mb-4 ">
              <img
                src={orng}
                alt="Developer 2"
                className="w-full h-auto rounded-full md:w-25"
              />
              <p className="text-white mt-2 font-semibold">Kevin</p>
            </div>
            <div className="w-20 mb-4 ">
              <img
                src={orng}
                alt="Developer 3"
                className="w-full h-auto rounded-full md:w-25"
              />
              <p className="text-white mt-2 font-semibold">Gabas</p>
            </div>
            <div className="w-20 mb-4 ">
              <img
                src={orng}
                alt="Developer 4"
                className="w-full h-auto rounded-full md:w-25"
              />
              <p className="text-white mt-2 font-semibold">Dapa</p>
            </div>
            <div className="w-20 mb-4 ">
              <img
                src={orng}
                alt="Developer 4"
                className="w-full h-auto rounded-full md:w-25"
              />
              <p className="text-white mt-2 font-semibold">Rizaldi</p>
            </div>
            <div className="w-20 mb-4 ">
              <img
                src={orng}
                alt="Developer 4"
                className="w-full h-auto rounded-full md:w-25 "
              />
              <p className="text-white mt-2 font-semibold">Nep</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Border2;
