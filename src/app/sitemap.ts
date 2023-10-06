import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://leticiamartins.com.br',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]
}

// Exemplo de configuração de paginas no site maps

// {
//   url: 'https://acme.com/blog',
//   lastModified: new Date(),
//   changeFrequency: 'weekly',
//   priority: 0.5,
// },