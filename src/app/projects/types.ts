export type ProjectStatus = 'Completed' | 'Under Development' | 'Planned' | 'Operation & Maintenance' | 'Ops & Maintenance';

export interface Project {
    id: string; // unique slug or ID
    title: string;
    location: string;
    country: string;

    // Technical Specs
    capacity?: string; // e.g., "1.2 MWp"
    technology?: string; // e.g., "Ground-Mounted Solar PV"
    storage?: string; // e.g., "15 kWh to 70 kWh per site"

    // Project Details
    status: ProjectStatus;
    description: string; // The long paragraph
    beneficiary?: string; // e.g., "Ministry of Health"
    financing?: string; // e.g., "World Bank"

    // Media
    coverImage?: string; // Path to main image
    gallery?: string[]; // Paths to additional images
    driveLink?: string; // Internal reference
}

export interface ProjectCountry {
    name: string;
    projects: Project[];
}

export interface ProjectRegion {
    id: string;
    name: string;
    countries: ProjectCountry[];
}
