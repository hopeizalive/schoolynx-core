// "use client";

// import React, { Suspense } from 'react';
// import dynamic from 'next/dynamic';

// const CoreTeamSection = dynamic(() => import('@/components/about/CoreTeamSection'), {
//   loading: () => (
//     <div className="animate-pulse space-y-8">
//       <div className="h-8 bg-gray-200 rounded w-1/3"></div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {[1, 2, 3].map((i) => (
//           <div key={i} className="bg-white p-6 rounded-lg shadow-md">
//             <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
//             <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
//             <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-2"></div>
//             <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   ),
//   ssr: false
// });

// const CustomersSection = dynamic(() => import('@/components/about/CustomersSection'), {
//   loading: () => (
//     <div className="animate-pulse space-y-8">
//       <div className="h-8 bg-gray-200 rounded w-1/3"></div>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//         {[1, 2, 3, 4].map((i) => (
//           <div key={i} className="h-20 bg-gray-200 rounded-lg"></div>
//         ))}
//       </div>
//     </div>
//   ),
//   ssr: false
// });

// const MediaSection = dynamic(() => import('@/components/about/MediaSection'), {
//   loading: () => (
//     <div className="animate-pulse space-y-8">
//       <div className="h-8 bg-gray-200 rounded w-1/3"></div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {[1, 2].map((i) => (
//           <div key={i} className="bg-white p-6 rounded-lg shadow-md">
//             <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
//             <div className="space-y-4">
//               {[1, 2, 3].map((j) => (
//                 <div key={j} className="h-4 bg-gray-200 rounded w-3/4"></div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   ),
//   ssr: false
// });

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen pt-24 pb-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-gray-900 mb-8">About Schoolynx</h1>
        
//         {/* Our Story Section */}
//         <div className="mb-12">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Story</h2>
//           <div className="bg-white p-8 rounded-lg shadow-md">
//             <p className="text-gray-600 mb-6">
//               Schoolynx was founded with a vision to revolutionize school management through technology. 
//               Our journey began when a group of educators and technologists came together to solve the 
//               challenges faced by modern educational institutions.
//             </p>
//             <p className="text-gray-600">
//               Today, we are proud to serve thousands of schools worldwide, helping them streamline their 
//               operations and focus on what matters most - providing quality education to students.
//             </p>
//           </div>
//         </div>

//         {/* Core Team Section */}
//         <Suspense fallback={
//           <div className="animate-pulse space-y-8">
//             <div className="h-8 bg-gray-200 rounded w-1/3"></div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[1, 2, 3].map((i) => (
//                 <div key={i} className="bg-white p-6 rounded-lg shadow-md">
//                   <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
//                   <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
//                   <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-2"></div>
//                   <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         }>
//           <CoreTeamSection />
//         </Suspense>

//         {/* Our Customers Section */}
//         <Suspense fallback={
//           <div className="animate-pulse space-y-8">
//             <div className="h-8 bg-gray-200 rounded w-1/3"></div>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {[1, 2, 3, 4].map((i) => (
//                 <div key={i} className="h-20 bg-gray-200 rounded-lg"></div>
//               ))}
//             </div>
//           </div>
//         }>
//           <CustomersSection />
//         </Suspense>

//         {/* Media and Press Section */}
//         <Suspense fallback={
//           <div className="animate-pulse space-y-8">
//             <div className="h-8 bg-gray-200 rounded w-1/3"></div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {[1, 2].map((i) => (
//                 <div key={i} className="bg-white p-6 rounded-lg shadow-md">
//                   <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
//                   <div className="space-y-4">
//                     {[1, 2, 3].map((j) => (
//                       <div key={j} className="h-4 bg-gray-200 rounded w-3/4"></div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         }>
//           <MediaSection />
//         </Suspense>

//         {/* Awards and Recognition Section */}
//         <div>
//           <h2 className="text-3xl font-semibold text-gray-800 mb-6">Awards and Recognition</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">2023</h3>
//               <ul className="list-disc list-inside text-gray-600 space-y-2">
//                 <li>Best School Management Software - EdTech Awards</li>
//                 <li>Innovation in Education Technology - Global Tech Awards</li>
//                 <li>Top 10 Education Startups - TechCrunch</li>
//               </ul>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">2022</h3>
//               <ul className="list-disc list-inside text-gray-600 space-y-2">
//                 <li>Excellence in Customer Service - SaaS Awards</li>
//                 <li>Best Mobile App - Education Technology Awards</li>
//                 <li>Rising Star in EdTech - Global Education Summit</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// } 