import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    data: { 
      title: 'Subhrodip Mohanta | Senior Software Engineer | Cloud Architect', 
      description: 'Search the portfolio of Subhrodip Mohanta. Expert in Senior Software Engineering, Cloud Architecture, and Distributed Systems. Explore technical case studies, DevOps implementations, and scalable backend solutions.',
      keywords: 'Subhrodip Mohanta, Senior Software Engineer, Backend Developer, Cloud Architect, DevOps Engineer, Java Design Patterns, Distributed Systems, AWS, Kubernetes, Microservices Architecture'
    } 
  },
  { 
    path: 'search', 
    loadComponent: () => import('./components/results/results').then(m => m.ResultsComponent), 
    data: { 
      title: 'Search Results | Subhrodip Mohanta', 
      description: 'Search results for Subhrodip Mohanta. Discover expertise in backend engineering, cloud architecture, and distributed systems.',
      keywords: 'Subhrodip Mohanta search, backend engineer results, cloud consultant profile'
    } 
  },
  { 
    path: 'sde', 
    loadComponent: () => import('./components/sde/sde').then(m => m.SdeComponent), 
    data: { 
      title: 'Senior Software Engineering Projects | Subhrodip Mohanta', 
      description: 'Showcase of enterprise-grade software engineering projects. Specialized in Java design patterns, microservices architecture, and scalable backend infrastructure.',
      keywords: 'SDE Projects, Java Design Patterns, Backend Architecture, Microservices, Scalable Systems, Subhrodip Mohanta Projects'
    } 
  },
  { 
    path: 'cde', 
    loadComponent: () => import('./components/cde/cde').then(m => m.CdeComponent), 
    data: { 
      title: 'DevOps & Cloud Architecture | Subhrodip Mohanta', 
      description: 'Cloud infrastructure and DevOps consultancy. Expertise in AWS, Kubernetes, Terraform, and high-availability systems transformation.',
      keywords: 'DevOps Consultant, Cloud Architect, AWS Expert, Kubernetes Orchestration, Infrastructure as Code, Terraform, Cloud-Native'
    } 
  },
  { 
    path: 'education', 
    loadComponent: () => import('./components/education/education').then(m => m.EducationComponent), 
    data: { 
      title: 'Education & Academic Background | Subhrodip Mohanta', 
      description: 'Academic journey of Subhrodip Mohanta. B.Tech in Computer Science and Engineering from UEM Kolkata with honors.',
      keywords: 'UEM Kolkata, B.Tech CSE, Subhrodip Mohanta Education, Computer Science Degree'
    } 
  },
  { 
    path: 'skills', 
    loadComponent: () => import('./components/skills/skills').then(m => m.SkillsComponent), 
    data: { 
      title: 'Technical Skills & Core Competencies | Subhrodip Mohanta', 
      description: 'Comprehensive overview of technical skills: Java, Python, Go, Spring Boot, AWS, Kubernetes, and Distributed Systems architecture.',
      keywords: 'Java, Python, Go, AWS, Kubernetes, Spring Boot, Microservices, SQL, NoSQL, DevOps Skills, Software Engineering Competencies'
    } 
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./components/contact/contact').then(m => m.ContactComponent), 
    data: { 
      title: 'Contact Subhrodip Mohanta | Consultation & Collaboration', 
      description: 'Get in touch with Subhrodip Mohanta for software engineering roles, cloud consultancy, or technical collaborations.',
      keywords: 'Contact Subhrodip Mohanta, Hire Software Engineer, Cloud Consultant Contact'
    } 
  },
  { path: 'go/:slug', loadComponent: () => import('./components/redirect/redirect').then(m => m.RedirectComponent), data: { title: 'Redirecting... | Subhrodip Mohanta', description: 'Redirecting to a specific resource.' } },
  { path: '**', redirectTo: '' }
];
