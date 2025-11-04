# 🌸 Baby Bloom

A comprehensive baby care tracker and guide app for parents with babies aged 6-12 months. Built with React, Firebase, and Material You design principles.

![Baby Bloom](https://img.shields.io/badge/React-18.2-blue) ![Firebase](https://img.shields.io/badge/Firebase-10.7-orange) ![PWA](https://img.shields.io/badge/PWA-Ready-green)

## ✨ Features

### 👶 Baby Care Tracking
- **🍼 Feeding Management** - Track bottle feeds, breastfeeding, and solid foods with detailed logs
- **😴 Sleep Tracker** - Monitor sleep patterns, naps, and nighttime rest
- **🧷 Diaper Changes** - Log and analyze diaper change patterns
- **💊 Health & Medical** - Store health records, medications, and vaccination schedules
- **📏 Growth Tracking** - Monitor weight, height, and development with WHO standard charts

### 🌟 Development & Milestones
- **⭐ Milestone Tracker** - Track and celebrate developmental achievements
- **🎨 Activities Log** - Record playtime and learning activities
- **📸 Photo Timeline** - Capture precious moments and growth journey

### 💝 Mother's Care
- **💝 Wellness Tracking** - Monitor postpartum health and self-care
- **🤱 Breastfeeding Support** - Tips, tracking, and guidance

### 📚 Education & Resources
- **📚 Education Hub** - Expert articles on baby care, development, and health
- **💡 Tips & Guides** - Practical advice for everyday situations
- **🥘 Meal Recipes** - Age-appropriate, nutritious meal ideas with guidelines

### 📊 Smart Features
- **Dashboard** - Beautiful overview with today's stats and upcoming reminders
- **Timeline View** - Complete activity history visualization
- **Quick Actions** - Fast logging of common activities
- **Smart Reminders** - Notifications for feeding times, medications, appointments
- **Analytics** - Weekly insights and pattern recognition

### 🎨 Design
- **Material You Design** - Modern, accessible interface
- **Baby-friendly Theme** - Soft colors (pink, blue, yellow pastels)
- **Responsive Layout** - Works perfectly on mobile and desktop
- **Dark Mode Ready** - Easy on eyes during night feeds
- **PWA Support** - Install on any device, works offline

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Firebase project created
- Google Sign-In enabled in Firebase Console

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Muskan-beniwal4TCI/Baby-Bloom.git
cd Baby-Bloom
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure Firebase**

Create a `.env` file in the root directory:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your_project.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_BASE_PATH=/
```

4. **Set up Firebase Realtime Database rules**
```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

5. **Start development server**
```bash
npm run dev
```

The app will open at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   └── layout/
│       ├── Sidebar.jsx          # Navigation sidebar
│       ├── TopBar.jsx            # Top navigation bar
│       └── AppLayout.jsx         # Main layout wrapper
├── pages/
│   ├── Dashboard.jsx             # Main dashboard
│   ├── Feeding.jsx               # Feeding tracker
│   ├── Sleep.jsx                 # Sleep tracker
│   ├── Diaper.jsx                # Diaper tracker
│   ├── Health.jsx                # Health records
│   ├── Growth.jsx                # Growth charts
│   ├── Milestones.jsx            # Milestone tracker
│   ├── Activities.jsx            # Activity log
│   ├── Photos.jsx                # Photo timeline
│   ├── MotherHealth.jsx          # Mother's wellness
│   ├── Breastfeeding.jsx         # Breastfeeding support
│   ├── Education.jsx             # Education hub
│   ├── Tips.jsx                  # Tips & guides
│   ├── Recipes.jsx               # Meal recipes
│   ├── Timeline.jsx              # Activity timeline
│   └── Login.jsx                 # Authentication page
├── contexts/
│   └── AuthContext.jsx           # Authentication context
├── services/
│   └── firebase.js               # Firebase configuration
├── styles/
│   ├── globals.css               # Global styles
│   └── pages.css                 # Page-specific styles
├── App.jsx                       # Main app component
└── main.jsx                      # App entry point
```

## 🛠️ Technologies Used

### Frontend
- **React 18.2** - UI library
- **React Router 6** - Navigation and routing
- **Vite 5** - Build tool and dev server

### Backend & Services
- **Firebase Authentication** - Google Sign-In
- **Firebase Realtime Database** - Real-time data sync
- **Firebase Storage** - Photo storage

### Design & Styling
- **CSS3** - Custom styling with CSS variables
- **Material You** - Design system principles
- **Inter Font** - Modern typography

### PWA Features
- **Vite PWA Plugin** - Service worker generation
- **Workbox** - Offline caching strategies
- **Web Manifest** - App installability

## 🎨 Design System

### Color Palette
- **Primary**: `#FFB4D5` (Soft Pink) - Main brand color
- **Secondary**: `#A8D8EA` (Soft Blue) - Supporting color
- **Accent**: `#FFD97D` (Warm Yellow) - Highlights
- **Success**: `#8FD5A6` (Mint Green) - Positive actions
- **Background**: `#FFF8FA` (Off White) - App background

### Typography
- **Font Family**: Inter
- **Sizes**: 12px - 40px (8pt scale)
- **Weights**: 300, 400, 500, 600, 700

### Spacing
- 8-point grid system
- Consistent padding and margins

## 📱 PWA Installation

### Android / Desktop
1. Open the app in Chrome
2. Click the "Install" prompt or menu option
3. App will be added to home screen/app drawer

### iOS
1. Open in Safari
2. Tap the Share button
3. Select "Add to Home Screen"

## 🔐 Security & Privacy

- User data is scoped per user ID
- Firebase security rules prevent cross-user access
- Google Sign-In for secure authentication
- All data is encrypted in transit and at rest

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## 📊 Future Enhancements

- [ ] AI-powered insights and predictions
- [ ] Community features for parent connections
- [ ] Export reports as PDF
- [ ] Multiple baby profiles
- [ ] Pediatrician Q&A integration
- [ ] Shopping list generator
- [ ] Voice input for hands-free logging
- [ ] Apple Health / Google Fit integration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- **Muskan Beniwal** - [GitHub](https://github.com/Muskan-beniwal4TCI)

## 🙏 Acknowledgments

- Inspired by the needs of new parents
- Material You design guidelines
- WHO growth chart standards
- Pediatric care best practices

---

Made with 💝 for parents and their little ones