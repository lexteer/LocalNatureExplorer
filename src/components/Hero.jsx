import React, { useState, useRef } from "react";
import Navigation from './Navigation.jsx'
import Partners from './Partners.jsx'
import { LoadScript, Autocomplete } from "@react-google-maps/api";
//import FeaturedTrails from './FeaturedTrails'

function Hero() {

  const autocompleteRef = useRef(null);

  const handlePlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      console.log("Selected Place:", place);
      // You can extract details like place.geometry.location, place.formatted_address, etc.
    }
  };

  return (
    <section className="min-h-svh flex flex-col flex-grow">
      <Navigation />
      <div className="flex-grow grid lg:mt-10 mt-16">
        <div className="grid lg:grid-cols-2 place-items-center gap-8 w-4/5 mx-auto">
          <h1 className="leading-tight text-black font-bold font-montserrat clamp text-center lg:text-left">
            DISCOVER THE <span className="text-green-light">BEAUTY</span> AROUND
            YOU
          </h1>
          <img
            src="src/assets/hiking.svg"
            className="w-full self-end -mb-[0.1rem] filter"
          ></img>
        </div>
        <div className="bg-black py-10">
          <div className="w-4/5 mx-auto flex flex-wrap gap-10">
            <p className="text-white text-center lg:text-left ~text-lg/xl font-montserrat lg:w-1/2">
              Discover the best of your local outdoors! Explore nearby{" "}
              <span className="text-green-light ~text-xl/2xl font-semibold">
                parks
              </span>
              , learn about local{" "}
              <span className="text-violet-light ~text-xl/2xl font-semibold">
                wildlife
              </span>
              , find scenic{" "}
              <span className="text-green-light ~text-xl/2xl font-semibold">
                trails
              </span>
              , and join exciting{" "}
              <span className="text-violet-ultralight ~text-xl/2xl font-semibold">
                activities
              </span>
              . Whether you&apos;re a nature enthusiast or just looking for a
              place to unwind, we bring the outdoors closer to you.
            </p>

            <div className="self-center justify-center flex mx-auto">
      <LoadScript googleMapsApiKey="" libraries={["places"]}>
        <div className="flex border-2 bg-white rounded-full border-white overflow-hidden max-w-md mx-auto font-montserrat">
          <Autocomplete
            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
            onPlaceChanged={handlePlaceChanged}
          >
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full outline-none bg-white text-black text-sm px-4 py-3 rounded-full"
            />
          </Autocomplete>
          <button
            type="submit"
            className="flex items-center justify-center bg-violet-base hover:bg-violet-dark transition-all px-5 text-sm text-white whitespace-nowrap rounded-full"
          >
            Get started
          </button>
        </div>
      </LoadScript>
    </div>

          </div>
          <div className="pt-32">
            <Partners />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
