import { type SchemaTypeDefinition } from "sanity";
import { heroType } from "./heroTypes";
import { aboutType } from "./aboutTypes";
import { blockContentType } from "./blockContentType";
import { differenceType } from "./differenceTypes";
import { brandDetailsType } from "./brandDetailsType";
import { imageGalleryType } from "./imageGalleryTypes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    brandDetailsType,
    heroType,
    aboutType,
    differenceType,
    imageGalleryType,
  ],
};
