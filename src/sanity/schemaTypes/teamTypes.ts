import { defineField, defineType } from "sanity";

export const teamType = defineType({
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "team",
      title: "Team",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "designation",
              title: "Designation",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],
});
