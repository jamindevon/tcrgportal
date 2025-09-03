'use client';

import { ChevronDown, Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function BrandKit() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '1000',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        padding: '16px 24px'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link 
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--text-dark)',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dark)'}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ 
              width: '32px', 
              height: '32px', 
              background: 'var(--navy)', 
              borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <Home className="w-4 h-4" style={{ color: 'white' }} />
            </div>
            <span style={{ color: 'var(--text-dark)', fontWeight: '600', fontSize: '0.875rem' }}>
              Brand Guidelines
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: '80px' }}>
        <div className="hero-content">
          <h1 style={{ color: 'var(--text-dark)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>Brand Guidelines</h1>
          <p style={{ color: 'var(--text-gray)', fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', fontWeight: '400', marginBottom: '3rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>Treasure Coast Realty Group visual identity and design system</p>
        </div>
        <div className="scroll-indicator">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>
      
      {/* Logo Section */}
      <section className="section logo-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Identity</h2>
            <p className="section-subtitle">
              The Treasure Coast Realty Group logo represents our commitment to community development and professional excellence in Fort Pierce real estate.
            </p>
          </div>
          
          <div className="logo-showcase">
            <div className="logo-container">
              <img 
                src="/images/TCRG Logo.jpg" 
                alt="Treasure Coast Realty Group Logo" 
                className="logo-image"
              />
            </div>
            <p className="tagline">&ldquo;Building Relationships, Building Community&rdquo;</p>
            <p className="tagline-label">Official Tagline</p>
          </div>
          
          <div className="guidelines">
            <h3>Usage Guidelines</h3>
            <ul>
              <li>Maintain clear space around logo equal to the height of the text elements</li>
              <li>Minimum width: 200px for digital applications, 2 inches for print materials</li>
              <li>Use on light backgrounds for optimal contrast and readability</li>
              <li>Never modify, stretch, distort, or alter the proportions of the logo</li>
              <li>Ensure sufficient contrast in all applications and maintain brand integrity</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Colors Section */}
      <section className="section colors-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Color Palette</h2>
            <p className="section-subtitle">
              Our carefully curated colors reflect professionalism, trust, and the premium nature of our real estate services.
            </p>
          </div>
          
          <div className="color-grid">
            <div className="color-card">
              <div className="color-swatch" style={{background: 'linear-gradient(135deg, #10254F 0%, #1a3666 100%)'}}>
                <div className="color-code">#10254F</div>
              </div>
              <div className="color-info">
                <div className="color-name">Ocean Navy</div>
                <div className="color-usage">Primary brand color for headers, navigation, and key brand elements</div>
              </div>
            </div>
            
            <div className="color-card">
              <div className="color-swatch" style={{background: 'linear-gradient(135deg, #B2935D 0%, #d4b876 100%)'}}>
                <div className="color-code">#B2935D</div>
              </div>
              <div className="color-info">
                <div className="color-name">Coastal Gold</div>
                <div className="color-usage">Accent color for highlights, buttons, and call-to-action elements</div>
              </div>
            </div>
            
            <div className="color-card">
              <div className="color-swatch" style={{background: 'linear-gradient(135deg, #1D1D1F 0%, #2c2c2e 100%)'}}>
                <div className="color-code">#1D1D1F</div>
              </div>
              <div className="color-info">
                <div className="color-name">Charcoal</div>
                <div className="color-usage">Primary text color and sophisticated dark UI elements</div>
              </div>
            </div>
            
            <div className="color-card">
              <div className="color-swatch" style={{background: 'linear-gradient(135deg, #F5F5F7 0%, #ffffff 100%)'}}>
                <div className="color-code" style={{color: '#1D1D1F', background: 'rgba(29, 29, 31, 0.1)'}}>#F5F5F7</div>
              </div>
              <div className="color-info">
                <div className="color-name">Cloud</div>
                <div className="color-usage">Background color for sections and subtle UI elements</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Typography Section */}
      <section className="section typography-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Typography</h2>
            <p className="section-subtitle">
              Clean, modern typography that ensures excellent readability and reinforces our professional brand image.
            </p>
          </div>
          
          <div className="typography-samples">
            <div className="typography-card">
              <span className="font-label">Display Headings • Inter Bold</span>
              <h1 style={{fontSize: '3rem', fontWeight: 700, color: 'var(--text-dark)', margin: '0 0 1rem 0', lineHeight: '1.1'}}>
                Professional Real Estate Excellence
              </h1>
              <h2 style={{fontSize: '2rem', fontWeight: 600, color: 'var(--gold)', margin: 0, lineHeight: '1.2'}}>
                Building Fort Pierce&apos;s Future
              </h2>
            </div>
            
            <div className="typography-card">
              <span className="font-label">Body Text • Inter Regular</span>
              <p style={{fontSize: '1.125rem', lineHeight: '1.6', color: 'var(--text-dark)', margin: '0 0 1.5rem 0'}}>
                Treasure Coast Realty Group was birthed out of a passion for community development. Our mission is to provide customers the ultimate real estate experience without compromising professionalism, integrity, or commitment.
              </p>
              <p style={{fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-gray)', margin: 0}}>
                Whether you&apos;re a first-time buyer, seasoned investor, or looking to sell, we&apos;re your partner in success while supporting the One Fort Pierce initiative.
              </p>
            </div>
            
            <div className="typography-card">
              <span className="font-label">Quote Text • Inter Medium Italic</span>
              <blockquote style={{fontSize: '1.5rem', fontWeight: 500, fontStyle: 'italic', color: 'var(--gold)', textAlign: 'center', margin: 0, padding: '2rem 0', border: 'none'}}>
                &ldquo;Not only are we known for getting the deal done, but also for fostering lasting relationships.&rdquo;
              </blockquote>
              <p style={{textAlign: 'center', color: 'var(--text-gray)', margin: 0, fontSize: '0.9rem'}}>
                — Treasure Coast Realty Group
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Download Section */}
      <section className="download-section">
        <div className="container">
          <h2 className="download-title">Brand Assets</h2>
          <p className="download-subtitle">
            Download our complete brand kit including logo files, color swatches, and typography specifications for consistent brand application.
          </p>
          <div className="download-grid">
            <a href="https://fonts.google.com/specimen/Inter" className="download-btn" target="_blank" rel="noopener noreferrer">
              Typography Files
            </a>
            <a href="#" className="download-btn">Logo Package</a>
            <a href="#" className="download-btn">Color Swatches</a>
            <a href="#" className="download-btn">Complete Brand Kit</a>
          </div>
        </div>
      </section>

      {/* Floating Home Button */}
      <Link 
        href="/"
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          width: '56px',
          height: '56px',
          background: 'var(--gold)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-xl)',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          zIndex: '1000'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)';
          e.currentTarget.style.background = 'var(--navy)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.background = 'var(--gold)';
        }}
        title="Go to Home"
      >
        <Home className="w-6 h-6" style={{ color: 'white' }} />
      </Link>
    </div>
  );
}