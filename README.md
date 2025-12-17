# Android Developer Portfolio Template 📱

A professional, responsive, and **no-build** portfolio template designed specifically for Android Engineers. Built with React (via htm), Tailwind CSS, and standard ES Modules.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Tech](https://img.shields.io/badge/Built%20with-React%20(htm)%20%2B%20Tailwind-06b6d4)
![AI](https://img.shields.io/badge/Built%20with-Google%20AI%20Studio-4285F4)

## ✨ Features

- **🚀 Zero Build Step**: No `npm install`, `webpack`, or `vite` required. It runs directly in the browser using ES Modules and CDNs.
- **📄 JSON Driven**: Manage all content (Projects, Resume, Blog, Config) via simple JSON files (`data.js` and `config.js`).
- **💼 Professional Resume**: A dedicated, printable resume page with Experience, Education, and Skills sections.
- **📰 Blog Integration**: Display your latest articles automatically via **RSS Feed** or manage them manually.
- **🎨 Multiple Themes**: Comes with 5 built-in color themes (Android Green, Ocean Blue, Berry, Sunset, Midnight).
- **🌗 Dark Mode**: Fully supported dark/light mode with persistent preference.
- **📱 Responsive Design**: Mobile-first architecture using Tailwind CSS.

## 🚀 Quick Start

### 1. Use this Template
Click the **"Use this template"** button at the top of this repository to create a new repository in your GitHub account.

### 2. Local Development
Because this project uses ES Modules, you cannot simply double-click `index.html` to open it (due to CORS policies). You need a local static server.

**Using VS Code:**
1. Install the "Live Server" extension.
2. Right-click `index.html` and select "Open with Live Server".

**Using Python:**
```bash
# Python 3
python -m http.server 8000
```
Then open `http://localhost:8000`.

## 🛠 Customization

All content is managed in the root directory files. You do not need to touch the `components/` folder unless you want to change the layout logic.

### 1. Basic Info & Theme (`config.js`)
Open `config.js` to change the site title, UI strings, social links, and the visual theme.

```javascript
export const siteConfig = {
  // Options: "Smartphone", "Code", "Terminal", "Cpu", "Laptop", "Zap"
  headerIcon: "Smartphone",

  // Options: "android", "ocean", "berry", "sunset", "midnight"
  theme: "android" 
};
```

### 2. Projects (`data.js`)
Find the `projects` array in `data.js`. Add your app details, screenshots, and tech stack here.

```javascript
{
  id: "1",
  title: "My Awesome App",
  thumbnail: "https://...",
  medias: [ "https://...", "https://youtube.com/..." ], // Supports Images and YouTube
  year: "2024",
  category: "Personal Project",
  tags: ["Kotlin", "Compose"],
  description: "...",
  challenges: ["...", "..."],
  techStack: ["Kotlin", "Retrofit", "Hilt"]
}
```

### 3. Resume (`data.js`)
Find the `resumeData` object in `data.js`. You can configure:
- **Profile**: Name, summary, contact info.
- **Skills**: Categorized skills with descriptions.
- **Experience**: Work history with achievements.
- **Education & Certificates**.
- **Resume PDF Link**: URL to download your actual PDF file.

### 4. Blog / Articles (`data.js`)
You have two options for the "Technical Articles" section:

**Option A: Automatic RSS Feed**
Set your RSS feed URL (e.g., Medium, Dev.to). The site uses `rss2json` to fetch the latest 3 posts.
```javascript
export const blogData = {
  rssUrl: "https://medium.com/feed/@yourusername", 
  // ...
};
```

**Option B: Manual Entry**
Leave `rssUrl` empty and fill the `articles` array manually.
```javascript
export const blogData = {
  rssUrl: "", 
  articles: [
    { title: "My Article", summary: "...", link: "...", date: "2024-01-01" }
  ]
};
```

## 🌍 Deployment (GitHub Pages)

This is the easiest way to host your portfolio for free.

1. Go to your repository **Settings**.
2. Navigate to the **Pages** section (on the left sidebar).
3. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4. Select `main` (or `master`) as the branch and `/ (root)` as the folder.
5. Click **Save**.

Wait a minute, and your site will be live!

## 🧩 Project Structure

- `index.html`: Entry point. Imports Tailwind and React via CDN.
- `index.js`: Mounts the React application and handles Theme CSS variables.
- `App.js`: Main routing logic.
- `config.js`: Global settings (Theme, UI Strings).
- `data.js`: **MAIN CONTENT SOURCE** (Projects, Resume, Blog).
- `themes.js`: Color palette definitions.
- `components/`: Reusable UI components.
- `context/`: React Context (Theme management).

## 📄 License

This project is open source and available under the [MIT License](LICENSE). Feel free to use it for your personal portfolio!