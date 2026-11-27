
export const portfolio = {
  name: "Bruno Oliveira Santos",
  role: "Back-end / Full Stack",
  tagline: "Sistemas corporativos, APIs e integrações.",
  email: "bruno.os230@gmail.com",
  github: "https://github.com/bbruno110",
  githubUsername: "@bbruno110",
  linkedin: "https://www.linkedin.com/in/bruno-oliveira-santos-333b791b1/",
  resume: "/curriculo-bruno.pdf",
  copyrightYear: 2026,
  about: [
    "Sou Bruno, desenvolvedor Back-end e Full Stack com mais de 5 anos criando sistemas e integrações no Hospital Samur.",
    "Desenvolvo soluções fiscais, financeiras, contábeis e de RH, da análise de requisitos à manutenção.",
  ],
  technologyGroups: [
    ["Node.js", "Express", "TypeScript", "Python", "FastAPI", "Flask"],
    ["React", "Next.js", "React Native", "Expo"],
    ["Oracle SQL/PLSQL", "PostgreSQL", "SQL Server"],
  ],
  education: [
    {
      title: "Sistemas de Informação",
      detail: "Bacharelado · UNIFTC · 2026",
    },
    {
      title: "Eletrotécnica",
      detail: "Técnico · SENAI · 2017–2019",
    },
  ],
  languages: "Inglês intermediário",
} as const;

export const navigation = [
  { href: "/", label: "Início" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: readonly string[];
};

export const projects = [
  {
    id: "nfse",
    title: "Integração de NFS-e",
    description:
      "Serviço desenvolvido individualmente: consulta contas no Oracle/Tasy, controla dados em PostgreSQL e processa XML pela API da prefeitura. Quase 10 mil notas processadas em volume acumulado aproximado.",
    technologies: ["Node.js", "Express", "TypeScript", "Oracle", "PostgreSQL"],
  },
  {
    id: "ordens-de-servico",
    title: "App de Ordens de Serviço",
    description:
      "Aplicativo para consulta, acompanhamento e atualização de Ordens de Serviço, integrado ao ERP Tasy/Philips.",
    technologies: ["React Native", "Expo"],
  },
  {
    id: "totvs-tasy",
    title: "TOTVS + Tasy",
    description:
      "Integrações TOTVS/SQL Server e Tasy/Oracle para RH, financeiro e contabilidade, incluindo folha e encargos. Controle dos fluxos com XLSX, pastas e logs para verificar registros já processados.",
    technologies: ["SQL Server", "Oracle PL/SQL", "TOTVS", "Tasy/Philips"],
  },
  {
    id: "automacoes-bancarias",
    title: "Automações bancárias",
    description:
      "Procedure para gerar arquivo CNAB de apoio a pagamentos PIX Santander e ajuste de rotina Itaú para alterar automaticamente tipos de pagamento.",
    technologies: ["Oracle PL/SQL", "CNAB", "PIX"],
  },
  {
    id: "painel-interno",
    title: "Painel de consultas internas",
    description:
      "Painel em Next.js para consultas de RH, contabilidade e financeiro no Hospital Samur.",
    technologies: ["Next.js", "React"],
  },
  {
    id: "portal-notas-fiscais",
    title: "Portal de notas fiscais",
    description:
      "Portal de notas fiscais de médicos e empresas, em produção em fase de testes. A integração posterior com o Oracle/Tasy está planejada.",
    technologies: ["Python", "FastAPI", "PostgreSQL"],
  },
  {
    id: "reconhecimento-facial",
    title: "Reconhecimento facial",
    description:
      "Projeto pessoal: API em Python que salva imagens e realiza reconhecimento facial para um fluxo de liberação de acesso.",
    technologies: ["Python", "Reconhecimento facial"],
  },
  {
    id: "visao-computacional",
    title: "Detecção de objetos com YOLO",
    description:
      "Projeto acadêmico: montagem de dataset de imagens e treinamento de modelo YOLO para detecção de objetos.",
    technologies: ["Python", "YOLOv4", "YOLOv8"],
  },
] as const satisfies readonly Project[];
