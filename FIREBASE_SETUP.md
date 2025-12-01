# Firebase Setup Guide for "krishna-iam"

Since you have already created the project "krishna-iam", follow these steps to get the API keys and enable the necessary features.

## 1. Get the Web Configuration (API Keys)
1.  Go to the [Firebase Console](https://console.firebase.google.com/).
2.  Open your project **"krishna-iam"**.
3.  On the project overview page, look for the **"Get started by adding Firebase to your app"** section and click the **Web icon** (</>).
4.  **Register app**:
    - App nickname: `KrishnaSite` (or anything you like).
    - **Uncheck** "Also set up Firebase Hosting" (we are using GitHub Pages).
    - Click **Register app**.
5.  **Add Firebase SDK**:
    - You will see a code block with `const firebaseConfig = { ... };`.
    - **COPY** the content inside the `{ ... }`. It looks like this:
      ```javascript
      apiKey: "AIzaSy...",
      authDomain: "krishna-iam.firebaseapp.com",
      projectId: "krishna-iam",
      storageBucket: "krishna-iam.firebasestorage.app",
      messagingSenderId: "...",
      appId: "..."
      ```
    - You will need to paste this into the `js/firebase-config.js` file I am creating.

## 2. Enable Authentication (Login)
1.  In the left sidebar, click **Build** > **Authentication**.
2.  Click **Get started**.
3.  Select **Native providers** > **Email/Password**.
4.  Enable the **Email/Password** switch.
5.  Click **Save**.
6.  (Optional) Go to the **Users** tab and click **Add user** to create your brother's account manually (e.g., `brother@krishna.com` / `password123`). Or you can create a signup page, but manual creation is safer for a personal admin site.

## 3. Enable Firestore Database (Content)
1.  In the left sidebar, click **Build** > **Firestore Database**.
2.  Click **Create database**.
3.  **Location**: Select a location near you (e.g., `asia-south1` for Mumbai, India).
4.  **Security Rules**:
    - Choose **Start in test mode** for now (allows read/write for 30 days).
    - **OR** (Better) Choose **Start in production mode** and we will update the rules later to:
      ```
      allow read: if true;
      allow write: if request.auth != null;
      ```
5.  Click **Create**.

## 4. Update Security Rules (Important)
Once the database is created, go to the **Rules** tab in Firestore and paste this to allow anyone to read but only logged-in users (your brother) to write:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```
Click **Publish**.
