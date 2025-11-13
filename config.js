import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Rohith Sadanala",
    },
    social: {
        github: "rohithsadanala",
        linkedin: "rohithsadanala1",
        discord: "Rohith8066"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, 

projects: [
    {
        id: 1, 
        title: "Diagnosis of Melanoma from Dermoscopy Images",
        description: "Developed and deployed deep learning models (CNNs) for classification of melanoma from dermoscopy images. This included advanced image preprocessing and real-time prediction pipelines to achieve high diagnostic accuracy.",
        image: "/project1.png",
        technologies: ["Deep Learning", "CNN", "TensorFlow", "PyTorch", "Python", "Image Processing"],
        demo: "https://sifisheriessciences.com/index.php/journal/article/view/920/414"
    },
    {
        id: 2, 
        title: "AI Integration for Radiology Automation",
        description: "Integrated advanced deep learning models into a radiology platform to automate image analysis, volumetric measurements, and structured reporting. The system connects directly with PACS to enable real-time case prioritization, significantly improving radiologist efficiency.",
        image: "/project2.png",
        technologies: ["AI Agent Development", "LLM", "NLP", "TensorFlow", "PyTorch", "PACS Integration"],
        demo: "https://newlantern.ai/"
    },
    {
        id: 3, 
        title: "AI-Powered Website Audit",
        description: "Developed a scalable AI platform that leverages LLMs to audit websites, automatically extracting structured content and generating insightful PDF/PPT reports. The system features a Python/Flask backend, automated email delivery, and was deployed with robust CI/CD pipelines.",
        image: "/project3.png",
        technologies: ["Generative AI", "LLM Prompt Engineering", "Full-Stack Dev", "Python", "Flask", "CI/CD"],
        demo: "https://www.instantinsites.com/"
    }
],

    skills: [

        
        {
            title: "AI / ML & Data",
            icon: <HiCube />,
            description: "Core ML, NLP, and DataOps experience",
            bgClass: "bg-red-500/10",
            iconClass: "text-red-500",
            skills: [
                { name: "LLM Fine-Tuning/RAG", level: "Expert", hot: true },
                { name: "TensorFlow/PyTorch", level: "Advanced" },
                { name: "NLP / Computer Vision", level: "Expert" },
                { name: "Scikit-learn, XGBoost, Pandas", level: "Advanced" },
                { name: "Model Validation & Drift Detection", level: "Advanced" }
            ]
        },
        {
            title: "Cloud & MLOps",
            icon: <HiDatabase />,
            description: "Deployment, Orchestration, and Infrastructure",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "AWS / GCP / Azure ML / PCF", level: "Advanced", hot: true },
                { name: "Docker / Kubernetes", level: "Advanced" },
                { name: "Jenkins / GitLab CI/CD", level: "Advanced" },
                { name: "Terraform / DVC", level: "Intermediate" },
                { name: "MLflow / Prometheus / ELK Stack", level: "Advanced" }
            ]
        },
                {
            title: "Big Data & Database",
            icon: <HiDatabase />,
            description: "Streaming, Storage, and Query Optimization",
            bgClass: "bg-Orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "Apache Spark / PySpark", level: "Advanced" },
                { name: "Kafka / Airflow / Databricks", level: "Advanced" },
                { name: "PostgreSQL / MySQL / Oracle DB", level: "Advanced", hot: true },
                { name: "MongoDB / DynamoDB / Redis", level: "Advanced" }
            ]
        },
        {
            title: "Programming & Web Dev",
            icon: <HiCode />,
            description: "Full Stack Language, Framework, and Testing",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "Python / Java / C++ / R", level: "Expert", hot: true },
                { name: "JavaScript / Node.js", level: "Advanced" },
                { name: "ReactJS / Angular / Bootstrap", level: "Advanced" },
                { name: "RESTful APIs / SOAP / gRPC", level: "Advanced" },
                { name: "PyTest / JUnit / Selenium / Jasmine", level: "Advanced" }
            ]
        }
    ],

