import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BhavaPanel from './components/panels/BhavaPanel';
import RasaPanel from './components/panels/RasaPanel';
import VrindaPanel from './components/panels/VrindaPanel';
import MuraliPanel from './components/panels/MuraliPanel';
import SpandaPanel from './components/panels/SpandaPanel';
import KalaPanel from './components/panels/KalaPanel';
import DrishtiPanel from './components/panels/DrishtiPanel';

// Enhanced Home Page
const HomePage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image - Fixed zoom issue with contain and proper positioning */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/bg-moonlight.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Side vignettes */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)'
      }} />

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 md:px-16 py-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400/90 to-orange-500/90 flex items-center justify-center shadow-lg shadow-amber-500/20 backdrop-blur-sm">
            <span className="text-white text-lg font-serif">℞</span>
          </div>
          <span className="font-display text-xl tracking-[0.25em] text-white/95 drop-shadow-lg">RASA-LĪLĀ</span>
        </div>

        <div className="hidden md:flex items-center gap-12 text-sm tracking-widest">
          <button onClick={() => onNavigate('about')} className="text-white/70 hover:text-white transition-all hover:tracking-[0.2em]">ABOUT</button>
          <button onClick={() => onNavigate('gallery')} className="text-white/70 hover:text-white transition-all hover:tracking-[0.2em]">GALLERY</button>
          <button onClick={() => onNavigate('contact')} className="text-white/70 hover:text-white transition-all hover:tracking-[0.2em]">CONTACT</button>
          <button className="px-6 py-2.5 rounded-full border border-white/40 text-white/90 hover:bg-white/10 hover:border-white/60 transition-all backdrop-blur-sm">
            SIGN IN
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-6 text-center">
        {/* Decorative element */}
        <div className="mb-6 opacity-60">
          <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
            <path d="M0 15 Q15 0 30 15 Q45 30 60 15" stroke="url(#gold-gradient)" strokeWidth="1" fill="none" />
            <defs>
              <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl tracking-[0.2em] mb-4">
          <span className="bg-gradient-to-b from-amber-100 via-yellow-200 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(212,175,55,0.5)]">
            RASA-LĪLĀ
          </span>
        </h1>

        {/* Separator */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent my-6" />

        <h2 className="font-accent text-xl md:text-2xl lg:text-3xl text-white/80 mb-1 italic font-light tracking-wide">
          An Emotional Visualization
        </h2>
        <h2 className="font-accent text-xl md:text-2xl lg:text-3xl text-white/80 mb-8 italic font-light tracking-wide">
          System for Artists
        </h2>

        {/* Description */}
        <p className="max-w-xl text-white/60 text-sm md:text-base leading-relaxed mb-10 font-light">
          Where emotion becomes form. Step into the garden of your subconscious and co-create your artistic journey with the divine play. Visualize your feelings and receive inspired design suggestions.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => onNavigate('panels')}
          className="group relative px-12 py-4 rounded-full overflow-hidden transition-all duration-500 hover:scale-105"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-cyan-500/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 rounded-full border border-indigo-400/40 group-hover:border-indigo-300/60 transition-colors" />
          <div className="absolute inset-[2px] rounded-full bg-slate-900/80 backdrop-blur-md" />
          <span className="relative z-10 font-display text-sm tracking-[0.25em] text-amber-100 group-hover:text-white transition-colors">
            BEGIN THE LĪLĀ
          </span>
        </button>

        {/* Secondary links */}
        <div className="flex items-center gap-8 mt-8 text-sm text-white/40">
          <button onClick={() => onNavigate('about')} className="hover:text-white/70 transition-colors">Learn More</button>
          <span>•</span>
          <button onClick={() => onNavigate('gallery')} className="hover:text-white/70 transition-colors">View Gallery</button>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/30 animate-pulse">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-amber-300/40"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

// About Page
const AboutPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/bg-garden.jpg')` }} />
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <button onClick={() => onNavigate('home')} className="text-white/50 hover:text-white mb-8 flex items-center gap-2 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>

          <h1 className="font-display text-5xl md:text-6xl tracking-wider mb-6 bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent">
            About RASA-LĪLĀ
          </h1>

          <div className="w-24 h-px bg-gradient-to-r from-gold/60 to-transparent mb-10" />

          <div className="space-y-8 text-white/70 text-lg leading-relaxed">
            <p>
              <span className="text-gold font-display">RASA-LĪLĀ</span> is an AI-powered emotional visualization system designed for artists, creators, and anyone seeking to understand the deeper essence of their creative visions.
            </p>

            <p>
              The name draws from ancient Sanskrit concepts: <span className="text-amber-300 italic">Rasa</span> (emotional essence or flavor) and <span className="text-amber-300 italic">Līlā</span> (divine play or cosmic dance). Together, they represent the playful exploration of emotions through artistic expression.
            </p>

            <div className="glass-card p-8 my-10">
              <h3 className="font-display text-2xl text-white mb-4 tracking-wide">Our Philosophy</h3>
              <p className="text-white/60">
                We believe that every scene, every moment, carries an emotional signature waiting to be discovered. Through our six interconnected panels—BHĀVA, RASA, VRINDĀ, MURALI, SPANDA, and KALĀ—we guide artists on a journey from emotional understanding to artistic manifestation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🎭', title: 'Understand', desc: 'Analyze the emotional layers of your scenes' },
                { icon: '🎨', title: 'Visualize', desc: 'Transform feelings into colors and forms' },
                { icon: '✨', title: 'Create', desc: 'Manifest your vision with artistic guidance' }
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="font-display text-white tracking-wide mb-2">{item.title}</h4>
                  <p className="text-sm text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Gallery Page
