"use client";
import { LandingNav } from "@/components/nav/landing-nav";
import Image from "next/image";
import { useState } from "react";
import imageOne from "@/assets/images/car-1.png";
import imageTwo from "@/assets/images/image-2.png";
import imageThree from "@/assets/images/image-3.png";
import imageFour from "@/assets/images/image-4.png";
import { SpaceWrapper } from "@/components/wrapper/space-wrapper";
import driverIcon from "@/assets/svgs/driver.svg";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const carList = [
    "Mayback",
    "Bently",
    "Lamborghini",
    "Rolls Royce",
    "McLaren",
  ];
  return (
    <>
      <LandingNav />
      <section className="h-screen heroBg min-h-screen flex-col  flex items-center justify-center ">
        <div className="leading-28">
          <p className="font-valentiamo text-[100px] text-white text-center">
            Ride in luxury
          </p>
          <p className="font-valentiamo text-[100px] text-white text-center">
            Arrive In Prestige
          </p>
        </div>
        <div className="w-[40%] mx-auto text-white my-8">
          <p className="font-manrope-regular text-center text-lg">
            Initiating a business venture may appear overwhelming, yet our forte
            lies in simplifying the entire process for you.
          </p>
        </div>
        <div className="mt-12">
          <button className="bg-white font-satoshi border-2 border-[#FFC781] px-8 py-4 rounded-full">
            Join the waitlist
          </button>
        </div>
        <div className="absolute bottom-0 w-full bg-[#FFFFFF1A] py-4 flex justify-center gap-6">
          {carList.map((item, index) => {
            return (
              <p
                className={`${
                  index === activeIndex ? "text-white" : "text-[#a4a3a3]"
                } font-manrope-medium text-sm`}
                key={item}
              >
                {item}
              </p>
            );
          })}
        </div>
      </section>
      <section className="py-20 flex justify-center items-center">
        <div className="w-1/2 mx-auto">
          <p className="text-2xl font-manrope-medium text-[#D8D8D8] text-center">
            Prime X is not just a ride—it is a statement. Designed exclusively
            for{" "}
            <span className="text-[#BC9E69]">High-Net-Worth Individuals</span> ,
            diplomats, and business leaders, we curate each journey to reflect
            the prestige and refinement you deserve.
          </p>
          <div className="flex items-center gap-2 justify-center py-10">
            <Image src={imageOne} alt="" />
            <Image src={imageTwo} alt="" />
            <Image src={imageTwo} alt="" />
            <Image src={imageFour} alt="" />
          </div>
        </div>
      </section>
      <SpaceWrapper>
        <section>
          <div>
            <p className="text-[#BCB569] font-manrope-medium text-2xl">
              How it works
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <div className="w-full h-[400px] bg-[#1A1A1C] rounded-lg"></div>
            <div className="w-full h-[400px] bg-[#1A1A1C] rounded-lg"></div>
            <div className="w-full h-[400px] bg-[#1A1A1C] rounded-lg"></div>
          </div>
        </section>
      </SpaceWrapper>
      <SpaceWrapper>
        <section className="mt-20">
          <div className="font-satoshi">
            <p className="text-[#E0E0E0] text-7xl  ">Manage</p>
            <p className="text-[#E0E0E0] text-7xl  ">Money Wisely</p>
          </div>
          <div className="flex items-center justify-between my-10">
            <p className="w-1/2 text-[#6B7280] font-satoshi text-lg">
              Master the Art of Financial Management: Strategies and Tools to
              Optimize Your Budget, Build Wealth, and Secure a Stable Financial
              Future
            </p>
            <button className="bg-[#BC9E69] rounded-full p-4  px-8">
              <p className="text-base font-manrope-regular text-white">
                Get Started Free
              </p>
            </button>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="border w-full  bg-[#151715] flex justify-center items-center flex-col py-8  border-[#FFFFFF1A] rounded-[20px]">
              <p className="font-satoshi text-center text-white text-4xl">
                The Luxury Experience
              </p>
              <p className="text-lg font-satoshi font-extralight text-white w-[70%] mt-3 mx-auto text-center">
                We offer a range of services and support to ensure your transit
                experience is smooth and enjoyable
              </p>

              <div className="my-8">
                <Image src={driverIcon} alt="" />
              </div>
            </div>
            <div className="w-full">
              <Image alt="" src={imageThree} />
            </div>
          </div>
        </section>
      </SpaceWrapper>
    </>
  );
}
