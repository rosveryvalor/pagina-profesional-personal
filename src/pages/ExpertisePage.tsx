import { Link } from 'react-router-dom'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import NavBar from '../NavBar'
import { EXPERTISE, frauncesDisplay, frauncesBody } from '../data'

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

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: 'rgba(37,37,32,0.95)' }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-8 font-mono text-[10px] tracking-[0.25em] uppercase transition-colors duration-200"
        style={{ color: 'rgba(245,242,236,0.5)' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#F5F2EC' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(245,242,236,0.5)' }}
      >
        Cerrar ✕
      </button>
      <img
        src={src}
        alt={alt}
        onClick={e => e.stopPropagation()}
        className="max-w-[90vw] max-h-[88vh] object-contain"
        style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}
      />
    </div>
  )
}

export default function ExpertisePage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ backgroundColor: '#F5F2EC' }}>
      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
      <NavBar />

      {/* Header */}
      <section
        className="pt-32 pb-20 md:pt-40 md:pb-28"
        style={{ backgroundColor: '#252520' }}
      >
        <div className="max-w-[1360px] mx-auto px-8 md:px-14">
          <Reveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.25em] uppercase mb-12 group"
              style={{ color: 'rgba(245,242,236,0.4)' }}
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
              <span className="group-hover:text-ivory transition-colors duration-300">Volver al portfolio</span>
            </Link>
          </Reveal>

          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <Reveal delay={60}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-px" style={{ backgroundColor: '#A87862' }} />
                  <span className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: '#A79D8E' }}>
                    Disciplinas
                  </span>
                </div>
                <h1
                  className="text-ivory font-light tracking-[-0.03em] leading-[0.92] mb-6"
                  style={{ ...frauncesDisplay, fontSize: 'clamp(3rem, 7vw, 6rem)' }}
                >
                  Especialidades
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: 'rgba(245,242,236,0.5)', maxWidth: 520, fontWeight: 400 }}
                >
                  Una mirada multidisciplinaria al servicio del diseño de interiores. Cada disciplina complementa a la siguiente para ofrecer un proceso de diseño completo, coherente y comunicado con claridad.
                </p>
              </Reveal>
            </div>

            {/* Quick nav */}
            <div className="md:col-span-3 md:col-start-10 hidden md:flex flex-col justify-end">
              <Reveal delay={180}>
                <div className="flex flex-col gap-3">
                  {EXPERTISE.map(e => (
                    <a
                      key={e.slug}
                      href={`#${e.slug}`}
                      className="flex items-center gap-3 group"
                    >
                      <span className="font-mono text-[8px] tracking-[0.2em]" style={{ color: e.accent + '80' }}>{e.n}</span>
                      <span
                        className="font-sans text-[11px] transition-colors duration-300 group-hover:text-ivory"
                        style={{ color: 'rgba(245,242,236,0.35)' }}
                      >
                        {e.title}
                      </span>
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise sections */}
      {EXPERTISE.map((item, idx) => (
        <section
          key={item.slug}
          id={item.slug}
          className="py-20 md:py-28"
          style={{ backgroundColor: idx % 2 === 0 ? '#F5F2EC' : '#EDE9E2' }}
        >
          <div className="max-w-[1360px] mx-auto px-8 md:px-14">
            {/* Header row */}
            <Reveal>
              <div
                className="flex items-start justify-between pb-7 mb-12"
                style={{ borderBottom: `1px solid ${item.accent}30` }}
              >
                <div className="flex items-start gap-5">
                  <span
                    className="font-mono text-[9px] tracking-[0.25em] pt-1"
                    style={{ color: item.accent }}
                  >
                    {item.n}
                  </span>
                  <div>
                    <h2
                      className="text-charcoal font-light tracking-[-0.025em] leading-tight mb-1"
                      style={{
                        ...frauncesDisplay,
                        fontSize: item.primary ? 'clamp(2rem, 4vw, 3.5rem)' : 'clamp(1.75rem, 3vw, 2.75rem)',
                      }}
                    >
                      {item.title}
                    </h2>
                    <p className="font-mono text-[9px] tracking-[0.22em] uppercase" style={{ color: item.accent }}>
                      {item.subtitle}
                      {item.primary && ' — Principal'}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Content grid */}
            <div className="grid md:grid-cols-12 gap-10 md:gap-16">
              {/* Expanded description */}
              <div className="md:col-span-6">
                <Reveal delay={60}>
                  <p className="font-sans text-sm text-warm-grey leading-relaxed mb-8" style={{ fontWeight: 400 }}>
                    {item.expanded}
                  </p>
                </Reveal>

                {/* Includes */}
                <Reveal delay={120}>
                  <p className="font-mono text-[8px] tracking-[0.28em] uppercase text-taupe mb-4">Qué incluye</p>
                  <div className="flex flex-col gap-2.5">
                    {item.includes.map(inc => (
                      <div key={inc} className="flex items-start gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                          style={{ backgroundColor: item.accent }}
                        />
                        <span className="font-sans text-xs text-charcoal" style={{ fontWeight: 400 }}>{inc}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              {/* Tools + project links */}
              <div className="md:col-span-5 md:col-start-8">
                {/* Tools */}
                <Reveal delay={90}>
                  <div className="p-6 mb-6" style={{ backgroundColor: item.accent + '10', borderLeft: `2px solid ${item.accent}` }}>
                    <p className="font-mono text-[8px] tracking-[0.28em] uppercase mb-4" style={{ color: item.accent }}>
                      Herramientas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.map(t => (
                        <span
                          key={t}
                          className="font-mono text-[9px] tracking-[0.1em] px-3 py-1.5"
                          style={{
                            color: '#252520',
                            backgroundColor: item.accent + '18',
                            border: `1px solid ${item.accent}30`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>

                {/* Image examples */}
                <Reveal delay={150}>
                  <p className="font-mono text-[8px] tracking-[0.28em] uppercase text-taupe mb-4">
                    Ejemplos de trabajo
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {item.images.map((src, imgIdx) => (
                      <div
                        key={imgIdx}
                        className={`overflow-hidden cursor-zoom-in${imgIdx === 0 ? ' col-span-2' : ''}`}
                        style={{ backgroundColor: '#D9D2C7', aspectRatio: imgIdx === 0 ? '16/9' : '4/3' }}
                        onClick={() => setLightbox({ src, alt: `${item.title} — ejemplo ${imgIdx + 1}` })}
                      >
                        <img
                          src={src}
                          alt={`${item.title} — ejemplo ${imgIdx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Contact CTA */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#A87862' }}>
        <div className="max-w-[1360px] mx-auto px-8 md:px-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <Reveal>
            <p className="font-mono text-[9px] tracking-[0.28em] uppercase mb-4" style={{ color: 'rgba(245,242,236,0.5)' }}>
              Hablemos
            </p>
            <h2
              className="text-ivory font-light tracking-[-0.025em] leading-tight"
              style={{ ...frauncesDisplay, fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              ¿Tenés un proyecto<br />en mente?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <a
              href="mailto:hello@rosveryvalor.com"
              className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase px-8 py-4 transition-all duration-300 flex-shrink-0"
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
          <Link to="/" className="font-sans text-[10px] tracking-[0.25em] uppercase" style={{ color: 'rgba(245,242,236,0.3)' }}>
            ← Rosvery Valor
          </Link>
          <p className="font-mono text-[8px] tracking-[0.14em] uppercase" style={{ color: 'rgba(245,242,236,0.2)' }}>
            © 2026
          </p>
        </div>
      </footer>
    </div>
  )
}
