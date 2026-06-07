import { useState } from 'react'
import { Flame, Wine, Sparkles, MessageCircle, Instagram, Mail, Phone } from 'lucide-react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState<'candles' | 'mocktails'>('candles')

  const candles = [
    {
      name: "Lavender Dreams",
      description: "Calming lavender essence with vanilla undertones",
      price: "$28",
      notes: "Top: French Lavender • Base: Madagascar Vanilla",
      image: "🕯️"
    },
    {
      name: "Citrus Sunrise",
      description: "Bright citrus medley with warming spice",
      price: "$32",
      notes: "Top: Bergamot & Lemon • Base: Ginger Root",
      image: "🕯️"
    },
    {
      name: "Forest Retreat",
      description: "Woodsy aromatics with herbal clarity",
      price: "$30",
      notes: "Top: Pine & Cedar • Base: Eucalyptus",
      image: "🕯️"
    },
    {
      name: "Custom Creation",
      description: "Design your signature scent experience",
      price: "From $35",
      notes: "Bespoke fragrance consultation included",
      image: "✨"
    }
  ]

  const mocktails = [
    {
      name: "Tropical Sunset",
      description: "Exotic fusion with coconut cream",
      serves: "2-4 guests",
      ingredients: "Pineapple • Passion Fruit • Coconut",
      image: "🍹"
    },
    {
      name: "Garden Fresh",
      description: "Botanical sparkle with herbal notes",
      serves: "2-4 guests",
      ingredients: "Cucumber • Mint • Elderflower",
      image: "🍹"
    },
    {
      name: "Berry Bliss",
      description: "Mixed berries with herbaceous honey",
      serves: "2-4 guests",
      ingredients: "Berries • Rosemary • Honey",
      image: "🍹"
    },
    {
      name: "Event Package",
      description: "Complete mocktail bar service",
      serves: "20+ guests",
      ingredients: "Custom menu • Professional setup",
      image: "🎉"
    }
  ]

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-yellow-900/20">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-500/20">
              <Flame className="text-black" size={24} />
            </div>
            <span className="text-3xl font-serif text-yellow-100 tracking-wide">
              Pneuma<span className="text-yellow-500">Lux</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#collections" className="text-yellow-100/70 hover:text-yellow-400 transition-colors text-sm uppercase tracking-widest">Collections</a>
            <a href="#about" className="text-yellow-100/70 hover:text-yellow-400 transition-colors text-sm uppercase tracking-widest">Our Story</a>
            <a href="#contact" className="text-yellow-100/70 hover:text-yellow-400 transition-colors text-sm uppercase tracking-widest">Contact</a>
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-yellow-500/30 transition-all">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-zinc-950 to-zinc-950" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />

        <div className="relative max-w-6xl mx-auto px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-xs uppercase tracking-widest font-semibold mb-12">
              <Sparkles size={14} />
              Artisanal Luxury
            </div>

            <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif text-yellow-100 mb-8 leading-[0.95] tracking-tight">
              Crafted to
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
                Perfection
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-yellow-100/60 mb-16 leading-relaxed max-w-3xl mx-auto font-light">
              Exquisitely hand-poured candles and curated mocktail experiences
              <br className="hidden md:block" />
              for the discerning host
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <a href="#collections" className="px-10 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold text-sm uppercase tracking-wider hover:shadow-2xl hover:shadow-yellow-500/20 transition-all">
                Explore Collection
              </a>
              <a href="#contact" className="px-10 py-4 bg-transparent text-yellow-100 border border-yellow-500/30 font-semibold text-sm uppercase tracking-wider hover:border-yellow-500/60 hover:bg-yellow-500/5 transition-all">
                Custom Orders
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-32 bg-zinc-950 border-t border-yellow-900/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-serif text-yellow-100 mb-6 tracking-tight">
              Our Collections
            </h2>
            <p className="text-xl text-yellow-100/50 max-w-2xl mx-auto font-light">
              Each piece is a testament to craftsmanship and attention to detail
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center gap-6 mb-20">
            <button
              onClick={() => setActiveTab('candles')}
              className={`flex items-center gap-3 px-10 py-4 font-semibold text-sm uppercase tracking-widest transition-all ${
                activeTab === 'candles'
                  ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-black shadow-xl shadow-yellow-500/20'
                  : 'bg-zinc-900 text-yellow-100/60 border border-yellow-900/20 hover:border-yellow-500/30'
              }`}
            >
              <Flame size={18} />
              Candles
            </button>
            <button
              onClick={() => setActiveTab('mocktails')}
              className={`flex items-center gap-3 px-10 py-4 font-semibold text-sm uppercase tracking-widest transition-all ${
                activeTab === 'mocktails'
                  ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-black shadow-xl shadow-yellow-500/20'
                  : 'bg-zinc-900 text-yellow-100/60 border border-yellow-900/20 hover:border-yellow-500/30'
              }`}
            >
              <Wine size={18} />
              Mocktails
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activeTab === 'candles' ? (
              candles.map((candle, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-b from-zinc-900 to-zinc-950 border border-yellow-900/20 p-10 hover:border-yellow-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10"
                >
                  <div className="text-7xl mb-6 opacity-80">{candle.image}</div>
                  <h3 className="text-2xl font-serif text-yellow-100 mb-3 tracking-wide">{candle.name}</h3>
                  <p className="text-yellow-100/60 mb-2 text-sm leading-relaxed">{candle.description}</p>
                  <p className="text-yellow-100/40 mb-6 text-xs leading-relaxed">{candle.notes}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-yellow-900/20">
                    <span className="text-2xl font-light text-yellow-400">{candle.price}</span>
                    <button className="px-5 py-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs uppercase tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-yellow-500/20">
                      Order
                    </button>
                  </div>
                </div>
              ))
            ) : (
              mocktails.map((mocktail, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-b from-purple-950/30 to-zinc-950 border border-purple-500/20 p-10 hover:border-purple-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="text-7xl mb-6 opacity-80">{mocktail.image}</div>
                  <h3 className="text-2xl font-serif text-yellow-100 mb-3 tracking-wide">{mocktail.name}</h3>
                  <p className="text-yellow-100/60 mb-2 text-sm leading-relaxed">{mocktail.description}</p>
                  <p className="text-yellow-100/40 mb-2 text-xs">{mocktail.ingredients}</p>
                  <p className="text-purple-300 mb-6 text-xs font-semibold uppercase tracking-wider">{mocktail.serves}</p>
                  <button className="w-full px-5 py-3 bg-purple-500/10 border border-purple-400/30 text-purple-200 text-xs uppercase tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-purple-500/20">
                    Book Service
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 border-t border-yellow-900/10">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-6xl md:text-7xl font-serif text-yellow-100 mb-8 leading-tight tracking-tight">
                The Art of
                <br />
                <span className="text-yellow-500">Illumination</span>
              </h2>
              <p className="text-lg text-yellow-100/60 mb-6 leading-relaxed font-light">
                Pneuma Lux represents the intersection of artistry and atmosphere. Each candle is meticulously hand-poured using premium soy wax and the finest fragrance oils, creating an olfactory experience that transcends the ordinary.
              </p>
              <p className="text-lg text-yellow-100/60 mb-12 leading-relaxed font-light">
                Our mocktail services bring the same level of craftsmanship to your events, with expertly curated non-alcoholic beverages that elevate any occasion.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-yellow-900/20">
                <div>
                  <div className="text-5xl font-light text-yellow-400 mb-2">500+</div>
                  <div className="text-xs text-yellow-100/50 uppercase tracking-wider">Candles Crafted</div>
                </div>
                <div>
                  <div className="text-5xl font-light text-yellow-400 mb-2">100+</div>
                  <div className="text-xs text-yellow-100/50 uppercase tracking-wider">Events Served</div>
                </div>
                <div>
                  <div className="text-5xl font-light text-yellow-400 mb-2">5.0</div>
                  <div className="text-xs text-yellow-100/50 uppercase tracking-wider">Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-sm bg-gradient-to-br from-yellow-500/20 via-purple-500/10 to-transparent border border-yellow-500/20 flex items-center justify-center">
                <Sparkles size={160} className="text-yellow-500/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-zinc-950 border-t border-yellow-900/10">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-serif text-yellow-100 mb-6 tracking-tight">
              Begin Your Journey
            </h2>
            <p className="text-xl text-yellow-100/50 font-light">
              Let us craft an experience tailored to your vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <a href="mailto:hello@pneumalux.com" className="flex flex-col items-center p-10 bg-zinc-900 border border-yellow-900/20 hover:border-yellow-500/40 transition-all group">
              <Mail className="text-yellow-500 mb-5 group-hover:scale-110 transition-transform" size={36} />
              <span className="font-semibold text-yellow-100 text-sm uppercase tracking-wider mb-2">Email</span>
              <span className="text-xs text-yellow-100/50">hello@pneumalux.com</span>
            </a>

            <a href="tel:+1234567890" className="flex flex-col items-center p-10 bg-zinc-900 border border-yellow-900/20 hover:border-yellow-500/40 transition-all group">
              <Phone className="text-yellow-500 mb-5 group-hover:scale-110 transition-transform" size={36} />
              <span className="font-semibold text-yellow-100 text-sm uppercase tracking-wider mb-2">Phone</span>
              <span className="text-xs text-yellow-100/50">+1 (234) 567-890</span>
            </a>

            <a href="https://instagram.com/pneumalux" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-10 bg-zinc-900 border border-yellow-900/20 hover:border-yellow-500/40 transition-all group">
              <Instagram className="text-yellow-500 mb-5 group-hover:scale-110 transition-transform" size={36} />
              <span className="font-semibold text-yellow-100 text-sm uppercase tracking-wider mb-2">Instagram</span>
              <span className="text-xs text-yellow-100/50">@pneumalux</span>
            </a>
          </div>

          <div className="bg-gradient-to-br from-yellow-600 to-yellow-500 p-16 text-center">
            <MessageCircle size={56} className="mx-auto mb-6 text-black/80" />
            <h3 className="text-4xl font-serif text-black mb-5 tracking-tight">Custom Orders</h3>
            <p className="text-lg mb-8 text-black/70 font-light max-w-xl mx-auto">
              Whether it's a signature scent or a full event setup, we're here to bring your vision to life
            </p>
            <button className="px-12 py-4 bg-black text-yellow-400 font-semibold text-sm uppercase tracking-wider hover:bg-zinc-900 transition-colors">
              Start Your Order
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-900/20 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-500/20">
                <Flame size={24} className="text-black" />
              </div>
              <span className="text-3xl font-serif text-yellow-100">
                Pneuma<span className="text-yellow-500">Lux</span>
              </span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-yellow-100/40 text-sm tracking-wide">
                © {new Date().getFullYear()} Pneuma Lux. All rights reserved.
              </p>
              <p className="text-yellow-100/30 text-xs mt-2 tracking-widest uppercase">
                Handcrafted in Columbus, Ohio
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
