import { AppContent } from '../models/content.model';

export const DE_CONTENT: AppContent = {
  common: {
    name: 'Subhrodip Mohanta',
    brand: 'Subhrodip',
    roles: [
      'Senior Software Engineer',
      'Cloud-Architektur-Berater',
      'Spezialist für verteilte Systeme'
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
    searchBtn: 'Qualifikationen prüfen',
    curiousBtn: 'Ausgewählte Fallstudie',
    footerText: 'Talk is cheap,',
    footerLink: 'show me the code!'
  },
  navigation: {
    all: 'Alle',
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
      title: 'Senior Software Engineer | DevOps & Cloud Consultant — Subhrodip Mohanta',
      breadcrumb: 'https://subhrodip.com',
      snippet: 'Erkunden Sie den beruflichen Werdegang von <strong>Subhrodip Mohanta</strong>. Spezialisiert auf die Architektur hochverfügbarer Backend-Systeme, Cloud-Native-Transformationen und skalierbare Microservices.'
    },
    github: {
      label: 'GitHub',
      title: 'Technisches Engineering-Portfolio & Open-Source-Beiträge',
      breadcrumb: 'https://github.com › subhrodip',
      snippet: 'Fortgeschrittene Implementierungen in Java, Python und TypeScript. Fokus auf <strong>Enterprise-Design-Patterns</strong>, verteilte Nebenläufigkeit und automatisierte Infrastruktur.',
      links: {
        viewProject: 'Featured Projekte ansehen',
        viewDesc: 'Technische Tiefenanalysen und Build-Berichte.',
        repositories: 'GitHub-Repositories',
        repoDesc: 'Öffentlicher Quellcode und Architektur-Dokumentation.'
      }
    },
    peopleAlsoAsk: {
      title: 'Nutzer fragen auch',
      study: 'Wo hat Subhrodip Mohanta studiert?',
      tech: 'Welche Technologien nutzt Subhrodip Mohanta?'
    },
    knowledgePanel: {
      role: 'Senior Software Engineer',
      resume: 'Portfolio-PDF herunterladen',
      snippet: 'Ingenieur mit Fokus auf High-Integrity-Software und robustes Systemdesign. Spezialisiert auf den Aufbau sicherer, verteilter Backend-Infrastrukturen.',
      profiles: 'Berufliche Profile'
    }
  },
  sde: {
    metrics: 'Ungefähr 5 Ergebnisse (0,24 Sekunden)',
    blog: {
      label: "Subhrodips Blog",
      title: 'Jenseits der Wissenschaft: Die theoretische Lücke im Enterprise Engineering schließen',
      breadcrumb: 'https://subhrodip.com › engineering › insights',
      snippet: 'Eine strategische Analyse der modernen Engineering-Lernkurve. Über die akademische Syntax hinausgehen, um die Komplexität industrieller verteilter Architekturen zu meistern.'
    },
    projects: {
      label: 'GitHub',
      patterns: {
        title: 'Enterprise Java Design Patterns - Architektur',
        breadcrumb: 'https://github.com › ohbus › java-design-patterns',
        snippet: 'Strategische Implementierung von Erzeugungs-, Struktur- und Verhaltensmustern. Optimiert für <strong>systemische Skalierbarkeit</strong> und langfristige Wartbarkeit.'
      },
      banking: {
        title: 'Hochdurchsatz-Infrastruktur für Consumer Banking',
        breadcrumb: 'https://github.com › ohbus › retail-banking',
        snippet: 'Umfassendes Backend-Engineering für den Privatkunden-Bankbetrieb. Abwicklung hochkonkurrierender Transaktionen mit ACID-Compliance und robustem Auditing.'
      },
      twitter: {
        title: 'Verteilter Social Graph & Fan-out Service',
        breadcrumb: 'https://github.com › ohbus › twitter-backend-java',
        snippet: 'Skalierbares Social-Networking-Backend, entwickelt für Echtzeit-Datenverteilung und Feed-Aggregation mit geringer Latenz.'
      }
    },
    related: {
      title: 'Verwandte Suchanfragen (Inspirationen)',
      items: ['Dennis Ritchie', 'Linus Torvalds', 'Alan Turing']
    },
    knowledgePanel: {
      quote: '"Wenn Debugging der Prozess des Entfernens von Bugs ist..."',
      snippet: 'Das folgende Repository bietet einen zentralen Index technischer Implementierungen und zeigt das Engagement für kollaboratives Open-Source-Engineering.',
      githubBtn: 'Engineering-Quellcode prüfen'
    }
  },
  cde: {
    metrics: 'Ungefähr 4 Ergebnisse (0,31 Sekunden)',
    definition: {
      label: 'Wörterbuch',
      title: 'DevOps & Cloud Computing - Definition',
      breadcrumb: 'https://dictionary.com › devops',
      snippet: 'DevOps ist eine Reihe von Praktiken, die Softwareentwicklung und IT-Betrieb kombinieren. Cloud Computing ist die bedarfsgerechte Verfügbarkeit von Computersystemressourcen ohne direkte aktive Verwaltung durch den Benutzer.'
    },
    projects: {
      label: 'GitHub',
      aws: {
        title: 'Spring Cloud AWS - Enterprise-Integration',
        breadcrumb: 'https://github.com › ohbus › spring-cloud-aws',
        snippet: 'Offizieller Beitrag zum Spring Cloud-Ökosystem. Nahtlose Integration des Spring Frameworks mit Amazon Web Services für Cloud-native Java-Anwendungen.'
      },
      sclr: {
        title: 'sclr.ac - Verteilte URL-Infrastruktur',
        breadcrumb: 'https://github.com › ohbus › sclr.ac-backend',
        snippet: 'Hochleistungs-Redirection-Service, entwickelt für Latenzen im Sub-Millisekunden-Bereich und horizontale Durchsatzskalierung.'
      },
      lunch: {
        title: 'Enterprise Reservierungs- & Ressourcenmanagement',
        breadcrumb: 'https://github.com › ohbus › lunch-booking-backend',
        snippet: 'Full-Stack-Ressourcenbuchungs-Engine mit Echtzeit-Admin-Dashboards und automatisierten Benachrichtigungspipelines.'
      }
    },
    related: {
      title: 'Verwandte Suchanfragen (Personen zum Folgen)',
      items: ['Werner Vogels', 'Steve Herrod', 'Marc Benioff']
    },
    knowledgePanel: {
      role: 'Cloud-Infrastruktur-Berater',
      snippet: 'Strategischer Berater für <strong>Cloud-Native-Transformation</strong> und Infrastruktur-Resilienz. Entwicklung automatisierter, sicherer und selbstheilender Umgebungen.',
      contactBtn: 'Beratung anfordern',
      quote: 'Einfach gesagt: Die Dinge mussten immer in einem produktionsreifen Zustand sein.'
    }
  },
  education: {
    metrics: 'Ungefähr 3 Ergebnisse für Bildung (16 Jahre)',
    items: {
      btech: {
        title: 'Bachelor of Technology von der UEM, Kolkata',
        institution: 'University of Engineering & Management',
        breadcrumb: 'https://uem.edu.in › uem-kolkata',
        snippet: 'Abschluss meines Studiums der Informatik und des Ingenieurwesens (Computer Science and Engineering). <br> <strong>CGPA:</strong> 8,75 | <strong>Note:</strong> 80% <br> <span class="text-[#70757a]">2016 - 2020</span>'
      },
      isc: {
        title: 'ISC (CISCE) von der AGCS, Park Street',
        institution: 'The Assembly of God Church School',
        breadcrumb: 'http://agcschools.edu.in › park-street',
        snippet: 'Abschluss der High School mit den Schwerpunkten Physik, Chemie, Mathematik und Computeranwendungen. <br> <strong>Note:</strong> 69,17% <br> <span class="text-[#70757a]">2016</span>'
      },
      icse: {
        title: 'ICSE (CISCE) von der AGCS, Park Street',
        institution: 'The Assembly of God Church School',
        breadcrumb: 'http://agcschools.edu.in › park-street',
        snippet: 'Abschluss von 10 Schuljahren und Teilnahme an meiner ersten öffentlichen Prüfung. <br> <strong>Note:</strong> 74,67% <br> <span class="text-[#70757a]">2014</span>'
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
    metrics: 'Ungefähr 2 gebündelte Fähigkeiten (6 Jahre)',
    core: {
      label: 'Entwickler-Kernkompetenzen',
      title: 'Programmiersprachen - Subhrodip Mohanta',
      breadcrumb: 'https://subhrodip.com › skills › programming-languages'
    },
    frameworks: {
      label: 'Entwickler-Frameworks',
      title: 'Technologien und Methoden',
      breadcrumb: 'https://subhrodip.com › skills › technologies-methodologies'
    },
    knowledgePanel: {
      title: 'Fähigkeiten im Überblick',
      subtitle: 'Technische Expertise & Kompetenzen'
    }
  },
  contact: {
    metrics: 'Ungefähr 1 Ergebnis (0,12 Sekunden)',
    title: 'Kontaktieren Sie Subhrodip - Melden Sie sich gerne!',
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
