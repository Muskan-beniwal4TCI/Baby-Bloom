import './TopBar.css';
// Import the logo using Vite's asset handling
import tricolorLogo from '../../assets/images/tricolor_logo.png?url';

const TopBar = ({ onMenuClick }) => {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="topbar-menu-btn" onClick={onMenuClick}>
          ☰
        </button>
        <h1 className="app-name">Baby Bloom</h1>
      </div>

      <div className="topbar-right">
        <img src={tricolorLogo} alt="Tricolor Initiatives" className="company-logo" />
      </div>
    </header>
  );
};

export default TopBar;
