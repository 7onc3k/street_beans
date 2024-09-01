export default function Account() {
  return (
    <main className="flex flex-col min-h-screen bg-sb-cream">
      <div className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-6 text-sb-brown">Zákaznický účet</h1>
        
        <div className="space-y-4 text-sb-black">
          <h2 className="text-2xl font-bold mb-4 text-sb-brown">Informace o zákazníkovi</h2>
          <p>Jméno: Jan Novák</p>
          <p>Email: jan.novak@example.com</p>
          <p>Telefon: +420 123 456 789</p>
          
          <h2 className="text-2xl font-bold mb-4 text-sb-brown">Nasbírané body</h2>
          <p>Celkem bodů: 150</p>
          
          <h2 className="text-2xl font-bold mb-4 text-sb-brown">Objednávky</h2>
          <ul className="list-disc pl-5">
            <li>Objednávka #1 - 15.5.2024 - 2x Espresso Illy</li>
            <li>Objednávka #2 - 22.5.2024 - 1x Cappuccino, 1x Bageta šunka a sýr</li>
            <li>Objednávka #3 - 29.5.2024 - 1x Veganský wrap</li>
          </ul>
        </div>
      </div>
    </main>
  );
}