import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Image from "next/image"

export const metadata = {
  title: "DSG Optimizasyonu Yazılımı | Mekanitro",
  description:
    "Profesyonel DSG optimizasyonu ile daha hızlı vites geçişleri, launch control ve performans uyumlu şanzıman yazılımı.",
}

export default function DSGPage() {
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
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HERO */}
        <section className="pt-64 pb-32 px-6 md:px-20">

          <div className="max-w-6xl mx-auto">

            <p className="text-lime-400 uppercase tracking-[4px] font-black">
              DSG OPTİMİZASYONU
            </p>

            <h1 className="text-5xl md:text-7xl font-black uppercase mt-6 leading-tight">
              DSG
              <br />
              Şanzıman
              <br />
              Yazılımı
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mt-10 max-w-3xl">
              Profesyonel DSG optimizasyonu ile daha hızlı vites geçişleri,
              daha agresif sürüş karakteri,
              launch control desteği
              ve stage yazılımlarla uyumlu performans elde edilir.
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

        {/* INFO */}
        <section className="py-24 px-6 md:px-20 bg-transparent">

          <div className="max-w-6xl mx-auto">

            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
              DSG Yazılımının Avantajları
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mt-10">
              DSG optimizasyonu ile şanzıman geçişleri hızlandırılır,
              sürüş karakteri daha sportif hale gelir
              ve performans yazılımlarıyla tam uyum sağlanır.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-16">

              <div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
                <h3 className="text-2xl font-black text-lime-400">
                  Daha Hızlı Geçiş
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Vites geçiş süreleri optimize edilerek
                  daha agresif ve performanslı sürüş elde edilir.
                </p>
              </div>

              <div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
                <h3 className="text-2xl font-black text-lime-400">
                  Launch Control
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Launch control desteği ile
                  daha güçlü kalkış performansı sağlanır.
                </p>
              </div>

              <div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
                <h3 className="text-2xl font-black text-lime-400">
                  Tork Limiti
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Stage yazılımlara uyumlu şekilde
                  tork limitleri optimize edilir.
                </p>
              </div>

            </div>

          </div>

        </section>
{/* PERFORMANCE INFO */}
<section className="py-24 px-6 md:px-20">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
      DSG Yazılımı
      <br />
      Neler Kazandırır?
    </h2>

    <div className="grid md:grid-cols-2 gap-10 mt-16">

      <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">
        <h3 className="text-3xl font-black text-lime-400">
          Daha Sportif Sürüş
        </h3>

        <p className="text-white/70 leading-relaxed mt-6">
          DSG optimizasyonu ile araç daha agresif,
          daha hızlı ve daha tepkili sürüş karakteri kazanır.
          Özellikle manuel mod performansı ciddi şekilde iyileşir.
        </p>
      </div>

      <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">
        <h3 className="text-3xl font-black text-lime-400">
          Stage Yazılımla Tam Uyum
        </h3>

        <p className="text-white/70 leading-relaxed mt-6">
          Stage 1 ve Stage 2 performans yazılımlarında
          DSG şanzımanın tork limitleri optimize edilerek
          motor ve şanzıman tam uyumlu çalışır.
        </p>
      </div>

      <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">
        <h3 className="text-3xl font-black text-lime-400">
          Launch Control Desteği
        </h3>

        <p className="text-white/70 leading-relaxed mt-6">
          Uyumlu araçlarda launch control optimize edilerek
          daha güçlü kalkış performansı ve daha sportif his sağlanır.
        </p>
      </div>

      <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">
        <h3 className="text-3xl font-black text-lime-400">
          Vuruntu Azaltma
        </h3>

        <p className="text-white/70 leading-relaxed mt-6">
          DSG optimizasyonu ile bazı araçlarda hissedilen
          sert geçişler ve vuruntu karakteri azaltılabilir.
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
                  DSG yazılımı güvenli midir?
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Profesyonel şekilde yapılan DSG optimizasyonları
                  araç toleranslarına uygun olduğu sürece güvenlidir.
                </p>
              </div>

              <div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
                <h3 className="text-2xl font-black">
                  Launch control aktif edilir mi?
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Uygun araçlarda launch control özelliği optimize edilebilir.
                </p>
              </div>

              <div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
                <h3 className="text-2xl font-black">
                  DSG vuruntuları azalır mı?
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Yazılım optimizasyonu ile daha akıcı
                  ve konforlu geçiş karakteri sağlanabilir.
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
              DSG Şanzımanını
              <br />
              Optimize Et
            </h2>

            <p className="text-black/70 text-lg leading-relaxed mt-8 max-w-3xl">
              Profesyonel DSG yazılım çözümleri ile
              daha hızlı geçişler,
              launch control desteği
              ve performans uyumlu sürüş karakteri elde edin.
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