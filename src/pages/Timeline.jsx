import '../styles/pages.css';

const Timeline = () => {
  const timelineData = [
    { id: 1, type: 'feeding', icon: '🍼', title: 'Fed formula 180ml', time: '2 hours ago', color: 'var(--primary)' },
    { id: 2, type: 'sleep', icon: '💤', title: 'Nap for 1.5 hours', time: '3 hours ago', color: 'var(--secondary)' },
    { id: 3, type: 'diaper', icon: '🧷', title: 'Diaper change - wet', time: '1 hour ago', color: 'var(--accent)' },
    { id: 4, type: 'feeding', icon: '🥕', title: 'Ate mashed carrots', time: '5 hours ago', color: 'var(--success)' },
    { id: 5, type: 'activity', icon: '🎨', title: 'Tummy time 15 min', time: '6 hours ago', color: 'var(--warning)' },
    { id: 6, type: 'health', icon: '💊', title: 'Vitamin D drops', time: '7 hours ago', color: 'var(--success)' },
    { id: 7, type: 'milestone', icon: '⭐', title: 'First time clapping!', time: 'Yesterday', color: 'var(--warning)' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">📅 Timeline</h1>
        <p className="page-subtitle">Complete activity history for your baby</p>
      </div>

      <div className="page-actions">
        <button className="btn btn-secondary">
          <span>📅</span>
          <span>Today</span>
        </button>
        <button className="btn btn-secondary">
          <span>📆</span>
          <span>This Week</span>
        </button>
        <button className="btn btn-secondary">
          <span>📊</span>
          <span>Export</span>
        </button>
      </div>

      <div className="section-card">
        <h3 style={{ marginBottom: 'var(--spacing-xl)' }}>Recent Activities</h3>
        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: '20px',
            bottom: '20px',
            width: '2px',
            background: 'var(--border)',
          }} />
          
          {timelineData.map((item) => (
            <div key={item.id} style={{
              position: 'relative',
              paddingLeft: '60px',
              marginBottom: 'var(--spacing-xl)'
            }}>
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '8px',
                top: '8px',
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                background: item.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                border: '3px solid var(--surface)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                {item.icon}
              </div>
              
              <div className="card" style={{ borderLeft: `3px solid ${item.color}` }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'start',
                  marginBottom: 'var(--spacing-xs)'
                }}>
                  <h4 style={{ margin: 0 }}>{item.title}</h4>
                  <span style={{
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--text-tertiary)',
                    whiteSpace: 'nowrap',
                    marginLeft: 'var(--spacing-md)'
                  }}>
                    {item.time}
                  </span>
                </div>
                <div style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  fontWeight: 600
                }}>
                  {item.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
