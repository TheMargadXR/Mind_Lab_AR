"use client";
import React from "react";
import Image from "next/image";
import ar from "../images/AR.png";

const About = () => {
  return (
    <div className="" id="learnMore">
      <div id="about">
        <div className="p-10">
          <div>
            <h2 className=" text-3xl text-center  text-[#0099CC]">
              What is Augmented Reality technology ?
            </h2>
          </div>
          <div className="flex justify-center ">
            <p className="text-[#33363B] text-center py-10">
              Augmented reality is an interactive experience that combines the
              real world and computer-generated content. The content can span
              multiple sensory modalities, including visual, auditory, haptic,
              somatosensory and olfactory.AR can be defined as a system Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Nemo, eaque?
              <br /> a combination of real and virtual worlds, real-time
              interaction, and accurate 3D registration of virtual and real
              objects. The overlaid sensory information can be constructive i.e.
              additive to the natural environment, or destructive i.e. masking
              of the natural environment. This experience is seamlessly
              interwoven with the physical world such that it is perceived as an
              immersive aspect
              <br />
              of the real environment. In this way, augmented reality alters
              one's ongoing perception of a real-world environment, whereas
              virtual reality completely replaces the user's real-world
              environment with a simulated one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
