import { defineQuery } from "next-sanity";

export const BRAND_QUERY = defineQuery(
  `*[_type == "brand"][0] {
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
