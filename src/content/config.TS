import { defineCollection, z } from "astro:content";

const ecommerce = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        img: z.array(z.string()), // Para manejar un array de imágenes
        tags: z.array(z.string()).optional(), // Si también tienes etiquetas
    }),
});

export const collections = {ecommerce}
