import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface PortfolioProject {
    id: string;
    client: string;
    title: string;
    briefDescription: string;
    outcomes: string;
    imageUrl: string;
    category: string;
    fullDescription: string;
    techStack: Array<string>;
}
export interface ContactSubmission {
    id: string;
    serviceType: string;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface backendInterface {
    getContactSubmissions(): Promise<Array<ContactSubmission>>;
    getPortfolioProjects(): Promise<Array<PortfolioProject>>;
    getProjectById(id: string): Promise<PortfolioProject | null>;
    submitContact(name: string, email: string, phone: string, message: string, serviceType: string): Promise<ContactSubmission>;
}
