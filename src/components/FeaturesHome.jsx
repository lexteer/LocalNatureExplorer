import React from "react";
import { IoTrailSignOutline } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { PiFlowerTulip } from "react-icons/pi";
import { LuTreePine } from "react-icons/lu";
import { GrAttraction } from "react-icons/gr";

function FeaturesHome() {
  return (
    <section className="bg-black h-full font-montserrat pb-5">
      {/* TITLE TEXT */}
      <div className="flex flex-col items-center text-white text-center font-montserrat pt-20 w-4/5 mx-auto">
        <h2 className="text-lg text-green-normal">What we offer</h2>
        <h1 className="text-5xl font-medium">
          Guides to local
          <br />
          nature activities
        </h1>
      </div>


      {/* CARDS / FLEX CONTAINER */}
      <div className="flex flex-wrap text-white w-4/5 mx-auto flex-grow mt-10 gap-14 justify-center">


        {/* #1 */}
        <div className="flex-1 basis-[25rem]  max-w-[60rem]">
          <div className="h-full flex flex-col justify-around gap-4 p-8 rounded-md bg-[#1B1E1C] text-white shadow-green w-full">
            {/* Icon */}
            <div className="flex justify-between items-center">
              <div className="text-green-normal text-6xl">
              <IoTrailSignOutline />
              </div>
              <div className="text-5xl text-[#536d63ce] font-semibold">01</div>
            </div>
            {/* Title */}
            <h1 className="text-3xl font-bold tracking-tight leading-tight text-green-light">
              Local Hiking & Biking Trails
            </h1>

            {/* Description */}
            <p className="text-base leading-relaxed text-white/90">
            Explore nearby trails for hiking and biking. We&apos;ll guide you to the best spots,
            whether you&apos;re looking for a peaceful walk or an exciting ride.
            </p>

            {/* Button */}
            <a href="" className="text-green-normal hover:text-green-light font-semibold flex items-center gap-3 transition-all">
              Learn More
              <FaLongArrowAltRight/>
            </a>
          </div>
        </div>

        {/* #2 */}
        <div className="flex-1 basis-[25rem]  max-w-[60rem]">
          <div className="h-full flex flex-col justify-around gap-4 p-8 rounded-md bg-[#1B1E1C] text-white shadow-green w-full">
            {/* Icon */}
            <div className="flex justify-between items-center">
              <div className="text-green-normal text-6xl">
              <PiFlowerTulip />
              </div>
              <div className="text-5xl text-[#536d63ce] font-semibold">02</div>
            </div>
            {/* Title */}
            <h1 className="text-3xl font-bold tracking-tight leading-tight text-green-light">
              Discover Wildlife
            </h1>

            {/* Description */}
            <p className="text-base leading-relaxed text-white/90">
            Dive into the wonders of the natural world. Spot native species, explore their habitats,
            and gain a deeper appreciation for the wildlife that thrives in your local area.
            </p>

            {/* Button */}
            <a href="" className="text-green-normal hover:text-green-light font-semibold flex items-center gap-3 transition-all">
              Learn More
              <FaLongArrowAltRight/>
            </a>
          </div>
        </div>

        {/* #3 */}
        <div className="flex-1 basis-[25rem]  max-w-[60rem]">
          <div className="h-full flex flex-col justify-around gap-4 p-8 rounded-md bg-[#1B1E1C] text-white shadow-green w-full">
            {/* Icon */}
            <div className="flex justify-between items-center">
              <div className="text-green-normal text-6xl">
              <LuTreePine />
              </div>
              <div className="text-5xl text-[#536d63ce] font-semibold">03</div>
            </div>
            {/* Title */}
            <h1 className="text-3xl font-bold tracking-tight leading-tight text-green-light">
              Local Parks
            </h1>

            {/* Description */}
            <p className="text-base leading-relaxed text-white/90">
            Relax, play, and connect with nature at nearby parks.
             Whether you&apos;re looking for serene picnic spots or family-friendly activities,
             our guides point you to the best destinations.
            </p>

            {/* Button */}
            <a href="" className="text-green-normal hover:text-green-light font-semibold flex items-center gap-3 transition-all">
              Learn More
              <FaLongArrowAltRight/>
            </a>
          </div>
        </div>

        {/* #4 */}
        <div className="flex-1 basis-[25rem] max-w-[60rem]">
          <div className="h-full flex flex-col justify-around gap-4 p-8 rounded-md bg-[#1B1E1C] text-white shadow-green w-full">
            {/* Icon */}
            <div className="flex justify-between items-center">
              <div className="text-green-normal text-6xl">
              <GrAttraction />
              </div>
              <div className="text-5xl text-[#536d63ce] font-semibold">04</div>
            </div>
            {/* Title */}
            <h1 className="text-3xl font-bold tracking-tight leading-tight text-green-light">
              Visit Local Attractions
            </h1>

            {/* Description */}
            <p className="text-base leading-relaxed text-white/90">
            Experience the charm and culture of your area by exploring local attractions.
            From historical landmarks to unique cultural sites,
            find something new to enjoy in your community.
            </p>

            {/* Button */}
            <a href="" className="text-green-normal hover:text-green-light font-semibold flex items-center gap-3 transition-all">
              Learn More
              <FaLongArrowAltRight/>
            </a>
          </div>
        </div>



        
      </div>
    </section>
  );
}

export default FeaturesHome;
