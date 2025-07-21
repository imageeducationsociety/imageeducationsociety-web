import { defineField, defineType } from "sanity";

export const imageGalleryType = defineType({
  name: "imageGallery",
  title: "Image Gallery",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      validation: (Rule) => Rule.min(5),
      description: "Please add at least 5 images to the gallery",
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
  ],
});
