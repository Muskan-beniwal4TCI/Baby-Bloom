import { useState } from 'react';
import '../styles/pages.css';

const Feeding = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const feedingLogs = [
    {
      id: 1,
      type: 'bottle',
      icon: '🍼',
      time: '2 hours ago',
      details: { amount: '180ml', duration: '15 min', notes: 'Formula' }
    },
    {
      id: 2,
      type: 'solid',
      icon: '🥕',
      time: '5 hours ago',
      details: { food: 'Mashed carrots', amount: '50g', notes: 'Loved it!' }
    },
    {
      id: 3,
      type: 'breast',
      icon: '🤱',
      time: '7 hours ago',
      details: { duration: '20 min', side: 'Both', notes: '' }
    },
    {
      id: 4,
      type: 'bottle',
      icon: '🍼',
      time: '10 hours ago',
      details: { amount: '150ml', duration: '12 min', notes: 'Before nap' }
    },
    {
      id: 5,
      type: 'solid',
      icon: '🍌',
      time: 'Yesterday',
      details: { food: 'Banana puree', amount: '60g', notes: 'Good appetite' }
    },
  ];

  const todayStats = {
    totalFeedings: 5,
    totalAmount: '540ml',
    lastFed: '2 hours ago',
    avgInterval: '3.2 hours'
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">🍼 Feeding Tracker</h1>
        <p className="page-subtitle">Track and manage your baby's feeding schedule</p>
      </div>

      <div className="page-actions">
        <button className="btn btn-primary">
          <span>➕</span>
          <span>Log Feeding</span>
        </button>
        <button className="btn btn-secondary">
          <span>📊</span>
          <span>View Analytics</span>
        </button>
        <button className="btn btn-secondary">
          <span>⏰</span>
          <span>Set Reminder</span>
        </button>
      </div>

      <div className="content-grid">
        <div className="feeding-log">
          <div className="log-filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'bottle' ? 'active' : ''}`}
              onClick={() => setActiveFilter('bottle')}
            >
              🍼 Bottle
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'breast' ? 'active' : ''}`}
              onClick={() => setActiveFilter('breast')}
            >
              🤱 Breast
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'solid' ? 'active' : ''}`}
              onClick={() => setActiveFilter('solid')}
            >
              🥘 Solid Food
            </button>
          </div>

          <div className="log-entries">
            {feedingLogs.map((log) => (
              <div key={log.id} className="log-entry">
                <div className="log-entry-header">
                  <div className="log-entry-type">
                    <span className="log-entry-icon">{log.icon}</span>
                    <span>{log.type === 'bottle' ? 'Bottle Feed' : log.type === 'breast' ? 'Breastfeed' : 'Solid Food'}</span>
                  </div>
                  <div className="log-entry-time">{log.time}</div>
                </div>
                <div className="log-entry-details">
                  {log.details.amount && (
                    <div className="log-entry-detail">
                      <span>📏</span>
                      <span>{log.details.amount}</span>
                    </div>
                  )}
                  {log.details.duration && (
                    <div className="log-entry-detail">
                      <span>⏱️</span>
                      <span>{log.details.duration}</span>
                    </div>
                  )}
                  {log.details.food && (
                    <div className="log-entry-detail">
                      <span>🥘</span>
                      <span>{log.details.food}</span>
                    </div>
                  )}
                  {log.details.notes && (
                    <div className="log-entry-detail">
                      <span>📝</span>
                      <span>{log.details.notes}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="info-panel">
          <div className="info-card">
            <div className="info-card-title">
              <span>📊</span>
              <span>Today's Summary</span>
            </div>
            <div className="info-item">
              <div className="info-item-label">Total Feedings</div>
              <div className="info-item-value">{todayStats.totalFeedings}</div>
            </div>
            <div className="info-item">
              <div className="info-item-label">Total Amount</div>
              <div className="info-item-value">{todayStats.totalAmount}</div>
            </div>
            <div className="info-item">
              <div className="info-item-label">Last Fed</div>
              <div className="info-item-value">{todayStats.lastFed}</div>
            </div>
            <div className="info-item">
              <div className="info-item-label">Avg Interval</div>
              <div className="info-item-value">{todayStats.avgInterval}</div>
            </div>
          </div>

          <div className="tip-card">
            <div className="tip-card-title">
              <span>💡</span>
              <span>Feeding Tip</span>
            </div>
            <p className="tip-card-text">
              At 6-12 months, babies typically need 24-32 oz of formula per day along with solid foods. Introduce new foods one at a time, waiting 3-5 days between each.
            </p>
          </div>

          <div className="info-card">
            <div className="info-card-title">
              <span>🥘</span>
              <span>Meal Ideas</span>
            </div>
            <div style={{ fontSize: 'var(--font-size-sm)', lineHeight: 1.8 }}>
              <div style={{ marginBottom: 'var(--spacing-sm)' }}>• Mashed sweet potato</div>
              <div style={{ marginBottom: 'var(--spacing-sm)' }}>• Avocado puree</div>
              <div style={{ marginBottom: 'var(--spacing-sm)' }}>• Soft cooked vegetables</div>
              <div style={{ marginBottom: 'var(--spacing-sm)' }}>• Oatmeal with fruit</div>
              <div>• Yogurt (whole milk)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feeding;
