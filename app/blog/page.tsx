import Navbar from "@/components/Navbar"
import Image from "next/image"

export const metadata = {
  title: "Blog | Mekanitro",
  description:
    "Chiptuning, DSG, DPF, AdBlue ve performans yazılımları hakkında bilgiler.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
<Navbar />
      {/* BG */}
      <div
        className="absolute inset-0 bg-[length:85%] bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: "url('/blogbg.png')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10">

        {/* HERO */}
        <section className="pt-64 pb-32 px-6 md:px-20">

          <div className="max-w-6xl mx-auto">

            <p className="text-lime-400 uppercase tracking-[4px] font-black">
              BLOG & BİLGİLER
            </p>

            <h1 className="text-5xl md:text-7xl font-black uppercase mt-6 leading-tight">
              Chiptuning
              <br />
              ve Yazılım
              <br />
              Rehberi
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mt-10 max-w-3xl">
              Stage yazılımlar,
              DSG optimizasyonu,
              DPF / EGR çözümleri
              ve profesyonel araç yazılımları hakkında bilgiler.
            </p>

          </div>

        </section>

        {/* BLOG GRID */}
        <section className="py-24 px-6 md:px-20">

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Stage 1 Yazılım Zararlı mı?",
                desc: "Profesyonel stage yazılımlar hakkında en çok merak edilenler.",
              },
              {
                title: "DSG Yazılım Ne İşe Yarar?",
                desc: "DSG optimizasyonunun sürüş ve performansa etkileri.",
              },
              {
                title: "DPF İptali Nedir?",
                desc: "DPF sistemleri ve yaşanan performans problemleri.",
              },
              {
                title: "AdBlue Arızası Neden Olur?",
                desc: "SCR ve AdBlue sistemi kaynaklı yaygın problemler.",
              },
              {
                title: "Launch Control Nasıl Açılır?",
                desc: "Launch control aktivasyonu ve destekleyen araçlar.",
              },
              {
                title: "Yakıt Tüketimi Artar mı?",
                desc: "Performans yazılımı sonrası yakıt tüketimi değişimleri.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md hover:border-lime-400 transition duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-lime-400 text-black flex items-center justify-center font-black text-2xl">
                  +
                </div>

                <h3 className="text-3xl font-black mt-8 leading-tight">
                  {item.title}
                </h3>

                <p className="text-white/70 leading-relaxed mt-6">
                  {item.desc}
                </p>

                <a
                  href="https://instagram.com/mekanitro_chiptuning"
                  target="_blank"
                  className="inline-block mt-8 text-lime-400 font-black"
                >
                  DEVAMINI İNCELE →
                </a>

              </div>
            ))}

          </div>

        </section>

      </div>

    </main>
  )
}