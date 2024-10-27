"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Sun,
  Moon,
  Globe,
  ChevronDown,
  X,
} from "lucide-react";


import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useForm } from "react-hook-form";
import {
  FaPython,
  FaChartLine,
  FaBug,
  FaServer,
  FaProjectDiagram,
  FaHtml5,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiCsharp,
  SiGoland,
  SiNumpy,
  SiOpencv,
  SiAzuredevops,
} from "react-icons/si";

// Initialize i18n for language switching
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        sections: "Sections",
        resume: "Resume",
        about: "About",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        certifications: "Certifications",
        social: "Social Media",
        contact: "Contact",
        blog: "Blog",
        junior_software_engineer: "Computer Engineer",
        loading: "Loading...",
        about_text:
            "I am a Computer & Software Engineering student with advanced knowledge in software development at all stages. My expertise lies in Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, and Image Processing.",
        send: "Send",
        message_sent: "Your message has been sent!",
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        footer_text:
            "This portfolio is designed to provide a user-friendly and accessible experience.",
        all_rights_reserved: "All rights reserved.",
        // Skills
        skills_list: [
          {
            name: "TensorFlow",
            description: "Developing deep learning models using TensorFlow.",
          },
          {
            name: "PyTorch",
            description:
                "Conducting deep learning research and projects with PyTorch.",
          },
          {
            name: "Machine Learning",
            description:
                "Experienced in machine learning algorithms and applications.",
          },
          {
            name: "Deep Learning",
            description: "Designing and training deep learning models.",
          },
          {
            name: "Computer Vision",
            description: "Developing projects in the field of computer vision.",
          },
          {
            name: "Image Processing",
            description:
                "Expert in image processing techniques and algorithms.",
          },
          {
            name: "Python",
            description:
                "Using Python for data analysis and artificial intelligence projects.",
          },
          {
            name: "Natural Language Processing",
            description: "Working on natural language processing projects.",
          },
          {
            name: "Data Analysis",
            description:
                "Performing data analysis to extract meaningful insights.",
          },
          {
            name: "C# .NET",
            description:
                "Experience in application development with C# and .NET Framework.",
          },
          {
            name: "Go",
            description: "Developing high-performance applications with Go.",
          },
          {
            name: "QA Software Testing",
            description:
                "Experience in software testing and quality assurance.",
          },
          {
            name: "Backend Development",
            description: "Developing robust backend systems and APIs.",
          },
          {
            name: "Software Architecture Design",
            description:
                "Designing scalable and efficient software architectures.",
          },
          {
            name: "DevOps",
            description: "Experience in DevOps processes and tools.",
          },
          {
            name: "Frontend Development",
            description:
                "Building interactive user interfaces with modern frameworks.",
          },
        ],
        // Experience
        experience_list: [
          {
            title:
                "Computer Vision Intern - TÜBİTAK Space Technologies Research Institute",
            date: "July 2024 – September 2024",
            description:
                "Developed an astronomical object detection system specialized in Point Spread Function (PSF) analysis, enhancing the precision of source identification in celestial images. Utilized a custom Faster R-CNN model with tailored PSF layers and Hough line detection, trained using PyTorch's DDP for distributed processing. Integrated advanced tools like SEP and Photutils for source extraction, achieving high accuracy in detecting stars and galaxies, and leveraged W&B for detailed metric logging and analysis.",
          },
          {
            title: "Intern - Kardelen Yazılım, Mersin",
            date: "July 2023 – August 2023",
            description:
                "Contributed to the application module development of a software team that works on Entity Framework and MSSQL Server.",
          },
        ],
        // Projects
        projects_list: [
          {
            title: "Astronomical Object Detection for PSF Analysis",
            description:
                "Developed an advanced object detection system focused on identifying Point Spread Function (PSF) in astronomical images, utilizing a custom Faster R-CNN model architecture. This project is specifically designed for detecting stars, galaxies, and other celestial objects in FITS image data, incorporating specialized techniques for precise and scalable data processing.",
            demoLink: "",
          },
          {
            title: "MKYZ: Machine Learning PIP Library",
            description:
                "Developed and published the MKYZ pip library to simplify machine learning tasks, making it accessible through pip install mkyz. This library is designed for both supervised and unsupervised learning and provides a comprehensive suite for data preprocessing, training, and visualization.",
            demoLink: "",
          },
          {
            title: "AILAYZER: AI-Powered Time Series Analysis",
            description:
                "Analyzed time series data (stocks, cryptocurrencies, currencies) for future predictions. Developed a real-time multivariate time series forecasting model using LSTM encoder-decoder, attention mechanism, and transformer architecture. Integrated the model with microservices for backend processing using Flask, Go, MongoDB, and PostgreSQL. Developed the frontend using React Native Expo for real-time data visualization. Designed highly scalable applications using Docker and Kubernetes.",
            demoLink: "",
          },
          {
            title: "Auto Jump Cut Editor",
            description:
                "Designed a video editing software to automatically detect and remove silent sections in videos. Utilized RNN with PyTorch for silent section detection, leveraging torchaudio for audio processing. Integrated ffmpeg for video cutting and saving operations. Developed the user interface using PyQt5 for a seamless user experience. Implemented AI support to enhance detection accuracy and improve editing efficiency. Created a desktop application that automatically utilizes computer hardware with CUDA or DirectML for improved performance.",
            demoLink: "",
          },
          {
            title: "Image Processing and Classification",
            description:
                "Developed a pipeline to read GIF datasets using OpenCV and convert frames to black and white JPG photos. Extracted image features such as ellipticity, elongation, circularity, and more, and stored them in a pandas DataFrame. Applied PCA to reduce dimensionality and evaluated the performance of 17 different classifier models using metrics like R², accuracy, MAE, MSE, and F1 Score.",
            demoLink: "",
          },
          {
            title: "CartPole-V1 Deep Reinforcement Learning",
            description:
                "Developed and implemented various deep reinforcement learning algorithms to solve complex decision-making problems using Python. Utilized libraries like TensorFlow and OpenAI Gym to create and train models, demonstrating proficiency in state-of-the-art reinforcement learning techniques.",
            demoLink: "",
          },
          {
            title: "Hand Gesture Capturing",
            description:
                "Developed a real-time hand gesture recognition system using Python and OpenCV. Implemented machine learning algorithms to accurately detect and classify hand gestures, enhancing user interaction capabilities.",
            demoLink: "",
          },
          {
            title: "Applying Optimization Methods",
            description:
                "Developed and compared various optimization techniques, focusing on Support Vector Machines (SVM) and Neural Networks (NN), to evaluate their performance on different datasets. Analyzed the impact of different optimization algorithms on model performance.",
            demoLink: "",
          },
          {
            title: "Multi-Threaded Web Crawler",
            description:
                "Developed a multi-threaded web crawler application in C# .NET to scrape data from specified websites. Utilized WPF for building the user interface and implemented Entity Framework and SQLite for data storage and management.",
            demoLink: "",
          },
        ],
        // Certifications
        certifications_list: [
          "Foundations of Project Management - Google",
          "Machine Learning with Python - IBM",
          "High-Traffic Software Architecture - Teedo",
          "LLMOps & ML Deployment: Bring LLMs and GenAI to Production - Udemy",
          "LLMs Mastery: Complete Guide to Transformers & Generative AI - Udemy",
          "Deep Learning A-Z: Hands-On Artificial Neural Networks - Udemy",
          "Software Test Engineering: From Zero to Advanced Level - Udemy",
          "Working with Microservices in Go (Golang) - Udemy",
          "Azure DevOps: From Zero to Advanced Level - Udemy",
          "Introduction to Deep Learning with Keras - BTK Academy",
          "Machine Learning with Python - BTK Academy",
          "Data Science and Machine Learning Workshop - BTK Academy",
          "Intro to Machine Learning - Kaggle",
          "Computer Vision - Kaggle",
          "Intro to Deep Learning - Kaggle",
          "Time Series - Kaggle",
          "Intro to AI Ethics - Kaggle",
        ],
        // Social Media
        social_media_list: [
          {
            icon: "linkedin",
            title: "LinkedIn",
            subtitle: "Professional Profile",
            link: "https://linkedin.com/in/mmustafa-kapici",
            handle: "mmustafa-kapici",
          },
          {
            icon: "github",
            title: "GitHub",
            subtitle: "Code Sharing",
            link: "https://github.com/mmustafakapici",
            handle: "mmustafakapici",
          },
          {
            icon: "kaggle",
            title: "Kaggle",
            subtitle: "Data Science Projects",
            link: "https://kaggle.com/mustafakapici",
            handle: "mustafakapici",
          },
          {
            icon: "website",
            title: "Personal Website",
            subtitle: "Portfolio and Blog",
            link: "https://mustafakapici.software",
            handle: "mustafakapici.software",
          },
        ],
        // Contact Form
        contact_form: {
          name: "Name",
          email: "Email",
          subject: "Subject",
          message: "Message",
          send: "Send",
          message_sent: "Your message has been sent!",
        },
        // Footer
        
      },
    },
    tr: {
      translation: {
        sections: "Bölümler",
        resume: "Özgeçmiş",
        about: "Hakkımda",
        skills: "Yetenekler",
        experience: "Deneyim",
        projects: "Projeler",
        certifications: "Sertifikalar",
        social: "Sosyal Medya",
        contact: "İletişim",
        blog: "Blog",
        junior_software_engineer: "Bilgisayar Mühendisi",
        loading: "Yükleniyor...",
        about_text:
            "Ben tüm aşamalarında ileri düzeyde yazılım geliştirme bilgisine sahip bir Bilgisayar ve Yazılım Mühendisliği öğrencisiyim. Uzmanlığım Makine Öğrenmesi, Derin Öğrenme, Doğal Dil İşleme, Bilgisayar Görüşü ve Görüntü İşleme alanlarındadır.",
        send: "Gönder",
        message_sent: "Mesajınız gönderildi!",
        name: "Adınız",
        email: "E-posta",
        subject: "Konu",
        message: "Mesajınız",
        footer_text:
            "Bu portföy, kullanıcı dostu ve erişilebilir bir deneyim sunmak için tasarlanmıştır.",
        all_rights_reserved: "Tüm hakları saklıdır.",
        // Skills
        skills_list: [
          {
            name: "TensorFlow",
            description:
                "Derin öğrenme modelleri geliştirmek için TensorFlow kullanıyorum.",
          },
          {
            name: "PyTorch",
            description:
                "PyTorch ile derin öğrenme araştırmaları ve projeleri yapıyorum.",
          },
          {
            name: "Makine Öğrenmesi",
            description:
                "Makine öğrenmesi algoritmaları ve uygulamalarında deneyimliyim.",
          },
          {
            name: "Derin Öğrenme",
            description: "Derin öğrenme modelleri tasarlıyor ve eğitiyorum.",
          },
          {
            name: "Bilgisayar Görüşü",
            description: "Bilgisayar görüşü alanında projeler geliştiriyorum.",
          },
          {
            name: "Görüntü İşleme",
            description:
                "Görüntü işleme teknikleri ve algoritmalarında uzmanım.",
          },
          {
            name: "Python",
            description:
                "Veri analizi ve yapay zeka projelerinde Python kullanıyorum.",
          },
          {
            name: "Doğal Dil İşleme",
            description: "Doğal dil işleme projelerinde çalışıyorum.",
          },
          {
            name: "Veri Analizi",
            description:
                "Anlamlı içgörüler elde etmek için veri analizi yapıyorum.",
          },
          {
            name: "C# .NET",
            description:
                "C# ve .NET Framework ile uygulama geliştirme deneyimim var.",
          },
          {
            name: "Go",
            description:
                "Go ile yüksek performanslı uygulamalar geliştiriyorum.",
          },
          {
            name: "QA Yazılım Testi",
            description:
                "Yazılım testi ve kalite güvencesi konusunda deneyimliyim.",
          },
          {
            name: "Backend Geliştirme",
            description: "Sağlam backend sistemleri ve API'ler geliştiriyorum.",
          },
          {
            name: "Yazılım Mimari Tasarımı",
            description:
                "Ölçeklenebilir ve verimli yazılım mimarileri tasarlıyorum.",
          },
          {
            name: "DevOps",
            description: "DevOps süreçlerinde ve araçlarında deneyimliyim.",
          },
          {
            name: "Frontend Geliştirme",
            description:
                "Modern framework'lerle etkileşimli kullanıcı arayüzleri oluşturuyorum.",
          },
        ],
        // Experience
        experience_list: [
          {
            title:
                "Bilgisayar Görüşü Stajyeri - TÜBİTAK Uzay Teknolojileri Araştırma Enstitüsü",
            date: "Temmuz 2024 – Eylül 2024",
            description:
                "Astronomik nesne tespiti için PSF analizi üzerine uzmanlaşmış bir sistem geliştirdim. Özelleştirilmiş Faster R-CNN modeli ve Hough çizgi tespiti kullanarak yıldız ve galaksilerin yüksek doğrulukla tespitini sağladım. PyTorch'un DDP özelliği ile dağıtık eğitim gerçekleştirdim ve SEP ile Photutils gibi araçları entegre ettim.",
          },
          {
            title: "Stajyer - Kardelen Yazılım, Mersin",
            date: "Temmuz 2023 – Ağustos 2023",
            description:
                "Entity Framework ve MSSQL Server üzerinde çalışan bir yazılım ekibinin uygulama modülü geliştirmesine katkıda bulundum.",
          },
        ],
        // Projects
        projects_list: [
          {
            title: "Astronomik Nesne Tespiti için PSF Analizi",
            description:
                "Astronomik görüntülerdeki yıldız ve galaksileri tespit etmek için özelleştirilmiş Faster R-CNN modeli geliştirdim. Bu proje, FITS görüntü verilerinde yıldızlar, galaksiler ve diğer gök cisimlerinin tespiti için özel teknikler içeriyor.",
            demoLink: "",
          },
          {
            title: "MKYZ: Makine Öğrenmesi PIP Kütüphanesi",
            description:
                "Makine öğrenmesi görevlerini basitleştirmek için MKYZ pip kütüphanesini geliştirdim ve yayınladım. Bu kütüphane, denetimli ve denetimsiz öğrenme için tasarlanmıştır ve veri ön işleme, eğitim ve görselleştirme için kapsamlı bir paket sunar.",
            demoLink: "",
          },
          {
            title: "AILAYZER: AI Destekli Zaman Serisi Analizi",
            description:
                "Geleceğe yönelik tahminler için zaman serisi verilerini (hisse senetleri, kripto paralar, döviz kurları) analiz ettim. LSTM encoder-decoder, dikkat mekanizması ve transformer mimarisi kullanarak gerçek zamanlı çok değişkenli zaman serisi tahmin modeli geliştirdim. Modeli, Flask, Go, MongoDB ve PostgreSQL kullanarak mikro servislerle backend işlemeye entegre ettim. Gerçek zamanlı veri görselleştirmesi için React Native Expo kullanarak frontend geliştirdim. Docker ve Kubernetes kullanarak yüksek ölçeklenebilir uygulamalar tasarladım.",
            demoLink: "",
          },
          {
            title: "Otomatik Jump Cut Editörü",
            description:
                "Videolardaki sessiz bölümleri otomatik olarak tespit edip kaldıran bir video düzenleme yazılımı tasarladım. Torchaudio kullanarak ses işlemede RNN ve PyTorch ile sessiz bölüm tespiti gerçekleştirdim. Video kesme ve kaydetme işlemleri için ffmpeg entegre ettim. PyQt5 kullanarak kullanıcı dostu bir arayüz geliştirdim. Tespit doğruluğunu artırmak ve düzenleme verimliliğini geliştirmek için yapay zeka desteği uyguladım. CUDA veya DirectML ile bilgisayar donanımını otomatik olarak kullanan bir masaüstü uygulaması oluşturdum.",
            demoLink: "",
          },
          {
            title: "Görüntü İşleme ve Sınıflandırma",
            description:
                "OpenCV kullanarak GIF veri setlerini okuyup kareleri siyah-beyaz JPG fotoğraflara dönüştüren bir işlem hattı geliştirdim. Eliptiklik, uzama, dairesellik gibi görüntü özelliklerini çıkarıp pandas DataFrame'e kaydettim. PCA uygulayarak boyut indirgeme yaptım ve 17 farklı sınıflandırıcı modelin performansını R², doğruluk, MAE, MSE ve F1 Skoru gibi metriklerle değerlendirdim.",
            demoLink: "",
          },
          {
            title: "CartPole-V1 Derin Pekiştirmeli Öğrenme",
            description:
                "Python kullanarak karmaşık karar verme problemlerini çözmek için çeşitli derin pekiştirmeli öğrenme algoritmaları geliştirdim ve uyguladım. TensorFlow ve OpenAI Gym gibi popüler kütüphaneleri kullanarak modeller oluşturup eğittim.",
            demoLink: "",
          },
          {
            title: "El Hareketi Yakalama",
            description:
                "Python ve OpenCV kullanarak gerçek zamanlı el hareketi tanıma sistemi geliştirdim. Makine öğrenmesi algoritmaları uygulayarak el hareketlerini doğru bir şekilde tespit edip sınıflandırdım.",
            demoLink: "",
          },
          {
            title: "Optimizasyon Yöntemlerinin Uygulanması",
            description:
                "Destek Vektör Makineleri (SVM) ve Sinir Ağları (NN) üzerine odaklanarak çeşitli optimizasyon teknikleri geliştirdim ve karşılaştırdım. Farklı veri setleri üzerinde modellerin performansını analiz ettim.",
            demoLink: "",
          },
          {
            title: "Çok İş Parçacıklı Web Tarayıcısı",
            description:
                "Belirtilen web sitelerinden veri toplamak için C# .NET ile çok iş parçacıklı bir web tarayıcısı uygulaması geliştirdim. Kullanıcı arayüzü için WPF kullandım ve veri depolama ve yönetimi için Entity Framework ile SQLite entegre ettim.",
            demoLink: "",
          },
        ],
        // Certifications
        certifications_list: [
          "Foundations of Project Management - Google",
          "Machine Learning with Python - IBM",
          "Yüksek Trafikli Yazılım Mimarisi - Teedo",
          "LLMOps & ML Deployment: Bring LLMs and GenAI to Production - Udemy",
          "LLMs Mastery: Complete Guide to Transformers & Generative AI - Udemy",
          "Derin Öğrenme A-Z: Python ile Derin Öğrenme - Udemy",
          "Yazılım Test Uzmanlığı Eğitimi: Sıfırdan İleri Seviye - Udemy",
          "Working with Microservices in Go (Golang) - Udemy",
          "Azure DevOps: Sıfırdan İleri Seviye - Udemy",
          "Keras ile Derin Öğrenmeye Giriş - BTK Akademi",
          "Python ile Makine Öğrenmesi - BTK Akademi",
          "Veri Bilimi ve Makine Öğrenmesi Atölyesi - BTK Akademi",
          "Intro to Machine Learning - Kaggle",
          "Computer Vision - Kaggle",
          "Intro to Deep Learning - Kaggle",
          "Time Series - Kaggle",
          "Intro to AI Ethics - Kaggle",
        ],
        // Social Media
        social_media_list: [
          {
            icon: "linkedin",
            title: "LinkedIn",
            subtitle: "Profesyonel Profil",
            link: "https://linkedin.com/in/mmustafa-kapici",
            handle: "mmustafa-kapici",
          },
          {
            icon: "github",
            title: "GitHub",
            subtitle: "Kod Paylaşımları",
            link: "https://github.com/mmustafakapici",
            handle: "mmustafakapici",
          },
          {
            icon: "kaggle",
            title: "Kaggle",
            subtitle: "Veri Bilimi Projeleri",
            link: "https://kaggle.com/mustafakapici",
            handle: "mustafakapici",
          },
          {
            icon: "website",
            title: "Kişisel Web Sitesi",
            subtitle: "Portföy ve Blog",
            link: "https://mustafakapici.software",
            handle: "mustafakapici.software",
          },
        ],
        // Contact Form
        contact_form: {
          name: "Adınız",
          email: "E-posta",
          subject: "Konu",
          message: "Mesajınız",
          send: "Gönder",
          message_sent: "Mesajınız gönderildi!",
        },
        
      },
    },
  },
  lng: "tr", // Default language
  fallbackLng: "tr",
  interpolation: {
    escapeValue: false,
  },
});

