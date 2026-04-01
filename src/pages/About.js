import React from 'react';

function About() {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: '🎯' },
    { number: '250+', label: 'Happy Clients', icon: '😊' },
    { number: '50+', label: 'Team Members', icon: '👥' },
    { number: '10+', label: 'Years Experience', icon: '⭐' }
  ];

  const values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '🎯',
      title: 'Quality',
      description: 'Excellence is not an act but a habit. We ensure top-notch quality in every project.',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We work closely with clients, treating your success as our success.',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      icon: '⚡',
      title: 'Speed',
      description: 'Fast delivery without compromising quality. We value your time.',
      gradient: 'from-pink-400 to-red-500'
    }
  ];

  const team = [
    {
      name: 'Mean Chanbora',
      role: 'CEO & Founder',
      image: 'https://img.freepik.com/premium-vector/cool-cartoon-boy-avatar_987671-675.jpg?semt=ais_incoming&w=740&q=80',
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://i.pinimg.com/736x/c4/df/5c/c4df5c3da073095e6f16090f68968d81.jpg',
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      name: 'Emily Davis',
      role: 'Lead Designer',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXuM2b4djVbMt63hftHrWFFMeQmccyytKlQ&s',
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      name: 'David Park',
      role: 'Senior Developer',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4e0p24gn-ccUXYZ6jZMr3MUG0DyLdP_UWEA&s',
      social: { linkedin: '#', twitter: '#', github: '#' }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              About Us
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Building Digital Excellence
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Since 2014
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of passionate developers, designers, and strategists dedicated to creating
            exceptional digital experiences that drive real business results.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2014, AgentWeb started with a simple mission: to help businesses leverage
                the power of technology to achieve their goals. What began as a small team of three
                has grown into a thriving agency of over 50 talented professionals.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Over the years, we've had the privilege of working with startups, SMBs, and Fortune
                500 companies across various industries. Each project has taught us something new
                and helped us refine our craft.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're not just building websites – we're creating digital ecosystems that
                transform businesses and delight users.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-block p-4 bg-gradient-to-br ${value.gradient} rounded-2xl text-white text-3xl mb-4 shadow-lg`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The talented people behind our success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-4">
                      <a href={member.social.linkedin} className="text-white hover:text-blue-200 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href={member.social.twitter} className="text-white hover:text-blue-200 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Want to Join Our Team?</h2>
          <p className="text-xl mb-8 opacity-90">
            We're always looking for talented individuals who share our passion for building great digital products.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
