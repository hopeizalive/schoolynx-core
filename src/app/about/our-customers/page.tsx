"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Testimonial Slider Data ---
const sliderTestimonials = [
  {
    image: '/assets/our-customer/3.jpeg',
    text: 'The platform took care of all the data management tasks, saving us a valuable amount of time. This in turn saved time for more important tasks like student development.',
    name: 'Aparna World School',
  },
  {
    image: '/assets/our-customer/1.png',
    text: 'We have been with Schoolynx since 2012. Its a wonderful experience.They helped us setting up and getting used to the modules phase by phase.',
    name: 'Wellspring International College , Vietnam',
  },
  {
    image: '/assets/our-customer/4.jpg',
    text: 'Its been great working with Schoolynx. All the same, you are doing a great job',
    name: 'ENIGREEN EDUCATIONAL SERVICES , Nigeria',
  },
  {
    image: '/assets/our-customer/2.png',
    text: 'It has been great working with Schoolynx, excellent software, and user friendly. Thank you team Schoolynx for the setup training, your availability, and patience to meet our needs anytime we reach out. - We are Grateful!!!',
    name: 'Vasco Career',
  },
  {
    image: '/assets/our-customer/5.jpg',
    text: 'Schoolynx is the best move towards a digital school. The initial installation is fast and easy. It is safe and reliable and above all it is cost friendly. Thank you Schoolynx.',
    name: 'Uzima University College',
  },
];

// --- Card Testimonials Data ---
const cardTestimonials = [
  {
    text: 'Sampoorna, developed in Free Software Schoolynx, will be deployed in all 15,000 schools in the State as part of the 100-day programme of the government',
    logo: '/assets/our-customer/card1.jpg',
    name: 'Project Sampoorna',
    org: 'Govt of Kerala - India',
  },
  {
    text: 'Help to maintain and use Information about Employees and Students in very Constructive way. Which makes any Educational Organization’s Life much easier.',
    logo: '/assets/our-customer/card2.png',
    name: 'Maria Auraliya Arokia Doss M',
    org: 'Indian Institute of Logistics',
  },
  {
    text: 'Schoolynx is one of the most useful ERP software in which institutes, schools or colleges can fulfill their needs as they required.',
    logo: '/assets/our-customer/card3.jpg',
    // name: '',
    org: 'HEC Group Of Institutions',
  },
  {
    text: 'I have been for a school management software to be used by our organization. I needed something that our organization could grow into in the future for a long time. Schoolynx has met my needs in cost, support, and features. I am very satisfied with the support and training I have received so far from the Schoolynx Team.',
    logo: '/assets/our-customer/card1.jpg',
    name: 'Curt Pierre',
    midName: "Chief Operations Officer",
    org: 'Emergency Training Institute of Trinidad & Tobago',
  },
  {
    text: 'We bought Schoolynx a month back and are happy with the immediate responses received for all the queries. Training in our campus was helpful to setup Schoolynx quickly.',
    logo: '/assets/our-customer/card2.png',
    name: 'Shanaaz Shaikh',
    midName: "Vice Principal",
    org: 'Al Maun - Al Burooj International School, Bangalore - INDIA',
  },
  {
    text: 'Its been great working with Schoolynx. All the same, you are doing a great job.',
    logo: '/assets/our-customer/card1.jpg',
    org: 'Enigreen Educational Services, Nigeria',
  },
  {
    text: 'You are fantastic.',
    logo: '/assets/our-customer/card3.jpg',
    name: '',
    midName: "",
    org: 'Africa College of Theology, Rwanda',
  },
  {
    text: 'We have been with Schoolynx since 2012. Its a wonderful experience.They helped us setting up and getting used to the modules phase by phase.',
    logo: '/assets/our-customer/card1.jpg',
    name: '',
    midName: "",
    org: 'Wellspring International College , Vietnam',
  },
  {
    text: 'Schoolynx allows us to be better communicated with each other, and from my desk I can actually be in close control of most of the key management procedures and report instantly and automatically to the principal who can revise it from anywhere he wants.',
    logo: '/assets/our-customer/card3.jpg',
    name: '',
    midName: "",
    org: 'American Ways',
  },
  {
    text: 'We absolutely love Schoolynx and would not be able to run our schools without it. This software is fantastic.',
    logo: '/assets/our-customer/card1.jpg',
    name: 'Adel El-Sheikh',
    midName: "",
    org: 'El-Rowad language school - Egypt',
  },
  {
    text: 'Schoolynx has been an integral part of our institute. All our data and records are on Schoolynx, which means it is all at one place, so useful in pulling reports.',
    logo: '/assets/our-customer/card2.png',
    name: 'Logeshwaran Bosh',
    midName: "",
    org: 'Al Maarefah International School - Saudi Arabia',
  },
  {
    text: 'Schoolynx Pro was just the tool we needed. It automated everything for us and fit right into our budget.',
    logo: '/assets/our-customer/card3.jpg',
    name: 'Anil Sachdev',
    midName: "",
    org: 'School of Inspired Leadership',
  },
  {
    text: 'Schoolynx provides training sessions that are well planned and systematically carried out. The teams continuous support provides us with a great deal of assurance that we would be able to implement Schoolynx into our ecosystem in a successful manner. Once again thank you for the training and trust for ongoing support and commitment.',
    logo: '/assets/our-customer/card1.jpg',
    name: 'Joel Mathew George',
    midName: "IT Incharge",
    org: 'Worship Center College of Theology, UAE',
  },
  {
    text: 'The updated version of Schoolynx is excellent when compared to the old versions. So many modules have been updated and it is easy to work in Schoolynx now. The Schoolynx team is very supportive and it was a good implementation experience. We have had interactive training and effective time utilization in the first month itself.',
    logo: '/assets/our-customer/card3.jpg',
    name: 'U.N. Giridhar Rao',
    midName: "Schoolynx Administrator",
    org: 'Anantha Vidyaniketan, Bangalore - INDIA',
  },
  {
    text: 'Fantastic app. Full of functions, very user friendly, simple and easy to use. We couldn’t have asked for more.',
    logo: '/assets/our-customer/card1.jpg',
    name: 'Abdullahi Qasim',
    midName: "",
    org: 'Mogadishu University - Somalia',
  },
  {
    text: 'In one word, Schoolynx is ‘convenient’. It has made schooling so convenient for our staff, teachers, parents and students.',
    logo: '/assets/our-customer/card2.png',
    name: 'Adel',
    midName: "",
    org: 'International Modern Arabic School - Malaysia',
  },
  
  // Add more as needed
];

