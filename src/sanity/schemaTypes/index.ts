import { type SchemaTypeDefinition } from "sanity";
import { heroType } from "./heroTypes";
import { aboutType } from "./aboutTypes";
import { blockContentType } from "./blockContentType";
import { differenceType } from "./differenceTypes";
import { brandDetailsType } from "./brandDetailsType";
import { imageGalleryType } from "./imageGalleryTypes";
import { servicesType } from "./servicesTypes";
import { teamType } from "./teamTypes";
import { contactType } from "./contactTypes";
import { maintenanceType } from "./maintenanceTypes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    brandDetailsType,
    heroType,
    aboutType,
    differenceType,
    imageGalleryType,
    servicesType,
    teamType,
    contactType,
    maintenanceType,
  ],
};
