
export interface Provider {
  id: string;
  name: string;
  profession: string;
  city: string;
  state: string;
  rating: number;
  reviewCount: number;
  distance: number;
  avatar: string;
  coverImage: string;
  bio: string;
  skills: string[];
  hourlyRate: number;
  responseTime: string;
  completedJobs: number;
  isFollowing?: boolean;
  portfolio: PortfolioItem[];
  reviews: Review[];
  posts: Post[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Post {
  id: string;
  author: string;
  authorAvatar: string;
  authorProfession: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  isLiked?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export const categories: Category[] = [
  { id: '1', name: 'Design Gráfico', icon: 'Palette', count: 234 },
  { id: '2', name: 'Desenvolvimento', icon: 'Code', count: 189 },
  { id: '3', name: 'Marketing Digital', icon: 'TrendingUp', count: 156 },
  { id: '4', name: 'Fotografia', icon: 'Camera', count: 142 },
  { id: '5', name: 'Redação', icon: 'PenTool', count: 128 },
  { id: '6', name: 'Consultoria', icon: 'Briefcase', count: 98 },
  { id: '7', name: 'Tradução', icon: 'Languages', count: 87 },
  { id: '8', name: 'Vídeo & Animação', icon: 'Video', count: 76 },
];

export const providers: Provider[] = [
  {
    id: '1',
    name: 'Ana Silva',
    profession: 'Designer Gráfica',
    city: 'São Paulo',
    state: 'SP',
    rating: 4.9,
    reviewCount: 127,
    distance: 2.3,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    coverImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200',
    bio: 'Designer gráfica especializada em branding e identidade visual. Mais de 8 anos de experiência criando marcas memoráveis para empresas de todos os tamanhos.',
    skills: ['Branding', 'UI/UX', 'Illustrator', 'Photoshop', 'Figma'],
    hourlyRate: 120,
    responseTime: '2 horas',
    completedJobs: 234,
    portfolio: [
      {
        id: 'p1',
        title: 'Identidade Visual - Café Aroma',
        description: 'Desenvolvimento completo de identidade visual para cafeteria',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600',
        category: 'Branding'
      },
      {
        id: 'p2',
        title: 'App Design - FitLife',
        description: 'Interface de aplicativo de fitness e bem-estar',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600',
        category: 'UI/UX'
      }
    ],
    reviews: [
      {
        id: 'r1',
        author: 'Carlos Mendes',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
        rating: 5,
        comment: 'Trabalho excepcional! Ana entendeu perfeitamente nossa visão e entregou além das expectativas.',
        date: '2024-01-15'
      }
    ],
    posts: []
  },
  {
    id: '2',
    name: 'Bruno Costa',
    profession: 'Desenvolvedor Full Stack',
    city: 'Rio de Janeiro',
    state: 'RJ',
    rating: 4.8,
    reviewCount: 98,
    distance: 5.7,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200',
    bio: 'Desenvolvedor full stack com expertise em React, Node.js e cloud computing. Apaixonado por criar soluções escaláveis e eficientes.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
    hourlyRate: 150,
    responseTime: '1 hora',
    completedJobs: 189,
    portfolio: [],
    reviews: [],
    posts: []
  },
  {
    id: '3',
    name: 'Carla Oliveira',
    profession: 'Fotógrafa Profissional',
    city: 'Belo Horizonte',
    state: 'MG',
    rating: 5.0,
    reviewCount: 156,
    distance: 1.2,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    coverImage: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200',
    bio: 'Fotógrafa especializada em eventos corporativos e retratos. Capturo momentos únicos com sensibilidade artística.',
    skills: ['Fotografia de Eventos', 'Retratos', 'Edição', 'Lightroom', 'Photoshop'],
    hourlyRate: 200,
    responseTime: '3 horas',
    completedJobs: 312,
    portfolio: [],
    reviews: [],
    posts: []
  },
  {
    id: '4',
    name: 'Daniel Santos',
    profession: 'Especialista em Marketing Digital',
    city: 'Curitiba',
    state: 'PR',
    rating: 4.7,
    reviewCount: 84,
    distance: 8.5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
    bio: 'Especialista em estratégias de marketing digital com foco em ROI. Ajudo empresas a crescerem online.',
    skills: ['SEO', 'Google Ads', 'Social Media', 'Analytics', 'Content Marketing'],
    hourlyRate: 130,
    responseTime: '2 horas',
    completedJobs: 167,
    portfolio: [],
    reviews: [],
    posts: []
  },
  {
    id: '5',
    name: 'Eduarda Lima',
    profession: 'Redatora & Copywriter',
    city: 'Porto Alegre',
    state: 'RS',
    rating: 4.9,
    reviewCount: 142,
    distance: 3.8,
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200',
    bio: 'Redatora criativa especializada em conteúdo para web e copywriting persuasivo. Transformo palavras em resultados.',
    skills: ['Copywriting', 'SEO Writing', 'Content Strategy', 'Storytelling', 'Blog Posts'],
    hourlyRate: 100,
    responseTime: '4 horas',
    completedJobs: 278,
    portfolio: [],
    reviews: [],
    posts: []
  },
  {
    id: '6',
    name: 'Felipe Rodrigues',
    profession: 'Consultor de Negócios',
    city: 'Brasília',
    state: 'DF',
    rating: 4.8,
    reviewCount: 76,
    distance: 12.1,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
    coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200',
    bio: 'Consultor empresarial com MBA e 15 anos de experiência. Especializado em transformação digital e gestão estratégica.',
    skills: ['Estratégia', 'Gestão', 'Transformação Digital', 'Análise de Dados', 'Liderança'],
    hourlyRate: 250,
    responseTime: '6 horas',
    completedJobs: 94,
    portfolio: [],
    reviews: [],
    posts: []
  },
  {
    id: '7',
    name: 'Gabriela Ferreira',
    profession: 'Tradutora Inglês/Espanhol',
    city: 'Florianópolis',
    state: 'SC',
    rating: 5.0,
    reviewCount: 103,
    distance: 4.2,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    coverImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200',
    bio: 'Tradutora juramentada com fluência em inglês e espanhol. Especializada em documentos técnicos e literários.',
    skills: ['Tradução', 'Inglês', 'Espanhol', 'Revisão', 'Localização'],
    hourlyRate: 90,
    responseTime: '5 horas',
    completedJobs: 421,
    portfolio: [],
    reviews: [],
    posts: []
  },
  {
    id: '8',
    name: 'Henrique Alves',
    profession: 'Editor de Vídeo',
    city: 'Salvador',
    state: 'BA',
    rating: 4.7,
    reviewCount: 67,
    distance: 6.9,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    coverImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200',
    bio: 'Editor de vídeo criativo especializado em conteúdo para redes sociais e publicidade. Crio vídeos que engajam.',
    skills: ['Premiere Pro', 'After Effects', 'Motion Graphics', 'Color Grading', 'Sound Design'],
    hourlyRate: 110,
    responseTime: '3 horas',
    completedJobs: 156,
    portfolio: [],
    reviews: [],
    posts: []
  },
  {
    id: '9',
    name: 'Isabela Martins',
    profession: 'UX/UI Designer',
    city: 'Recife',
    state: 'PE',
    rating: 4.9,
    reviewCount: 119,
    distance: 2.7,
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400',
    coverImage: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200',
    bio: 'Designer de experiência do usuário focada em criar interfaces intuitivas e acessíveis. Design centrado no usuário.',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Usability Testing'],
    hourlyRate: 140,
    responseTime: '2 horas',
    completedJobs: 203,
    portfolio: [],
    reviews: [],
    posts: []
  },
  {
    id: '10',
    name: 'João Pedro',
    profession: 'Desenvolvedor Mobile',
    city: 'Fortaleza',
    state: 'CE',
    rating: 4.8,
    reviewCount: 91,
    distance: 7.3,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    coverImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200',
    bio: 'Desenvolvedor mobile especializado em React Native e Flutter. Crio apps nativos de alta performance.',
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
    hourlyRate: 160,
    responseTime: '1 hora',
    completedJobs: 145,
    portfolio: [],
    reviews: [],
    posts: []
  },
  {
    id: '11',
    name: 'Larissa Souza',
    profession: 'Social Media Manager',
    city: 'Manaus',
    state: 'AM',
    rating: 4.9,
    reviewCount: 134,
    distance: 5.1,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400',
    coverImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200',
    bio: 'Gestora de redes sociais com expertise em crescimento orgânico e engajamento. Construo comunidades online.',
    skills: ['Instagram', 'TikTok', 'Content Creation', 'Community Management', 'Analytics'],
    hourlyRate: 95,
    responseTime: '2 horas',
    completedJobs: 267,
    portfolio: [],
    reviews: [],
    posts: []
  },
  {
    id: '12',
    name: 'Marcos Vieira',
    profession: 'Ilustrador Digital',
    city: 'Goiânia',
    state: 'GO',
    rating: 5.0,
    reviewCount: 88,
    distance: 9.4,
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400',
    coverImage: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200',
    bio: 'Ilustrador digital especializado em personagens e concept art. Dou vida às suas ideias através da arte.',
    skills: ['Ilustração', 'Procreate', 'Character Design', 'Concept Art', 'Digital Painting'],
    hourlyRate: 105,
    responseTime: '4 horas',
    completedJobs: 178,
    portfolio: [],
    reviews: [],
    posts: []
  }
];

export const feedPosts: Post[] = [
  {
    id: 'post1',
    author: 'Ana Silva',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    authorProfession: 'Designer Gráfica',
    content: 'Acabei de finalizar um projeto incrível de rebranding para uma startup de tecnologia! É gratificante ver como um bom design pode transformar a percepção de uma marca. 🎨✨',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    likes: 234,
    comments: 45,
    shares: 12,
    timestamp: '2024-01-20T10:30:00',
    isLiked: false
  },
  {
    id: 'post2',
    author: 'Bruno Costa',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    authorProfession: 'Desenvolvedor Full Stack',
    content: 'Dica do dia: sempre escreva código pensando que a próxima pessoa a mantê-lo será você mesmo daqui a 6 meses. Clean code não é luxo, é necessidade! 💻',
    likes: 189,
    comments: 32,
    shares: 28,
    timestamp: '2024-01-20T09:15:00',
    isLiked: true
  },
  {
    id: 'post3',
    author: 'Carla Oliveira',
    authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    authorProfession: 'Fotógrafa Profissional',
    content: 'A luz dourada do final da tarde nunca decepciona! Sessão de fotos corporativas hoje com resultados incríveis. 📸☀️',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800',
    likes: 312,
    comments: 56,
    shares: 19,
    timestamp: '2024-01-19T18:45:00',
    isLiked: false
  },
  {
    id: 'post4',
    author: 'Daniel Santos',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    authorProfession: 'Especialista em Marketing Digital',
    content: 'ROI de 300% na última campanha! O segredo? Conhecer profundamente seu público-alvo e testar, testar, testar. 📊🚀',
    likes: 167,
    comments: 41,
    shares: 34,
    timestamp: '2024-01-19T14:20:00',
    isLiked: true
  },
  {
    id: 'post5',
    author: 'Eduarda Lima',
    authorAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    authorProfession: 'Redatora & Copywriter',
    content: 'Palavras têm poder. Um bom copy não vende produto, vende transformação. Qual foi a última copy que te fez parar e pensar? ✍️',
    likes: 278,
    comments: 67,
    shares: 23,
    timestamp: '2024-01-19T11:00:00',
    isLiked: false
  },
  {
    id: 'post6',
    author: 'Felipe Rodrigues',
    authorAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
    authorProfession: 'Consultor de Negócios',
    content: 'Transformação digital não é sobre tecnologia, é sobre pessoas. Ajudei mais uma empresa a fazer essa jornada com sucesso! 💼',
    likes: 94,
    comments: 18,
    shares: 15,
    timestamp: '2024-01-18T16:30:00',
    isLiked: false
  },
  {
    id: 'post7',
    author: 'Isabela Martins',
    authorAvatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400',
    authorProfession: 'UX/UI Designer',
    content: 'Design não é apenas como algo parece, mas como funciona. Acabei de lançar um design system completo para um cliente! 🎯',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800',
    likes: 203,
    comments: 38,
    shares: 21,
    timestamp: '2024-01-18T13:15:00',
    isLiked: true
  },
  {
    id: 'post8',
    author: 'Larissa Souza',
    authorAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400',
    authorProfession: 'Social Media Manager',
    content: 'Crescimento de 150% no engajamento em apenas 3 meses! O segredo está em entender o que sua audiência realmente quer ver. 📱✨',
    likes: 267,
    comments: 52,
    shares: 31,
    timestamp: '2024-01-18T10:00:00',
    isLiked: false
  }
];
