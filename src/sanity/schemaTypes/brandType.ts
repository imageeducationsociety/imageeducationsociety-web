import { defineField, defineType } from "sanity";

export const brandType = defineType({
  name: "brand",
  title: "Brand",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Brand Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Brand Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Brand Logo",
      type: "object",
      fields: [
        defineField({
          name: "logo_mobile",
          title: "Logo Mobile",
          type: "image",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "logo_desktop",
          title: "Logo Desktop",
          type: "image",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
