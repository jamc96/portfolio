/*
    Core CMS types
*/
export type Image = {
    id?: string;
    url: string;
    alternativeText: string;
    width?: number;
    height?: number;
}

export type Link = {
    label: string;
    url: string;
}
/*
    Shared types
*/
export type Technology = {
    id: number;
    name: string;
    cover: Image;
}
export type Category = {
    id: number;
    name: string;
    cover: Image;
}
export type Project = {
    id: number;
    name: string;
    description: string;
    link: Link;
    cover: Image;
    skills: Array<Technology>;
    categories: Array<Category>;
    type: "development" | "automation";
    slug: string;
    featured: true;
};

export type Word = {
    id?: string;
    label: string;
}
