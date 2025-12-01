# Krishna CA Aspirant Site

A personal website for a CA Aspirant to share quotes and articles.
This site is built with HTML, CSS, and JavaScript, and uses **Firebase** for backend functionality (Authentication & Database).

## Features
- **Public View**: Visitors can see random quotes and read articles posted by the owner.
- **Admin Dashboard**: Secure login for the owner to post new quotes and articles.
- **Dynamic Content**: Content is fetched from Firebase Firestore.

## Setup & Deployment

### 1. Firebase Setup
This project requires a Firebase project.
1. Create a project at [console.firebase.google.com](https://console.firebase.google.com).
2. Enable **Authentication** (Email/Password).
3. Enable **Firestore Database**.
4. Copy the web configuration keys into `js/firebase-config.js`.

### 2. Local Development
Simply open `index.html` in your browser.
Note: For modules to work correctly locally, you might need a local server (e.g., Live Server extension in VS Code).

### 3. Deployment
This site is designed to be hosted on **GitHub Pages**.
1. Push the code to a GitHub repository.
2. Go to Settings > Pages.
3. Select the `main` branch and save.

## Admin Access
To access the dashboard:
1. Go to `/login.html`.
2. Login with the admin credentials.
3. Use the Dashboard to post content.
