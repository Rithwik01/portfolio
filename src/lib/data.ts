export const PERSONAL = {
  name: 'Rithwik Kamalesh',
  tagline: 'Data Analyst & Data Scientist',
  subTagline: 'Building intelligent systems at the intersection of data, AI, and software.',
  bio: `Data Analyst and Data Scientist with a strong business analytics foundation. I work across the full data lifecycle — from SQL and Python analysis to BI dashboards and predictive models — delivering insights that improve retention, efficiency, and revenue.`,
  location: 'Atlanta, GA',
  email: 'rkamalesh3@gatech.edu',
  phone: '678-575-7222',
  github: 'https://github.com/Rithwik01',
  githubHandle: 'Rithwik01',
  linkedin: 'https://www.linkedin.com/in/rithwikkam/',
  resumeUrl: '/Rithwik_Kamalesh_Resume.pdf',
  availability: 'Open Data Analyst/Data Science roles',
}

export const EXPERIENCE = [
  {
    id: 'roamio',
    company: 'Roamio.ai',
    role: 'Data Analyst',
    period: 'May 2025 – Present',
    location: 'Atlanta, GA',
    type: 'Full-time',
    emoji: '🚀',
    color: '#00d4ff',
    bullets: [
      'Analyzed 10K+ user events to identify key engagement trends, improving overall retention metrics by ~15%.',
      'Built 5+ Power BI dashboards tracking 5 KPIs to diagnose low event attendance, presenting insights to stakeholders.',
      'Partnered with the marketing team to strategically advertise events using dashboard reports, increasing attendance by ~6%.',
      'Applied data analysis to improve UX and feature performance, boosting overall conversion rates by ~12%.',
      'Monitored user behavior and engagement metrics, providing data insights to support product improvements.',
    ],
    skills: ['Power BI', 'Python', 'SQL', 'Analytics', 'KPI Dashboards'],
  },
  {
    id: 'bbbs',
    company: 'Big Brothers Big Sisters of America',
    role: 'Data Analyst Intern',
    period: 'May 2024 – November 2024',
    location: 'Atlanta, GA',
    type: 'Internship',
    emoji: '🤝',
    color: '#a78bfa',
    bullets: [
      'Developed ML matching system with 1,000+ synthetic IDs, improving data governance and enabling secure analytics.',
      'Processed 5,000+ interview records using SQL/Python, reducing inconsistencies by ~30% and improving data quality.',
      'Engineered 15+ NLP personality features, improving match accuracy and overall recommendation system performance.',
      'Performed data cleaning, validation, and deduplication on datasets, improving reliability for downstream modeling.',
      'Analyzed matching outcomes and user attributes to refine model features, improving overall match success rate.',
    ],
    skills: ['NLP', 'Python', 'SQL', 'Scikit-learn', 'Data Cleaning', 'ML'],
  },
]

export const PROJECTS = [
  {
    id: 'hr-conflict',
    title: 'AI-Powered HR Conflict Detection System',
    description:
      'End-to-end agentic AI system that analyzes candidate resumes and cross-references employer history against 10,000+ SEC 10-K Exhibit 21 subsidiary records, achieving 92% entity matching precision.',
    category: 'AI / Agentic Systems',
    emoji: '🤖',
    color: '#00d4ff',
    highlights: [
      '92% entity matching precision across 10K+ SEC filings',
      '4-agent LLM pipeline with OpenAI APIs',
      '~75% reduction in compliance review time',
      'Deployed on AWS with Docker, 100+ comparisons/hour',
    ],
    tags: ['Python', 'OpenAI API', 'AWS', 'Docker', 'LLM', 'NLP', 'PDF Processing', 'Fuzzy Matching'],
    github: 'https://github.com/Rithwik01',
    featured: true,
  },
  {
    id: 'cifar',
    title: 'Deep CNN Image Classifier',
    description:
      'Trained a deep convolutional neural network on 60K CIFAR-10 images achieving 92.9% test accuracy. Improved generalization using Conv2D, BatchNorm, and Dropout layers.',
    category: 'Computer Vision',
    emoji: '👁️',
    color: '#a78bfa',
    highlights: [
      '92.9% test accuracy on CIFAR-10',
      '~8% improvement in validation accuracy',
      '0.93 macro F1-score',
      'Conv2D + BatchNorm + Dropout architecture',
    ],
    tags: ['Python', 'TensorFlow', 'Keras', 'CNN', 'CIFAR-10', 'Deep Learning', 'Computer Vision'],
    github: 'https://github.com/Rithwik01',
    featured: true,
  },
  {
    id: 'drone',
    title: 'Fully Autonomous Drone',
    description:
      'Built a custom autonomous drone using a DJI kit and Jetson Nano, integrating GPS, LiDAR, and vision sensors with OpenCV for real-time obstacle avoidance and stable flight.',
    category: 'Robotics & Embedded AI',
    emoji: '🚁',
    color: '#34d399',
    highlights: [
      'Custom flight control algorithm in Python/C++',
      'Real-time obstacle avoidance via LiDAR + OpenCV',
      'GPS + vision sensor fusion',
      'Deployed on NVIDIA Jetson Nano',
    ],
    tags: ['Python', 'C++', 'OpenCV', 'Jetson Nano', 'LiDAR', 'GPS', 'Control Systems', 'Robotics'],
    github: 'https://github.com/Rithwik01',
    featured: true,
  },
]

