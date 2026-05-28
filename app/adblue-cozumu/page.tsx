import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Image from "next/image"

export const metadata = {
  title: "AdBlue Çözümü | Mekanitro",
  description:
    "AdBlue, SCR ve NOx sensörü arızaları için profesyonel yazılım çözümleri.",
}

export default function AdBluePage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
<Navbar />
      {/* GLOBAL BG */}
      <div
        className="absolute inset-0 bg-[length:100%] opacity-50"
        style={{
          backgroundImage: "url('/adblue.png')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10">

        {/* HERO */}
        <section className="pt-64 pb-32 px-6 md:px-20">

          <div className="max-w-6xl mx-auto">

            <p className="text-lime-400 uppercase tracking-[4px] font-black">
              ADBLUE ÇÖZÜMÜ
            </p>

            <h1 className="text-5xl md:text-7xl font-black uppercase mt-6 leading-tight">
              AdBlue
              <br />
              SCR
              <br />
              Çözümleri
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mt-10 max-w-3xl">
              AdBlue, SCR ve NOx sensörü kaynaklı arızalar için
              profesyonel yazılım çözümleri sunuyoruz.
              Araç çalıştırma limiti,
              motor arıza lambası
              ve AdBlue uyarı problemlerine özel optimizasyon uygulanır.
            </p>

          </div>

        </section>

        {/* DETAIL INFO */}
        <section className="py-24 px-6 md:px-20">

          <div className="max-w-6xl mx-auto">

            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
              AdBlue Sistem
              <br />
              Problemleri
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mt-16">

              <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">

                <h3 className="text-3xl font-black text-lime-400">
                  Motor Çalıştırma Limiti
                </h3>

                <p className="text-white/70 leading-relaxed mt-6">
                  AdBlue sistemi arızalarında
                  araç belirli kilometre sonra çalıştırmayı engelleyebilir.
                </p>

              </div>

              <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">

                <h3 className="text-3xl font-black text-lime-400">
                  SCR Arızası
                </h3>

                <p className="text-white/70 leading-relaxed mt-6">
                  SCR sistemi arızaları
                  motor arıza lambası
                  ve performans problemleri oluşturabilir.
                </p>

              </div>

              <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">

                <h3 className="text-3xl font-black text-lime-400">
                  NOx Sensörü
                </h3>

                <p className="text-white/70 leading-relaxed mt-6">
                  NOx sensörü arızaları
                  AdBlue sisteminde sürekli hata oluşturabilir.
                </p>

              </div>

              <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">

                <h3 className="text-3xl font-black text-lime-400">
                  Sürekli Uyarı
                </h3>

                <p className="text-white/70 leading-relaxed mt-6">
                  Sürekli AdBlue ikazı,
                  geri sayım uyarısı
                  ve motor arıza lambaları profesyonel şekilde çözülebilir.
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
                  AdBlue arızası aracı durdurur mu?
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Bazı araçlarda belirli kilometre sonrası
                  araç çalıştırması engellenebilir.
                </p>
              </div>

              <div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
                <h3 className="text-2xl font-black">
                  SCR arızası performansı etkiler mi?
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Evet. Motor koruma moduna geçebilir
                  ve performans düşebilir.
                </p>
              </div>

              <div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
                <h3 className="text-2xl font-black">
                  AdBlue çözümü güvenli midir?
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Profesyonel şekilde uygulanan yazılım çözümleri
                  araç altyapısına uygun şekilde yapılır.
                </p>
              </div>
              <div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
  <h3 className="text-2xl font-black">
    AdBlue arızası motor ışığı yakar mı?
  </h3>

  <p className="text-white/70 mt-5 leading-relaxed">
    Evet. SCR sistemi ve NOx sensörü kaynaklı problemler
    motor arıza lambasının yanmasına sebep olabilir.
  </p>
</div>

<div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
  <h3 className="text-2xl font-black">
    Araç neden geri sayım başlatır?
  </h3>

  <p className="text-white/70 mt-5 leading-relaxed">
    AdBlue sistemi arızalarında bazı araçlar
    belirli kilometre sonrası çalıştırma limitine geçebilir.
  </p>
</div>

<div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
  <h3 className="text-2xl font-black">
    NOx sensörü arızası performansı etkiler mi?
  </h3>

  <p className="text-white/70 mt-5 leading-relaxed">
    NOx sensörü problemleri motor koruma moduna sebep olabilir
    ve performansı düşürebilir.
  </p>
</div>

<div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
  <h3 className="text-2xl font-black">
    AdBlue arızası yakıt tüketimini etkiler mi?
  </h3>

  <p className="text-white/70 mt-5 leading-relaxed">
    Bazı durumlarda araç koruma moduna geçebilir
    ve verimsiz çalışma nedeniyle yakıt tüketimi artabilir.
  </p>
</div>

<div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
  <h3 className="text-2xl font-black">
    SCR sistemi neden arıza verir?
  </h3>

  <p className="text-white/70 mt-5 leading-relaxed">
    Kalitesiz AdBlue kullanımı,
    NOx sensörü problemleri
    ve sistem tıkanıklıkları SCR arızalarına sebep olabilir.
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
      AdBlue & SCR
      <br />
      Problemlerine
      <br />
      Profesyonel Çözüm
    </h2>

    <p className="text-black/70 text-lg leading-relaxed mt-8 max-w-3xl">
      AdBlue, SCR ve NOx sensörü kaynaklı
      arızalar için profesyonel yazılım çözümleri sunuyoruz.
      Çalıştırma limiti,
      motor arıza lambası
      ve sürekli uyarı problemlerine özel optimizasyon uygulanır.
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