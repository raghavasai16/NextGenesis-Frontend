# Reboot Hyderabad Hackathon

# NextGenesis FrontEnd

## Overview
NextGenesis FrontEnd is a modern, AI-powered HR onboarding platform designed to streamline and gamify the employee induction process. This frontend application provides an interactive, user-friendly interface for new hires, HR managers, and reviewers, leveraging smart forms, document upload, AI validation, and real-time notifications.

## Features
- Adaptive onboarding forms
- AI-based document validation
- Gamified induction experience
- HR review and background verification
- Offer letter generation
- Real-time notifications
- Responsive and accessible UI

## Tech Stack
- **Frontend Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Containerization:** Docker, Nginx
- **Cloud Deployment:** Google Cloud Run

## Project Structure
```
NextGenesis-FrontEnd/
├── src/
│   ├── components/         # Reusable UI components
│   ├── contexts/           # React context providers
│   ├── pages/              # Main application pages
│   ├── utils/              # Utility functions
│   ├── App.tsx             # App entry point
│   └── main.tsx            # Vite main entry
├── public/                 # Static assets
├── Dockerfile              # Docker build instructions
├── nginx.conf              # Nginx configuration for Cloud Run
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## Local Development
1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
3. **Build for production:**
   ```sh
   npm run build
   ```
4. **Preview production build:**
   ```sh
   npm run preview
   ```

## Dockerization
1. **Build the app:**
   ```sh
   npm run build
   ```
2. **Build the Docker image:**
   ```sh
   docker build -t my-nextgenesis-frontend .
   ```
3. **Run locally with Docker:**
   ```sh
   docker run -p 8080:8080 my-nextgenesis-frontend
   ```
   Access at [http://localhost:8080](http://localhost:8080)

## Google Cloud Run Deployment
### Prerequisites
- Google Cloud account with billing enabled
- `gcloud` CLI and Docker installed
- Project and Container Registry set up

### Steps
1. **Authenticate Docker with GCP:**
   ```sh
   gcloud auth configure-docker
   ```
2. **Tag and push the Docker image:**
   ```sh
   docker tag my-nextgenesis-frontend gcr.io/YOUR_PROJECT_ID/my-nextgenesis-frontend
   docker push gcr.io/YOUR_PROJECT_ID/my-nextgenesis-frontend
   ```
3. **Deploy to Cloud Run:**
   ```sh
   gcloud run deploy my-nextgenesis-frontend \
     --image gcr.io/YOUR_PROJECT_ID/my-nextgenesis-frontend \
     --platform managed \
     --region YOUR_REGION \
     --allow-unauthenticated
   ```
   Replace `YOUR_PROJECT_ID` and `YOUR_REGION` accordingly.

4. **Access your app:**
   Cloud Run will provide a public URL after deployment.

## Nginx Configuration for Cloud Run
- The app uses a custom `nginx.conf` to ensure Nginx listens on port 8080 (required by Cloud Run) and supports SPA routing for React Router.


---

*This project was built for demonstration and evaluation purposes. For any queries or feedback, please reach out via the contact above.* 
