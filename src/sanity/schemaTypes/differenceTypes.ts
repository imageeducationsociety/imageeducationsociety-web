import { defineField, defineType } from "sanity";

export const differenceType = defineType({
  name: "difference",
  title: "Difference",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "points",
      title: "Points",
      type: "array",
      validation: (Rule) => Rule.min(3).max(3),
      description: "Please add only 3 points",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
            { name: "icon", title: "Icon", type: "image" },
          ],
        },
      ],
    }),
  ],
});
