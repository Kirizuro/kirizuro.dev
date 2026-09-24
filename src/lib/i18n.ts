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
    'hero.description': 'Full Stack Developer with 9+ years of experience building agile, well-structured web systems and mobile applications. Specialized in TypeScript, React, Node.js, and modern web technologies — currently building GenAI-powered products at TELUS Digital. Public speaker for 12 years.',
    'hero.cta': 'View my work',
    'hero.contact': 'Get in touch',

    // Experience
    'experience.title': 'Experience',
    'experience.present': 'Present',

    // Experience items
    'exp.telus.title': 'Senior Software Engineer',
    'exp.telus.company': 'TELUS Digital (via Poatek)',
    'exp.telus.period': 'Oct 2025 — Present',
    'exp.telus.description': 'Embedded in the GenAI Accelerator team building AI-powered Voice of Customer products for one of Canada\'s largest telecoms. Shipped multi-turn conversations and per-user history, led the migration of a legacy Google Apps Script tool to Next.js, and cut production LLM API load by ~50% by removing a redundant heavyweight call. Stood up a new product on GCP from an empty project with Terraform, and piloted spec-driven development with Claude Code that spread to a teammate\'s repo.',
    'exp.telus.location': 'Remote',

    'exp.methodical.title': 'Senior Software Engineer',
    'exp.methodical.company': 'The Methodical Group',
    'exp.methodical.period': 'Sep 2024 — Aug 2025',
    'exp.methodical.description': 'Senior engineer on a US SaaS platform for creating and managing companies across all states — ownership, billing and compliance workflows. Designed Prisma schemas, built GraphQL resolvers, integrated Stripe subscriptions and refunds, and shipped an Amazon Titan-powered company-name generator. Deployed to AWS EKS with GitHub Actions.',
    'exp.methodical.location': 'Remote · USA',

    'exp.mouts.title': 'Senior Full Stack Engineer',
    'exp.mouts.company': 'Mouts TI',
    'exp.mouts.period': 'Jul 2023 — Sep 2024',
    'exp.mouts.description': 'Built the Rewards Module for AB InBev, one of the largest beverage companies in the world: a bonus calculation system, AG Grid tables and an async PDF-generation API on Azure Service Bus. Moved to the Aurora project, delivering a NestJS journal-entry automation service for SAP and scaling a report export from 50 lines to 150k+.',
    'exp.mouts.location': 'Remote',

    'exp.certsys.title': 'Full Stack Developer',
    'exp.certsys.company': 'Certsys Tecnologia da Informação',
    'exp.certsys.period': 'Jun 2021 — May 2023',
    'exp.certsys.description': 'Worked on diverse national and international projects. Led mobile development with React Native, implemented CI/CD pipelines, and contributed to enterprise-grade solutions. Speaker at TDC on building MVPs and the challenges of applying them well.',
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

    'project.5.title': 'Voice of Customer AI Platform',
    'project.5.description': 'GenAI-powered customer insights tools for a major telecom. Rebuilt a legacy Apps Script app in Next.js with multi-turn conversations, per-user history, LDAP/SSO access control and a sales-insights feature wired across four LLM prompts. Cut production API load ~50%.',
    'project.5.role': 'Senior Engineer',

    'project.6.title': 'Lumio',
    'project.6.description': 'New AI product built from an empty GCP project: cloud footprint and Cloud SQL provisioned with Terraform (13 resources, 0 errors), landing screen, and formal onboarding into the company\'s app registry.',
    'project.6.role': 'Senior Engineer',

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
    'skills.cloud': 'Cloud & Data',
    'skills.ai': 'AI & LLMs',

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
    'hero.description': 'Desenvolvedor Full Stack com mais de 9 anos de experiência construindo sistemas web ágeis, bem estruturados e aplicativos mobile. Especializado em TypeScript, React, Node.js e tecnologias web modernas — atualmente construindo produtos com GenAI na TELUS Digital. Palestrante há 12 anos.',
    'hero.cta': 'Ver meu trabalho',
    'hero.contact': 'Entre em contato',

    // Experience
    'experience.title': 'Experiência',
    'experience.present': 'Atual',

    // Experience items
    'exp.telus.title': 'Engenheiro de Software Sênior',
    'exp.telus.company': 'TELUS Digital (via Poatek)',
    'exp.telus.period': 'Out 2025 — Atual',
    'exp.telus.description': 'Integrado ao time GenAI Accelerator, construindo produtos de Voice of Customer com IA para uma das maiores operadoras de telecom do Canadá. Entreguei conversas multi-turno com histórico por usuário, liderei a migração de uma ferramenta legada em Google Apps Script para Next.js e reduzi em ~50% a carga de API de LLM em produção ao eliminar uma chamada pesada redundante. Estruturei um novo produto no GCP a partir de um projeto vazio com Terraform e pilotei Spec-Driven Development com Claude Code, adotado depois no repositório de um colega.',
    'exp.telus.location': 'Remoto',

    'exp.methodical.title': 'Engenheiro de Software Sênior',
    'exp.methodical.company': 'The Methodical Group',
    'exp.methodical.period': 'Set 2024 — Ago 2025',
    'exp.methodical.description': 'Engenheiro sênior em uma plataforma SaaS americana para criar e gerenciar empresas em todos os estados — fluxos de participação societária, cobrança e conformidade. Modelei schemas Prisma, construí resolvers GraphQL, integrei assinaturas e reembolsos com Stripe e entreguei um gerador de nomes de empresas com Amazon Titan. Deploy em AWS EKS com GitHub Actions.',
    'exp.methodical.location': 'Remoto · EUA',

    'exp.mouts.title': 'Desenvolvedor Full Stack Sênior',
    'exp.mouts.company': 'Mouts TI',
    'exp.mouts.period': 'Jul 2023 — Set 2024',
    'exp.mouts.description': 'Desenvolvimento do Módulo de Recompensas da AB InBev, uma das maiores empresas de bebidas do mundo: sistema de cálculo de bônus, tabelas com AG Grid e uma API assíncrona de geração de PDF com Azure Service Bus. Depois atuei no projeto Aurora, entregando um serviço NestJS de automação de lançamentos contábeis para SAP e escalando a exportação de relatórios de 50 linhas para mais de 150 mil.',
    'exp.mouts.location': 'Remoto',

    'exp.certsys.title': 'Desenvolvedor Full Stack',
    'exp.certsys.company': 'Certsys Tecnologia da Informação',
    'exp.certsys.period': 'Jun 2021 — Mai 2023',
    'exp.certsys.description': 'Atuação em diversos projetos nacionais e internacionais. Liderança no desenvolvimento mobile com React Native, implementação de pipelines CI/CD e contribuição para soluções empresariais. Palestrante no TDC sobre MVPs e os desafios de aplicá-los bem.',
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

    'project.5.title': 'Plataforma de IA Voice of Customer',
    'project.5.description': 'Ferramentas de insights de clientes com GenAI para uma grande operadora de telecom. Reconstruí um app legado em Apps Script com Next.js, incluindo conversas multi-turno, histórico por usuário, controle de acesso LDAP/SSO e uma funcionalidade de insights de vendas integrada a quatro prompts de LLM. Reduzi ~50% da carga de API em produção.',
    'project.5.role': 'Engenheiro Sênior',

    'project.6.title': 'Lumio',
    'project.6.description': 'Novo produto de IA construído a partir de um projeto GCP vazio: infraestrutura de nuvem e Cloud SQL provisionados com Terraform (13 recursos, 0 erros), tela inicial e cadastro formal no inventário de aplicações da empresa.',
    'project.6.role': 'Engenheiro Sênior',

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
    'skills.cloud': 'Cloud & Dados',
    'skills.ai': 'IA & LLMs',

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
