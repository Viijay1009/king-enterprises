import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { images, type ImageId } from "@/content/images";

const extensions = ["webp", "jpg", "jpeg", "png", "avif"];

function findImage(id: ImageId) {
  for (const ext of extensions) {
    const file = `/images/${id}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", file))) return file;
  }
  return null;
}

type Props = {
  id: ImageId;
  className?: string;
  sizes?: string;
  preload?: boolean;
  tone?: "light" | "dark";
  /** Extra classes for the photo itself, e.g. object-position for art direction. */
  imgClassName?: string;
  /** Positions the placeholder's prompt caption; defaults to the top-left. */
  captionClassName?: string;
};

// Renders the real photo when /public/images/<id>.<ext> exists, otherwise a
// placeholder that shows the generation prompt and target size.
export function ImageSlot({
  id,
  className = "",
  sizes = "100vw",
  preload,
  tone = "light",
  captionClassName = "mb-auto w-full",
  imgClassName = "",
}: Props) {
  const spec = images[id];
  const src = findImage(id);

  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={spec.alt}
          fill
          sizes={sizes}
          preload={preload}
          className={`object-cover ${imgClassName}`}
        />
      </div>
    );
  }

  const dark = tone === "dark";

  return (
    <div
      role="img"
      aria-label={spec.alt}
      className={`placeholder-hatch relative flex overflow-hidden ${
        dark ? "bg-navy-800 text-steel-200" : "bg-steel-100 text-steel-600"
      } ${className}`}
    >
      <div className={`relative flex flex-col gap-2 p-4 sm:p-5 ${captionClassName}`}>
        <p className={`text-xs font-semibold ${dark ? "text-gold-400" : "text-navy-800"}`}>
          Photo to add: {id}.jpg, {spec.width} × {spec.height} px
        </p>
        <p className="line-clamp-4 max-w-[60ch] text-xs leading-relaxed" title={spec.prompt}>
          {spec.prompt}
        </p>
      </div>
    </div>
  );
}
