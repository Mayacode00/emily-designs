import React, { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { CgArrowLongDown, CgArrowLongRight } from "react-icons/cg";
import { AiOutlineAntDesign } from "react-icons/ai";
import "../home/home.scss";

function Home() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <>
      <body>
        <div className="flex h-screen cursor-default text-yellow-900">
          <div className="border-yellow-900 border-b-2 flex justify-between top-10 w-11/12 absolute mx-16">
            <h3 className="text-3xl">E ^^ i l y</h3>
            <div className="bg-yellow-900 flex w-20 justify-between py-3 px-3">
              <FaSearch
                className="cursor-pointer"
                size={15}
                style={{ color: "#ffffff" }}
              />
              <div onClick={handleClick}>
                {!nav ? (
                  <FaBars size={15} style={{ color: " #ffffff" }} />
                ) : (
                  <FaTimes size={15} style={{ color: " #ffffff" }} />
                )}
              </div>
              <nav
                className={
                  !nav
                    ? "hidden"
                    : "absolute transition ease-in w-52 text-center text-amber-50 right-0 top-10"
                }
              >
                <ul className=" font-bold items-center">
                  <li className="anchor">Partners</li>
                  <li className="anchor">Projects</li>
                  <li className="anchor">Gallery</li>
                  <li className="anchor">Contact us</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="w-8/12 pl-16">
            <h1 class="start">
              <span class="end1">S</span>
              <span class="middle1">eamlessl</span>
              <span class="middle2">
                <AiOutlineAntDesign size={80} style={{ color: "#3b2619" }} />
              </span>
              <span class="end2">y</span>
            </h1>
            <div className="flex items-center w-52 justify-between cursor-pointer">
              <p className="font-semibold text-xl underline hover:text-yellow-600 transition ease-in duration-500">
                Just the community
              </p>
              <CgArrowLongRight
                className="mt-1"
                size={15}
                style={{ color: "#CC9966" }}
              />
            </div>
            <div className="mt-10 ml-0 flex justify-between w-10/12">
              <div className="init"></div>
              <div className="init2"></div>
            </div>
            <div className="mt-10 w-96">
              <h3 className="text-yellow-600 text-3xl font-semibold">
                Hariosh White House
              </h3>
              <p className="text-2xl mt-4 font-medium">
                On the Isle of Skye's rugged west coast Scotland
              </p>
            </div>
            <div className="bg-yellow-100 w-24 h-5 mt-10"> </div>
            <p className="font-medium ml-6 -translate-y-8 hover:text-yellow-600 transition ease-in duration-500 cursor-pointer">
              Learn More
            </p>
            <CgArrowLongDown
              className="mt-4"
              size={20}
              style={{ color: "#CC9966" }}
            />
            <div className="int-1">
              <div className="bg-white w-10/12 h-10"></div>
            </div>
          </div>
          <div className="w-1/2 bg-cont">
            <section class="rw-wrapper">
              <div class="rw-words rw-words-1">
                <span>01</span>
                <span>02</span>
              </div>
            </section>
            <div className="w-40 mt-2 text-2xl ml-80 text-yellow-900">
              <p>
                All fine architectural values are human values, else not
                valuable
              </p>
            </div>
            <div className="int-3"></div>
            <p className="text-dec">Emily Jerkens // interior Design</p>
          </div>
        </div>
      </body>
    </>
  );
}

export default Home;
