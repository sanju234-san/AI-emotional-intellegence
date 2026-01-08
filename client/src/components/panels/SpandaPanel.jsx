import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Toggle from '../ui/Toggle';

const SpandaPanel = () => {
    const [elementalMotion, setElementalMotion] = useState({ wind: 40, light: 60, fabric: 80 });
    const [environmentalCues, setEnvironmentalCues] = useState({ foliage: 50, water: 30, fog: 70 });
    const [motionBalance, setMotionBalance] = useState(65);
    const [dynamicResponse, setDynamicResponse] = useState(true);

    const motionPreviews = [
        { id: 'wind', label: 'Wind Strength' },
        { id: 'light', label: 'Light Flicker' },
        { id: 'fabric', label: 'Fabric Flow' }
    ];

    const envPreviews = [
        { id: 'foliage', label: 'Foliage Sway', icon: '🌿' },
        { id: 'water', label: 'Water Ripples', icon: '💧' },
        { id: 'fog', label: 'Fog Density', icon: '🌫️' }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image - Waterfall for atmosphere/motion */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/bg-waterfall.png')` }} />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 pt-20 pb-10 px-4">
                {/* Hero */}
                <div className="max-w-4xl mx-auto text-center mb-10">
                    <h1 className="font-display text-4xl md:text-5xl tracking-wider mb-3 text-white">
                        SPANDA: <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Atmosphere & Motion</span>
                    </h1>
                    <p className="font-accent text-lg text-white/50 italic">Subtle Movement and Life Energy</p>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Elemental Motion */}
                    <Card className="p-6">
                        <h3 className="section-title">Elemental Motion</h3>
                        <div className="grid md:grid-cols-3 gap-6 mt-6">
                            {motionPreviews.map((item) => (
                                <div key={item.id} className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-white/70">{item.label}</span>
                                        <span className="text-sm text-white/90">{elementalMotion[item.id]}%</span>
                                    </div>
                                    <div className="aspect-square rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 relative overflow-hidden flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-cyan-400/30 blur-lg animate-pulse" />
                                    </div>
                                    <input
                                        type="range" min="0" max="100" value={elementalMotion[item.id]}
                                        onChange={(e) => setElementalMotion(prev => ({ ...prev, [item.id]: parseInt(e.target.value) }))}
                                        className="w-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Environmental Cues */}
                    <Card className="p-6">
                        <h3 className="section-title">Environmental Cues</h3>
                        <div className="grid md:grid-cols-3 gap-6 mt-6">
                            {envPreviews.map((item) => (
                                <div key={item.id} className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-white/70">{item.label}</span>
                                        <span className="text-sm text-white/90">{environmentalCues[item.id]}%</span>
                                    </div>
                                    <div className="aspect-square rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                                        <span className="text-4xl">{item.icon}</span>
                                    </div>
                                    <input
                                        type="range" min="0" max="100" value={environmentalCues[item.id]}
                                        onChange={(e) => setEnvironmentalCues(prev => ({ ...prev, [item.id]: parseInt(e.target.value) }))}
                                        className="w-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Stillness vs Motion Balance */}
                    <Card className="p-6">
                        <h3 className="section-title">Stillness vs Motion Balance</h3>
                        <div className="mt-6">
                            <div className="h-20 relative mb-4">
                                <svg className="w-full h-full" viewBox="0 0 400 80" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                                            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M 0 40 Q 50 20 100 40 T 200 40 T 300 40 T 400 40" fill="none" stroke="url(#waveGradient)" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="flex justify-between text-sm text-white/60 mb-2">
                                <span>Stillness</span><span>Motion</span>
                            </div>
                            <input
                                type="range" min="0" max="100" value={motionBalance}
                                onChange={(e) => setMotionBalance(parseInt(e.target.value))}
                                className="w-full"
                            />
                        </div>
                        <div className="flex items-center justify-between mt-6">
                            <Toggle label="Enable Dynamic Response" checked={dynamicResponse} onChange={setDynamicResponse} />
                        </div>
                        <div className="flex justify-center mt-6">
                            <Button>Apply to Scene</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default SpandaPanel;
