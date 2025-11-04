import './TopBar.css';
// Import the logo using Vite's asset handling
import tricolorLogo from '../../assets/images/tricolor_logo.png?url';

const TopBar = ({ onMenuClick }) => {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button
          className="topbar-menu-btn"
          onClick={onMenuClick}
          aria-label="Toggle sidebar"
        >
          <span className="topbar-menu-icon" aria-hidden="true" />
        </button>
        <div className="app-title">
          <svg
            className="app-logo"
            viewBox="0 0 36 36"
            role="img"
            aria-label="Baby Bloom logo"
          >
            <defs>
              <linearGradient id="appLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary-light)" />
                <stop offset="100%" stopColor="var(--primary)" />
              </linearGradient>
            </defs>
            <circle cx="18" cy="18" r="17" fill="url(#appLogoGradient)" />
            <path
              d="M18 23.8l-5.6-5.4c-1.5-1.5-1.5-3.9 0-5.4 1.5-1.5 3.8-1.5 5.3 0 .3.3.6.8.8 1.2.2-.4.5-.9.8-1.2 1.5-1.5 3.8-1.5 5.3 0 1.5 1.5 1.5 3.9 0 5.4L18 23.8z"
              fill="var(--surface)"
            />
            <circle cx="12.5" cy="12.2" r="1.4" fill="var(--accent)" opacity="0.7" />
            <circle cx="23.8" cy="12.6" r="1" fill="var(--secondary-light)" opacity="0.5" />
          </svg>
          <h1 className="app-name">Baby Bloom</h1>
        </div>
      </div>

      <div className="topbar-right">
        <img src={tricolorLogo} alt="Tricolor Initiatives" className="company-logo" />
      </div>
    </header>
  );
};

export default TopBar;
