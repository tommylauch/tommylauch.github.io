import { defineCollection } from "astro:content";
import { aboutMeSchema } from "./schema/about-me";

export const collections = {
  'about-me': defineCollection({
    type: 'content',
    schema: aboutMeSchema
}),
};