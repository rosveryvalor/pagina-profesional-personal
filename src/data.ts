/* ── Shared style helpers ───────────────────────────────────────────────────── */
import type { CSSProperties } from 'react'

export const frauncesDisplay: CSSProperties = {
  fontFamily: "'Fraunces', Georgia, serif",
  fontVariationSettings: "'opsz' 144",
}
export const frauncesBody: CSSProperties = {
  fontFamily: "'Fraunces', Georgia, serif",
  fontVariationSettings: "'opsz' 72",
}

/* ── Projects ───────────────────────────────────────────────────────────────── */
export interface Project {
  slug: string
  n: string
  name: string
  subtitle: string
  category: string
  year: string
  location: string
  img: string
  gallery: string[]
  description: string
  concept: string
  rol: string[]
  aspect: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'interior-residencial',
    n: '01',
    name: 'INTERIOR RESIDENCIAL',
    subtitle: 'Diseño espacial y mobiliario a medida',
    category: 'Diseño de Interiores / Mobiliario',
    year: '2025',
    location: 'Buenos Aires, Argentina',
    img: 'https://images.unsplash.com/photo-1746719799201-e8254488dcd4?w=960&h=640&fit=crop&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1746719799201-e8254488dcd4?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1757862351308-b81c87e6b89a?w=800&h=1000&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?w=1200&h=700&fit=crop&auto=format',
    ],
    description: 'Una propuesta residencial que parte del análisis profundo del modo de habitar del cliente. Cada espacio responde a una lógica funcional y a una sensibilidad estética definida por la materialidad, la luz natural y la escala humana.',
    concept: 'El concepto nace de la tensión entre lo cálido y lo contemporáneo. La paleta de materiales —madera, piedra y textiles naturales— dialoga con la geometría limpia del mobiliario para crear ambientes que se sienten al mismo tiempo modernos e íntimos.',
    rol: ['Diseño de Interiores', 'Diseño de Mobiliario', 'Visualización 3D', 'Documentación Técnica'],
    aspect: 'aspect-[3/2]',
  },
  {
    slug: 'suite-contemporanea',
    n: '02',
    name: 'SUITE CONTEMPORÁNEA',
    subtitle: 'Dormitorio principal y área de descanso',
    category: 'Diseño de Interiores / Visualización 3D',
    year: '2025',
    location: 'Palermo, Buenos Aires',
    img: 'https://images.unsplash.com/photo-1772475385404-c39328ea8817?w=700&h=700&fit=crop&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1772475385404-c39328ea8817?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1786204583520-9c2e81013d86?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1774516534097-76eb46de7229?w=800&h=1000&fit=crop&auto=format',
    ],
    description: 'Diseño de dormitorio principal para una residencia en Palermo. El proyecto integra el área de descanso con un espacio de lectura y guardarropa abierto, resolviendo en un solo volumen funciones que habitualmente se fragmentan.',
    concept: 'La propuesta parte de una materialidad sobria —lino, madera clara, hormigón pulido— que permite que la luz natural sea el elemento protagónico. La noche y el día se leen de maneras completamente distintas en el mismo espacio.',
    rol: ['Diseño de Interiores', 'Visualización 3D', 'Documentación Técnica'],
    aspect: 'aspect-square',
  },
  {
    slug: 'estudio-de-detalle',
    n: '03',
    name: 'ESTUDIO DE DETALLE',
    subtitle: 'Investigación de composición y materialidad',
    category: 'Diseño de Mobiliario',
    year: '2024',
    location: 'Buenos Aires, Argentina',
    img: 'https://images.unsplash.com/photo-1757862351308-b81c87e6b89a?w=700&h=900&fit=crop&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1757862351308-b81c87e6b89a?w=1200&h=900&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1783125127010-04a506ad3c12?w=1200&h=800&fit=crop&auto=format',
    ],
    description: 'Un ejercicio de investigación sobre la relación entre objeto, escala y contexto. El proyecto explora cómo un mueble dialoga con el espacio arquitectónico que lo rodea, y cómo pequeños detalles de materialidad y proporción definen la experiencia.',
    concept: 'Cada objeto fue estudiado en relación con su entorno: la textura del tejido contra la rugosidad de la pared, la escala del accesorio frente a la amplitud del espacio. Un proyecto sobre la atención al detalle como práctica de diseño.',
    rol: ['Diseño de Mobiliario', 'Dirección de Arte', 'Visualización 3D'],
    aspect: 'aspect-[3/4]',
  },
  {
    slug: 'estudio-comercial',
    n: '04',
    name: 'ESTUDIO COMERCIAL',
    subtitle: 'Espacio de trabajo y atención al cliente',
    category: 'Interiorismo Comercial',
    year: '2024',
    location: 'San Telmo, Buenos Aires',
    img: 'https://images.unsplash.com/photo-1786204583520-9c2e81013d86?w=960&h=640&fit=crop&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1786204583520-9c2e81013d86?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1783125127010-04a506ad3c12?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1753800558596-9ad08a31413c?w=800&h=1000&fit=crop&auto=format',
    ],
    description: 'Diseño de un estudio profesional en San Telmo que integra área de trabajo, sala de reuniones y espacio de exhibición en una planta única. El proyecto debía comunicar identidad de marca sin perder funcionalidad operativa.',
    concept: 'La luz cenital y los materiales nobles —mármol, terciopelo, madera oscura— construyen un ambiente donde la sofisticación no compite con la productividad. El espacio funciona a distintos ritmos a lo largo del día.',
    rol: ['Diseño de Interiores Comercial', 'Diseño de Mobiliario', 'Visualización 3D', 'Documentación Técnica'],
    aspect: 'aspect-[3/2]',
  },
]

