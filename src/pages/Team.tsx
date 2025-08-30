import { FiUsers, FiUser } from 'react-icons/fi';

const Team = () => {

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
      
      <div className="max-w-4xl mx-auto mb-16">
        <p className="text-lg text-center mb-8">
          The Interfaith Research Panel (IReP) has a three-tier organizational structure, 
          <span className="font-semibold"> The Governing Council, Themes Committee and the Management Team.</span>
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FiUsers className="mr-2 text-primary" />
            The Governing Council
          </h2>
          <p className="text-gray-700">
            The Governing Council provides advice on the general objectives of IReP.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <FiUsers className="mr-2 text-primary" />
            Themes Committee
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>The Theme committee collaborates on specific engagements that contribute to SDGs, specific Country's Agenda and Religious Initiatives.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>The team provides innovative thinking on global issues and nurtures projects, events and campaigns for the public good.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Members are grouped into various themes that address specific challenges to monitor trends, identify global risks, discuss ideas and explore evidence-based solutions to global challenges.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>The team develops recommendations and integrates the findings to enable informed decision making.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>The team members of the committee are drawn from <span className="font-semibold">Africa, Asia, Europe, Latin America, Middle East and United States.</span></span>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Members' engagement is through online interactions, emails, virtual meetings among other channels.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>
                The committee membership is through registering as individual or corporate (to apply, submit your application through:{' '}
                <a href="mailto:info@interfaithresearchpanel.org" className="text-primary hover:underline">
                  info@interfaithresearchpanel.org
                </a>{' '}
                for consideration).
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <FiUser className="mr-2 text-primary" />
            Management Team
          </h2>
          <p className="mb-6">
            The Management Team provides coordination of projects and facilitation of the IReP activities. The Team is composed of:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>IReP Global Coordinator</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Resource mobilizers</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Researchers, Advocacy, ICT, Logistics/Operations</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-primary bg-opacity-10 text-primary rounded-full p-1 mr-3 mt-1">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Project-specific contractuals</span>
            </li>
          </ul>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Join Our Team</h3>
            <p className="mb-4">Interested in joining our team? We're always looking for passionate individuals to help us make a difference.</p>
            <a 
              href="/join" 
              className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
