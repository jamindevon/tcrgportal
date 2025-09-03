import { Home, Building2, Megaphone, BarChart3, Palette } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Properties', href: '/properties', icon: Building2 },
    { name: 'Marketing', href: '/marketing', icon: Megaphone },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Brand Kit', href: '/brandkit', icon: Palette },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-realtor-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-realtor-blue rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-realtor-dark">Real Estate Portal</h1>
                <p className="text-xs text-realtor-slate">Client Dashboard</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-realtor-slate hover:text-realtor-blue transition-colors px-3 py-2 rounded-lg hover:bg-realtor-light"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-realtor-slate hover:text-realtor-blue">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-realtor-stone">
        <div className="px-4 py-2 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 text-realtor-slate hover:text-realtor-blue transition-colors px-3 py-2 rounded-lg hover:bg-realtor-light"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
