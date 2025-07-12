import { type SchemaTypeDefinition } from "sanity";
import { brandType } from "./brandType";
import { heroType } from "./heroTypes";
import { aboutType } from "./aboutTypes";
import { blockContentType } from "./blockContentType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, brandType, heroType, aboutType],
};
