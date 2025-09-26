import { useState, useEffect } from 'react';
import { FiGlobe, FiCloud, FiSun, FiHeart, FiDroplet, FiCheckCircle, FiCalendar, FiMapPin } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Card from '../components/ui/Card';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import PdfModal from '../components/ui/PdfModal';
import { getAssetPath } from '../utils/assetHelper';

const Home = () => {
  const [showPdfModal, setShowPdfModal] = useState(false);

  useEffect(() => {
    // Show modal on every page load with a small delay
    const timer = setTimeout(() => {
      setShowPdfModal(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  const keyActivities = [
    "Provide long-term and consistent data and information important for solving current planetary and human challenges.",
    "Providing evidence/scientific based information for key decision making.",
    "Liaising with organizations, researchers, operational and end-user bodies to determine and maintain the requirements for data to monitor, understand and predict contribution to solving current planetary and human challenges.",
    "Improve communication and foster inter-disciplinary and comparative approaches on research among various stakeholders.",
    "A platform to disseminate research findings and projects in order to create evidence-based decisions."
  ];

  const values = [
    {
      icon: <FiSun className="h-6 w-6" />,
      title: "Innovation",
      description: "Utilize emerging data and new tools to offer evidence-based solutions to current planetary and human challenges."
    },
    {
      icon: <FiHeart className="h-6 w-6" />,
      title: "Respect",
      description: "Embrace and share evidence-based findings for the Earth's sustainable future."
    },
    {
      icon: <FiDroplet className="h-6 w-6" />,
      title: "Enrichment",
      description: "Diversity for evidence-based decision making through research, digital access, and collaboration."
    }
  ];

  const handleCloseModal = () => {
    setShowPdfModal(false);
  };

  return (
    <>
      <PdfModal 
        isOpen={showPdfModal}
        onClose={handleCloseModal}
        title="The 1st International Conference on Pioneering the Future for Humanity"
      >
        <div className="space-y-6">
          {/* Top Banner */}
          <div className="rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 p-4">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-2 bg-white/70 px-3 py-1 rounded-full border border-primary/20 text-gray-800"><FiCalendar className="text-primary" /> 10th - 12th February 2026</span>
              <span className="inline-flex items-center gap-2 bg-white/70 px-3 py-1 rounded-full border border-primary/20 text-gray-800"><FiMapPin className="text-primary" /> Tamarind Tree Hotel, Nairobi, Kenya</span>
            </div>
          </div>

          {/* Theme */}
          <div className="space-y-4">
            {/* Theme badge */}
            <div className="flex items-start gap-3">
              <span className="text-xs tracking-widest font-semibold text-white bg-primary px-2 py-1 rounded">THEME</span>
              <h3 className="text-2xl font-extrabold text-gray-900 leading-tight">
                PIONEERING THE FUTURE FOR HUMANITY
              </h3>
            </div>
          </div>

          <hr className="border-gray-200" />

          

          {/* Delegate Investment */}
          <div className="bg-white rounded-lg p-5 md:p-6 border border-gray-100 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Delegate Investment</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><FiCheckCircle className="text-primary mt-0.5" /> The conference fee is KES 65,000 for Kenyan delegates and USD 620 for International delegates covering (3) days per delegate.</li>
              <li className="flex items-start gap-2"><FiCheckCircle className="text-primary mt-0.5" /> The conference package includes hamper, morning and afternoon tea/coffee with snacks, lunch, WIFI, & writings materials.</li>
              <li className="flex items-start gap-2"><FiCheckCircle className="text-primary mt-0.5" /> The conference fee is inclusive of VAT but excludes delegate’s own accommodation & transport to & fro the conference.</li>
              <li className="flex items-start gap-2"><FiCheckCircle className="text-primary mt-0.5" /> Student delegate fee: KES 18,000.</li>
              <li className="flex items-start gap-2"><FiCheckCircle className="text-primary mt-0.5" /> Conference fee for Abstract Presenters: KES 45,000.</li>
              <li className="flex items-start gap-2"><FiCheckCircle className="text-primary mt-0.5" /> All payment must be made on or before 30th November 2025.</li>
              <li className="flex items-start gap-2"><FiCheckCircle className="text-primary mt-0.5" /> The delegates will be offered a subsidized visit to Nairobi National Park, which is conveniently just 6km from the hotel.</li>
              <li className="flex items-start gap-2"><FiCheckCircle className="text-primary mt-0.5" /> Free Nairobi City Tour.</li>
            </ul>
          </div>

          {/* Partnership / Sponsorship */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-2">Partnership / Sponsorship Package / Benefits</h4>
            <p className="text-sm text-gray-700">
              Visit: <a href="/events" className="text-blue-600 hover:underline">www.interfaithresearchpanel.org/events</a>
            </p>
          </div>

          {/* Payment Details */}
          <div className="rounded-lg overflow-hidden">
            <div className="w-full bg-gradient-to-r from-sky-500 to-cyan-600 text-white text-center text-sm font-semibold tracking-wider py-2">PAYMENT DETAILS</div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Bank Transfer</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li><span className="font-medium">Account Name:</span> The interfaith research panel for a living planet</li>
                <li><span className="font-medium">Account Number:</span> 9841500017</li>
                <li><span className="font-medium">Bank Name:</span> NCBA bank kenya plc</li>
                <li><span className="font-medium">Branch Name:</span> NCBA Centre, upper hill</li>
                <li><span className="font-medium">Bank Code:</span> 07</li>
                <li><span className="font-medium">Swift Code:</span> CBAFKENX</li>
                <li><span className="font-medium">Branch Code:</span> 001</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">MPESA Paybill</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li><span className="font-medium">Mpesa Paybill:</span> 880100</li>
                <li><span className="font-medium">Account Number:</span> 9841500017</li>
                <li><span className="font-medium">Account Name:</span> The interfaith research panel for a living Planet</li>
              </ul>
            </div>
          </div>

          {/* Conference Booking */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-2">Conference Booking</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="inline-flex items-start gap-2"><FiCheckCircle className="text-primary mt-0.5" /> Book through email: <a href="mailto:secretariat@interfaithresearchpanel.org" className="text-blue-600 hover:underline">secretariat@interfaithresearchpanel.org</a></li>
              <li className="inline-flex items-start gap-2"><FiCheckCircle className="text-primary mt-0.5" /> For enquiries contact: Mr. Mark, Mobile or Whatsapp: <a href="tel:+254703825533" className="text-blue-600 hover:underline">+254 703 825 533</a></li>
              <li className="inline-flex items-start gap-2"><FiCheckCircle className="text-primary mt-0.5" /> Visit: <a href="https://www.interfaithresearchpanel.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.interfaithresearchpanel.org</a></li>
              <li className="inline-flex items-center gap-3">
                <FiCheckCircle className="text-primary" />
                <span className="inline-flex items-center gap-2">
                  <FaFacebook className="text-[#1877F2]" /> The InterfaithresearchPanel
                </span>
                <span className="inline-flex items-center gap-2">
                  <FaXTwitter className="text-black" /> @InterfaithResearchPanel
                </span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="not-prose flex flex-wrap gap-3 pt-2">
            <Button 
              variant="secondary"
              onClick={() => window.location.href = '/events'}
            >
              View Event Details
            </Button>
          </div>

          {/* Delegates Special Note */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md">
            <p className="text-blue-800 text-sm">
              <span className="font-semibold">Delegates Special Note:</span> As part of our commitment to sustainability and biodiversity, all registered participants will plant a tree at the conference venue - leaving a lasting mark, offsetting their carbon footprint, & contributing to a more sustainable future.
            </p>
          </div>
        </div>
      </PdfModal>
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-center"
            style={{
              backgroundImage: `url(${getAssetPath('assets/pattern.svg')})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                The Interfaith Research Panel
                <span className="text-yellow-300"> (IReP)</span>
              </h1>
              
              <div className="my-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg border-2 border-yellow-400/50 hover:border-yellow-400 transition-all duration-300 group">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-1">
                    <svg className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white mb-2">Upcoming Event</h3>
                    <p className="text-yellow-100 mb-4">Check out our latest event flyer for more information about our upcoming activities and how you can participate.</p>
                    <a 
                      href="/events" 
                      className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
                    >
                      <span>View Event Details</span>
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => window.location.href = '/about'}
                >
                  Learn More
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-white border-white hover:bg-white/10"
                  onClick={() => window.location.href = '/join'}
                >
                  Join Us
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
                <Card.Header>
                  <Card.Title className="text-2xl font-bold text-white mb-6">
                    Our Key Activities
                  </Card.Title>
                </Card.Header>
                <Card.Content>
                  <ul className="space-y-4">
                    {keyActivities.map((activity, index) => (
                      <li key={index} className="flex items-start">
                        <FiCheckCircle className="flex-shrink-0 h-5 w-5 text-yellow-300 mt-1 mr-3" />
                        <span className="text-gray-100">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Content>
              </Card>
              
              <div className="mt-8 flex justify-center">
                <img 
                  src="/assets/undraw_connection_re_lcud.svg" 
                  alt="Global connection" 
                  className="h-48 md:h-64 opacity-90"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/assets/placeholder-illustration.svg';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Core Principles"
            subtitle="Vision & Mission"
            description="Guiding principles that drive our mission for a sustainable future"
            className="text-center mb-12"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision and Mission Card */}
            <Card className="h-full">
              <div className="p-1">
                <div className="bg-gradient-to-r from-primary/5 to-primary/20 p-8 rounded-lg">
                  <div className="flex items-center mb-8">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                      <FiGlobe className="h-8 w-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Vision & Mission</h2>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary">
                          <FiGlobe className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
                      </div>
                      <p className="text-gray-600 pl-11">Let it be for a Living Planet.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary">
                          <FiCloud className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
                      </div>
                      <p className="text-gray-600 pl-11">
                        To make the world better through embracing and sharing evidence-based solutions to address current planetary and human challenges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Values Card */}
            <Card>
              <div className="p-1">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg">
                  <div className="flex items-center mb-8">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                      <FiHeart className="h-8 w-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Our Core Values</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {values.map((value, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 group hover:border-primary/30 transition-colors">
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary group-hover:bg-primary/20 transition-colors">
                            {value.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Valued Partners"
            subtitle="Collaboration"
            description="Working together with leading organizations to create meaningful impact"
            className="text-center mb-12"
          />
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600 mb-6">
              The panel shares expertise and materials as well as diverse approaches to studies within a larger and more comprehensive framework. This provides the basis for the creation of a permanent research infrastructure for decision making to transform our world as articulated through SDGs, Country’s action Agendas and Religious initiatives.
            </p>
            <p className="text-lg text-gray-600">
              Decision makers and scientists need to establish the expanding evidence base required for decision making. At IReP, we bring together scientists, decision makers and other various players to handle this critical area.
            </p>
            <p className="text-lg text-gray-600">
            IReP aims to constitute an inclusive network, to act as an open platform and provide a framework to foster research, communication, exchange and cooperation among various actors.
            </p>
          </div>

          {/* Partner Logos */}
          <div className="mt-12">
            
            <div className="mt-12 text-center">
              <p className="text-gray-500 mb-6">
                Interested in becoming a partner?
              </p>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Be part of our mission to create evidence-based solutions for a sustainable future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.location.href = '/join'}
            >
              Become a Member
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
