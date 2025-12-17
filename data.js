
// Project Data Source
// Add new projects directly to this array
export const projects = [
  {
    id: "1",
    title: "ShopWave E-commerce",
    thumbnail: "https://picsum.photos/id/3/800/600",
    medias: [
      "https://picsum.photos/id/3/1200/800",
      "https://picsum.photos/id/60/1200/800",
      "https://www.youtube.com/watch?v=WkWAjtSpl5Y"
    ],
    year: "2023",
    category: "Company Project",
    tags: ["Java", "Retrofit", "Clean Architecture", "Payment Gateway"],
    demoUrl: null, // Internal project
    githubUrl: null,
    description: "Flagship m-commerce application for a mid-sized retail chain. Supports thousands of SKUs, real-time inventory checking, and secure checkout processes.",
    challenges: [
      "Migrating legacy code from AsyncTask to RxJava/Coroutines.",
      "Integrating third-party payment gateways compliant with strict security standards (PCI-DSS).",
      "Handling offline synchronization of shopping carts when connectivity is lost."
    ],
    techStack: ["Java", "Kotlin", "Retrofit2", "RxJava", "Stripe SDK", "Firebase Cloud Messaging"]
  },
  {
    id: "2",
    title: "EcoTrack: Carbon Monitor",
    thumbnail: "https://picsum.photos/id/119/800/600",
    medias: [],
    year: "2024",
    category: "Personal Project",
    tags: ["Kotlin", "Jetpack Compose", "Room DB", "MVVM", "Hybrid"],
    demoUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/example/ecotrack",
    description: "An intuitive Android application designed to help users track their daily carbon footprint based on transportation and dietary habits. The app visualizes data to encourage eco-friendly decisions.",
    challenges: [
      "Implementing complex data visualization charts efficiently in Jetpack Compose.",
      "Optimizing local database queries for real-time carbon metric calculations without UI lag.",
      "Creating custom algorithms to estimate emissions based on fuzzy user input."
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Room Persistence Library", "Hilt", "MPAndroidChart", "Coroutines"]
  },
  {
    id: "3",
    title: "CryptoFlash Alerts",
    thumbnail: "https://picsum.photos/id/45/800/600",
    medias: [
      "https://picsum.photos/id/45/1200/800",
      "https://picsum.photos/id/96/1200/800"
    ],
    year: "2023",
    category: "Personal Project",
    tags: ["Kotlin", "WebSocket", "Real-time"],
    demoUrl: "https://example.com/apk",
    githubUrl: "https://github.com/example/cryptoflash",
    description: "A lightweight real-time cryptocurrency price tracker that streams live market data from the Binance API using WebSockets.",
    challenges: [
      "Managing stable WebSocket connections and handling reconnections gracefully.",
      "Reducing battery consumption caused by continuous background data updates.",
      "Designing an Android Home Screen Widget that updates efficiently."
    ],
    techStack: ["Kotlin", "OkHttp", "WebSocket", "WorkManager", "LiveData"]
  },
  {
    id: "4",
    title: "CityGuide AR",
    thumbnail: "https://picsum.photos/id/214/800/600",
    medias: [
      "https://picsum.photos/id/214/1200/800",
      "https://picsum.photos/id/324/1200/800"
    ],
    year: "2022",
    category: "Company Project",
    tags: ["ARCore", "Location Services", "Google Maps API"],
    demoUrl: "https://play.google.com/store/apps/details?id=example",
    githubUrl: null,
    description: "An augmented reality travel guide that overlays historical information onto real-world landmarks using the camera viewfinder.",
    challenges: [
      "Achieving precise GPS location anchoring for AR objects.",
      "Optimizing 3D model rendering on low-end Android devices to maintain 60fps.",
      "Handling noise in sensor fusion data."
    ],
    techStack: ["Kotlin", "ARCore", "Sceneform", "Google Maps SDK", "SensorManager"]
  },
];

// Blog Data Configuration
export const blogData = {
  // If set, the site will fetch the latest 3 articles from this RSS feed.
  // Example: "https://medium.com/feed/@yourusername" or "https://dev.to/feed/yourusername"
  // If left empty "", it will fallback to the manual 'articles' array below.
  rssUrl: "", 
  
  // URL to your main blog page (e.g., Medium profile, Dev.to profile, or personal blog).
  // If empty, the "Visit My Blog" button will not be displayed.
  blogUrl: "https://medium.com/",

  // Manual articles fallback. Used only if rssUrl is empty.
  articles: [
    {
      title: "Mastering Jetpack Compose: State Management",
      summary: "A deep dive into hoisting state, side-effects, and best practices for managing complex UI states in modern Android development.",
      date: "2024-03-15",
      link: "#"
    },
    {
      title: "Optimizing Android App Startup Time",
      summary: "Practical techniques using Baseline Profiles and Macrobenchmark to reduce cold start times by up to 40%.",
      date: "2024-01-22",
      link: "#"
    },
    {
      title: "Clean Architecture in Kotlin",
      summary: "How to structure your multi-module Android projects for better testability and scalability using Clean Architecture principles.",
      date: "2023-11-05",
      link: "#"
    }
  ]
};

// Resume Data
export const resumeData = {
  resumeUrl: "https://example.com/path-to-your-resume.pdf", // Link to download PDF
  profile: {
    name: "Alex Chen",
    role: "Senior Android Software Engineer",
    location: "Taipei, Taiwan",
    summary: "Passionate Android Developer with 5+ years of experience building high-performance mobile applications. Expert in Kotlin, Jetpack Compose, and modern Android architecture. Committed to writing clean, maintainable code and delivering exceptional user experiences.",
    email: "alex.chen@example.com",
    linkedin: "linkedin.com/in/alexchen",
    github: "github.com/alexchen",
    website: "alexchen.dev"
  },
  skills: [
    {
      category: "Languages",
      items: ["Kotlin", "Java", "Python", "SQL", "Shell Scripting"]
    },
    {
      category: "Android SDK",
      items: ["Jetpack Compose", "Coroutines & Flow", "Dagger/Hilt", "Room", "Retrofit", "WorkManager"]
    },
    {
      category: "Architecture & Design",
      items: ["MVVM", "MVI", "Clean Architecture", "SOLID Principles", "Design Patterns"]
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "Gradle", "CI/CD (GitHub Actions)", "Firebase", "Jira", "Figma"]
    }
  ],
  experience: [
    {
      company: "TechGiant Solutions",
      role: "Senior Android Engineer",
      period: "2022 - Present",
      location: "Taipei, Taiwan",
      description: "Leading the mobile engineering team for the flagship e-commerce application.",
      achievements: [
        "Architected and migrated the main app from Java to 100% Kotlin using Jetpack Compose, reducing boilerplate code by 40%.",
        "Improved app startup time by 35% through baseline profiles and lazy initialization strategies.",
        "Mentored 3 junior developers and introduced CI/CD pipelines using GitHub Actions."
      ]
    },
    {
      company: "AppWorks Startup",
      role: "Android Developer",
      period: "2020 - 2022",
      location: "Taipei, Taiwan",
      description: "Core member of a fast-paced fintech startup building a crypto wallet.",
      achievements: [
        "Implemented biometric authentication and secure key storage using Android Keystore System.",
        "Integrated WebSockets for real-time market data updates with low latency.",
        "Collaborated closely with designers to implement complex custom animations."
      ]
    }
  ],
  education: [
    {
      school: "National Taiwan University",
      degree: "B.S. in Computer Science",
      period: "2016 - 2020",
      location: "Taipei, Taiwan"
    }
  ],
  certificates: [
    {
      title: "Google Associate Android Developer",
      issuer: "Google",
      date: "2021",
      url: "https://developers.google.com/certification/associate-android-developer"
    },
    {
      title: "Certified ScrumMaster® (CSM)",
      issuer: "Scrum Alliance",
      date: "2022",
      url: "https://www.scrumalliance.org/"
    }
  ]
};