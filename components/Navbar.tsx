"use client"

import Image from "next/image"
import { useState } from "react"

export default function Navbar() {

  const [showAppointment, setShowAppointment] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50">

        <div className="flex items-center justify-between px-6 md:px-16 py-7">

          {/* LOGO */}
          <a href="/">
            <Image
              src="/logo.jpeg"
              alt="Mekanitro"
              width={240}
              height={80}
              priority
              className="w-[170px] md:w-[240px] object-contain"
            />
          </a>

          {/* NAVBAR */}
          <div className="flex items-center gap-3">

            <nav className="hidden md:flex items-center gap-12 text-sm font-bold tracking-wide text-white/90 bg-white/[0.05] border border-white/10 backdrop-blur-xl px-10 py-5 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.05)]">

            <a href="/" className="hover:text-lime-400 transition">
  ANASAYFA
</a>

<a
  href="/gizli-ozellik"
  className="hover:text-lime-400 transition"
>
  GİZLİ ÖZELLİK
</a>

<a
  href="/#hakkimizda"
  className="hover:text-lime-400 transition"
>
  HAKKIMIZDA
</a>

<a
  href="/blog"
  className="hover:text-lime-400 transition"
>
  BLOG
</a>

<a
  href="https://instagram.com/mekanitro_chiptuning"
  target="_blank"
  className="hover:text-lime-400 transition"
>
  INSTAGRAM
</a>

<a
  href="/#iletisim"
  className="hover:text-lime-400 transition"
>
  İLETİŞİM
</a>
            </nav>

            {/* BUTTON */}
            <button
              onClick={() => setShowAppointment(true)}
              className="hidden md:flex bg-lime-400 text-black px-8 py-4 rounded-full font-black hover:scale-105 hover:bg-lime-300 transition duration-300 shadow-[0_0_35px_rgba(163,230,53,0.45)]"
            >
              RANDEVU AL
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setShowMobileMenu(true)}
              className="md:hidden w-14 h-14 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl flex items-center justify-center text-white"
            >

              <div className="space-y-1">

                <div className="w-6 h-[2px] bg-white rounded-full" />
                <div className="w-6 h-[2px] bg-white rounded-full" />
                <div className="w-6 h-[2px] bg-white rounded-full" />

              </div>

            </button>

          </div>

        </div>

      </header>

      {/* APPOINTMENT PANEL */}
      <div
        className={`fixed top-0 right-0 h-screen w-full md:w-[500px] bg-[#0a0a0a] z-[999] border-l border-white/10 transition-all duration-500 ${
          showAppointment
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between p-6 border-b border-white/10">

          <div>

            <p className="text-lime-400 uppercase tracking-[4px] text-sm font-black">
              RANDEVU
            </p>

            <h2 className="text-3xl font-black uppercase mt-2">
              Randevu Al
            </h2>

          </div>

          <button
            onClick={() => setShowAppointment(false)}
            className="text-3xl text-white/70 hover:text-lime-400 transition"
          >
            ×
          </button>

        </div>

        <div className="p-6 space-y-5">

          <input
            type="text"
            placeholder="Ad Soyad"
            className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-lime-400 transition"
          />

          <input
            type="text"
            placeholder="Telefon Numaranız"
            className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-lime-400 transition"
          />

          <input
            type="text"
            placeholder="Araç Bilgisi"
            className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-lime-400 transition"
          />

          <textarea
            placeholder="Mesajınız"
            rows={5}
            className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-lime-400 transition resize-none"
          />

          <a
            href="https://wa.me/905301331204"
            target="_blank"
            className="block w-full bg-lime-400 hover:bg-lime-300 text-black text-center font-black py-5 rounded-2xl transition duration-300 shadow-[0_0_30px_rgba(163,230,53,0.35)]"
          >
            WhatsApp Üzerinden Gönder
          </a>

        </div>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-black z-[999] transition-all duration-500 ${
          showMobileMenu
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between p-6 border-b border-white/10">

          <Image
            src="/logo.jpeg"
            alt="Mekanitro"
            width={170}
            height={60}
            className="object-contain"
          />

          <button
            onClick={() => setShowMobileMenu(false)}
            className="text-4xl text-white"
          >
            ×
          </button>

        </div>

        <div className="flex flex-col p-8 gap-8 text-2xl font-black">

        <a href="/" className="hover:text-lime-400 transition">
  ANASAYFA
</a>

<a
  href="/gizli-ozellik"
  className="hover:text-lime-400 transition"
>
  GİZLİ ÖZELLİK
</a>

<a
  href="/#hakkimizda"
  className="hover:text-lime-400 transition"
>
  HAKKIMIZDA
</a>

<a
  href="/blog"
  className="hover:text-lime-400 transition"
>
  BLOG
</a>

<a
  href="https://instagram.com/mekanitro_chiptuning"
  target="_blank"
  className="hover:text-lime-400 transition"
>
  INSTAGRAM
</a>

<a
  href="/#iletisim"
  className="hover:text-lime-400 transition"
>
  İLETİŞİM
</a>
          <button
            onClick={() => {
              setShowMobileMenu(false)
              setShowAppointment(true)
            }}
            className="bg-lime-400 text-black py-5 rounded-2xl mt-6"
          >
            RANDEVU AL
          </button>

        </div>

      </div>

      {/* OVERLAY */}
      <div
        onClick={() => {
          setShowAppointment(false)
          setShowMobileMenu(false)
        }}
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[998] transition duration-500 ${
          showAppointment || showMobileMenu
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

    </>
  )
}