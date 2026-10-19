import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown, ArrowUpRight, Check, ChevronDown, Gift, Heart,
  Music2, Pause, Sparkles, X,
} from 'lucide-react'
import Puja1 from './Imaiges/puja1.jpeg'
import Puja2 from './Imaiges/puja2.jpeg'
import Puja3 from './Imaiges/puja3.jpeg'
import Puja4 from './Imaiges/puja4.jpeg'
import Puja5 from './Imaiges/puja5.jpeg'
import Puja6 from './Imaiges/puja6.jpeg'

const memories = [
  {
    image: Puja6,
    alt: 'Puja memory photo 1',
    caption: 'The little things',
    note: 'It is the simplest moments with you that become my favourite memories.',
  },
  {
    image: Puja2,
    alt: 'Puja memory photo 2',
    caption: 'My happy place',
    note: 'Somehow, an ordinary day feels special whenever you are there.',
  },
  {
    image: Puja3,
    alt: 'Puja memory photo 3',
    caption: 'All the laughter',
    note: 'Here is to more silly jokes, long talks, and laughter that never ends.',
  },
  {
    image: Puja4,
    alt: 'Puja memory photo 4',
    caption: 'A little reminder',
    note: 'You bring so much colour, kindness, and beauty into my world.',
  },
  {
    image: Puja5,
    alt: 'Puja memory photo 5',
    caption: 'One more beautiful memory',
    note: 'My favourite memories are the ones that have you in them.',
  },
    
]

const wishes = [
  'May this year bring you peace on the hard days and a hundred reasons to smile on the good ones.',
  'May you keep chasing the dreams that make your eyes light up. I will always be cheering for you.',
  'And may you always remember how loved, appreciated, and wonderfully you are.',
]

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-rose-600">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-tight text-rose-900 sm:text-5xl">{title}</h2>
      {text && <p className="mx-auto mt-4 max-w-xl leading-7 text-rose-900/65">{text}</p>}
    </div>
  )
}

