'use server';

import { projects } from '@/lib/constants';


interface allProjectsProps {
    query?: { type: string }
}

export async function getAllProjects({ query }: allProjectsProps) {
    if (query) {
        const { type: queryType } = query;
        return projects.filter(({ type }) => type === queryType);
    }
    return projects;
}

export async function getFeaturedProjects() {
    return projects.filter(({ featured }) => featured === true);
}

export async function getProyectTypes() {
    return [
        { id: 0, name: 'Development', slug: 'development', icon: 'computer', color: 'green' },
        { id: 1, name: 'Automation', slug: 'automation', icon: 'gear', color: 'purple' }
    ]
}