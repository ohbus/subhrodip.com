import { AppContent } from '../models/content.model';

export const DE_CONTENT: AppContent = {
  common: {
    name: 'Subhrodip Mohanta',
    brand: 'Subhrodip',
    roles: [
      'Senior Software Engineer',
      'Cloud Architecture Consultant',
      'Distributed Systems Specialist'
    ],
    search: 'Suche',
    mic: 'mic',
    lens: 'center_focus_strong',
    apps: 'apps',
    settings: 'settings',
    more_vert: 'more_vert',
    expand_more: 'expand_more',
    chevron_right: 'chevron_right',
    next: 'Weiter'
  },
  home: {
    placeholder: 'Anfrage: Erfahrung, Engineering, Architektur...',
    searchBtn: 'Referenzen prüfen',
    curiousBtn: 'Auf gut Glück',
    footerText: 'Talk is cheap,',
    footerLink: 'show me the code!'
  },
  navigation: {
    all: 'Alle',
    experience: 'Erfahrung',
    sde: 'Projekte & SDE',
    cde: 'DevOps & Cloud',
    education: 'Bildung',
    skills: 'Fähigkeiten',
    contact: 'Kontakt'
  },
  footer: {
    location: 'Erde',
    privacy: 'Datenschutz',
    terms: 'Bedingungen',
    contact: 'Kontakt'
  },
  results: {
    metrics: {
      about: 'Ungefähr',
      results: 'Ergebnisse',
      seconds: 'Sekunden',
      count: '14.300.000',
      time: '0,42'
    },
    main: {
      title: 'Senior Software Engineer & Cloud Consultant - Subhrodip Mohanta',
      breadcrumb: 'https://subhrodip.com',
      snippet: 'Erkunden Sie den beruflichen Werdegang von <strong>Subhrodip Mohanta</strong>. Spezialisiert auf hochverfügbare Backend-Systeme, Cloud-Native-Transformationen und skalierbare Microservices.'
    },
    github: {
      label: 'GitHub',
      title: 'Engineering-Portfolio und Open-Source-Beiträge',
      breadcrumb: 'https://github.com › ohbus',
      snippet: 'Fortgeschrittene Implementierungen in Java, Python und TypeScript. Fokus auf <strong>Enterprise Design Patterns</strong>, verteilte Nebenläufigkeit und automatisierte Infrastruktur.',
      links: {
        viewProject: 'Vorgestellte Projekte',
        viewDesc: 'Technische Deep-Dives und Build-Analysen.',
        repositories: 'GitHub Repositories',
        repoDesc: 'Öffentlicher Quellcode und Architekturdokumentation.'
      }
    },
    peopleAlsoAsk: {
      title: 'Nutzer fragen auch',
      items: [
        { label: 'Wo hat Subhrodip Mohanta studiert?', routerLink: '/education' },
        { label: 'Welche Technologien nutzt Subhrodip Mohanta?', routerLink: '/skills' }
      ]
    },
    recommendations: {
      title: 'Empfehlungen',
      items: [
        {
          name: 'Christoph Pölzleitner',
          role: 'Staff Software Engineer',
          text: 'I had the honor of working closely with Subhro in a team... he is an elite-level developer. Subhro played a truly crucial role in our most mission-critical area: connecting our charging stations to the Cloud system... He’s a cost-saving, load-optimizing powerhouse and a great teammate. Highly recommended!',
          avatarUrl: 'https://www.google.com/s2/favicons?sz=128&domain=linkedin.com',
          linkedinUrl: 'https://www.linkedin.com/in/christoph-p%C3%B6lzleitner-369814b3/'
        },
        {
          name: 'Ilkka Seppälä',
          role: 'Lead Expert @ Technical Project Management',
          text: 'I\'ve had the pleasure to collaborate with Subhrodip Mohanta on open-source projects, including Java Design Patterns. He\'s technically competent with software architectures, Java technologies, and various DevOps tools. I think he\'s an asset for any software project and warmly recommend him.',
          avatarUrl: 'https://www.google.com/s2/favicons?sz=128&domain=linkedin.com',
          linkedinUrl: 'https://www.linkedin.com/in/ilkkaseppala/'
        },
        {
          name: 'Gilles Gravier',
          role: 'Corporate Strategy Advisor',
          text: 'Subhrodip is a super dynamic person. He moves, drives, aims to get things done and gets there. You want him working with you on your project. He groks open source and is a great asset in your team. Working with him is always great!',
          avatarUrl: 'https://www.google.com/s2/favicons?sz=128&domain=linkedin.com',
          linkedinUrl: 'https://www.linkedin.com/in/gillesgravier/'
        },
        {
          name: 'Parikshit( Pari ) Bhaduri',
          role: 'IT-Führungskraft (Ehemaliger Manager)',
          text: 'I recruited Subhrodip as an intern and then he graduated into an employee. I noticed his keen enthusiasm and desire to pursue new technologies... he is a problem solver and leaves no stone unturned in troubleshooting. His motivation and ability to grasp new technologies makes him an asset for any team.',
          avatarUrl: 'https://www.google.com/s2/favicons?sz=128&domain=linkedin.com',
          linkedinUrl: 'https://www.linkedin.com/in/pbhaduri/'
        },
        {
          name: 'Pavana Bandaru',
          role: 'Data Platform Owner @ PostNL',
          text: 'Subhrodip is always keen on details that help the team to collaborate better and improve the processes. His way of working always gives the opportunity to build and produce quality work which enables the team to work further.',
          avatarUrl: 'https://www.google.com/s2/favicons?sz=128&domain=linkedin.com',
          linkedinUrl: 'https://www.linkedin.com/in/pavanabandaru/'
        }
      ]
    },
    knowledgePanel: {
      role: 'Senior Software Engineer',
      resume: 'Portfolio-PDF herunterladen',
      snippet: 'Ingenieur mit Fokus auf Integrität in der Softwareentwicklung und robustes Systemdesign. Spezialisiert auf den Aufbau sicherer, verteilter Backend-Infrastrukturen.',
      profiles: 'Berufliche Profile'
    }
  },
  experience: {
    metrics: 'Etwa 6 Hauptrollen (6+ Jahre)',
    items: [
      {
        role: 'Senior Software Engineer',
        company: 'ChargePoint',
        companyUrl: 'https://www.chargepoint.com/',
        logoUrl: 'https://www.google.com/s2/favicons?sz=128&domain=chargepoint.com',
        location: 'Radstadt, Österreich',
        duration: 'Dez 2024 – Heute',
        breadcrumb: 'https://chargepoint.com › engineering',
        highlights: [
          'Verantwortung für und Skalierung der Station-to-Cloud Kommunikationsplattform unter Verwendung von OCPP-basierten verteilten Diensten für 1,3M+ EV-Ladepunkte.',
          'Leitung der Re-Architektur des Fault-Management-Bereichs mittels CQRS und Einführung von Metriken auf Service-Ebene.',
          'Optimierung der Infrastrukturkosten durch Reduzierung der AWS RDS-Ausgaben um 85.000 $/Jahr.'
        ]
      },
      {
        role: 'Software Engineer',
        company: 'Denuvo',
        companyUrl: 'https://irdeto.com/video-games/',
        logoUrl: 'https://www.google.com/s2/favicons?sz=128&domain=irdeto.com',
        location: 'Salzburg, Österreich',
        duration: 'Sep 2023 – Aug 2024',
        breadcrumb: 'https://irdeto.com/video-games/ › engineering',
        highlights: [
          'Implementierung einer CQRS-basierten Architektur in verteilten Diensten für ein hohes mobiles Client-Verkehrsaufkommen von 200.000 rps.',
          'Aufbau einer Cloud-Native-Infrastruktur mit Bereitstellung von Diensten auf AWS ECS und Kafka-basiertem Event-Streaming.',
          'Reduzierung der Infrastrukturkosten von 20.000 $/Monat auf 4.800 $/Monat durch Optimierung von AWS ECS-Workloads.'
        ]
      },
      {
        role: 'Software Engineer',
        company: 'Irdeto',
        companyUrl: 'https://irdeto.com/',
        logoUrl: 'https://www.google.com/s2/favicons?sz=128&domain=irdeto.com',
        location: 'Neu-Delhi, Indien',
        duration: 'Jul 2021 – Aug 2023',
        breadcrumb: 'https://irdeto.com › engineering',
        highlights: [
          'Reduzierung der Systemlast um 73% durch Entwicklung asynchroner Microservices zur Dateiverarbeitung.',
          'Beschleunigung der UI-Bereitstellung um 39% durch Entwicklung wiederverwendbarer Angular-Frameworks.',
          'Leitung des End-to-End Designs und der Entwicklung von Trending Day Features auf der Irdeto Middleware.'
        ]
      },
      {
        role: 'Project Engineer',
        company: 'Wipro',
        companyUrl: 'https://www.wipro.com/',
        logoUrl: 'https://www.google.com/s2/favicons?sz=128&domain=wipro.com',
        location: 'Bengaluru, Indien',
        duration: 'Sep 2020 – Jul 2021',
        breadcrumb: 'https://wipro.com › engineering',
        highlights: [
          'Senkung der P99-Integrationslatenz um 45% durch Leitung der API-Orchestrierung mit Apache Camel und JBoss Fuse.',
          'Verbesserung der Antwortzeit um 23% durch Implementierung einer ESB-basierten Middleware.',
          'Nutzung von Apache CXF zur Integration von SOAP- und REST-Diensten für hohe Telco-Arbeitslasten.'
        ]
      },
      {
        role: 'Software Developer',
        company: 'GreenField Software',
        companyUrl: 'https://greenfieldsoft.com/',
        logoUrl: 'https://www.google.com/s2/favicons?sz=128&domain=greenfieldsoft.com',
        location: 'Kalkutta, Indien',
        duration: 'Aug 2019 – Sep 2020',
        breadcrumb: 'https://greenfieldsoft.com › engineering',
        highlights: [
          'Reduzierung der Infrastrukturkosten durch Containerisierung mit Docker, Verbesserung der Skalierbarkeit und Ressourcennutzung.',
          'Steigerung der Sprint-Geschwindigkeit um 43% durch Einführung agiler Praktiken als Scrum Master.',
          'Senkung der P90-Abfragelatenz von 10,8s auf 16ms durch SQL-Optimierung und Indexierung.'
        ]
      },
      {
        role: 'Software Developer Intern',
        company: 'GreenField Software',
        companyUrl: 'https://greenfieldsoft.com/',
        logoUrl: 'https://www.google.com/s2/favicons?sz=128&domain=greenfieldsoft.com',
        location: 'Kalkutta, Indien',
        duration: 'Aug 2019 – Dez 2019',
        breadcrumb: 'https://greenfieldsoft.com › engineering',
        highlights: [
          'Formalisierung des Multi-Tenant DCIM-Deployments, Steigerung der Skalierbarkeit um 38%.',
          'Optimierung von SQL-Abfragen, Reduzierung der durchschnittlichen Ladezeit von 10s auf 0,00001s.',
          'Migration aller bestehenden Projekte von SVN zu Git mittels On-Premises-Server.'
        ]
      }
    ],
    knowledgePanel: {
      title: 'Berufserfahrung',
      subtitle: 'Karriereverlauf & Impact',
      downloadBtn: 'Vollständigen Lebenslauf laden',
      linkedinBtn: 'Auf LinkedIn ansehen'
    },
    related: {
      title: 'Ähnliche Suchanfragen',
      items: [
        { label: 'Backend-Architektur', url: 'https://de.wikipedia.org/wiki/Softwarearchitektur' },
        { label: 'Cloud-Migration', url: 'https://aws.amazon.com/de/cloud-migration/' },
        { label: 'Microservices Skalierung', url: 'https://microservices.io/patterns/scalability/scale-cube.html' }
      ]
    }
  },
  sde: {
    metrics: 'Etwa 5 Ergebnisse (0,24 Sekunden)',
    projects: {
      label: 'GitHub',
      patterns: {
        title: 'Enterprise Java Design Patterns Architecture',
        breadcrumb: 'https://github.com › iluwatar › java-design-patterns',
        snippet: 'Strategische Implementierung von Creational, Structural und Behavioral Patterns. Optimiert für <strong>systemische Skalierbarkeit</strong>.'
      },
      banking: {
        title: 'High-Throughput Consumer Banking Infrastructure',
        breadcrumb: 'https://github.com › ohbus › retail-banking',
        snippet: 'Umfassendes Backend-Engineering für Retail-Banking-Operationen. Handhabung von High-Concurrency Transaktionen mit ACID-Compliance.'
      },
      twitter: {
        title: 'Distributed Social Graph & Fan-out Service',
        breadcrumb: 'https://github.com › scaleracademy › twitter-backend-java',
        snippet: 'Skalierbares Social-Networking-Backend für Echtzeit-Datenverteilung und Low-Latency Feed-Aggregation.'
      }
    },
    related: {
      title: 'Inspirationen',
      items: [
        { label: 'Dennis Ritchie', url: 'https://de.wikipedia.org/wiki/Dennis_Ritchie' },
        { label: 'Linus Torvalds', url: 'https://de.wikipedia.org/wiki/Linus_Torvalds' },
        { label: 'Alan Turing', url: 'https://de.wikipedia.org/wiki/Alan_Turing' }
      ]
    },
    knowledgePanel: {
      quote: '"Wenn Debugging der Prozess ist, Bugs zu entfernen..."',
      snippet: 'Zentraler Index technischer Implementierungen, der das Engagement für kollaboratives Open-Source-Engineering zeigt.',
      githubBtn: 'Engineering Source prüfen'
    }
  },
  cde: {
    metrics: 'Etwa 4 Ergebnisse (0,31 Sekunden)',
    projects: {
      label: 'GitHub',
      aws: {
        title: 'Spring Cloud AWS Enterprise Integration',
        breadcrumb: 'https://github.com › awspring › spring-cloud-aws',
        snippet: 'Offizieller Beitrag zum Spring Cloud Ökosystem. Nahtlose Integration des Spring Frameworks mit AWS für cloudnative Java-Anwendungen.'
      },
      sclr: {
        title: 'sclr.ac Distributed URL Infrastructure',
        breadcrumb: 'https://github.com › scaleracademy › sclr.ac-backend',
        snippet: 'Hochleistungs-Redirection-Service, entwickelt für Latenzen im Sub-Millisekundenbereich und horizontalen Durchsatz.'
      },
      lunch: {
        title: 'Enterprise Reservation & Resource Management',
        breadcrumb: 'https://github.com › ohbus › lunch-booking-backend',
        snippet: 'Full-Stack-Ressourcenbuchungs-Engine mit Echtzeit-Admin-Dashboards und automatisierten Benachrichtigungs-Pipelines.'
      }
    },
    related: {
      title: 'Personen, denen man folgen sollte',
      items: [
        { label: 'Werner Vogels', url: 'https://twitter.com/werner' },
        { label: 'Steve Herrod', url: 'https://www.linkedin.com/in/herrod/' },
        { label: 'Marc Benioff', url: 'https://twitter.com/Benioff' }
      ]
    },
    knowledgePanel: {
      role: 'Cloud Infrastructure Consultant',
      snippet: 'Strategischer Berater für <strong>Cloud-Native-Transformation</strong> und Resilienz. Entwicklung automatisierter, sicherer Umgebungen.',
      contactBtn: 'Beratung anfragen',
      quote: 'Dinge mussten immer in einem produktionsreifen Zustand sein.'
    }
  },
  education: {
    metrics: 'Etwa 3 Ergebnisse (16 Jahre)',
    items: {
      btech: {
        title: 'Bachelor of Technology von der UEM Kolkata',
        institution: 'University of Engineering & Management',
        breadcrumb: 'https://uem.edu.in › uem-kolkata',
        snippet: 'Abschluss in Informatik und Ingenieurwesen für das Grundstudium. <br> <span class="text-outline">2016 - 2020</span>'
      },
      isc: {
        title: 'ISC (CISCE) von der AGCS Park Street',
        institution: 'The Assembly of God Church School',
        breadcrumb: 'https://agcschools.edu.in › park-street',
        snippet: 'Gymnasiale Oberstufe mit Physik, Chemie, Mathe und Informatik abgeschlossen. <br> <span class="text-outline">2016</span>'
      },
      icse: {
        title: 'ICSE (CISCE) von der AGCS Park Street',
        institution: 'The Assembly of God Church School',
        breadcrumb: 'https://agcschools.edu.in › park-street',
        snippet: '10 Jahre Schulzeit abgeschlossen und an der ersten öffentlichen Prüfung teilgenommen. <br> <span class="text-outline">2014</span>'
      }
    },
    knowledgePanel: {
      title: 'Bildung',
      subtitle: '16 Jahre formale Bildung',
      degree: 'B.Tech in CSE',
      univ: 'UEM Kolkata',
      grad: '2020'
    }
  },
  skills: {
    metrics: 'Etwa 2 gebündelte Skills (6 Jahre)',
    core: {
      label: 'Developer Core',
      title: 'Programmiersprachen - Subhrodip Mohanta',
      breadcrumb: 'https://subhrodip.com › skills › programming'
    },
    frameworks: {
      label: 'Developer Frameworks',
      title: 'Technologien und Methodiken',
      breadcrumb: 'https://subhrodip.com › skills › technologies',
      items: [
        { label: 'Spring Cloud', url: 'https://spring.io/projects/spring-cloud' },
        { label: 'AWS', url: 'https://aws.amazon.com/' },
        { label: 'Kafka', url: 'https://kafka.apache.org/' },
        { label: 'Docker', url: 'https://www.docker.com/' },
        { label: 'Kubernetes', url: 'https://kubernetes.io/' },
        { label: 'Angular', url: 'https://angular.dev/' },
        { label: 'Microservices', url: 'https://microservices.io/' },
        { label: 'Distributed Systems', url: 'https://en.wikipedia.org/wiki/Distributed_computing' }
      ]
    },
    knowledgePanel: {
      title: 'Skills Übersicht',
      subtitle: 'Technische Expertise & Kompetenzen'
    }
  },
  contact: {
    metrics: 'Etwa 1 Ergebnis (0,12 Sekunden)',
    title: 'Kontaktieren Sie Subhrodip',
    breadcrumb: 'https://subhrodip.com › contact',
    form: {
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefon',
      message: 'Nachricht',
      submit: 'Nachricht senden'
    },
    knowledgePanel: {
      title: 'Kontakt-Info',
      subtitle: 'Direkt kontaktieren'
    }
  }
};
