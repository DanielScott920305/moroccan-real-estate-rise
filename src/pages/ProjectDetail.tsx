import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock project data (in a real app, this would come from an API)
const projectsData = [
  {
    id: "1",
    title: "Casablanca Marina Residences",
    location: "Casablanca",
    type: "Residential",
    images: [
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1569152811536-fb47aced8409?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    investmentGoal: "10,000,000 MAD",
    investmentMinimum: "5,000 MAD",
    return: "8-10% annually",
    funded: 65,
    investorCount: 124,
    description: "The Casablanca Marina Residences is a premier residential development located in Casablanca's prestigious marina district. The complex offers luxury apartments with stunning sea views and modern amenities, providing an exceptional living experience in Morocco's economic capital.",
    details: {
      location: "Casablanca Marina, Boulevard Mohammed V",
      area: "20,000 m²",
      units: "120 apartments",
      completion: "Q3 2026",
      developer: "Morocco Elite Properties",
      legalStructure: "OPCI (Organisme de Placement Collectif Immobilier)",
      risks: "Market fluctuations, construction delays, regulatory changes",
      exitStrategy: "Property sale upon completion with profit distribution to investors"
    },
    financials: {
      totalInvestment: "10,000,000 MAD",
      equity: "7,000,000 MAD",
      debt: "3,000,000 MAD",
      estimatedReturns: "8-10% annually",
      projectedAppreciation: "12% over 3 years",
      holdingPeriod: "3 years",
      distributions: "Quarterly rental income + capital appreciation at exit"
    },
    projections: [
      { year: 'Year 1', returns: 8 },
      { year: 'Year 2', returns: 9 },
      { year: 'Year 3', returns: 10 },
      { year: 'Year 4', returns: 9.5 },
      { year: 'Year 5', returns: 9 }
    ],
    documents: [
      { name: "Investment Prospectus", type: "PDF" },
      { name: "Legal Structure", type: "PDF" },
      { name: "Financial Projections", type: "Excel" },
      { name: "Developer Track Record", type: "PDF" },
      { name: "Property Title", type: "PDF" }
    ]
  },
  // Other projects would be defined here
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [investmentAmount, setInvestmentAmount] = useState(5000);

  // Simulating API fetch
  useEffect(() => {
    // In a real app, fetch from API
    const fetchProject = () => {
      setLoading(true);
      // Find project by id
      const foundProject = projectsData.find(p => p.id === id);
      
      setTimeout(() => {
        setProject(foundProject || null);
        setLoading(false);
      }, 500); // Simulate network delay
    };

    fetchProject();
  }, [id]);

  // Set document title
  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Moroccan Real Estate Rise`;
    } else {
      document.title = "Project Details | Moroccan Real Estate Rise";
    }
  }, [project]);

  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (loading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-96 bg-gray-300 rounded-lg mb-8"></div>
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-64 bg-gray-300 rounded"></div>
              <div className="space-y-4">
                <div className="h-6 bg-gray-300 rounded"></div>
                <div className="h-6 bg-gray-300 rounded"></div>
                <div className="h-6 bg-gray-300 rounded"></div>
                <div className="h-10 bg-gray-300 rounded mt-8"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-700">Project Not Found</h2>
          <p className="mt-2 text-gray-500">The project you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="mt-4 bg-morocco-blue hover:bg-morocco-lightBlue text-white">
            <Link to="/projects">Browse Projects</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Project Header */}
      <div className="relative h-64 md:h-96 bg-gray-900">
        <img
          src={project.images[currentImageIndex]}
          alt={project.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-morocco-blue text-white text-sm font-medium py-1 px-3 rounded-full">
                {project.location}
              </span>
              <span className="bg-morocco-terracotta text-white text-sm font-medium py-1 px-3 rounded-full">
                {project.type}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h1>
          </div>
        </div>
      </div>

      {/* Image Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-white">
        <div className="flex overflow-x-auto space-x-2 py-2">
          {project.images.map((image: string, index: number) => (
            <button
              key={index}
              onClick={() => handleImageChange(index)}
              className={`flex-shrink-0 w-20 h-20 border-2 rounded overflow-hidden ${
                index === currentImageIndex
                  ? "border-morocco-blue"
                  : "border-transparent"
              }`}
            >
              <img
                src={image}
                alt={`Project view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width */}
          <div className="md:col-span-2">
            {/* Project Tabs */}
            <Tabs defaultValue="overview">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="financials">Financials</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold text-morocco-blue">Project Overview</h2>
                  <p className="text-gray-700">{project.description}</p>
                  
                  <h3 className="text-xl font-semibold text-morocco-blue mt-8">Investment Highlights</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Prime location in Casablanca's growing marina district</li>
                    <li>Strong rental demand from professionals and expatriates</li>
                    <li>Potential for capital appreciation as area continues to develop</li>
                    <li>Professional property management included</li>
                    <li>Fully compliant with Moroccan real estate investment regulations</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-morocco-blue mt-8">Market Analysis</h3>
                  <p className="text-gray-700">
                    Casablanca's luxury residential market has shown consistent growth over the past decade, 
                    with particular strength in waterfront properties. The marina district has emerged as one of the most 
                    sought-after locations for both local and international investors, with property values appreciating 
                    an average of 7% annually over the last five years.
                  </p>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-morocco-blue mb-4">Projected Returns</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={project.projections}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis unit="%" />
                        <Tooltip formatter={(value) => [`${value}%`, 'Return']} />
                        <Area 
                          type="monotone" 
                          dataKey="returns" 
                          stroke="#1A365D" 
                          fill="#2C5282" 
                          fillOpacity={0.3}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="details" className="space-y-6">
                <h2 className="text-2xl font-bold text-morocco-blue">Project Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(project.details).map(([key, value]) => (
                    <div key={key} className="border rounded-lg p-4">
                      <h3 className="text-sm font-medium text-gray-500 capitalize">{key}</h3>
                      <p className="text-lg font-medium text-morocco-blue">{value as string}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-morocco-blue mb-4">Location Benefits</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 bg-morocco-blue rounded-full flex items-center justify-center text-white text-sm mr-2">✓</span>
                      <span>5 minutes walk to Casablanca Marina</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 bg-morocco-blue rounded-full flex items-center justify-center text-white text-sm mr-2">✓</span>
                      <span>10 minutes drive to Casablanca business district</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 bg-morocco-blue rounded-full flex items-center justify-center text-white text-sm mr-2">✓</span>
                      <span>Close proximity to international schools and universities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 bg-morocco-blue rounded-full flex items-center justify-center text-white text-sm mr-2">✓</span>
                      <span>Easy access to major highways and transportation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 bg-morocco-blue rounded-full flex items-center justify-center text-white text-sm mr-2">✓</span>
                      <span>30 minutes from Mohammed V International Airport</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-morocco-blue mb-4">Development Timeline</h3>
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-morocco-blue"></div>
                    {['Land Acquisition', 'Planning Approval', 'Construction Start', 'Construction Mid-Point', 'Completion & Handover'].map((phase, index) => (
                      <div key={index} className={`relative mb-8 ${index % 2 === 0 ? 'text-right pr-12 md:pr-24' : 'text-left pl-12 md:pl-24'}`}>
                        <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} flex items-center justify-center h-10 w-10 rounded-full bg-morocco-blue text-white font-bold`}>
                          {index + 1}
                        </div>
                        <h4 className="text-lg font-semibold">{phase}</h4>
                        <p className="text-morocco-terracotta">
                          {['Q1 2024', 'Q3 2024', 'Q1 2025', 'Q1 2026', 'Q3 2026'][index]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="financials" className="space-y-6">
                <h2 className="text-2xl font-bold text-morocco-blue">Financial Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(project.financials).map(([key, value]) => (
                    <div key={key} className="border rounded-lg p-4">
                      <h3 className="text-sm font-medium text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                      <p className="text-lg font-medium text-morocco-blue">{value as string}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-morocco-blue mb-4">Investment Structure</h3>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-morocco-gold">70%</div>
                        <div className="text-sm font-medium text-gray-500">Equity</div>
                      </div>
                    </div>
                    <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-morocco-terracotta">30%</div>
                        <div className="text-sm font-medium text-gray-500">Debt</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-morocco-blue mb-4">Fee Structure</h3>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fee Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Platform Fee</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">One-time fee on initial investment</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Management Fee</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1% annually</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Based on total investment amount</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Performance Fee</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">On profits above 8% hurdle rate</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Early Redemption Fee</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">If redeeming before 1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="documents" className="space-y-6">
                <h2 className="text-2xl font-bold text-morocco-blue">Project Documents</h2>
                <p className="text-gray-600">Access all project-related documentation. Some documents require login to view.</p>
                
                <div className="mt-6 space-y-4">
                  {project.documents.map((doc: any, index: number) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 rounded bg-gray-100 flex items-center justify-center text-morocco-blue">
                          {doc.type === "PDF" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          )}
                        </div>
                        <div className="ml-4">
                          <h4 className="text-base font-medium text-gray-900">{doc.name}</h4>
                          <p className="text-sm text-gray-500">{doc.type} Document</p>
                        </div>
                      </div>
                      <Button 
                        asChild
                        variant="outline"
                        className="border-morocco-blue text-morocco-blue hover:bg-morocco-blue hover:text-white"
                      >
                        <Link to="/login">View Document</Link>
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-morocco-blue">Legal Disclosure</h3>
                  <p className="mt-2 text-gray-600 text-sm">
                    The documents provided are for informational purposes only and do not constitute an offer to sell or solicitation of an offer to buy securities. Investment involves risks and past performance is not indicative of future results. Please consult with your financial advisor before making any investment decisions.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <div className="space-y-6">
                {/* Funding Progress */}
                <div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Progress</span>
                    <span className="text-morocco-terracotta font-medium">{project.funded}% Funded</span>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-morocco-gold h-2.5 rounded-full"
                      style={{ width: `${project.funded}%` }}
                    ></div>
                  </div>
                  <div className="mt-2 flex justify-between text-sm text-gray-600">
                    <span>{project.investorCount} investors</span>
                    <span>Goal: {project.investmentGoal}</span>
                  </div>
                </div>

                {/* Investment Details */}
                <div>
                  <h3 className="font-semibold text-lg text-morocco-blue">Investment Details</h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Minimum Investment:</span>
                      <span className="font-medium">{project.investmentMinimum}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Expected Return:</span>
                      <span className="font-medium text-morocco-terracotta">{project.return}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Investment Period:</span>
                      <span className="font-medium">3 years</span>
                    </div>
                  </div>
                </div>

                {/* Investment Calculator */}
                <div>
                  <h3 className="font-semibold text-lg text-morocco-blue">Investment Calculator</h3>
                  <div className="mt-4">
                    <label className="block text-sm text-gray-600 mb-1">
                      Amount to invest (MAD):
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input
                        type="number"
                        value={investmentAmount}
                        onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                        min={5000}
                        step={1000}
                        className="block w-full p-2 border border-gray-300 rounded-md focus:ring-morocco-blue focus:border-morocco-blue sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-gray-50 rounded-md">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Potential Annual Return:</span>
                      <span className="font-medium">{(investmentAmount * 0.09).toLocaleString()} MAD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Return (3 years):</span>
                      <span className="font-bold text-morocco-terracotta">{(investmentAmount * 0.09 * 3).toLocaleString()} MAD</span>
                    </div>
                  </div>
                </div>

                {/* Invest Button */}
                <div>
                  <Button 
                    asChild
                    className="w-full bg-morocco-blue hover:bg-morocco-lightBlue text-white py-3 text-lg"
                  >
                    <Link to="/login">Invest Now</Link>
                  </Button>
                  <p className="mt-2 text-xs text-gray-500 text-center">
                    You need to log in or create an account to invest
                  </p>
                </div>

                {/* Contact Section */}
                <div className="pt-4 border-t">
                  <h3 className="font-semibold text-morocco-blue">Have Questions?</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Contact our investment team for more information about this project
                  </p>
                  <Button 
                    asChild
                    variant="outline" 
                    className="mt-2 w-full border-morocco-blue text-morocco-blue hover:bg-morocco-blue hover:text-white"
                  >
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
