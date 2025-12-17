
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