const GalleryPage = ({ onNavigate }) => {
  const galleryItems = [
    { title: 'Enchanted Forest', emotion: 'Wonder & Magic', image: '/gallery-1.png' },
    { title: 'Firefly Lake', emotion: 'Peace & Tranquility', image: '/gallery-2.png' },
    { title: 'Cosmic Waterfall', emotion: 'Awe & Mystery', image: '/gallery-3.png' },
    { title: 'Ocean Depths', emotion: 'Serenity & Depth', image: '/gallery-4.png' },
    { title: 'Divine Dance', emotion: 'Love & Devotion', image: '/gallery-5.png' },
    { title: 'Moonlight Garden', emotion: 'Romance & Beauty', image: '/bg-garden.jpg' },
    { title: 'Sacred Temple', emotion: 'Spirituality & Peace', image: '/bg-temple.png' },
    { title: 'Mystical Lotus', emotion: 'Enlightenment & Joy', image: '/bg-lotus.png' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/bg-dance.jpg')` }} />
      <div className="absolute inset-0 bg-black/85" />

      <div className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <button onClick={() => onNavigate('home')} className="text-white/50 hover:text-white mb-8 flex items-center gap-2 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>

          <h1 className="font-display text-5xl md:text-6xl tracking-wider mb-4 text-white">
            Gallery
          </h1>
          <p className="text-white/50 text-lg mb-10">Explore emotional visualizations created with RASA-LĪLĀ</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-xl relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">View</span>
                  </div>
                </div>
                <h3 className="font-display text-white mt-3 tracking-wide">{item.title}</h3>
                <p className="text-sm text-white/50">{item.emotion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page
const ContactPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/bg-waterfall.png')` }} />
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <button onClick={() => onNavigate('home')} className="text-white/50 hover:text-white mb-8 flex items-center gap-2 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>

          <h1 className="font-display text-5xl md:text-6xl tracking-wider mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-white/50 text-lg mb-10">We'd love to hear from you</p>

          <div className="glass-card p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-white/70 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                  placeholder="Tell us about your creative vision..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-display tracking-widest hover:from-cyan-500 hover:to-blue-500 transition-all"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div className="mt-10 flex justify-center gap-8">
            {['Twitter', 'Instagram', 'Discord'].map((social) => (
              <button key={social} className="text-white/40 hover:text-white/70 text-sm transition-colors">
                {social}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Panel Selection Page
const PanelSelectionPage = ({ onNavigate }) => {
  const panels = [
    { id: 'bhava', name: 'BHĀVA', subtitle: 'Scene Understanding', description: 'Analyze emotional essence of scenes', gradient: 'from-purple-600 to-pink-500', icon: '🎭' },
    { id: 'rasa', name: 'RASA', subtitle: 'Color & Mood', description: 'Map emotions to visual palettes', gradient: 'from-amber-500 to-orange-600', icon: '🎨' },
    { id: 'drishti', name: 'DRISHTI', subtitle: 'Visual Imagination', description: 'Scene perception and composition', gradient: 'from-emerald-500 to-teal-600', icon: '👁' },
    { id: 'vrinda', name: 'VRINDĀ', subtitle: 'Context & Grounding', description: 'Explore symbolism and cultural depth', gradient: 'from-teal-500 to-cyan-600', icon: '🌳' },
    { id: 'murali', name: 'MURALI', subtitle: 'Rhythm Guidance', description: 'Control emotional pacing and flow', gradient: 'from-indigo-600 to-purple-700', icon: '🎵' },
    { id: 'spanda', name: 'SPANDA', subtitle: 'Atmosphere & Motion', description: 'Add life through subtle movements', gradient: 'from-blue-500 to-indigo-600', icon: '🌊' },
    { id: 'kala', name: 'KALĀ', subtitle: 'Style Philosophy', description: 'Define artistic principles and medium', gradient: 'from-rose-500 to-pink-600', icon: '✨' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/bg-garden.jpg')` }} />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 pt-24 pb-10 px-4">
        <div className="max-w-4xl mx-auto text-center py-8">
          <h2 className="font-display text-4xl tracking-wider text-white mb-3">Choose Your Path</h2>
          <p className="text-white/50 text-lg">Select a panel to begin your creative journey</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {panels.map((panel, index) => (
            <div
              key={panel.id}
              onClick={() => onNavigate(panel.id)}
              className="glass-card p-6 cursor-pointer group hover:scale-[1.02] transition-all duration-300 animate-fadeIn hover:bg-white/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${panel.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                {panel.icon}
              </div>
              <h3 className="font-display text-xl tracking-wider text-white mb-1">{panel.name}</h3>
              <p className="text-sm text-amber-300/80 font-accent italic mb-2">{panel.subtitle}</p>
              <p className="text-sm text-white/50">{panel.description}</p>
              <div className="mt-4 flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                <span className="text-sm">Explore</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button onClick={() => onNavigate('home')} className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-2 mx-auto">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'bhava':
      case 'emotion':
        return <BhavaPanel />;
      case 'rasa':
      case 'visualize':
        return <RasaPanel />;
      case 'vrinda':
        return <VrindaPanel />;
      case 'murali':
        return <MuraliPanel />;
      case 'spanda':
        return <SpandaPanel />;
      case 'kala':
        return <KalaPanel />;
      case 'drishti':
        return <DrishtiPanel />;
      case 'panels':
      case 'profile':
        return <PanelSelectionPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'gallery':
        return <GalleryPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  const showNavbar = !['home', 'panels', 'about', 'gallery', 'contact'].includes(currentPage);

  return (
    <div className="bg-void min-h-screen">
      {showNavbar && <Navbar currentPage={currentPage} onNavigate={handleNavigate} />}
      {renderPage()}
    </div>
  );
}

export default App;
