# Android Developer Portfolio Template 📱

A professional, responsive, and **no-build** portfolio template designed specifically for Android Engineers. Built with React (via htm), Tailwind CSS, and standard ES Modules.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Tech](https://img.shields.io/badge/Built%20with-React%20(htm)%20%2B%20Tailwind-06b6d4)
![AI](https://img.shields.io/badge/Built%20with-Google%20AI%20Studio-4285F4)

## ✨ Features

- **🚀 Zero Build Step**: No `npm install`, `webpack`, or `vite` required. It runs directly in the browser using ES Modules and CDNs.
- **📄 JSON Driven**: Manage all your projects and site configurations via simple JSON files (`data.js` and `config.js`).
- **🎨 Multiple Themes**: Comes with 5 built-in color themes (Android Green, Ocean Blue, Berry, Sunset, Midnight).
- **🌗 Dark Mode**: Fully supported dark/light mode with persistent preference.
- **📱 Responsive Design**: Mobile-first architecture using Tailwind CSS.
- **🔍 Filterable Projects**: Filter projects by category or technical tags.

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

### 1. Basic Info & Theme (`config.js`)
Open `config.js` to change the site title, description, social links, and the visual theme.

```javascript
export const siteConfig = {
  // Options: "Smartphone", "Code", "Terminal", "Cpu", "Laptop", "Zap"
  headerIcon: "Code",

  // Options: "android", "ocean", "berry", "sunset", "midnight"
  theme: "ocean" 
};
```

### 2. Adding Projects (`data.js`)
Open `data.js` to add your own projects. The structure is straightforward:

```javascript
{
  id: "unique-id",
  title: "Project Name",
  thumbnail: "url-to-image",
  medias: ["url-to-screenshot-1", "youtube-url"], // Optional gallery (Images or YouTube)
  year: "2024",
  category: "Personal Project",
  tags: ["Kotlin", "Compose"],
  demoUrl: "https://...",
  githubUrl: "https://...",
  description: "...",
  challenges: ["Challenge 1", "Challenge 2"],
  techStack: ["Lib 1", "Lib 2"]
}
```

### 3. Images
Since there is no build step, you can:
1. Create an `assets` folder in the root directory, put your images there, and reference them as `./assets/image.png`.
2. Or use external URLs (like Imgur, AWS S3, or your GitHub repository's raw content URL).

## 🤖 Built with Google AI Studio

This project was crafted with the assistance of **Google AI Studio**. The architecture is intentionally kept simple (ES Modules, No-Build) to make it easy for both humans and AI to read and modify.

**Tips for AI-Assisted Customization:**
If you want to use Gemini or other AI tools to modify this site, the file structure is your best friend.
1.  **Copy Context**: Simply copy the content of `data.js` (for content) or `themes.js` (for colors).
2.  **Prompt**: Ask the AI, *"Here is my data.js, please add a new project with these details..."* or *"Update themes.js to use a purple color scheme."*
3.  **Paste**: Paste the result back. No complex build pipelines means fewer errors when working with AI generated code.

## 🌍 Deployment (GitHub Pages)

This is the easiest way to host your portfolio for free.

1. Go to your repository **Settings**.
2. Navigate to the **Pages** section (on the left sidebar).
3. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4. Select `main` (or `master`) as the branch and `/ (root)` as the folder.
5. Click **Save**.

Wait a minute, and your site will be live!

## 🧩 Project Structure

- `index.html`: The entry point. Imports Tailwind and React via CDN.
- `index.js`: Mounts the React application.
- `App.js`: Main routing logic.
- `config.js`: Global settings and UI text strings.
- `data.js`: Project data.
- `themes.js`: Color palette definitions.
- `components/`: Reusable UI components (Hero, ProjectCard, etc.).
- `context/`: React Context (Theme management).

## 📄 License

This project is open source and available under the [MIT License](LICENSE). Feel free to use it for your personal portfolio!