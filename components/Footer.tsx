import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black mt-32">

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-4 gap-14">

        {/* LOGO */}
        <div>

          <Image
            src="/logo.jpeg"
            alt="Mekanitro"
            width={220}
            height={80}
            className="object-contain"
          />

          <p className="text-white/50 leading-relaxed mt-6 text-sm">
            Profesyonel Stage Yazılım, DSG optimizasyonu,
            DPF / EGR çözümleri, gizli özellik aktivasyonu
            ve mobil performans hizmetleri.
          </p>

        </div>

        {/* HİZMETLER */}
        <div>

          <h3 className="text-lg font-black uppercase mb-6">
            Hizmetler
          </h3>

          <div className="flex flex-col gap-4 text-white/60">

            <a href="/stage-yazilim" className="hover:text-lime-400 transition">
              Stage Yazılım
            </a>

            <a href="/dsg-optimizasyonu" className="hover:text-lime-400 transition">
              DSG Optimizasyonu
            </a>

            <a href="/dpf-egr-cozumu" className="hover:text-lime-400 transition">
              DPF / EGR Çözümü
            </a>

            <a href="/adblue-cozumu" className="hover:text-lime-400 transition">
              AdBlue Çözümü
            </a>

            <a href="/mobil-destek" className="hover:text-lime-400 transition">
              Mobil Destek
            </a>

          </div>

        </div>

        {/* HIZLI LİNKLER */}
        <div>

          <h3 className="text-lg font-black uppercase mb-6">
            Hızlı Linkler
          </h3>

          <div className="flex flex-col gap-4 text-white/60">

            <a href="/" className="hover:text-lime-400 transition">
              Anasayfa
            </a>

            <a href="/blog" className="hover:text-lime-400 transition">
              Blog
            </a>

            <a href="/gizli-ozellik" className="hover:text-lime-400 transition">
              Gizli Özellik
            </a>

            <a
              href="https://instagram.com/mekanitro_chiptuning"
              target="_blank"
              className="hover:text-lime-400 transition"
            >
              Instagram
            </a>

          </div>

        </div>

        {/* İLETİŞİM */}
        <div>

          <h3 className="text-lg font-black uppercase mb-6">
            İletişim
          </h3>

          <div className="flex flex-col gap-4 text-white/60">

            <a
              href="tel:+905301331204"
              className="hover:text-lime-400 transition"
            >
              0530 133 12 04
            </a>

            <a
              href="https://wa.me/905301331204"
              target="_blank"
              className="hover:text-lime-400 transition"
            >
              WhatsApp
            </a>

            <a
              href="mailto:info@mekanitrochiptuning.com"
              className="hover:text-lime-400 transition"
            >
              info@mekanitrochiptuning.com
            </a>

            <p>
              İstanbul / Türkiye
            </p>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 py-6 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">

        <p>
          © 2026 Mekanitro Chiptuning. Tüm hakları saklıdır.
        </p>

        <p>
          Premium Performance & Software Solutions
        </p>

      </div>

    </footer>
  )
}