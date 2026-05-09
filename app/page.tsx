"use client"

import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [showAppointment, setShowAppointment] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

 {/* HEADER */}
<header className="fixed top-0 left-0 w-full z-50">

<div className="flex items-center justify-between px-6 md:px-16 py-7">

  {/* LOGO */}
  <Image
    src="/logo.jpeg"
    alt="Mekanitro"
    width={240}
    height={80}
    priority
    className="w-[170px] md:w-[240px] object-contain"
  />

  {/* NAVBAR */}
  <div className="flex items-center gap-3">

    <nav className="hidden md:flex items-center gap-12 text-sm font-bold tracking-wide text-white/90 bg-white/[0.05] border border-white/10 backdrop-blur-xl px-10 py-5 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.05)]">

      <a href="#" className="hover:text-lime-400 transition">
        ANASAYFA
      </a>

      <a
        href="#gizliozellik"
        className="hover:text-lime-400 transition"
      >
        GİZLİ ÖZELLİK
      </a>

      <a
        href="#hakkimizda"
        className="hover:text-lime-400 transition"
      >
        HAKKIMIZDA
      </a>

      <a
        href="#hizmetler"
        className="hover:text-lime-400 transition"
      >
        HİZMETLER
      </a>

      <a
        href="https://instagram.com/mekanitro_chiptuning"
        target="_blank"
        className="hover:text-lime-400 transition"
      >
        INSTAGRAM
      </a>

      <a
        href="#iletisim"
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

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* BG */}
        <div
