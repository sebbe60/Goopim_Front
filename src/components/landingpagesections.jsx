import React from "react";
import Link from "next/link";
export default function LandingPageSections() {
  return (
    <>
      <div className="font-bold border-t-2 border-[#ff2727]">
        {" "}
        <h1 className="font-bold text-white text-center py-5 text-xl">
          Why people choose Goopim
        </h1>
      </div>
      <div className="flex flex-col items-center sm:flex-row sm:justify-around m-4 text-white py-10">
        <div className="sm:w-1/3 pb-4">
          <h1 className="text-primary font-bold">Save Time</h1>
          <p className="font-300">
            Goopim helps you increase your earnings by winning more jobs and
            getting paid on time with professional payment requests. With
            Goopim, you can grow your freelance business and increase your
            earnings over time.
          </p>
        </div>

        <div className="sm:w-1/3 rounded-2xl">
          <img src="/savetime.jpg" className="rounded-full " />
        </div>
      </div>

      <div className="flex flex-col items-center sm:flex-row sm:justify-around m-4 text-white py-10">
        <div className="hidden sm:block w-1/3">
          <img src="/increase-earning.webp" className="rounded-full" />
        </div>
        <div className="sm:w-1/3 pb-4">
          <h1 className="text-primary font-bold">Increases Earnings</h1>
          <p className="font-300">
            Goopim helps you increase your earnings by winning more jobs and
            getting paid on time with professional payment requests. With
            Goopim, you can grow your freelance business and increase your
            earnings over time.
          </p>
        </div>

        <div className="sm:hidden">
          <img src="/increase-earning.webp" className="rounded-full" />
        </div>
      </div>

      <div className="flex flex-col items-center sm:flex-row sm:justify-around m-4 text-white py-10">
        <div className="sm:w-1/3 pb-4">
          <h1 className="text-primary font-bold">
            Connect to global workforce
          </h1>
          <p className="font-300">
            Goopim helps you increase your earnings by winning more jobs and
            getting paid on time with professional payment requests. With
            Goopim, you can grow your freelance business and increase your
            earnings over time.
          </p>
        </div>

        <div className="sm:w-1/3">
          <img src="/customersupport.png" className="rounded-full" />
        </div>
      </div>
      <div className="sm:py-10">
        <div className="pl-4 flex justify-around mb-5">
          <div className="bg-white  border-2 border-grey-700 p-2 w-1/3">
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <h2 className="font-bold ml-2">Stick to your budget</h2>
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="bg-white  border-2 border-grey-700 p-2  w-1/3">
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>

              <h2 className="font-bold ml-2">Get quality work done quickly</h2>
            </div>
            <p>
              Hand your project over to a talented freelancer in minutes, get
              long-lasting results.
            </p>
          </div>
        </div>
        <div className="pl-4 flex justify-around mt-4  ">
          <div className="bg-white  border-2 border-grey-700 p-2 w-1/3">
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>

              <h1 className="font-bold ml-2">Pay when you're happy</h1>
            </div>
            <p>
              {" "}
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>
          </div>
          <div className="bg-white  border-2 border-grey-700 p-2  w-1/3">
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>

              <h2 className="font-bold ml-2">Count on 24/7 support</h2>
            </div>
            <p>
              Our round-the-clock support team is available to help anytime,
              anywhere.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="py-10 md:py-20">
            <div className="max-w-3xl mx-auto text-center sm:px-10 pb-5 pb-12 md:pb-20 bg-secondary p-2 rounded">
              <p className=" mb-4 font-black p-2 text-3xl">
                Sign up for Goopim Today!
              </p>
              <p className="text-xl text-primary-dark">
                Looking to find the best freelancer for your project, or looking
                for a job? Sign up today and get started!
              </p>
              <button className="bg-primary-dark text-white rounded p-2 mt-10">
                Get your FREE Account
              </button>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}
