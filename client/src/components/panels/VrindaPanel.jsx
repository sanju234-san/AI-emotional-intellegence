import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Slider from '../ui/Slider';

const VrindaPanel = () => {
    const [emotionBalance, setEmotionBalance] = useState(50);
    const [culturalOptions, setCulturalOptions] = useState({
        vedic: false,
        respectful: false,
        consult: false
    });

    const symbols = [
        { name: 'Tree of Life', icon: '🌳', description: 'Represents growth, connection, and spiritual nourishment across cultures.' },
        { name: 'Luminous Guide', icon: '✨', description: 'Symbolizes inner light, enlightenment, and divine presence.' },
        { name: 'Cosmic Connection', icon: '🌌', description: 'Evokes awe, mystery, and universal belonging.' }
    ];

    const designSuggestions = [
        { name: 'Bioluminescent Glow', gradient: 'from-cyan-500 to-blue-600' },
        { name: 'Starlight Weave', gradient: 'from-purple-600 to-indigo-800' },
        { name: 'Textures', gradient: 'from-amber-600 to-orange-700' }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/bg-garden.jpg')` }} />
            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10 pt-20 pb-10 px-4">
                {/* Hero */}
                <div className="max-w-4xl mx-auto mb-10">
                    <h1 className="font-display text-4xl md:text-5xl tracking-wider mb-3 bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                        VRINDĀ -
                    </h1>
                    <h2 className="font-display text-2xl tracking-wide text-white/80">Context & Grounding</h2>
                </div>

                {/* Main Layout */}
                <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-6">
                    <div className="lg:col-span-3 space-y-6">
                        <Card className="p-5">
                            <h3 className="section-title">Symbol Meanings</h3>
                            <div className="space-y-4 mt-4">
                                {symbols.map((symbol, i) => (
                                    <div key={i} className="flex gap-4 p-3 rounded-lg bg-white/5">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cosmic/30 to-mystic/30 flex items-center justify-center text-2xl">
                                            {symbol.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-display text-sm tracking-wide text-gold">{symbol.name}</h4>
                                            <p className="text-xs text-white/50 mt-1">{symbol.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card className="p-5">
                            <h3 className="section-title">Cultural Accuracy</h3>
                            <div className="space-y-3 mt-4">
                                {[
                                    { key: 'vedic', label: 'Explore Vedic Traditions' },
                                    { key: 'respectful', label: 'Respectful Representation Guidelines' },
                                    { key: 'consult', label: 'Consult Cultural Sensitivity Resources' }
                                ].map((item) => (
                                    <label key={item.key} className="checkbox-custom">
                                        <input
                                            type="checkbox"
                                            checked={culturalOptions[item.key]}
                                            onChange={() => setCulturalOptions(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                                        />
                                        <div className="checkbox-box">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-white/70">{item.label}</span>
                                    </label>
                                ))}
                            </div>
                        </Card>

                        <Card className="p-5">
                            <h3 className="section-title">Emotional Symbolism</h3>
                            <p className="text-sm text-white/60 mb-4"><span className="text-gold">Emotion Palette:</span> Devotion to Wonder</p>
                            <Slider label="" value={emotionBalance} onChange={setEmotionBalance} showValue={false} />
                            <div className="flex justify-between text-xs text-white/50 mt-2">
                                <span>Deep Blue: Tranquility</span>
                                <span>Golden Light: Awe</span>
                            </div>

                            <div className="flex justify-center mt-6">
                                <div className="relative w-40 h-40">
                                    <div className="absolute inset-0 rounded-full" style={{
                                        background: 'conic-gradient(from 180deg, #1e40af, #7c3aed, #059669, #0891b2, #d97706, #dc2626, #be185d, #1e40af)'
                                    }}>
                                        <div className="absolute inset-6 rounded-full bg-deep flex items-center justify-center">
                                            <span className="text-xs text-white/40 text-center px-2">Emotional<br />Wheel</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                        <Card className="p-5">
                            <h3 className="section-title text-center">Design Suggestions<br /><span className="text-xs text-white/40">(RASA-LĪLĀ)</span></h3>
                            <div className="space-y-4 mt-6">
                                {designSuggestions.map((item, i) => (
                                    <div key={i} className="group cursor-pointer">
                                        <div className={`aspect-video rounded-lg bg-gradient-to-br ${item.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
                                        <p className="text-xs text-white/60 text-center mt-2">{item.name}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                        <Button className="w-full">Apply Context</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VrindaPanel;
