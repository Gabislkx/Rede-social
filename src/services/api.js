// Lista de usuários
export const usuarios = [
    {
        id: 1,
        nome: "Ana Silva",
        username: "anasilva",
        email: "ana.silva@email.com",
        avatar: "https://i.pravatar.cc/150?img=1",
        ativo: true,
        dataCriacao: "2024-01-15T10:30:00Z"
    },
    {
        id: 2,
        nome: "Carlos Eduardo",
        username: "carlosedu",
        email: "carlos.eduardo@email.com",
        avatar: "https://i.pravatar.cc/150?img=3",
        ativo: true,
        dataCriacao: "2024-02-20T14:45:00Z"
    },
    {
        id: 3,
        nome: "Mariana Costa",
        username: "maricosta",
        email: "mariana.costa@email.com",
        avatar: "https://i.pravatar.cc/150?img=5",
        ativo: false,
        dataCriacao: "2024-03-05T09:15:00Z"
    }
];


// Lista de posts estilo Instagram
export const instagramPosts = [
    {
        id: "post_101",

        usuario: {
            username: "dev_lifestyle",
            nome: "Code & Coffee",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
            verificado: true
        },

        tipo: "image",

        midia: [
            {
                url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1080",
                alt: "Setup de programação com café"
            }
        ],

        legenda: "Segunda-feira começando no foco total! Qual projeto vocês estão desenvolvendo essa semana? 💻☕ #webdev #javascript #setup #code",

        localizacao: "São Paulo, Brazil",

        curtidas: 1240,

        curtidoPeloUsuario: false,

        salvoPeloUsuario: false,

        comentarios: [
            {
                id: "c1",
                username: "frontend_ninja",
                texto: "Setup sensacional! Qual é esse teclado?",
                curtidas: 4,
                dataCriacao: "2026-09-15T14:30:00Z"
            },
            {
                id: "c2",
                username: "ana_codes",
                texto: "Bora pra cima! Criando uma API em Node.js por aqui.🚀",
                curtidas: 2,
                dataCriacao: "2026-09-15T15:10:00Z"
            }
        ],

        dataPublicacao: "2026-09-15T14:00:00Z"
    },

    {
        id: "post_102",

        usuario: {
            username: "travel_vibes",
            nome: "Lucas pelo Mundo",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
            verificado: false
        },

        tipo: "carousel",

        midia: [
            {
                url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1080",
                alt: "Vista da praia ao pôr do sol"
            },
            {
                url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1080",
                alt: "Trilha na montanha"
            }
        ],

        legenda: "Desejando esse lugar hoje... Arrasta pro lado pra ver a vista do topo! 🏖️⛰️ #travel #natureza #wanderlust",

        localizacao: "Rio de Janeiro, Brazil",

        curtidas: 853,

        curtidoPeloUsuario: false,

        salvoPeloUsuario: false,

        comentarios: [
            {
                id: "c3",
                username: "carla_photo",
                texto: "Essa segunda foto ficou perfeita! 👏",
                curtidas: 1,
                dataCriacao: "2026-09-14T19:05:00Z"
            }
        ],

        dataPublicacao: "2026-09-14T18:45:00Z"
    },

    {
        id: "post_103",

        usuario: {
            username: "uiux_daily",
            nome: "Design Tricks",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
            verificado: true
        },

        tipo: "reels",

        midia: [
            {
                url: "https://assets.mixkit.co/videos/preview/mixkit-working-on-a-laptop-40333-large.mp4",
                thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1080",
                duracaoSegundos: 15
            }
        ],

        legenda: "3 erros de UI que você DEVE evitar no seu app! Dica 2 é a mais valiosa. 😉 #uiux #design #figma",

        localizacao: null,

        curtidas: 3420,

        curtidoPeloUsuario: false,

        salvoPeloUsuario: false,

        comentarios: [],

        dataPublicacao: "2026-09-13T10:15:00Z"
    },

    {
    id: "post_104",
    usuario: {
        username: "coffee.and.code",
        nome: "Coffee & Code",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
        verificado: false
    },
    tipo: "image",
    midia: [
        {
            url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1080",
            alt: "Mesa de trabalho com notebook e café"
        }
    ],
    legenda: "Um café, um notebook e algumas ideias novas. Às vezes é tudo que precisamos. ☕💻 #coding #developer #workspace",
    localizacao: "Nova York, USA",
    curtidas: 672,
    curtidoPeloUsuario: false,
    salvoPeloUsuario: false,
    comentarios: [
        {
            id: "c4",
            username: "dev_lifestyle",
            texto: "Esse setup tem uma vibe muito boa!",
            curtidas: 8,
            dataCriacao: "2026-09-12T16:20:00Z"
        }
    ],
    dataPublicacao: "2026-09-12T15:45:00Z"
},
{
    id: "post_105",
    usuario: {
        username: "nature_daily",
        nome: "Nature Daily",
        avatar: "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=150",
        verificado: true
    },
    tipo: "carousel",
    midia: [
        {
            url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1080",
            alt: "Paisagem montanhosa"
        },
        {
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1080",
            alt: "Montanhas cobertas por neve"
        },
        {
            url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1080",
            alt: "Paisagem natural ao pôr do sol"
        }
    ],
    legenda: "Alguns lugares parecem ter saído de um filme. 🌄 Qual dessas paisagens você escolheria? #nature #mountains #travel",
    localizacao: "Patagônia, Argentina",
    curtidas: 2187,
    curtidoPeloUsuario: false,
    salvoPeloUsuario: false,
    comentarios: [
        {
            id: "c5",
            username: "travel_vibes",
            texto: "A segunda foto é surreal!",
            curtidas: 15,
            dataCriacao: "2026-09-11T20:30:00Z"
        },
        {
            id: "c6",
            username: "carla_photo",
            texto: "Já quero conhecer esse lugar.",
            curtidas: 6,
            dataCriacao: "2026-09-11T21:05:00Z"
        }
    ],
    dataPublicacao: "2026-09-11T19:40:00Z"
},
{
    id: "post_106",
    usuario: {
        username: "fit_motivation",
        nome: "Fit Motivation",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
        verificado: false
    },
    tipo: "image",
    midia: [
        {
            url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1080",
            alt: "Pessoa treinando em uma academia"
        }
    ],
    legenda: "Não precisa ser perfeito. Só precisa continuar. 💪🔥 #fitness #workout #motivation",
    localizacao: "São Paulo, Brazil",
    curtidas: 934,
    curtidoPeloUsuario: false,
    salvoPeloUsuario: false,
    comentarios: [],
    dataPublicacao: "2026-09-10T12:20:00Z"
},
{
    id: "post_107",
    usuario: {
        username: "foodie.br",
        nome: "Foodie Brasil",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
        verificado: true
    },
    tipo: "image",
    midia: [
        {
            url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1080",
            alt: "Prato colorido com legumes"
        }
    ],
    legenda: "Almoço bonito, colorido e cheio de sabor. 🍅🥑🥕 Qual seria sua nota para esse prato? #food #foodie #lunch",
    localizacao: "Rio de Janeiro, Brazil",
    curtidas: 1456,
    curtidoPeloUsuario: false,
    salvoPeloUsuario: false,
    comentarios: [
        {
            id: "c7",
            username: "ana_codes",
            texto: "Só de olhar já fiquei com fome 😂",
            curtidas: 12,
            dataCriacao: "2026-09-09T17:15:00Z"
        }
    ],
    dataPublicacao: "2026-09-09T16:50:00Z"
},
{
    id: "post_108",
    usuario: {
        username: "creative.studio",
        nome: "Creative Studio",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150",
        verificado: false
    },
    tipo: "carousel",
    midia: [
        {
            url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1080",
            alt: "Escritório moderno"
        },
        {
            url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1080",
            alt: "Mesa de trabalho criativa"
        }
    ],
    legenda: "Um espaço que inspira novas ideias. ✨ Qual detalhe você mais gostou? #design #creative #workspace",
    localizacao: "Lisboa, Portugal",
    curtidas: 781,
    curtidoPeloUsuario: false,
    salvoPeloUsuario: false,
    comentarios: [
        {
            id: "c8",
            username: "uiux_daily",
            texto: "Esse espaço está incrível!",
            curtidas: 9,
            dataCriacao: "2026-09-08T14:10:00Z"
        },
        {
            id: "c9",
            username: "frontend_ninja",
            texto: "A iluminação ficou perfeita.",
            curtidas: 4,
            dataCriacao: "2026-09-08T15:00:00Z"
        }
    ],
    dataPublicacao: "2026-09-08T13:35:00Z"
},
{
    id: "post_109",
    usuario: {
        username: "street.frames",
        nome: "Street Frames",
        avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150",
        verificado: false
    },
    tipo: "reels",
    midia: [
        {
            url: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-city-at-night-11-large.mp4",
            thumbnail: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1080",
            duracaoSegundos: 12
        }
    ],
    legenda: "A cidade nunca para. 🌃✨ #city #streetphotography #night",
    localizacao: "São Paulo, Brazil",
    curtidas: 3214,
    curtidoPeloUsuario: false,
    salvoPeloUsuario: false,
    comentarios: [],
    dataPublicacao: "2026-09-07T22:10:00Z"
},
{
    id: "post_110",
    usuario: {
        username: "art.of.design",
        nome: "Art of Design",
        avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150",
        verificado: true
    },
    tipo: "image",
    midia: [
        {
            url: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1080",
            alt: "Mesa com materiais de design"
        }
    ],
    legenda: "Grandes projetos começam com pequenas ideias. 🎨🖥️ #design #creative #digitalart",
    localizacao: "Londres, UK",
    curtidas: 1098,
    curtidoPeloUsuario: false,
    salvoPeloUsuario: false,
    comentarios: [
        {
            id: "c10",
            username: "design_lovers",
            texto: "Muito bom! Adorei a composição.",
            curtidas: 7,
            dataCriacao: "2026-09-06T18:25:00Z"
        }
    ],
    dataPublicacao: "2026-09-06T17:50:00Z"
},
];

