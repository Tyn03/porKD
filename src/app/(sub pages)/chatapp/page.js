import React from "react";
import Image from "next/image";
import projectImage from "../../../../public/background/haugai.png"; // Thay bằng hình ảnh dự án của bạn
import den from "../../../../public/background/den.jpg";
import ImageSlider from "./imageSlider";

const page = () => {
  return (
    <div className="relative w-full min-h-screen bg-black">
      <Image
        src={den}
        alt="Next.js Portfolio website&#39;s about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-100"
        priority
        sizes="100vw"
      />
      {/* Navigation */}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-8">
        {/* Image Section */}
        <div className="mb-8">
          <ImageSlider />
        </div>

        {/* Short description */}

        {/* The short run section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">
            Introduction
          </h2>
          <div className="container mx-auto p-4">
            <p className="text-lg text-gray-300 leading-relaxed">
              This chat application is built using modern web development
              technologies to provide a seamless, real-time messaging
              experience.
            </p>

            <ul className="list-disc pl-6 mt-4 text-gray-200">
              <li className="mb-2">
                <strong className="text-white">Real-time Messaging:</strong>{" "}
                With the integration of Pusher, messages are delivered instantly
                to the user&#39;s browser without the need for page reloads.
              </li>
              <li className="mb-2">
                <strong className="text-white">User Authentication:</strong>{" "}
                NextAuth provides secure and flexible user authentication,
                supporting multiple login options.
              </li>
              <li className="mb-2">
                <strong className="text-white">Responsive Design: </strong>{" "}
                Tailwind CSS ensures the chat app works seamlessly across
                different screen sizes, offering a mobile-first experience.
              </li>
            </ul>
          </div>
        </section>

        {/* Additional details */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">
            Tech Stack & Learnings
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-300">
            <li>
              <strong>Backend:</strong> Worked with MongoDB.
            </li>
            <li>
              <strong>Frontend:</strong> React.js, Tailwind for dynamic UI,
              using component-based architecture.
            </li>
            <li>
              <strong>Tools:</strong> NextAuth, Pusher.
            </li>
          </ul>
        </section>

        {/* Reflection Section */}
      </div>
    </div>
  );
};

export default page;
