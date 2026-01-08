import React from 'react';

const Slider = ({
    label,
    value,
    onChange,
    min = 0,
    max = 100,
    showValue = true,
    unit = '%',
    className = ''
}) => {
    return (
        <div className={`slider-container ${className}`}>
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-white/70">{label}</span>
                {showValue && (
                    <span className="text-sm text-white/90 font-medium">{value}{unit}</span>
                )}
            </div>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => onChange(parseInt(e.target.value))}
                className="w-full"
                style={{
                    background: `linear-gradient(to right, #6366f1 0%, #8b5cf6 ${value}%, rgba(255,255,255,0.1) ${value}%, rgba(255,255,255,0.1) 100%)`
                }}
            />
        </div>
    );
};

export default Slider;
