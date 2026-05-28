import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Image from "next/image"
export const metadata = {
  title: "7/24 Acil Mobil Destek | Mekanitro",
  description:
    "Yerinde mobil chiptuning, arıza çözümleri ve profesyonel mobil destek hizmeti.",
}

export default function MobilDestekPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
<Navbar />
      {/* BG */}
      <div
        className="absolute inset-0 bg-[length:100%] opacity-50"
        style={{
          backgroundImage: "url('/stagebg.png')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10">
        {/* HERO */}
        <section className="pt-64 pb-32 px-6 md:px-20">

          <div className="max-w-6xl mx-auto">

            <p className="text-lime-400 uppercase tracking-[4px] font-black">
              7/24 MOBİL DESTEK
            </p>

            <h1 className="text-5xl md:text-7xl font-black uppercase mt-6 leading-tight">
              Acİl Mobİl
              <br />
              Destek
              <br />
              Hİzmetİ
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mt-10 max-w-3xl">
              Yolda kalan araçlara,
              performans işlemlerine
              ve profesyonel yazılım çözümlerine
              yerinde mobil destek hizmeti sunuyoruz.
            </p>

          </div>

        </section>

        {/* INFO */}
        <section className="py-24 px-6 md:px-20">

          <div className="max-w-7xl mx-auto">

            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
              Yerinde
              <br />
              Profesyonel Hizmet
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-16">

              <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">

                <h3 className="text-3xl font-black text-lime-400">
                  Yolda Kalan Araçlara Destek
                </h3>

                <p className="text-white/70 leading-relaxed mt-6">
                  Arıza yaşayan,
                  çalışmayan
                  veya acil destek gereken araçlara
                  mobil servis hizmeti sağlanır.
                </p>

              </div>

              <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">

                <h3 className="text-3xl font-black text-lime-400">
                  Yerinde Stage İşlemleri
                </h3>

                <p className="text-white/70 leading-relaxed mt-6">
                  Stage 1,
                  Stage 2
                  ve performans yazılım işlemleri
                  müşterinin konumunda uygulanabilir.
                </p>

              </div>

              <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">

                <h3 className="text-3xl font-black text-lime-400">
                  Mobil Gizli Özellik
                </h3>

                <p className="text-white/70 leading-relaxed mt-6">
                  Gizli özellik aktivasyonları,
                  kodlama işlemleri
                  ve profesyonel optimizasyonlar yerinde yapılabilir.
                </p>

              </div>

              <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">

                <h3 className="text-3xl font-black text-lime-400">
                  Gece Gündüz Hizmet
                </h3>

                <p className="text-white/70 leading-relaxed mt-6">
                  Acil durumlarda
                  7/24 mobil destek ile
                  müşterilerin bulunduğu konuma hizmet sağlanır.
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
                  Mobil hizmet nasıl çalışır?
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Profesyonel ekipmanlarla
                  müşterinin konumuna gidilerek
                  işlemler yerinde uygulanır.
                </p>
              </div>

              <div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
                <h3 className="text-2xl font-black">
                  Hangi işlemler mobil yapılabilir?
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Stage yazılım,
                  gizli özellik,
                  DPF / EGR,
                  AdBlue
                  ve birçok profesyonel işlem mobil uygulanabilir.
                </p>
              </div>

              <div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
                <h3 className="text-2xl font-black">
                  Gece hizmet veriliyor mu?
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Acil durumlarda
                  gece ve gündüz mobil destek sağlanabilmektedir.
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
              Mobil
              <br />
              Destek
            </h2>

            <p className="text-black/70 text-lg leading-relaxed mt-8 max-w-3xl">
              Mobil ekipmanlarımız ile
              müşterilerin bulunduğu konuma giderek
              profesyonel yazılım
              ve performans hizmetleri sunuyoruz.
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