experiences: [
    {
        position: "Software / Machine Learning Engineer",
        company: "Devoir",
        period: "Feb 2025 – Present",
        location: "Remote",
        description: "Leading the design and deployment of end-to-end Generative AI systems and scalable machine learning solutions in production cloud environments.",
        responsibilities: [
            "Engineered and deployed scalable MLOps pipelines on AWS and GCP, leveraging Python, TensorFlow, and PyTorch to automate model training, validation, and deployment.",
            "Spearheaded the development of advanced Generative AI solutions, fine-tuning LLMs and building complex RAG (Retrieval-Augmented Generation) architectures with LangChain.",
            "Automated the entire CI/CD lifecycle for machine learning models using Docker, Kubernetes, Jenkins, and Terraform, significantly reducing deployment time and errors.",
            "Implemented real-time computer vision workflows on Databricks and Apache Spark for industrial defect detection, enhancing quality control processes."
        ],
        technologies: ["Python", "TensorFlow", "PyTorch", "AWS", "GCP", "Kubernetes", "Docker", "Apache Spark", "LangChain", "LLM"]
    },
    {
        position: "Technology Volenteer",
        company: "Clean Choice Together",
        period: "Sep 2024 – May 2025", 
        location: "Remote",
        description: "Designed and implemented end-to-end data workflows to deliver predictive analytics and real-time insights for enterprise clients.",
        responsibilities: [
            "Designed and built robust ETL pipelines using PySpark and Airflow, processing diverse datasets to fuel machine learning models.",
            "Developed and integrated predictive models for time-series forecasting, delivering key business insights via high-performance RESTful APIs built with FastAPI.",
            "Managed the end-to-end lifecycle of client-facing AI solutions, from initial design and review to deployment and ongoing performance monitoring using MLflow."
        ],
        technologies: ["Python", "Apache Spark", "Scikit-learn", "FastAPI", "RESTful APIs", "GCP", "AWS", "MLflow"]
    },
    {
        position: "Student Technology Developer",
        company: "Aramark - University of South Florida",
        period: "JSep 2023 – Nov 2024",
        location: "Tampa, Florida",
        description: "Conducted advanced research in NLP and Deep Learning, focusing on transformer-based models and LLM pipeline engineering.",
        responsibilities: [
            "Led advanced research in NLP, engineering end-to-end LLM pipelines with Retrieval-Augmented Generation (RAG) to solve complex research problems.",
            "Developed and benchmarked novel transformer-based models using PyTorch and TensorFlow, creating reproducible frameworks for academic validation.",
            "Mentored junior students in machine learning and data science principles, fostering practical skills in programming and MLOps."
        ],
        technologies: ["PyTorch", "TensorFlow", "NLP", "RAG", "Python", "Deep Learning", "LLM"]
    },
    {
        position: "Full Stack Developer",
        company: "TechSophy",
        period: "Jan 2021 – Jul 2023",
        location: "Hyderabad, India",
        description: "Developed and maintained enterprise-grade web applications, focusing on integrating backend Java services with modern JavaScript frontends.",
        responsibilities: [
            "Engineered and delivered dynamic, data-driven features using Java (Spring Boot) for the backend and JavaScript (React) for responsive user interfaces.",
            "Designed and consumed RESTful APIs to seamlessly integrate machine learning models and third-party services into the core application.",
            "Managed the complete software lifecycle with CI/CD pipelines using Jenkins, GitLab, and Maven, ensuring robust and timely releases in an Agile environment."
        ],
        technologies: ["Java", "Spring Boot", "JavaScript", "React", "SQL", "RESTful APIs", "Maven", "Jenkins", "Git", "AWS"]
    }
],

    contactInfo: [
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "rohithsadanala1@gmail.com",
            link: "mailto:rohithsadanala1@gmail.com"
        },
        {
            icon: <HiBriefcase className="w-5 h-5" />,
            label: "Phone",
            value: "+1 (813) 999-5906",
            link: "tel:+18139995906"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "United States",
            link: null
        }
    ]
}