import PasswordProtection from '../components/PasswordProtection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Megaphone, Download, Eye, Share2, Instagram, Facebook, Twitter, Linkedin, FileText, Image, Video } from 'lucide-react';

export default function Marketing() {
  const marketingMaterials = [
    {
      id: 1,
      title: "Luxury Home Social Media Kit",
      type: "Social Media",
      category: "Instagram",
      description: "Complete social media package for luxury property listings including stories, posts, and reels templates.",
      downloads: 45,
      views: 128,
      lastUpdated: "2 days ago",
      files: [
        { name: "Instagram Post Template", type: "image", size: "2.4 MB" },
        { name: "Instagram Story Template", type: "image", size: "1.8 MB" },
        { name: "Reel Template", type: "video", size: "15.2 MB" }
      ]
    },
    {
      id: 2,
      title: "Property Flyer Template Pack",
      type: "Print Marketing",
      category: "Flyers",
      description: "Professional flyer templates for property listings with customizable text and photo placeholders.",
      downloads: 32,
      views: 89,
      lastUpdated: "1 week ago",
      files: [
        { name: "Standard Flyer Template", type: "document", size: "5.1 MB" },
        { name: "Luxury Flyer Template", type: "document", size: "4.8 MB" },
        { name: "Open House Flyer", type: "document", size: "3.2 MB" }
      ]
    },
    {
      id: 3,
      title: "Facebook Ad Campaign Assets",
      type: "Digital Ads",
      category: "Facebook",
      description: "Ready-to-use Facebook ad creatives for property promotion with multiple format options.",
      downloads: 28,
      views: 76,
      lastUpdated: "3 days ago",
      files: [
        { name: "Square Ad Template", type: "image", size: "1.2 MB" },
        { name: "Story Ad Template", type: "image", size: "0.9 MB" },
        { name: "Carousel Ad Template", type: "image", size: "2.1 MB" }
      ]
    },
    {
      id: 4,
      title: "Email Newsletter Templates",
      type: "Email Marketing",
      category: "Newsletter",
      description: "Professional email templates for client newsletters and property updates.",
      downloads: 41,
      views: 112,
      lastUpdated: "5 days ago",
      files: [
        { name: "Monthly Newsletter", type: "document", size: "3.5 MB" },
        { name: "Property Update Email", type: "document", size: "2.8 MB" },
        { name: "Market Report Template", type: "document", size: "4.1 MB" }
      ]
    },
    {
      id: 5,
      title: "LinkedIn Professional Posts",
      type: "Social Media",
      category: "LinkedIn",
      description: "Business-focused LinkedIn post templates for professional real estate marketing.",
      downloads: 19,
      views: 54,
      lastUpdated: "1 week ago",
      files: [
        { name: "Market Update Post", type: "image", size: "1.5 MB" },
        { name: "Success Story Post", type: "image", size: "1.3 MB" },
        { name: "Tips & Advice Post", type: "image", size: "1.7 MB" }
      ]
    },
    {
      id: 6,
      title: "Video Marketing Kit",
      type: "Video Content",
      category: "YouTube",
      description: "Video templates and assets for property tours and market updates.",
      downloads: 15,
      views: 67,
      lastUpdated: "2 weeks ago",
      files: [
        { name: "Property Tour Intro", type: "video", size: "25.3 MB" },
        { name: "Market Update Template", type: "video", size: "18.7 MB" },
        { name: "Client Testimonial Template", type: "video", size: "22.1 MB" }
      ]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Social Media':
        return <Megaphone className="w-5 h-5" />;
      case 'Print Marketing':
        return <FileText className="w-5 h-5" />;
      case 'Digital Ads':
        return <Eye className="w-5 h-5" />;
      case 'Email Marketing':
        return <FileText className="w-5 h-5" />;
      case 'Video Content':
        return <Video className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Instagram':
        return <Instagram className="w-4 h-4" />;
      case 'Facebook':
        return <Facebook className="w-4 h-4" />;
      case 'Twitter':
        return <Twitter className="w-4 h-4" />;
      case 'LinkedIn':
        return <Linkedin className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <Image className="w-4 h-4" />;
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'document':
        return <FileText className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <PasswordProtection>
      <div className="min-h-screen bg-realtor-light">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-realtor-dark mb-4">Marketing Materials</h1>
            <p className="text-xl text-realtor-slate">
              Access professional marketing materials, social media templates, and promotional assets for your properties.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-realtor-stone">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-realtor-slate">Total Materials</p>
                  <p className="text-2xl font-bold text-realtor-dark">{marketingMaterials.length}</p>
                </div>
                <Megaphone className="w-8 h-8 text-realtor-blue" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-realtor-stone">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-realtor-slate">Total Downloads</p>
                  <p className="text-2xl font-bold text-realtor-dark">
                    {marketingMaterials.reduce((sum, m) => sum + m.downloads, 0)}
                  </p>
                </div>
                <Download className="w-8 h-8 text-realtor-green" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-realtor-stone">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-realtor-slate">Total Views</p>
                  <p className="text-2xl font-bold text-realtor-dark">
                    {marketingMaterials.reduce((sum, m) => sum + m.views, 0)}
                  </p>
                </div>
                <Eye className="w-8 h-8 text-realtor-gold" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-realtor-stone">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-realtor-slate">Categories</p>
                  <p className="text-2xl font-bold text-realtor-dark">6</p>
                </div>
                <Share2 className="w-8 h-8 text-realtor-slate" />
              </div>
            </div>
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {marketingMaterials.map((material) => (
              <div key={material.id} className="bg-white rounded-xl shadow-sm border border-realtor-stone overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-realtor-blue rounded-lg flex items-center justify-center text-white">
                        {getTypeIcon(material.type)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-realtor-dark">{material.title}</h3>
                        <div className="flex items-center space-x-2 text-sm text-realtor-slate">
                          {getCategoryIcon(material.category)}
                          <span>{material.category}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-realtor-slate bg-realtor-light px-2 py-1 rounded-full">
                      {material.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-realtor-slate mb-4">{material.description}</p>

                  {/* Files List */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-realtor-dark mb-2">Files Included:</h4>
                    <div className="space-y-2">
                      {material.files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-realtor-light rounded-lg">
                          <div className="flex items-center space-x-2">
                            {getFileIcon(file.type)}
                            <span className="text-sm text-realtor-dark">{file.name}</span>
                          </div>
                          <span className="text-xs text-realtor-slate">{file.size}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats and Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-realtor-stone">
                    <div className="flex items-center space-x-4 text-sm text-realtor-slate">
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{material.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{material.views}</span>
                      </div>
                      <span>Updated {material.lastUpdated}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-realtor-blue text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium">
                        Download All
                      </button>
                      <button className="px-4 py-2 border border-realtor-stone text-realtor-slate rounded-lg hover:bg-realtor-light transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Access Section */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-realtor-stone">
            <h2 className="text-2xl font-bold text-realtor-dark mb-6">Quick Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-realtor-light rounded-lg">
                <Instagram className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                <h3 className="font-semibold text-realtor-dark mb-2">Instagram Templates</h3>
                <p className="text-sm text-realtor-slate mb-4">Ready-to-use Instagram posts and stories</p>
                <button className="text-realtor-blue font-medium text-sm">View Templates</button>
              </div>
              <div className="text-center p-6 bg-realtor-light rounded-lg">
                <Facebook className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-realtor-dark mb-2">Facebook Ads</h3>
                <p className="text-sm text-realtor-slate mb-4">Professional Facebook ad creatives</p>
                <button className="text-realtor-blue font-medium text-sm">View Ads</button>
              </div>
              <div className="text-center p-6 bg-realtor-light rounded-lg">
                <FileText className="w-8 h-8 text-realtor-slate mx-auto mb-3" />
                <h3 className="font-semibold text-realtor-dark mb-2">Print Materials</h3>
                <p className="text-sm text-realtor-slate mb-4">Flyers, brochures, and signage</p>
                <button className="text-realtor-blue font-medium text-sm">View Materials</button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </PasswordProtection>
  );
}
