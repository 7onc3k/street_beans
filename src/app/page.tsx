import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero sekce */}
      <section className="relative h-64">
        <Image
          src="https://picsum.photos/800/400"
          alt="Street Beans mobilní stánek"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-sb-black bg-opacity-50 flex flex-col justify-center items-center text-sb-cream p-4">
          <h1 className="text-3xl font-bold mb-2">Street Beans: Káva & Street Art</h1>
          <p className="text-xl">Mobilní kavárna s duší ulice</p>
        </div>
      </section>

      {/* O nás */}
      <section className="p-6 bg-sb-cream">
        <p className="mb-4">
          Street Beans spojuje lásku ke kávě a street artu. Najdete nás tam, kde to žije - u legálních graffiti ploch, na festivalech a kulturních akcích.
        </p>
        <Link href="/about" className="bg-sb-green text-sb-cream px-4 py-2 rounded hover:bg-sb-orange transition">
          Více o nás
        </Link>
      </section>

      {/* Aktuální lokace */}
      <section className="p-6 bg-sb-cream">
        <h2 className="text-2xl font-bold mb-4 text-sb-brown">Kde nás najdete</h2>
        <div className="bg-gray-200 h-48 mb-4">
          {/* Placeholder pro mapu */}
          <p className="text-center pt-20">Mapa s aktuální lokací</p>
        </div>
        <p>Dnes: Holešovice, u legální zdi v ulici XYZ</p>
      </section>

      {/* Produkty */}
      <section className="p-6 bg-sb-cream">
        <h2 className="text-2xl font-bold mb-4 text-sb-brown">Naše nabídka</h2>
        <div className="flex justify-around mb-4">
          <div className="text-center">
            <div className="text-4xl mb-2">☕</div>
            <p>Kvalitní káva</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🎨</div>
            <p>Graffiti potřeby</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🥪</div>
            <p>Občerstvení</p>
          </div>
        </div>
        <Link href="/menu" className="block text-center bg-sb-green text-sb-cream px-4 py-2 rounded hover:bg-sb-orange transition">
          Zobrazit celou nabídku
        </Link>
      </section>

      {/* Nadcházející akce */}
      <section className="p-6 bg-sb-cream">
        <h2 className="text-2xl font-bold mb-4 text-sb-brown">Co chystáme</h2>
        <ul className="mb-4">
          <li className="mb-2">15.5. - Graffiti workshop pro začátečníky</li>
          <li className="mb-2">22.5. - Street Art Festival Praha</li>
          <li className="mb-2">29.5. - Baristický kurz</li>
        </ul>
        <Link href="/events" className="block text-center bg-sb-green text-sb-cream px-4 py-2 rounded hover:bg-sb-orange transition">
          Všechny akce
        </Link>
      </section>
    </main>
  );
}
