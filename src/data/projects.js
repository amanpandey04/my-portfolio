export const projects = [
  {
    slug: "tower-defense",
    title: "Neon Bastion",
    year: "2026",
    category: "Browser Game",
    description:
      "A playable browser-based tower defense game with waves, multiple tower and enemy types, upgrades, pathfinding, and performance-focused gameplay.",

    technologies: ["React", "JavaScript", "Tailwind CSS", "Vite"],

    featured: true,

    links: {
      demo: "",
      github: "",
    },

    details: {
      overview:
        "A browser-based tower defense game designed around readable gameplay, reusable components, and efficient game updates.",

      challenge:
        "The main challenge was keeping a large number of moving game objects responsive without unnecessary rendering work.",

      approach:
        "The game was broken into reusable pieces for towers, enemies, waves, upgrades, and UI. Performance was measured during stress testing and the update loop was tuned to avoid unnecessary work.",

      learning:
        "This project was useful for understanding rendering cost, game loops, state management, and performance profiling in a browser environment.",
    },
  },

  {
    slug: "taskify",
    title: "Taskify",
    year: "2026",
    category: "Productivity App",
    description:
      "A focused task management interface built around reusable React components, state management, completion states, and clean responsive UI.",

    technologies: ["React", "JavaScript", "Tailwind CSS", "daisyUI"],

    featured: true,

    links: {
      demo: "",
      github: "",
    },

    details: {
      overview:
        "A small productivity application focused on making task creation and completion simple.",

      challenge:
        "The challenge was keeping the interface simple while making state changes feel immediate and predictable.",

      approach:
        "Reusable task components were combined with lifted state and conditional rendering to keep the interface synchronized.",

      learning:
        "The project strengthened understanding of component composition, props, state updates, conditional UI, and list rendering.",
    },
  },

  {
    slug: "tv-show-recommendation",
    title: "TV Show Recommendation",
    year: "2020",
    category: "React Experiment",
    description: "A genre-based TV recommendation application created as an early React project.",

    technologies: ["React", "JavaScript", "CSS"],

    featured: false,

    links: {
      demo: "",
      github: "",
    },

    details: {
      overview:
        "An early React experiment focused on component rendering and user-selected recommendations.",

      challenge: "The interface needed to update recommendations based on the selected genre.",

      approach:
        "The application used React state and conditional rendering to display the selected set of shows.",

      learning:
        "It was one of the projects that helped establish the fundamentals of React component-based development.",
    },
  },
];
