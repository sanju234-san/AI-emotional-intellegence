import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const KalaPanel = () => {
    const [selectedPreset, setSelectedPreset] = useState('Ancient Calligraphy');
    const [strokeFlow, setStrokeFlow] = useState(60);
    const [pressure, setPressure] = useState(45);

    const artisticPrinciples = [
        { id: 'balance', icon: '⚖️', label: 'Balance' },
        { id: 'flow', icon: '〰️', label: 'Flow' },
        { id: 'contrast', icon: '◐', label: 'Contrast' }
    ];

    const presets = ['Ancient Calligraphy', 'Digital Glitch', 'Traditional Ink', 'Traditional Meeting'];

    const textures = [
        { name: 'Aged Parchment', gradient: 'from-amber-100 to-amber-200' },
        { name: 'Rough Canvas', gradient: 'from-stone-300 to-stone-400' },
        { name: 'Mystical Glow', gradient: 'from-purple-400 to-pink-500' },
        { name: 'Organic Matter', gradient: 'from-emerald-700 to-teal-800' }
    ];

    const mediums = [
        { id: 'watercolor', name: 'Watercolor', description: 'Ethereal wash and bloom', gradient: 'from-cyan-400 via-blue-500 to-purple-500' },
        { id: 'digital', name: 'Digital', description: 'Precise layering and light effects', gradient: 'from-orange-400 via-red-500 to-pink-500' },
        { id: 'oil', name: 'Oil', description: 'Rich impasto and blending', gradient: 'from-violet-600 via-purple-600 to-indigo-700' }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/bg-garden.jpg')` }} />
            <div className="absolute inset-0 bg-black/75" />

            <div className="relative z-10 pt-20 pb-10 px-4">
                {/* Hero */}
                <div className="max-w-4xl mx-auto text-center mb-8">
                    <div className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-4">
                        <span className="text-gold font-display text-sm tracking-wider">KALĀ - Style Philosophy Panel</span>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                    {/* Artistic Principles */}
                    <Card className="p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                                <span className="text-gold text-xs">R</span>
                            </div>
                            <h3 className="font-display text-sm tracking-wider text-white">ARTISTIC PRINCIPLES</h3>
                        </div>
                        <p className="text-xs text-white/50 mb-4">Seek harmony and discipline in forms. True style is an expression of inner order.</p>

                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {artisticPrinciples.map((principle) => (
                                <div key={principle.id} className="text-center">
                                    <div className="w-12 h-12 mx-auto rounded-lg bg-white/5 flex items-center justify-center text-2xl mb-2">{principle.icon}</div>
                                    <span className="text-xs text-white/60">{principle.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-2">
                            {[1, 2, 3, 4].map((i) => (
                                <Button key={i} variant="secondary" size="sm" className="w-full">Explore Principle</Button>
                            ))}
                        </div>
                    </Card>

                    {/* Brushwork Suggestions */}
                    <Card className="p-5">
                        <h3 className="section-title">Brushwork Suggestions</h3>
                        <div className="space-y-6 mt-4">
                            <div>
                                <div className="flex justify-between text-sm mb-2"><span className="text-white/70">Stroke Flow</span></div>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs text-white/50">Controlled</span>
                                    <input type="range" min="0" max="100" value={strokeFlow} onChange={(e) => setStrokeFlow(parseInt(e.target.value))} className="flex-1" />
                                    <span className="text-xs text-white/50">Expressive</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-2"><span className="text-white/70">Pressure</span></div>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs text-white/50">Light</span>
                                    <input type="range" min="0" max="100" value={pressure} onChange={(e) => setPressure(parseInt(e.target.value))} className="flex-1" />
                                    <span className="text-xs text-white/50">Heavy</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h4 className="text-sm text-white/70 mb-2">Presets</h4>
                            <select value={selectedPreset} onChange={(e) => setSelectedPreset(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-cosmic">
                                {presets.map((preset, i) => (<option key={i} value={preset} className="bg-deep text-white">{preset}</option>))}
                            </select>
                        </div>
                    </Card>

                    {/* Texture & Material Hints */}
                    <Card className="p-5">
                        <h3 className="section-title">Texture & Material Hints</h3>
                        <div className="grid grid-cols-2 gap-3 mt-4">
                            {textures.map((texture, i) => (
                                <div key={i} className="cursor-pointer group">
                                    <div className={`aspect-square rounded-lg bg-gradient-to-br ${texture.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
                                    <p className="text-xs text-white/60 text-center mt-2">{texture.name}</p>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Medium Guidance */}
                    <Card className="p-5">
                        <h3 className="section-title">Medium Guidance</h3>
                        <div className="grid grid-cols-3 gap-3 mt-4">
                            {mediums.map((medium) => (
                                <div key={medium.id} className="text-center">
                                    <div className={`aspect-video rounded-lg bg-gradient-to-br ${medium.gradient} mb-2`} />
                                    <p className="text-xs text-white/70 font-medium">{medium.name.toUpperCase()}</p>
                                    <p className="text-xs text-white/40">{medium.description}</p>
                                    <Button variant="secondary" size="sm" className="w-full mt-2 text-xs">Apply</Button>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Footer */}
                <div className="max-w-6xl mx-auto mt-10 text-center">
                    <p className="text-xs text-white/30 font-display tracking-widest">RASA-LĪLĀ © 2024 - VISUALIZING EMOTIONS THROUGH ARTISTIC DISCIPLINE</p>
                </div>
            </div>
        </div>
    );
};

export default KalaPanel;
