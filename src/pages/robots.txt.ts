import type { APIRoute } from 'astro';
import { generateRobotsTxt } from '../utils/seo';

export const prerender = true;

export const GET: APIRoute = () => {
  const content = generateRobotsTxt();
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};