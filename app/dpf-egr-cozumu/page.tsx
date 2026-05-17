import Navbar from "@/components/Navbar"
import Image from "next/image"

export const metadata = {
  title: "DPF & EGR Çözümü | Mekanitro",
  description:
    "DPF, EGR ve partikül filtresi arızaları için profesyonel yazılım çözümleri.",
}

export default function DPFEGRPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
<Navbar />
      {/* GLOBAL BG */}
      <div
        className="absolute inset-0 bg-[length:100%] opacity-50"
        style={{
          backgroundImage: "url('/dpf.png')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10">



        {/* HERO */}
        <section className="pt-64 pb-32 px-6 md:px-20">

          <div className="max-w-6xl mx-auto">

            <p className="text-lime-400 uppercase tracking-[4px] font-black">
              DPF & EGR ÇÖZÜMÜ
            </p>

            <h1 className="text-5xl md:text-7xl font-black uppercase mt-6 leading-tight">
              DPF
              <br />
              EGR
              <br />
              Çözümleri
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mt-10 max-w-3xl">
              DPF, EGR ve partikül filtresi kaynaklı arızalar için
              profesyonel yazılım çözümleri sunuyoruz.
              Çekiş düşüklüğü, rejenerasyon problemleri
              ve arıza lambası sorunlarına özel optimizasyon uygulanır.
            </p>

          </div>

        </section>


{/* DETAIL INFO */}
<section className="py-24 px-6 md:px-20">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
      DPF ve EGR
      <br />
      Problemleri
    </h2>

    <div className="grid md:grid-cols-2 gap-10 mt-16">

      <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">

        <h3 className="text-3xl font-black text-lime-400">
          Çekiş Kaybı
        </h3>

        <p className="text-white/70 leading-relaxed mt-6">
          Tıkalı partikül filtresi ve EGR sistemi,
          turbo basıncını ve motor performansını olumsuz etkileyebilir.
          Araç alt devirlerde cansızlaşabilir ve hızlanma düşebilir.
        </p>

      </div>

      <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">

        <h3 className="text-3xl font-black text-lime-400">
          Sürekli Rejenerasyon
        </h3>

        <p className="text-white/70 leading-relaxed mt-6">
          DPF doluluğu arttığında araç sık sık rejenerasyon yapabilir.
          Bu durum yakıt tüketimini artırabilir ve sürüş konforunu bozabilir.
        </p>

      </div>

      <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">

        <h3 className="text-3xl font-black text-lime-400">
          Arıza Lambaları
        </h3>

        <p className="text-white/70 leading-relaxed mt-6">
          DPF, EGR ve emisyon sistemleri
          motor arıza lambası yakabilir.
          Özellikle şehir içi kısa mesafe kullanımında bu problemler sık görülür.
        </p>

      </div>

      <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">

        <h3 className="text-3xl font-black text-lime-400">
          Yakıt Tüketimi
        </h3>

        <p className="text-white/70 leading-relaxed mt-6">
          Tıkalı emisyon sistemleri motorun daha zor çalışmasına neden olabilir.
          Bu durum yakıt tüketiminde artışa sebep olabilir.
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
                  DPF tıkanırsa ne olur?
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Araç çekişten düşebilir,
                  yakıt tüketimi artabilir
                  ve arıza lambası yakabilir.
                </p>
              </div>

              <div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
                <h3 className="text-2xl font-black">
                  EGR arızası performansı etkiler mi?
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Evet. Düzensiz çalışma,
                  çekiş kaybı
                  ve duman problemi oluşturabilir.
                </p>
              </div>

              <div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
                <h3 className="text-2xl font-black">
                  DPF çözümü güvenli midir?
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Profesyonel şekilde yapılan optimizasyonlar
                  araç yazılımına uygun şekilde uygulanır.
                </p>
              </div>
              <div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
  <h3 className="text-2xl font-black">
    DPF tıkalı olduğu nasıl anlaşılır?
  </h3>

  <p className="text-white/70 mt-5 leading-relaxed">
    Araçta çekiş düşüklüğü,
    yüksek yakıt tüketimi,
    sık rejenerasyon
    ve motor arıza lambası görülebilir.
  </p>
</div>

<div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
  <h3 className="text-2xl font-black">
    EGR arızası motora zarar verir mi?
  </h3>

  <p className="text-white/70 mt-5 leading-relaxed">
    Uzun süreli EGR problemleri
    performans kaybına,
    düzensiz çalışmaya
    ve kurum birikimine neden olabilir.
  </p>
</div>

<div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
  <h3 className="text-2xl font-black">
    DPF yakıt tüketimini artırır mı?
  </h3>

  <p className="text-white/70 mt-5 leading-relaxed">
    Tıkalı partikül filtresi
    motorun daha zor çalışmasına sebep olabilir
    ve yakıt tüketimini artırabilir.
  </p>
</div>

<div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
  <h3 className="text-2xl font-black">
    Rejenerasyon neden sürekli devreye girer?
  </h3>

  <p className="text-white/70 mt-5 leading-relaxed">
    Kısa mesafe kullanım,
    yoğun şehir içi trafik
    ve DPF doluluğu
    sürekli rejenerasyona sebep olabilir.
  </p>
</div>

<div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
  <h3 className="text-2xl font-black">
    Çekiş düşüklüğü DPF kaynaklı olabilir mi?
  </h3>

  <p className="text-white/70 mt-5 leading-relaxed">
    Evet. Tıkalı DPF sistemi
    turbo basıncını etkileyebilir
    ve aracın performansını düşürebilir.
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
      DPF & EGR
      <br />
      Problemlerine
      <br />
      Profesyonel Çözüm
    </h2>

    <p className="text-black/70 text-lg leading-relaxed mt-8 max-w-3xl">
      DPF, EGR ve partikül filtresi kaynaklı
      performans kayıpları,
      rejenerasyon sorunları
      ve arıza lambaları için
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