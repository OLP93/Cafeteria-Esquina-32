import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Esquina 32 — Cafetería de barrio en Las Palmas de Gran Canaria" },
      { name: "description", content: "Café, repostería casera canaria y desayunos en Calle Ejemplo 32, Las Palmas de Gran Canaria. Abierto todos los días de 08:00 a 20:00." },
      { property: "og:title", content: "Esquina 32 — Cafetería de barrio" },
      { property: "og:description", content: "Café y repostería casera canaria en Las Palmas de Gran Canaria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------- Datos editables ---------- */

const NAV = [
  { href: "#sobre", label: "Nosotros" },
  { href: "#carta", label: "Carta" },
  { href: "#galeria", label: "Galería" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#horario", label: "Horario" },
  { href: "#reservas", label: "Reservas" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

const ADDRESS = "Calle Ejemplo 32, 35001 Las Palmas de Gran Canaria";

const MENU: { title: string; items: [string, string][] }[] = [
  {
    title: "Cafés y bebidas",
    items: [
      ["Café con leche", "1,50 €"], ["Cortado", "1,30 €"], ["Barraquito", "2,20 €"],
      ["Leche y leche", "1,60 €"], ["Zumo natural de naranja", "2,80 €"], ["Infusiones", "1,40 €"],
    ],
  },
  {
    title: "Repostería canaria",
    items: [
      ["Bienmesabe", "3,20 €"], ["Quesadilla herreña", "2,50 €"], ["Truchas de batata", "1,80 €"],
      ["Príncipe Alberto", "3,50 €"], ["Rosquetes", "1,50 €"], ["Tarta de almendra", "3,00 €"],
    ],
  },
  {
    title: "Desayunos y bocadillos",
    items: [
      ["Tostada con aceite y tomate", "2,50 €"],
      ["Tostada con queso fresco y miel de palma", "3,20 €"],
      ["Bocadillo de pollo", "4,50 €"],
    ],
  },
  {
    title: "Menú de media mañana",
    items: [["Café + tostada o bocadillo + zumo", "6,50 €"], ["Café + dulce canario del día", "3,90 €"]],
  },
];

const GALLERY = [
  { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=70", alt: "Taza de café" },
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=70", alt: "Interior de cafetería" },
  { src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=70", alt: "Repostería casera" },
  { src: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=70", alt: "Desayuno con tostadas" },
  { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=70", alt: "Tarta" },
  { src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=70", alt: "Barra de café" },
];

const REVIEWS = [
  { name: "Carmen R.", text: "El barraquito más rico del barrio y el bienmesabe como el de mi abuela.", stars: 5 },
  { name: "Juan P.", text: "Desayuno aquí antes del trabajo todos los días. Rápidos y muy amables.", stars: 5 },
  { name: "Yaiza M.", text: "La quesadilla está buenísima. Ambiente tranquilo y cercano.", stars: 4 },
  { name: "Antonio G.", text: "Celebramos el cumpleaños de mi madre en el local. Todo perfecto.", stars: 5 },
];

const CONTACT = ["Teléfono", "WhatsApp", "Email", "Instagram", "Facebook"];

/* ---------- Página ---------- */

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Hours />
        <Bookings />
        <Location />
        <Contact />
      </main>
      <footer className="border-t bg-sand py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4">
          <Logo className="h-14 w-14" />
          <p className="text-sm text-muted-foreground">© Esquina 32</p>
        </div>
      </footer>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <a href="#inicio" className="flex items-center gap-2">
          <Logo className="h-10 w-10" />
          <span className="font-display text-xl font-bold text-primary">Esquina 32</span>
        </a>
        <nav className="hidden gap-5 text-sm font-semibold lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-primary">{n.label}</a>
          ))}
        </nav>
        <button
          className="rounded-md border px-3 py-2 text-sm font-bold lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Abrir menú"
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col border-t bg-background px-4 py-2 lg:hidden">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 font-semibold">
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Section({ id, title, children, tinted }: { id: string; title: string; children: ReactNode; tinted?: boolean }) {
  return (
    <section id={id} className={`px-4 py-16 ${tinted ? "bg-sand" : ""}`}>
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-primary sm:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section id="inicio" className="px-4 pb-16 pt-28 text-center">
      <div className="mx-auto max-w-2xl">
        <Logo className="mx-auto h-36 w-36 sm:h-44 sm:w-44" />
        <h1 className="mt-6 text-5xl font-bold text-primary sm:text-6xl">Esquina 32</h1>
        <p className="mt-2 font-semibold text-secondary">{ADDRESS}</p>
        <p className="mt-6 text-lg text-muted-foreground">
          Somos la cafetería de toda la vida del barrio: café recién hecho, repostería casera típica canaria
          y una mesa donde siempre te conocen por tu nombre.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#ubicacion" className="btn-primary">Cómo llegar</a>
          <a href="#carta" className="btn-outline">Carta</a>
          <a href="#reservas" className="btn-outline">Reservas</a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="sobre" title="Sobre nosotros" tinted>
      <div className="mx-auto max-w-2xl space-y-4 text-lg leading-relaxed">
        <p>
          Esquina 32 abrió sus puertas como un pequeño local de barrio con una idea sencilla: que los vecinos
          tuvieran un sitio donde tomarse un buen café y un dulce hecho en casa, como los de antes.
        </p>
        <p>
          Cada mañana horneamos quesadillas, truchas de batata, rosquetes y bienmesabe con recetas familiares
          canarias. Por aquí pasan los vecinos de siempre, quienes trabajan en la zona y buscan un desayuno rápido
          antes de la oficina, y quien se para a media mañana a charlar un rato.
        </p>
        <p>Sin prisas, con cariño y con el barraquito en su punto. Eso es Esquina 32.</p>
      </div>
    </Section>
  );
}

function Menu() {
  return (
    <Section id="carta" title="Carta">
      <p className="-mt-4 mb-8 text-center">
        <span className="rounded-full bg-accent px-3 py-1 text-sm font-bold text-accent-foreground">
          Carta de ejemplo · precios orientativos
        </span>
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {MENU.map((cat) => (
          <div key={cat.title} className="rounded-2xl border bg-card p-6">
            <h3 className="mb-4 text-2xl font-bold text-secondary">{cat.title}</h3>
            <ul className="space-y-2">
              {cat.items.map(([name, price]) => (
                <li key={name} className="flex items-baseline gap-2">
                  <span>{name}</span>
                  <span className="flex-1 border-b border-dotted" />
                  <span className="font-bold text-primary">{price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Gallery() {
  return (
    <Section id="galeria" title="Galería" tinted>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {GALLERY.map((g) => (
          <img key={g.src} src={g.src} alt={g.alt} loading="lazy" className="aspect-square w-full rounded-xl object-cover" />
        ))}
      </div>
    </Section>
  );
}

function Reviews() {
  return (
    <Section id="resenas" title="Lo que dicen los vecinos">
      <div className="grid gap-4 sm:grid-cols-2">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="rounded-2xl border bg-card p-6">
            <div className="text-xl text-star" aria-label={`${r.stars} de 5 estrellas`}>
              {"★".repeat(r.stars)}
              <span className="text-border">{"★".repeat(5 - r.stars)}</span>
            </div>
            <blockquote className="mt-2">“{r.text}”</blockquote>
            <figcaption className="mt-3 font-bold text-secondary">— {r.name}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

function Hours() {
  return (
    <Section id="horario" title="Horario" tinted>
      <div className="mx-auto max-w-sm rounded-2xl border bg-card p-6 text-center">
        <p className="text-lg font-semibold">Todos los días</p>
        <p className="font-display text-4xl font-bold text-primary">08:00 – 20:00</p>
      </div>
    </Section>
  );
}

/* ---------- Formularios de muestra (no guardan nada) ---------- */

function DemoForm({ title, children }: { title: string; children: ReactNode }) {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 rounded-2xl border bg-card p-6">
      <h3 className="text-xl font-bold text-secondary">{title}</h3>
      {children}
      <button type="submit" className="btn-primary mt-2">Enviar</button>
      {sent && (
        <p role="status" className="rounded-md bg-accent p-3 text-center font-bold text-accent-foreground">
          ¡Enviado! Te contactaremos pronto
        </p>
      )}
    </form>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1 text-sm font-semibold">
      {label}
      {children}
    </label>
  );
}

function Bookings() {
  return (
    <Section id="reservas" title="Reservas y pedidos">
      <div className="grid gap-6 lg:grid-cols-3">
        <DemoForm title="Reserva de mesa">
          <Field label="Nombre"><input className="field" required /></Field>
          <Field label="Teléfono"><input type="tel" className="field" required /></Field>
          <Field label="Fecha"><input type="date" className="field" required /></Field>
          <Field label="Hora"><input type="time" className="field" required /></Field>
          <Field label="Personas"><input type="number" min={1} className="field" required /></Field>
          <Field label="Comentarios"><textarea rows={3} className="field" /></Field>
        </DemoForm>

        <DemoForm title="Ocasiones especiales">
          <Field label="Nombre"><input className="field" required /></Field>
          <Field label="Teléfono"><input type="tel" className="field" required /></Field>
          <Field label="Fecha"><input type="date" className="field" required /></Field>
          <fieldset className="flex flex-col gap-2 text-sm font-semibold">
            <legend className="mb-1">Tipo de reserva</legend>
            <label className="flex items-center gap-2 font-normal">
              <input type="radio" name="espacio" value="medio" defaultChecked /> Reservar medio local
            </label>
            <label className="flex items-center gap-2 font-normal">
              <input type="radio" name="espacio" value="entero" /> Reservar el local entero
            </label>
          </fieldset>
          <Field label="Comentarios"><textarea rows={3} className="field" /></Field>
        </DemoForm>

        <DemoForm title="Pedido para recoger">
          <Field label="Nombre"><input className="field" required /></Field>
          <Field label="Teléfono"><input type="tel" className="field" required /></Field>
          <Field label="Hora de recogida"><input type="time" className="field" required /></Field>
          <Field label="Productos o comentarios"><textarea rows={5} className="field" required /></Field>
        </DemoForm>
      </div>

      <div className="mt-10 text-center">
        <p className="mb-3 font-display text-2xl font-bold text-secondary">Pide a domicilio</p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          {["Glovo", "Uber Eats", "Just Eat"].map((p) => (
            <button key={p} type="button" className="btn-outline">{p}</button>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Location() {
  return (
    <Section id="ubicacion" title="Ubicación" tinted>
      <iframe
        title="Mapa de ejemplo"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-15.44%2C28.09%2C-15.41%2C28.11&layer=mapnik"
        className="h-72 w-full rounded-2xl border sm:h-96"
        loading="lazy"
      />
      <p className="mt-4 text-center font-semibold">{ADDRESS}</p>
      <div className="mt-4 text-center">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          Cómo llegar
        </a>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contacto" title="Contacto">
      <ul className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-2">
        {CONTACT.map((c) => (
          <li key={c} className="flex items-center justify-between rounded-xl border bg-card px-4 py-3">
            <span className="font-bold text-secondary">{c}</span>
            <span className="text-muted-foreground">—</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
