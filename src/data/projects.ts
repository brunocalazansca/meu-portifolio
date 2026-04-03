import idJovemImg from '../assets/images/id-jovem.png';
import sinajuveImg from '../assets/images/sinajuve.png';
import idJovemAppImg from '../assets/images/id-jovem-app.png'
import enxergaAiImg from '../assets/images/enxerga-ai.png'
import chatRmiImg from '../assets/images/rmi.png'

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
    title: "Portal ID JOVEM - Identidade Jovem",
    description: "Participação no desenvolvimento do portal do ID JOVEM.",
    image: idJovemImg,
    tags: ["React", "Laravel", "PostgreSQL"],
    details: "Portal completo do Governo Brasileiro que viabiliza a emissão de uma carteirinha válida em todo o território nacional.",
    liveUrl: "https://idjovem.juventude.gov.br/",
  },
  {
    id: 2,
    title: "Aplicativo ID JOVEM - Identidade Jovem",
    description: "Participação no desenvolvimento do aplicativo do ID JOVEM.",
    image: idJovemAppImg,
    tags: ["React Native", "Laravel", "PostgreSQL"],
    details: "Aplicativo completo do Governo Brasileiro que viabiliza a emissão de uma carteirinha válida em todo o território nacional.",
    liveUrl: "https://play.google.com/store/apps/details?id=com.idjovem2&hl=pt_BR",
  },
  {
    id: 3,
    title: "SINAJUVE - Sistema Nacional de Juventude",
    description: "Participação no desenvolvimento do SINAJUVE.",
    image: sinajuveImg,
    tags: ["Blade", "Laravel", "OracleDB"],
    details: "Ambiente integrador coordenado pela Secretaria Nacional de Juventude da Secretaria-Geral da Presidência da República para a promoção de políticas públicas de juventude.",
    liveUrl: "https://sinajuve.juventude.gov.br/",
  },
  {
    id: 4,
    title: "EnxergaAI",
    description: "Aplicativo de acessibilidade com Inteligência Artificial para pessoas com deficiência visual. Desenvolvido para o meu Trabalho de Conclusão de Curso (TCC).",
    image: enxergaAiImg,
    tags: ["Kotlin", "TensorFlow Lite", "Yolo"],
    details: "Este projeto consiste no desenvolvimento de um aplicativo móvel para a plataforma Android, voltado à acessibilidade e inclusão de pessoas com deficiência visual. A aplicação utiliza Inteligência Artificial e Visão Computacional para oferecer funcionalidades como detecção de objetos, navegação assistida e interação por comandos de voz, promovendo maior autonomia no uso de dispositivos móveis e no reconhecimento do ambiente ao redor.",
    repoUrl: "http://gitlab.com/mateusdamacena593/tcc",
  },
  {
    id: 5,
    title: "Chat de mensagens",
    description: "Aplicação de chat utilizando Java RMI (Remote Method Invocation), com interface gráfica Swing.",
    image: chatRmiImg,
    tags: ["Java"],
    details: "Permite que múltiplos usuários se conectem a um servidor central e troquem mensagens em tempo real.",
    repoUrl: "https://github.com/brunocalazansca/chat-rmi",
  },
];