/* ── Expertise ──────────────────────────────────────────────────────────────── */
export interface Expertise {
  slug: string
  n: string
  title: string
  subtitle: string
  desc: string
  expanded: string
  includes: string[]
  tools: string[]
  accent: string
  primary: boolean
  images: string[]
}

export const EXPERTISE: Expertise[] = [
  {
    slug: 'diseno-de-interiores',
    n: '01',
    title: 'Diseño de Interiores',
    subtitle: 'La disciplina central',
    desc: 'Diseño de espacios residenciales y comerciales con enfoque funcional, estético y personalizado. Disciplina central de mi práctica profesional.',
    expanded: 'El diseño de interiores es la síntesis de todas mis disciplinas. Cada proyecto comienza con un análisis profundo del usuario, el espacio y el contexto para construir propuestas que tengan sentido en lo funcional y en lo emocional. Trabajo con una metodología que va desde el concepto hasta la obra, acompañando cada etapa del proceso.',
    includes: ['Diseño de plantas y distribución espacial', 'Selección y especificación de materiales', 'Diseño de iluminación', 'Coordinación de mobiliario', 'Dirección de obra', 'Interiorismo residencial y comercial'],
    tools: ['AutoCAD', 'SketchUp', 'Revit', 'Adobe Suite', '3ds Max'],
    accent: '#A87862',
    primary: true,
    images: [
      'https://images.unsplash.com/photo-1746719799201-e8254488dcd4?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?w=800&h=600&fit=crop&auto=format',
    ],
  },
  {
    slug: 'diseno-de-mobiliario',
    n: '02',
    title: 'Diseño de Mobiliario',
    subtitle: 'Soluciones a medida integradas al espacio',
    desc: 'Diseño de mobiliario y soluciones a medida integradas al espacio con criterio funcional y estético.',
    expanded: 'El mobiliario a medida permite resolver de manera óptima espacios con requerimientos específicos. Diseño piezas que dialogan con la arquitectura existente, respetan la paleta de materiales del proyecto y responden a las necesidades reales de uso. Cada mueble es pensado como parte de un sistema, no como un elemento aislado.',
    includes: ['Diseño de muebles a medida', 'Desarrollo de detalles constructivos', 'Especificación de materiales y terminaciones', 'Coordinación con carpinteros y herreros', 'Diseño de sistemas de almacenamiento'],
    tools: ['AutoCAD', 'SketchUp', 'Rhinoceros', 'Adobe Illustrator'],
    accent: '#A87862',
    primary: false,
    images: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&h=600&fit=crop&auto=format',
    ],
  },
  {
    slug: 'visualizacion-3d',
    n: '03',
    title: 'Visualización 3D',
    subtitle: 'Comunicar el proyecto antes de ejecutarlo',
    desc: 'Modelado y visualización arquitectónica para comunicar conceptos y decisiones de diseño con precisión.',
    expanded: 'La visualización 3D es una herramienta fundamental para comunicar una propuesta antes de que exista físicamente. Genero renders e imágenes que permiten al cliente comprender el proyecto con claridad, tomar decisiones con confianza y validar opciones de materiales, colores y disposición espacial. Es también una herramienta de diseño: modelar en 3D permite detectar problemas y oportunidades que no siempre son visibles en planta.',
    includes: ['Modelado 3D de espacios completos', 'Renders de alta calidad', 'Visualizaciones de detalle', 'Animaciones y recorridos virtuales', 'Presentaciones de material y color'],
    tools: ['3ds Max + Corona Renderer', 'SketchUp + Enscape', 'Blender', 'Photoshop', 'Lumion'],
    accent: '#A87862',
    primary: false,
    images: [
      'https://images.unsplash.com/photo-1757862351308-b81c87e6b89a?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1786204583520-9c2e81013d86?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1774516534097-76eb46de7229?w=800&h=1000&fit=crop&auto=format',
    ],
  },
  {
    slug: 'documentacion-tecnica',
    n: '04',
    title: 'Documentación Técnica',
    subtitle: 'Precisión para la ejecución',
    desc: 'Planimetría, detalles constructivos y documentación técnica para el desarrollo integral del proyecto.',
    expanded: 'La documentación técnica es el puente entre el diseño y la ejecución. Elaboro planos completos que permiten a contratistas, carpinteros y otros especialistas entender exactamente qué construir y cómo. Una buena documentación reduce errores, facilita la obra y garantiza que el resultado final sea fiel a la propuesta de diseño.',
    includes: ['Plantas de distribución', 'Plantas de mobiliario', 'Elevaciones y cortes', 'Detalles constructivos', 'Planillas de materiales', 'Memorias descriptivas'],
    tools: ['AutoCAD', 'Revit', 'Adobe InDesign'],
    accent: '#A87862',
    primary: false,
    images: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=800&h=600&fit=crop&auto=format',
    ],
  },
  {
    slug: 'diseno-visual',
    n: '05',
    title: 'Diseño Visual',
    subtitle: 'Presentar el proyecto con criterio',
    desc: 'Comunicación visual, presentación de proyectos y herramientas de diseño digital aplicadas al interiorismo.',
    expanded: 'La capacidad de comunicar visualmente un proyecto es tan importante como el proyecto mismo. Diseño presentaciones, booklets y materiales gráficos que transmiten la propuesta con claridad y estética. Esta disciplina me permite también abordar proyectos de identidad visual, diseño UX/UI y comunicación para estudios de arquitectura e interiorismo.',
    includes: ['Presentaciones de proyecto', 'Moodboards y paletas', 'Booklets y catálogos', 'Diseño UX/UI para portfolios', 'Identidad visual para estudios de diseño'],
    tools: ['Adobe InDesign', 'Figma', 'Photoshop', 'Illustrator', 'After Effects'],
    accent: '#A87862',
    primary: false,
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop&auto=format',
    ],
  },
]
