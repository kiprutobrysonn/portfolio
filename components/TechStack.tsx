"use client";

import { companies } from "@/data";
import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <section id="stack" className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-16">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex max-w-32 md:max-w-60 gap-2 items-center">
                <Image
                  className="w-4 sm:w-5 md:w-8 lg:w-10"
                  alt={company.name}
                  src={company.img}
                  loading="lazy"
                />
                <Image
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="w-16 sm:w-18 md:w-20 lg:w-24"
                  src={company.nameImg}
                  alt={company.name}
                  loading="lazy"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;