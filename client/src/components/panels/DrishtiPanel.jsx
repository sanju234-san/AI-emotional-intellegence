import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const DrishtiPanel = () => {
    const [activeTab, setActiveTab] = useState('composition');
    const [selectedComposition, setSelectedComposition] = useState('thirds');

    const tabs = [
        { id: 'composition', label: 'Composition', icon: '⊞' },
        { id: 'camera', label: 'Camera', icon: '📷' },
        { id: 'focus', label: 'Focus', icon: '◎' },
        { id: 'depth', label: 'Depth', icon: '◇' }
    ];

    const compositionGuides = [
        { id: 'thirds', label: 'Rule of Thirds' },
        { id: 'golden', label: 'Golden Ratio' },
        { id: 'leading', label: 'Leading Lines' }
    ];

    const cameraAngles = [
        'Eye Level', 'High Angle', 'Low Angle', 'Bird\'s Eye', 'Worm\'s Eye', 'Dutch Angle'
    ];

    const focusAreas = [
        'Center Focus', 'Off-center Subject', 'Foreground Interest', 'Background Depth'
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image - Temple with lotus */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/bg-temple.png')` }} />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 pt-20 pb-10 px-4">
                {/* Header */}
                <div className="max-w-6xl mx-auto mb-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
                                <span className="text-white text-lg">👁</span>
                            </div>
                            <span className="font-display text-2xl tracking-wider text-white">DRISHTI</span>
                        </div>
                        <div className="text-sm text-white/50">
                            Visual Imagination Panel <span className="text-white/30">›</span> <span className="text-gold">Scene Perception</span>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
                    {/* Preview Area */}
                    <div className="lg:col-span-2">
                        <Card className="p-4 h-full">
                            <div className="aspect-[4/3] rounded-lg overflow-hidden relative bg-gradient-to-br from-emerald-900/50 to-slate-900">
                                <img
                                    src="/bg-temple.png"
                                    alt="Scene Preview"
                                    className="w-full h-full object-cover opacity-90"
                                />

                                {/* Composition Overlay */}
                                {selectedComposition === 'thirds' && (
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/30" />
                                        <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white/30" />
                                        <div className="absolute top-1/3 left-0 right-0 h-px bg-white/30" />
                                        <div className="absolute top-2/3 left-0 right-0 h-px bg-white/30" />
                                        {/* Intersection points */}
                                        <div className="absolute left-1/3 top-1/3 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/60" />
                                        <div className="absolute left-2/3 top-1/3 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/60" />
                                        <div className="absolute left-1/3 top-2/3 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/60" />
                                        <div className="absolute left-2/3 top-2/3 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/60" />
                                    </div>
                                )}

                                {selectedComposition === 'golden' && (
                                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                                        <div className="w-3/4 h-3/4 border border-gold/40 rounded-sm" />
                                        <div className="absolute w-1/2 h-1/2 border border-gold/30 rounded-sm" />
                                    </div>
                                )}

                                {selectedComposition === 'leading' && (
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                        <line x1="0" y1="100%" x2="50%" y2="30%" stroke="rgba(212,175,55,0.4)" strokeWidth="2" strokeDasharray="8,8" />
                                        <line x1="100%" y1="100%" x2="50%" y2="30%" stroke="rgba(212,175,55,0.4)" strokeWidth="2" strokeDasharray="8,8" />
                                    </svg>
                                )}
                            </div>
                        </Card>
                    </div>

                    {/* Controls Panel */}
                    <div className="space-y-4">
                        <Card className="p-5">
                            <h3 className="font-display text-lg text-white mb-1">Scene Perception</h3>
                            <p className="text-sm text-white/50 mb-4">Controls</p>

                            {/* Tabs */}
                            <div className="space-y-1">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${activeTab === tab.id
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                                            }`}
                                    >
                                        <span>{tab.icon}</span>
                                        <span className="text-sm">{tab.label}</span>
                                    </button>
                                ))}
                            </div>
                        </Card>

                        {/* Composition Suggestions */}
                        {activeTab === 'composition' && (
                            <Card className="p-5">
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-sm text-white/80">Composition Suggestions</h4>
                                    <span className="text-white/30">^</span>
                                </div>
                                <p className="text-xs text-white/50 mb-4">
                                    Toggle visual guides on the image to help with framing and subject placement.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {compositionGuides.map((guide) => (
                                        <button
                                            key={guide.id}
                                            onClick={() => setSelectedComposition(guide.id)}
                                            className={`px-3 py-1.5 rounded-full text-xs transition-all ${selectedComposition === guide.id
                                                    ? 'bg-indigo-600 text-white'
                                                    : 'bg-white/10 text-white/60 hover:bg-white/20'
                                                }`}
                                        >
                                            {guide.label}
                                        </button>
                                    ))}
                                </div>
                            </Card>
                        )}

                        {/* Camera Angles */}
                        <Card className="p-5">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="text-sm text-white/80">Camera Angles</h4>
                                <span className="text-white/30">v</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {cameraAngles.map((angle, i) => (
                                    <button key={i} className="px-3 py-2 rounded bg-white/5 text-xs text-white/60 hover:bg-white/10 hover:text-white transition-all">
                                        {angle}
                                    </button>
                                ))}
                            </div>
                        </Card>

                        {/* Focus Areas */}
                        <Card className="p-5">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="text-sm text-white/80">Focus Areas</h4>
                                <span className="text-white/30">v</span>
                            </div>
                            <div className="space-y-2">
                                {focusAreas.map((area, i) => (
                                    <button key={i} className="w-full px-3 py-2 rounded bg-white/5 text-xs text-white/60 hover:bg-white/10 hover:text-white transition-all text-left">
                                        {area}
                                    </button>
                                ))}
                            </div>
                        </Card>

                        {/* Depth & Spatial Guidance */}
                        <Card className="p-5">
                            <div className="flex items-center justify-between">
                                <h4 className="text-sm text-white/80">Depth & Spatial Guidance</h4>
                                <span className="text-white/30">v</span>
                            </div>
                        </Card>

                        <Button className="w-full">Apply to Scene</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrishtiPanel;
