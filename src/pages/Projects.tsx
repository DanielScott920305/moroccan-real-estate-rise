
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

// Mock projects data
const allProjects = [
  {
    id: 1,
    title: "Casablanca Marina Residences",
    location: "Casablanca",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    investmentGoal: "10,000,000 MAD",
    investmentMinimum: "5,000 MAD",
    return: "8-10% annually",
    funded: 65,
    description: "Luxury apartment complex in Casablanca's prestigious marina district with sea views and premium amenities."
  },
  {
    id: 2,
    title: "Marrakech Palm Grove Villas",
    location: "Marrakech",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    investmentGoal: "15,000,000 MAD",
    investmentMinimum: "10,000 MAD",
    return: "9-12% annually",
    funded: 42,
    description: "Exclusive villa development in Marrakech's iconic Palm Grove, featuring traditional architecture with modern amenities."
  },
  {
    id: 3,
    title: "Tangier Bay Apartments",
    location: "Tangier",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    investmentGoal: "8,000,000 MAD",
    investmentMinimum: "2,500 MAD",
    return: "7-9% annually",
    funded: 78,
    description: "Modern apartments with Mediterranean views in Tangier's rapidly developing bay area."
  },
  {
    id: 4,
    title: "Agadir Beachfront Hotel",
    location: "Agadir",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    investmentGoal: "25,000,000 MAD",
    investmentMinimum: "15,000 MAD",
    return: "10-12% annually",
    funded: 35,
    description: "Boutique hotel development on Agadir's beautiful beach, catering to the growing tourism sector."
  },
  {
    id: 5,
    title: "Rabat Office Tower",
    location: "Rabat",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    investmentGoal: "30,000,000 MAD",
    investmentMinimum: "20,000 MAD",
    return: "8-11% annually",
    funded: 22,
    description: "Modern office space in Rabat's business district, featuring sustainable design and smart building technology."
  },
  {
    id: 6,
    title: "Fez Old City Renovation",
    location: "Fez",
    type: "Mixed-Use",
    image: "https://images.unsplash.com/photo-1512958789103-b34e87b8cd4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    investmentGoal: "12,000,000 MAD",
    investmentMinimum: "5,000 MAD",
    return: "9-11% annually",
    funded: 58,
    description: "Restoration project converting historic buildings in Fez Medina into boutique accommodations and shops."
  }
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationType, setLocationType] = useState("all");
  const [propertyType, setPropertyType] = useState("all");
  const [minInvestment, setMinInvestment] = useState([0]);
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  // Set document title
  useEffect(() => {
    document.title = "Browse Investment Projects | Moroccan Real Estate Rise";
  }, []);

  // Filter projects based on search and filters
  useEffect(() => {
    let results = allProjects;
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(
        project =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by location (changed from "" to "all")
    if (locationType && locationType !== "all") {
      results = results.filter(project => project.location === locationType);
    }
    
    // Filter by property type (changed from "" to "all")
    if (propertyType && propertyType !== "all") {
      results = results.filter(project => project.type === propertyType);
    }
    
    // Filter by minimum investment (in thousands)
    if (minInvestment[0] > 0) {
      const minAmount = minInvestment[0] * 1000;
      results = results.filter(project => {
        const min = parseInt(project.investmentMinimum.replace(/[^0-9]/g, ''), 10);
        return min >= minAmount;
      });
    }
    
    setFilteredProjects(results);
  }, [searchTerm, locationType, propertyType, minInvestment]);

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setLocationType("all");
    setPropertyType("all");
    setMinInvestment([0]);
  };

  return (
    <Layout>
      {/* Header */}
      <div className="bg-morocco-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Investment Projects</h1>
          <p className="mt-2 text-lg">
            Browse our curated selection of high-quality real estate investment opportunities
          </p>
        </div>
      </div>

      {/* Filters and Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Search Projects
              </label>
              <Input
                type="text"
                placeholder="Search by name or description"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <Select value={locationType} onValueChange={setLocationType}>
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Casablanca">Casablanca</SelectItem>
                  <SelectItem value="Marrakech">Marrakech</SelectItem>
                  <SelectItem value="Tangier">Tangier</SelectItem>
                  <SelectItem value="Rabat">Rabat</SelectItem>
                  <SelectItem value="Fez">Fez</SelectItem>
                  <SelectItem value="Agadir">Agadir</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Property Type
              </label>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Residential">Residential</SelectItem>
                  <SelectItem value="Commercial">Commercial</SelectItem>
                  <SelectItem value="Mixed-Use">Mixed-Use</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Minimum Investment */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Min. Investment (in thousands MAD): {minInvestment[0]} K
              </label>
              <Slider
                defaultValue={[0]}
                value={minInvestment}
                max={20}
                step={1}
                onValueChange={setMinInvestment}
                className="py-4"
              />
            </div>
          </div>

          {/* Reset Filters */}
          <div className="mt-4 flex justify-end">
            <Button 
              variant="outline" 
              onClick={resetFilters}
              className="border-morocco-blue text-morocco-blue hover:bg-morocco-blue hover:text-white"
            >
              Reset Filters
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
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
                  <div className="absolute top-4 right-4 bg-morocco-terracotta text-white text-sm font-medium py-1 px-2 rounded">
                    {project.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-morocco-blue">{project.title}</h3>
                  <p className="mt-2 text-gray-600 line-clamp-2">{project.description}</p>
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
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium text-gray-700">No projects match your filters</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search criteria</p>
              <Button 
                onClick={resetFilters} 
                className="mt-4 bg-morocco-blue hover:bg-morocco-lightBlue text-white"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
