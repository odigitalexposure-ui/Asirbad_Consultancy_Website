import React from 'react';

/**
 * Editorial Button Component
 * Variants: 'primary' | 'gold' | 'outline' | 'secondary' | 'ghost'
 * Sizes: 'sm' | 'md' | 'lg'
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon,
  iconPosition = 'right',
  target,
  rel,
  ariaLabel,
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 tracking-wider uppercase',
    md: 'text-sm px-5 py-2.5 gap-2 tracking-wide',
    lg: 'text-base px-7 py-3.5 gap-2.5 tracking-wide',
  };

  const variantStyles = {
    // Primary: Navy fill, subtle gold border, ivory text
    primary:
      'bg-[#0B1D30] text-[#F8F6F0] border border-[#B69A64]/60 hover:bg-[#142B45] hover:border-[#B69A64] hover:shadow-md focus:ring-[#B69A64]',
    
    // Gold: Muted gold fill, deep navy text, sophisticated prominence
    gold:
      'bg-[#B69A64] text-[#0B1D30] font-semibold border border-[#9E824F] hover:bg-[#C5AA76] hover:shadow-md focus:ring-[#0B1D30]',

    // Outline: Transparent with gold or navy border
    outline:
      'bg-transparent text-[#0B1D30] border border-[#0B1D30]/40 hover:border-[#0B1D30] hover:bg-[#0B1D30]/5 focus:ring-[#0B1D30]',

    // Outline Light: For dark backgrounds
    outlineLight:
      'bg-transparent text-[#F8F6F0] border border-[#B69A64]/60 hover:border-[#B69A64] hover:bg-[#B69A64]/10 focus:ring-[#B69A64]',

    // Secondary: Warm Ivory base, refined hairline border
    secondary:
      'bg-[#F8F6F0] text-[#0B1D30] border border-[#D8D6CE] hover:border-[#B69A64] hover:bg-[#FFFFFF] hover:shadow-xs focus:ring-[#B69A64]',

    // Ghost: Clean inline text with subtle accent
    ghost:
      'bg-transparent text-[#0B1D30] hover:text-[#B69A64] hover:bg-[#B69A64]/5 focus:ring-[#B69A64]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
