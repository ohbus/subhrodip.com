import { AppContent } from '../models/content.model';

export const EN_CONTENT: AppContent = {
  common: {
    name: 'Subhrodip Mohanta',
    brand: 'Subhrodip',
    roles: [
      'Senior Software Engineer',
      'Cloud Architecture Consultant',
      'Distributed Systems Specialist'
    ],
    search: 'Search',
    mic: 'mic',
    lens: 'center_focus_strong',
    apps: 'apps',
    settings: 'settings',
    more_vert: 'more_vert',
    expand_more: 'expand_more',
    chevron_right: 'chevron_right',
    next: 'Next'
  },
  home: {
    placeholder: 'Inquiry: Experience, Engineering, Architecture...',
    searchBtn: 'Review Credentials',
    curiousBtn: 'I\'m Feeling Curious',
    footerText: 'Talk is cheap,',
    footerLink: 'show me the code!'
  },
  navigation: {
    all: 'All',
    experience: 'Experience',
    sde: 'Projects & SDE',
    cde: 'DevOps & Cloud',
    education: 'Education',
    skills: 'Skills',
    contact: 'Contact'
  },
  footer: {
    location: 'Earth',
    privacy: 'Privacy',
    terms: 'Terms',
    contact: 'Contact'
  },
  results: {
    metrics: {
      about: 'About',
      results: 'results',
      seconds: 'seconds',
      count: '14,300,000',
      time: '0.42'
    },
    main: {
      title: 'Senior Software Engineer & Cloud Consultant - Subhrodip Mohanta',
      breadcrumb: 'https://subhrodip.com',
      snippet: 'Explore the professional trajectory of <strong>Subhrodip Mohanta</strong>. Specializing in highly available backend systems, cloud-native transformations, and scalable microservices.'
    },
    github: {
      label: 'GitHub',
      title: 'Engineering Portfolio and Open Source Contributions',
      breadcrumb: 'https://github.com › subhrodip',
      snippet: 'Advanced implementations spanning Java, Python, and TypeScript. Focus on <strong>enterprise design patterns</strong>, distributed concurrency, and automated infrastructure.',
      links: {
        viewProject: 'Featured Projects',
        viewDesc: 'Technical deep-dives and build analysis.',
        repositories: 'GitHub Repositories',
        repoDesc: 'Public source code and architectural documentation.'
      }
    },
    peopleAlsoAsk: {
      title: 'People also ask',
      study: 'Where did Subhrodip Mohanta study?',
      tech: 'What technologies does Subhrodip Mohanta use?'
    },
    knowledgePanel: {
      role: 'Senior Software Engineer',
      resume: 'Download Portfolio PDF',
      snippet: 'Engineer with a focus on high-integrity software and robust system design. Specialized in building secure, distributed backend infrastructures.',
      profiles: 'Professional Profiles'
    }
  },
  experience: {
    metrics: 'About 6 major roles (6+ years)',
    items: [
      {
        role: 'Senior Software Engineer',
        company: 'ChargePoint',
        companyUrl: 'https://www.chargepoint.com/',
        logoUrl: 'https://www.google.com/s2/favicons?sz=128&domain=chargepoint.com',
        location: 'Radstadt, Austria',
        duration: 'Dec 2024 – Present',
        breadcrumb: 'https://chargepoint.com › engineering',
        highlights: [
          'Owned and scaled station-to-cloud communication platform leveraging OCPP-based distributed services handling 1.3M+ EV charging ports.',
          'Led re-architecture of the fault management domain using CQRS and introduced service-level metrics.',
          'Drove infrastructure cost optimisation reducing AWS RDS spend by $85K/year.'
        ]
      },
      {
        role: 'Software Engineer',
        company: 'Denuvo',
        companyUrl: 'https://irdeto.com/denuvo/',
        logoUrl: 'https://www.google.com/s2/favicons?sz=128&domain=irdeto.com',
        location: 'Salzburg, Austria',
        duration: 'Sep 2023 – Aug 2024',
        breadcrumb: 'https://denuvo.com › engineering',
        highlights: [
          'Implemented a CQRS-based architecture across distributed services, handling high-throughput mobile client traffic of 200K rps.',
          'Built greenfield cloud-native infrastructure deploying services on AWS ECS with Kafka-based event streaming.',
          'Reduced infrastructure cost from $20K/month to $4.8K/month by tuning AWS ECS workloads.'
        ]
      },
      {
        role: 'Software Engineer',
        company: 'Irdeto',
        companyUrl: 'https://irdeto.com/',
        logoUrl: 'https://www.google.com/s2/favicons?sz=128&domain=irdeto.com',
        location: 'New Delhi, India',
        duration: 'Jul 2021 – Aug 2023',
        breadcrumb: 'https://irdeto.com › engineering',
        highlights: [
          'Reduced system load by 73% by building asynchronous microservices for file processing.',
          'Accelerated UI platform delivery by 39% by developing reusable Angular-based application frameworks.',
          'Lead End-to-End Design and Development of Trending Day features on Irdeto Middleware.'
        ]
      },
      {
        role: 'Project Engineer',
        company: 'Wipro',
        companyUrl: 'https://www.wipro.com/',
        logoUrl: 'https://www.google.com/s2/favicons?sz=128&domain=wipro.com',
        location: 'Bengaluru, India',
        duration: 'Sep 2020 – Jul 2021',
        breadcrumb: 'https://wipro.com › engineering',
        highlights: [
          'Eased integration P99 latency by 45% by leading API orchestration using Apache Camel and JBoss Fuse.',
          'Improved response time by 23% by implementing ESB-based middleware.',
          'Leveraged Apache CXF to integrate SOAP and REST services for high-volume telco workloads.'
        ]
      },
      {
        role: 'Software Developer',
        company: 'GreenField Software',
        companyUrl: 'https://greenfieldsoft.com/',
        logoUrl: 'https://www.google.com/s2/favicons?sz=128&domain=greenfieldsoft.com',
        location: 'Kolkata, India',
        duration: 'Aug 2019 – Sep 2020',
        breadcrumb: 'https://greenfieldsoft.com › engineering',
        highlights: [
          'Reduced infrastructure cost by containerising applications with Docker, improving scalability and optimal resource utilisation.',
          'Increased sprint velocity by 43% by driving Agile practices as Scrum Master, improving delivery predictability for customers.',
          'Lessened P90 query latency from 10.8s to 16ms by optimising SQL queries and indexing, enhancing dashboard experience.'
        ]
      },
      {
        role: 'Software Developer Intern',
        company: 'GreenField Software',
        companyUrl: 'https://greenfieldsoft.com/',
        logoUrl: 'https://www.google.com/s2/favicons?sz=128&domain=greenfieldsoft.com',
        location: 'Kolkata, India',
        duration: 'Aug 2019 – Dec 2019',
        breadcrumb: 'https://greenfieldsoft.com › engineering',
        highlights: [
          'Formalized Multi-Tenant DCIM deployment, improving scalability by 38% and enabling efficient management.',
          'Optimized SQL queries, reducing average fetch time from 10s to 0.00001s and significantly enhancing application performance.',
          'Migrated every existing project from SVN to Git using an on-premises server and mirrors for Backup.'
        ]
      }
    ],
    knowledgePanel: {
      title: 'Professional Experience',
      subtitle: 'Career Trajectory & Impact',
      downloadBtn: 'Download Full Resume',
      linkedinBtn: 'View on LinkedIn'
    },
    related: {
      title: 'Related Searches',
      items: ['Backend Architecture', 'Cloud Migration', 'Microservices Scaling']
    }
  },
  sde: {
    metrics: 'About 5 results (0.24 seconds)',
    blog: {
      label: "Subhrodip's Blog",
      title: 'Beyond Academics: Bridging the Theoretical Gap in Enterprise Engineering',
      breadcrumb: 'https://subhrodip.com › insights',
      snippet: 'A strategic analysis of the modern engineering learning curve. Moving beyond academic syntax to master the complexities of industrial-grade distributed architectures.'
    },
    projects: {
      label: 'GitHub',
      patterns: {
        title: 'Enterprise Java Design Patterns Architecture',
        breadcrumb: 'https://github.com › ohbus › java-design-patterns',
        snippet: 'Strategic implementation of creational, structural, and behavioral patterns. Optimized for <strong>systemic scalability</strong> and long-term maintainability.'
      },
      banking: {
        title: 'High-Throughput Consumer Banking Infrastructure',
        breadcrumb: 'https://github.com › ohbus › retail-banking',
        snippet: 'Comprehensive backend engineering for retail banking operations. Handling high-concurrency transactions with ACID compliance and robust auditing.'
      },
      twitter: {
        title: 'Distributed Social Graph & Fan-out Service',
        breadcrumb: 'https://github.com › ohbus › twitter-backend-java',
        snippet: 'Scalable social networking backend engineered for real-time data distribution and low-latency feed aggregation.'
      }
    },
    related: {
      title: 'Inspirations',
      items: ['Dennis Ritchie', 'Linus Torvalds', 'Alan Turing']
    },
    knowledgePanel: {
      quote: '"If debugging is process of removing bugs..."',
      snippet: 'Centralized index of technical implementations, showcasing a commitment to collaborative, open-source engineering.',
      githubBtn: 'Review Engineering Source'
    }
  },
  cde: {
    metrics: 'About 4 results (0.31 seconds)',
    definition: {
      label: 'Dictionary',
      title: 'DevOps & Cloud Computing Definition',
      breadcrumb: 'https://dictionary.com › devops',
      snippet: 'DevOps is a set of practices that combines software development and IT operations. Cloud computing is the on-demand availability of system resources.'
    },
    projects: {
      label: 'GitHub',
      aws: {
        title: 'Spring Cloud AWS Enterprise Integration',
        breadcrumb: 'https://github.com › ohbus › spring-cloud-aws',
        snippet: 'Official contribution to the Spring Cloud ecosystem. Seamless integration of the Spring Framework with AWS for cloud-native Java applications.'
      },
      sclr: {
        title: 'sclr.ac Distributed URL Infrastructure',
        breadcrumb: 'https://github.com › ohbus › sclr.ac-backend',
        snippet: 'High-performance redirection service engineered for sub-millisecond latency and horizontal throughput scaling.'
      },
      lunch: {
        title: 'Enterprise Reservation & Resource Management',
        breadcrumb: 'https://github.com › ohbus › lunch-booking-backend',
        snippet: 'Full-stack resource booking engine with real-time administrative dashboards and automated notification pipelines.'
      }
    },
    related: {
      title: 'People to follow',
      items: ['Werner Vogels', 'Steve Herrod', 'Marc Benioff']
    },
    knowledgePanel: {
      role: 'Cloud Infrastructure Consultant',
      snippet: 'Strategic advisor for <strong>Cloud-Native Transformation</strong> and Infrastructure Resilience. Engineering automated, secure, and self-healing environments.',
      contactBtn: 'Request Consultation',
      quote: 'Things always had to be in a production-ready state.'
    }
  },
  education: {
    metrics: 'About 3 results (16 years)',
    items: {
      btech: {
        title: 'Bachelor of Technology from UEM Kolkata',
        institution: 'University of Engineering & Management',
        breadcrumb: 'https://uem.edu.in › uem-kolkata',
        snippet: 'Completed Computer Science and Engineering degree for undergraduate studies. <br> <strong>CGPA:</strong> 8.75 | <strong>Marks:</strong> 80% <br> <span class="text-outline">2016 - 2020</span>'
      },
      isc: {
        title: 'ISC (CISCE) from AGCS Park Street',
        institution: 'The Assembly of God Church School',
        breadcrumb: 'http://agcschools.edu.in › park-street',
        snippet: 'Completed High School with Physics, Chemistry, Maths and Computer Applications. <br> <strong>Marks:</strong> 69.17% <br> <span class="text-outline">2016</span>'
      },
      icse: {
        title: 'ICSE (CISCE) from AGCS Park Street',
        institution: 'The Assembly of God Church School',
        breadcrumb: 'http://agcschools.edu.in › park-street',
        snippet: 'Completed 10 years of schooling and appeared for first public examination. <br> <strong>Marks:</strong> 74.67% <br> <span class="text-outline">2014</span>'
      }
    },
    knowledgePanel: {
      title: 'Education',
      subtitle: '16 Years of Formal Education',
      degree: 'B.Tech in CSE',
      univ: 'UEM Kolkata',
      grad: '2020'
    }
  },
  skills: {
    metrics: 'About 2 bundled Skills (6 years)',
    core: {
      label: 'Developer Core',
      title: 'Programming Languages - Subhrodip Mohanta',
      breadcrumb: 'https://subhrodip.com › skills › programming'
    },
    frameworks: {
      label: 'Developer Frameworks',
      title: 'Technologies and Methodologies',
      breadcrumb: 'https://subhrodip.com › skills › technologies'
    },
    knowledgePanel: {
      title: 'Skills Overview',
      subtitle: 'Technical Expertise & Proficiencies'
    }
  },
  contact: {
    metrics: 'About 1 result (0.12 seconds)',
    title: 'Get in touch with Subhrodip',
    breadcrumb: 'https://subhrodip.com › contact',
    form: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      submit: 'Submit Message'
    },
    knowledgePanel: {
      title: 'Contact Info',
      subtitle: 'Reach out directly'
    }
  }
};
