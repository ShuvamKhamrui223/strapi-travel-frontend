"use client";

import { useRouter } from "next/navigation";

const ServerDown = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 p-4 font-sans">
      <div className="flex flex-col items-center justify-center text-center bg-white p-8 sm:p-12 rounded-2xl shadow-xl max-w-lg w-full transition-all duration-300">
        {/* Icon container with a subtle background and shadow */}
        {/* <div className="bg-red-100 text-red-600 p-4 rounded-full mb-6 transform transition-transform duration-300 hover:scale-105">
          <WifiOff size={48} strokeWidth={2.5} />
        </div> */}

        {/* Main title for the notification */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-2 leading-tight">
          Server is Down
        </h1>

        {/* Subtitle providing more detail */}
        <p className="text-lg sm:text-xl text-slate-600 mb-6">
          The site is currently experiencing some trouble.
        </p>

        {/* Informative message for the user */}
        <p className="text-sm sm:text-base text-slate-500 max-w-sm mb-8">
          We're working hard to get things back online. Please check back again
          in a little while. Thank you for your patience!
        </p>

        {/* Simple button or link to refresh the page */}
        <button
          onClick={() => router.refresh()}
          className="bg-red-500 text-white cursor-pointer active:scale-90  font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default ServerDown;
