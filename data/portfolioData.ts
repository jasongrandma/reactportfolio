import { ImageSourcePropType } from 'react-native';

export type SectionKey = 'home' | 'about' | 'projects' | 'contact';

export type ProjectItem = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    link: string;
    heroImage: ImageSourcePropType;
    gallery: ImageSourcePropType[];
};

export const portfolioIdentity = {
    name: 'Jason Granias',
    role: 'Digital Designer',
    email: 'jason.granias@gmail.com',
    intro:
        'Creating is the source of my curiosity and passion. I am interested in design to consider every perspective in a work through emotional resonance.',
    about:
        'Aside from design, I love applying my creativity to every possible thing. While I am playing video games, working on crafts or solving problems, creativity and curiosity are my superpowers that put me on top.',
    skills: ['UX Research', 'Interaction Design', 'Visual Design', 'Prototyping', 'Information Architecture', 'Mobile UI'],
};

export const socialLinks = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'logo-linkedin' as const },
    { label: 'Instagram', url: 'https://www.instagram.com', icon: 'logo-instagram' as const },
    { label: 'Email', url: 'mailto:jason.granias@gmail.com', icon: 'mail' as const },
];

export const sectionOrder: { key: SectionKey; label: string }[] = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'Me' },
    { key: 'projects', label: 'Projects' },
    { key: 'contact', label: 'Contact' },
];

export const heroBackground = require('@/assets/images/mural/IMG_5438.jpeg');
export const profileImage = require('@/assets/images/me.jpg');

export const projectItems: ProjectItem[] = [
    {
        id: 'mural',
        title: 'UCF Valencia Downtown Campus 5th Year Anniversary Mural Design',
        subtitle: 'Visual Design and Concept Development',
        description:
            'Class assignment and competition submission created to celebrate the five-year milestone of UCF and Valencia Downtown Campus.',
        link: 'https://www.behance.net',
        heroImage: require('@/assets/images/mural/IMG_4537.jpeg'),
        gallery: [
            require('@/assets/images/mural/IMG_4537.jpeg'),
            require('@/assets/images/mural/IMG_5436.jpeg'),
            require('@/assets/images/mural/IMG_5438.jpeg'),
        ],
    },
    {
        id: 'drow',
        title: 'Drow',
        subtitle: 'High-Fidelity Prototype Digital Wardrobe Inspiration and Organizer',
        description:
            'UI and UX capstone project featuring user flows, persona-informed planning, and a polished mobile prototype for outfit discovery and planning.',
        link: 'https://www.figma.com',
        heroImage: require('@/assets/images/Interactive Case Study/Home.png'),
        gallery: [
            require('@/assets/images/Interactive Case Study/Home.png'),
            require('@/assets/images/Interactive Case Study/Your Closet.png'),
            require('@/assets/images/Interactive Case Study/Planner.png'),
            require('@/assets/images/Interactive Case Study/Drow logo black.png'),
        ],
    },
    {
        id: 'spotify',
        title: 'Spotify DJ X Redesign',
        subtitle: 'Mobile Feature Redesign',
        description:
            'A concept redesign focused on improving controls and discoverability in the Spotify DJ mobile listening flow.',
        link: 'https://www.figma.com',
        heroImage: require('@/assets/images/spotifyredesign/Action Sheet - iPhone.png'),
        gallery: [require('@/assets/images/spotifyredesign/Action Sheet - iPhone.png')],
    },
    {
        id: 'digital-zoo',
        title: 'Digital Zoo',
        subtitle: 'Information Architecture Assignment',
        description:
            'Information architecture project structuring educational zoo content, exhibit navigation, and virtual learning pathways.',
        link: 'https://www.behance.net',
        heroImage: require('@/assets/images/digital zoo/CFDZ Homepage.jpg'),
        gallery: [
            require('@/assets/images/digital zoo/CFDZ Homepage.jpg'),
            require('@/assets/images/digital zoo/CFDZ Animals Exhibits.jpg'),
            require('@/assets/images/digital zoo/CFDZ Education.jpg'),
            require('@/assets/images/digital zoo/CFDZ Virtual lessons.jpg'),
        ],
    },
];