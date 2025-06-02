import React from 'react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
//   return (
//     <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
//       <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
//         {icon}
//       </div>
//       <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
//       <p className="text-gray-600 dark:text-gray-300">{description}</p>
//     </div>
//   );
// };

export const Features = () => {
 
  return (
    <section className="py-20 bg-[#fdfdfd] text-black w-full">
      <h2 className='text-3xl md:text-3xl text-[#1a2a49] text-center mb-12 font-semibold'>Loved by the pioneers in technology</h2>
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-24">
        {/* Schools & Colleges */}
        <div className="flex items-center space-x-4 min-w-[250px]"> 
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" alt="" className='w-[85%]'/>   
        </div>

        {/* Countries */}
        <div className="flex items-center space-x-4 min-w-[250px]"> 
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/640px-NASA_Worm_logo.svg.png" alt="" className='w-[85%]'/>   
        </div>

        {/* Languages */}
        <div className="flex items-center space-x-4 min-w-[250px]"> 
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="" className='w-[85%]'/>   
        </div>

      <div className="flex items-center space-x-4 min-w-[250px]"> 
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Nasscom-logo-svg.svg" alt="" className='w-[85%]'/>   
        </div>
      </div>

    </div>
  </section>
  );
};

export default Features; 