"use client";
import { LandingNav } from "@/components/nav/landing-nav";
import Image from "next/image";
import { useState } from "react";
import imageOne from "@/assets/images/car-1.png";
import imageTwo from "@/assets/images/image-2.png";
import imageThree from "@/assets/svgs/image-3.svg";
import imageFour from "@/assets/images/image-4.png";
import { SpaceWrapper } from "@/components/wrapper/space-wrapper";
import driverIcon from "@/assets/svgs/driver.svg";
import arrowBg from "@/assets/svgs/arrow-bg.svg";
import ellipsisIcon from "@/assets/svgs/ellipsis-icon.svg";
import { Col, Row } from "antd";
import phoneScreen from "@/assets/svgs/phone-screen.svg";
import carRounded from "@/assets/svgs/car-rounded.svg";
import footerIcon from "@/assets/svgs/prime-x-footer.svg";
import youtubeicon from "@/assets/svgs/youtube-icon.svg";
import tiktokIcon from "@/assets/svgs/tikTok.svg";
import linkedInIcon from "@/assets/svgs/linkedin.svg";
import instagramIcon from "@/assets/svgs/instagram.svg";
import facebookIcon from "@/assets/svgs/facebook.svg";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const carList = [
    "Mayback",
    "Bently",
    "Lamborghini",
    "Rolls Royce",
    "McLaren",
  ];
  const firstList = [
    "Company",
    "Features",
    "Pricing",
    "About us",
    "Contact",
    "Pricing",
  ];
  const secondList = [
    "Resource",
    "Blog",
    "Customer Stories",
    "Information",
    "Legal",
    "Payments",
  ];
  const thirdList = ["Help", "Faq", "Help Center", "Support"];
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
            <Image src={imageThree} alt="" />
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
          <div className="mt-8 flex h-[680px] items-stretch gap-4">
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

              <div className="w-4/5 h-[300px] mx-auto flex justify-center relative mt-16 ">
                <div className="bg-[#313431] absolute rounded-4xl z-50 top-15   w-full py-8 text-center text-2xl ">
                  <p className="text-[#E0E0E0] font-satoshi">
                    On-Demand Chauffeur Service
                  </p>
                </div>
                <div className="bg-[#3C3E3C]  absolute top-12 w-[98%] mx-auto rounded-4xl z-40  py-8 text-center text-2xl "></div>
                <div className="bg-[#464946] absolute top-9  w-[96%] mx-auto rounded-4xl z-30  py-8 text-center text-2xl "></div>
                <div className="bg-[#575A57] absolute top-6  w-[94%]  mx-auto rounded-4xl z-20  py-8 text-center text-2xl "></div>
              </div>
            </div>
            <div className="w-full h-full seatBg flex items-center flex-col justify-end">
              <div className="flex flex-col items-center gap-2 text-white">
                <p className="text-3xl font-satoshi">
                  Our Services and Support
                </p>
                <p className="w-[60%] mx-auto text-center font-satoshi">
                  We offer a range of services and support to ensure your
                  cycling experience is smooth and enjoyable
                </p>
                <button className="flex items-center mt-4 backdrop-blur-2xl bg-[#FFFFFF4D] px-4 py-2 rounded-full  justify-center gap-2">
                  <p className="font-satoshi">Get Started</p>
                  <span>
                    <Image className="w-11 h-11" src={arrowBg} alt="" />
                  </span>
                </button>
                <div className="my-4">
                  <span>
                    <Image src={ellipsisIcon} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SpaceWrapper>
      <SpaceWrapper>
        <Row align={"middle"} className="bg-[#E3CA9F] mt-20 rounded-[20px] ">
          <Col xs={12}>
            <div className="flex flex-col items-start justify-center pl-12">
              <p className="text-[64px] font-valentiamo">
                Luxury Without <br /> the Hassle
              </p>
              <p className="text-lg font-satoshi my-4 w-3/5">
                Your time is precious. Let every journey reflect your status.
              </p>
              <button className="bg-black rounded-full px-6 py-4 mt-6">
                <p className="text-base text-white">Join the waitlist</p>
              </button>
            </div>
          </Col>
          <Col xs={12}>
            <div className="flex items-end justify-center pt-8">
              <Image src={phoneScreen} alt="" />
            </div>
          </Col>
        </Row>
      </SpaceWrapper>

      <SpaceWrapper>
        <div className="mt-12 bg-[#2D312D] flex flex-col items-center py-12 rounded-4xl">
          <p className="font-manrope-regular text-[#D8D8D8] text-3xl w-3/5 mx-auto text-center">
            Prime X is not just a ride—it is a statement. Designed exclusively
            for{" "}
            <span className="text-[#BC9E69]">High-Net-Worth Individuals</span> ,
            diplomats, and business leaders,
          </p>
          <div className="my-20">
            <span>
              <Image src={carRounded} alt="" />
            </span>
          </div>
          <Row justify={"center"} align={"middle"} className="w-full px-20">
            <Col xs={20}>
              <Row justify={"center"} align={"middle"}>
                <Col xs={8}>
                  <div>
                    <p className="text-[#BC9E69]  font-manrope-medium text-lg mb-2">
                      Unmatched Exclusivity{" "}
                    </p>
                    <p className="text-[#D8D8D8] text-base w-3/5">
                      {" "}
                      A concierge service reserved for the elite
                    </p>
                  </div>
                </Col>
                <Col xs={8}>
                  <div>
                    <p className="text-[#BC9E69]  font-manrope-medium text-lg mb-2">
                      Security and Discretion{" "}
                    </p>
                    <p className="text-[#D8D8D8] text-base w-3/5">
                      {" "}
                      A concierge service reserved for the elite
                    </p>
                  </div>
                </Col>
                <Col xs={8}>
                  <div>
                    <p className="text-[#BC9E69]  font-manrope-medium text-lg mb-2">
                      Security and Discretion{" "}
                    </p>
                    <p className="text-[#D8D8D8] text-base w-3/5">
                      {" "}
                      A concierge service reserved for the elite
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </SpaceWrapper>
      <div className="bg-[#21221F] mt-12">
        <SpaceWrapper>
          <Row className="py-12">
            <Col xs={12}>
              <span>
                <Image src={footerIcon} alt="" />
              </span>
              <div className="my-4">
                <p className="text-[#E0E0E0] font-satoshi mb-2">
                  lekki phase 1, lagos nigeria
                </p>
                <p className="text-[#E0E0E0] font-satoshi">(248) 823-3200</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <span>
                  <Image src={youtubeicon} alt="" />
                </span>
                <span>
                  <Image src={tiktokIcon} alt="" />
                </span>
                <span>
                  <Image src={linkedInIcon} alt="" />
                </span>
                <span>
                  <Image src={instagramIcon} alt="" />
                </span>
                <span>
                  <Image src={facebookIcon} alt="" />
                </span>
              </div>
            </Col>
            <Col xs={12}>
              <div className="flex items-stretch justify-between ">
                <div className="flex flex-col gap-3 ">
                  {firstList.map((item) => {
                    return (
                      <p
                        key={item}
                        className="text-[#E0E0E0] font-satoshi text-base"
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-3 ">
                  {secondList.map((item) => {
                    return (
                      <p
                        key={item}
                        className="text-[#E0E0E0] font-satoshi text-base"
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-3 ">
                  {thirdList.map((item) => {
                    return (
                      <p
                        key={item}
                        className="text-[#E0E0E0] font-satoshi text-base"
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </SpaceWrapper>
      </div>
    </>
  );
}
