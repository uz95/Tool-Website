import type { MetadataRoute } from "next";
import routes from "./sitemap-routes.json";

export default function sitemap(): MetadataRoute.Sitemap {
  // A deployment does not mean every page changed; omit unverified lastModified dates.
  return routes.map(route => ({ url: `https://www.fastwebtoolshub.com${route === "/" ? "" : route}` }));
}
