'use client'

const stats = [
  { value: '7+', label: 'Projects Built' },
  { value: '3+', label: 'Years Coding'   },
  { value: '26', label: 'Technologies'   },
  { value: '2',  label: 'Degrees'        },
]

const facts = [
  { icon: '📍', label: 'Location',   value: 'Helsinki, Finland'          },
  { icon: '🎓', label: 'University', value: 'Åbo Akademi University'     },
  { icon: '📚', label: 'Degree',     value: 'M.Sc. Computer Engineering' },
  { icon: '🌍', label: 'From',       value: 'Nepal & Finland'            },
  { icon: '⚡', label: 'Focus',      value: 'Learning New Technologies'  },
  { icon: '🌐', label: 'Languages',  value: 'English · Nepali · Finnish' },
]

const hobbies = [
  { icon: '✈️',  label: 'Travelling'        },
  { icon: '🎮',  label: 'Gaming'            },
  { icon: '📖',  label: 'Reading Books'     },
  { icon: '🏔️',  label: 'Mountains'         },
  { icon: '🎵',  label: 'Music'             },
  { icon: '🍕',  label: 'Food & Culture'    },
  { icon: '🌏',  label: 'Exploring Cities'  },
  { icon: '📷',  label: 'Photography'       },
  { icon: '🧘',  label: 'Mindfulness'       },
  { icon: '🚴',  label: 'Cycling'           },
  { icon: '⚽',  label: 'Football'          },
  { icon: '🏏',  label: 'Cricket'           },
  { icon: '🏃',  label: 'Sports & Fitness'  },
  { icon: '🔬',  label: 'Research'          },
  { icon: '🧠',  label: 'Learning'          },
]

export default function About() {
  return (
    <section id="about" className="pt-32 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-16 xl:px-24 relative z-10 pb-16">

        <div className="flex items-center gap-4 mb-16">
          <span className="text-cyan-500 text-sm font-mono tracking-widest">// 01</span>
          <div className="w-12 h-px bg-cyan-500" />
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            About Me
          </h2>
          <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div className="flex flex-col gap-8">
            <div className="space-y-5">
              <p className="text-sm leading-7 text-gray-600 dark:text-zinc-400" style={{ fontFamily: 'var(--font-mono)' }}>
                Hey! I&apos;m Sankalpa — a Computer Engineering
                Master&apos;s student at{' '}
                <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                  Åbo Akademi University
                </span>{' '}
                in Turku, Finland. My journey spans two countries —
                shaped by the warmth and resilience of Nepal, and the
                precision and innovation of Finland. Both have made
                me who I am today.
              </p>
              <p className="text-sm leading-7 text-gray-600 dark:text-zinc-400" style={{ fontFamily: 'var(--font-mono)' }}>
                I hold a Bachelor&apos;s in IT Engineering and am
                completing my Master&apos;s in Computer Engineering.
                My path has grown from full-stack web development
                into AI, machine learning, and the{' '}
                <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                  data-driven world
                </span>
                . I am deeply fascinated by how data science and
                intelligent systems are reshaping every industry —
                and I want to be part of that change.
              </p>
              <p className="text-sm leading-7 text-gray-600 dark:text-zinc-400" style={{ fontFamily: 'var(--font-mono)' }}>
                Every dataset tells a story. Every model is a new
                lens on reality. That curiosity is what keeps me
                pushing forward.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 bg-gray-50 dark:bg-zinc-900/50">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 tracking-widest uppercase">
                  Currently
                </span>
              </div>
              <p className="text-sm font-mono text-gray-700 dark:text-zinc-300 leading-6">
                Exploring the intersection of{' '}
                <span className="text-cyan-600 dark:text-cyan-400">
                  AI, data science & software engineering
                </span>{' '}
                — building projects, learning new frameworks, and
                preparing for full-time opportunities in tech.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 bg-gray-50 dark:bg-zinc-900/30 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div
                    className="text-3xl font-bold text-cyan-500 mb-1"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-gray-500 dark:text-zinc-500 group-hover:text-gray-700 dark:group-hover:text-zinc-400 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50">
                <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">
                  // quick facts
                </span>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-zinc-800/50">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-zinc-900/30 transition-colors group"
                  >
                    <span className="text-lg w-8">{fact.icon}</span>
                    <span className="text-xs font-mono text-gray-400 dark:text-zinc-600 w-24 shrink-0">
                      {fact.label}
                    </span>
                    <span className="text-sm font-mono text-gray-700 dark:text-zinc-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="relative w-full mt-8">

        <div className="flex items-center justify-center mb-6 px-16 xl:px-24">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-800 to-transparent" />
          <div className="mx-6 flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-xs tracking-widest">✦</span>
            <div className="flex items-center gap-2 border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/80 rounded-full px-5 py-2">
              <span className="text-cyan-500 font-mono text-xs tracking-widest">//</span>
              <span
                className="text-gray-700 dark:text-zinc-300 text-sm font-medium tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Life Beyond Code
              </span>
              <span className="text-cyan-500 font-mono text-xs tracking-widest">//</span>
            </div>
            <span className="text-cyan-500 font-mono text-xs tracking-widest">✦</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-800 to-transparent" />
        </div>

        <div className="relative border-y border-gray-200 dark:border-zinc-800 py-5 overflow-hidden bg-gray-50/50 dark:bg-zinc-900/20">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee-about whitespace-nowrap">
            {[...hobbies, ...hobbies, ...hobbies].map((h, i) => (
              <div key={i} className="flex items-center gap-2.5 mx-6 shrink-0 group cursor-default">
                <span className="text-xl group-hover:scale-125 transition-transform duration-200">
                  {h.icon}
                </span>
                <span
                  className="text-xs font-mono text-gray-500 dark:text-zinc-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200 tracking-wide"
                >
                  {h.label}
                </span>
                <span className="ml-4 text-gray-300 dark:text-zinc-700 text-lg">✦</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-8 bg-gradient-to-b from-gray-50/50 dark:from-zinc-900/20 to-transparent" />
      </div>

      <style>{`
        @keyframes marquee-about {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee-about {
          animation: marquee-about 35s linear infinite;
        }
        .animate-marquee-about:hover {
          animation-play-state: paused;
        }
      `}</style>

    </section>
  )
}
