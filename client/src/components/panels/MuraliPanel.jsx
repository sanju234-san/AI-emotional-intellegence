import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Slider from '../ui/Slider';

const MuraliPanel = () => {
    const [pacingPattern, setPacingPattern] = useState('ebb');
    const [overallIntensity] = useState(60);
    const [tempoValue, setTempoValue] = useState(50);

    const pacingPatterns = [
        { id: 'ebb', label: 'Ebb & Flow' },
        { id: 'crescendo', label: 'Crescendo' },
        { id: 'serene', label: 'Serene Still' }
    ];

    const tempoOptions = [
        { name: 'Slow Build (Adagio)', description: 'Gradual emotional development' },
        { name: 'Rapid Pulse (Allegro)', description: 'Energetic visual transitions' },
        { name: 'Meditative Cycle (Lento)', description: 'Reflective, cyclical patterns' }
    ];

    const rhythmEffects = [
        { name: 'Color Swells & Fades', active: true },
        { name: 'Light Flares & Motion', active: false },
        { name: 'Dynamic Composition Shifts', active: true }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image - Dance theme for rhythm */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/bg-dance.jpg')` }} />
            <div className="absolute inset-0 bg-black/75" />

            <div className="relative z-10 pt-20 pb-10 px-4">
                {/* Hero */}
                <div className="max-w-4xl mx-auto text-center mb-10">
                    <h1 className="font-display text-4xl md:text-5xl tracking-wider mb-3 text-white">
                        MURALI - <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Rhythm Guiding Imagination</span>
                    </h1>
                    <p className="font-accent text-lg text-white/50 italic">
                        Visualize emotions through scenes and receive design suggestions.
                    </p>
                </div>

                {/* Breadcrumb */}
                <div className="max-w-6xl mx-auto mb-6">
                    <div className="flex items-center gap-2 text-sm text-white/40">
                        <span>RASA-LĪLĀ</span><span>›</span>
                        <span className="text-white/60">Emotion Rhythm Panel (MURALI)</span><span>›</span>
                        <span className="text-gold">Rhythm Guiding Imagination</span>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {/* Emotional Pacing */}
                    <Card className="p-5">
                        <h3 className="section-title">Emotional Pacing</h3>
                        <p className="text-xs text-white/50 mb-4">Draggable emotional markers</p>

                        <div className="relative h-40 bg-white/5 rounded-lg p-4">
                            <svg className="w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
                                <path d="M 0 50 Q 25 10 50 30 T 100 20" fill="none" stroke="#8b5cf6" strokeWidth="2" />
                                <circle cx="50" cy="30" r="4" fill="#d4af37" />
                            </svg>
                        </div>

                        <div className="space-y-2 mt-4">
                            {pacingPatterns.map((pattern) => (
                                <button
                                    key={pattern.id}
                                    onClick={() => setPacingPattern(pattern.id)}
                                    className={`w-full text-left px-3 py-2 rounded text-sm transition-all ${pacingPattern === pattern.id ? 'bg-cosmic/30 border border-cosmic text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'
                                        }`}
                                >
                                    {pattern.label}
                                </button>
                            ))}
                        </div>
                    </Card>

                    {/* Scene Tempo */}
                    <Card className="p-5">
                        <h3 className="section-title">Scene Tempo</h3>
                        <p className="text-xs text-white/50 mb-4">Visual rhythm selection</p>

                        <div className="space-y-4">
                            {tempoOptions.map((tempo, i) => (
                                <div key={i} className="p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
                                    <h4 className="text-sm text-white/90">{tempo.name}</h4>
                                    <p className="text-xs text-white/40">{tempo.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6">
                            <Slider label="" value={tempoValue} onChange={setTempoValue} min={0} max={160} showValue={false} />
                            <div className="flex justify-between text-xs text-white/40 mt-1">
                                <span>BPM</span><span>{tempoValue}</span><span>160</span>
                            </div>
                        </div>

                        <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                            <p className="text-xs text-amber-400">Overall Intensity</p>
                            <span className="text-lg font-display text-white">{overallIntensity}%</span>
                        </div>
                    </Card>

                    {/* Visual Rhythm Guidance */}
                    <Card className="p-5">
                        <h3 className="section-title">Visual Rhythm Guidance</h3>
                        <p className="text-xs text-white/50 mb-4">Suggested visual effects</p>

                        <div className="space-y-3">
                            {rhythmEffects.map((effect, i) => (
                                <div key={i} className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${effect.active ? 'bg-cosmic/20' : 'bg-white/5'}`}>
                                    <div className={`w-3 h-3 rounded-full ${effect.active ? 'bg-gold' : 'bg-white/20'}`} />
                                    <span className={`text-sm ${effect.active ? 'text-white' : 'text-white/50'}`}>{effect.name}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 h-24 rounded-lg overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-pink-800/30 to-orange-700/40" />
                            <div className="absolute inset-0 flex items-end justify-center gap-1 p-2">
                                {[...Array(20)].map((_, i) => (
                                    <div key={i} className="w-2 bg-gradient-to-t from-cosmic to-gold rounded-t" style={{ height: `${Math.random() * 60 + 20}%`, opacity: 0.6 + Math.random() * 0.4 }} />
                                ))}
                            </div>
                        </div>

                        <Button className="w-full mt-4">Apply Rhythm to Canvas</Button>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default MuraliPanel;
