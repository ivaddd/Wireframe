import { Fragment } from "react";
import "./App.css";
import Nav from "./components/navbar/nav";
import Border from "./components/border/border";
import Border2 from "./components/border/border2";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Fragment>
      <div className="h-full w-full bg-black">
        <div className="h-screen w-full bg relative bg-cover object-bottom">
          <div className=" md:absolute md:bottom-0 md:left-0 p-10 pt-20 md:w-[30%] text-justify">
            <p className="text-4xl font-bold text-white bg-black bg-opacity-40 p-3 pr-5">
              Heading
            </p>
            <p className="mt-2 text-xl text-white">
              My Chemical Romance is a band which,according to the media, has
              the genre of pop punk,post-hardcore,"punk revival",alternative
              rock.
            </p>
          </div>
          <Nav />
        </div>
        <Border />
        <Border2 />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
