export const profile = {
  name: "James Chen",
  role: "Software Engineer",
  company: "StackAdapt",
  location: "Ottawa, Canada",
  email: "qgjameschen@gmail.com",
  github: "https://github.com/j769chen",
  linkedin: "https://www.linkedin.com/in/james23chen/",
  instagram: "https://www.instagram.com/jchen27_/",
};

export type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  location: string;
  summary?: string;
  points?: string[];
};

export const current: Role = {
  company: "StackAdapt",
  title: "Software Engineer",
  start: "Jun 2024",
  end: "Present",
  location: "Remote",
  summary: "Full-stack engineer on the Creatives team. I work on Creative Builder, which takes advertisers from concept to finished creative with 50+ templates across shoppable video, social display and more, plus Ivy AI tools that generate, enhance or add motion to visuals.",
};

export const internships: Role[] = [
  {
    company: "StackAdapt",
    title: "Software Engineer Intern",
    start: "Jan 2024",
    end: "Apr 2024",
    location: "Toronto · Remote",
  },
  {
    company: "Kinaxis",
    title: "Software Engineer Intern",
    start: "May 2023",
    end: "Aug 2023",
    location: "Ottawa · Hybrid",
  },
  {
    company: "Electronic Arts",
    title: "Server Engineer Intern",
    start: "Sep 2022",
    end: "Dec 2022",
    location: "Toronto",
  },
  {
    company: "BlackBerry",
    title: "Software Developer Intern",
    start: "May 2022",
    end: "Aug 2022",
    location: "Mississauga",
  },
  {
    company: "JSI",
    title: "Software Engineer Intern",
    start: "Sep 2021",
    end: "Dec 2021",
    location: "Ottawa",
  },
  {
    company: "Wind River",
    title: "Software Engineer Intern",
    start: "May 2021",
    end: "Aug 2021",
    location: "Ottawa",
  },
  {
    company: "Raven.ai",
    title: "Data Engineer Intern",
    start: "Apr 2020",
    end: "Aug 2020",
    location: "Ottawa",
    points: [
      "Processed production data with Pandas to compute OEE metrics for 50+ manufacturers",
      "Built Python and Matplotlib report scripts that cut monthly report generation time by 50%",
      "Ran the scripts as Kubernetes cron jobs, fully automating monthly reporting",
    ],
  },
  {
    company: "Environment and Climate Change Canada",
    title: "Web Developer Intern",
    start: "Sep 2019",
    end: "Dec 2019",
    location: "Toronto",
    points: [
      "Built interactive maps and graphs for the CCDS site, lifting visits by 10%",
      "Wrote Perl, PHP and jQuery download interfaces for climate data sets",
    ],
  },
];

export type Project = {
  name: string;
  blurb: string;
  stack: string[];
  href: string;
  linkLabel: string;
  year: string;
};

export const projects: Project[] = [
  {
    name: "Badminton Footwork Trainer",
    blurb: "iOS and Android app that drills six-corner footwork. Corners light up on a configurable interval with beep, voice or haptic cues that duck your music instead of stopping it.",
    stack: ["React Native", "Expo", "TypeScript", "Zustand"],
    href: "https://github.com/j769chen/badminton-footwork",
    linkLabel: "GitHub",
    year: "2026",
  },
  {
    name: "SplitBill",
    blurb: "Expense splitting app with equal, exact and percentage splits, realtime group balances, and debt simplification that minimizes the number of payments.",
    stack: ["Expo", "TypeScript", "Supabase", "Postgres", "TanStack Query"],
    href: "https://github.com/j769chen/splitbill",
    linkLabel: "GitHub",
    year: "2026",
  },
  {
    name: "LoL Sketch",
    blurb: "Free multiplayer drawing and guessing game for League of Legends players. Running since 2020.",
    stack: ["Web", "Multiplayer"],
    href: "https://lolsketch.com/",
    linkLabel: "lolsketch.com",
    year: "2020–now",
  },
];

export const archive: Project[] = [
  {
    name: "League Data Analysis",
    blurb: "Compares a player's recent matches to others at the same rank and role using the Riot API.",
    stack: ["Python"],
    href: "https://github.com/j769chen/League-Data-Analysis",
    linkLabel: "GitHub",
    year: "2020",
  },
  {
    name: "BWF Rankings Scraper",
    blurb: "Web app that scrapes and displays badminton world rankings.",
    stack: ["Python", "Flask"],
    href: "https://github.com/j769chen/BWF-Webscraping",
    linkLabel: "GitHub",
    year: "2021",
  },
  {
    name: "Flappy Bird",
    blurb: "Flappy Bird clone built to practice object-oriented design.",
    stack: ["Java", "JavaFX"],
    href: "https://github.com/j769chen/FlappyBird",
    linkLabel: "GitHub",
    year: "2020",
  },
];

export const skills = {
  Languages: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "C/C++"],
  Frontend: ["React", "React Native", "Expo", "Angular"],
  "Backend & data": ["Node.js", "GraphQL", "PostgreSQL", "Supabase", "Pandas"],
  Infrastructure: ["Kubernetes", "AWS", "Git", "CI/CD"],
};
