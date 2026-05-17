import Navbar from "@/components/Navbar"
import Image from "next/image"

export const metadata = {
  title: "GPF Çözümü | Mekanitro",
  description:
    "GPF partikül filtresi problemleri için profesyonel performans ve yazılım çözümleri.",
}

export default function GPFPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
<Navbar />
      {/* BG */}
      <div
        className="absolute inset-0 bg-[length:100%] opacity-50"
        style={{
          backgroundImage: "url('/gpf.png')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10">

        {/* HERO */}
        <section className="pt-64 pb-32 px-6 md:px-20">

          <div className="max-w-6xl mx-auto">

            <p className="text-lime-400 uppercase tracking-[4px] font-black">
              GPF ÇÖZÜMÜ
            </p>

            <h1 className="text-5xl md:text-7xl font-black uppercase mt-6 leading-tight">
              GPF
              <br />
              Partikül
              <br />
              Çözümleri
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mt-10 max-w-3xl">
              GPF sistemi kaynaklı performans kayıpları,
              partikül filtresi problemleri
              ve motor arıza lambaları için
              profesyonel yazılım çözümleri sunuyoruz.
            </p>

          </div>

        </section>

        {/* INFO */}
        <section className="py-24 px-6 md:px-20">

          <div className="max-w-6xl mx-auto">

            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
              GPF Sistem
              <br />
              Problemleri
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mt-16">

              <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">

                <h3 className="text-3xl font-black text-lime-400">
                  Çekiş Kaybı
                </h3>

                <p className="text-white/70 leading-relaxed mt-6">
                  Tıkalı GPF sistemi
                  aracın performansını düşürebilir
                  ve turbo basıncını olumsuz etkileyebilir.
                </p>

              </div>

              <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">

                <h3 className="text-3xl font-black text-lime-400">
                  Yakıt Tüketimi
                </h3>

                <p className="text-white/70 leading-relaxed mt-6">
                  GPF doluluğu nedeniyle
                  motor daha zor çalışabilir
                  ve yakıt tüketimi artabilir.
                </p>

              </div>

              <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">

                <h3 className="text-3xl font-black text-lime-400">
                  Sürekli Rejenerasyon
                </h3>

                <p className="text-white/70 leading-relaxed mt-6">
                  GPF sistemi dolduğunda
                  araç sık sık rejenerasyon yapabilir
                  ve sürüş konforu düşebilir.
                </p>

              </div>

              <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">

                <h3 className="text-3xl font-black text-lime-400">
                  Arıza Lambası
                </h3>

                <p className="text-white/70 leading-relaxed mt-6">
                  GPF sistemi kaynaklı problemler
                  motor arıza lambasına
                  ve koruma moduna sebep olabilir.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* FAQ */}
        <section className="py-24 px-6 md:px-20">

          <div className="max-w-5xl mx-auto">

            <h2 className="text-4xl md:text-6xl font-black uppercase">
              Sık Sorulan Sorular
            </h2>

            <div className="space-y-6 mt-16">

              <div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
                <h3 className="text-2xl font-black">
                  GPF sistemi nedir?
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  GPF sistemi,
                  benzinli araçlarda kullanılan
                  partikül filtre sistemidir.
                </p>
              </div>

              <div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
                <h3 className="text-2xl font-black">
                  GPF tıkanırsa ne olur?
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Araçta performans kaybı,
                  çekiş düşüklüğü
                  ve yakıt tüketiminde artış görülebilir.
                </p>
              </div>

              <div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
                <h3 className="text-2xl font-black">
                  GPF performansı etkiler mi?
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Evet. Tıkalı GPF sistemi
                  turbo ve egzoz akışını etkileyebilir.
                </p>
              </div>

              <div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
                <h3 className="text-2xl font-black">
                  GPF çözümü güvenli midir?
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Profesyonel yazılım çözümleri
                  araç altyapısına uygun şekilde uygulanır.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-20">

          <div className="max-w-6xl mx-auto bg-lime-400 rounded-[40px] p-10 md:p-16 text-black">

            <p className="uppercase tracking-[4px] font-black">
              MEKANITRO PERFORMANCE
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mt-6">
              GPF Sistemine
              <br />
              Profesyonel
              <br />
              Çözüm
            </h2>

            <p className="text-black/70 text-lg leading-relaxed mt-8 max-w-3xl">
              GPF sistemi kaynaklı performans kayıpları,
              arıza lambaları
              ve rejenerasyon problemleri için
              profesyonel yazılım çözümleri sunuyoruz.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="https://wa.me/905301331204"
                target="_blank"
                className="bg-black text-white px-8 py-5 rounded-2xl font-black hover:scale-105 transition"
              >
                WhatsApp İletişim
              </a>

              <a
                href="tel:+905301331204"
                className="border-2 border-black px-8 py-5 rounded-2xl font-black"
              >
                0530 133 12 04
              </a>

            </div>

          </div>

        </section>

      </div>

    </main>
  )
}