import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, isCollapsed, onHoverChange, onClose }) => {
  const location = useLocation();

  const navItems = [
    {
      section: 'Overview',
      items: [
        { path: '/', icon: '📊', label: 'Dashboard' },
        { path: '/timeline', icon: '🕒', label: 'Timeline' },
      ],
    },
    {
      section: 'Baby Care',
      items: [
        { path: '/feeding', icon: '🍼', label: 'Feeding', badge: 3 },
        { path: '/sleep', icon: '🌙', label: 'Sleep' },
        { path: '/diaper', icon: '🧷', label: 'Diaper Changes' },
        { path: '/health', icon: '🩺', label: 'Health & Medical' },
        { path: '/growth', icon: '📈', label: 'Growth Tracking' },
      ],
    },
    {
      section: 'Development',
      items: [
        { path: '/milestones', icon: '🎯', label: 'Milestones' },
        { path: '/activities', icon: '🎨', label: 'Activities' },
        { path: '/photos', icon: '📸', label: 'Photo Timeline' },
      ],
    },
    {
      section: "Mother's Care",
      items: [
        { path: '/mother-health', icon: '💗', label: 'Wellness' },
        { path: '/breastfeeding', icon: '🤱', label: 'Breastfeeding' },
      ],
    },
    {
      section: 'Learn',
      items: [
        { path: '/education', icon: '📚', label: 'Education Hub' },
        { path: '/tips', icon: '💡', label: 'Tips & Guides' },
        { path: '/recipes', icon: '🥣', label: 'Meal Recipes' },
      ],
    },
  ];

  const isActive = (path) => location.pathname === path;

  const shouldIgnoreHover = () =>
    typeof window !== 'undefined' && window.innerWidth <= 768;

  const handleMouseEnter = () => {
    if (shouldIgnoreHover()) {
      return;
    }
    onHoverChange?.(false);
  };

  const handleMouseLeave = () => {
    if (shouldIgnoreHover()) {
      return;
    }
    onHoverChange?.(true);
  };

  const handleFocus = () => {
    if (shouldIgnoreHover()) {
      return;
    }
    onHoverChange?.(false);
  };

  const handleBlur = (event) => {
    if (shouldIgnoreHover()) {
      return;
    }
    if (!event.currentTarget.contains(event.relatedTarget)) {
      onHoverChange?.(true);
    }
  };

  return (
    <aside
      className={`sidebar ${isOpen ? 'open' : ''} ${isCollapsed ? 'collapsed' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <nav className="sidebar-nav">
        {navItems.map((section) => (
          <div key={section.section} className="nav-section">
            <div className="nav-section-title">{section.section}</div>
            {section.items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => window.innerWidth <= 768 && onClose?.()}
                title={item.label}
                aria-label={item.label}
              >
                <span className="nav-item-icon" aria-hidden="true">{item.icon}</span>
                <span className="nav-item-label" aria-hidden={isCollapsed}>
                  {item.label}
                </span>
                {item.badge && (
                  <span className="nav-item-badge" aria-hidden={isCollapsed}>
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <Link to="/settings" className="sidebar-footer-btn" title="Settings" aria-label="Settings">
          <span aria-hidden="true">⚙️</span>
          <span className="sidebar-footer-label" aria-hidden={isCollapsed}>
            Settings
          </span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
