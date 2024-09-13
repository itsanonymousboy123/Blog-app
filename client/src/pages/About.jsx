import React from 'react';

const About = () => {
  return (
    <div className="w-full px-6 py-12 md:px-10 lg:px-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 shadow-xl">
      <div className="max-w-7xl mx-auto bg-white bg-opacity-90 p-10 rounded-2xl shadow-lg gap-1" >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          About Gaurav's Blog
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-800 leading-relaxed text-center">
          Welcome to Gaurav's Blog! A place where I dive deep into my passions, ideas, and experiences. Whether you’re here for tech insights, inspiration, or just some interesting reads, I'm glad you’ve made it!
        </p>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Who Am I?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            I’m Gaurav, a tech enthusiast with a love for development and continuous learning. Through this blog, I share my journey, insights, and experiences in the ever-evolving tech world.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            What You'll Find Here?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This blog covers a mix of technical articles, tutorials, and personal stories. From web development tips to programming tutorials, I also share real-life lessons from my own journey in tech.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Why I Started This Blog?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            I believe that sharing knowledge strengthens the community. This blog is my way of giving back and helping fellow developers, learners, and anyone on a similar path.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Join the Conversation
          </h2>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            Explore, comment, and share your thoughts! I'm always open to feedback, and I’d love to hear from you. Let’s learn, grow, and connect on this exciting journey together.
            <br /><br />
            Thank you for stopping by, and I hope Gaurav's Blog brings you value and joy!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
