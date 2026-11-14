// Edit this file to personalize your site. Replace all example links and career details.
export const site = {
  name: "Your Name",
  role: "Technology Leader · Software Architect · AI Enthusiast",
  tagline: "Engineering scalable solutions. Leading digital transformation.",
  intro: "I connect engineering excellence, thoughtful architecture, and people-first leadership to transform ambitious ideas into resilient products.",
  location: "Bengaluru, India",
  email: "hello@example.com",
  links: { github: "https://github.com", linkedin: "https://linkedin.com" },
  about: "I work at the intersection of architecture, software delivery, cloud platforms, and emerging AI capabilities. My focus is to simplify complex systems and help teams deliver reliable, meaningful outcomes. This is sample copy—replace it with your own story.",
  focus: [
    { title: "Engineering leadership", description: "Building high-trust teams, technical direction, and strong delivery practices." },
    { title: "Cloud & platform architecture", description: "Designing modern, scalable systems across distributed services and cloud environments." },
    { title: "AI transformation", description: "Exploring where intelligent automation delivers measurable value." }
  ],
  skills: ["System design","Azure","AWS","Kubernetes","Microservices","API engineering","Data platforms","AI & LLMs","Technical strategy","Team leadership"],
  experience: [
    { title: "Engineering & Technology Leadership", company: "Add your organization", period: "Current", description: "Describe your leadership responsibilities, scope, and measurable outcomes." },
    { title: "Software Architecture", company: "Add previous organization", period: "Previously", description: "Highlight your architectural contributions and major systems delivered." }
  ],
  projects: [
    { slug:"cloud-platform", category:"PLATFORM ENGINEERING", title:"Modern Cloud Platform", summary:"A sample story about simplifying infrastructure and improving reliability.", details:"Describe the challenge, your approach, the technologies involved, and the measurable impact. Replace this example before publishing it as real work.", tags:["Cloud","Architecture","Kubernetes"] },
    { slug:"data-delivery", category:"DATA & INTEGRATION", title:"Reliable Data Delivery", summary:"An example of resilient API and data delivery design.", details:"Add an anonymized case study that explains the business context, technical decisions, and outcomes.", tags:["APIs","Data","Reliability"] },
    { slug:"ai-workflows", category:"APPLIED AI", title:"Intelligent Workflows", summary:"An example of human-centered automation for complex workflows.", details:"Explain how AI or automation reduces effort, makes teams more effective, and remains responsible.", tags:["AI","Automation","Product"] }
  ],
  certifications: [{name:"Your certification or program",issuer:"Issuing organization",date:"Year"},{name:"Your professional milestone",issuer:"Issuing organization",date:"Year"}],
  posts: [
    {slug:"building-systems-that-scale", category:"ENGINEERING",title:"Building Systems That Scale",date:"Sample article",excerpt:"A short reflection on clarity, reliability, and thoughtful engineering.",body:"Scale starts with clear constraints and a shared understanding of the problem. Choose simple building blocks, make ownership explicit, invest in observability, and treat reliability as a product feature."},
    {slug:"leadership-in-technology",category:"LEADERSHIP",title:"Leadership in Technology",date:"Sample article",excerpt:"A few principles for enabling people to do their best work.",body:"Good leadership creates context, removes obstacles, and encourages sound judgment. The goal is not to have every answer but to help teams arrive at better ones."}
  ]
} as const;
