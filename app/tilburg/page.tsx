import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tilburg | City Guide",
  description:
    "Discover Tilburg - art, culture, festivals and the biggest funfair in the Benelux. Your complete guide to this creative Dutch city.",
};

export default function TilburgPage() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-coral">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wider">
                Tilburg
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-wrap">
                The creative heart of Noord-Brabant, where contemporary art
                <br />
                meets the warm, friendly atmosphere of Brabant
              </p>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Quick Facts</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-background rounded-xl">
                <div className="text-2xl font-bold text-sky">220,000+</div>
                <div className="text-sm text-foreground/70">Residents</div>
              </div>
              <div className="text-center p-6 bg-background rounded-xl">
                <div className="text-2xl font-bold text-sky">18%</div>
                <div className="text-sm text-foreground/70">
                  Students (highest in NL!)
                </div>
              </div>
              <div className="text-center p-6 bg-background rounded-xl">
                <div className="text-2xl font-bold text-sky">1.5M+</div>
                <div className="text-sm text-foreground/70">
                  Kermis Visitors
                </div>
              </div>
              <div className="text-center p-6 bg-background rounded-xl">
                <div className="text-2xl font-bold text-sky">Kruikenstad</div>
                <div className="text-sm text-foreground/70">Carnival Name</div>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Did You Know?</h2>
            <div className="space-y-4">
              <div className="p-6 bg-sky/10 border-l-4 border-sky rounded-r-xl">
                <p className="font-semibold mb-2">
                  Oldest Funfair in the Netherlands
                </p>
                <p className="text-foreground/80">
                  The first Tilburgse Kermis was organized way back in 1570!
                  Today, it&apos;s the largest funfair in the Benelux with 250+
                  attractions across 4.5 kilometers.
                </p>
              </div>
              <div className="p-6 bg-peach/10 border-l-4 border-peach rounded-r-xl">
                <p className="font-semibold mb-2">
                  King Willem II&apos;s Favorite City
                </p>
                <p className="text-foreground/80">
                  King Willem II loved Tilburg so much he built a palace here to
                  escape court life. He died in Tilburg in 1849, and his palace
                  still stands today!
                </p>
              </div>
              <div className="p-6 bg-coral/10 border-l-4 border-coral rounded-r-xl">
                <p className="font-semibold mb-2">The Wool Capital</p>
                <p className="text-foreground/80">
                  Tilburg was once known as the &quot;wool capital of the
                  Netherlands&quot; with 145 wool mills in 1881. The
                  TextielMuseum keeps this rich industrial heritage alive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Must-Visit Attractions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Doloris */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    Doloris&apos; Meta Maze
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    A mind-bending surrealist art installation. Walk through a
                    three-dimensional painting that challenges your perception
                    and stimulates all your senses.
                  </p>
                  <div className="flex items-center text-sm text-coral mt-auto">
                    <span>📍 Spoorzone</span>
                  </div>
                </div>
              </div>

              {/* De Pont */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">De Pont Museum</h3>
                  <p className="text-foreground/70 mb-4">
                    One of the best contemporary art museums in the Netherlands.
                    Housed in a former wool spinning mill with 800+ works from
                    80 different artists.
                  </p>
                  <div className="flex items-center text-sm text-coral mt-auto">
                    <span>📍 Wilhelminapark</span>
                  </div>
                </div>
              </div>

              {/* LocHal */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">LocHal Library</h3>
                  <p className="text-foreground/70 mb-4">
                    Award-winning library in a converted locomotive hall. Winner
                    of &quot;Best Building of the Year 2019&quot; and multiple
                    international architecture prizes.
                  </p>
                  <div className="flex items-center text-sm text-coral mt-auto">
                    <span>📍 Spoorzone</span>
                  </div>
                </div>
              </div>

              {/* Spoorpark */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">Spoorpark</h3>
                  <p className="text-foreground/70 mb-4">
                    A citizen-initiated urban park built on former industrial
                    grounds. Perfect for picnics, camping, sports, and relaxing
                    in the heart of the city.
                  </p>
                  <div className="flex items-center text-sm text-coral mt-auto">
                    <span>📍 Central Tilburg</span>
                  </div>
                </div>
              </div>

              {/* TextielMuseum */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">TextielMuseum</h3>
                  <p className="text-foreground/70 mb-4">
                    Experience Tilburg&apos;s textile heritage with working
                    looms and modern design lab. Watch artisans create and
                    design your own textile products.
                  </p>
                  <div className="flex items-center text-sm text-coral mt-auto">
                    <span>📍 Goirkestraat</span>
                  </div>
                </div>
              </div>

              {/* La Trappe Abbey */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    Koningshoeven Abbey
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    Visit one of the few Trappist monasteries in the world. The
                    monks have been brewing La Trappe beer here since 1884.
                    Tours and tastings available!
                  </p>
                  <div className="flex items-center text-sm text-coral mt-auto">
                    <span>📍 Berkel-Enschot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Things To Do
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold mb-4">City Walking Tour</h3>
                <p className="text-foreground/80 mb-4">
                  Explore Tilburg&apos;s monuments and history on foot. See King
                  Willem II&apos;s statue, the Kruikezeiker (carnival symbol),
                  and historic textile buildings.
                </p>
                <ul className="space-y-2 text-foreground/70 list-disc list-inside">
                  <li>Start at Willem II monument (Heuvel)</li>
                  <li>Visit the Kermis monument at NS-Plein</li>
                  <li>Walk through the historic Dwaalgebied</li>
                  <li>End at Piushaven waterfront</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold mb-4">Cycling Route</h3>
                <p className="text-foreground/80 mb-4">
                  Bike through Tilburg&apos;s green spaces and surrounding
                  nature. The city has excellent cycling infrastructure with
                  dedicated red bike lanes everywhere.
                </p>
                <ul className="space-y-2 text-foreground/70 list-disc list-inside">
                  <li>Cycle to Loonse & Drunense Dunes (Brabant Sahara)</li>
                  <li>Explore Oisterwijk Fens nature reserve</li>
                  <li>Visit nearby Efteling theme park (15 min)</li>
                  <li>Rent bikes at central station</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold mb-4">Nightlife & Culture</h3>
                <p className="text-foreground/80 mb-4">
                  Tilburg&apos;s student population ensures a lively cultural
                  scene with concerts, theater, and vibrant bars.
                </p>
                <ul className="space-y-2 text-foreground/70 list-disc list-inside">
                  <li>013 - Brabant&apos;s premier music venue</li>
                  <li>Schouwburg & Concertzaal - classical concerts</li>
                  <li>Heuvel & Piusplein - terrace hopping</li>
                  <li>CINECITTA - cultural cinema since 1983</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold mb-4">Annual Events</h3>
                <p className="text-foreground/80 mb-4">
                  Time your visit with Tilburg&apos;s world-famous festivals for
                  an unforgettable experience.
                </p>
                <ul className="space-y-2 text-foreground/70 list-disc list-inside">
                  <li>Tilburgse Kermis (July) - Biggest funfair in Benelux</li>
                  <li>Roze Maandag - Pink Monday LGBT celebration</li>
                  <li>Carnaval (February/March) - Kruikenstad festivities</li>
                  <li>Festival Mundial - World music festival</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Info */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Getting to Tilburg</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-0 flex items-center">
                  <span className="text-2xl mr-3">🚂</span>
                  <p className="ml-2 text-lg">By Train</p>
                </h3>
                <p className="text-foreground/80 ml-11">
                  Tilburg Centraal is well-connected to major Dutch cities. From
                  Amsterdam: 1.5 hours with a change at Utrecht. From Rotterdam:
                  1 hour. From Eindhoven: 20 minutes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-0 flex items-center">
                  <span className="text-2xl mr-3">✈️</span>
                  <p className="ml-2 text-lg">By Plane</p>
                </h3>
                <p className="text-foreground/80 ml-11">
                  Nearest airports are Eindhoven Airport (30 min) and Amsterdam
                  Schiphol (1.5 hours). Brussels Airport is also nearby (1.5
                  hours).
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-0 flex items-center">
                  <span className="text-2xl mr-3">🚌</span>
                  <p className="ml-2 text-lg">Local Transport</p>
                </h3>
                <p className="text-foreground/80 ml-11">
                  City buses connect all neighborhoods. The center is walkable
                  and bike-friendly. Bike rentals available at the station.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation to other pages */}
        <section className="py-12 px-4 bg-brown text-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg mb-4">Want to explore more?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/eindhoven"
                className="px-6 py-3 bg-white text-brown rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                Discover Eindhoven
              </Link>
              <Link
                href="/"
                className="px-6 py-3 bg-coral text-white rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
