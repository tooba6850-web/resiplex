import { useEffect, useState } from "react";
import "./ImageGallery.css";
import Modal from "./Modal";
import { IconExpand, IconChevronLeft, IconChevronRight } from "./icons";

export default function ImageGallery({ images, alt }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIndex(0);
  }, [images]);

  const count = images.length;
  const active = images[index];

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, count]);

  return (
    <div className="gallery">
      <figure className="gallery__main">
        <img src={active} alt={`${alt} — image ${index + 1}`} />
        <button
          type="button"
          className="gallery__zoom"
          aria-label="Expand image"
          onClick={() => setOpen(true)}
        >
          <IconExpand />
        </button>
      </figure>

      {count > 1 ? (
        <div className="gallery__thumbs" role="group" aria-label="Gallery thumbnails">
          {images.map((src, i) => (
            <button
              type="button"
              key={src}
              className={`gallery__thumb ${i === index ? "is-active" : ""}`.trim()}
              aria-label={`Show image ${i + 1}`}
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      ) : null}

      <Modal open={open} onClose={() => setOpen(false)} label={`${alt} — image viewer`}>
        <figure className="gallery__lightbox">
          <button
            type="button"
            className="gallery__nav gallery__nav--prev"
            aria-label="Previous image"
            onClick={() => setIndex((i) => (i - 1 + count) % count)}
          >
            <IconChevronLeft />
          </button>
          <img
            src={active}
            alt={`${alt} — image ${index + 1}`}
            onClick={() => setOpen(false)}
          />
          <button
            type="button"
            className="gallery__nav gallery__nav--next"
            aria-label="Next image"
            onClick={() => setIndex((i) => (i + 1) % count)}
          >
            <IconChevronRight />
          </button>
        </figure>
        <p className="gallery__counter">
          {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </p>
      </Modal>
    </div>
  );
}