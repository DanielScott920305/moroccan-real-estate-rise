
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

// Mock featured projects
const featuredProjects = [
  {
    id: 1,
    title: "Casablanca Marina Residences",
    location: "Casablanca",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    investmentGoal: "10,000,000 MAD",
    investmentMinimum: "5,000 MAD",
    return: "8-10% annually",
    funded: 65,
  },
  {
    id: 2,
    title: "Marrakech Palm Grove Villas",
    location: "Marrakech",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    investmentGoal: "15,000,000 MAD",
    investmentMinimum: "10,000 MAD",
    return: "9-12% annually",
    funded: 42,
  },
  {
    id: 3,
    title: "Tangier Bay Apartments",
    location: "Tangier",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    investmentGoal: "8,000,000 MAD",
    investmentMinimum: "2,500 MAD",
    return: "7-9% annually",
    funded: 78,
  },
];

// Mock stats
const platformStats = [
  { label: "Total Investments", value: "120M MAD" },
  { label: "Investors", value: "3,500+" },
  { label: "Projects Funded", value: "42" },
  { label: "Average Returns", value: "9.2%" },
];

const Index = () => {
  // Set document title
  useEffect(() => {
    document.title = "Moroccan Real Estate Rise - Real Estate Crowdfunding Platform";
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555554318-1899e33301a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Morocco Real Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Invest in Morocco's Future
          </h1>
          <p className="mt-6 max-w-2xl text-xl">
            Join Morocco's first real estate crowdfunding platform and diversify your portfolio with high-quality property investments, starting from just 2,500 MAD.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-morocco-gold hover:bg-morocco-terracotta text-white py-3 px-8 rounded-md text-lg font-medium"
            >
              <Link to="/projects">Browse Projects</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="bg-transparent border border-white text-white hover:bg-white hover:text-morocco-blue py-3 px-8 rounded-md text-lg font-medium"
            >
              <Link to="/how-it-works">How It Works</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Platform Stats */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {platformStats.map((stat, index) => (
              <div key={index} className="investment-stat">
                <h3 className="text-3xl font-bold text-morocco-blue">{stat.value}</h3>
                <p className="text-morocco-lightBlue font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-morocco-blue">How It Works</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Three simple steps to start investing in Moroccan real estate
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg p-8 shadow-sm text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-morocco-blue text-white text-2xl font-bold">
                1
              </div>
              <h3 className="mt-6 text-xl font-medium text-morocco-blue">Create an Account</h3>
              <p className="mt-2 text-gray-600">
                Sign up, complete your investor profile, and verify your identity with our simple KYC process.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-morocco-blue text-white text-2xl font-bold">
                2
              </div>
              <h3 className="mt-6 text-xl font-medium text-morocco-blue">Browse Projects</h3>
              <p className="mt-2 text-gray-600">
                Explore thoroughly vetted real estate projects across Morocco and choose investments that match your goals.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-morocco-blue text-white text-2xl font-bold">
                3
              </div>
              <h3 className="mt-6 text-xl font-medium text-morocco-blue">Invest & Monitor</h3>
              <p className="mt-2 text-gray-600">
                Make secure investments starting from 2,500 MAD and track your portfolio performance in real-time.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button 
              asChild
              className="bg-morocco-blue hover:bg-morocco-lightBlue text-white"
            >
              <Link to="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-morocco-blue">Featured Investment Opportunities</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Discover our latest vetted real estate projects across Morocco
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm card-hover"
              >
                <div className="h-48 w-full relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-morocco-blue text-white text-sm font-medium py-1 px-2 rounded">
                    {project.location}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-morocco-blue">{project.title}</h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Investment Goal:</span>
                      <span className="font-medium">{project.investmentGoal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Minimum Investment:</span>
                      <span className="font-medium">{project.investmentMinimum}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Expected Return:</span>
                      <span className="font-medium text-morocco-terracotta">{project.return}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-morocco-gold h-2 rounded-full"
                        style={{ width: `${project.funded}%` }}
                      ></div>
                    </div>
                    <div className="mt-2 flex justify-between text-sm">
                      <span>{project.funded}% funded</span>
                      <span>Progress</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button 
                      asChild
                      className="w-full bg-morocco-blue hover:bg-morocco-lightBlue text-white"
                    >
                      <Link to={`/projects/${project.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              asChild
              variant="outline" 
              className="border-morocco-blue text-morocco-blue hover:bg-morocco-blue hover:text-white"
            >
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-morocco-blue">Why Choose Our Platform</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              The safest way to invest in Moroccan real estate
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-md bg-morocco-blue text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-morocco-blue">Thorough Vetting</h3>
              <p className="mt-2 text-sm text-gray-600">
                All projects undergo rigorous due diligence and legal verification
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-md bg-morocco-blue text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-morocco-blue">Low Minimum</h3>
              <p className="mt-2 text-sm text-gray-600">
                Start investing with as little as 2,500 MAD
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-md bg-morocco-blue text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-morocco-blue">Diversification</h3>
              <p className="mt-2 text-sm text-gray-600">
                Spread your investments across multiple properties and locations
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-md bg-morocco-blue text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-morocco-blue">Full Transparency</h3>
              <p className="mt-2 text-sm text-gray-600">
                Regular updates and complete visibility into your investments
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-morocco-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to start investing in Moroccan real estate?</h2>
          <p className="mt-4 text-xl max-w-2xl mx-auto">
            Create your account today and explore our thoroughly vetted investment opportunities.
          </p>
          <div className="mt-8">
            <Button 
              asChild
              size="lg" 
              className="bg-morocco-gold hover:bg-morocco-terracotta text-white py-3 px-8 rounded-md text-lg font-medium"
            >
              <Link to="/register">Create Account</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
