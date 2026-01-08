import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const BhavaPanel = () => {
    const [sceneText, setSceneText] = useState('');
    const [analyzed, setAnalyzed] = useState(false);

    const emotions = [
        { name: 'Awe', value: 60, color: '#8b5cf6' },
        { name: 'Curiosity', value: 30, color: '#6366f1' },
        { name: 'Trepidation', value: 25, color: '#a855f7' },
        { name: 'Hope', value: 15, color: '#c084fc' }
    ];

    const handleAnalyze = () => {
        if (sceneText.trim()) {
            setAnalyzed(true);
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/bg-lotus.png')` }}
            />
            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10 pt-20 pb-10 px-4">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-10">
                    <h1 className="font-display text-4xl md:text-5xl tracking-wider mb-3 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                        BHĀVA
                    </h1>
                    <p className="font-accent text-xl text-white/60 italic">
                        Scene Understanding Panel - Emotional essence of the scene
                    </p>
                </div>

                {/* Input Section */}
                <div className="max-w-3xl mx-auto mb-8">
                    <Card className="p-6">
                        <textarea
                            value={sceneText}
                            onChange={(e) => setSceneText(e.target.value)}
                            placeholder="Paste your scene description here..."
                            className="w-full h-32 bg-transparent border border-white/10 rounded-lg p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-cosmic resize-none"
                        />
                    </Card>

                    <div className="flex justify-center mt-6">
                        <Button onClick={handleAnalyze} className="gap-2">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                            Analyze Scene
                        </Button>
                    </div>
                </div>

                {/* Results Section */}
                {analyzed && (
                    <div className="max-w-5xl mx-auto animate-fadeIn">
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {/* Dominant Emotion */}
                            <Card className="p-6">
                                <h3 className="section-title">Dominant Emotion</h3>
                                <div className="flex items-center gap-4 mt-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-display text-gold">Mystery & Wonder</h4>
                                        <p className="text-sm text-white/50 mt-1 max-w-xs">
                                            Mystery & wonder is a potent, evocative emotion characterized by curiosity and spiritual amazement.
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            {/* Emotional Layers Chart */}
                            <Card className="p-6">
                                <h3 className="section-title">Emotional Layers</h3>
                                <div className="bar-chart mt-4">
                                    {emotions.map((emotion, i) => (
                                        <div key={i} className="flex flex-col items-center gap-2">
                                            <div
                                                className="w-full rounded-t"
                                                style={{
                                                    height: `${emotion.value * 1.5}px`,
                                                    background: `linear-gradient(to top, ${emotion.color}, ${emotion.color}99)`
                                                }}
                                            />
                                            <span className="text-xs text-white/60">{emotion.name}</span>
                                            <span className="text-sm text-white/80">{emotion.value}%</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>

                        {/* Mood Transitions */}
                        <Card className="p-6">
                            <h3 className="section-title">Mood Transitions</h3>
                            <div className="relative h-48 mt-4">
                                <div className="absolute left-0 top-0 text-sm text-white/50">Discovery</div>
                                <div className="absolute right-0 top-0 text-sm text-white/50">Ancient Power</div>
                                <div className="absolute left-1/3 bottom-0 text-sm text-white/50">Unfolding Secret</div>

                                <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#6366f1" />
                                            <stop offset="50%" stopColor="#d4af37" />
                                            <stop offset="100%" stopColor="#a855f7" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M 0 120 Q 100 60 150 80 T 300 40 T 400 30"
                                        fill="none"
                                        stroke="url(#lineGradient)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M 0 120 Q 100 60 150 80 T 300 40 T 400 30"
                                        fill="none"
                                        stroke="url(#lineGradient)"
                                        strokeWidth="8"
                                        strokeLinecap="round"
                                        opacity="0.3"
                                    />
                                </svg>
                            </div>
                            <p className="text-sm text-white/50 text-center mt-4">
                                The emotional journey moves from awe and wonder through discovery, unfolding secrets to reinvent an Ancient Power.
                            </p>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BhavaPanel;
