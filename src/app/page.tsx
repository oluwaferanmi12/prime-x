import Image from "next/image";

export default function Home() {
  return (
    <>
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
      </section>
    </>
  );
}
