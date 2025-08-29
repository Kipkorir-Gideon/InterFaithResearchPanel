import { FiGlobe, FiTarget, FiHeart, FiSun, FiDroplet, FiCheckCircle } from 'react-icons/fi';
import Card from '../components/ui/Card';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';

const About = () => {
  const keyFocusAreas = [
    "Periodically convene the IReP congress as well as regional symposia on scientific, religious, political and practical issues.",
    "Encourage an open collaboration for the development of research programs and other collaborative partnerships globally.",
    "Endorse applications to make research funds or facilities available to IReP members and other selected groups.",
    "Promote relations with individuals and organizations that share the goals of the IReP."
  ];

  const whatWeDo = [
    "Provide long-term and consistent data and information imperative for solving planetary and human challenges.",
    "Providing evidence/scientific based information for decision making.",
    "Liaising with organizations and researchers in order to determine and maintain the requirements for data that monitors and predict contribution to solving planetary and human challenges.",
    "Improve communication and foster inter-disciplinary and comparative approaches on evidence based initiatives among various stakeholders.",
    "A platform to disseminate evidence based findings to solve planetary and human challenges."
  ];

  const values = [
    {
      icon: <FiSun className="h-6 w-6" />,
      title: "Innovation",
      description: "Utilize emerging data and new tools to offer evidence-based solutions to planetary and human challenges."
    },
    {
      icon: <FiHeart className="h-6 w-6" />,
      title: "Respect",
      description: "Embrace and share evidence-based findings for the Earth's sustainable future."
    },
    {
      icon: <FiDroplet className="h-6 w-6" />,
      title: "Enrichment",
      description: "Diversity for evidence-based decision making through research, digital access and collaboration."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] bg-center"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About IReP</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              The Interfaith Research Panel (IReP) is a panel of experts spearheading evidence-based solutions to address current planetary and human challenges.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Key Focus Areas */}
        <Card className="h-full">
          <Card.Header>
            <Card.Title className="text-2xl font-bold text-gray-900 mb-2">Our Focus Areas</Card.Title>
            <Card.Subtitle className="text-gray-600">Areas where we direct our efforts and expertise</Card.Subtitle>
          </Card.Header>
          <Card.Content>
            <ul className="space-y-4">
              {keyFocusAreas.map((item, index) => (
                <li key={index} className="flex items-start group">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary group-hover:bg-primary/20 transition-colors">
                    <FiCheckCircle className="h-5 w-5" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </Card.Content>
        </Card>
        
        {/* What We Do */}
        <div className="space-y-6">
          <Card className="overflow-hidden">
            <div className="relative h-48 md:h-56 w-full">
              <img 
                src="/assets/Image1.jpeg" 
                alt="IReP Activities" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/assets/placeholder-illustration.svg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">What We Do</h2>
                  <p className="text-white/90">Delivering impactful solutions through research and collaboration</p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card>
            <Card.Content>
              <ul className="space-y-4">
                {whatWeDo.map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-3 text-primary group-hover:bg-primary/20 transition-colors">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card.Content>
          </Card>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-primary/5 to-primary/20 p-1 rounded-xl mb-16">
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <SectionHeader
            title="Our Vision & Mission"
            subtitle="Guiding Principles"
            description="The foundation of our work and commitment to a better world"
            className="text-center mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full hover:shadow-md transition-shadow">
              <Card.Content>
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <FiGlobe className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 text-lg pl-14">Let it be for a Living Planet.</p>
              </Card.Content>
            </Card>
            
            <Card className="h-full hover:shadow-md transition-shadow">
              <Card.Content>
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <FiTarget className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 pl-14">
                  To make the world better through embracing and sharing evidence-based solutions to address the planetary and human challenges.
                </p>
              </Card.Content>
            </Card>
          </div>
        </div>
      </div>
      
      <SectionHeader
        title="Our Core Values"
        subtitle="What Drives Us"
        description="The principles that guide our actions and decisions"
        className="text-center mb-12"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {values.map((value, index) => (
          <Card key={index} className="h-full hover:shadow-md transition-shadow group">
            <Card.Content className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-primary/90 text-white rounded-2xl p-8 md:p-12 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl text-white/90 mb-8">
            Be part of a global movement creating evidence-based solutions for a sustainable future.
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
      </div>
      </div>
    </div>
  );
};

export default About;
