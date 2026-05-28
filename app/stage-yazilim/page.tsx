import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Image from "next/image"
export const metadata = {
    title: "Stage 1-2-3 Performance Yazılımı | Mekanitro",
    description:
      "Profesyonel Stage 1, Stage 2 ve Stage 3 performans yazılım çözümleri.",
  }
  
  export default function StageYazilimPage() {
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
  
        {/* GLOBAL OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />
  
        {/* CONTENT */}
        <div className="relative z-10">

          {/* HERO */}
          <section className="pt-64 pb-32 px-6 md:px-20">
  
            <div className="max-w-6xl mx-auto">
  
              <p className="text-lime-400 uppercase tracking-[4px] font-black">
                PERFORMANCE YAZILIMI
              </p>
  
              <h1 className="text-5xl md:text-7xl font-black uppercase mt-6 leading-tight">
                Stage 1-2-3
                <br />
                Performance Yazılımları
              </h1>
  
              <p className="text-white/70 text-lg leading-relaxed mt-10 max-w-3xl">
                Profesyonel ECU yazılım çözümleri ile aracınızın
                performansını güvenli şekilde optimize ediyoruz.
                Daha güçlü hızlanma, dolu alt devirler,
                daha keyifli sürüş ve maksimum verim sağlıyoruz.
              </p>
  
              <div className="flex flex-wrap gap-5 mt-10">
  
                <a
                  href="https://wa.me/905301331204"
                  target="_blank"
                  className="bg-lime-400 text-black px-8 py-4 rounded-2xl font-black hover:bg-lime-300 transition duration-300 shadow-[0_0_35px_rgba(163,230,53,0.35)]"
                >
                  WhatsApp İletişim
                </a>
  
                <a
                  href="tel:+905301331204"
                  className="border border-lime-400 text-lime-400 px-8 py-4 rounded-2xl font-black hover:bg-lime-400 hover:text-black transition duration-300"
                >
                  0530 133 12 04
                </a>
  
              </div>
  
            </div>
  
          </section>
  
          {/* BILGI ALANI */}
          <section className="py-24 px-6 md:px-20 bg-[#050505]/70">
  
            <div className="max-w-6xl mx-auto">
  
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
                Stage 1 Nedir?
              </h2>
  
              <p className="text-white/70 text-lg leading-relaxed mt-10">
                Stage 1 yazılım, aracın orijinal donanımına dokunmadan
                ECU üzerinden yapılan güvenli performans optimizasyonudur.
                Günlük kullanım için en ideal yazılım seviyesidir.
              </p>
  
              <p className="text-white/70 text-lg leading-relaxed mt-6">
                Profesyonel şekilde uygulanan Stage 1 yazılım ile
                aracın alt devirleri daha dolu hale gelir,
                gaz tepkileri hızlanır,
                tork artışı sağlanır
                ve sürüş keyfi ciddi şekilde yükselir.
              </p>
  
              <p className="text-white/70 text-lg leading-relaxed mt-6">
                Doğru kullanımda birçok araçta yakıt tüketimi dengelenebilir.
                Özellikle dizel araçlarda düşük devir performansı belirgin şekilde artar.
              </p>
  
              <div className="grid md:grid-cols-3 gap-6 mt-16">
  
                <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.03] backdrop-blur-md">
                  <h3 className="text-2xl font-black text-lime-400">
                    Güvenli Kullanım
                  </h3>
  
                  <p className="text-white/70 mt-5 leading-relaxed">
                    Araç toleranslarına uygun profesyonel yazılım ile
                    güvenli performans artışı sağlanır.
                  </p>
                </div>
  
                <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.03] backdrop-blur-md">
                  <h3 className="text-2xl font-black text-lime-400">
                    Güç & Tork Artışı
                  </h3>
  
                  <p className="text-white/70 mt-5 leading-relaxed">
                    Daha güçlü hızlanma,
                    daha dolu alt devirler
                    ve daha keyifli sürüş elde edilir.
                  </p>
                </div>
  
                <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.03] backdrop-blur-md">
                  <h3 className="text-2xl font-black text-lime-400">
                    Günlük Kullanım
                  </h3>
  
                  <p className="text-white/70 mt-5 leading-relaxed">
                    Stage 1 yazılım günlük kullanım için en ideal
                    ve en çok tercih edilen seviyedir.
                  </p>
                </div>
  
              </div>
  
            </div>
  
          </section>
  
          {/* STAGE FARKLARI */}
          <section className="py-24 px-6 md:px-20">
  
            <div className="max-w-7xl mx-auto">
  
              <h2 className="text-4xl md:text-6xl font-black uppercase">
                Stage Seviyeleri
              </h2>
  
              <div className="grid md:grid-cols-4 gap-6 mt-16">
  
                <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.03] backdrop-blur-md">
                  <h3 className="text-3xl font-black text-lime-400">
                    Stage 1
                  </h3>
  
                  <p className="text-white/70 mt-6 leading-relaxed">
                    Orijinal donanım ile güvenli performans artışı sağlar.
                    Günlük kullanım için en ideal seviyedir.
                  </p>
                </div>
  
                <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.03] backdrop-blur-md">
                  <h3 className="text-3xl font-black text-lime-400">
                    Stage 1+
                  </h3>
  
                  <p className="text-white/70 mt-6 leading-relaxed">
                    Hibrit performans ayarı ile daha agresif sürüş
                    karakteri ve ekstra tork elde edilir.
                  </p>
                </div>
  
                <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.03] backdrop-blur-md">
                  <h3 className="text-3xl font-black text-lime-400">
                    Stage 2
                  </h3>
  
                  <p className="text-white/70 mt-6 leading-relaxed">
                    Downpipe ve performans ekipmanları ile
                    daha yüksek güç hedeflenir.
                  </p>
                </div>
  
                <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.03] backdrop-blur-md">
                  <h3 className="text-3xl font-black text-lime-400">
                    Stage 3
                  </h3>
  
                  <p className="text-white/70 mt-6 leading-relaxed">
                    Turbo ve ileri seviye performans parçaları ile
                    maksimum güç alınır.
                  </p>
                </div>
  
              </div>
  
            </div>
  
          </section>
  
         {/* FAQ */}
