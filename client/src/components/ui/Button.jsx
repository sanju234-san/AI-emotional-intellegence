import React from 'react';

const Button = ({
    children,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    icon = null
}) => {
    const baseStyles = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

    const sizes = {
        sm: 'text-xs py-2 px-4',
        md: '',
        lg: 'text-base py-3 px-8'
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {icon && <span className="btn-icon">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