export const SKILLS = {
  'Languages': {
    icon: '⌨️',
    color: '#00d4ff',
    items: ['Python','SQL','Java', 'C++',],
  },
  'ML / AI': {
    icon: '🧠',
    color: '#a78bfa',
    items: ['TensorFlow', 'Keras', 'Scikit-learn', 'PyTorch', 'OpenAI API', 'NLP', 'Computer Vision'],
  },
  'Data & Analytics': {
    icon: '📊',
    color: '#34d399',
    items: ['Pandas', 'NumPy', 'Power BI', 'SQL', 'MongoDB', 'DynamoDB', 'Spark'],
  },
  'Cloud & DevOps': {
    icon: '☁️',
    color: '#fbbf24',
    items: ['AWS', 'Docker', 'Kubernetes', 'Linux', 'REST APIs', 'Git'],
  },
  'Web & Frameworks': {
    icon: '🌐',
    color: '#f472b6',
    items: ['React', 'Next.js', 'Vue', 'Angular', 'Node.js', 'FastAPI'],
  },
  'Tools': {
    icon: '🛠️',
    color: '#fb923c',
    items: ['Jira', 'Wireshark', 'MagicDraw', 'Jupyter', 'VS Code', 'Databricks'],
  },
}

export const EDUCATION = [
  {
    school: 'Georgia Institute of Technology',
    degree: 'Master of Science in Computer Science',
    concentration: 'Artificial Intelligence & Machine Learning',
    period: 'January 2026 – December 2027',
    location: 'Atlanta, GA',
    status: 'In Progress',
    emoji: '🐝',
    color: '#fbbf24',
    courses: ['Machine Learning for Trading (CS 7646)', 'DB Systems Concepts & Design (CS 6400)'],
    note: "Georgia Tech's OMSCS — ranked #5 CS grad program in the US",
  },
  {
    school: 'Georgia State University',
    degree: 'Bachelor of Science in Computer Science',
    concentration: 'Data Science',
    period: 'August 2021 – December 2024',
    location: 'Atlanta, GA',
    status: 'Completed',
    emoji: '🎓',
    color: '#00d4ff',
    courses: [
      'Data Structures (DSCI 2720)',
      'Probability & Stats for CSC (MATH 3020)',
      'Big Data (DSCI 4760)',
      'Algorithms (CSC 4520)',
      'Data Mining (DSCI 4740)',
      'Machine Learning (DSCI 4850)',
      'Data Science Capstone (DSCI 4760)',
    ],
    clubs: ['Beta Alpha Psi', 'Financial Technology Organization (FTO)', 'Cybersecurity Club at GSU'],
  },
]

export const CERTIFICATIONS = [
  { name: 'AWS AI Practitioner', issuer: 'Amazon Web Services', emoji: '☁️', status: 'Active' },
  { name: 'Databricks Generative AI Fundamentals', issuer: 'Databricks', emoji: '⚡', status: 'Active' },
  { name: 'AWS Associate Machine Learning Engineer', issuer: 'Amazon Web Services', emoji: '🤖', status: 'In Progress (2026)' },
  { name: 'Snowflake Associate: Platform Certification', issuer: 'Snowflake', emoji: '❄️', status: 'In Progress (2026)' },
]

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