<section className="py-24 px-6 md:px-20 bg-[#050505]/70">

<div className="max-w-5xl mx-auto">

  <h2 className="text-4xl md:text-6xl font-black uppercase">
    Sık Sorulan Sorular
  </h2>

  <div className="space-y-6 mt-16">

    <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.03] backdrop-blur-md">
      <h3 className="text-2xl font-black">
        Stage 1 yazılım güvenli midir?
      </h3>

      <p className="text-white/70 mt-5 leading-relaxed">
        Profesyonel şekilde yapılan Stage 1 yazılımlar araç toleranslarına uygun olduğu için güvenlidir.
      </p>
    </div>

    <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.03] backdrop-blur-md">
      <h3 className="text-2xl font-black">
        Yakıt tüketimi artar mı?
      </h3>

      <p className="text-white/70 mt-5 leading-relaxed">
        Kullanıma bağlı olarak değişebilir. Doğru kullanımda birçok araçta yakıt tüketimi dengelenebilir.
      </p>
    </div>

    <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.03] backdrop-blur-md">
      <h3 className="text-2xl font-black">
        Stage 1 yakıt tasarrufu sağlar mı?
      </h3>

      <p className="text-white/70 mt-5 leading-relaxed">
        Doğru kullanımda Stage 1 yazılım birçok araçta
        daha düşük devirde daha yüksek tork ürettiği için
        yakıt tüketiminin dengelenmesine yardımcı olabilir.
        Özellikle dizel araçlarda uzun yolda daha verimli sürüş sağlanabilir.
      </p>
    </div>

    <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.03] backdrop-blur-md">
      <h3 className="text-2xl font-black">
        Stage 1 kaç beygir kazandırır?
      </h3>

      <p className="text-white/70 mt-5 leading-relaxed">
        Araç motoruna göre değişiklik gösterir. Ortalama olarak %20 ila %35 arasında güç artışı sağlanabilir.
      </p>
    </div>

    <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.03] backdrop-blur-md">
      <h3 className="text-2xl font-black">
        Araç orijinal haline dönebilir mi?
      </h3>

      <p className="text-white/70 mt-5 leading-relaxed">
        Evet. Orijinal yazılım yedeklenir ve istenildiği zaman tekrar yüklenebilir.
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
                Aracının Gerçek
                <br />
                Gücünü Ortaya Çıkar
              </h2>
  
              <p className="text-black/70 text-lg leading-relaxed mt-8 max-w-3xl">
                Profesyonel Stage 1, Stage 1+, Stage 2 ve Stage 3 yazılım çözümleri ile
                aracınızın performans potansiyelini güvenli şekilde ortaya çıkarıyoruz.
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