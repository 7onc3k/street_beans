import Image from "next/image";

const events = [
  {
    date: "15.5.2024",
    time: "15:00",
    name: "Graffiti workshop pro začátečníky",
    description: "Naučte se základy graffiti od profíků",
    location: "Legální zeď v Holešovicích",
  },
  {
    date: "22.5.2024",
    time: "10:00",
    name: "Street Art Festival Praha",
    description: "Celodenní festival plný umění, hudby a dobré kávy",
    location: "Náplavka, Praha 2",
  },
  {
    date: "29.5.2024",
    time: "17:00",
    name: "Baristický kurz",
    description: "Objevte tajemství přípravy dokonalé kávy",
    location: "Mobilní stánek Street Beans, Park Stromovka",
  },
];

export default function Events() {
  return (
    <main className="flex flex-col min-h-screen bg-sb-cream">
      <div className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-6 text-sb-brown">Nadcházející akce</h1>

        {/* Seznam akcí */}
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <Image
                  src={`https://picsum.photos/400/300?random=${index}`}
                  alt={event.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2 text-sb-brown">{event.name}</h2>
                <p className="text-gray-600 mb-2">{event.description}</p>
                <p className="text-sm text-gray-500 mb-2">
                  <span className="font-semibold">Datum:</span> {event.date}, {event.time}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  <span className="font-semibold">Místo:</span> {event.location}
                </p>
                <button className="bg-sb-green text-sb-cream px-4 py-2 rounded hover:bg-sb-orange transition">
                  Více informací
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}