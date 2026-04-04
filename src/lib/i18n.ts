import { writable, derived } from 'svelte/store';

export type Locale = 'en' | 'pt';

export const locale = writable<Locale>('en');

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Nav
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': "Hi, I'm",
    'hero.role': 'Senior Software Engineer',
    'hero.description': 'Full Stack Developer with 9+ years of experience building agile, well-structured web systems and mobile applications. Specialized in TypeScript, React, Node.js, and modern web technologies.',
    'hero.cta': 'View my work',
    'hero.contact': 'Get in touch',

    // Experience
    'experience.title': 'Experience',
    'experience.present': 'Present',

    // Experience items
    'exp.methodical.title': 'Senior Software Engineer',
    'exp.methodical.company': 'The Methodical Group',
    'exp.methodical.period': 'Sep 2024 — Aug 2025',
    'exp.methodical.description': 'Part of a team developing a comprehensive system that enables clients to create and manage businesses across all US states. Built with Next.js and NestJS in a remote-first environment.',
    'exp.methodical.location': 'Remote · USA',

    'exp.mouts.title': 'Full Stack Developer',
    'exp.mouts.company': 'Mouts TI',
    'exp.mouts.period': 'Jul 2023 — Sep 2024',
    'exp.mouts.description': 'Developed the Rewards Module for AB InBev, one of the largest beverage companies in the world. Built interactive frontends with React.js and TypeScript.',
    'exp.mouts.location': 'Remote',

    'exp.certsys.title': 'Full Stack Developer',
    'exp.certsys.company': 'Certsys Tecnologia da Informação',
    'exp.certsys.period': 'Jun 2021 — May 2023',
    'exp.certsys.description': 'Worked on diverse national and international projects. Led mobile development with React Native, implemented CI/CD pipelines, and contributed to enterprise-grade solutions.',
    'exp.certsys.location': 'São Paulo, Brazil',

    'exp.target.title': 'Full Stack Developer',
    'exp.target.company': 'Target Software',
    'exp.target.period': 'Jan 2020 — Apr 2021',
    'exp.target.description': 'Built a bilingual (English/Spanish) mobile app for a language school using React Native. Implemented real-time chat with Firebase and push notifications.',
    'exp.target.location': 'Sorocaba, SP',

    'exp.cotepe.title': 'Full Stack Developer',
    'exp.cotepe.company': 'Cotepe Engenharia Elétrica',
    'exp.cotepe.period': 'Sep 2019 — Dec 2019',
    'exp.cotepe.description': 'Developed a local application for creating sales proposals (PV) for the commercial sector. Built with Vue.js on the frontend and Node.js + Firebase on the backend.',
    'exp.cotepe.location': 'Sorocaba, SP',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.viewCode': 'Source Code',
    'projects.viewLive': 'Live Demo',

    'project.1.title': 'US Business Management Platform',
    'project.1.description': 'Comprehensive SaaS platform enabling clients to create and manage businesses across all US states. Multi-tenant architecture with complex form workflows and state-specific compliance rules.',
    'project.1.role': 'Senior Engineer',

    'project.2.title': 'AB InBev Rewards Module',
    'project.2.description': 'Rewards and loyalty system for one of the world\'s largest beverage companies. High-performance frontend with real-time data visualization and complex business logic.',
    'project.2.role': 'Full Stack Developer',

    'project.3.title': 'Bilingual School App',
    'project.3.description': 'Cross-platform mobile application for a language school with real-time chat, push notifications, and bilingual support (English/Spanish). Built from scratch with React Native.',
    'project.3.role': 'Mobile Developer',

    'project.4.title': 'Enterprise Mobile Solutions',
    'project.4.description': 'Multiple national and international mobile applications built with React Native. Implemented CI/CD pipelines and contributed to large-scale enterprise projects.',
    'project.4.role': 'Full Stack Developer',

    // Skills
    'skills.title': 'Tech Stack',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.mobile': 'Mobile',
    'skills.tools': 'Tools & DevOps',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.description': "I'm always open to new opportunities and interesting projects. Let's build something great together.",
    'contact.email': 'Email me',
    'contact.whatsapp': 'WhatsApp',

    // Footer
    'footer.built': 'Built with Svelte & Tailwind CSS',
    'footer.rights': 'All rights reserved.',
  },
  pt: {
    // Nav
    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contato',

    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.role': 'Engenheiro de Software Sênior',
    'hero.description': 'Desenvolvedor Full Stack com mais de 9 anos de experiência construindo sistemas web ágeis, bem estruturados e aplicativos mobile. Especializado em TypeScript, React, Node.js e tecnologias web modernas.',
    'hero.cta': 'Ver meu trabalho',
    'hero.contact': 'Entre em contato',

    // Experience
    'experience.title': 'Experiência',
    'experience.present': 'Atual',

    // Experience items
    'exp.methodical.title': 'Engenheiro de Software Sênior',
    'exp.methodical.company': 'The Methodical Group',
    'exp.methodical.period': 'Set 2024 — Ago 2025',
    'exp.methodical.description': 'Parte de uma equipe no desenvolvimento de um sistema abrangente que permite aos clientes criar e gerenciar empresas em todos os estados dos EUA. Construído com Next.js e NestJS em ambiente remoto.',
    'exp.methodical.location': 'Remoto · EUA',

    'exp.mouts.title': 'Desenvolvedor Full Stack',
    'exp.mouts.company': 'Mouts TI',
    'exp.mouts.period': 'Jul 2023 — Set 2024',
    'exp.mouts.description': 'Desenvolvimento do Módulo de Recompensas para AB InBev, uma das maiores empresas de bebidas do mundo. Construção de frontends interativos com React.js e TypeScript.',
    'exp.mouts.location': 'Remoto',

    'exp.certsys.title': 'Desenvolvedor Full Stack',
    'exp.certsys.company': 'Certsys Tecnologia da Informação',
    'exp.certsys.period': 'Jun 2021 — Mai 2023',
    'exp.certsys.description': 'Atuação em diversos projetos nacionais e internacionais. Liderança no desenvolvimento mobile com React Native, implementação de pipelines CI/CD e contribuição para soluções empresariais.',
    'exp.certsys.location': 'São Paulo, Brasil',

    'exp.target.title': 'Desenvolvedor Full Stack',
    'exp.target.company': 'Target Software',
    'exp.target.period': 'Jan 2020 — Abr 2021',
    'exp.target.description': 'Construção de um aplicativo mobile bilíngue (Inglês/Espanhol) para uma escola de idiomas usando React Native. Implementação de chat em tempo real com Firebase e notificações push.',
    'exp.target.location': 'Sorocaba, SP',

    'exp.cotepe.title': 'Desenvolvedor Full Stack',
    'exp.cotepe.company': 'Cotepe Engenharia Elétrica',
    'exp.cotepe.period': 'Set 2019 — Dez 2019',
    'exp.cotepe.description': 'Desenvolvimento de uma aplicação local para criação de propostas de vendas (PV) para o setor comercial. Construído com Vue.js no Frontend e Node.js + Firebase no Backend.',
    'exp.cotepe.location': 'Sorocaba, SP',

    // Projects
    'projects.title': 'Projetos em Destaque',
    'projects.viewCode': 'Código Fonte',
    'projects.viewLive': 'Demo ao Vivo',

    'project.1.title': 'Plataforma de Gestão Empresarial (EUA)',
    'project.1.description': 'Plataforma SaaS abrangente que permite aos clientes criar e gerenciar empresas em todos os estados dos EUA. Arquitetura multi-tenant com fluxos complexos de formulários e regras de conformidade estaduais.',
    'project.1.role': 'Engenheiro Sênior',

    'project.2.title': 'Módulo de Recompensas AB InBev',
    'project.2.description': 'Sistema de recompensas e fidelidade para uma das maiores empresas de bebidas do mundo. Frontend de alta performance com visualização de dados em tempo real e lógica de negócios complexa.',
    'project.2.role': 'Desenvolvedor Full Stack',

    'project.3.title': 'App Escola Bilíngue',
    'project.3.description': 'Aplicativo mobile multiplataforma para escola de idiomas com chat em tempo real, notificações push e suporte bilíngue (Inglês/Espanhol). Construído do zero com React Native.',
    'project.3.role': 'Desenvolvedor Mobile',

    'project.4.title': 'Soluções Mobile Empresariais',
    'project.4.description': 'Múltiplas aplicações mobile nacionais e internacionais construídas com React Native. Implementação de pipelines CI/CD e contribuição para projetos empresariais de grande escala.',
    'project.4.role': 'Desenvolvedor Full Stack',

    // Skills
    'skills.title': 'Stack Tecnológica',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.mobile': 'Mobile',
    'skills.tools': 'Ferramentas & DevOps',

    // Contact
    'contact.title': 'Entre em Contato',
    'contact.description': 'Estou sempre aberto a novas oportunidades e projetos interessantes. Vamos construir algo incrível juntos.',
    'contact.email': 'Enviar email',
    'contact.whatsapp': 'WhatsApp',

    // Footer
    'footer.built': 'Construído com Svelte & Tailwind CSS',
    'footer.rights': 'Todos os direitos reservados.',
  },
};

export const t = derived(locale, ($locale) => {
  return (key: string): string => {
    return translations[$locale]?.[key] || key;
  };
});

export function toggleLocale() {
  locale.update((l) => (l === 'en' ? 'pt' : 'en'));
}
