import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getProyectTypes() {
  return [
    { id: 0, name: 'Development', label: 'Software Development', slug: 'development', icon: 'computer', color: 'green' },
    { id: 1, name: 'Automation', label: 'Software Automation', slug: 'automation', icon: 'gear', color: 'purple' }
  ]
}