import React from 'react';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce platform with AI-powered product recommendations and seamless checkout experience.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Healthcare Portal',
      category: 'Web Application',
      description: 'Patient management system with appointment scheduling, medical records, and telemedicine features.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Real Estate Website',
      category: 'Property Listing',
      description: 'Beautiful property listing platform with virtual tours, advanced search filters, and agent dashboard.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      tags: ['React', 'Express', 'PostgreSQL'],
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      title: 'Education Platform',
      category: 'E-Learning',
      description: 'Interactive learning management system with video courses, quizzes, and student progress tracking.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
      tags: ['React', 'Redux', 'AWS'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 5,
      title: 'Restaurant Booking App',
      category: 'Hospitality',
      description: 'Table reservation system with menu display, online ordering, and customer reviews.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      tags: ['React Native', 'Node.js', 'MySQL'],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 6,
      title: 'Financial Dashboard',
      category: 'FinTech',
      description: 'Analytics dashboard with real-time data visualization, reporting, and financial insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['React', 'D3.js', 'Python', 'API'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Portfolio Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our collection of successful projects. From e-commerce platforms to healthcare solutions,
            we've helped businesses transform their digital presence.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
              All Projects
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition">
              Web Development
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition">
              E-Commerce
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition">
              Mobile Apps
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition">
              AI Integration
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something amazing together. Contact us today to discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              Get a Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
