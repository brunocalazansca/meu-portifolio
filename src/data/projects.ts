export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  details: string;
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Plataforma completa de e-commerce com pagamento integrado e painel admin.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL"],
    details:
      "Plataforma completa de e-commerce com carrinho de compras, checkout com Stripe, painel administrativo com dashboards e gestão de produtos e pedidos.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Task Manager App",
    description:
      "Aplicativo de gestão de tarefas com drag & drop e colaboração em equipe.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["TypeScript", "Next.js", "MongoDB"],
    details:
      "Aplicativo de gerenciamento de tarefas inspirado no Trello, com quadros Kanban, drag & drop, notificações em tempo real e colaboração multi-usuário.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description:
      "Dashboard interativo com gráficos em tempo real e relatórios customizáveis.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["React", "D3.js", "Python"],
    details:
      "Dashboard de analytics com gráficos interativos utilizando D3.js, filtros dinâmicos, exportação de relatórios em PDF e integração com APIs de dados.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Social Media App",
    description:
      "Rede social com feed em tempo real, stories e sistema de mensagens.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    tags: ["React Native", "Firebase", "TypeScript"],
    details:
      "Aplicativo mobile de rede social com feed em tempo real, stories, sistema de mensagens diretas, notificações push e autenticação via OAuth.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: 5,
    title: "API Gateway",
    description:
      "Gateway de APIs com rate limiting, cache e documentação automática.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    tags: ["Node.js", "Docker", "Redis"],
    details:
      "API Gateway altamente escalável com rate limiting configurável, cache inteligente com Redis, documentação automática via Swagger e monitoramento em tempo real.",
    repoUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Landing Page Builder",
    description:
      "Construtor de landing pages com editor visual drag & drop.",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&h=400&fit=crop",
    tags: ["React", "Tailwind", "AWS"],
    details:
      "Construtor de landing pages com editor visual drag & drop, templates customizáveis, integração com ferramentas de marketing e deploy automático na AWS.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
];
