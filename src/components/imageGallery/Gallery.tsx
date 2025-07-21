import { sanityFetch } from "@/sanity/lib/client";
import "./style.scss";
import { IMAGE_GALLERY_QUERY } from "@/sanity/lib/queries";
import { IMAGE_GALLERY_QUERYResult } from "@/sanity/types";
import GalleryCarousel from "./galleryCarousel/GalleryCarousel";

async function getImageGalleryData() {
  try {
    const imageGallery = await sanityFetch({
      query: IMAGE_GALLERY_QUERY,
      revalidate: 10,
    });
    return imageGallery;
  } catch (error) {
    console.error("Error fetching image gallery data:", error);
    return null;
  }
}

const Gallery = async () => {
  const imageGallery: IMAGE_GALLERY_QUERYResult | null =
    await getImageGalleryData();

  if (!imageGallery)
    return (
      <section id="Gallery">
        <div className="gallery_container">
          <div className="gallery_header"></div>
          <div id="GalleryCarousel">GalleryCarousel</div>
        </div>
      </section>
    );

  return (
    <section id="Gallery">
      <div className="gallery_container">
        <h2>{imageGallery.title}</h2>
        <GalleryCarousel data={imageGallery} />
      </div>
    </section>
  );
};

export default Gallery;
