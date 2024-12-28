"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {

  return (
    <section>
      <div className="container px-6 py-10 mx-auto animate-pulse">
        <div className="w-full mx-auto h-12 bg-gray-200 dark:bg-gray-800 rounded-xl mb-16"></div>
        <div className="w-full h-2 mx-auto bg-gray-200 rounded dark:bg-gray-700 mt-4"></div>
        <div className="w-full h-2 mx-auto bg-gray-200 rounded dark:bg-gray-700 mt-4"></div>
        <div className="w-full h-2 mx-auto bg-gray-200 rounded dark:bg-gray-700 mt-4"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-20 xl:mt-12 gap-8 xl:gap-12">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="w-full">
              <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-800"></div>
              <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-900"></h1>
              <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-900"></p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 pt-4 xl:mt-12 xl:gap-12 gap-8">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="w-full">
              <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-800"></div>
            </div>
          ))}
        </div>
        <div className="w-1/3 mx-auto h-12 bg-gray-200 dark:bg-gray-800 rounded-xl mb-16 mt-16"></div>
      </div>
    </section>
  );
}
}