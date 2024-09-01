import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen bg-sb-cream">
      <div className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-6 text-sb-brown">O nás</h1>
        
        <div className="mb-8">
          <Image
            src="https://picsum.photos/800/400"
            alt="Street Beans tým"
            width={800}
            height={400}
            className="rounded-lg shadow-lg mb-4"
          />
        </div>

        <div className="space-y-4 text-sb-black">
          <p>
            Street Beans je více než jen kavárna - jsme komunita milovníků kávy a street artu. Naše cesta začala v roce 2020, kdy jsme se rozhodli spojit naši vášeň pro kvalitní kávu s láskou k městskému umění.
          </p>
          <p>
            Naše mobilní kavárna se pohybuje po Praze, přinášející skvělou kávu a uměleckou atmosféru na různá místa. Najdete nás u legálních graffiti ploch, na festivalech a kulturních akcích, kde vytváříme jedinečný prostor pro setkávání a inspiraci.
          </p>
          <p>
            Věříme v podporu lokální komunity umělců a baristů. Pravidelně pořádáme workshopy, kde se můžete naučit základy graffiti nebo tajemství přípravy dokonalé kávy. Naším cílem je vytvářet místa, kde se umění a káva setkávají v harmonii.
          </p>
          <p>
            Přidejte se k nám na této vzrušující cestě. Ať už jste milovník kávy, street artu nebo obojího, u Street Beans vždy najdete místo, kde se budete cítit jako doma.
          </p>
        </div>
      </div>
    </main>
  );
}