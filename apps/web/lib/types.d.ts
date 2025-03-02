/*
    Core CMS types
*/
export type Image = {
    url: string;
    alternativeText: string;
    width?: number;
    height?: number;
}

/*
    Shared types
*/
export type Project = {
    id: number;
    name: string;
    description: string;
    link: {
        label: string;
        url: string;
    };
    cover: Image;
    skills: Array<{ name: string }>;
    categories: Array<{ name: string }>;
    type: "development" | "automation";
    slug: string;
    featured: true;
};
