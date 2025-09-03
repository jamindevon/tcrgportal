'use client';

import { Palette, ArrowRight, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--light-gray)' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              background: 'var(--navy)', 
              borderRadius: '16px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <Building2 className="w-8 h-8" style={{ color: 'white' }} />
            </div>
          </div>
          <h1 className="hero-title">Treasure Coast Realty Group</h1>
          <p className="hero-subtitle">Brand Guidelines & Visual Identity System</p>
          <Link 
            href="/brandkit"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: 'var(--gold)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '16px',
              fontWeight: '600',
              fontSize: '1.125rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: 'var(--shadow-lg)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.background = 'var(--navy)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'var(--gold)';
            }}
          >
            <Palette className="w-6 h-6" />
            View Brand Kit
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container text-center">
          <h2 className="section-title">Building Relationships, Building Community</h2>
          <p className="section-subtitle">
            Treasure Coast Realty Group was birthed out of a passion for community development. 
            Our mission is to provide customers the ultimate real estate experience without 
            compromising professionalism, integrity, or commitment.
          </p>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-gray)', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
            Whether you&apos;re a first-time buyer, seasoned investor, or looking to sell, 
            we&apos;re your partner in success while supporting the One Fort Pierce initiative.
          </p>
        </div>
      </section>

      {/* Quick Access */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Brand Resources</h2>
            <p className="section-subtitle">
              Access our complete brand guidelines and visual identity system
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div style={{
              background: 'var(--white)',
              borderRadius: '20px',
              padding: '32px',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                background: 'var(--navy)', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '24px' 
              }}>
                <Palette className="w-6 h-6" style={{ color: 'white' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px' }}>Brand Guidelines</h3>
              <p style={{ color: 'var(--text-gray)', marginBottom: '24px', lineHeight: '1.6' }}>
                Complete visual identity system including logo usage, color palette, and typography guidelines.
              </p>
              <Link 
                href="/brandkit"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  color: 'var(--gold)', 
                  fontWeight: '600', 
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--navy)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gold)'}
              >
                View Guidelines
                <ArrowRight className="w-4 h-4" style={{ marginLeft: '8px' }} />
              </Link>
            </div>

            <div style={{
              background: 'var(--white)',
              borderRadius: '20px',
              padding: '32px',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                background: 'var(--gold)', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '24px' 
              }}>
                <Building2 className="w-6 h-6" style={{ color: 'white' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px' }}>Logo Assets</h3>
              <p style={{ color: 'var(--text-gray)', marginBottom: '24px', lineHeight: '1.6' }}>
                Download high-quality logo files in various formats for all your marketing materials.
              </p>
              <Link 
                href="/brandkit"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  color: 'var(--gold)', 
                  fontWeight: '600', 
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--navy)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gold)'}
              >
                Download Assets
                <ArrowRight className="w-4 h-4" style={{ marginLeft: '8px' }} />
              </Link>
            </div>

            <div style={{
              background: 'var(--white)',
              borderRadius: '20px',
              padding: '32px',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                background: 'var(--charcoal)', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '24px' 
              }}>
                <Palette className="w-6 h-6" style={{ color: 'white' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px' }}>Color Palette</h3>
              <p style={{ color: 'var(--text-gray)', marginBottom: '24px', lineHeight: '1.6' }}>
                Professional color scheme with hex codes and usage guidelines for consistent branding.
              </p>
              <Link 
                href="/brandkit"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  color: 'var(--gold)', 
                  fontWeight: '600', 
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--navy)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gold)'}
              >
                View Colors
                <ArrowRight className="w-4 h-4" style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="download-section">
        <div className="container text-center">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              background: 'var(--gold)', 
              borderRadius: '12px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <Building2 className="w-6 h-6" style={{ color: 'white' }} />
            </div>
          </div>
          <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '16px' }}>Treasure Coast Realty Group</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '24px', fontSize: '1.125rem' }}>
            &ldquo;Not only are we known for getting the deal done, but also for fostering lasting relationships.&rdquo;
          </p>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>
            © 2024 Treasure Coast Realty Group. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
