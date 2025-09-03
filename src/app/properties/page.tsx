import PasswordProtection from '../components/PasswordProtection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Building2, MapPin, Bed, Bath, Square, DollarSign, Calendar, Eye, Heart } from 'lucide-react';

export default function Properties() {
  const properties = [
    {
      id: 1,
      title: "Luxury Modern Home in Oak Valley",
      address: "123 Oak Street, Oak Valley, CA 90210",
      price: "$1,250,000",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      yearBuilt: 2020,
      status: "Active",
      views: 247,
      image: "/images/property-1.jpg",
      description: "Stunning modern home with open floor plan, gourmet kitchen, and private backyard oasis."
    },
    {
      id: 2,
      title: "Charming Victorian in Historic District",
      address: "456 Pine Avenue, Historic District, CA 90211",
      price: "$875,000",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2200,
      yearBuilt: 1895,
      status: "Active",
      views: 189,
      image: "/images/property-2.jpg",
      description: "Beautifully restored Victorian home with original hardwood floors and period details."
    },
    {
      id: 3,
      title: "Contemporary Condo with City Views",
      address: "789 Maple Drive, Downtown, CA 90212",
      price: "$650,000",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1500,
      yearBuilt: 2018,
      status: "Pending",
      views: 156,
      image: "/images/property-3.jpg",
      description: "Sleek downtown condo with floor-to-ceiling windows and premium finishes."
    },
    {
      id: 4,
      title: "Family Home with Pool",
      address: "321 Elm Street, Suburbia, CA 90213",
      price: "$950,000",
      bedrooms: 5,
      bathrooms: 4,
      sqft: 3200,
      yearBuilt: 2015,
      status: "Active",
      views: 312,
      image: "/images/property-4.jpg",
      description: "Perfect family home with swimming pool, large yard, and updated kitchen."
    },
    {
      id: 5,
      title: "Mountain View Retreat",
      address: "654 Cedar Lane, Mountain View, CA 90214",
      price: "$1,100,000",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2600,
      yearBuilt: 2012,
      status: "Active",
      views: 198,
      image: "/images/property-5.jpg",
      description: "Peaceful mountain retreat with panoramic views and modern amenities."
    },
    {
      id: 6,
      title: "Beachfront Bungalow",
      address: "987 Ocean Drive, Beachside, CA 90215",
      price: "$1,800,000",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      yearBuilt: 1975,
      status: "Sold",
      views: 445,
      image: "/images/property-6.jpg",
      description: "Charming beachfront bungalow with direct beach access and ocean views."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-realtor-green text-white';
      case 'Pending':
        return 'bg-realtor-gold text-white';
      case 'Sold':
        return 'bg-realtor-slate text-white';
      default:
        return 'bg-realtor-stone text-realtor-dark';
    }
  };

  return (
    <PasswordProtection>
      <div className="min-h-screen bg-realtor-light">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-realtor-dark mb-4">Property Listings</h1>
            <p className="text-xl text-realtor-slate">
              Browse and manage your active property listings with detailed information and high-quality photos.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-realtor-stone">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-realtor-slate">Total Properties</p>
                  <p className="text-2xl font-bold text-realtor-dark">{properties.length}</p>
                </div>
                <Building2 className="w-8 h-8 text-realtor-blue" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-realtor-stone">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-realtor-slate">Active Listings</p>
                  <p className="text-2xl font-bold text-realtor-dark">
                    {properties.filter(p => p.status === 'Active').length}
                  </p>
                </div>
                <Eye className="w-8 h-8 text-realtor-green" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-realtor-stone">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-realtor-slate">Total Views</p>
                  <p className="text-2xl font-bold text-realtor-dark">
                    {properties.reduce((sum, p) => sum + p.views, 0)}
                  </p>
                </div>
                <Heart className="w-8 h-8 text-realtor-gold" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-realtor-stone">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-realtor-slate">Avg. Price</p>
                  <p className="text-2xl font-bold text-realtor-dark">$1.1M</p>
                </div>
                <DollarSign className="w-8 h-8 text-realtor-green" />
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-sm border border-realtor-stone overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Property Image */}
                <div className="relative h-64 bg-realtor-stone">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
                      {property.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-2 text-white">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">{property.views}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-2xl font-bold">{property.price}</p>
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-realtor-dark mb-2">{property.title}</h3>
                  <div className="flex items-center text-realtor-slate mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{property.address}</span>
                  </div>
                  
                  <p className="text-realtor-slate text-sm mb-4 line-clamp-2">{property.description}</p>

                  {/* Property Features */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center text-realtor-slate">
                      <Bed className="w-4 h-4 mr-2" />
                      <span className="text-sm">{property.bedrooms} beds</span>
                    </div>
                    <div className="flex items-center text-realtor-slate">
                      <Bath className="w-4 h-4 mr-2" />
                      <span className="text-sm">{property.bathrooms} baths</span>
                    </div>
                    <div className="flex items-center text-realtor-slate">
                      <Square className="w-4 h-4 mr-2" />
                      <span className="text-sm">{property.sqft.toLocaleString()} sqft</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-realtor-slate mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Built {property.yearBuilt}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-realtor-blue text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors font-medium">
                      View Details
                    </button>
                    <button className="px-4 py-2 border border-realtor-stone text-realtor-slate rounded-lg hover:bg-realtor-light transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-white border border-realtor-stone text-realtor-dark py-3 px-8 rounded-lg hover:bg-realtor-light transition-colors font-medium">
              Load More Properties
            </button>
          </div>
        </main>

        <Footer />
      </div>
    </PasswordProtection>
  );
}
