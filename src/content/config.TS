import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        img: z.array(z.string()), // Para manejar un array de imágenes
        tags: z.array(z.string()).optional(), // Si también tienes etiquetas
        github: z.string().optional(),
    }),
});

export const collections = {projects}