function App() {
  const [giftOpen, setGiftOpen] = useState(false)
  const [letterOpen, setLetterOpen] = useState(false)
  const [activePhoto, setActivePhoto] = useState(null)
  const [playing, setPlaying] = useState(false)
  const [showAllWishes, setShowAllWishes] = useState(false)
  const audioRef = useRef(null)

  // Add your own MP3 at public/music/birthday-song.mp3.
  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
      return
    }
    try {
      await audio.play()
      setPlaying(true)
    } catch {
      alert('Add your song at public/music/birthday-song.mp3, then try again.')
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onEnded = () => setPlaying(false)
    audio.addEventListener('ended', onEnded)
    return () => audio.removeEventListener('ended', onEnded)
  }, [])

  return (
    <div className="min-h-screen overflow-hidden bg-rose-50 text-rose-900">
      <audio ref={audioRef} src={`${import.meta.env.BASE_URL}music/birthday-song.mp3`} loop preload="none" />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#home" className="flex items-center gap-2 font-display text-xl font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-rose-600 shadow-sm"><Heart size={17} fill="currentColor" /></span>
          a little love note
        </a>
        <button onClick={toggleMusic} className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2.5 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:border-rose-300">
          {playing ? <Pause size={16} /> : <Music2 size={16} />}
          <span className="hidden sm:inline">{playing ? 'Pause our song' : 'Play our song'}</span>
          <span className="sm:hidden">{playing ? 'Pause' : 'Music'}</span>
        </button>
      </nav>

      <main>
        <section id="home" className="relative mx-auto grid min-h-[80vh] max-w-7xl items-center gap-10 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:pb-28 lg:pt-8">
          <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-pink-200/50 blur-3xl" />
          <div className="relative z-10 animate-fade-up">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-rose-700">
              <Sparkles size={14} /> made with all my heart
            </div>
            <p className="mb-3 font-display text-xl italic text-rose-700 sm:text-2xl">For my favourite person,</p>
            <h1 className="font-display text-5xl font-semibold leading-[1.08] tracking-tight text-rose-950 sm:text-7xl xl:text-[5.5rem]">
              Happy Birthday,
              <span className="mt-2 block italic text-rose-600">beautiful soul.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-rose-900/70 sm:text-lg">
              Today is all about celebrating you — your kind heart, your lovely smile, and all the little things that make you, wonderfully you.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button onClick={() => setLetterOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-600/20 transition hover:-translate-y-1 hover:bg-rose-700">
                Read your letter <Heart size={16} fill="currentColor" />
              </button>
              <a href="#memories" className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-6 py-3.5 text-sm font-bold transition hover:-translate-y-1 hover:bg-white">
                Our memories <ArrowDown size={16} />
              </a>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-rose-800/60">
              <div className="flex -space-x-2">
                <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-rose-50 bg-pink-200">♡</span>
                <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-rose-50 bg-rose-300">♡</span>
                <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-rose-50 bg-orange-100">♡</span>
              </div>
              A small page for a very big feeling.
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg animate-float">
            <div className="absolute -right-2 top-8 z-10 grid h-16 w-16 rotate-12 place-items-center rounded-2xl bg-white text-rose-500 shadow-romantic sm:-right-5 sm:h-20 sm:w-20">
              <Heart size={28} fill="currentColor" />
            </div>
            <div className="absolute -left-3 bottom-12 z-10 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-romantic sm:-left-8">
              <p className="font-display text-lg italic">You make life sweeter.</p>
              <p className="mt-1 text-xs text-rose-600">always & forever ♡</p>
            </div>
            <div className="rounded-[2rem] border-[10px] border-white bg-white p-2 shadow-romantic sm:rounded-[2.5rem] sm:border-[14px]">
              <img
                src={Puja1}
                alt="A favourite photo of Puja"
                className="h-[390px] w-full rounded-[1.4rem] object-cover sm:h-[520px] sm:rounded-[1.8rem]"
              />
            </div>
            <div className="absolute -bottom-6 right-8 flex items-center gap-2 rounded-full bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-lg">
              <Sparkles size={15} /> your special day
            </div>
          </div>
        </section>

        <section className="relative bg-white/70 px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <SectionHeading eyebrow="A wish just for you" title="If I could wish you anything…" text="It would be more than candles and cake. It would be a year filled with the kind of happiness you so freely give to others." />
            <div className="grid gap-4 md:grid-cols-3">
              {wishes.map((wish, i) => (
                <div key={wish} className="rounded-3xl border border-rose-100 bg-rose-50/80 p-6 transition hover:-translate-y-1 hover:shadow-romantic">
                  <span className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-white text-rose-600 shadow-sm"><Heart size={18} /></span>
                  <p className="leading-7 text-rose-900/75">{wish}</p>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-rose-500">wish no. 0{i + 1}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button onClick={() => setShowAllWishes(!showAllWishes)} className="inline-flex items-center gap-2 text-sm font-bold text-rose-700 hover:text-rose-900">
                {showAllWishes ? 'Hide extra love' : 'There is more I wish for you'} <ChevronDown size={16} className={showAllWishes ? 'rotate-180' : ''} />
              </button>
              {showAllWishes && <p className="mx-auto mt-4 max-w-2xl animate-fade-up font-display text-xl italic leading-8 text-rose-700">I wish you the courage to begin again, the freedom to be yourself, and the comfort of knowing you never have to be perfect to be loved.</p>}
            </div>
          </div>
        </section>

        <section id="memories" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading eyebrow="little moments, big memories" title="A gallery of warm feelings" text="These are placeholders for your favourite photos. Replace them with your own pictures to make this page truly yours." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {memories.map((memory, i) => (
              <button key={memory.caption} onClick={() => setActivePhoto(memory)} className={`group text-left ${i % 2 ? 'lg:mt-10' : ''}`}>
                <div className="overflow-hidden rounded-[1.6rem] border-[7px] border-white bg-white shadow-romantic">
                  <img src={memory.image} alt={memory.alt} loading="lazy" className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between px-1 pt-4">
                  <div>
                    <p className="font-display text-xl">{memory.caption}</p>
                    <p className="mt-1 text-xs text-rose-800/55">memory #{String(i + 1).padStart(2, '0')}</p>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-rose-200 bg-white transition group-hover:bg-rose-600 group-hover:text-white"><ArrowUpRight size={17} /></span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 sm:pb-24">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-rose-700 via-rose-600 to-pink-500 px-6 py-14 text-center text-white shadow-romantic sm:rounded-[2.5rem] sm:px-12 sm:py-20">
            <div className="absolute -left-10 -top-16 h-52 w-52 rounded-full border border-white/15" />
            <div className="absolute -bottom-24 -right-5 h-72 w-72 rounded-full border border-white/15" />
            <span className="relative mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-white/15"><Gift size={30} /></span>
            <p className="relative mb-3 text-xs font-bold uppercase tracking-[0.28em] text-white/75">one last little surprise</p>
            <h2 className="relative font-display text-4xl leading-tight sm:text-6xl">A gift, from my heart to yours.</h2>
            <p className="relative mx-auto mt-5 max-w-xl leading-7 text-white/80">There is something waiting for you. Close your eyes, make a wish, and then open your surprise.</p>
            <button onClick={() => setGiftOpen(true)} className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-rose-700 shadow-lg transition hover:-translate-y-1 hover:bg-rose-50">
              <Gift size={17} /> Open your surprise
            </button>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Heart className="mx-auto mb-5 text-rose-500" size={27} fill="currentColor" />
            <p className="font-display text-3xl italic leading-snug text-rose-900 sm:text-4xl">“The world got a little brighter the day you arrived in it.”</p>
            <p className="mt-5 text-sm text-rose-800/60">Happy birthday, my favourite human. With all my love. ♡</p>
            <button onClick={() => setLetterOpen(true)} className="mt-7 text-sm font-bold text-rose-600 underline decoration-rose-300 underline-offset-4 hover:text-rose-800">Read the letter one more time</button>
          </div>
        </section>
      </main>

      <footer className="border-t border-rose-200/70 bg-white/50 px-5 py-7 text-center text-xs text-rose-800/55">
        Made with <Heart className="mx-1 inline text-rose-500" size={12} fill="currentColor" /> and a whole lot of love · just for you
      </footer>

      {giftOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="gift-title" onClick={() => setGiftOpen(false)}>
          <div className="modal-card max-w-lg text-center" onClick={(e) => e.stopPropagation()}>
            <button aria-label="Close gift" onClick={() => setGiftOpen(false)} className="modal-close"><X size={20} /></button>
            <div className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-3xl bg-rose-100 text-rose-600 animate-soft-pulse"><Gift size={38} /></div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-rose-500">surprise!</p>
            <h3 id="gift-title" className="font-display text-4xl text-rose-950">Your gift is a promise.</h3>
            <p className="mt-5 leading-8 text-rose-900/70">To keep celebrating your wins, listening to your stories, making you laugh when days feel heavy, and reminding you how special you are — not just today, but all year long.</p>
            <div className="mt-7 rounded-2xl bg-rose-50 p-5 font-display text-xl italic text-rose-700">One more hug, one more smile, one more beautiful memory. ♡</div>
            <button onClick={() => { setGiftOpen(false); setLetterOpen(true) }} className="mt-6 rounded-full bg-rose-600 px-6 py-3 font-semibold text-white hover:bg-rose-700">And one more thing…</button>
          </div>
        </div>
      )}

      {letterOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="letter-title" onClick={() => setLetterOpen(false)}>
          <article className="modal-card max-w-2xl text-left" onClick={(e) => e.stopPropagation()}>
            <button aria-label="Close letter" onClick={() => setLetterOpen(false)} className="modal-close"><X size={20} /></button>
            <div className="mb-6 flex items-center gap-3 text-rose-500"><Heart size={23} fill="currentColor" /><span className="text-xs font-bold uppercase tracking-[0.24em]">a letter for you</span></div>
            <h3 id="letter-title" className="font-display text-4xl text-rose-950 sm:text-5xl">To my favourite person,</h3>
            <div className="mt-6 space-y-4 leading-8 text-rose-900/75">
              <p>Happy birthday, my love. 💗</p>
              <p>I wish I could put into words how much happiness you bring into my life. You make ordinary moments feel meaningful, and your smile has a way of making difficult days feel a little lighter.</p>
              <p>Today, I hope you feel celebrated for every part of who you are — your kindness, your strength, your dreams, and even the little things you might not notice about yourself. You deserve a love that feels safe, honest, and full of laughter.</p>
              <p>Thank you for being you. I hope this new chapter brings you beautiful surprises, brave beginnings, peaceful moments, and everything your heart has been wishing for.</p>
              <p className="font-display text-2xl italic text-rose-700">I am so lucky to have you in my world.</p>
              <p>Happy birthday, beautiful. Always cheering for you, always wishing you the best.</p>
            </div>
            <p className="mt-8 border-t border-rose-100 pt-5 font-display text-xl italic text-rose-600">With all my love, <span className="block text-base">Your favourite person ♡</span></p>
            <button onClick={() => setLetterOpen(false)} className="mt-7 inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-3 font-semibold text-white hover:bg-rose-700"><Check size={16} /> Keep this close to your heart</button>
          </article>
        </div>
      )}

      {activePhoto && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={activePhoto.caption} onClick={() => setActivePhoto(null)}>
          <div className="modal-card max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button aria-label="Close photo" onClick={() => setActivePhoto(null)} className="modal-close"><X size={20} /></button>
            <img src={activePhoto.image} alt={activePhoto.alt} className="max-h-[60vh] w-full rounded-2xl object-cover" />
            <h3 className="mt-5 font-display text-3xl">{activePhoto.caption}</h3>
            <p className="mt-2 leading-7 text-rose-900/70">{activePhoto.note}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
