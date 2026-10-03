export const profile = {
  name: "James Chen",
  role: "Software Engineer",
  company: "StackAdapt",
  location: "Toronto, Canada",
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
  highlights?: string[][];
};

export const current: Role = {
  company: "StackAdapt",
  title: "Software Engineer",
  start: "Jun 2024",
  end: "Present",
  location: "Remote",
  summary: "Full-stack engineer, hired back full-time after my intern term. I work across Rails, GraphQL, React and Python services, mostly on two projects.",
  highlights: [
    [
      "An AI product that analyzes ad creatives and recommends improvements, ranked by expected impact",
      "Built the frontend from an empty route to launch, then moved it from mock data to production GraphQL",
      "Wrote the backend ranking that surfaces the most impactful recommendations first: impact-level partitioning, priority sorting, deduping and low-score filtering",
      "Shipped the per-creative recommendation drawer and inline AI image generation across Rails and a Python service",
      "Added Grafana alerts on screenshot and job success rates, so failures page us before users notice",
    ],
    [
      "A template-based editor for building and customizing ads without a designer",
      "Built the template data model: dynamic JSON fields and rich-text data, so each template defines its own editable fields",
      "Shipped new template types end to end, including animated, shoppable video, testimonial and carousel, from Rails templaters to React editors",
      "Added dynamic macros to ad tags, with fallback values injected into rendered templates when data is missing",
    ],
  ],
};

export const internships: Role[] = [
  {
    company: "Kinaxis",
    title: "Software Engineer Intern",
    start: "May 2023",
    end: "Aug 2023",
    location: "Ottawa · Hybrid",
    points: [
      "Built an ASP.NET and MySQL dashboard that surfaces test failures and lets developers claim the related Jira tickets",
      "Wrote a PowerShell bot that auto-approves PRs from Jenkins build data and posts test results as comments",
      "Raised code coverage by 30% with new NUnit and PowerShell tests",
    ],
  },
  {
    company: "Electronic Arts",
    title: "Server Engineer Intern",
    start: "Sep 2022",
    end: "Dec 2022",
    location: "Toronto",
    points: [
      "Built Java Spring REST APIs for game data and anti-cheat",
      "Built a React tool that turns CSV quest files into interactive flow diagrams, raising writing team productivity by 50%",
      "Containerized the front end on AWS ECS/EC2 with auto-scaling, cutting costs by up to 10%",
    ],
  },
  {
    company: "Wind River",
    title: "Software Engineer Intern",
    start: "May 2021",
    end: "Aug 2021",
    location: "Ottawa",
    points: [
      "Built an AngularJS dashboard for historical and latest test run results",
      "Added data pipelines and removed unnecessary queries in a Django and PostgreSQL back end, improving load times by 15%",
      "Automated production and staging Apache server deploys, cutting rebuild downtime by 30%",
    ],
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
    blurb: "Multiplayer drawing and guessing game for League of Legends players, with shared whiteboards and chat synced over WebSockets. Grew to 10,000 monthly users and has been running since 2020.",
    stack: ["React", "Express", "WebSockets"],
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
  Languages: ["TypeScript", "Python", "Ruby", "Java", "SQL", "C/C++"],
  Frontend: ["React", "React Native", "Angular"],
  "Backend & data": ["Rails", "GraphQL", "Pandas"],
  Infrastructure: ["Kubernetes", "AWS", "Grafana", "Git"],
};
