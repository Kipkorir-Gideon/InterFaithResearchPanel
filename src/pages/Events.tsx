import { useState } from "react";
import {
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiCheck,
  FiX,
  FiLoader,
  FiGlobe,
  FiMail,
  FiCreditCard,
} from "react-icons/fi";
import {
  FaTree,
  FaLightbulb,
  FaHandsHelping,
  FaNetworkWired,
} from "react-icons/fa";

const Events = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      organization: formData.organization || "Not provided",
    };

    try {
      const response = await fetch('https://interfaithresearchpanel.org/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", organization: "" });
      } else {
        throw new Error(data.message || "Failed to submit form");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Failed to submit the form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const objectives = [
    "Foster international collaboration on proactive solutions to global challenges",
    "Bridge generational and sectoral divides in addressing complex problems",
    "Develop actionable frameworks for implementing forward-thinking policies",
    "Create lasting networks of change makers committed to anticipatory leadership",
    "Establish annual platform for ongoing dialogue and solution development",
  ];

  const keyFeatures = [
    "High-level plenary sessions and keynote addresses",
    "Networking sessions and collaborative projects",
  ];

  const expectedOutcomes = [
    "A Nairobi Declaration on Pioneering the Future for Humanity",
    "Shared framework for ongoing collaboration",
    "Launch of interfaith–scientific coalitions for resource-sharing networks",
    "Launch of Interfaith – Research Leaders Advisory Council to advise on global challenges",
  ];

  const delegateFees = [
    "KES 85,500 for Kenyan delegates",
    "USD 750 for international delegates",
    "Covers three (3) days per delegate",
    "Includes hamper, morning & afternoon tea/coffee with snacks, lunch, Wi-Fi, writing materials & a subsidized visit to Nairobi National Park",
    "Excludes accommodation and transport to/from the conference",
    "Payment deadline: 30th November 2025",
  ];

  const paymentOptions = [
    {
      type: "MPESA Paybill",
      details: [
        "Paybill: 880100",
        "Account Number: 9841500017",
        "Account Name: The Interfaith Research Panel For A Living Planet",
      ],
    },
    {
      type: "Bank Transfer",
      details: [
        "Account Name: The Interfaith Research Panel For A Living Planet",
        "Account Number: 9841500017",
        "Bank Name: NCBA Bank Kenya PLC",
        "Branch: NCBA Centre, Upper Hill",
        "Bank Code: 07",
        "Swift Code: CBAFKENX",
        "Branch Code: 001",
      ],
    },
  ];

  const sponsorshipTiers = [
    {
      tier: "Tier 1",
      price: "KES 300,000",
      benefits: [
        "Recognition as a sponsor",
        "Exhibition desk at the venue",
        "Two (2) Complimentary Tickets",
        "Display of 1 banner",
        "Certificate of Appreciation",
      ],
    },
    {
      tier: "Tier 2",
      price: "KES 750,000",
      benefits: [
        "All Tier 1 benefits",
        "Three (3) complimentary tickets",
        "Speaking opportunity before each session",
        "Display of 2 banners",
        "Certificate of Appreciation",
      ],
    },
    {
      tier: "Tier 3",
      price: "KES 1,500,000",
      benefits: [
        "All Tier 2 benefits",
        "Four (4) complimentary tickets",
        "Brand engagement in conference materials",
        "Display of 2 banners",
        "Certificate of Appreciation",
      ],
    },
    {
      tier: "Main Sponsor",
      price: "KES 2,000,000",
      benefits: [
        "All Tier 3 benefits",
        "Six (6) complimentary tickets",
        "Strategic exhibition space",
        "Display of 4 banners",
        "Running ads during breaks",
        "Certificate of Appreciation",
      ],
    },
    {
      tier: "Exhibition Desk",
      price: "KES 120,000",
      benefits: [
        "Standard exhibition space",
        "One complimentary ticket",
        "Promote your products/services",
      ],
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            1st International Conference
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white/90">
            Pioneering The Future For Humanity
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              <FiCalendar className="mr-2 text-yellow-200" />
              <span className="font-medium">10th - 12th February 2026</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              <FiMapPin className="mr-2 text-yellow-200" />
              <span className="font-medium">
                Tamarind Tree Hotel, Nairobi, Kenya
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About the Conference
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The Interfaith Research Panel (IReP) is a panel of experts focused
              on delivering long-term, consistent, and evidence-based solutions
              to address both current planetary and human challenges. One of our
              key focus areas is to periodically convene congresses and regional
              symposiums on scientific, religious, socio-economic, political,
              and practical issues to encourage collaborative partnerships.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              IReP, in collaboration with like-minded partners, strives to forge
              a future for humanity by organizing the 1st International
              Conference on Pioneering the Future for Humanity. This event is
              designed to ignite bold and future ideas, inspire ethical and
              inclusive leadership, and accelerate scalable solutions for global
              sustainability and resilience.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-800">
                <span className="font-semibold">Special Note:</span> As part of
                our commitment to sustainability and biodiversity, all
                registered participants will plant a tree at the conference
                venue - leaving a lasting mark, offsetting their carbon
                footprint, and contributing to a more sustainable future.
              </p>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Conference Objectives
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <FaLightbulb className="text-blue-600 text-xl" />
                  </div>
                  <p className="text-gray-700">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features & Expected Outcomes */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Key Features */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Key Features
            </h3>
            <ul className="space-y-3">
              {keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <FaHandsHelping className="text-green-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expected Outcomes */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Expected Outcomes
            </h3>
            <ul className="space-y-3">
              {expectedOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                    <FaNetworkWired className="text-purple-600" />
                  </div>
                  <span className="text-gray-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Delegate Investment */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Delegate Investment
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  Conference Fees
                </h3>
                <ul className="space-y-3">
                  {delegateFees.map((fee, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-100 p-0.5 rounded-full mr-3 mt-1.5">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{fee}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FiCreditCard className="mr-2 text-green-600" />
                  Payment Options
                </h3>
                {paymentOptions.map((option, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <h4 className="font-medium text-gray-800 mb-2">
                      {option.type}:
                    </h4>
                    <ul className="bg-white p-4 rounded-lg shadow-sm">
                      {option.details.map((detail, i) => (
                        <li key={i} className="text-gray-700 text-sm py-1">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sponsorship Packages */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Partnership & Sponsorship
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Join us as a partner and be part of this transformative event.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorshipTiers.map((tier, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-md ${
                  tier.tier === "Main Sponsor"
                    ? "border-2 border-yellow-400 transform scale-105 z-10"
                    : "border border-gray-200"
                }`}
              >
                <div
                  className={`p-6 text-center ${
                    tier.tier === "Main Sponsor"
                      ? "bg-gradient-to-br from-yellow-50 to-yellow-100"
                      : "bg-white"
                  }`}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {tier.tier}
                  </h3>
                  <div className="text-2xl font-bold text-blue-600 mb-6">
                    {tier.price}
                  </div>
                  <ul className="space-y-3 text-left mb-8">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <div className="text-green-500 mr-2">✓</div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
                    {tier.tier === "Exhibition Space"
                      ? "Book Now"
                      : "Become a Sponsor"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact & Registration */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Register Now
            </h2>
            <p className="text-gray-600">
              Secure your spot at this landmark event
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FiMail className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:secretariat@interfaithresearchpanel.org"
                      className="text-blue-600 hover:underline"
                    >
                      secretariat@interfaithresearchpanel.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiUsers className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">For Enquiries</p>
                    <p>
                      John:{" "}
                      <a
                        href="tel:+254703825533"
                        className="text-blue-600 hover:underline"
                      >
                        +254 703 825 533
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiGlobe className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Website</p>
                    <a
                      href="https://www.interfaithresearchpanel.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      www.interfaithresearchpanel.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaTree className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-medium">Sustainability Note:</span>{" "}
                    Each participant will plant a tree at the venue
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Quick Registration
              </h3>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <FiCheck className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="mt-3 text-lg font-medium text-gray-900">
                    Registration Submitted!
                  </h4>
                  <p className="mt-2 text-sm text-gray-500">
                    Thank you for registering. We'll be in touch with more
                    details soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setError("");
                    }}
                    className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Register Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <FiX className="h-5 w-5 text-red-400" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-red-700">{error}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <FiLoader className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" />
                        Processing...
                      </>
                    ) : (
                      "Register Now"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
