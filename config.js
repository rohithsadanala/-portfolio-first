import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Rohith Chowdary Sadanala",
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
            description: "Developed and deployed deep learning models (CNNs) for classification of melanoma from dermoscopy images. This included advanced image preprocessing, feature extraction, and real-time prediction pipelines to achieve high diagnostic accuracy in medical imaging workflows.",
            image: "/projects/melanoma-diagnosis.webp", 
            technologies: ["Deep Learning", "CNN", "TensorFlow/PyTorch", "Python", "Image Processing", "Machine Learning"],
            demo: "https://sifisheriessciences.com/index.php/journal/article/view/920/414"
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
            position: "Software/Machine Learning Engineer",
            company: "Devoir Software Solutions LLC",
            period: "Feb 2025 – Present",
            location: "Remote/Various",
            description: "Architecting and deploying scalable machine learning pipelines, Gen AI, and RAG architectures in cloud environments.",
            responsibilities: [
                "Architected and deployed scalable ML pipelines utilizing object-oriented Python, **TensorFlow**, and **PyTorch** on AWS SageMaker and GCP Vertex AI, optimizing model performance.",
                "Developed and fine-tuned large language models (LLMs) and Generative AI solutions using Hugging Face and LangChain.",
                "Led cross-functional teams to implement computer vision workflows for real-time defect detection, leveraging Databricks and **Apache Spark**.",
                "Automated model validation and CI using **Jenkins**, **Docker**, **Kubernetes**, and **Terraform** for robust production deployments.",
                "Integrated monitoring, alerting, and logging stack (**Prometheus**, Grafana, ELK) for transparent, resilient ML system operations.",
                "Developed test automation frameworks with **pytest** and **Jasmine**, ensuring consistent validation across **RESTful API** and UI layers."
            ],
            technologies: ["Python", "TensorFlow", "PyTorch", "AWS", "GCP", "Kubernetes", "Docker", "Jenkins", "Jasmine", "RESTful Web Services", "UNIX"]
        },
        {
            position: "Technology Engir",
            company: "Clean Choice Together",
            period: "Aug 2024 – May 2025",
            location: "Remote",
            description: "Designed and implemented end-to-end data and ML workflows for predictive analytics and real-time insight delivery.",
            responsibilities: [
                "Built end-to-end ETL pipelines ingesting diverse datasets using PySpark, Airflow, and Delta Lake.",
                "Designed ML workflows for predictive analytics and time series forecasting leveraging Scikit-learn and automated hyperparameter tuning.",
                "Developed **RESTful APIs** and FastAPI microservices integrating trained models into web applications for real-time insight delivery.",
                "Collaborated directly with enterprise clients to design, review, and deploy AI-driven web solutions.",
                "Operationalized model monitoring and drift detection with MLflow Model Registry and Grafana dashboards."
            ],
            technologies: ["Python", "Apache Spark", "RESTful Web Services", "Javascript", "GCP", "AWS", "AJAX"]
        },
        {
            position: "Student Technology Engineer",
            company: "Aramark - University of South Florida",
            period: "Jan 2024 – Nov 2024",
            location: "Tampa, Florida",
            description: "Conducted advanced research in NLP and Deep Learning, focusing on LLM pipelines and RAG architectures.",
            responsibilities: [
                "Conducted advanced research in **natural language processing (NLP)** and deep learning, publishing results in peer-reviewed journals.",
                "Built end-to-end LLM pipelines with RAG, hybrid retrieval, reranking, and prompt templates for deterministic actions.",
                "Engineered transformer-based models and reinforcement learning algorithms to solve open research problems.",
                "Built reproducible ML benchmark frameworks using **PyTorch** and **TensorFlow**.",
                "Mentored students in machine learning, statistics, and programming, fostering hands-on skills in data science and MLOps."
            ],
            technologies: ["PyTorch", "TensorFlow", "NLP", "Python", "Deep Learning"]
        },
        {
            position: "Software Full Stack Developer",
            company: "TechSophy",
            period: "Jan 2021 – Jul 2023",
            location: "India",
            description: "Full stack development involving integration of ML models with web applications and cloud infrastructure management.",
            responsibilities: [
                "Developed web applications integrating machine learning models with Python (Flask), ReactJS, and SQL/NoSQL databases on AWS.",
                "Implemented user-facing predictive analytics dashboards with real-time updates using **RESTful APIs**.",
                "Established CI/CD pipelines for software and ML releases via **GitLab** (version control), **Jenkins**, and **Maven** with integration of automated testing suites.",
                "Supported cloud infrastructure scaling and performance tuning using **Terraform** and **Prometheus**.",
                "Followed Agile methodology, conducting code reviews and sprint meetings."
            ],
            technologies: ["React", "Python", "SQL", "RESTful Web Services", "Maven", "Jenkins", "Git", "AWS", "JQuery", "HTML5", "CSS3"]
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