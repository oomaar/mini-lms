# 📚 Mini LMS (Frontend Task)

A role-based Learning Management System built with **Next.js App Router** (v13.4+), **TypeScript**, **Firebase Firestore**, **React Query**, and **styled-components**.  
Supports **admin** and **user** roles with mocked authentication and Dockerized deployment.

---

## Features

### **1. Framework & Architecture**
- Built with **Next.js App Router (v13.4+)**
- Clean, modular, and organized project structure
- TypeScript support with strict typing

### **2. Authentication (Mocked)**
- Mock login page (username only — no real backend)
- Auth state persisted via `localStorage`
- Protected dashboard routes based on login status
- **Roles:**
  - **Admin:** create/edit/delete courses and lessons
  - **User:** view-only access

### **3. Firebase Integration**
- Firebase Firestore used for all CRUD operations:
  - **Courses:** `{ id, title, description, lessonIds }`
  - **Lessons:** `{ id, courseId, title, content }`
- Real-time updates for courses and lessons
- `.env.local` provided for Firebase configuration

### **4. Core LMS Features**
#### Courses Page
- List all courses with title, description, and lesson count
- Admin: Create, Edit, Delete courses
- User: View course details

#### Course Detail Page
- Display course title, description, and lessons
- Admin: Add, Edit, Delete lessons
- User: View lesson details

#### Lesson Detail Page
- Display lesson title and content  
- *(Markdown support can be added later)*

#### Dashboard Layout
- Sidebar and top navigation
- Links: **Courses**, **Profile**, **Logout**
- Shows logged-in user's name and role

### **5. Data Handling**
- Data fetching & mutations with **React Query**
- Handled loading and error states
- Optimistic updates for smooth UX

### **6. Styling**
- **styled-components** for modern, scoped styling
- **CSS Modules** styled login screen
- Fully responsive design
- Clean and minimal UI

### **7. Dockerization**
- `Dockerfile` and `docker-compose.yml` provided
- Runs on **http://localhost:3000** out of the box

---

## Installation & Setup

### 1️⃣ Clone the repository
bash
`git clone https://github.com/oomaar/mini-lms.git
cd mini-lms`

2️⃣ Install dependencies
- npm install

3️⃣ Firebase Setup
- Create a Firebase project in the Firebase Console
- Enable Firestore Database
- Get your Firebase config object and add it to .env.local (see .env.local)

Example `.env.local`:
`NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id`

### Running with Docker
1️⃣ Build & start the app
`docker compose up --build`

2️⃣ Access the app
`http://localhost:3000`

3️⃣ Stop the container
`docker compose down`

### Development (without Docker)
`npm run dev`

### Login Credentials (Mock)
You can log in as:
Admin: any username and choose the admin role from the dropdown
User: any username and choose the user from the dropdown (user is the default)


- mini-lms/
- ├── app/                 # Next.js App Router pages
- │   ├── api/             # seed api, seed data to firestore
- │   ├── login/           # Login page
- │   ├── dashboard/       # Protected dashboard pages
- │   └── ...
- ├── components/          # Reusable UI components
- ├── data/                # Static Generated JSON files to help seed data into Firestore
- ├── hooks/               # Custom React hooks
- ├── lib/                 # Firebase & Firestore helper functions
- ├── types/               # TypeScript types
- ├── styles/              # styled-components theme & styles
- ├── public/              # Static assets
- ├── Dockerfile           # Docker image build instructions
- ├── docker-compose.yml   # Docker Compose setup
- ├── .env.local         # Example env variables
- └── README.md`

### License
This project is for educational/demo purposes.