className="absolute inset-0 bg-cover bg-center animate-[slowZoom_12s_ease-in-out_infinite]"
          style={{
            backgroundImage: "url('/hero.png')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-lime-400/10 blur-[120px]" />

        {/* CONTENT */}
        <div className="relative z-20 w-full px-6 md:px-20 pt-32">

          <div className="max-w-[650px]">



            <h1 className="text-4xl md:text-5xl font-black leading-[1.05] uppercase italic text-lime-400">
              Daha Fazla
              <br />
              Sürüş Keyfİ
            </h1>

            <h2 className="text-2xl md:text-3xl font-black leading-tight uppercase mt-5">
              Daha Fazla Güç
              <br />
              
            </h2>

            <p className="text-sm md:text-lg text-white/80 mt-8 leading-relaxed max-w-xl">
              Profesyonel ECU yazılım çözümleri ile aracınızın gerçek
              performans potansiyelini güvenli şekilde ortaya çıkarıyoruz.
            </p>

            {/* SERVICES */}
            <div
              id="hizmetler"
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
            >

              {[
                "STAGE 1-2-3 PERFORMANCE YAZILIMLARI",
                "DSG OPTİMİZASYONU YAZILIMI",
                "DPF / EGR ÇÖZÜMLERİ",
                "POPS & BANGS",
                "ADBLUE ÇÖZÜMLERİ",
                "GPF ÇÖZÜMLERİ",
                "GİZLİ ÖZELLİK",
                "7/24 Acil Mobil Destek",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl py-5 px-4 text-center hover:border-lime-400 hover:bg-lime-400/10 transition duration-300 hover:-translate-y-1"
                >
                  <p className="font-black text-xs md:text-sm tracking-wide">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="https://wa.me/905301331204"
                target="_blank"
                className="bg-lime-400 hover:bg-lime-300 text-black font-black px-8 py-4 rounded-2xl transition duration-300 text-base shadow-[0_0_30px_rgba(163,230,53,0.45)]"
              >
                WhatsApp İletişim
              </a>

              <a
                href="tel:+905301331204"
                className="border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black font-black px-8 py-4 rounded-2xl transition duration-300 text-base"
              >
                0530 133 12 04
              </a>

            </div>

          </div>

        </div>

      </section>

{/* GIZLI OZELLIK */}
<section
  id="gizliozellik"
  className="relative py-28 px-6 md:px-20 overflow-hidden"
>

  {/* BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/gizli.png')",
    }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/80" />

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* TITLE */}
    <div className="max-w-3xl">

      <p className="text-lime-400 uppercase tracking-[4px] font-black">
        GİZLİ ÖZELLİK
      </p>

      <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mt-4">
        VAG • BMW • MINI
        <br />
        Gİzlİ Özellİk
        <br />
        Kodlamaları
      </h2>

      <p className="text-white/70 text-lg leading-relaxed mt-8">
        VAG grubu, BMW ve MINI araçlarda fabrika çıkışı kapalı olan birçok
        özelliği profesyonel kodlama işlemleri ile aktif ediyoruz.
      </p>

    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-8 mt-16">

      {/* VAG */}
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8">

        <h3 className="text-3xl font-black uppercase text-lime-400">
          VAG GRUBU
        </h3>

        <div className="space-y-4 mt-8 text-white/80 text-sm">

          <p>• Hayalet ekran animasyonları</p>
          <p>• Gizli ambiyans ayarları</p>
          <p>• Launch Control aktivasyonu</p>
          <p>• Video in Motion</p>
          <p>• Geri görüş kamera aktivasyonu</p>
          <p>• Karşılama far animasyonları</p>
          <p>• Needle Sweep</p>
          <p>• Start / Stop iptali</p>
          <p>• APP Connect aktivasyonu</p>
          <p>• CarPlay aktivasyonu</p>
          <p>• Dijital hız göstergesi</p>
          <p>• Amerikan park kodlaması</p>
          <p>• Ve Daha Fazlası</p>
        </div>

      </div>

      {/* BMW */}
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8">

        <h3 className="text-3xl font-black uppercase text-lime-400">
          BMW GRUBU
        </h3>

        <div className="space-y-4 mt-8 text-white/80 text-sm">

          <p>• M ekran animasyonları</p>
          <p>• Gizli multimedia özellikleri</p>
          <p>• Video in Motion</p>
          <p>• Digital speed gösterimi</p>
          <p>• Ambiyans ışık kodlamaları</p>
          <p>• Egzoz flap kontrolü</p>
          <p>• Start / Stop hafızası</p>
          <p>• Kadran değişimleri</p>
          <p>• M logo aktivasyonları</p>
          <p>• Katlanır ayna kodlaması</p>
          <p>• Launch Control</p>
          <p>• Amerikan park kodlaması</p>
          <p>• Ve Daha Fazlası</p>
        </div>

      </div>

      {/* MINI */}
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8">

        <h3 className="text-3xl font-black uppercase text-lime-400">
          MINI GRUBU
        </h3>

        <div className="space-y-4 mt-8 text-white/80 text-sm">

          <p>• Gizli ekran animasyonları</p>
          <p>• Digital speed gösterimi</p>
          <p>• Ambiyans ışık ayarları</p>
          <p>• Video in Motion</p>
          <p>• CarPlay aktivasyonu</p>
          <p>• Gizli multimedia özellikleri</p>
          <p>• Egzoz flap kontrolü</p>
          <p>• Katlanır ayna kodlaması</p>
          <p>• Start / Stop hafızası</p>
          <p>• Hoşgeldin ışık animasyonları</p>
          <p>• Launch Control aktivasyonu</p>
          <p>• Amerikan park kodlaması</p>
          <p>• Ve Daha Fazlası</p>
        </div>

      </div>

    </div>

  </div>

</section>

{/* ABOUT */}
<section
  id="hakkimizda"
  className="relative py-28 px-6 md:px-20 overflow-hidden"
>

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/about.png')",
    }}
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/75" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto">

    <div className="max-w-3xl">

      <p className="text-lime-400 uppercase tracking-[4px] font-black">
        HAKKIMIZDA
      </p>

      <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mt-4">
        Profesyonel
        <br />
        Chİptunİng
        <br />
        Hİzmetİ
      </h2>

      <p className="text-white/70 text-lg leading-relaxed mt-8 max-w-2xl">
        Mekanitro olarak profesyonel ECU yazılım çözümleri ile
        aracınızın performansını güvenli şekilde optimize ediyoruz.
        Her araç için özel analizler yaparak maksimum verim,
        güç ve sürüş keyfi sunuyoruz.
      </p>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-4 mt-12 max-w-xl">

        <div className="border border-white/10 rounded-2xl p-6 bg-black/30 backdrop-blur-md">

          <h3 className="text-4xl font-black text-lime-400">
            +500
          </h3>

          <p className="text-white/70 mt-2">
            Mutlu Müşteri
          </p>

        </div>

        <div className="border border-white/10 rounded-2xl p-6 bg-black/30 backdrop-blur-md">

          <h3 className="text-4xl font-black text-lime-400">
            %100
          </h3>

          <p className="text-white/70 mt-2">
            Profesyonel İşlem
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* WHY US */}
<section className="relative py-28 px-6 md:px-20 overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/whybg.png')",
    }}
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/75" />

  <div className="relative z-10 max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-lime-400 uppercase tracking-[4px] font-black">
              NEDEN BİZ
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase mt-4">
              Güvenlİ &
              <br />
              Profesyonel Yazılım
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20">

            {[
              {
                title: "Dyno Desteklİ",
                desc: "Ölçümlü ve güvenli performans optimizasyonu.",
              },
              {
                title: "Profesyonel Cİhazlar",
                desc: "Orijinal ekipmanlarla güvenli ECU işlemleri.",
              },
              {
                title: "Özel Yazılım",
                desc: "Her araç için özel performans ayarı.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-lime-400 transition duration-300"
              >

                <h3 className="text-2xl font-black uppercase">
                  {item.title}
                </h3>

                <p className="text-white/60 mt-5 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-20 bg-lime-400 text-black">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

          <div>

            <p className="uppercase tracking-[4px] font-black">
              PERFORMANSI HİSSET
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mt-4">
              Aracının Gerçek
              <br />
              Gücünü Açığa Çıkar
            </h2>

          </div>

          <a
            href="https://wa.me/905301331204"
            target="_blank"
            className="bg-black text-white px-10 py-5 rounded-2xl font-black hover:scale-105 transition"
          >
            Hemen İletişime Geç
          </a>

        </div>

      </section>
{/* FAQ */}
<section className="relative py-28 px-6 md:px-20 bg-black overflow-hidden">

  {/* BG GLOW */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-lime-400/10 blur-[140px]" />

  <div className="relative z-10 max-w-5xl mx-auto">

    {/* TITLE */}
    <div className="text-center">

      <p className="text-lime-400 uppercase tracking-[4px] font-black">
        SIK SORULAN SORULAR
      </p>

      <h2 className="text-4xl md:text-6xl font-black uppercase mt-4 leading-tight">
        Merak Ettikleriniz
      </h2>

      <p className="text-white/60 mt-6 max-w-2xl mx-auto leading-relaxed">
        Chiptuning ve gizli özellik işlemleri hakkında
        en çok sorulan soruların cevapları.
      </p>

    </div>

    {/* FAQ ITEMS */}
    <div className="mt-16 space-y-5">

      {[
        {
          q: "Yazılım araca zarar verir mi?",
          a: "Profesyonel şekilde uygulanan yazılımlar araç için güvenlidir. İşlemler araç toleranslarına uygun şekilde yapılır.",
        },
        {
          q: "Yakıt tüketimi artar mı?",
          a: "Doğru kullanımda çoğu araçta yakıt tüketimi dengelenebilir, kullanım tarzına göre değişiklik gösterebilir.",
        },
        {
          q: "İşlem ne kadar sürüyor?",
          a: "Araç tipine göre ortalama işlem süresi 1 ila 3 saat arasında değişmektedir.",
        },
        {
          q: "Orijinal yazılıma geri dönebilir miyim?",
          a: "Evet. Araç orijinal yazılımı yedeklenir ve istenildiği zaman geri yüklenebilir.",
        },
        {
          q: "Hangi araçlara işlem yapılabiliyor?",
          a: "VAG grubu, BMW, MINI ve birçok benzinli / dizel araca profesyonel yazılım uygulanabilmektedir.",
        },
        {
          q: "Gizli özellik kodlaması nedir?",
          a: "Araçlarda fabrika çıkışı kapalı gelen özelliklerin profesyonel kodlama ile aktif edilmesidir.",
        },
      ].map((item) => (
        <details
          key={item.q}
          className="group bg-white/[0.03] border border-white/10 rounded-3xl p-7 backdrop-blur-md hover:border-lime-400 transition duration-300"
        >

          <summary className="flex items-center justify-between cursor-pointer list-none">

            <h3 className="text-lg md:text-xl font-black uppercase">
              {item.q}
            </h3>

            <div className="text-lime-400 text-3xl font-light group-open:rotate-45 transition duration-300">
              +
            </div>

          </summary>

          <p className="text-white/60 leading-relaxed mt-6 pr-8">
            {item.a}
          </p>

        </details>
      ))}

    </div>

  </div>

</section>
{/* INSTAGRAM FEED */}
<section className="relative py-28 px-6 md:px-20 bg-black overflow-hidden">

  {/* BG GLOW */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-lime-400/10 blur-[140px]" />

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* TITLE */}
    <div className="text-center">

      <p className="text-lime-400 uppercase tracking-[4px] font-black">
        INSTAGRAM
      </p>

      <h2 className="text-4xl md:text-6xl font-black uppercase mt-4">
        Son Paylaşımlar
      </h2>

      <p className="text-white/60 mt-6 max-w-2xl mx-auto">
        Mekanitro’dan en yeni araçlar, yazılım işlemleri ve performans projeleri.
      </p>

    </div>

    {/* GRID */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-16">

      {[
        "/insta1.png",
        "/insta2.png",
        "/insta3.png",
        "/insta4.png",
        "/insta5.jpeg",
        "/insta6.jpeg",
      ].map((image, index) => (

        <a
          key={index}
          href="https://instagram.com/mekanitro_chiptuning"
          target="_blank"
          className="group relative overflow-hidden rounded-3xl border border-white/10"
        >

          <img
            src={image}
            alt=""
            className="w-full h-[220px] md:h-[300px] object-cover group-hover:scale-110 transition duration-700"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />

          {/* ICON */}
          <div className="absolute bottom-5 right-5 bg-lime-400 text-black w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-xl shadow-2xl">
            IG
          </div>

        </a>

      ))}

    </div>

  </div>

</section>
      {/* CONTACT */}
      <section
        id="iletisim"
        className="bg-[#050505] py-28 px-6 md:px-20"
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>

            <p className="text-lime-400 uppercase tracking-[4px] font-black">
              İLETİŞİM
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase mt-4">
              Bize Ulaşın
            </h2>

            <p className="text-white/70 leading-relaxed mt-8 max-w-lg">
              Yazılım işlemleri, performans optimizasyonu ve detaylı bilgi için
              bizimle iletişime geçebilirsiniz.
            </p>

            <div className="space-y-5 mt-10">

              <a
                href="tel:+905301331204"
                className="block text-3xl font-black hover:text-lime-400 transition"
              >
                0530 133 12 04
              </a>

              <a
                href="https://instagram.com/mekanitro_chiptuning"
                target="_blank"
                className="block text-lg text-white/70 hover:text-lime-400 transition"
              >
                @mekanitro_chiptuning
              </a>
              <a
  href="mailto:arash.mach@gmail.com"
  className="block text-lg text-white/70 hover:text-lime-400 transition"
>
  arash.mach@gmail.com
</a>
            </div>

          </div>

          {/* RIGHT */}
          <div className="rounded-3xl overflow-hidden border border-white/10 min-h-[400px]">

<iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4311.013771863115!2d28.796956346952264!3d40.99039266463433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1778326851176!5m2!1str!2str"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="min-h-[400px]"
/>

</div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 px-6 md:px-20">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-white/50 text-sm">
            © 2026 Mekanitro Chiptuning. Tüm hakları saklıdır.
          </p>

          <div className="flex gap-6 text-sm text-white/70">

            <a href="#" className="hover:text-lime-400 transition">
              Anasayfa
            </a>

            <a href="#hakkimizda" className="hover:text-lime-400 transition">
              Hakkımızda
            </a>

            <a href="#iletisim" className="hover:text-lime-400 transition">
              İletişim
            </a>

          </div>

        </div>

      </footer>

{/* FLOAT BUTTONS */}
<div className="fixed bottom-6 right-6 z-50 flex gap-4">

  {/* INSTAGRAM */}
  <a
    href="https://instagram.com/mekanitro_chiptuning"
    target="_blank"
    className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      className="w-13 h-13"
    >
      <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 16.5 5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
    </svg>
  </a>

  {/* WHATSAPP */}
  <a
    href="https://wa.me/905301331204"
    target="_blank"
    className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.45)] hover:scale-110 transition duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="white"
      className="w-15 h-15"
    >
      <path d="M19.11 17.23c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.15.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.41.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.45-.82-1.98-.22-.53-.45-.46-.6-.47h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.23s.96 2.59 1.09 2.77c.13.18 1.88 2.87 4.56 4.03.64.28 1.14.45 1.53.58.64.2 1.22.17 1.68.1.51-.08 1.58-.64 1.8-1.25.22-.62.22-1.14.15-1.25-.07-.11-.24-.18-.51-.32zM16.03 3C8.85 3 3 8.74 3 15.82c0 2.48.73 4.79 1.99 6.75L3 29l6.62-1.92a13.03 13.03 0 0 0 6.41 1.67h.01C23.2 28.75 29 23 29 15.91 29 8.83 23.2 3 16.03 3zm0 23.47h-.01c-2.04 0-4.04-.55-5.79-1.59l-.41-.24-3.93 1.14 1.16-3.83-.27-.39a10.44 10.44 0 0 1-1.67-5.64c0-5.75 4.72-10.43 10.53-10.43 5.81 0 10.53 4.68 10.53 10.43 0 5.75-4.72 10.44-10.54 10.44z"/>
    </svg>
  </a>

</div>
{/* APPOINTMENT PANEL */}
<div
  className={`fixed top-0 right-0 h-screen w-full md:w-[500px] bg-[#0a0a0a] z-[999] border-l border-white/10 transition-all duration-500 ${
    showAppointment
      ? "translate-x-0"
      : "translate-x-full"
  }`}
>

  {/* HEADER */}
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

  {/* FORM */}
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

{/* OVERLAY */}
<div
  onClick={() => setShowAppointment(false)}
  className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[998] transition duration-500 ${
    showAppointment
      ? "opacity-100 visible"
      : "opacity-0 invisible"
  }`}
/>
{/* MOBILE MENU */}
<div
  className={`fixed top-0 right-0 h-screen w-[85%] bg-[#0a0a0a] z-[999] border-l border-white/10 transition-all duration-500 ${
    showMobileMenu
      ? "translate-x-0"
      : "translate-x-full"
  }`}
>

  {/* HEADER */}
  <div className="flex items-center justify-between p-6 border-b border-white/10">

    <h2 className="text-2xl font-black uppercase">
      Menü
    </h2>

    <button
      onClick={() => setShowMobileMenu(false)}
      className="text-3xl text-white/70"
    >
      ×
    </button>

  </div>

  {/* LINKS */}
  <div className="flex flex-col p-6">

    <a
      href="#"
      onClick={() => setShowMobileMenu(false)}
      className="py-5 border-b border-white/10 text-xl font-bold"
    >
      ANASAYFA
    </a>

    <a
      href="#gizliozellik"
      onClick={() => setShowMobileMenu(false)}
      className="py-5 border-b border-white/10 text-xl font-bold"
    >
      GİZLİ ÖZELLİK
    </a>

    <a
      href="#hakkimizda"
      onClick={() => setShowMobileMenu(false)}
      className="py-5 border-b border-white/10 text-xl font-bold"
    >
      HAKKIMIZDA
    </a>

    <a
      href="#iletisim"
      onClick={() => setShowMobileMenu(false)}
      className="py-5 border-b border-white/10 text-xl font-bold"
    >
      İLETİŞİM
    </a>

    <a
      href="https://instagram.com/mekanitro_chiptuning"
      target="_blank"
      className="mt-8 bg-gradient-to-r from-pink-500 to-orange-400 text-white text-center py-4 rounded-2xl font-black"
    >
      INSTAGRAM
    </a>

    <a
      href="https://wa.me/905301331204"
      target="_blank"
      className="mt-4 bg-lime-400 text-black text-center py-4 rounded-2xl font-black shadow-[0_0_30px_rgba(163,230,53,0.35)]"
    >
      WHATSAPP
    </a>

  </div>

</div>

{/* MOBILE OVERLAY */}
<div
  onClick={() => setShowMobileMenu(false)}
  className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[998] transition duration-500 ${
    showMobileMenu
      ? "opacity-100 visible"
      : "opacity-0 invisible"
  }`}
/>
    </main>
  )
}