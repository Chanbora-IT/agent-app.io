import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "AgentWeb transformed our online presence. The website they built is not only beautiful but also incredibly functional. Highly recommended!",
      name: "John Doe",
      title: "CEO, Tech Startup",
      initials: "JD",
      bgColor: "bg-blue-600"
    },
    {
      rating: 5,
      text: "Professional, efficient, and creative. The team delivered exactly what we needed and more. Our conversion rates have doubled!",
      name: "Sarah Miller",
      title: "Marketing Director",
      initials: "SM",
      bgColor: "bg-green-600"
    },
    {
      rating: 5,
      text: "Outstanding work! They understood our vision perfectly and delivered a website that exceeds our expectations. True professionals.",
      name: "Michael Brown",
      title: "Small Business Owner",
      initials: "MB",
      bgColor: "bg-purple-600"
    }
  ];

  return (
    <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Don't just take our word for it</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div className="flex items-center">
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold mr-3`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
