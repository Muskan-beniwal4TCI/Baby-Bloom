import '../styles/pages.css';

const Diaper = () => {
  const diaperLogs = [
    { id: 1, icon: '🧷', time: '1 hour ago', type: 'Wet', notes: 'Normal' },
    { id: 2, icon: '🧷', time: '4 hours ago', type: 'Both', notes: 'Changed before nap' },
    { id: 3, icon: '🧷', time: '7 hours ago', type: 'Dirty', notes: 'Normal consistency' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">🧷 Diaper Tracker</h1>
        <p className="page-subtitle">Track diaper changes and monitor patterns</p>
      </div>

      <div className="page-actions">
        <button className="btn btn-primary">
          <span>➕</span>
          <span>Log Change</span>
        </button>
        <button className="btn btn-secondary">
          <span>📊</span>
          <span>Weekly Report</span>
        </button>
      </div>

      <div className="content-grid">
        <div className="feeding-log">
          <h3 style={{ marginBottom: 'var(--spacing-lg)' }}>Diaper Changes</h3>
          {diaperLogs.map((log) => (
            <div key={log.id} className="log-entry" style={{ borderLeftColor: 'var(--accent)' }}>
              <div className="log-entry-header">
                <div className="log-entry-type">
                  <span className="log-entry-icon">{log.icon}</span>
                  <span>Diaper Change - {log.type}</span>
                </div>
                <div className="log-entry-time">{log.time}</div>
              </div>
              <div className="log-entry-details">
                <div className="log-entry-detail">
                  <span>📝</span>
                  <span>{log.notes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="info-panel">
          <div className="info-card">
            <div className="info-card-title">
              <span>📊</span>
              <span>Today's Summary</span>
            </div>
            <div className="info-item">
              <div className="info-item-label">Total Changes</div>
              <div className="info-item-value">7</div>
            </div>
            <div className="info-item">
              <div className="info-item-label">Wet Diapers</div>
              <div className="info-item-value">5</div>
            </div>
            <div className="info-item">
              <div className="info-item-label">Dirty Diapers</div>
              <div className="info-item-value">2</div>
            </div>
          </div>

          <div className="tip-card">
            <div className="tip-card-title">
              <span>💡</span>
              <span>Diaper Tip</span>
            </div>
            <p className="tip-card-text">
              Babies 6-12 months typically need 5-7 diaper changes per day. Watch for signs of diaper rash and change promptly after bowel movements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diaper;
