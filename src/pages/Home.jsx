import React, { useState } from "react";

import { NavbarMain } from "../component/NavbarMain";
import banner from "../assets/Banner-2.png";
import Union from "../assets/Union.png";
import { Footer } from "../component/Footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavbarMain />
      <div className="container">
        <div className="flex flex-col justify-center items-center text-center h-96">
          <h2
            style={{ fontFamily: `'Covered By Your Grace', cursive` }}
            className="font-normal text-3xl mt-3 text-green"
          >
            Success stories
          </h2>
          <h1 className="text-6xl font-semibold p-2">
            Every success journey <br /> we’ve encountered.
          </h1>
        </div>
        <div class="grid grid-col-3 grid-flow-col gap-7">
          <div className="flex flex-col items-center">
            <img src={banner} alt="banner" className="rounded-3xl" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-5xl font-semibold pt-7">
              Enhance fortune 50 <br /> company’s insights <br /> teams research{" "}
              <br /> capabilities
            </h1>
            <div className="flex flex-row gap-3 h-52 items-center">
              <div className="rounded-full w-3 bg-green h-3"></div>
              <div className="rounded-full w-3 bg-gray3 h-3"></div>
              <div className="rounded-full w-3 bg-gray3 h-3"></div>
            </div>
            <button className="text-white font-bold bg-black border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-normal rounded-full text-base px-5 py-5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 h-16 w-52">
              Explore More
            </button>
          </div>
        </div>
        <div className="grid grid-col-3 grid-flow-col gap-3 bg-light-green rounded-3xl">
          <div className="mt-5 mx-8">
            <h2
              style={{ fontFamily: `'Covered By Your Grace', cursive` }}
              className="font-normal text-3xl text-color-1 mt-12 mx-14 m-3"
            >
              What’s on your mind
            </h2>
            <h1 className="text-5xl font-semibold mx-14 mb-12">
              Ask Questions
            </h1>
            <img src={Union} alt="Union" />
          </div>
          <div className="m-16">
            <div className="collapse collapse-plus bg-transparent">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Do you offer freelancers?
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-transparent">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What’s the guarantee that I will be satisfied with the hired
                talent?
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-transparent">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Can I hire multiple talents at once?
              </div>
              <div className="collapse-content">
                <p>
                  If unhappy with a project, communicate with the freelancer,
                  allow for revisions, and refer to the agreement. Escalate to
                  platform support if needed, considering mediation. Review
                  policies, seek collaborative solutions for resolution.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-transparent">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Why should I not go to an agency directly?
              </div>
              <div className="collapse-content">
                <p>
                  If unhappy with a project, communicate with the freelancer,
                  allow for revisions, and refer to the agreement. Escalate to
                  platform support if needed, considering mediation. Review
                  policies, seek collaborative solutions for resolution.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-transparent">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Who can help me pick a right skillset and duration for me?
              </div>
              <div className="collapse-content">
                <p>
                  If unhappy with a project, communicate with the freelancer,
                  allow for revisions, and refer to the agreement. Escalate to
                  platform support if needed, considering mediation. Review
                  policies, seek collaborative solutions for resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
