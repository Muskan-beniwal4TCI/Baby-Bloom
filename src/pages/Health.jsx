import '../styles/pages.css';

const Health = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">💊 Health & Medical</h1>
        <p className="page-subtitle">Track health records, symptoms, and medications</p>
      </div>

      <div className="page-actions">
        <button className="btn btn-primary">
          <span>➕</span>
          <span>Add Record</span>
        </button>
        <button className="btn btn-secondary">
          <span>📅</span>
          <span>Appointments</span>
        </button>
        <button className="btn btn-secondary">
          <span>💉</span>
          <span>Vaccinations</span>
        </button>
      </div>

      <div className="content-grid">
        <div className="feeding-log">
          <h3 style={{ marginBottom: 'var(--spacing-lg)' }}>Health Records</h3>
          <div className="log-entry" style={{ borderLeftColor: 'var(--success)' }}>
            <div className="log-entry-header">
              <div className="log-entry-type">
                <span className="log-entry-icon">✅</span>
                <span>Check-up</span>
              </div>
              <div className="log-entry-time">Last week</div>
            </div>
            <div className="log-entry-details">
              <div className="log-entry-detail">
                <span>📏</span>
                <span>Height: 71cm</span>
              </div>
              <div className="log-entry-detail">
                <span>⚖️</span>
                <span>Weight: 8.5kg</span>
              </div>
            </div>
          </div>

          <div className="log-entry" style={{ borderLeftColor: 'var(--warning)' }}>
            <div className="log-entry-header">
              <div className="log-entry-type">
                <span className="log-entry-icon">💊</span>
                <span>Vitamin D Drops</span>
              </div>
              <div className="log-entry-time">Daily</div>
            </div>
            <div className="log-entry-details">
              <div className="log-entry-detail">
                <span>📝</span>
                <span>400 IU daily</span>
              </div>
            </div>
          </div>

          <div className="log-entry" style={{ borderLeftColor: 'var(--primary)' }}>
            <div className="log-entry-header">
              <div className="log-entry-type">
                <span className="log-entry-icon">💉</span>
                <span>Upcoming Vaccination</span>
              </div>
              <div className="log-entry-time">Next month</div>
            </div>
            <div className="log-entry-details">
              <div className="log-entry-detail">
                <span>📝</span>
                <span>9-month vaccines due</span>
              </div>
            </div>
          </div>
        </div>

        <div className="info-panel">
          <div className="info-card">
            <div className="info-card-title">
              <span>📊</span>
              <span>Health Status</span>
            </div>
            <div className="info-item">
              <div className="info-item-label">Current Status</div>
              <div className="info-item-value" style={{ color: 'var(--success)' }}>Healthy</div>
            </div>
            <div className="info-item">
              <div className="info-item-label">Last Checkup</div>
              <div className="info-item-value">1 week ago</div>
            </div>
            <div className="info-item">
              <div className="info-item-label">Next Appointment</div>
              <div className="info-item-value">In 2 months</div>
            </div>
          </div>

          <div className="tip-card" style={{ background: 'linear-gradient(135deg, var(--success) 30%, #6BC598 100%)' }}>
            <div className="tip-card-title">
              <span>💡</span>
              <span>Health Tip</span>
            </div>
            <p className="tip-card-text">
              Keep track of your baby's growth percentiles and discuss any concerns with your pediatrician. Regular checkups are important for early detection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
