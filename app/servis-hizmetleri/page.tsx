import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Image from "next/image"
export const metadata = {
  title: "Servis Hizmetleri | Mekanitro",
  description:
    "Profesyonel bakım, arıza tespiti ve performans odaklı servis hizmetleri.",
}

export default function ServisPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
<Navbar />
      {/* BG */}
      <div
        className="absolute inset-0 bg-[length:100%] opacity-50"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10">
        {/* HERO */}
        <section className="pt-64 pb-32 px-6 md:px-20">

          <div className="max-w-6xl mx-auto">

            <p className="text-lime-400 uppercase tracking-[4px] font-black">
              SERVİS HİZMETLERİ
            </p>

            <h1 className="text-5xl md:text-7xl font-black uppercase mt-6 leading-tight">
              Profesyonel
              <br />
              Servİs &
              <br />
              Bakım
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mt-10 max-w-3xl">
              Profesyonel ekipmanlar ile
              araç bakım,
              arıza tespiti
              ve performans odaklı servis hizmetleri sunuyoruz.
            </p>

          </div>

        </section>

        {/* SERVICES */}
        <section className="py-24 px-6 md:px-20">

          <div className="max-w-7xl mx-auto">

            <h2 className="text-4xl md:text-6xl font-black uppercase">
              Hizmetlerimiz
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-16">

              <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">
                <h3 className="text-3xl font-black text-lime-400">
                  Arıza Tespiti
                </h3>

                <p className="text-white/70 leading-relaxed mt-6">
                  Profesyonel cihazlarla
                  detaylı arıza analizi
                  ve sistem kontrolü yapılır.
                </p>
              </div>

              <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">
                <h3 className="text-3xl font-black text-lime-400">
                  Periyodik Bakım
                </h3>

                <p className="text-white/70 leading-relaxed mt-6">
                  Motor yağı,
                  filtreler
                  ve genel bakım işlemleri uygulanır.
                </p>
              </div>
              <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">
  <h3 className="text-3xl font-black text-lime-400">
    Otomatik Şanzıman Bakımı
  </h3>

  <p className="text-white/70 leading-relaxed mt-6">
    DSG ve otomatik şanzıman sistemleri için
    profesyonel yağ değişimi,
    adaptasyon
    ve bakım işlemleri uygulanır.
  </p>
</div>

<div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">
  <h3 className="text-3xl font-black text-lime-400">
    Şanzıman Revizyonu
  </h3>

  <p className="text-white/70 leading-relaxed mt-6">
    Otomatik şanzıman arızaları,
    geçiş problemleri
    ve mekanik sorunlar için
    profesyonel revizyon hizmeti sunulur.
  </p>
</div>

<div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">
  <h3 className="text-3xl font-black text-lime-400">
    Genel Tamir İşlemleri
  </h3>

  <p className="text-white/70 leading-relaxed mt-6">
    Motor,
    yürüyen aksam
    ve mekanik sistemlerde
    profesyonel tamir ve bakım işlemleri uygulanır.
  </p>
</div>
              <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">
                <h3 className="text-3xl font-black text-lime-400">
                  Performans Kontrolü
                </h3>

                <p className="text-white/70 leading-relaxed mt-6">
                  Araç performansı,
                  turbo sistemi
                  ve motor verileri analiz edilir.
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
              Profesyonel
              <br />
              Servis
              <br />
              Hizmeti
            </h2>

            <p className="text-black/70 text-lg leading-relaxed mt-8 max-w-3xl">
              Profesyonel ekipmanlar ve deneyimli altyapı ile
              araç bakım,
              arıza tespiti
              ve performans servis hizmetleri sunuyoruz.
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
      <Footer />
    </main>
  )
}