"use client";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { navItems } from "@/data";
import "@/styles/global.css";

const DynamicHero = dynamic(() => import("@/components/Hero"), { loading: () => <HeroSkeleton />});
const DynamicGrid = dynamic(() => import("@/components/Grid"), { loading: () => <GridSkeleton />});
const DynamicRecentProjects = dynamic(() => import("@/components/RecentProjects"), {loading: () => <DefaultSkeleton />});
const DynamicTechStack = dynamic(() => import("@/components/TechStack"), {loading: () => <DefaultSkeleton />});
const DynamicExperience = dynamic(() => import("@/components/Experience"), { loading: () => <DefaultSkeleton />});
const DynamicEducation = dynamic(() => import("@/components/Education"), {loading: () => <DefaultSkeleton />});
const DynamicApproach = dynamic(() => import("@/components/Approach"), {loading: () => <DefaultSkeleton />});
const DynamicFooter = dynamic(() => import("@/components/Footer"), {loading: () => <DefaultSkeleton />});

function HeroSkeleton() {
  return (
    <div className="py-24">
      <div className="w-full h-2 mx-auto bg-gray-200 rounded dark:bg-gray-700 mt-20" />
      <div className="w-full h-2 mx-auto bg-gray-200 rounded dark:bg-gray-700 mt-4" />
      <div className="w-full h-2 mx-auto bg-gray-200 rounded dark:bg-gray-700 mt-4" />
    </div>
  );
}

function GridSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-20 xl:mt-12 gap-8 xl:gap-12">
      {Array.from({ length: 2 }).map((_, index) => (
        <div key={index} className="w-full">
          <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-800"></div>
          <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-900"></h1>
          <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-900"></p>
        </div>
      ))}
    </div>
  );
}

function DefaultSkeleton() {
  return (
    <div className="grid grid-cols-1 pt-4 xl:mt-12 xl:gap-12 gap-8">
      <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-800"></div>
    </div>  
  );
}

function LoadingState() {
  return (
    <section>
      <div className="container px-6 py-10 mx-auto animate-pulse">
        <HeroSkeleton />
        <GridSkeleton />
        <DefaultSkeleton />
        <DefaultSkeleton />
      </div>
    </section>
  );
}

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip scroll-smooth">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        {isLoading ? (
          <LoadingState />
        ) : (
          <>
            <DynamicHero />
            <DynamicGrid />
            <DynamicRecentProjects />
            <DynamicTechStack />
            <DynamicExperience />
            <DynamicEducation />
            <DynamicApproach />
            <DynamicFooter />
            <SpeedInsights />
            <Analytics />
          </>
        )}
      </div>
    </main>
  );
};

export default Home;