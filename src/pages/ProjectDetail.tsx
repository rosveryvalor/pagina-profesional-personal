import { useParams, Link } from 'react-router-dom'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import NavBar from '../NavBar'
import { PROJECTS, frauncesDisplay, frauncesBody } from '../data'

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
      transition: `opacity 0.85s ease ${delay}ms, transform 0.85s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = PROJECTS.find(p => p.slug === slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!project) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <NavBar />
        <div className="text-center">
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-taupe mb-4">Proyecto no encontrado</p>
          <Link to="/" className="font-sans text-sm text-ivory hover:text-terracotta transition-colors">
            ← Volver al portfolio
          </Link>
        </div>
      </div>
    )
  }

  const currentIndex = PROJECTS.findIndex(p => p.slug === slug)
  const related = PROJECTS.filter((_, i) => i !== currentIndex).slice(0, 2)

  return (
    <div style={{ backgroundColor: '#F5F2EC' }}>
      <NavBar />

      {/* Hero */}
      <section className="bg-charcoal min-h-[70vh] flex flex-col justify-end relative overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img
            src={project.gallery[0]}
            alt={project.name}
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.45)' }}
          />
        </div>

        <div className="relative max-w-[1360px] mx-auto px-8 md:px-14 pb-14 md:pb-20 w-full">
          <Reveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.25em] uppercase mb-10 group"
              style={{ color: 'rgba(245,242,236,0.5)' }}
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
              <span className="group-hover:text-ivory transition-colors duration-300">Volver al portfolio</span>
            </Link>
          </Reveal>

          <Reveal delay={60}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase" style={{ color: '#A87862' }}>
                {project.n}
              </span>
              <div className="h-px w-5" style={{ backgroundColor: '#A87862' }} />
              <span className="font-mono text-[9px] tracking-[0.22em] uppercase" style={{ color: 'rgba(167,157,142,0.7)' }}>
                {project.category}
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1
              className="text-ivory font-light tracking-[-0.03em] leading-[0.92] mb-4"
              style={{ ...frauncesDisplay, fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
            >
              {project.name}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="font-sans text-sm" style={{ color: 'rgba(245,242,236,0.5)', fontWeight: 400 }}>
              {project.subtitle} · {project.location} · {project.year}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-[1360px] mx-auto px-8 md:px-14">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20">
            {/* Description */}
            <div className="md:col-span-7">
              <Reveal>
                <p className="font-mono text-[8px] tracking-[0.28em] uppercase text-taupe mb-5">Descripción</p>
                <p
                  className="text-charcoal font-light leading-relaxed mb-8"
                  style={{ ...frauncesBody, fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', lineHeight: 1.5 }}
                >
                  {project.description}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <div className="h-px bg-stone mb-8" />
                <p className="font-mono text-[8px] tracking-[0.28em] uppercase text-taupe mb-4">Concepto</p>
                <p className="font-sans text-sm text-warm-grey leading-relaxed" style={{ fontWeight: 400 }}>
                  {project.concept}
                </p>
              </Reveal>
            </div>

            {/* Rol sidebar */}
            <div className="md:col-span-4 md:col-start-9">
              <Reveal delay={120}>
                <div
                  className="p-7"
                  style={{ backgroundColor: '#EDE9E2', borderLeft: '2px solid #A87862' }}
                >
                  <p className="font-mono text-[8px] tracking-[0.28em] uppercase text-taupe mb-5">Rol en el proyecto</p>
                  <div className="flex flex-col gap-3 mb-8">
                    {project.rol.map(r => (
                      <div key={r} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#A87862' }} />
                        <span className="font-sans text-xs text-charcoal" style={{ fontWeight: 500 }}>{r}</span>
                      </div>
                    ))}
                  </div>
                  <div className="h-px bg-stone mb-5" />
                  <div>
                    <p className="font-mono text-[8px] tracking-[0.28em] uppercase text-taupe mb-3">Datos</p>
                    <p className="font-sans text-[11px] text-warm-grey mb-1">{project.year}</p>
                    <p className="font-sans text-[11px] text-warm-grey">{project.location}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Gallery */}
          <Reveal>
            <p className="font-mono text-[8px] tracking-[0.28em] uppercase text-taupe mb-8">Galería de imágenes</p>
          </Reveal>

          {/* Main image */}
          <Reveal>
            <div className="w-full overflow-hidden mb-4" style={{ backgroundColor: '#D9D2C7' }}>
              <img
                src={project.gallery[0]}
                alt={`${project.name} — vista principal`}
                className="w-full object-cover"
                style={{ maxHeight: '70vh' }}
              />
            </div>
          </Reveal>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {project.gallery.slice(1, 3).map((img, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="overflow-hidden" style={{ backgroundColor: '#D9D2C7' }}>
                  <img
                    src={img}
                    alt={`${project.name} — detalle ${i + 2}`}
                    className="w-full object-cover"
                    style={{ aspectRatio: i === 1 ? '3/4' : '4/3' }}
                  />
                </div>
              </Reveal>
            ))}
          </div>

          {project.gallery[3] && (
            <Reveal>
              <div className="w-full overflow-hidden" style={{ backgroundColor: '#D9D2C7' }}>
                <img
                  src={project.gallery[3]}
                  alt={`${project.name} — detalle final`}
                  className="w-full object-cover"
                  style={{ maxHeight: '55vh' }}
                />
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Process strip */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#EDE9E2' }}>
        <div className="max-w-[1360px] mx-auto px-8 md:px-14">
          <Reveal className="mb-10">
            <p className="font-mono text-[8px] tracking-[0.28em] uppercase text-taupe mb-3">Proceso aplicado</p>
            <h2
              className="text-charcoal font-light tracking-[-0.02em]"
              style={{ ...frauncesBody, fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)' }}
            >
              De la idea al espacio
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {['Comprender', 'Concepto', 'Diseño', 'Visualizar', 'Desarrollar'].map((step, i) => (
              <Reveal key={step} delay={i * 60}>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[8px] tracking-[0.22em] uppercase mt-0.5" style={{ color: '#A87862' }}>
                    0{i + 1}
                  </span>
                  <span className="font-sans text-xs text-charcoal" style={{ fontWeight: 500 }}>{step}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related projects */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-[1360px] mx-auto px-8 md:px-14">
          <Reveal>
            <div className="flex items-end justify-between mb-10 pb-5" style={{ borderBottom: '1px solid #D9D2C7' }}>
              <div>
                <p className="font-mono text-[8px] tracking-[0.28em] uppercase text-taupe mb-2">Seguir explorando</p>
                <h2
                  className="text-charcoal font-light tracking-[-0.02em]"
                  style={{ ...frauncesDisplay, fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)' }}
                >
                  Otros proyectos
                </h2>
              </div>
              <Link
                to="/#work"
                className="font-mono text-[9px] tracking-[0.2em] uppercase text-warm-grey hover:text-terracotta transition-colors relative group hidden md:block"
              >
                Ver todos →
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-terracotta group-hover:w-full transition-all duration-300" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link to={`/proyecto/${p.slug}`} className="group block">
                  <div className="overflow-hidden mb-4" style={{ backgroundColor: '#D9D2C7', aspectRatio: '3/2' }}>
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700"
                      style={{ transform: 'scale(1)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }}
                    />
                  </div>
                  <div className="flex items-start gap-3 mb-1">
                    <span className="font-mono text-[8px] tracking-[0.25em] text-terracotta">{p.n}</span>
                    <div className="h-px w-4 bg-stone mt-1.5" />
                  </div>
                  <h3
                    className="text-charcoal font-light tracking-[-0.01em] group-hover:text-terracotta transition-colors duration-300"
                    style={{ ...frauncesBody, fontSize: '1.1rem' }}
                  >
                    {p.name}
                  </h3>
                  <p className="font-mono text-[9px] tracking-[0.12em] uppercase text-warm-grey mt-1">
                    {p.category} · {p.year}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#A87862' }}>
        <div className="max-w-[1360px] mx-auto px-8 md:px-14 text-center">
          <Reveal>
            <p className="font-mono text-[9px] tracking-[0.28em] uppercase mb-6" style={{ color: 'rgba(245,242,236,0.55)' }}>
              Hablemos
            </p>
            <h2
              className="text-ivory font-light tracking-[-0.025em] mb-8"
              style={{ ...frauncesDisplay, fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              ¿Tenés un proyecto similar?
            </h2>
            <a
              href="mailto:hello@rosveryvalor.com"
              className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase px-8 py-4 transition-all duration-300"
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
      </section>

      {/* Mini footer */}
      <footer className="py-8" style={{ backgroundColor: '#252520', borderTop: '1px solid rgba(217,210,199,0.08)' }}>
        <div className="max-w-[1360px] mx-auto px-8 md:px-14 flex items-center justify-between">
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase" style={{ color: 'rgba(245,242,236,0.3)' }}>
            Rosvery Valor
          </p>
          <p className="font-mono text-[8px] tracking-[0.14em] uppercase" style={{ color: 'rgba(245,242,236,0.2)' }}>
            © 2026
          </p>
        </div>
      </footer>
    </div>
  )
}
