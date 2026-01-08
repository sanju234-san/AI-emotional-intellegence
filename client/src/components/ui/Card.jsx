import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'md',
  glow = false 
}) => {
  const variants = {
    default: 'glass-card',
    subtle: 'glass-card-subtle',
    solid: 'bg-twilight border border-glass-border rounded-lg'
  };

  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-6'
  };

  return (
    <div className={`${variants[variant]} ${paddings[padding]} ${glow ? 'glow-border' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
