import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Carli Special",
    short_name: "Carli Special",
    description: "Personalized hair color and styling.",
    start_url: "/",
    display: "standalone",
  };
}
