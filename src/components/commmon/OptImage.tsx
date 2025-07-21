"use client";

import { projectId } from "@/sanity/env";
import { SanityImageCrop, SanityImageHotspot } from "@/sanity/types";
import ImageSize from "@/utils";
import { CSSProperties } from "react";
import { SanityImage } from "sanity-image";

type Props = {
  image: {
    asset: {
      _id: string;
      url: string | null;
      metadata: {
        lqip: string | null;
      } | null;
    } | null;
    hotspot: SanityImageHotspot | null;
    crop: SanityImageCrop | null;
  } | null;
  alt: string;
  className?: string;
  mode?: "contain" | "cover";
  sizes?: "banner" | "card" | "avatar";
  loading?: "lazy" | "eager";
  width?: number;
  height?: number;
  style?: CSSProperties;
};

const OptImage: React.FC<Props> = ({
  image,
  alt,
  className,
  style,
  mode = "cover",
  sizes = "banner",
  loading = "eager",
  width = 1500,
  height,
}) => {
  if (!image || !image.asset) return null;

  return (
    <SanityImage
      id={image.asset._id}
      baseUrl={`https://cdn.sanity.io/images/${projectId}/production/`}
      alt={alt}
      hotspot={
        image.hotspot
          ? { x: image.hotspot.x || 0, y: image.hotspot.y || 0 }
          : undefined
      }
      crop={
        image.crop
          ? {
              top: image.crop.top || 0,
              bottom: image.crop.bottom || 0,
              left: image.crop.left || 0,
              right: image.crop.right || 0,
            }
          : undefined
      }
      className={className}
      style={{
        objectPosition:
          image.hotspot && image.hotspot.x != null && image.hotspot.y != null
            ? `${image.hotspot.x * 100}% ${image.hotspot.y * 100}%`
            : undefined,
        ...style,
      }}
      mode={mode}
      sizes={`${ImageSize}.${sizes}`}
      loading={loading}
      preview={image.asset.metadata?.lqip || undefined}
      width={width}
      height={height}
    />
  );
};

export default OptImage;
