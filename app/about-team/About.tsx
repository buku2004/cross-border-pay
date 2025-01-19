import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-100 p-8">
    {/* Project Features Section */}
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-4 text-center">Platform Features</h2>
      <p className="text-gray-700 text-lg text-center">
        Our Cross-Crypto-Platform revolutionizes cross-border payments by leveraging the power of blockchain technology. 
        Experience seamless transactions with the following key features:
      </p>
      <div className="flex flex-wrap justify-center items-center mt-8 gap-8">
        <div className="text-center">
          <img src="/eth.jpg" alt="Ethereum" className="w-24 mx-auto mb-4"/>
          <p className="text-gray-700">Ethereum Integration</p>
        </div>
        <div className="text-center">
          <img src="/btc.jpg" alt="Bitcoin" className="w-24 mx-auto mb-4"/>
          <p className="text-gray-700">Bitcoin Support</p>
        </div>
      </div>
      <ul className="list-disc list-inside ml-4 mt-4 text-gray-700 text-lg">
        <li>Real-time currency conversion and transaction tracking</li>
        <li>Secure and compliant with international financial regulations</li>
        <li>Scalable solutions for high transaction volumes with low fees</li>
      </ul>
    </section>

    {/* Team Profiles Section */}
    <section>
      <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Member 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-gray-200 h-32 rounded-md mb-4"></div>
          <h3 className="text-xl font-semibold">Subham Sahoo</h3>
          <p className="text-gray-600">Blockchain</p>
          <p className="text-gray-700">
            Blockchain specialist. Specializing in Ethereum.
          </p>
        </div>
        {/* Member 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-gray-200 h-32 rounded-md mb-4"></div>
          <h3 className="text-xl font-semibold">Subhransu Dalei</h3>
          <p className="text-gray-600">Frontend/Backend</p>
          <p className="text-gray-700">
            Subhransu specializes in Next.js framework and backend services.
          </p>
        </div>
        {/* Member 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-gray-200 h-32 rounded-md mb-4"></div>
          <h3 className="text-xl font-semibold">Krishna Singh</h3>
          <p className="text-gray-600">Frontend/Backend</p>
          <p className="text-gray-700">
            Krishna specializes in frontend and backend services.
          </p>
        </div>
        {/* Member 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-gray-200 h-32 rounded-md mb-4"></div>
          <h3 className="text-xl font-semibold">Shivang Sharma</h3>
          <p className="text-gray-600">AI/ML</p>
          <p className="text-gray-700">
            Shivang has expertise in Python and ML.
          </p>
        </div>
      </div>
    </section>
  </div>
  )
}

export default About