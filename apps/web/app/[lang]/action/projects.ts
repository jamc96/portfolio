'use server';
import { getTranslatedData } from '@/lib/api';


interface allProjectsProps {
    query?: { type: string }
}

export async function getAllProjects({ query }: allProjectsProps) {
    const { projects } = await getTranslatedData();
    if (query) {
        const { type: queryType } = query;
        return projects.filter(({ type }) => type === queryType);
    }
    return projects;
}

export async function getProjectBySlug({ slug }: { slug: string }) {
    const { projects } = await getTranslatedData();
    return projects.find(({ slug: projectSlug }) => projectSlug === slug);
}

export async function getFeaturedProjects() {
    const { projects } = await getTranslatedData();
    return projects.filter(({ featured }) => featured === true);
}

export async function getProyectTypes() {
    return [
        { id: 0, name: 'Development', slug: 'development', icon: 'computer', color: 'green' },
        { id: 1, name: 'Automation', slug: 'automation', icon: 'gear', color: 'purple' }
    ]
}