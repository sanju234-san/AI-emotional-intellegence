import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const RasaPanel = () => {
    const [emotions, setEmotions] = useState({
        joy: 60,
        melancholy: 35,
        peace: 75,
        passion: 45
    });

    const palettes = [
        { name: 'Devotion (Deep Blues & Golds)', colors: ['#1e3a5f', '#2c5282', '#d4af37', '#f6e05e'] },
        { name: 'Ethereal Night (Purples & Silvers)', colors: ['#2d1b4e', '#553c9a', '#b794f4', '#e2e8f0'] },
        { name: "Love's Glow (Warm Golds & Soft Reds)", colors: ['#9c4221', '#dd6b20', '#fbd38d', '#fed7aa'] },
        { name: 'Serene Dawn (Pastels)', colors: ['#b2d8e8', '#e8d6c8', '#f5e6d3', '#d4e5f7'] }
    ];

    const lightShadow = [
        { name: 'Dramatic Contrast', preview: 'linear-gradient(135deg, #1a1a2e, #e0e0e0)' },
        { name: 'Soft Glow', preview: 'linear-gradient(135deg, #2d3748, #a0aec0)' },
        { name: 'Celestial Light', preview: 'linear-gradient(135deg, #1a202c, #4a5568)' },
        { name: 'Mystic Shadows', preview: 'linear-gradient(135deg, #0f0f1a, #2d3748)' }
    ];

    const handleEmotionChange = (emotion, value) => {
        setEmotions(prev => ({ ...prev, [emotion]: value }));
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/bg-lotus.png')` }}
            />
            <div className="absolute inset-0 bg-black/75" />

            <div className="relative z-10 pt-20 pb-10 px-4">
                {/* Hero */}
                <div className="max-w-4xl mx-auto text-center mb-10">
                    <h1 className="font-display text-4xl md:text-5xl tracking-wider mb-3 bg-gradient-to-r from-gold via-amber to-gold bg-clip-text text-transparent">
                        RASA:
                    </h1>
                    <h2 className="font-display text-2xl tracking-wide text-white/80 mb-2">
                        Color & Mood Panel
                    </h2>
                    <p className="font-accent text-lg text-white/50 italic">
                        (Emotional Color)
                    </p>
                </div>

                {/* Main Grid */}
                <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
                    {/* Suggested Color Palettes */}
                    <Card className="p-5">
                        <h3 className="section-title">Suggested Color Palettes</h3>
                        <div className="space-y-3 mt-4">
                            {palettes.map((palette, i) => (
                                <div key={i} className="palette-item group">
                                    <div className="flex gap-1">
                                        {palette.colors.map((color, j) => (
                                            <div key={j} className="w-6 h-6 rounded" style={{ backgroundColor: color }} />
                                        ))}
                                    </div>
                                    <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
                                        {palette.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <Button variant="secondary" size="sm" className="w-full mt-4">
                            Add Palettes
                        </Button>
                    </Card>

                    {/* Emotional Color Mapping */}
                    <Card className="p-5">
                        <h3 className="section-title text-center">Emotional Color Mapping</h3>

                        <div className="flex justify-center my-6">
                            <div className="w-32 h-32 rounded-full relative" style={{
                                background: 'conic-gradient(from 0deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3, #54a0ff, #5f27cd, #ff6b6b)'
                            }}>
                                <div className="absolute inset-4 rounded-full bg-deep" />
                            </div>
                        </div>

                        <div className="space-y-5 mt-6">
                            {Object.entries(emotions).map(([key, value]) => (
                                <div key={key} className="flex items-center gap-4">
                                    <span className="text-sm text-white/70 w-24 capitalize">{key}</span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={value}
                                        onChange={(e) => handleEmotionChange(key, parseInt(e.target.value))}
                                        className="flex-1"
                                    />
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Light & Shadow Suggestions */}
                    <Card className="p-5">
                        <h3 className="section-title">Light & Shadow Suggestions</h3>
                        <div className="space-y-3 mt-4">
                            {lightShadow.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-white/5 transition-colors">
                                    <div className="w-16 h-10 rounded" style={{ background: item.preview }} />
                                    <span className="text-sm text-white/70">{item.name}</span>
                                </div>
                            ))}
                        </div>
                        <Button className="w-full mt-6">Apply to Scene</Button>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default RasaPanel;
