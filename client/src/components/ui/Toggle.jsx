import React from 'react';

const Toggle = ({ label, checked, onChange, className = '' }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <span className="text-sm text-white/70">{label}</span>
            <button
                onClick={() => onChange(!checked)}
                className={`toggle-switch ${checked ? 'active' : ''}`}
                role="switch"
                aria-checked={checked}
            >
                <span className="sr-only">{label}</span>
            </button>
            <span className="text-xs text-white/50">{checked ? 'ON' : 'OFF'}</span>
        </div>
    );
};

export default Toggle;
