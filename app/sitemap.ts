import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.techvalio.com";

  return [
    // MAIN PAGES
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/why-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // SERVICE PAGES
    {
      url: `${baseUrl}/services/computer-system-validation`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/data-centre-and-server-qualification`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/data-migration-and-qualification`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/equipment-and-process-validation`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/pharmaceutical-licensing`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/software-testing-and-validation`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}
