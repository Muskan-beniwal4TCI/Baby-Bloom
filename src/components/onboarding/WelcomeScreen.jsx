import { useState } from 'react';
import { useBaby } from '../../contexts/BabyContext';
import TopBar from '../layout/TopBar';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onComplete }) => {
    const { addBaby } = useBaby();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        gender: '',
        weight: '',
        height: '',
        bloodType: ''
    });

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleNext = () => {
        if (step === 1 && formData.name && formData.dateOfBirth && formData.gender) {
            setStep(2);
        }
    };

    const handleBack = () => {
        setStep(1);
    };

    const handleSubmit = () => {
        if (formData.name && formData.dateOfBirth && formData.gender) {
            addBaby(formData);
            onComplete();
        }
    };

    const calculateAge = (dob) => {
        if (!dob) return '';
        const today = new Date();
        const birthDate = new Date(dob);
        const months = (today.getFullYear() - birthDate.getFullYear()) * 12 +
            (today.getMonth() - birthDate.getMonth());

        if (months < 1) {
            const days = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
            return `${days} day${days !== 1 ? 's' : ''} old`;
        } else if (months < 12) {
            return `${months} month${months !== 1 ? 's' : ''} old`;
        } else {
            const years = Math.floor(months / 12);
            const remainingMonths = months % 12;
            return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths > 0 ? `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}` : ''}`;
        }
    };

    return (
        <div className="welcome-screen">
            <TopBar />

            <div className="welcome-content">
                {/* Left side - Info */}
                <div className="welcome-info">
                    <div className="welcome-hero">
                        <div className="hero-icon">👶</div>
                        <h1>Welcome to Baby Bloom!</h1>
                        <p className="hero-subtitle">Your complete baby tracking companion</p>
                    </div>

                    <div className="welcome-features">
                        <h3>What you can do:</h3>
                        <div className="feature-list">
                            <div className="feature-item">
                                <span className="feature-icon">🍼</span>
                                <div>
                                    <strong>Track Daily Activities</strong>
                                    <p>Log feeding, sleep, diapers, and health records</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">📊</span>
                                <div>
                                    <strong>Monitor Growth</strong>
                                    <p>Track weight, height, and developmental milestones</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">⏰</span>
                                <div>
                                    <strong>Set Reminders</strong>
                                    <p>Never miss feedings, medications, or appointments</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">📸</span>
                                <div>
                                    <strong>Capture Memories</strong>
                                    <p>Create a beautiful timeline of your baby's journey</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="welcome-footer-text">
                        <p>✨ All data stored locally on your device - Private & Secure</p>
                    </div>
                </div>

                {/* Right side - Form */}
                <div className="welcome-form-container">
                    <div className="form-header-section">
                        <div className="progress-bar">
                            <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
                                <div className="step-circle">1</div>
                                <div className="step-label">Basic Info</div>
                            </div>
                            <div className={`progress-line ${step >= 2 ? 'active' : ''}`}></div>
                            <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
                                <div className="step-circle">2</div>
                                <div className="step-label">Details</div>
                            </div>
                        </div>
                    </div>

                    {step === 1 && (
                        <div className="welcome-form">
                            <div className="form-section">
                                <div className="baby-icon-display">
                                    {formData.gender === 'male' ? '👶' : formData.gender === 'female' ? '👧' : '🍼'}
                                </div>

                                <div className="form-group">
                                    <label>Baby's Name *</label>
                                    <input
                                        type="text"
                                        placeholder="e.g., Emma, Noah"
                                        value={formData.name}
                                        onChange={(e) => handleChange('name', e.target.value)}
                                        autoFocus
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Date of Birth *</label>
                                    <input
                                        type="date"
                                        value={formData.dateOfBirth}
                                        onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                                        max={new Date().toISOString().split('T')[0]}
                                    />
                                    {formData.dateOfBirth && (
                                        <small className="age-display">
                                            {calculateAge(formData.dateOfBirth)}
                                        </small>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label>Gender *</label>
                                    <div className="gender-options">
                                        <button
                                            type="button"
                                            className={`gender-btn ${formData.gender === 'male' ? 'active' : ''}`}
                                            onClick={() => handleChange('gender', 'male')}
                                        >
                                            <span>👶</span>
                                            <span>Boy</span>
                                        </button>
                                        <button
                                            type="button"
                                            className={`gender-btn ${formData.gender === 'female' ? 'active' : ''}`}
                                            onClick={() => handleChange('gender', 'female')}
                                        >
                                            <span>👧</span>
                                            <span>Girl</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="form-actions">
                                <button
                                    className="btn btn-primary btn-large"
                                    onClick={handleNext}
                                    disabled={!formData.name || !formData.dateOfBirth || !formData.gender}
                                >
                                    Continue →
                                </button>
                                <button
                                    className="btn btn-text"
                                    onClick={() => {
                                        if (formData.name && formData.dateOfBirth && formData.gender) {
                                            handleSubmit();
                                        }
                                    }}
                                >
                                    Skip additional details
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="welcome-form">
                            <div className="form-section">
                                <div className="form-header">
                                    <h3>Additional Information</h3>
                                    <p>These details help us provide better insights (optional)</p>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Birth Weight (kg)</label>
                                        <input
                                            type="number"
                                            step="0.1"
                                            placeholder="e.g., 3.5"
                                            value={formData.weight}
                                            onChange={(e) => handleChange('weight', e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Birth Height (cm)</label>
                                        <input
                                            type="number"
                                            step="0.1"
                                            placeholder="e.g., 50"
                                            value={formData.height}
                                            onChange={(e) => handleChange('height', e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Blood Type</label>
                                    <select
                                        value={formData.bloodType}
                                        onChange={(e) => handleChange('bloodType', e.target.value)}
                                    >
                                        <option value="">Select blood type</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>

                                <div className="info-card">
                                    <span className="info-icon">💡</span>
                                    <div>
                                        <strong>Don't worry!</strong>
                                        <p>You can always add or update this information later in Settings.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="form-actions">
                                <button
                                    className="btn btn-secondary"
                                    onClick={handleBack}
                                >
                                    ← Back
                                </button>
                                <button
                                    className="btn btn-primary btn-large"
                                    onClick={handleSubmit}
                                >
                                    Complete Setup ✨
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;
