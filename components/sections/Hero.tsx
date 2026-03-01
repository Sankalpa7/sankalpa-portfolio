'use client'

import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'

const TechSphere = dynamic(() => import('@/components/three/TechSphere'), {
  ssr: false,
  loading: () => (
    <div className="w-[420px] h-[420px] flex items-center justify-center">
      <p className="text-zinc-600 text-xs font-mono">// loading sphere...</p>
    </div>
  ),
})

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-[#f5f5f5] dark:bg-[#0a0a0a]">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d4_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)] opacity-70" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/8 dark:bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-400/8 dark:bg-cyan-400/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center relative z-10 pt-16">

        <div className="flex flex-col items-start pl-16 pr-8 xl:pl-24 xl:pr-12 py-12">

          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-cyan-500/60 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-cyan-500/30 animate-pulse" />
            </div>
            <span className="text-cyan-600 dark:text-cyan-500 text-xs font-mono tracking-widest uppercase border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 rounded-full">
              Available for work
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-none mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
            <span className="text-gray-900 dark:text-white block">Sankalpa</span>
            <span className="bg-gradient-to-r from-cyan-500 via-cyan-400 to-sky-400 bg-clip-text text-transparent block">
              Neupane
            </span>
          </h1>

          <p className="text-base font-medium text-cyan-600 dark:text-cyan-400 mb-6 tracking-widest uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
            IT Enthusiast
          </p>

          <p className="text-sm leading-7 mb-10 max-w-lg text-gray-600 dark:text-zinc-400" style={{ fontFamily: 'var(--font-mono)' }}>
            Computer Engineering Master&apos;s student who believes<br />
            the best developers never stop learning. I explore<br />
            full-stack development, AI, and machine learning —<br />
            turning curiosity into code and problems into<br />
            clean solutions.{' '}
            <span className="text-cyan-600 dark:text-cyan-400 font-medium">
              Always growing. Always building.
            </span>
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#projects">
              <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-6 text-base rounded-full flex items-center gap-2 transition-all duration-200 shadow-lg shadow-cyan-500/25">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="/cv.pdf" target="_blank">
              <Button variant="outline" className="border-gray-400 dark:border-zinc-700 text-gray-800 dark:text-white bg-transparent hover:bg-gray-200 dark:hover:bg-zinc-900 hover:border-cyan-500 dark:hover:border-cyan-500 px-8 py-6 text-base rounded-full flex items-center gap-2 transition-all duration-200">
                Download CV
                <Download className="w-4 h-4" />
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com/Sankalpa7" target="_blank" className="w-11 h-11 rounded-full border border-gray-300 dark:border-zinc-800 flex items-center justify-center text-gray-500 dark:text-zinc-500 hover:text-cyan-500 hover:border-cyan-500 transition-all duration-200">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/sankalpaneupane7/" target="_blank" className="w-11 h-11 rounded-full border border-gray-300 dark:border-zinc-800 flex items-center justify-center text-gray-500 dark:text-zinc-500 hover:text-cyan-500 hover:border-cyan-500 transition-all duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:sankalpaneupane7@gmail.com" className="w-11 h-11 rounded-full border border-gray-300 dark:border-zinc-800 flex items-center justify-center text-gray-500 dark:text-zinc-500 hover:text-cyan-500 hover:border-cyan-500 transition-all duration-200">
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        <div className="hidden md:flex items-center justify-center pr-16 xl:pr-24 pl-4 py-12">
          <TechSphere />
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-400 dark:text-zinc-600 text-xs font-mono tracking-widest">scroll down</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-400 dark:from-zinc-600 to-transparent animate-pulse" />
      </div>

    </section>
  )
}
