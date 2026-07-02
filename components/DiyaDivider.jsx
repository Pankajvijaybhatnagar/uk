export default function DiyaDivider({ className = "" }) {
  return (
    <div className={`relative flex items-center justify-center gap-3 py-2 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-gold/60" />
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill="none"
          className="animate-flicker"
          style={{ animationDelay: `${i * 0.3}s` }}
        >
          <path
            d="M9 2C9.8 4 11.5 5.2 11.5 7.2C11.5 8.5 10.4 9.5 9 9.5C7.6 9.5 6.5 8.5 6.5 7.2C6.5 5.2 8.2 4 9 2Z"
            fill="#DD6B20"
          />
          <ellipse cx="9" cy="15" rx="8" ry="4" fill="#C89B3C" />
          <ellipse cx="9" cy="14" rx="6" ry="3" fill="#E4C878" />
        </svg>
      ))}
      <span className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}
