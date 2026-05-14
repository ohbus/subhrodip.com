export interface AppContent {
  common: {
    name: string;
    brand: string;
    roles: string[];
    search: string;
    mic: string;
    lens: string;
    apps: string;
    settings: string;
    more_vert: string;
    expand_more: string;
    chevron_right: string;
    next: string;
  };
  home: {
    placeholder: string;
    searchBtn: string;
    curiousBtn: string;
    footerText: string;
    footerLink: string;
  };
  navigation: {
    all: string;
    experience: string;
    sde: string;
    cde: string;
    education: string;
    skills: string;
    contact: string;
  };
  footer: {
    location: string;
    privacy: string;
    terms: string;
    contact: string;
  };
  results: {
    metrics: {
      about: string;
      results: string;
      seconds: string;
      count: string;
      time: string;
    };
    main: {
      title: string;
      breadcrumb: string;
      snippet: string;
    };
    github: {
      label: string;
      title: string;
      breadcrumb: string;
      snippet: string;
      links: {
        viewProject: string;
        viewDesc: string;
        repositories: string;
        repoDesc: string;
      };
    };
    peopleAlsoAsk: {
      title: string;
      study: string;
      tech: string;
    };
    knowledgePanel: {
      role: string;
      resume: string;
      snippet: string;
      profiles: string;
    };
  };
  experience: {
    metrics: string;
    items: {
      role: string;
      company: string;
      companyUrl: string;
      logoUrl?: string;
      location: string;
      duration: string;
      highlights: string[];
      breadcrumb: string;
    }[];
    knowledgePanel: {
      title: string;
      subtitle: string;
      downloadBtn: string;
      linkedinBtn: string;
    };
    related: {
      title: string;
      items: string[];
    };
  };
  sde: {
    metrics: string;
    blog: {
      label: string;
      title: string;
      breadcrumb: string;
      snippet: string;
    };
    projects: {
      label: string;
      patterns: { title: string; snippet: string; breadcrumb: string };
      banking: { title: string; snippet: string; breadcrumb: string };
      twitter: { title: string; snippet: string; breadcrumb: string };
    };
    related: {
      title: string;
      items: string[];
    };
    knowledgePanel: {
      quote: string;
      snippet: string;
      githubBtn: string;
    };
  };
  cde: {
    metrics: string;
    definition: {
      label: string;
      title: string;
      breadcrumb: string;
      snippet: string;
    };
    projects: {
      label: string;
      aws: { title: string; snippet: string; breadcrumb: string };
      sclr: { title: string; snippet: string; breadcrumb: string };
      lunch: { title: string; snippet: string; breadcrumb: string };
    };
    related: {
      title: string;
      items: string[];
    };
    knowledgePanel: {
      role: string;
      snippet: string;
      contactBtn: string;
      quote: string;
    };
  };
  education: {
    metrics: string;
    items: {
      btech: { title: string; institution: string; breadcrumb: string; snippet: string };
      isc: { title: string; institution: string; breadcrumb: string; snippet: string };
      icse: { title: string; institution: string; breadcrumb: string; snippet: string };
    };
    knowledgePanel: {
      title: string;
      subtitle: string;
      degree: string;
      univ: string;
      grad: string;
    };
  };
  skills: {
    metrics: string;
    core: { label: string; title: string; breadcrumb: string };
    frameworks: { label: string; title: string; breadcrumb: string };
    knowledgePanel: {
      title: string;
      subtitle: string;
    };
  };
  contact: {
    metrics: string;
    title: string;
    breadcrumb: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
    knowledgePanel: {
      title: string;
      subtitle: string;
    };
  };
}
