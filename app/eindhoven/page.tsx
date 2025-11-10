import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eindhoven | City Guide",
  description:
    "Discover Eindhoven - design, innovation, and nightlife in the Lichtstad. Your guide to the Netherlands' brightest city.",
};

export default function EindhovenPage() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-coral">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wider">
                Eindhoven
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                The Lichtstad - Design capital of the Netherlands where
                innovation illuminates the future
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
                <div className="text-2xl font-bold text-sky">246,000+</div>
                <div className="text-sm text-foreground/70">Residents</div>
              </div>
              <div className="text-center p-6 bg-background rounded-xl">
                <div className="text-2xl font-bold text-sky">16%</div>
                <div className="text-sm text-foreground/70">
                  International Students
                </div>
              </div>
              <div className="text-center p-6 bg-background rounded-xl">
                <div className="text-2xl font-bold text-sky">50+</div>
                <div className="text-sm text-foreground/70">
                  Bars on Stratumseind
                </div>
              </div>
              <div className="text-center p-6 bg-background rounded-xl">
                <div className="text-2xl font-bold text-sky">Lampegat</div>
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
              <div className="p-6 bg-coral/10 border-l-4 border-coral rounded-r-xl">
                <p className="font-semibold mb-2">Double Lichtstad</p>
                <p className="text-foreground/80">
                  Eindhoven earned &quot;Lichtstad&quot; (Light City) from
                  matches first! Match factories started in 1870, 21 years
                  before Philips began making light bulbs in 1891.
                </p>
              </div>
              <div className="p-6 bg-brown/10 border-l-4 border-brown rounded-r-xl">
                <p className="font-semibold mb-2">
                  Longest Pub Street in Benelux
                </p>
                <p className="text-foreground/80">
                  Stratumseind has over 50 bars, cafés, and clubs in a row,
                  making it officially the longest continuous pub street in the
                  Benelux. Party central!
                </p>
              </div>
              <div className="p-6 bg-rose/10 border-l-4 border-rose rounded-r-xl">
                <p className="font-semibold mb-2">Design Capital</p>
                <p className="text-foreground/80">
                  Dutch Design Week attracts 350,000+ visitors annually.
                  Eindhoven graduates have designed everything from Tesla cars
                  to Olympic stadiums.
                </p>
              </div>
              <div className="p-6 bg-peach/10 border-l-4 border-peach rounded-r-xl">
                <p className="font-semibold mb-2">Flying Saucer Building</p>
                <p className="text-foreground/80">
                  The Evoluon looks like a UFO! Built by Philips in 1966 for
                  their 75th anniversary, it was a science museum and is now a
                  conference center.
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
              {/* Philips Museum */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">Philips Museum</h3>
                  <p className="text-foreground/70 mb-4">
                    Discover how a small light bulb factory became a global
                    electronics giant. Located in the original 1891 building
                    where it all began.
                  </p>
                  <div className="flex items-center text-sm text-sky mt-auto">
                    <span>📍 City Center</span>
                  </div>
                </div>
              </div>

              {/* Van Abbemuseum */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">Van Abbemuseum</h3>
                  <p className="text-foreground/70 mb-4">
                    One of Europe&apos;s leading contemporary art museums with
                    3,600+ works including Picasso, Kandinsky, and Mondriaan.
                  </p>
                  <div className="flex items-center text-sm text-sky mt-auto">
                    <span>📍 Bilderdijklaan</span>
                  </div>
                </div>
              </div>

              {/* Strijp-S */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    Strijp-S Design District
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    Former Philips industrial complex transformed into a
                    creative hotspot. Design shops, restaurants, street art, and
                    the Trudo Toren &quot;vertical forest&quot;.
                  </p>
                  <div className="flex items-center text-sm text-sky mt-auto">
                    <span>📍 Strijp-S</span>
                  </div>
                </div>
              </div>

              {/* Evoluon */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">Evoluon</h3>
                  <p className="text-foreground/70 mb-4">
                    Iconic flying-saucer building from 1966. Now houses the
                    RetroFuture exhibition and Brasserie Next restaurant with
                    futuristic vibes.
                  </p>
                  <div className="flex items-center text-sm text-sky mt-auto">
                    <span>📍 Noord</span>
                  </div>
                </div>
              </div>

              {/* PSV Stadium */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">Philips Stadion</h3>
                  <p className="text-foreground/70 mb-4">
                    Home of PSV Eindhoven since 1913. Take a stadium tour to see
                    the pitch, dressing rooms, and trophy cabinet of this
                    legendary club.
                  </p>
                  <div className="flex items-center text-sm text-sky mt-auto">
                    <span>📍 Frederiklaan</span>
                  </div>
                </div>
              </div>

              {/* St. Catherine's Church */}
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">Sint-Catharinakerk</h3>
                  <p className="text-foreground/70 mb-4">
                    Stunning neo-Gothic church from 1867 designed by Pierre
                    Cuypers (same architect as Rijksmuseum). Two 73-meter towers
                    dominate the skyline.
                  </p>
                  <div className="flex items-center text-sm text-sky mt-auto">
                    <span>📍 City Center</span>
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
                <h3 className="text-2xl font-bold mb-4">Design Walking Tour</h3>
                <p className="text-foreground/80 mb-4">
                  Walk through Eindhoven&apos;s transformation from industrial
                  city to design capital. Spot street art, including the famous
                  Monty Python &quot;Silly Walks&quot; tunnel!
                </p>
                <ul className="space-y-2 text-foreground/70 list-disc list-inside">
                  <li>Start at Philips Museum (original factory)</li>
                  <li>Explore Strijp-S creative district</li>
                  <li>Visit Van Abbemuseum</li>
                  <li>End at Stratumseind for drinks</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold mb-4">Cycling Route</h3>
                <p className="text-foreground/80 mb-4">
                  Eindhoven is incredibly bike-friendly with the famous
                  &quot;Hovenring&quot; - a suspended bicycle roundabout 70
                  meters in diameter!
                </p>
                <ul className="space-y-2 text-foreground/70 list-disc list-inside">
                  <li>Cycle the Dommel river route</li>
                  <li>Visit Genneper Parken (nature & prehistory)</li>
                  <li>See the Hovenring suspended bike roundabout</li>
                  <li>Explore Eindhoven&apos;s parks (2nd greenest city!)</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold mb-4">
                  Nightlife Experience
                </h3>
                <p className="text-foreground/80 mb-4">
                  Experience Stratumseind - the longest pub street in the
                  Benelux with 50+ bars, clubs, and restaurants all in a row.
                </p>
                <ul className="space-y-2 text-foreground/70 list-disc list-inside">
                  <li>Bar hop along Stratumseind</li>
                  <li>Try local brewery Stadsbrouwerij</li>
                  <li>Dance at Stratum club district</li>
                  <li>Live music at various venues</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold mb-4">Annual Events</h3>
                <p className="text-foreground/80 mb-4">
                  Eindhoven&apos;s event calendar is packed with world-class
                  festivals celebrating design, light, and music.
                </p>
                <ul className="space-y-2 text-foreground/70 list-disc list-inside">
                  <li>Dutch Design Week (October) - 350k+ visitors</li>
                  <li>GLOW Light Festival (November)</li>
                  <li>Lichtjesroute (September) - Liberation celebration</li>
                  <li>Carnaval (February/March) - Lampegat celebrations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Food & Drink */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Food & Drink</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-xl">
                <h3 className="font-bold mb-2">Radio Royaal</h3>
                <p className="text-sm text-foreground/70">
                  Dine in a former Philips machine room at Strijp-S. Industrial
                  atmosphere with excellent modern cuisine.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl">
                <h3 className="font-bold mb-2">De Kazerne</h3>
                <p className="text-sm text-foreground/70">
                  Art, design, hotel, and restaurant combined. Creative Dutch
                  cuisine in a stunning converted army barracks.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl">
                <h3 className="font-bold mb-2">Lucifer Café</h3>
                <p className="text-sm text-foreground/70">
                  In De Bergen district. Great coffee and fresh pastries in a
                  cozy setting that honors Eindhoven&apos;s match-making
                  history.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Info */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Getting to Eindhoven</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-0 flex items-center">
                  <span className="text-2xl mr-3">🚂</span>
                  <p className="ml-2 text-lg">By Train</p>
                </h3>
                <p className="text-foreground/80 ml-11">
                  Eindhoven Centraal connects to all major Dutch cities. From
                  Amsterdam: 1h 15min. From Rotterdam: 1h 10min. From Tilburg:
                  just 20 minutes!
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-0 flex items-center">
                  <span className="text-2xl mr-3">✈️</span>
                  <p className="ml-2 text-lg">By Plane</p>
                </h3>
                <p className="text-foreground/80 ml-11">
                  Eindhoven Airport is the 2nd largest in the Netherlands,
                  serving 1.6 million passengers yearly. Budget airlines like
                  Ryanair, Transavia, and Wizz Air fly here. Just 15 minutes
                  from city center!
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-0 flex items-center">
                  <span className="text-2xl mr-3">🚌</span>
                  <p className="ml-2 text-lg">Local Transport</p>
                </h3>
                <p className="text-foreground/80 ml-11">
                  Excellent public transport network. But cycling is king here -
                  Eindhoven has dedicated red bike lanes throughout the city.
                  Bike rentals at the station.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation to other pages */}
        <section className="py-12 px-4 bg-coral text-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg mb-4">Want to explore more?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tilburg"
                className="px-6 py-3 bg-white text-coral rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                Discover Tilburg
              </Link>
              <Link
                href="/"
                className="px-6 py-3 bg-brown text-white rounded-lg font-semibold hover:scale-105 transition-transform"
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
