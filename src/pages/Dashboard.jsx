import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const todayStats = [
    {
      id: 1,
      type: 'feeding',
      icon: '🍼',
      title: 'Feedings Today',
      value: '5',
      subtitle: 'Last fed 2 hours ago',
      trend: 'up'
    },
    {
      id: 2,
      type: 'sleep',
      icon: '😴',
      title: 'Sleep Duration',
      value: '11h',
      subtitle: '3 naps + nighttime',
      trend: 'up'
    },
    {
      id: 3,
      type: 'diaper',
      icon: '🧷',
      title: 'Diaper Changes',
      value: '7',
      subtitle: 'Last changed 1 hour ago',
      trend: 'down'
    },
    {
      id: 4,
      type: 'health',
      icon: '💊',
      title: 'Health Status',
      value: 'Good',
      subtitle: 'No concerns today',
      trend: 'up'
    }
  ];

  const recentActivities = [
    { id: 1, icon: '🍼', title: 'Fed formula 180ml', time: '2 hours ago', bg: 'var(--primary-light)' },
    { id: 2, icon: '💤', title: 'Nap for 1.5 hours', time: '3 hours ago', bg: 'var(--secondary-light)' },
    { id: 3, icon: '🧷', title: 'Diaper change - wet', time: '1 hour ago', bg: 'var(--accent)' },
    { id: 4, icon: '🥕', title: 'Ate mashed carrots', time: '5 hours ago', bg: 'var(--success)' },
    { id: 5, icon: '🎨', title: 'Tummy time 15 min', time: '6 hours ago', bg: 'var(--warning)' },
  ];

  const upcomingReminders = [
    { id: 1, icon: '🍼', title: 'Next feeding', time: 'In 30 minutes' },
    { id: 2, icon: '💊', title: 'Vitamin D drops', time: 'In 2 hours' },
    { id: 3, icon: '📸', title: '8-month milestone photos', time: 'Tomorrow' },
    { id: 4, icon: '👨‍⚕️', title: 'Doctor appointment', time: 'Friday, 10:00 AM' },
  ];

  const quickActions = [
    { id: 1, icon: '🍼', label: 'Log Feeding' },
    { id: 2, icon: '😴', label: 'Log Sleep' },
    { id: 3, icon: '🧷', label: 'Log Diaper' },
    { id: 4, icon: '💊', label: 'Log Medicine' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-welcome">
        <h2>{getGreeting()}, {user?.displayName?.split(' ')[0] || 'Parent'}! 👋</h2>
        <p>Here's what's happening with your little one today</p>
      </div>

      <div className="dashboard-grid">
        {todayStats.map((stat) => (
          <div key={stat.id} className={`stat-card ${stat.type}`}>
            <div className="stat-header">
              <div className="stat-icon">{stat.icon}</div>
              <span className={`stat-trend ${stat.trend}`}>
                {stat.trend === 'up' ? '↑' : '↓'}
              </span>
            </div>
            <div className="stat-title">{stat.title}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-subtitle">{stat.subtitle}</div>
          </div>
        ))}
      </div>

      <div className="section-card" style={{ marginBottom: 'var(--spacing-xl)' }}>
        <div className="section-header">
          <h3 className="section-title">Quick Actions</h3>
        </div>
        <div className="quick-actions">
          {quickActions.map((action) => (
            <button key={action.id} className="quick-action-btn">
              <span>{action.icon}</span>
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="dashboard-content">
        <div className="section-card">
          <div className="section-header">
            <h3 className="section-title">Recent Activity</h3>
            <Link to="/timeline" className="section-link">View All →</Link>
          </div>
          <div className="timeline">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="timeline-item">
                <div className="timeline-icon" style={{ background: activity.bg }}>
                  {activity.icon}
                </div>
                <div className="timeline-content">
                  <div className="timeline-title">{activity.title}</div>
                  <div className="timeline-time">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-card">
          <div className="section-header">
            <h3 className="section-title">Upcoming Reminders</h3>
            <Link to="/reminders" className="section-link">All →</Link>
          </div>
          <div className="reminders">
            {upcomingReminders.map((reminder) => (
              <div key={reminder.id} className="reminder-item">
                <span className="reminder-icon">{reminder.icon}</span>
                <div className="reminder-content">
                  <div className="reminder-title">{reminder.title}</div>
                  <div className="reminder-time">{reminder.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-card">
        <div className="section-header">
          <h3 className="section-title">Weekly Insights</h3>
        </div>
        <div style={{ 
          padding: 'var(--spacing-xl)', 
          background: 'var(--surface-variant)', 
          borderRadius: 'var(--radius-md)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '48px', marginBottom: 'var(--spacing-md)' }}>📊</div>
          <h4 style={{ marginBottom: 'var(--spacing-sm)' }}>Your Baby's Week at a Glance</h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
            This week your baby had consistent sleep patterns and tried 2 new foods!
          </p>
          <Link to="/growth" className="section-link">View Detailed Report →</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