function Slider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-full flex flex-col items-center justify-center mb-16 py-6 overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center w-full"
        >
          <img
            src={sliderTestimonials[current].image}
            alt="logo"
            className="w-48 h-48 object-contain mb-0 mx-auto"
            // style={{ maxWidth: '220px', maxHeight: '220px' }}
          />
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 text-center leading-snug max-w-5xl mx-auto font-normal">
            {sliderTestimonials[current].text}
          </p>
          <div className="text-[#f4473e] font-normal text-xl text-center mb-4">
            {sliderTestimonials[current].name}
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Dots */}
      <div className="flex gap-4 mt-4 justify-center">
        {sliderTestimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full border-2 ${idx === current ? 'bg-[#f4473e] border-[#f4473e]' : 'bg-white border-[#e5e7eb]'} transition cursor-pointer`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function OurCustomersPage() {
  return (
    <div className="min-h-screen pb-12 px-4 bg-[#f8f9fa]">
      {/* Top Slider Section */}
      <Slider />
      {/* Cards Grid Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">A few other Happy Schoolynx Customers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-8">
          {cardTestimonials.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* Card with speech bubble triangle */}
              <div className="bg-white rounded-xl px-8 py-8 w-full flex items-center justify-center relative">
                <p className="text-gray-700 text-center text-lg leading-relaxed">{item.text}</p>
                {/* Triangle */}
                <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 w-4 h-4 border-l-40 border-r-40 border-t-40 border-l-transparent border-r-transparent border-white"></div>
              </div>
              {/* Logo and name/org below card */}
              <div className="flex flex-col items-center mt-8">
                <img src={item.logo} alt="logo" className="w-16 h-16 object-contain my-2" />
                <div className="text-lg text-center text-gray-900 font-semibold">{item.name}</div>
                {item.midName && (<div className="text-md text-center text-gray-900">{item.midName}</div>)}
                <div className="text-[#f4473e] text-center text-base font-medium">{item.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