// Define the interface for Projects
interface Project {
  title: string;
  description: string;
  demoLink?: string;
}

// Define the interface for Form Data
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function TechPortfolio() {
  // === Existing State and Effects ===
  const [currentWord, setCurrentWord] = useState(0);
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Dropdown menu state
  const [darkMode, setDarkMode] = useState(false); // Dark/Light mode state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); // For case studies
  const { t } = useTranslation();

  const words = useMemo(
      () => [
        { text: t("Machine Learning"), color: "text-yellow-400" },
        { text: t("Deep Learning"), color: "text-green-400" },
        { text: t("Computer Vision"), color: "text-blue-400" },
        { text: t("Image Processing"), color: "text-red-400" },
        { text: t("Pattern Recognition"), color: "text-purple-400" },
      ],
      [t]
  );

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const wordPause = 1000;

    const currentFullText = words[currentWord].text;
    let timeout: NodeJS.Timeout;

    if (!isDeleting && typewriterText !== currentFullText) {
      timeout = setTimeout(() => {
        setTypewriterText(currentFullText.slice(0, typewriterText.length + 1));
      }, typeSpeed);
    } else if (!isDeleting && typewriterText === currentFullText) {
      timeout = setTimeout(() => setIsDeleting(true), wordPause);
    } else if (isDeleting && typewriterText !== "") {
      timeout = setTimeout(() => {
        setTypewriterText(currentFullText.slice(0, typewriterText.length - 1));
      }, deleteSpeed);
    } else if (isDeleting && typewriterText === "") {
      setIsDeleting(false);
      setCurrentWord((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [typewriterText, isDeleting, currentWord, words]);

  // === Animations ===
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  // === Refs and Controls for Sections ===
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const certificationsRef = useRef(null);
  const socialRef = useRef(null);
  const contactRef = useRef(null);
  const blogRef = useRef(null);
  const achievementsRef = useRef(null);
  const newsletterRef = useRef(null);
  const testimonialsRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true });
  const skillsInView = useInView(skillsRef, { once: true });
  const experienceInView = useInView(experienceRef, { once: true });
  const projectsInView = useInView(projectsRef, { once: true });
  const certificationsInView = useInView(certificationsRef, { once: true });
  const socialInView = useInView(socialRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });
  const blogInView = useInView(blogRef, { once: true });
  const achievementsInView = useInView(achievementsRef, { once: true });
  const newsletterInView = useInView(newsletterRef, { once: true });
  const testimonialsInView = useInView(testimonialsRef, { once: true });

  const aboutControls = useAnimation();
  const skillsControls = useAnimation();
  const experienceControls = useAnimation();
  const projectsControls = useAnimation();
  const certificationsControls = useAnimation();
  const socialControls = useAnimation();
  const contactControls = useAnimation();
  const blogControls = useAnimation();
  const achievementsControls = useAnimation();
  const newsletterControls = useAnimation();
  const testimonialsControls = useAnimation();

  useEffect(() => {
    if (aboutInView) {
      aboutControls.start("visible");
    }
    if (skillsInView) {
      skillsControls.start("visible");
    }
    if (experienceInView) {
      experienceControls.start("visible");
    }
    if (projectsInView) {
      projectsControls.start("visible");
    }
    if (certificationsInView) {
      certificationsControls.start("visible");
    }
    if (socialInView) {
      socialControls.start("visible");
    }
    if (contactInView) {
      contactControls.start("visible");
    }
    if (blogInView) {
      blogControls.start("visible");
    }
    if (achievementsInView) {
      achievementsControls.start("visible");
    }
    if (newsletterInView) {
      newsletterControls.start("visible");
    }
    if (testimonialsInView) {
      testimonialsControls.start("visible");
    }
  }, [
    aboutInView,
    aboutControls,
    skillsInView,
    skillsControls,
    experienceInView,
    experienceControls,
    projectsInView,
    projectsControls,
    certificationsInView,
    certificationsControls,
    socialInView,
    socialControls,
    contactInView,
    contactControls,
    blogInView,
    blogControls,
    achievementsInView,
    achievementsControls,
    newsletterInView,
    newsletterControls,
    testimonialsInView,
    testimonialsControls,
  ]);

  // === Scroll Progress Indicator ===
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    setScrollProgress((currentScroll / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // === Dynamic Theme Based on Time ===
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 18 || hour < 6) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  // Update the HTML class based on darkMode state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // === Contact Form ===
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Handle form submission, e.g., using Formspree or your own backend
    console.log(data);
    reset();
  };


  // === Resume Download ===
  const resumeUrl = "/resume.pdf"; // Ensure resume.pdf is placed in the public directory

  // === Skills (Updated Data) ===
  const skills = t("skills_list", { returnObjects: true }) as Array<unknown>;

  // === Projects (Updated Data) ===
  const projects: Project[] = t("projects_list", { returnObjects: true });

  // === Certifications (Updated Data) ===
  const certifications = t("certifications_list", {
    returnObjects: true,
  }) as Array<string>;

  // === Social Media (Updated Data) ===
  const socialMedia = t("social_media_list", {
    returnObjects: true,
  }) as Array<unknown>;

  return (
      <div className="min-h-screen font-mono relative bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
        {/* Animated Particles Background */}
       
        {/* Scroll Progress Indicator */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
          <div
              className="h-full bg-blue-500"
              style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

        {/* Loading Screen */}
        <LoadingScreen />

        {/* Header */}
        <header className="p-6 flex justify-between items-center relative z-10">
          <motion.h1
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
          >
            Mustafa KAPICI
          </motion.h1>

          {/* Dropdown Menu for Sections */}
          <div className="relative">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-1 focus:outline-none"
                aria-haspopup="true"
                aria-expanded={isMenuOpen}
                aria-label="Toggle Sections Menu"
            >
              <span className="hidden md:inline">{t("sections")}</span>
              <ChevronDown
                  size={20}
                  className={`transform transition-transform ${
                      isMenuOpen ? "rotate-180" : "rotate-0"
                  }`}
              />
            </button>
            {isMenuOpen && (
                <motion.div
                    className="absolute right-0 mt-2 w-48 bg-gray-800 dark:bg-gray-200 rounded-md shadow-lg z-20"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                >
                  <ul className="py-1">
                    {[
                      { href: "#about", label: t("about") },
                      { href: "#skills", label: t("skills") },
                      { href: "#experience", label: t("experience") },
                      { href: "#projects", label: t("projects") },
                      { href: "#certifications", label: t("certifications") },
                      { href: "#social", label: t("social") },
                      { href: "#contact", label: t("contact") },
                      // { href: "#blog", label: t("blog") },
                    ].map((item) => (
                        <li key={item.href}>
                          <a
                              href={item.href}
                              className="block px-4 py-2 text-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-300"
                              onClick={() => setIsMenuOpen(false)} // Close menu on click
                          >
                            {item.label}
                          </a>
                        </li>
                    ))}
                  </ul>
                </motion.div>
            )}
          </div>

          {/* Controls: Language Switcher, Resume Button, Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-1">
              <Globe size={20} />
              <select
                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                  className="bg-gray-700 text-white p-1 rounded"
                  aria-label="Language Switcher"
                  value={i18n.language}
              >
                <option value="tr">TR</option>
                <option value="en">EN</option>
              </select>
            </div>

            {/* Resume Download Button */}
            <a
                href={resumeUrl}
                download
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-400 transition-colors"
            >
              {t("resume")}
            </a>

            {/* Dark/Light Mode Toggle */}
            <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle Dark Mode"
                className="focus:outline-none"
            >
              {darkMode ? (
                  <Sun size={20} className="text-yellow-400" />
              ) : (
                  <Moon size={20} className="text-gray-800" />
              )}
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-12 relative z-10">
          {/* Hero Section */}
          <section id="hero" className="mb-16 text-center">
            <motion.h2
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
              {t("junior_software_engineer")}
            </motion.h2>
            <motion.div
                className="text-3xl font-semibold h-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
            <span className={`${words[currentWord].color}`}>
              {typewriterText}
              <span className="animate-blink">|</span>
            </span>
            </motion.div>
          </section>

          {/* About Section */}
          <motion.section
              id="about"
              className="mb-16"
              ref={aboutRef}
              variants={sectionVariants}
              initial="hidden"
              animate={aboutControls}
              transition={{ duration: 0.6 }}
          >
            <motion.h2
                className="text-2xl font-semibold mb-4"
                variants={sectionVariants}
            >
              {t("about")}
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={aboutControls}
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("about_text")}
            </motion.p>
          </motion.section>

          {/* Skills Section with Interactive Visualization */}
          <motion.section
              id="skills"
              className="mb-16"
              ref={skillsRef}
              variants={sectionVariants}
              initial="hidden"
              animate={skillsControls}
              transition={{ duration: 0.6 }}
          >
            <motion.h2
                className="text-2xl font-semibold mb-8 text-center"
                variants={sectionVariants}
            >
              {t("skills")}
            </motion.h2>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={skillsControls}
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
              {skills.map((skill: unknown, index: number) => (
                  <motion.div
                      key={index}
                      className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex flex-col items-center"
                      variants={cardVariants}
                  >
                    <div className="mb-4">
                      {/* Icon rendering based on skill name */}
                      {skill.name === "TensorFlow" && <SiTensorflow size={30} />}
                      {skill.name === "PyTorch" && <SiPytorch size={30} />}
                      {skill.name === "Makine Öğrenmesi" && <FaPython size={30} />}
                      {skill.name === "Machine Learning" && <FaPython size={30} />}
                      {skill.name === "Derin Öğrenme" && <FaPython size={30} />}
                      {skill.name === "Deep Learning" && <FaPython size={30} />}
                      {skill.name === "Bilgisayar Görüşü" && <SiOpencv size={30} />}
                      {skill.name === "Computer Vision" && <SiOpencv size={30} />}
                      {skill.name === "Görüntü İşleme" && <SiNumpy size={30} />}
                      {skill.name === "Image Processing" && <SiNumpy size={30} />}
                      {skill.name === "Python" && <FaPython size={30} />}
                      {skill.name === "Doğal Dil İşleme" && <FaPython size={30} />}
                      {skill.name === "Natural Language Processing" && (
                          <FaPython size={30} />
                      )}
                      {skill.name === "Data Analysis" && <FaChartLine size={30} />}
                      {skill.name === "Veri Analizi" && <FaChartLine size={30} />}
                      {skill.name === "C# .NET" && <SiCsharp size={30} />}
                      {skill.name === "Go" && <SiGoland size={30} />}
                      {skill.name === "QA Software Testing" && <FaBug size={30} />}
                      {skill.name === "QA Yazılım Testi" && <FaBug size={30} />}
                      {skill.name === "Backend Development" && (
                          <FaServer size={30} />
                      )}
                      {skill.name === "Backend Geliştirme" && (
                          <FaServer size={30} />
                      )}
                      {skill.name === "Software Architecture Design" && (
                          <FaProjectDiagram size={30} />
                      )}
                      {skill.name === "Yazılım Mimari Tasarımı" && (
                          <FaProjectDiagram size={30} />
                      )}
                      {skill.name === "DevOps" && <SiAzuredevops size={30} />}
                      {skill.name === "Frontend Development" && (
                          <FaHtml5 size={30} />
                      )}
                      {skill.name === "Frontend Geliştirme" && (
                          <FaHtml5 size={30} />
                      )}
                      {/* Add more icons as needed */}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">
                      {skill.name}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-center">
                      {skill.description}
                    </p>
                  </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
              id="experience"
              className="mb-16"
              ref={experienceRef}
              variants={sectionVariants}
              initial="hidden"
              animate={experienceControls}
              transition={{ duration: 0.6 }}
          >
            <motion.h2
                className="text-2xl font-semibold mb-4"
                variants={sectionVariants}
            >
              {t("experience")}
            </motion.h2>
            <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={experienceControls}
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("experience_list", { returnObjects: true }).map(
                  (exp: unknown, index: number) => (
                      <motion.div
                          key={index}
                          className="border border-gray-700 p-4 rounded-lg"
                          variants={sectionVariants}
                      >
                        <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                        <p className="text-sm text-gray-400">{exp.date}</p>
                        <p>{exp.description}</p>
                      </motion.div>
                  )
              )}
            </motion.div>
          </motion.section>

          {/* Projects Section with Live Demos */}
          <motion.section
              id="projects"
              className="mb-16"
              ref={projectsRef}
              variants={sectionVariants}
              initial="hidden"
              animate={projectsControls}
              transition={{ duration: 0.6 }}
          >
            <motion.h2
                className="text-2xl font-semibold mb-4"
                variants={sectionVariants}
            >
              {t("projects")}
            </motion.h2>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={projectsControls}
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
              {projects.map((project, index) => (
                  <motion.div
                      key={index}
                      className="border border-gray-700 p-4 rounded-lg cursor-pointer"
                      variants={cardVariants}
                      whileHover="hover"
                      onClick={() => setSelectedProject(project)}
                  >
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p>{project.description}</p>
                    {project.demoLink && (
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline mt-2 block"
                        >
                          {t("go_to_live_demo") || "Go to Live Demo"}
                        </a>
                    )}
                  </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Case Studies Modal */}
          {selectedProject && (
              <CaseStudyModal
                  project={selectedProject}
                  onClose={() => setSelectedProject(null)}
              />
          )}

          {/* Certifications Section */}
          <motion.section
              id="certifications"
              className="mb-16"
              ref={certificationsRef}
              variants={sectionVariants}
              initial="hidden"
              animate={certificationsControls}
              transition={{ duration: 0.6 }}
          >
            <motion.h2
                className="text-2xl font-semibold mb-4"
                variants={sectionVariants}
            >
              {t("certifications")}
            </motion.h2>
            <motion.ul
                className="list-disc list-inside"
                initial={{ opacity: 0, y: 20 }}
                animate={certificationsControls}
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
              {certifications.map((cert: string, index: number) => (
                  <li key={index}>{cert}</li>
              ))}
            </motion.ul>
          </motion.section>

          {/* Social Media Section */}
          <motion.section
              id="social"
              className="mb-16"
              ref={socialRef}
              variants={sectionVariants}
              initial="hidden"
              animate={socialControls}
              transition={{ duration: 0.6 }}
          >
            <motion.h2
                className="text-2xl font-semibold mb-4"
                variants={sectionVariants}
            >
              {t("social")}
            </motion.h2>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={socialControls}
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
              {socialMedia.map((social: unknown, index: number) => (
                  <motion.div
                      key={index}
                      className="border border-gray-700 p-4 rounded-lg flex items-center space-x-4"
                      variants={cardVariants}
                      whileHover="hover"
                  >
                    {social.icon === "linkedin" && (
                        <Linkedin size={24} className="text-blue-500" />
                    )}
                    {social.icon === "github" && <Github size={24} />}
                    {social.icon === "kaggle" && (
                        <FaPython size={24} className="text-blue-500" />
                    )}
                    {social.icon === "website" && (
                        <Globe size={24} className="text-green-500" />
                    )}
                    <div>
                      <h3 className="text-xl font-semibold">{social.title}</h3>
                      <p className="text-sm text-gray-400">{social.subtitle}</p>
                      <a
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                      >
                        {social.handle}
                      </a>
                    </div>
                  </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Contact Section with Form */}
          <motion.section
              id="contact"
              ref={contactRef}
              variants={sectionVariants}
              initial="hidden"
              animate={contactControls}
              transition={{ duration: 0.6 }}
          >
            <motion.h2
                className="text-2xl font-semibold mb-4"
                variants={sectionVariants}
            >
              {t("contact")}
            </motion.h2>
            <motion.form
                className="flex flex-col space-y-4"
                onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 0, y: 20 }}
                animate={contactControls}
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
              <input
                  type="text"
                  placeholder={t("contact_form.name")}
                  required
                  {...register("name", { required: true })}
                  className="p-2 bg-gray-800 text-white rounded"
              />
              <input
                  type="email"
                  placeholder={t("contact_form.email")}
                  required
                  {...register("email", { required: true })}
                  className="p-2 bg-gray-800 text-white rounded"
              />
              <input
                  type="text"
                  placeholder={t("contact_form.subject")}
                  required
                  {...register("subject", { required: true })}
                  className="p-2 bg-gray-800 text-white rounded"
              />
              <textarea
                  placeholder={t("contact_form.message")}
                  required
                  {...register("message", { required: true })}
                  className="p-2 bg-gray-800 text-white rounded h-32"
              ></textarea>
              <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition-colors"
              >
                {t("contact_form.send")}
              </button>
              {isSubmitSuccessful && (
                  <p className="mt-2 text-green-500">
                    {t("contact_form.message_sent")}
                  </p>
              )}
            </motion.form>
          </motion.section>
        </main>

        {/* Footer */}
        <footer className="text-center py-6 text-sm bg-gray-900 relative z-10">
          <div className="flex justify-center space-x-4 mb-4">
            {[
              {
                href: "https://github.com/mmustafakapici",
                icon: <Github size={24} />,
              },
              {
                href: "https://linkedin.com/in/mmustafa-kapici",
                icon: <Linkedin size={24} />,
              },
              {
                href: "mailto:mustafakapici@example.com",
                icon: <Mail size={24} />,
              },
            ].map((social, index) => (
                <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                >
                  {social.icon}
                </a>
            ))}
          </div>
          <p>
            &copy; {new Date().getFullYear()} Mustafa KAPICI.{" "}
            {t("all_rights_reserved")}
          </p>
          <p className="mt-2">{t("footer_text")}</p>
        </footer>
      </div>
  );
}

// === Loading Screen Component ===
function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <motion.div
            className="text-white text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
          {t("loading")}
        </motion.div>
      </div>
  );
}

// === Case Study Modal Component ===
function CaseStudyModal({
                          project,
                          onClose,
                        }: {
  project: Project;
  onClose: () => void;
}) {
  const { t } = useTranslation();

  return (
      <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
      >
        <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
          <button
              onClick={onClose}
              className="absolute top-2 right-2 focus:outline-none"
              aria-label="Close Modal"
          >
            <X size={20} />
          </button>
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <p className="mb-2">{project.description}</p>
          {/* Add more details as needed */}
          {project.demoLink && (
              <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
              >
                {t("go_to_live_demo") || "Go to Live Demo"}
              </a>
          )}
        </motion.div>
      </div>
  );
}