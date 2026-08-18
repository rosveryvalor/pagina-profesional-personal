import { useState, useEffect, useRef, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavBar from './NavBar'
import { PROJECTS, EXPERTISE, frauncesDisplay, frauncesBody } from './data'
import suiteCama from './imports/suite-cama.png'

/* ── Scroll reveal ──────────────────────────────────────────────────────────── */
function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

function Reveal({ children, delay = 0, className = '' }: {
  children: ReactNode; delay?: number; className?: string
}) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(16px)',
      transition: `opacity 0.9s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms, transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

/* ── Hero ─────────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="hero" className="flex flex-col md:flex-row md:min-h-screen" style={{ backgroundColor: '#A87862' }}>
      {/* Text panel — ~37% */}
      <div
        className="order-2 md:order-1 md:w-[37%] flex flex-col justify-between px-8 md:px-12 lg:px-16 pt-24 pb-10 md:py-16"
        style={{ backgroundColor: '#A87862' }}
      >
        {/* Top label row */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-px" style={{ backgroundColor: 'rgba(245,242,236,0.35)' }} />
              <span className="font-mono text-[8px] tracking-[0.32em] uppercase" style={{ color: 'rgba(245,242,236,0.55)' }}>
                Portfolio
              </span>
            </div>
            <span className="font-mono text-[7px] tracking-[0.18em]" style={{ color: 'rgba(245,242,236,0.25)' }}>
              2026
            </span>
          </div>
          <div className="h-px w-full" style={{ backgroundColor: 'rgba(245,242,236,0.1)' }} />
        </div>

        {/* Name block — centre vertical */}
        <div className="flex-1 flex flex-col justify-center py-10">
          {/* Discipline tag */}
          <div className="mb-7 flex items-center gap-2">
            <span
              className="font-mono text-[8px] tracking-[0.28em] uppercase px-2.5 py-1"
              style={{ color: 'rgba(245,242,236,0.9)', border: '1px solid rgba(245,242,236,0.25)', letterSpacing: '0.28em' }}
            >
              Diseñadora de Interiores
            </span>
          </div>

          {/* ROSVERY VALOR — unified mark */}
          <div className="mb-2">
            <h1
              className="text-ivory font-light leading-[0.87] tracking-[-0.02em]"
              style={{ ...frauncesDisplay, fontSize: 'clamp(3.5rem, 7.5vw, 6.5rem)' }}
            >
              ROSVERY
            </h1>
            <h1
              className="text-ivory font-light leading-[0.87] tracking-[-0.02em] italic"
              style={{ ...frauncesDisplay, fontSize: 'clamp(3.5rem, 7.5vw, 6.5rem)', marginLeft: 'clamp(1rem, 2vw, 2rem)' }}
            >
              Valor
            </h1>
          </div>

          <div className="mb-8 mt-4 h-px" style={{ backgroundColor: 'rgba(245,242,236,0.18)' }} />

          <p
            className="text-ivory font-light leading-snug mb-5"
            style={{ ...frauncesBody, fontSize: 'clamp(1.1rem, 1.8vw, 1.45rem)' }}
          >
            Diseñando espacios<br />con intención.
          </p>

          {/* Disciplines — primary only */}
          <p className="font-mono text-[8px] leading-relaxed mb-10" style={{ color: 'rgba(245,242,236,0.45)', letterSpacing: '0.16em' }}>
            Diseño de interiores&nbsp;·&nbsp;Mobiliario<br />Visualización 3D
          </p>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[8px] tracking-[0.28em] uppercase" style={{ color: 'rgba(245,242,236,0.45)' }}>
              Explorar
            </span>
            <span style={{ color: 'rgba(245,242,236,0.55)' }}>↓</span>
          </div>
        </div>

        <div className="h-px" style={{ backgroundColor: 'rgba(245,242,236,0.1)' }} />
      </div>

      {/* Image — ~63% */}
      <div className="order-1 md:order-2 md:flex-1 h-[60vh] md:h-auto overflow-hidden relative" style={{ backgroundColor: '#333' }}>
        <img
          src={suiteCama}
          alt="Interior arquitectónico con luz cálida y detalles refinados"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.88)' }}
        />
        {/* thin vertical divider */}
        <div className="absolute left-0 top-0 bottom-0 w-px" style={{ backgroundColor: 'rgba(245,242,236,0.06)' }} />
        {/* architectural annotation bottom-right */}
        <div className="absolute bottom-6 right-7 text-right">
          <p className="font-mono text-[7px] tracking-[0.22em] uppercase mb-1" style={{ color: 'rgba(245,242,236,0.3)' }}>
            Buenos Aires, Argentina
          </p>
          <p className="font-mono text-[7px] tracking-[0.14em]" style={{ color: 'rgba(245,242,236,0.18)' }}>
            34°36′S 58°22′O
          </p>
        </div>
      </div>
    </section>
  )
}

/* ── Introduction ────────────────────────────────────────────────────────────── */
function Introduction() {
  return (
    <section className="bg-ivory py-28 md:py-36">
      <div className="max-w-[1360px] mx-auto px-8 md:px-14">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Lateral architectural annotation */}
          <div className="md:col-span-2 pt-1">
            <Reveal>
              <div>
                <span className="font-mono text-[8px] tracking-[0.28em] uppercase text-taupe">Concepto</span>
                <div className="mt-2 w-5 h-px" style={{ backgroundColor: '#A87862' }} />
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-9 md:col-start-3">
            <Reveal>
              <h2
                className="text-charcoal font-light tracking-[-0.02em] leading-[1.18] mb-10"
                style={{ ...frauncesBody, fontSize: 'clamp(1.75rem, 3.8vw, 3.25rem)' }}
              >
                Cada proyecto es una conversación entre quien habita el espacio y quien lo diseña.
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <div className="flex items-start gap-8 flex-col sm:flex-row">
                <div className="w-10 h-px bg-stone flex-shrink-0 mt-2" />
                <p className="font-sans text-sm text-warm-grey leading-relaxed" style={{ maxWidth: 520, fontWeight: 400 }}>
                  Trabajo desde Buenos Aires creando espacios residenciales y comerciales donde la materialidad, la luz y la función se equilibran con precisión y carácter.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Selected Work ────────────────────────────────────────────────────────────── */
function ProjectCard({ p }: { p: typeof PROJECTS[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to={`/proyecto/${p.slug}`}
      className="group block cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`overflow-hidden mb-5 ${p.aspect}`}
        style={{ backgroundColor: '#D9D2C7' }}
      >
        <img
          src={p.img}
          alt={p.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
        />
      </div>

      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[8px] tracking-[0.25em]" style={{ color: '#A87862' }}>{p.n}</span>
            <div className="h-px w-4 bg-stone" />
          </div>
          <h3
            className="text-ivory font-light tracking-[-0.01em] mb-1.5 leading-tight group-hover:text-terracotta transition-colors duration-300"
            style={{ ...frauncesBody, fontSize: '1.05rem' }}
          >
            {p.name}
          </h3>
          <p className="font-mono text-[9px] tracking-[0.1em] uppercase" style={{ color: 'rgba(167,157,142,0.65)' }}>
            {p.category} · {p.year}
          </p>
        </div>
        <span
          className="font-mono text-[9px] tracking-[0.18em] uppercase mt-1 transition-all duration-300 flex-shrink-0"
          style={{
            color: '#A87862',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateX(0)' : 'translateX(-6px)',
          }}
        >
          Ver →
        </span>
      </div>
    </Link>
  )
}

function SelectedWork() {
  return (
    <section id="work" className="py-16 md:py-24" style={{ backgroundColor: '#252520' }}>
      <div className="max-w-[1360px] mx-auto px-8 md:px-14">
        <Reveal>
          <div
            className="flex items-end justify-between pb-6 mb-16"
            style={{ borderBottom: '1px solid rgba(217,210,199,0.12)' }}
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
<span className="font-mono text-[8px] tracking-[0.28em] uppercase" style={{ color: 'rgba(167,157,142,0.6)' }}>Portafolio</span>
              </div>
              <h2
                className="text-ivory font-light tracking-[-0.025em]"
                style={{ ...frauncesDisplay, fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
              >
                Proyectos Seleccionados
              </h2>
            </div>
            <div className="hidden md:flex flex-col items-end gap-1.5">
              <p className="font-mono text-[8px] tracking-[0.1em] uppercase" style={{ color: 'rgba(167,157,142,0.5)' }}>
                Diseño de Interiores · Mobiliario · Visualización 3D
              </p>
              <div className="h-px w-20" style={{ backgroundColor: 'rgba(167,157,142,0.18)' }} />
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mb-8 md:mb-14">
          <Reveal className="md:col-span-7">
            <ProjectCard p={PROJECTS[0]} />
          </Reveal>
          <Reveal delay={110} className="md:col-span-4 md:col-start-9 md:pt-24">
            <ProjectCard p={PROJECTS[1]} />
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <Reveal className="md:col-span-4">
            <ProjectCard p={PROJECTS[2]} />
          </Reveal>
          <Reveal delay={100} className="md:col-span-7 md:col-start-6 md:-mt-12">
            <ProjectCard p={PROJECTS[3]} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}


/* ── Expertise ────────────────────────────────────────────────────────────────── */
function ExpertiseRow({ item, delay }: { item: typeof EXPERTISE[0]; delay: number }) {
  const [hov, setHov] = useState(false)
  return (
    <Reveal delay={delay}>
      <Link
        to="/especialidades"
        className="grid grid-cols-12 gap-4 md:gap-8 block"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          padding: item.primary ? '2.5rem 1.25rem' : '1.75rem 1.25rem',
          borderBottom: hov ? '1px solid transparent' : '1px solid #D9D2C7',
          backgroundColor: hov ? '#A87862' : 'transparent',
          transform: hov ? 'scale(1.012)' : 'scale(1)',
          transition: 'background-color 0.35s ease, transform 0.35s ease, border-color 0.35s ease',
          borderRadius: '2px',
          marginLeft: '-1.25rem',
          marginRight: '-1.25rem',
        }}
      >
        <div className="col-span-1 pt-1">
          <span
            className="font-mono text-[8px] tracking-[0.22em]"
            style={{ color: hov ? 'rgba(245,242,236,0.6)' : item.accent, transition: 'color 0.35s ease' }}
          >
            {item.n}
          </span>
        </div>

        <div className="col-span-11 md:col-span-5">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3
              className="font-light tracking-[-0.015em]"
              style={{
                ...frauncesBody,
                fontSize: item.primary ? 'clamp(1.5rem, 2.5vw, 2.25rem)' : 'clamp(1.1rem, 1.5vw, 1.375rem)',
                color: hov ? '#F5F2EC' : '#252520',
                transition: 'color 0.35s ease',
              }}
            >
              {item.title}
            </h3>
            {item.primary && (
              <span
                className="font-mono text-[7px] tracking-[0.25em] uppercase"
                style={{ color: hov ? 'rgba(245,242,236,0.55)' : '#A87862', transition: 'color 0.35s ease' }}
              >
                Principal
              </span>
            )}
          </div>
        </div>

        <div className="col-span-11 md:col-span-5 md:col-start-8 col-start-2 flex items-center justify-between gap-4">
          <p
            className="font-sans text-xs leading-relaxed"
            style={{ fontWeight: 400, color: hov ? 'rgba(245,242,236,0.7)' : '#817B72', transition: 'color 0.35s ease' }}
          >
            {item.desc}
          </p>
          <span
            className="font-mono text-[9px] tracking-[0.18em] uppercase flex-shrink-0"
            style={{
              color: hov ? '#F5F2EC' : item.accent,
              transform: hov ? 'translateX(4px)' : 'translateX(0)',
              transition: 'color 0.35s ease, transform 0.35s ease',
            }}
          >
            Ver →
          </span>
        </div>
      </Link>
    </Reveal>
  )
}

function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-ivory py-16 md:py-24">
      <div className="max-w-[1360px] mx-auto px-8 md:px-14">
        <Reveal>
          <div className="pb-6 mb-14" style={{ borderBottom: '1px solid #D9D2C7' }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[8px] tracking-[0.28em] uppercase text-taupe">Disciplinas</span>
            </div>
            <div className="flex items-end justify-between">
              <h2
                className="text-charcoal font-light tracking-[-0.025em]"
                style={{ ...frauncesDisplay, fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
              >
                Especialidades
              </h2>
              <Link
                to="/especialidades"
                className="font-mono text-[9px] tracking-[0.2em] uppercase text-warm-grey hover:text-terracotta transition-colors relative group hidden md:block"
              >
                Ver en detalle →
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-terracotta group-hover:w-full transition-all duration-300" />
              </Link>
            </div>
          </div>
        </Reveal>

        {EXPERTISE.map((item, i) => (
          <ExpertiseRow key={item.slug} item={item} delay={i * 50} />
        ))}

        <Reveal delay={300}>
          <div className="mt-10 flex justify-center md:justify-start">
            <Link
              to="/especialidades"
              className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase px-7 py-3.5 transition-all duration-300 border"
              style={{ color: '#252520', borderColor: '#252520' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#252520'
                ;(e.currentTarget as HTMLElement).style.color = '#F5F2EC'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
                ;(e.currentTarget as HTMLElement).style.color = '#252520'
              }}
            >
              Ver todas las especialidades en detalle →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ── Process ──────────────────────────────────────────────────────────────────── */
const STEPS = [
  { n: '01', name: 'Comprender', desc: 'Brief, análisis de sitio, necesidades del cliente y requerimientos del proyecto.' },
  { n: '02', name: 'Concepto', desc: 'Dirección de mood, paleta de materiales y lenguaje de diseño espacial.' },
  { n: '03', name: 'Diseño', desc: 'Distribución espacial, selección de mobiliario y especificación de materiales.' },
  { n: '04', name: 'Visualizar', desc: 'Modelado 3D y visualización arquitectónica de la propuesta.' },
  { n: '05', name: 'Desarrollar', desc: 'Documentación técnica, detalles constructivos y entrega del proyecto.' },
]

function Process() {
  const stepColors = ['#A87862', '#A87862', '#A87862', '#A87862', '#A87862']
  return (
    <section id="process" className="pt-8 pb-16 md:pt-10 md:pb-24" style={{ backgroundColor: '#EDE9E2' }}>
      <div className="max-w-[1360px] mx-auto px-8 md:px-14">
        <Reveal className="mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-[8px] tracking-[0.28em] uppercase text-taupe">Metodología</span>
          </div>
          <h2
            className="text-charcoal font-light tracking-[-0.025em]"
            style={{ ...frauncesDisplay, fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            De la Idea al Espacio
          </h2>
        </Reveal>

        <div className="relative">
          <div
            className="hidden md:block absolute h-px"
            style={{ backgroundColor: '#D9D2C7', top: '0.3rem', left: '0.3rem', right: '0.3rem' }}
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 85}>
                <div>
                  <div
                    className="hidden md:block w-2.5 h-2.5 rounded-full border mb-8 relative z-10"
                    style={{ backgroundColor: '#EDE9E2', borderColor: stepColors[i] }}
                  />
                  <div className="flex items-center gap-3 mb-3 md:hidden">
                    <span className="font-mono text-[8px] tracking-[0.28em] uppercase" style={{ color: stepColors[i] }}>{step.n}</span>
                    <div className="h-px flex-1 bg-stone" />
                  </div>
                  <p className="font-mono text-[8px] tracking-[0.22em] uppercase mb-3 hidden md:block" style={{ color: stepColors[i] }}>
                    {step.n}
                  </p>
                  <h3
                    className="text-charcoal font-light mb-3"
                    style={{ ...frauncesBody, fontSize: '1.2rem' }}
                  >
                    {step.name}
                  </h3>
                  <p className="font-sans text-[11px] text-warm-grey leading-relaxed" style={{ fontWeight: 400 }}>
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── About ────────────────────────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="py-16 md:py-24" style={{ backgroundColor: '#EDE9E2' }}>
      <div className="max-w-[1360px] mx-auto px-8 md:px-14">
        <div className="grid md:grid-cols-12 gap-12 md:gap-10 items-start">
          <Reveal className="md:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden bg-stone">
                <img
                  src="https://images.unsplash.com/photo-1753800558596-9ad08a31413c?w=700&h=875&fit=crop&auto=format"
                  alt="Fotografía profesional — Rosvery Valor"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.88)' }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-5 py-4"
                  style={{ background: 'linear-gradient(to top, rgba(37,37,32,0.55), transparent)' }}
                >
                  <p className="font-sans text-xs text-ivory mb-0.5" style={{ fontWeight: 400 }}>Rosvery Valor</p>
                  <p className="font-mono text-[7px] tracking-[0.2em] uppercase" style={{ color: 'rgba(245,242,236,0.5)' }}>
                    Diseñadora de Interiores
                  </p>
                </div>
              </div>
              {/* architectural tag */}
              <div
                className="absolute -bottom-4 right-0 px-4 py-2.5 flex items-center gap-2"
                style={{ backgroundColor: '#EDE9E2', border: '1px solid #D9D2C7' }}
              >
                <span className="font-mono text-[7px] tracking-[0.14em]" style={{ color: '#A87862' }}>—</span>
                <p className="font-mono text-[8px] tracking-[0.18em] uppercase text-taupe">
                  Buenos Aires, Argentina
                </p>
              </div>
            </div>
          </Reveal>

          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center md:pt-10">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-5 h-px" style={{ backgroundColor: '#D9D2C7' }} />
                <span className="font-mono text-[8px] tracking-[0.28em] uppercase text-taupe">Sobre mí</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="text-charcoal font-light tracking-[-0.02em] leading-[1.1] mb-8"
                style={{ ...frauncesDisplay, fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}
              >
                Una diseñadora que piensa en espacios.
              </h2>
            </Reveal>
            <Reveal delay={130}>
              {/* Pull quote */}
              <blockquote
                className="font-light italic leading-snug mb-8 pl-4"
                style={{
                  ...frauncesBody,
                  fontSize: '1.05rem',
                  color: '#A87862',
                  borderLeft: '2px solid #A87862',
                }}
              >
                "Cada espacio cuenta una historia. Mi trabajo es ayudarte a contar la tuya."
              </blockquote>
            </Reveal>
            <Reveal delay={170}>
              <p className="font-sans text-sm text-warm-grey leading-relaxed mb-5" style={{ fontWeight: 400 }}>
                Soy Rosvery Valor, Diseñadora de Interiores apasionada por transformar ideas en espacios que combinan identidad, funcionalidad y sensibilidad estética.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <p className="font-sans text-sm text-warm-grey leading-relaxed mb-10" style={{ fontWeight: 400 }}>
                Mi formación abarca diseño de interiores, mobiliario a medida, visualización 3D y documentación técnica — una mirada integral que me permite acompañar cada proyecto de principio a fin.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="pt-8 flex items-center gap-7" style={{ borderTop: '1px solid #D9D2C7' }}>
                {[
                  { label: 'Behance', href: 'https://www.behance.net' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
                  { label: 'Instagram', href: 'https://www.instagram.com' },
                ].map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative font-mono text-[9px] tracking-[0.22em] uppercase text-warm-grey hover:text-charcoal transition-colors duration-300 group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-terracotta group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Contact ──────────────────────────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="py-14 md:py-20" style={{ backgroundColor: '#A87862' }}>
      <div className="max-w-[1360px] mx-auto px-8 md:px-14">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-9">
            <Reveal>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-6 h-px" style={{ backgroundColor: 'rgba(245,242,236,0.4)' }} />
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: 'rgba(245,242,236,0.55)' }}>
                  Hablemos
                </span>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <h2
                className="text-ivory font-light tracking-[-0.03em] leading-[1.0]"
                style={{ ...frauncesDisplay, fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
              >
                ¿Tenés un proyecto
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <h2
                className="text-ivory font-light tracking-[-0.03em] leading-[1.0] italic mb-10"
                style={{ ...frauncesDisplay, fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
              >
                en mente?
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="font-sans text-sm leading-relaxed mb-12" style={{ color: 'rgba(245,242,236,0.65)', maxWidth: 400, fontWeight: 400 }}>
                Creemos algo con intención. Escribime para hablar de tu proyecto o colaboración.
              </p>
            </Reveal>

            <Reveal delay={210}>
              <div className="flex flex-wrap items-center gap-7 mb-12">
                {[
                  { label: 'Email', href: 'mailto:hello@rosveryvalor.com' },
                  { label: 'Behance', href: 'https://www.behance.net' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
                  { label: 'Instagram', href: 'https://www.instagram.com' },
                ].map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative font-mono text-[9px] tracking-[0.22em] uppercase hover:text-ivory transition-colors duration-300 group"
                    style={{ color: 'rgba(245,242,236,0.5)' }}
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#F5F2EC' }} />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={270}>
              <a
                href="mailto:hello@rosveryvalor.com"
                className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.28em] uppercase px-8 py-4 transition-all duration-300"
                style={{ backgroundColor: '#252520', color: '#F5F2EC' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#F5F2EC'
                  ;(e.currentTarget as HTMLElement).style.color = '#252520'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#252520'
                  ;(e.currentTarget as HTMLElement).style.color = '#F5F2EC'
                }}
              >
                Escribime →
              </a>
            </Reveal>
          </div>

          <div className="md:col-span-3 hidden md:flex flex-col justify-end pb-2">
            <Reveal>
              <div>
                <div className="h-px mb-6" style={{ backgroundColor: 'rgba(245,242,236,0.15)' }} />
                <p className="font-mono text-[8px] tracking-[0.22em] uppercase mb-5" style={{ color: 'rgba(245,242,236,0.35)' }}>
                  Disponible para proyectos
                </p>
                <a
                  href="mailto:hello@rosveryvalor.com"
                  className="block font-sans text-sm text-ivory hover:text-charcoal transition-colors duration-300 mb-2"
                  style={{ fontWeight: 400 }}
                >
                  hello@rosveryvalor.com
                </a>
                <p className="font-mono text-[8px] tracking-[0.14em] uppercase" style={{ color: 'rgba(245,242,236,0.35)' }}>
                  Buenos Aires, Argentina
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Footer ───────────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="py-10" style={{ backgroundColor: '#252520', borderTop: '1px solid rgba(217,210,199,0.08)' }}>
      <div className="max-w-[1360px] mx-auto px-8 md:px-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div>
          <p className="font-sans text-[11px] tracking-[0.25em] uppercase mb-1" style={{ color: 'rgba(245,242,236,0.4)' }}>
            Rosvery Valor
          </p>
          <p className="font-mono text-[8px] tracking-[0.14em] uppercase" style={{ color: 'rgba(245,242,236,0.2)' }}>
            Diseñadora de Interiores — Buenos Aires, Argentina
          </p>
        </div>
        <p className="font-mono text-[8px] tracking-[0.14em] uppercase" style={{ color: 'rgba(245,242,236,0.2)' }}>
          © 2026 Rosvery Valor
        </p>
      </div>
    </footer>
  )
}

/* ── App ──────────────────────────────────────────────────────────────────────── */
export default function App() {
  const location = useLocation()

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (scrollTo) {
      setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    }
  }, [location.state])

  return (
    <div>
      <NavBar />
      <Hero />
      <Introduction />
      <SelectedWork />
      <ExpertiseSection />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
