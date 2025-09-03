import { Building2, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-realtor-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-realtor-blue rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Real Estate Portal</h3>
                <p className="text-realtor-stone text-sm">Professional Client Services</p>
              </div>
            </div>
            <p className="text-realtor-stone text-sm leading-relaxed">
              Your dedicated portal for property listings, marketing materials, 
              and performance analytics. Access everything you need for your 
              real estate journey in one secure location.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-realtor-gold" />
                <span className="text-realtor-stone text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-realtor-gold" />
                <span className="text-realtor-stone text-sm">info@realtorportal.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-realtor-gold" />
                <span className="text-realtor-stone text-sm">123 Main Street, City, State</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/properties" className="block text-realtor-stone hover:text-white transition-colors text-sm">
                Property Listings
              </a>
              <a href="/marketing" className="block text-realtor-stone hover:text-white transition-colors text-sm">
                Marketing Materials
              </a>
              <a href="/analytics" className="block text-realtor-stone hover:text-white transition-colors text-sm">
                Performance Analytics
              </a>
              <a href="/brandkit" className="block text-realtor-stone hover:text-white transition-colors text-sm">
                Brand Guidelines
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-realtor-slate mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-realtor-stone text-sm">
              © 2024 Real Estate Portal. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-realtor-stone hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-realtor-stone hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
