import '../styles/pages.css';

const Sleep = () => {
  const sleepLogs = [
    { id: 1, type: 'nap', icon: '💤', time: '3 hours ago', duration: '1h 30m', quality: 'Good' },
    { id: 2, type: 'night', icon: '🌙', time: 'Last night', duration: '9h 15m', quality: 'Excellent' },
    { id: 3, type: 'nap', icon: '💤', time: 'Yesterday 2PM', duration: '45m', quality: 'Fair' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">😴 Sleep Tracker</h1>
        <p className="page-subtitle">Monitor your baby's sleep patterns and quality</p>
      </div>

      <div className="page-actions">
        <button className="btn btn-primary">
          <span>➕</span>
          <span>Log Sleep</span>
        </button>
        <button className="btn btn-secondary">
          <span>📊</span>
          <span>Sleep Report</span>
        </button>
      </div>

      <div className="content-grid">
        <div className="feeding-log">
          <h3 style={{ marginBottom: 'var(--spacing-lg)' }}>Sleep Log</h3>
          {sleepLogs.map((log) => (
            <div key={log.id} className="log-entry" style={{ borderLeftColor: 'var(--secondary)' }}>
              <div className="log-entry-header">
                <div className="log-entry-type">
                  <span className="log-entry-icon">{log.icon}</span>
                  <span>{log.type === 'nap' ? 'Nap' : 'Night Sleep'}</span>
                </div>
                <div className="log-entry-time">{log.time}</div>
              </div>
              <div className="log-entry-details">
                <div className="log-entry-detail">
                  <span>⏱️</span>
                  <span>{log.duration}</span>
                </div>
                <div className="log-entry-detail">
                  <span>⭐</span>
                  <span>{log.quality}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="info-panel">
          <div className="info-card">
            <div className="info-card-title">
              <span>📊</span>
              <span>Today's Sleep</span>
            </div>
            <div className="info-item">
              <div className="info-item-label">Total Sleep</div>
              <div className="info-item-value">11h 45m</div>
            </div>
            <div className="info-item">
              <div className="info-item-label">Naps Today</div>
              <div className="info-item-value">2</div>
            </div>
            <div className="info-item">
              <div className="info-item-label">Last Nap</div>
              <div className="info-item-value">3h ago</div>
            </div>
          </div>

          <div className="tip-card" style={{ background: 'linear-gradient(135deg, var(--secondary-light) 0%, var(--secondary) 100%)' }}>
            <div className="tip-card-title">
              <span>💡</span>
              <span>Sleep Tip</span>
            </div>
            <p className="tip-card-text">
              At 6-12 months, babies need 12-16 hours of sleep per day, including naps. Maintain a consistent bedtime routine to promote better sleep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sleep;
