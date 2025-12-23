export interface Project {
  title: string
  description: string
  videoId: string
}

export const PROJECTS: Project[] = [
  {
    title: "Cloud Infrastructure Dashboard",
    description:
      "Real-time monitoring dashboard for AWS resources with automated alerts and performance metrics visualization.",
    videoId: "0KPCVljqyFE", // Replace with your YouTube video ID
  },
  {
    title: "CI/CD Pipeline Automation",
    description: "Automated deployment pipeline using GitHub Actions and Docker, reducing deployment time by 60%.",
    videoId: "lgOHXiDMmYw", // Replace with your YouTube video ID
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and order tracking.",
    videoId: "sV493NIQoqE", // Replace with your YouTube video ID
  },
  {
    title: "DevOps Toolkit",
    description:
      "Collection of automation scripts and tools for infrastructure provisioning and configuration management.",
    videoId: "4q6nDfTW9Ts", // Replace with your YouTube video ID
  },
]

// Background video for hero section
export const HERO_VIDEO_ID = "dQw4w9WgXcQ" // Replace with your YouTube video ID

// Helper function to get YouTube thumbnail URL
export function getYouTubeThumbnail(videoId: string, quality: "default" | "hq" | "mq" | "sd" | "maxres" = "hq") {
  return `https://img.youtube.com/vi/${videoId}/${quality}default.jpg`
}
