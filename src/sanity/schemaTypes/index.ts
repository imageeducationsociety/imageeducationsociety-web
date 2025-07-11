import { type SchemaTypeDefinition } from "sanity";
import { brandType } from "./brandType";
import { heroType } from "./heroTypes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [brandType, heroType],
};
