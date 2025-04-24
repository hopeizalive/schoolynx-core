import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  school: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, school }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
      <div className="mb-6">
        <svg className="h-8 w-8 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8c-4.418 0-8 3.582-8 8v8h8v-8h-4c0-2.209 1.791-4 4-4v-4zm20-4c-4.418 0-8 3.582-8 8v8h8v-8h-4c0-2.209 1.791-4 4-4v-4z"></path>
        </svg>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{quote}</p>
      <div>
        <p className="font-semibold text-gray-900 dark:text-white">{name}</p>
        <p className="text-gray-500 dark:text-gray-400">{role}, {school}</p>
      </div>
    </div>
  );
};

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "SchooLnyx has transformed the way our institution handles daily operations. The administrative burden has been reduced by 60%, allowing us to focus more on education.",
      name: "Sarah Johnson",
      role: "Principal",
      school: "Brighton Academy"
    },
    {
      quote: "The parent communication module has significantly improved our engagement with families. Parents appreciate the real-time updates on their child's progress and activities.",
      name: "Michael Chen",
      role: "IT Director",
      school: "Westlake High School"
    },
    {
      quote: "As a teacher, I love how easy it is to track assignments, share resources with students, and communicate with parents. SchooLnyx has made my job so much more efficient.",
      name: "Emily Rodriguez",
      role: "Science Teacher",
      school: "Maple Grove Elementary"
    }
  ];

  return (
    <section className="py-20 bg-blue-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Educators Say</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            Discover how SchooLnyx is helping educational institutions streamline their operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              school={testimonial.school}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 