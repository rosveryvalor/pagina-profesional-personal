import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Proyectos', anchor: 'work' },
  { label: 'Especialidades', anchor: 'expertise' },
  { label: 'Proceso', anchor: 'process' },
  { label: 'Sobre mí', anchor: 'about' },
  { label: 'Contacto', anchor: 'contact' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    setScrolled(window.scrollY > 60)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault()
    setOpen(false)
    if (isHome) {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: anchor } })
    }
  }

  const alwaysDark = !isHome
  const showBg = alwaysDark || scrolled || open

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: showBg ? '#252520' : 'transparent',
          borderBottom: showBg ? '1px solid rgba(217,210,199,0.12)' : 'none',
        }}
      >
        <div className="max-w-[1360px] mx-auto px-8 md:px-14 h-16 flex items-center justify-between">
          <a
            href="/"
            onClick={e => {
              e.preventDefault()
              if (isHome) {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              } else {
                navigate('/')
              }
            }}
            className="font-sans text-[11px] tracking-[0.3em] uppercase transition-colors duration-300 hover:text-terracotta cursor-pointer"
            style={{ color: '#F5F2EC' }}
          >
            Rosvery Valor
          </a>

          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_ITEMS.map(item => (
              <li key={item.anchor}>
                <a
                  href={`#${item.anchor}`}
                  onClick={e => handleNavClick(e, item.anchor)}
                  className="relative font-sans text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 group hover:text-ivory"
                  style={{ color: 'rgba(245,242,236,0.5)' }}
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-terracotta transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setOpen(o => !o)}
            aria-label="Menú"
          >
            <span
              className="block w-5 h-px bg-ivory origin-center transition-transform duration-300"
              style={{ transform: open ? 'rotate(45deg) translateY(6px)' : 'none' }}
            />
            <span
              className="block w-5 h-px bg-ivory transition-opacity duration-300"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block w-5 h-px bg-ivory origin-center transition-transform duration-300"
              style={{ transform: open ? 'rotate(-45deg) translateY(-6px)' : 'none' }}
            />
          </button>
        </div>
      </nav>

      <div
        className="fixed top-16 left-0 right-0 z-40 md:hidden overflow-hidden transition-all duration-300"
        style={{
          backgroundColor: '#252520',
          borderBottom: '1px solid rgba(217,210,199,0.12)',
          maxHeight: open ? '18rem' : 0,
        }}
      >
        <ul className="flex flex-col px-8 py-8 gap-5">
          {NAV_ITEMS.map(item => (
            <li key={item.anchor}>
              <a
                href={`#${item.anchor}`}
                onClick={e => handleNavClick(e, item.anchor)}
                className="font-sans text-sm tracking-[0.15em] uppercase text-ivory hover:text-terracotta transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
