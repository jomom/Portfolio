import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

export function getResponseForQuery(query: string) {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('project') || lowerQuery.includes('work') || lowerQuery.includes('portfolio')) {
    return 'projects';
  } else if (lowerQuery.includes('skill') || lowerQuery.includes('technology') || lowerQuery.includes('tech')) {
    return 'skills';
  } else if (lowerQuery.includes('experience') || lowerQuery.includes('background')) {
    return 'experience';
  } else if (lowerQuery.includes('contact') || lowerQuery.includes('hire') || lowerQuery.includes('email')) {
    return 'contact';
  } else if (lowerQuery.includes('rate') || lowerQuery.includes('price') || lowerQuery.includes('cost')) {
    return 'rates';
  } else if (lowerQuery.includes('available') || lowerQuery.includes('when') || lowerQuery.includes('start')) {
    return 'availability';
  } else if (lowerQuery.includes('process') || lowerQuery.includes('how') || lowerQuery.includes('workflow')) {
    return 'process';
  }
  
  return 'default';
}