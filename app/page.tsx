import type { CSSProperties } from "react";

const conceptItems = [
  {
    title: "NOMOYO!を送る",
    body: (
      <>
        関係性を探らず、気分やタイミング、
        <br />
        共感からで「飲もう」を交わす
      </>
    ),
    media: {
      type: "video",
      src: "/assets/video/boshuu-motion-1-latest.mp4",
      fit: "contain",
      mask: "sides",
      shift: "clean-left",
    },
  },
  {
    title: "飲みログで思い出をシェア",
    body: (
      <>
        飲みの思い出を身内で共有しよう
        <br />
        次の一杯につながるかも。
      </>
    ),
    layout: "reverse",
    media: {
      type: "video",
      src: "/assets/video/nomilog-motion-trimmed.mp4",
      fit: "contain",
      size: "compact",
    },
  },
  {
    title: "TOMOとつながる",
    body: (
      <>
        人によって多<span className="sake-accent">酒</span>多様な
        <br />
        お酒の好みや楽しみ方を覗いてみよう
      </>
    ),
    media: {
      type: "video",
      src: "/assets/video/tomo-motion.mp4",
      fit: "contain",
      size: "large",
      mask: "none",
    },
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="サイトヘッダー">
        <a className="brand" href="#top" aria-label="NOMOYO! トップへ">
          <img src="/assets/nomoyo-logo-transparent.png" alt="NOMOYO!" />
        </a>
        <nav className="nav" aria-label="メインナビゲーション">
          <a href="#concept">NOMOYO!とは</a>
          <a href="#pv">PV</a>
        </nav>
      </header>

      <section className="hero section" id="top">
        <video
          className="hero-video"
          src="/assets/video/nomoyo-fv.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="bubble bubble-one" />
        <div className="bubble bubble-two" />
        <div className="bubble bubble-three" />
        <div className="bubble bubble-four" />
        <div className="bubble bubble-five" />
        <div className="bubble bubble-six" />
        <div className="hero-copy">
          <img className="logo-mark" src="/assets/nomoyo-logo-transparent.png" alt="NOMOYO!" />
          <h1>「飲もう！」が続く合図。</h1>
        </div>
        <div className="hero-wave" aria-hidden="true">
          <svg className="hero-wave-layer hero-wave-layer-back" viewBox="0 0 1440 160" preserveAspectRatio="none">
            <path d="M0 58C120 96 220 98 356 64C506 27 638 23 790 62C940 101 1056 99 1208 57C1306 30 1378 25 1440 36V160H0V58Z" />
          </svg>
          <svg className="hero-wave-layer hero-wave-layer-front" viewBox="0 0 1440 160" preserveAspectRatio="none">
            <path d="M0 76C114 36 230 36 356 74C506 120 652 121 792 78C932 35 1052 32 1208 78C1312 109 1388 108 1440 96V160H0V76Z" />
          </svg>
        </div>
      </section>

      <section className="concept section yellow-section" id="concept">
        <div className="section-inner">
          <div className="section-heading">
            <h2 className="pop-title" aria-label="Time to NOMOYO!">
              {"Time to NOMOYO!".split("").map((char, index) => (
                <span
                  aria-hidden="true"
                  className={char === " " ? "pop-space" : ""}
                  key={`${char}-${index}`}
                  style={{ "--pop-index": index } as CSSProperties}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>
            <p>
              「飲もう！」は、お酒好き同士の特別な合図。
              <br />
              <br />
              お酒や、その場の空気が好きな人にとって
              <br />
              「飲もう！」は、ただの誘いではありません。
              <br />
              <br />
              会いたい、話したい、少し気分を変えたい...
              <br />
              様々な気持ちを一言の中に預けられる、特別な合図です。
              <br />
              <br />
              NOMOYO!は、その合図が通じる人同士でつながる
              <br />
              クローズドSNS飲ミュニティ。
              <br />
              <br />
              新しい飲ミュニティがそばにある生活を。
            </p>
          </div>

          <div className="concept-list">
            {conceptItems.map((item, index) => (
              <article
                className={`concept-row ${
                  "media" in item && item.media?.type === "video" ? "has-video" : ""
                } ${
                  "media" in item && item.media?.fit === "crop" ? "has-crop-video" : ""
                } ${
                  "layout" in item && item.layout === "reverse" ? "is-reversed" : ""
                }`}
                key={item.title}
              >
                <div
                  className={`image-placeholder ${
                    "media" in item && item.media?.type === "video" ? "is-video" : ""
                  } ${
                    "media" in item && item.media?.fit === "crop" ? "is-crop-video" : ""
                  } ${
                    "media" in item && item.media?.mask === "sides" ? "has-side-mask" : ""
                  } ${
                    "media" in item && item.media?.mask === "none" ? "has-no-video-mask" : ""
                  } ${
                    "media" in item && item.media?.size === "compact" ? "is-compact-video" : ""
                  } ${
                    "media" in item && item.media?.size === "large" ? "is-large-video" : ""
                  } ${
                    "media" in item && item.media?.shift === "clean-left" ? "is-clean-left-video" : ""
                  }`}
                  aria-hidden="true"
                >
                  {"media" in item && item.media?.type === "video" ? (
                    <video
                      className="concept-video"
                      src={item.media.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  )}
                </div>
                <div className="concept-text">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="pv-section" id="pv">
            <div className="pv-player">
              <iframe
                src="https://www.youtube.com/embed/-VgsW2YdeQI"
                title="NOMOYO! PV"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="pv-credit">LEE MINA</p>
          </div>
        </div>
      </section>
    </main>
  );
}
