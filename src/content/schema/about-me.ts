import { z } from "astro:content";

export const aboutMeSchema = z.object({
        name: z.object({
            name: z.string(),
            url: z.string().optional().default(""),
        }),
        image: z.string(),
        summary: z.string(),
        publications: z.array(z.object({
            name: z.string(),
            content: z.array(z.object({
                title: z.string(),
                url: z.string(),
                cite: z.string(),
                otherUrls: z.array(z.object({
                    name: z.string(),
                    url: z.string(),
                })).optional().default([]),
        })).optional().default([]),
    })).optional().default([]),
})