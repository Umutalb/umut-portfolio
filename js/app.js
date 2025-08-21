// Portfolio App - AlpineJS Application
function portfolioApp() {
    return {
        // State
        darkMode: false,
        language: 'tr',
        mobileMenuOpen: false,
        featuredProjects: [],
        scrollProgress: 0,
        // Preloader state
        preloaderVisible: true,
        preloaderProgress: 0,
        spinnerChar: '|',
        contactForm: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        formSubmitting: false,
        formStatus: { type: '', message: '' },
        certificateModalOpen: false,

        // Translations
        translations: {
            tr: {
                nav: {
                    home: 'Ana Sayfa',
                    about: 'Hakkımda',
                    projects: 'Projeler',
                    certificates: 'Sertifikalarım',
                    contact: 'İletişim'
                },
                hero: {
                    title: 'Backend Developer & Bilgisayar Mühendisliği Öğrencisi',
                    description: 'C# ASP.NET Core ve RESTful servisler konusunda uzmanlaşan, ölçeklenebilir ve güvenilir backend sistemleri geliştiren junior developer.',
                    viewProjects: 'Projelerimi İncele',
                    contact: 'İletişime Geç'
                },
                about: {
                    title: 'Hakkımda',
                    subtitle: 'Tutkulu bir backend developer ve öğrenci',
                    whoAmI: 'Ben Kimim?',
                    description: 'Bilgisayar Mühendisliği 3. sınıf öğrencisiyim. Yazılım geliştirme yolculuğumda özellikle Backend Development ve RESTful servisler alanına odaklanıyorum. Üniversite sürecinde ekip arkadaşlarımla geliştirdiğimiz projelerde hem Scrum Master olarak takım koordinasyonunu üstlendim hem de backend geliştirme, API tasarımı ve sistem entegrasyonu tarafında aktif rol aldım.',
                    description2: '2027\'de mezun olmayı hedefliyorum. Kariyer hedefim, yüksek trafikli sistemlerde uzmanlaşmış, clean architecture prensiplerini benimseyen bir Senior Backend Developer olarak sektöre değer katmak.',
                    education: 'Eğitim',
                    educationDetail: 'Bilgisayar Mühendisliği 3. Sınıf Öğrencisi',
                    experience: 'Deneyim',
                    experienceDetail: 'Backend Development, API Tasarımı, Scrum Master, Takım Koordinasyonu',
                    skills: 'Yetenekler',
                    backend: 'Arka-Uç',
                    database: 'Veritabanı',
                    architecture: 'Mimari',
                    tools: 'Araçlar',
                    certificates: 'Sertifikalarım',
                    certificateDescription: 'Yazılım geliştirme yetkinliklerimi gösteren sertifika',
                    viewOnline: 'Online Görüntüle',
                    viewOnHackerRank: 'HackerRank\'te Görüntüle'
                },
                certificates: {
                    title: 'Sertifikalarım',
                    description: 'Yazılım geliştirme yetkinliklerimi gösteren sertifikalar',
                    hackerrank: {
                        title: 'HackerRank Certificate',
                        description: 'C# (Basic) sertifikası - Yazılım geliştirme yetkinliklerimi gösteren sertifika',
                        viewOnline: 'Online Görüntüle',
                        modalTitle: 'HackerRank Certificate (Önizleme)'
                    }
                },
                developerIdentity: {
                    title: 'Geliştirici Kimliği',
                    subtitle: 'Kendimi kod ile böyle tanımlıyorum'
                },
                projects: {
                    title: 'Projelerim',
                    subtitle: 'Öne çıkan projelerim ve geliştirdiğim uygulamalar',
                    featuredRepos: 'Öne Çıkan Projeler',
                    viewRepo: 'Depoyu Gör',
                    viewAll: 'Tümünü GitHub\'da Gör',
                    // Project descriptions
                    datingApp: '🔥 Devam eden çalışma\n\n• Tinder benzeri arkadaşlık uygulaması\n• ASP.NET Core Web API\n• Firebase entegrasyonu\n• Gerçek zamanlı özellikler',
                    fizzBuzz: '🧮 Clean Code Örneği\n\n• 1\'den N\'e kadar sayı üretimi\n• 3\'e bölünende "Fizz", 5\'e bölünende "Buzz"\n• Her ikisinde "FizzBuzz" yazdırma\n• Basit ve okunabilir Clean Code örneği',
                    numberGame: '🎮 Interactive Game\n\n• Rastgele sayı üretimi (1-100)\n• Giriş doğrulama ve izleme\n• İstediğiniz zaman çıkma özelliği\n• Tekrar oyna özelliği',
                    primeChecker: '⚡ Optimize Edilmiş Algoritma\n\n• Algoritma optimizasyonu (√n karmaşıklığı)\n• Matematiksel düşünme\n• Performans bilinci\n• Mülakat favorisi',
                    palindrome: '📝 Dize İşleme\n\n• Manuel ters algoritma\n• Büyük/küçük harf duyarlılığı olmayan kontrol\n• İstediğiniz zaman çıkma özelliği\n• Kullanıcı dostu arayüz'
                },
                contact: {
                    title: 'İletişim',
                    subtitle: 'Benimle iletişime geçin',
                    getInTouch: 'İletişime Geçin',
                    description: 'Staj ve part-time fırsatları için açığım. Yeni projelerde yer almak için sabırsızlanıyorum! Benimle iletişime geçmekten çekinmeyin.',
                    sendMessage: 'Mesaj Gönder',
                    name: 'İsim',
                    namePlaceholder: 'Adınızı girin',
                    email: 'E-posta',
                    emailPlaceholder: 'E-posta adresinizi girin',
                    subject: 'Konu',
                    subjectPlaceholder: 'Mesaj konusunu girin',
                    message: 'Mesaj',
                    messagePlaceholder: 'Mesajınızı yazın',
                    send: 'Gönder',
                    sending: 'Gönderiliyor...',
                    successMessage: 'E-posta uygulamanız açıldı. Mesajınızı göndermek için e-posta uygulamanızı kullanın.',
                    errorMessage: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
                    certificate: 'Sertifikayı Görüntüle'
                },
                footer: {
                    rights: 'Tüm hakları saklıdır.'
                }
            },
            en: {
                nav: {
                    home: 'Home',
                    about: 'About',
                    projects: 'Projects',
                    certificates: 'Certificates', 
                    contact: 'Contact'
                },
                hero: {
                    title: 'Backend Developer & Computer Engineering Student',
                    description: 'A junior developer specializing in C# ASP.NET Core and RESTful services, developing scalable and reliable backend systems.',
                    viewProjects: 'View My Projects',
                    contact: 'Get In Touch'
                },
                about: {
                    title: 'About Me',
                    subtitle: 'A passionate backend developer and student',
                    whoAmI: 'Who Am I?',
                    description: 'I am a 3rd year Computer Engineering student. In my software development journey, I focus especially on Backend Development and RESTful services. During my university period, I have taken active roles in both team coordination as a Scrum Master and backend development, API design, and system integration in projects developed with my teammates.',
                    description2: 'I aim to graduate in 2027. My career goal is to add value to the industry as a Senior Backend Developer who specializes in high-traffic systems and embraces clean architecture principles.',
                    education: 'Education',
                    educationDetail: 'Computer Engineering 3rd Year Student',
                    experience: 'Experience',
                    experienceDetail: 'Backend Development, API Design, Scrum Master, Team Coordination',
                    skills: 'Skills',
                    backend: 'Backend',
                    database: 'Database',
                    architecture: 'Architecture',
                    tools: 'Tools',
                    certificates: 'My Certificates',
                    certificateDescription: 'Certificate showcasing my software development skills',
                    viewOnline: 'View Online',
                    viewOnHackerRank: 'View on HackerRank'
                },
                certificates: {
                    title: 'My Certificates',
                    description: 'Certificates showcasing my software development skills',
                    hackerrank: {
                        title: 'HackerRank Certificate',
                        description: 'C# (Basic) certificate - showcasing my software development skills',
                        viewOnline: 'View Online',
                        modalTitle: 'HackerRank Certificate (Preview)'
                    }
                },
                developerIdentity: {
                    title: 'Developer Identity',
                    subtitle: 'This is how I define myself in code'
                },
                projects: {
                    title: 'My Projects',
                    subtitle: 'Featured projects and applications I\'ve developed',
                    featuredRepos: 'Featured Projects',
                    viewRepo: 'View Repo',
                    viewAll: 'View All on GitHub',
                    // Project descriptions
                    datingApp: '🔥 Work in Progress\n\n• Tinder-like friendship application\n• ASP.NET Core Web API\n• Firebase integration\n• Real-time features',
                    fizzBuzz: '🧮 Clean Code Example\n\n• Number generation from 1 to N\n• "Fizz" when divisible by 3, "Buzz" by 5\n• "FizzBuzz" for both\n• Simple and readable Clean Code example',
                    numberGame: '🎮 Interactive Game\n\n• Random number generation (1-100)\n• Input validation & tracking\n• Quit anytime functionality\n• Play again feature',
                    primeChecker: '⚡ Optimized Algorithm\n\n• Algorithm optimization (√n complexity)\n• Mathematical thinking\n• Performance awareness\n• Interview favorite',
                    palindrome: '📝 String Processing\n\n• Manual reverse algorithm\n• Case-insensitive checking\n• Quit anytime functionality\n• User-friendly interface'
                },
                contact: {
                    title: 'Contact',
                    subtitle: 'Get in touch with me',
                    getInTouch: 'Get In Touch',
                    description: 'I am open to internship and part-time opportunities. I\'m excited to be part of new projects! Feel free to contact me.',
                    sendMessage: 'Send Message',
                    name: 'Name',
                    namePlaceholder: 'Enter your name',
                    email: 'Email',
                    emailPlaceholder: 'Enter your email address',
                    subject: 'Subject',
                    subjectPlaceholder: 'Enter message subject',
                    message: 'Message',
                    messagePlaceholder: 'Write your message',
                    send: 'Send',
                    sending: 'Sending...',
                    successMessage: 'Your email application has been opened. Please use your email app to send the message.',
                    errorMessage: 'An error occurred. Please try again later.',
                    certificate: 'View Certificate'
                },
                footer: {
                    rights: 'All rights reserved.'
                }
            }
        },

        // Project data configuration
        projectsConfig: [
            {
                name: '❤️ DatingApp2025',
                descriptionKey: 'datingApp',
                html_url: 'https://github.com/Umutalb/TinderCloneProject',
                language: 'C#, ASP.NET Core, Firebase',
                stargazers_count: 0,
                forks_count: 0
            },
            {
                name: 'FizzBuzzApp',
                descriptionKey: 'fizzBuzz',
                html_url: 'https://github.com/Umutalb/FizzBuzzApp',
                language: 'C#',
                stargazers_count: 0,
                forks_count: 0
            },
            {
                name: 'Number-Guessing-Game',
                descriptionKey: 'numberGame',
                html_url: 'https://github.com/Umutalb/Number-Guessing-Game',
                language: 'C#',
                stargazers_count: 0,
                forks_count: 0
            },
            {
                name: 'Prime-Number-Checker',
                descriptionKey: 'primeChecker',
                html_url: 'https://github.com/Umutalb/Prime-Number-Checker',
                language: 'C#',
                stargazers_count: 0,
                forks_count: 0
            },
            {
                name: 'Palindrome-Checker',
                descriptionKey: 'palindrome',
                html_url: 'https://github.com/Umutalb/Palindrome-Checker',
                language: 'C#',
                stargazers_count: 0,
                forks_count: 0
            }
        ],

        // Initialize
        init() {
            // Start preloader immediately
            this.startPreloader();

            this.loadTheme();
            this.loadLanguage();
            this.setupSmoothScrolling();
            this.loadFeaturedProjects();
            this.setupAutoHideMobileMenu();
            this.setupScrollProgress();
        },

        // Preloader logic: brief ~0.6–0.8s terminal-like splash with spinner
        startPreloader() {
            try {
                // Prevent scroll while preloading
                document.body.style.overflow = 'hidden';
            } catch {}

            const durationMs = 600 + Math.random() * 200; // ~0.6s - 0.8s
            const start = performance.now();
            const spinner = ['|', '/', '-', '\\'];
            let spinnerIdx = 0;

            const tick = (now) => {
                const elapsed = now - start;
                const progress = Math.min(100, (elapsed / durationMs) * 100);
                this.preloaderProgress = progress;
                // update spinner roughly every 80ms
                if (elapsed - (spinnerIdx * 80) >= 80) {
                    spinnerIdx = (spinnerIdx + 1) % spinner.length;
                    this.spinnerChar = spinner[spinnerIdx];
                }

                if (progress < 100) {
                    requestAnimationFrame(tick);
                } else {
                    // Slight delay for smoothness
                    setTimeout(() => {
                        this.preloaderVisible = false;
                        try { document.body.style.overflow = 'auto'; } catch {}
                    }, 100);
                }
            };

            requestAnimationFrame(tick);
        },

        // Scroll Progress Management
        setupScrollProgress() {
            // İlk yükleme sırasında progress'i hesapla
            this.updateScrollProgress();
            
            window.addEventListener('scroll', () => {
                this.updateScrollProgress();
            });
        },

        updateScrollProgress() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            this.scrollProgress = height > 0 ? (winScroll / height) * 100 : 0;
        },

        // Theme Management
        loadTheme() {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            this.darkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
            this.updateThemeClass();
        },

        toggleTheme() {
            this.darkMode = !this.darkMode;
            this.updateThemeClass();
            localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
        },

        updateThemeClass() {
            document.documentElement.classList.toggle('dark', this.darkMode);
        },

        // Language Management
        loadLanguage() {
            const savedLanguage = localStorage.getItem('language');
            if (savedLanguage && ['tr', 'en'].includes(savedLanguage)) {
                this.language = savedLanguage;
            }
            this.updateLanguageAttribute();
        },

        toggleLanguage() {
            this.language = this.language === 'tr' ? 'en' : 'tr';
            this.updateLanguageAttribute();
            localStorage.setItem('language', this.language);
            this.loadFeaturedProjects(); // Reload projects with new language
        },

        updateLanguageAttribute() {
            document.documentElement.lang = this.language;
        },

        // Smooth Scrolling Setup
        setupSmoothScrolling() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(anchor.getAttribute('href'));
                    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
            });
        },

        // Scroll to Top
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },

        // Auto-hide mobile menu on scroll
        setupAutoHideMobileMenu() {
            window.addEventListener('scroll', () => {
                if (this.mobileMenuOpen) {
                    this.mobileMenuOpen = false;
                }
            });
        },

        // Featured Projects - Now with dynamic translations
        loadFeaturedProjects() {
            this.featuredProjects = this.projectsConfig.map(project => ({
                ...project,
                description: this.translations[this.language].projects[project.descriptionKey]
            }));
        },

        // Contact Form
        async sendMessage() {
            if (this.formSubmitting) return;
            
            this.formSubmitting = true;
            this.formStatus = { type: '', message: '' };

            try {
                // Simulate loading
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Create mailto link
                const { subject, name, email, message } = this.contactForm;
                const mailtoUrl = this.createMailtoUrl(subject, name, email, message);
                
                window.open(mailtoUrl);
                
                this.showFormSuccess();
                this.resetForm();
                
            } catch (error) {
                this.showFormError();
            } finally {
                this.formSubmitting = false;
                this.clearFormStatusAfterDelay();
            }
        },

        createMailtoUrl(subject, name, email, message) {
            const encodedSubject = encodeURIComponent(subject);
            const encodedBody = encodeURIComponent(
                `İsim: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`
            );
            return `mailto:umut.albayrakk24@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
        },

        showFormSuccess() {
            this.formStatus = {
                type: 'success',
                message: this.translations[this.language].contact.successMessage
            };
        },

        showFormError() {
            this.formStatus = {
                type: 'error',
                message: this.translations[this.language].contact.errorMessage
            };
        },

        resetForm() {
            this.contactForm = { name: '', email: '', subject: '', message: '' };
        },

        clearFormStatusAfterDelay() {
            setTimeout(() => this.formStatus = { type: '', message: '' }, 5000);
        },

        // Certificate Modal
        openCertificateModal() {
            this.certificateModalOpen = true;
            document.body.style.overflow = 'hidden';
        },

        closeCertificateModal() {
            this.certificateModalOpen = false;
            document.body.style.overflow = 'auto';
        }
    }
}
