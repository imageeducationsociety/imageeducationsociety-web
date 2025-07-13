import { defineField, defineType } from "sanity";

export const brandDetailsType = defineType({
  name: "brandDetails",
  title: "Brand Details",
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
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "footer_description",
      title: "Footer Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
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
        defineField({
          name: "logo_light",
          title: "Logo Light",
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
    defineField({
      name: "copyright",
      title: "Copyright",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
