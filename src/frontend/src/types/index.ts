export interface Project {
  id: string;
  title: string;
  category: string;
  briefDescription: string;
  fullDescription: string;
  imageUrl: string;
  client: string;
  techStack: string[];
  outcomes: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  serviceType: string;
  timestamp: bigint;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  avatar: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}