export const explorePosts = [
    {
        id: "explore_01",
        tipo: "image",
        midia: {
            url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600",
            alt: "Arquitetura moderna com formas geométricas"
        }
    },

    {
        id: "explore_02",
        tipo: "image",
        midia: {
            url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
            alt: "Câmera fotográfica sobre uma superfície"
        }
    },

    {
        id: "explore_03",
        tipo: "reels",
        midia: {
            url: "https://assets.mixkit.co/videos/preview/mixkit-young-man-playing-an-online-video-game-39772-large.mp4",
            thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600",
            duracaoSegundos: 15
        }
    },

    {
        id: "explore_04",
        tipo: "image",
        midia: {
            url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
            alt: "Pessoa caminhando em uma paisagem natural"
        }
    },

    {
        id: "explore_05",
        tipo: "image",
        midia: {
            url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600",
            alt: "Pessoa usando uma roupa elegante"
        }
    },

    {
        id: "explore_06",
        tipo: "reels",
        midia: {
            url: "https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-keyboard-39783-large.mp4",
            thumbnail: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
            duracaoSegundos: 12
        }
    },

    {
        id: "explore_07",
        tipo: "image",
        midia: {
            url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
            alt: "Café servido em uma cafeteria"
        }
    },

    {
        id: "explore_08",
        tipo: "image",
        midia: {
            url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
            alt: "Prato saudável com vegetais"
        }
    },

    {
        id: "explore_09",
        tipo: "reels",
        midia: {
            url: "https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-a-tablet-in-a-modern-office-39789-large.mp4",
            thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600",
            duracaoSegundos: 14
        }
    },

    {
        id: "explore_10",
        tipo: "image",
        midia: {
            url: "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?w=600",
            alt: "Cidade iluminada durante a noite"
        }
    },

    {
        id: "explore_11",
        tipo: "image",
        midia: {
            url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600",
            alt: "Montanha coberta de neve"
        }
    },

    {
        id: "explore_12",
        tipo: "reels",
        midia: {
            url: "https://assets.mixkit.co/videos/preview/mixkit-stylish-woman-walking-in-a-city-39805-large.mp4",
            thumbnail: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
            duracaoSegundos: 13
        }
    }
];