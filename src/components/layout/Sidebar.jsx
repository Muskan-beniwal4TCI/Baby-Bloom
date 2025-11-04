import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    {
      section: 'Overview',
      items: [
        { path: '/', icon: '🏠', label: 'Dashboard' },
        { path: '/timeline', icon: '📅', label: 'Timeline' },
      ]
    },
    {
      section: 'Baby Care',
      items: [
        { path: '/feeding', icon: '🍼', label: 'Feeding', badge: 3 },
        { path: '/sleep', icon: '😴', label: 'Sleep' },
        { path: '/diaper', icon: '🧷', label: 'Diaper Changes' },
        { path: '/health', icon: '💊', label: 'Health & Medical' },
        { path: '/growth', icon: '📏', label: 'Growth Tracking' },
      ]
    },
    {
      section: 'Development',
      items: [
        { path: '/milestones', icon: '⭐', label: 'Milestones' },
        { path: '/activities', icon: '🎨', label: 'Activities' },
        { path: '/photos', icon: '📸', label: 'Photo Timeline' },
      ]
    },
    {
      section: 'Mother\'s Care',
      items: [
        { path: '/mother-health', icon: '💝', label: 'Wellness' },
        { path: '/breastfeeding', icon: '🤱', label: 'Breastfeeding' },
      ]
    },
    {
      section: 'Learn',
      items: [
        { path: '/education', icon: '📚', label: 'Education Hub' },
        { path: '/tips', icon: '💡', label: 'Tips & Guides' },
        { path: '/recipes', icon: '🥘', label: 'Meal Recipes' },
      ]
    }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''} ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <button className="collapse-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? '➡️' : '⬅️'}
        </button>
      </div>

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
              >
                <span className="nav-item-icon">{item.icon}</span>
                {!isCollapsed && <span className="nav-item-label">{item.label}</span>}
                {!isCollapsed && item.badge && <span className="nav-item-badge">{item.badge}</span>}
              </Link>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="sidebar-footer-btn">
          <span>⚙️</span>
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
