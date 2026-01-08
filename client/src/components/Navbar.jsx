import React, { useState } from 'react';

const Navbar = ({ currentPage, onNavigate }) => {
    const [searchOpen, setSearchOpen] = useState(false);

    const navItems = [
        { id: 'emotion', label: 'Emotions' },
        { id: 'visualize', label: 'Visualize' },
        { id: 'spanda', label: 'SPANDA' },
        { id: 'profile', label: 'Profile' }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => onNavigate('home')}
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cosmic to-mystic flex items-center justify-center">
                            <span className="text-white font-display text-sm">R</span>
                        </div>
                        <span className="font-display text-lg tracking-wider text-white">
                            RASA-LĪLĀ
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => onNavigate(item.id)}
                                className={`text-sm tracking-wide transition-colors ${currentPage === item.id
                                        ? 'text-white border-b-2 border-cosmic pb-1'
                                        : 'text-white/60 hover:text-white'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        {/* Search */}
                        <button
                            onClick={() => setSearchOpen(!searchOpen)}
                            className="p-2 text-white/60 hover:text-white transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* Profile Avatar */}
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-amber overflow-hidden cursor-pointer">
                            <div className="w-full h-full flex items-center justify-center text-void font-medium text-sm">
                                U
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search Bar (Expandable) */}
                {searchOpen && (
                    <div className="py-3 border-t border-white/5 animate-fadeIn">
                        <input
                            type="text"
                            placeholder="Search emotions, styles, scenes..."
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:border-cosmic"
                            autoFocus
                        />
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
