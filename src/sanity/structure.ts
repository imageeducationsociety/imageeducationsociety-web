import type { StructureResolver } from "sanity/structure";
import {
  CogIcon,
  HomeIcon,
  MasterDetailIcon,
  DocumentIcon,
  BulbOutlineIcon,
  ImageIcon,
  ListIcon,
} from "@sanity/icons";
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

      S.listItem()
        .title("About")
        .icon(DocumentIcon)
        .child(S.document().schemaType("about").documentId("about")),

      S.listItem()
        .title("Difference")
        .icon(BulbOutlineIcon)
        .child(S.document().schemaType("difference").documentId("difference")),

      S.listItem()
        .title("Image Gallery")
        .icon(ImageIcon)
        .child(
          S.document().schemaType("imageGallery").documentId("imageGallery")
        ),

      S.listItem()
        .title("Services")
        .icon(ListIcon)
        .child(S.document().schemaType("services").documentId("services")),

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
                .title("Brand Details")
                .icon(HomeIcon)
                .child(
                  S.document()
                    .schemaType("brandDetails")
                    .documentId("brandDetails")
                ),
            ])
        ),

      // List all other document types except those we've already handled
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            "brandDetails",
            "hero",
            "about",
            "difference",
            "imageGallery",
            "services",
          ].includes(item.getId()!)
      ),
    ]);
