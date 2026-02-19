export const profile = {
  name: 'Shrishail Ravi Terni',
  headline: 'AI enthusiast • Builder • Curious about markets',
  shortBio:
    'I blend machine learning, software engineering, and a curiosity for financial systems to build production-ready tools and research-driven projects — from data pipelines and models to clean, fast web UIs and reproducible analyses.',
  longBio:
    'I work at the intersection of AI and finance — building models, data pipelines, and web tools that turn research into usable products. I focus on reproducible experiments, clear visualizations, and lightweight, fast web UIs.',
  skills: {
    ai: ['PyTorch', 'scikit-learn', 'transformers'],
    data: ['pandas', 'SQL', 'NumPy'],
    web: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    tools: ['Git', 'Docker', 'Postgres'],
    finance: ['Time series', 'Backtesting', 'Quant research']
  },
  social: {
    github: 'https://github.com/ShriGWU',
    linkedin: 'https://www.linkedin.com/in/shrishail-terni/',
    email: 'mailto:you@example.com'
  },
  photo: '/Profile_photo.jpeg',
  experiences: [
    {
      title: 'Research Database Coordinator',
      org: 'LifeBridge Health, Baltimore, MD',
      date: 'July 2025 – Present',
      bullets: [
        'Built a secure RAG-based clinical NLP system to extract longitudinal patient metrics from unstructured Cerner notes and integrated automated REDCap API ingestion under HIPAA constraints.',
        'Designed and optimized REDCap instruments and data workflows to reduce inconsistency and improve real-time study metric tracking.'
      ]
    },
    {
      title: 'Machine Learning Engineer Intern',
      org: "Children's National, Washington, DC",
      date: 'April 2025 – June 2025',
      bullets: [
        'Performed end-to-end bulk RNA-seq analysis and built a reproducible R/Bioconductor pipeline (DESeq2, tximport) version-controlled via GitHub.',
        'Produced actionable biological insights (pathway enrichment, gene-set analysis) to inform clinical research priorities.'
      ]
    },
    {
      title: 'Machine Learning Engineer Intern',
      org: 'Somika Group, DRC (Africa)',
      date: 'June 2024 – August 2024',
      bullets: [
        'Implemented 10+ interactive PowerBI dashboards and 15+ KPIs to improve procurement and inventory visibility, reducing manual reporting by 40%.',
        'Developed and deployed an anomaly-detection model for stock movements, cutting operational inefficiencies by ~15%.'
      ]
    },
    {
      title: 'Machine Learning Engineer Intern',
      org: 'Computronics Academy, Belgaum, India',
      date: 'April 2023 – June 2023',
      bullets: [
        'Analyzed 50,000+ native-language customer feedback entries and improved sentiment-classification accuracy by 20% using Hugging Face tooling.',
        'Built 10+ Tableau dashboards and trained supervised models on 100k+ labeled samples, improving classification accuracy from 75% to 88%.'
      ]
    }
  ],
  projects: [
    {
      name: 'Autism Detection from Brain MRI using Deep Learning',
      description: 'Full-stack cloud-hosted system using a 3D-CNN on ABIDE MRI data to classify autism; deployed via a Flask API on GCP VM with GPU support.',
      date: 'Feb 2022 - May 2025',
      tags: ['Deep Learning', 'Medical'],
      repo: '',
      demo: '',
      highlights: ['3D CNN preprocessing & augmentation', 'GCP GPU deployment with Flask API']
    },
    {
      name: 'FDA Adverse Event Prediction System',
      description: 'Built and tuned ML models (Logistic Regression, Random Forest, XGBoost) to predict adverse drug events enabling proactive safety monitoring.',
      date: 'Aug 2024 - Nov 2024',
      tags: ['Data Science', 'Healthcare'],
      repo: '',
      demo: '',
      highlights: ['Tuned Random Forest achieving ~82% accuracy', 'Feature engineering & model evaluation for real-time risk assessment']
    },
    {
      name: 'Age/Gender/Emotion Detection from Facial Images',
      description: 'Computer-vision pipeline and CNN models to detect age, gender, and emotion from facial images.',
      date: 'Feb 2024 - May 2024',
      tags: ['Computer Vision'],
      repo: '',
      demo: '',
      highlights: ['CNN model achieving ~85% accuracy', 'End-to-end preprocessing and augmentation']
    },
    {
      name: 'Regression Analysis of Crime Data',
      description: 'Performed regression modeling on California crime datasets to understand predictors and model performance.',
      date: 'Sept 2023 - Nov 2023',
      tags: ['Statistics'],
      repo: '',
      demo: '',
      highlights: ['Adjusted R² ~75% using Minitab', 'Detailed feature selection and diagnostics']
    }
  ],
  currentlyExploring: ['Diffusion models', 'Market microstructure papers', 'Causal inference']
}
