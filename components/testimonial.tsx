"use client";

import React from "react";
import Slider from "react-slick";

// Types
type Achievement = {
  icon: string;
  value: string;
  label: string;
};

type Testimonial = {
  name: string;
  role: string;
  review: string;
  avatar: string;
};

// Data
const achievements: Achievement[] = [
  { icon: "💼", value: "7+", label: "Years of Experience" },
  { icon: "❤️", value: "100%", label: "Happy Customers" },
  { icon: "👥", value: "300+", label: "Projects Completed" },
];

const testimonials: Testimonial[] = [
  {
    name: "Mr. Usman Butt",
    role: "Client of Company",
    review:
      "From the initial consultation to the final installation, the team maintained excellent communication and professionalism.!",

    avatar: "🧑‍💼",
  },
  {
    name: "Ms. Aliza",
    role: "Client",
    review:
      "Today I had my countertops put, and I was pleasantly surprised by how well they turned out. I’m overjoyed.",
    avatar: "👩‍💼",
  },
  {
    name: "Ali Khan",
    role: "Client",
    review: "Great service and quick turnaround!",
    avatar: "👨‍💻",
  },
  {
    name: "Fatima Zia",
    role: "Client",
    review: "Highly recommend their professionalism.",
    avatar: "👩‍🎨",
  },
  {
    name: "Muhammad Asad",
    role: "Client",
    review: "Exceptional quality and support.",
    avatar: "👨‍🔧",
  },
  {
    name: "Sara Ahmed",
    role: "Client",
    review: "Friendly staff and amazing results!",
    avatar: "👩‍💻",
  },
];

// Achievements Component
const Achievements: React.FC = () => (
  <div className="flex flex-col sm:flex-row gap-6 md:gap-10 justify-center mb-12">
    {achievements.map((ach, idx) => (
      <div
        key={idx}
        className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl px-6 py-5 shadow-lg hover:scale-105 transition-transform duration-200"
      >
        <div
          className="text-3xl md:text-4xl"
          role="img"
          aria-label="achievement"
        >
          {ach.icon}
        </div>
        <div>
          <div className="text-2xl font-bold text-white">{ach.value}</div>
          <div className="text-sm text-white/80">{ach.label}</div>
        </div>
      </div>
    ))}
  </div>
);

// Testimonial Card
const TestimonialCard: React.FC<Testimonial> = ({
  name,
  role,
  review,
  avatar,
}) => (
  <div className="bg-white/90 border border-white/70 rounded-2xl shadow-xl p-7 flex flex-col items-center mx-4 h-[340px] max-w-md">
    <div className="mb-3 text-5xl" role="img" aria-label="avatar">
      {avatar}
    </div>
    <div className="font-semibold text-lg text-gray-800">{name}</div>
    <div className="text-sm text-blue-700 mb-3">{role}</div>
    <blockquote className="italic text-center text-gray-700 leading-relaxed overflow-hidden text-ellipsis line-clamp-5">
      &quot;{review}&quot;
    </blockquote>
  </div>
);


// Main Testimonial Section
const TestimonialSection: React.FC = () => {
  const settings = {
  dots: true,
  infinite: true,
  speed: 300,          // Faster, smoother transition duration (0.5s)
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // Slide every 3 seconds
  arrows: false,
  cssEase: "ease-in-out", // Smooth easing effect
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


  return (
    <section className="bg-gradient-to-b from-[#454d6b] to-[#23263a] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs md:text-sm font-bold text-blue-200 tracking-widest mb-2">
            CLIENT TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow mb-4">
            Our Achievements
          </h2>
          <p className="text-white/80 max-w-xl mx-auto">
            We are proud of our journey, our happy clients, and the milestones
            we’ve achieved together.
          </p>
        </div>

        {/* Achievements */}
        <Achievements />

        {/* Testimonials */}
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
