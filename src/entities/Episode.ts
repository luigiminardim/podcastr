import { ptBR } from 'date-fns/locale';
import { parseISO } from 'date-fns';
import { format } from 'date-fns';
export type Episode = {
  id: string
  title: string
  members: string
  published_at: string
  thumbnail: string
  description: string
  duration: string
  file: {
    url: string
    type: string
    duration: number
  }
}

/**
 * 
 * @param IsoDate 
 * @returns 
 */
export function formatPublishedAt(IsoDate) {
  return format(parseISO(IsoDate), "d MMM yy", {
    locale: ptBR,
  })
}

/**
 *  Transform a duration in seconds to a string format.
 * @example
 * secondsToDuration(3072) // 01:00:12 
 * @param seconds Number of seconds
 * @returns Duration in string format.
 */
export function secondsToDuration(seconds: number): string {
  return [
    Math.floor(seconds / 60 / 60),
    Math.floor((seconds / 60) % 60),
    Math.floor(seconds % 60),
  ]
    .join(":")
    .replace(/\b(\d)\b/g, "0$1")
}