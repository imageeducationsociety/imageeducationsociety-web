import { type SchemaTypeDefinition } from "sanity";
import { brandType } from "./brandType";
import { heroType } from "./heroTypes";
import { aboutType } from "./aboutTypes";
import { blockContentType } from "./blockContentType";
import { differenceType } from "./differenceTypes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, brandType, heroType, aboutType, differenceType],
};
