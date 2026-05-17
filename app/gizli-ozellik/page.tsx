import Navbar from "@/components/Navbar"
import Image from "next/image"

export const metadata = {
  title: "Gizli Özellik Aktivasyonu | Mekanitro",
  description:
    "Araçlara özel gizli özellik açma ve profesyonel kodlama çözümleri.",
}

export default function GizliOzellikPage() {
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
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10">

        {/* HERO */}
        <section className="pt-64 pb-32 px-6 md:px-20">

          <div className="max-w-6xl mx-auto">

            <p className="text-lime-400 uppercase tracking-[4px] font-black">
              GİZLİ ÖZELLİK AKTİVASYONU
            </p>

            <h1 className="text-5xl md:text-7xl font-black uppercase mt-6 leading-tight">
              Gİzlİ
              <br />
              Özellİk
              <br />
              Açma
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mt-10 max-w-3xl">
              Araçlara özel gizli özellik aktivasyonları,
              konfor sistemleri
              ve profesyonel kodlama çözümleri sunuyoruz.
            </p>

          </div>

        </section>

{/* POPULAR FEATURES */}
<section className="py-24 px-6 md:px-20">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
      En Çok Açılan
      <br />
      Gizli Özellikler
    </h2>

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      <div className="border border-white/10 rounded-[30px] p-8 bg-black/20 backdrop-blur-md">
        <h3 className="text-2xl font-black text-lime-400">
          RS / Sport Display
        </h3>

        <p className="text-white/70 mt-5 leading-relaxed">
          Turbo basıncı,
          güç göstergesi
          ve performans ekranları aktif edilir.
        </p>
      </div>

      <div className="border border-white/10 rounded-[30px] p-8 bg-black/20 backdrop-blur-md">
        <h3 className="text-2xl font-black text-lime-400">
          Ambiyans Ayarları
        </h3>

        <p className="text-white/70 mt-5 leading-relaxed">
          Gizli ışık ayarları,
          ekstra ambiyans seçenekleri
          ve renk modları açılabilir.
        </p>
      </div>

      <div className="border border-white/10 rounded-[30px] p-8 bg-black/20 backdrop-blur-md">
        <h3 className="text-2xl font-black text-lime-400">
          Video In Motion
        </h3>

        <p className="text-white/70 mt-5 leading-relaxed">
          Hareket halindeyken
          multimedya video sistemi aktif kullanılabilir.
        </p>
      </div>

      <div className="border border-white/10 rounded-[30px] p-8 bg-black/20 backdrop-blur-md">
        <h3 className="text-2xl font-black text-lime-400">
          Karşılama Animasyonları
        </h3>

        <p className="text-white/70 mt-5 leading-relaxed">
          Gösterge açılış animasyonları
          ve premium giriş ekranları aktif edilir.
        </p>
      </div>

      <div className="border border-white/10 rounded-[30px] p-8 bg-black/20 backdrop-blur-md">
        <h3 className="text-2xl font-black text-lime-400">
          Gizli Multimedya
        </h3>

        <p className="text-white/70 mt-5 leading-relaxed">
          Kapalı bırakılmış
          ekstra medya
          ve konfor özellikleri açılabilir.
        </p>
      </div>

      <div className="border border-white/10 rounded-[30px] p-8 bg-black/20 backdrop-blur-md">
        <h3 className="text-2xl font-black text-lime-400">
          Otomatik Aynalar
        </h3>

        <p className="text-white/70 mt-5 leading-relaxed">
          Kilitleme sırasında
          aynaların otomatik kapanması
          aktif edilir.
        </p>
      </div>
      <div className="border border-white/10 rounded-[30px] p-8 bg-black/20 backdrop-blur-md">
  <h3 className="text-2xl font-black text-lime-400">
    Gizli Klima Menüsü
  </h3>

  <p className="text-white/70 mt-5 leading-relaxed">
    Klima sistemi için
    gizli mühendislik menüleri
    ve ekstra kontrol ekranları açılabilir.
  </p>
</div>

<div className="border border-white/10 rounded-[30px] p-8 bg-black/20 backdrop-blur-md">
  <h3 className="text-2xl font-black text-lime-400">
    Needle Sweep
  </h3>

  <p className="text-white/70 mt-5 leading-relaxed">
    Kontak açılışında
    gösterge ibre animasyonu
    aktif edilebilir.
  </p>
</div>

<div className="border border-white/10 rounded-[30px] p-8 bg-black/20 backdrop-blur-md">
  <h3 className="text-2xl font-black text-lime-400">
    Start-Stop Hafızası
  </h3>

  <p className="text-white/70 mt-5 leading-relaxed">
    Start-stop sisteminin
    son kullanım durumunu hafızada tutması sağlanabilir.
  </p>
</div>

<div className="border border-white/10 rounded-[30px] p-8 bg-black/20 backdrop-blur-md">
  <h3 className="text-2xl font-black text-lime-400">
    Gizli Sürüş Modları
  </h3>

  <p className="text-white/70 mt-5 leading-relaxed">
    Destekleyen araçlarda
    ekstra sürüş profilleri
    ve performans modları aktif edilebilir.
  </p>
</div>

<div className="border border-white/10 rounded-[30px] p-8 bg-black/20 backdrop-blur-md">
  <h3 className="text-2xl font-black text-lime-400">
    Coming Home / Leaving Home
  </h3>

  <p className="text-white/70 mt-5 leading-relaxed">
    Araç kilitleme ve açma sırasında
    far karşılama sistemleri optimize edilebilir.
  </p>
</div>

<div className="border border-white/10 rounded-[30px] p-8 bg-black/20 backdrop-blur-md">
  <h3 className="text-2xl font-black text-lime-400">
    Dijital Hız Göstergesi
  </h3>

  <p className="text-white/70 mt-5 leading-relaxed">
    Destekleyen araçlarda
    dijital km/h göstergesi
    aktif hale getirilebilir.
  </p>
</div>
    </div>

  </div>

</section>
{/* DEVICES */}
<section className="py-24 px-6 md:px-20">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
      Profesyonel
      <br />
      Kodlama Sistemleri
    </h2>

    <p className="text-white/70 text-lg leading-relaxed mt-8 max-w-3xl">
      Araçlara özel gizli özellik aktivasyonlarında
      profesyonel kodlama cihazları ve güvenilir altyapılar kullanılmaktadır.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">

        <h3 className="text-3xl font-black text-lime-400">
          SYS PRO
        </h3>

        <p className="text-white/70 leading-relaxed mt-6">
          Gelişmiş araç kodlama,
          gizli özellik aktivasyonu
          ve profesyonel sistem optimizasyonları için kullanılır.
        </p>

      </div>

      <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">

        <h3 className="text-3xl font-black text-lime-400">
          OBDeleven
        </h3>

        <p className="text-white/70 leading-relaxed mt-6">
          VAG grubu araçlarda
          profesyonel kodlama,
          canlı veri takibi
          ve özellik aktivasyonları sağlar.
        </p>

      </div>

      <div className="border border-white/10 rounded-[35px] p-10 bg-black/20 backdrop-blur-md">

        <h3 className="text-3xl font-black text-lime-400">
          VagCan Pro
        </h3>

        <p className="text-white/70 leading-relaxed mt-6">
          Gizli özellik açma,
          gelişmiş araç kodlama
          ve detaylı sistem erişimi için kullanılır.
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
                  Gizli özellik nedir?
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Araçta mevcut olup
                  fabrika çıkışı kapalı bırakılan
                  yazılımsal özelliklerdir.
                </p>
              </div>

              <div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
                <h3 className="text-2xl font-black">
                  Gizli özellik açma güvenli midir?
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Profesyonel şekilde uygulanan
                  kodlama işlemleri
                  araç altyapısına uygun yapılır.
                </p>
              </div>

              <div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
                <h3 className="text-2xl font-black">
                  Hangi araçlarda uygulanabilir?
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Birçok VAG grubu ve desteklenen
                  modern araç altyapısında uygulanabilir.
                </p>
              </div>

              <div className="border border-white/10 rounded-3xl p-8 bg-black/20 backdrop-blur-md">
                <h3 className="text-2xl font-black">
                  Sport display açılabilir mi?
                </h3>

                <p className="text-white/70 mt-5 leading-relaxed">
                  Destekleyen araçlarda
                  sport display ve performans ekranları aktif edilebilir.
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
              Gizli Özellikleri
              <br />
              Profesyonel
              <br />
              Şekilde Açın
            </h2>

            <p className="text-black/70 text-lg leading-relaxed mt-8 max-w-3xl">
              Araç altyapısına uygun profesyonel kodlama işlemleri ile
              gizli özellikleri aktif ediyor,
              sürüş ve konfor deneyimini üst seviyeye taşıyoruz.
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