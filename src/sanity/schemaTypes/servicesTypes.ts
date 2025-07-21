import { defineField, defineType } from "sanity";

export const servicesType = defineType({
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      validation: (Rule) => Rule.min(3),
      description: "Please add at least 3 services",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "icon",
            }),
          ],
        },
      ],
    }),
  ],
});
