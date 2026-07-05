import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tous Les Jours Mongolia",
    short_name: "TLJ",
    description:
      "Өдөр бүр шинэ. Франц-ази бэйкери — талх, бялуу, кофе, амттан.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f7",
    theme_color: "#cc3333",
    orientation: "portrait",
    categories: ["food", "shopping", "lifestyle"],
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
