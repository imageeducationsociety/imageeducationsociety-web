import { defineQuery } from "next-sanity";

export const BRAND_QUERY = defineQuery(
  `*[_type == "brandDetails"][0] {
        _id,
        _createdAt,
        title,
        description,
        "logo": logo{
            "logo_mobile": logo_mobile{
            asset->{
                _id,
                url,
                metadata{
                    lqip,
                },
            },
                hotspot,
                crop,
            },
            "logo_desktop": logo_desktop{
                asset->{
                    _id,
                    url,
                    metadata{
                    lqip,
                    }
                },
                hotspot,
                crop,
            },
        },
        keywords,
    }`
);

export const HERO_QUERY = defineQuery(
  `*[_type == "hero"][0] {
        _id,
        _createdAt,
        title,
        subtitle,
    }`
);

export const HERO_GALLERY_QUERY = defineQuery(
  `*[_type == "hero"][0] {
        _id,
        _createdAt,
        gallery[]{
            "image": image{
                asset->{
                    _id,
                    url,
                    metadata{
                        lqip,
                    },
                },
                hotspot,
                crop,
            },
            title,
            subtitle,
        }
    }`
);

export const ABOUT_QUERY = defineQuery(
  `*[_type == "about"][0] {
        _id,
        _createdAt,
        title,
        subtitle,
        description,
        matrix,
        "image": image{
            asset->{
                _id,
                url,
                metadata{
                    lqip,
                },
            },
            hotspot,
            crop,
        },
    }`
);

export const DIFFERENCE_QUERY = defineQuery(
  `*[_type == "difference"][0] {
        _id,
        _createdAt,
        title,
        subtitle,
        "points": points[]{
            title,
            description,
            "icon": icon{
                asset->{
                    _id,
                    url,
                    metadata{
                        lqip,
                    },
                },
                hotspot,
                crop,
            },
        },
    }`
);

export const IMAGE_GALLERY_QUERY = defineQuery(
  `*[_type == "imageGallery"][0] {
        _id,
        _createdAt,
        title,
        "images": images[]{
            asset->{
                _id,
                url,
                metadata{
                    lqip,
                },
            },
            hotspot,
            crop,
        }
    }`
);
