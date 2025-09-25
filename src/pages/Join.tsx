import { FiMail, FiLink, FiUsers, FiAward, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';
import JoinUsModal from '../components/JoinUsModal';

const Join = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="container mx-auto px-4 py-12">
      <JoinUsModal isOpen={isModalOpen} onClose={closeModal} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Join Our Community</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Become a Member</h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Join a global network of researchers, practitioners, and advocates working towards evidence-based solutions for planetary and human challenges.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <FiUsers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Who Can Join</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Researchers and academics</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Religious and faith-based organizations</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Non-profit and community organizations</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Government and policy makers</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Students and young professionals</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <FiAward className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Benefits</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Access to research and resources</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Networking opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Participation in events and workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Collaboration on research projects</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Professional development opportunities</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-primary bg-opacity-5 p-8 rounded-lg border border-primary/10">
            <h3 className="text-2xl font-bold text-center mb-6">How to Apply</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <FiMail className="mr-2" /> Email Application
                </h4>
                <p className="mb-4">Send your application to:</p>
                <a 
                  href="mailto:info@interfaithresearchpanel.org" 
                  className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                >
                  info@interfaithresearchpanel.org
                </a>
                <p className="mt-4 text-sm text-gray-600">
                  Please include your CV and a brief statement of interest.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <FiLink className="mr-2" /> Online Form
                </h4>
                <p className="mb-4">Or fill out our online application form:</p>
                <button 
                  onClick={openModal}
                  className="inline-flex items-center bg-white text-primary border border-primary px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Apply Online <FiArrowRight className="ml-2" />
                </button>
                <p className="mt-4 text-sm text-gray-600">
                  Complete the form and upload your documents.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-6">Membership Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-lg mb-2">Individual</h4>
                <p className="text-gray-600 mb-4">For independent researchers and professionals</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Access to resources</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Event discounts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Networking</span>
                  </li>
                </ul>
                <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                  Learn More
                </button>
              </div>
              
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow relative">
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl rounded-tr">
                  POPULAR
                </div>
                <h4 className="font-bold text-lg mb-2">Institutional</h4>
                <p className="text-gray-600 mb-4">For organizations and academic institutions</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>All Individual benefits</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Team access</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Project collaboration</span>
                  </li>
                </ul>
                <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                  Learn More
                </button>
              </div>
              
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-lg mb-2">Student</h4>
                <p className="text-gray-600 mb-4">For full-time students</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Discounted membership</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Mentorship</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Research opportunities</span>
                  </li>
                </ul>
                <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Contact us for more information about membership and how to get involved.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
