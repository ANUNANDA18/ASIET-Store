# 🎓 ASIET College Store Web Application

A real-time web application for the **Adi Shankara Institute of Engineering and Technology (ASIET)** store.  
It allows **students** to register/login, check product availability instantly, and **admins** to manage inventory with ease.  
The app is live here 👉 **[ASIET Store](https://anunanda18.github.io/ASIET-Store/index.html)**

---

## 🚀 Features

### 🧑‍🎓 Student View
- **Student Registration & Login** → Students can create an account or log in to access the store.
- **Product Catalog** → Browse items in a responsive grid layout.
- **Real-Time Stock Updates** → Instantly see *In Stock* or *Out of Stock* status.

### 🛠️ Admin Dashboard
- **Secure Login** → Email & password authentication.
- **Full Inventory Control** → Add and update stock status.
- **Live Updates** → All changes sync instantly for students.

---

## 🛠️ Tech Stack

| Layer        | Technology |
|--------------|------------|
| **Frontend** | HTML5, JavaScript (ES6), Tailwind CSS |
| **Backend**  | Firebase Authentication, Firestore Database |
| **Hosting**  | GitHub Pages |

---

## 📂 Folder Structure

```
ASIET-Store/
│
├── index.html              # Landing page (role selection)
├── student.html            # Student interface
├── admin.html              # Admin dashboard
│
├── /css
│   └── styles.css          # Custom styles (optional)
│
├── /js
│   ├── firebase-config.js  # Firebase config setup
│   ├── student.js          # Student view logic
│   └── admin.js            # Admin view logic
│
├── /assets
│   └── images/             # Product/UI images
│
└── README.md               # Documentation
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/anunanda18/ASIET-Store.git
cd ASIET-Store
```

### 2️⃣ Set Up Firebase
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a **new project**.
3. Enable **Authentication** → Email/Password (for both students and admins).
4. Create a **Firestore Database** in test mode.
5. Copy your Firebase config and paste it inside `firebase-config.js`.

**Example:**
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 3️⃣ Run Locally
You can run the project by simply opening `index.html` in a browser,  
or use a local server:
```bash
npx serve
```

---

## 🔒 Admin Credentials
> Set your own admin account in Firebase Authentication.

---

## 🌐 Live Demo
👉 **[Click Here to Open ASIET Store](https://anunanda18.github.io/ASIET-Store/index.html)**

---

## 💡 Future Improvements
- 🔍 Search & filter products  
- 🗂️ Add product categories  
- 🛒 Cart system for students  
- 📱 Mobile-optimized UI improvements  

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🤝 Contributing
Pull requests and suggestions are welcome!  
If you find a bug, please open an issue in the [GitHub Issues section](https://github.com/anunanda18/ASIET-Store/issues).
