import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://github.com/blacktscoder/payment-gateway"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Payment Gateway Backend</p>
                <p className="text-gray-500 text-[10px]">
                  NodeJs, NestJs, TypeORM, Postgres, GraphQL, gRPC, Redis, Kafka, RabbitMQ, Passport, Bcrypt, JWT, Express, Docker
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://github.com/blacktscoder/healthcare-api"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <div className="p-3">
                <p className="text-white font-semibold text-xl"> Healthcare System </p>
                <p className="text-gray-500 text-[10px]">
                The healthcare system is designed to improve patient care and optimize doctor efficiency, leveraging Django REST Framework alongside Next.js, TypeScript, Python, and GraphQL.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://github.com/blacktscoder/globalone-ecommerce-app"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                GlobalOne e-commerce platform
                </p>
                <p className="text-gray-500 text-[10px]">
                The GlobalOne e-commerce platform: backend (Laravel with GraphQL) and frontend (Next.js with React and GraphQL) for incorporating features like real-time updates, search functionality.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://github.com/blacktscoder/web-banking-app"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Banking Web Application </p>
                <p className="text-gray-500 text-[10px]">
                This project is a payment gateway system built using NestJS, TypeScript, Express, gRPC, Redis, PostgreSQL, and GraphQL.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
