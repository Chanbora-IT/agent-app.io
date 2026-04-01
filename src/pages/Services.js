import React from 'react';

function Services() {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web Design',
      description: 'Beautiful, modern, and responsive designs that captivate your audience and enhance user experience.',
      features: ['Responsive Design', 'UI/UX Design', 'Prototyping', 'Brand Identity'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      price: 'Starting at $2,000'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Robust and scalable web applications built with the latest technologies like React, Node.js, and more.',
      features: ['Full Stack Development', 'API Integration', 'Database Design', 'Cloud Deployment'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      price: 'Starting at $3,500'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless performance.',
      features: ['iOS & Android', 'React Native', 'App Store Publishing', 'Push Notifications'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      price: 'Starting at $4,000'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'AI Integration',
      description: 'Enhance your website with AI-powered features for better automation, analytics, and user engagement.',
      features: ['Machine Learning', 'Chatbots', 'Predictive Analytics', 'Natural Language Processing'],
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      price: 'Starting at $5,000'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics.',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory System', 'Order Management'],
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50',
      price: 'Starting at $6,000'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support to keep your website running smoothly.',
      features: ['24/7 Monitoring', 'Security Updates', 'Performance Optimization', 'Bug Fixes'],
      gradient: 'from-teal-500 to-green-500',
      bgGradient: 'from-teal-50 to-green-50',
      price: 'Starting at $500/month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              Our Services
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive Web Development
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Solutions for Your Business
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From design to deployment, we offer end-to-end services to transform your digital presence
            and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Get a Free Consultation
            </button>
            <button className="bg-white text-gray-800 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Card Header with Gradient */}
                <div className={`bg-gradient-to-br ${service.bgGradient} p-8 relative`}>
                  <div className={`inline-block p-4 bg-gradient-to-br ${service.gradient} rounded-2xl text-white shadow-lg group-hover:scale-110 transform transition-all duration-300`}>
                    {service.icon}
                  </div>
                  <div className="absolute top-4 right-4 opacity-10">
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price and Button */}
                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                    </div>
                    <button className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600">A proven methodology to deliver exceptional results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs and goals', icon: '🔍' },
              { step: '02', title: 'Design', desc: 'Creating beautiful mockups', icon: '🎨' },
              { step: '03', title: 'Development', desc: 'Building your solution', icon: '⚡' },
              { step: '04', title: 'Launch', desc: 'Deploy and monitor', icon: '🚀' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <div className="text-4xl font-bold text-gray-300 mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help bring your vision to life. Get a free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Schedule a Call
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
