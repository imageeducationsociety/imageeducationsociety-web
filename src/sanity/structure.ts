import type { StructureResolver } from "sanity/structure";
import { CogIcon, HomeIcon, MasterDetailIcon } from "@sanity/icons";
// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Single document items
      S.listItem()
        .title("Hero")
        .icon(MasterDetailIcon)
        .child(S.document().schemaType("hero").documentId("hero")),

      // Divider for visual grouping
      S.divider(),

      // Settings section
      S.listItem()
        .title("Settings")
        .icon(CogIcon)
        .child(
          S.list()
            .title("Site Settings")
            .items([
              S.listItem()
                .title("Brand")
                .icon(HomeIcon)
                .child(S.document().schemaType("brand").documentId("brand")),
            ])
        ),

      // List all other document types except those we've already handled
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["brand", "hero"].includes(item.getId()!)
      ),
    ]);
