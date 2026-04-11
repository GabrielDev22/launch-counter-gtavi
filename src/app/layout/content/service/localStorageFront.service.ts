import { Injectable } from '@angular/core';
import { NewsItem } from '../model/noticies-gta';
import { Character } from '../model/character';
import { MapInstructionSections, ZoneUbication } from '../model/maps';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageFrontService {

  constructor() { }

  getCharacters(): Character[] {
    return [
      {
        id: 1,
        name: 'Lucia',
        role: 'Protagonista Principal',
        subtitle: 'Primera mujer protagonista en la historia de Grand Theft Auto',
        description: 'Lucia es la cara del cambio en GTA VI. Con raíces latinas y un pasado marcado por el crimen, inicia su historia en Leonida recién salida de prisión. Determinada y calculadora, navega el submundo criminal junto a Jason en busca de una salida — y del sueño americano a su manera. Su narrativa rompe con todos los moldes que definieron a la saga durante dos décadas.',
        traits: [
          { label: 'Rol', value: 'Co-protagonista jugable' },
          { label: 'Origen', value: 'Leonida, Florida' },
          { label: 'Estado', value: 'Ex-convicta' },
          { label: 'Pareja', value: 'Jason' },
          { label: 'Herencia', value: 'Latina' },
          { label: 'Debut', value: 'Trailer #1 · Dic 2023' }
        ],
        confirmedIn: 'Trailer Oficial #1 — 4 de diciembre, 2023',
        theme: 'lucia'
      },
      {
        id: 2,
        name: 'Jason',
        role: 'Co-protagonista',
        subtitle: 'El ancla criminal en el corazón del estado de Leonida',
        description: 'Jason es un hombre forjado por las calles de Leonida. Conoce cada rincón del submundo criminal del estado inspirado en Florida y es el complemento perfecto para Lucia — impulsivo donde ella es estratégica, territorial donde ella es adaptable. Juntos conforman el dúo más peligroso en la historia de GTA, con una dinámica de pareja que evoca a Bonnie & Clyde en el siglo XXI.',
        traits: [
          { label: 'Rol', value: 'Co-protagonista jugable' },
          { label: 'Origen', value: 'Leonida, Florida' },
          { label: 'Estado', value: 'Criminal local' },
          { label: 'Pareja', value: 'Lucia' },
          { label: 'Estilo', value: 'Impulsivo y territorial' },
          { label: 'Debut', value: 'Trailer #1 · Dic 2023' }
        ],
        confirmedIn: 'Trailer Oficial #1 — 4 de diciembre, 2023',
        theme: 'jason'
      }
    ];
  }

  getNews(): NewsItem[]{
    return [
      {
        id: 1,
        category: 'Trailers',
        date: '4 Dic 2023',
        title: 'Trailer #1: Rockstar rompe récords con 93 millones de vistas en 24 horas',
        excerpt: 'El primer trailer oficial de GTA VI se convirtió en el video de videojuego más visto de la historia en YouTube. En menos de un día superó a cualquier trailer de cine o música. Lucia, la primera protagonista femenina de la saga principal, lidera una historia de crimen junto a Jason en el estado de Leonida.',
        tag: 'TRAILER OFICIAL',
        featured: true,
        link: 'https://www.youtube.com/watch?v=QdBZY2fkU-0'
      },
      {
        id: 2,
        category: 'Personajes',
        date: '4 Dic 2023',
        title: 'Lucia y Jason: dos protagonistas jugables por primera vez en la saga',
        excerpt: 'GTA VI presenta a Lucia como la primera mujer protagonista en la historia principal de Grand Theft Auto. Junto a Jason, forman una pareja que recorre Leonida en busca de libertad. La historia promete una narrativa más profunda y personal que cualquier entrega anterior.',
        tag: 'PERSONAJES',
        featured: false
      },
      {
        id: 3,
        category: 'Lanzamiento',
        date: 'Ene 2025',
        title: 'Confirmado: GTA VI se lanza en 2026 solo en PS5 y Xbox Series X',
        excerpt: 'Rockstar Games confirmó que Grand Theft Auto VI llegará en 2026 exclusivamente para PlayStation 5 y Xbox Series X. La versión de PC quedó sin fecha por el momento, repitiendo el patrón de GTA V. El estudio priorizó la calidad y optimización sobre el lanzamiento simultáneo en PC.',
        tag: 'FECHA OFICIAL',
        featured: false
      },
      {
        id: 4,
        category: 'Mundo',
        date: 'Dic 2023',
        title: 'Leonida y Vice City: el mapa más grande y vivo en la historia de Rockstar',
        excerpt: 'El estado de Leonida, inspirado en Florida, es el escenario de GTA VI. Vice City regresa como ciudad principal con una densidad y detalle sin precedentes. Los entornos rurales, costas y zonas suburbanas complementan una geografía más variada que en cualquier GTA anterior.',
        tag: 'MUNDO ABIERTO',
        featured: false
      },
      {
        id: 5,
        category: 'Plataformas',
        date: 'Dic 2023',
        title: 'Sin PC en el lanzamiento: consolas primero, igual que GTA V en 2013',
        excerpt: 'Al igual que ocurrió con GTA V, la versión para PC de GTA VI no estará disponible en el día de lanzamiento. PS5 y Xbox Series X serán las únicas plataformas de salida. Rockstar no ha dado una fecha estimada para el port de PC.',
        tag: 'PLATAFORMAS',
        featured: false
      },
      {
        id: 6,
        category: 'Trailers',
        date: 'Dic 2023',
        title: 'Análisis del Trailer #1: cada detalle que encontró la comunidad',
        excerpt: 'La comunidad de GTA analizó fotograma a fotograma el primer trailer oficial. Desde referencias a crímenes reales de Florida hasta detalles sobre el sistema de economía dinámica del juego. Aquí está todo lo que se descubrió en las primeras 48 horas.',
        tag: 'ANÁLISIS',
        featured: false
      }
    ];
  }

  getMaps(): MapInstructionSections[]{
    return [
      {
        id: 1,
        img : 'assets/gta-world/vice-city-gta-6.jpg',
        title: "Vice City",
        tagZone: "Zona 01 / 06",
        tagText: "Ciudad principal",
        filter: ZoneUbication.VICE_CITY,
        description: "La versión GTA del Miami moderno. Glamour, crimen y exceso conviven en esta metrópolis densa con barrios diferenciados: desde Vice Beach hasta Little Cuba. El mapa más detallado de la saga.",
        mapDataZone: {
          type: "Metrópolis urbana",
          inspiration: "Miami, Florida",
          confirmed: "Tráiler 1 & 2",
          density: "Muy alta"
        }
      },
      {
        id: 2,
        img : 'assets/gta-world/leonida-keys-gta-6.jpg',
        title: "Leonida Keys",
        tagZone: "Zona 02 / 06",
        tagText: "Archipiélago tropical",
        filter: ZoneUbication.LEONIDAS_KEYS,
        description: "Al sur de Vice City, un archipiélago tropical con aguas cristalinas infestadas de peligros. Jet skis, buceo, tortugas y tiburones. Aquí comienza la historia de Jason.",
        mapDataZone: {
          type: "Islas / Costa",
          inspiration: "Florida Keys",
          confirmed: "Náuticas, buceo",
          density: "Tiburones, tortugas"
        }
      },
      {
        id: 3,
        img : 'assets/gta-world/grassrivers-grand-theft-auto-6.jpg',
        title: "Grassrivers",
        tagZone: "Zona 03 / 06",
        tagText: "Pantanos y marismas",
        filter: ZoneUbication.GRASSIREVERS,
        description: "Pantanos inhóspitos llenos de caimanes y personajes peligrosos. Los terrenos fangosos dificultan la navegación. Vistos en ambos trailers como zona de contrastes y peligro constante.",
        mapDataZone: {
          type: "Swamp / marisma",
          inspiration: "Everglades",
          confirmed: "Caimanes, locales",
          density: "Muy difícil"
        }
      },
      {
        id: 4,
        img : 'assets/gta-world/port-gellhorn-gta-6.jpg',
        title: "Port Gellhorn",
        tagZone: "Zona 04 / 06",
        tagText: "Costa olvidada",
        filter: ZoneUbication.PORT_GELLHORN,
        description: "Antigua zona turística caída en decadencia. Crimen, pobreza y desesperación. Moteles de mala muerte y calles peligrosas. Ideal para exploración en dirt bike por su terreno accidentado.",
        mapDataZone: {
          type: "Zona degradada",
          inspiration: "Oscura, peligrosa",
          confirmed: "Off-road, sigilo",
          density: "Pandillas locales"
        }
      },
      {
        id: 5,
        img : 'assets/gta-world/ambrosia-grand-theft-auto-6.jpg',
        title: "Ambrosia",
        tagZone: "Zona 05 / 06",
        tagText: "Ciudad industrial",
        filter: ZoneUbication.RAG_WEED,
        description: "Ciudad industrial dominada por pandillas de motociclistas. Fábricas, algunas como fachada de negocios ilegales. El centro: la refinería Allied Crystal Sugar. Zona de tiroteos épicos.",
        mapDataZone: {
          type: "Industrial / urbano",
          inspiration: "Biker gangs",
          confirmed: "Allied Crystal Sugar",
          density: "Calor seco, incendios"
        }
      },
      {
        id: 6,
        img : 'assets/gta-world/mount-kalaga-gta-6.jpg',
        title: "Mount Kalaga",
        tagZone: "Zona 06 / 06",
        tagText: "Parque natural",
        filter: ZoneUbication.MOUNT_KALAGA,
        description: "Parque nacional repleto de vida salvaje. Caza, pesca y senderismo sin el peligro de ser devorado. Espíritu similar a Red Dead Redemption 2. Cuidado con los personajes extraños del bosque.",
        mapDataZone: {
          type: "Zona natural",
          inspiration: "Caza, pesca, trails",
          confirmed: "Pumas, ciervos",
          density: "RDR2-like"
        }
      },
    ]
  }

}
