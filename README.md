# Digital Signage Dashboard

A simple Next.js dashboard to manage digital signage content for buses. Users can add, edit, and delete content, including text, images, or videos, and schedule them for display.

# Features
* Dashboard with content list (title, type, schedule).
* Add Content form with title, type, content/file upload, and schedule time.
* Edit existing content on a separate page.
* Delete content with confirmation.
* Clean UI styled with Bootstrap.
* Mock API routes (/api/content) using local JSON/state.
* Uploaded images/videos stored as Base64 for preview.

# Deployment
* Live demo: https://evide-5tda.vercel.app

# Installation & Run
1. Clone the repo:

    git clone [your-repo-url]
  
    cd [repo-folder]
  
2. Install dependencies:

    npm install
  
    or
   
    pnpm install
  
4. Run the development server:
   
    npm run dev
  
     or
   
    pnpm dev
  
6. Open http://localhost:3000 to view the dashboard.

# Notes
* All data is stored in local state for demonstration purposes.
* The most challenging part was handling file uploads and Base64 conversion for images/videos.

# Future Improvements / Bonus Features
* Filter content by type (text, image, video).
* Connect to a real backend or database for persistent storage.
* Add pagination or search to the content list.
