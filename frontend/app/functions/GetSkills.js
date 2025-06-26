export function getSkill(skillName) {
    switch (skillName) {
        case "Unity":
            return {
                href: "https://unity.com/",
                src: "/skill-icons/unity-icon.png",
                title: "Unity",
            };
        case "C#":
            return {
                href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
                src: "/skill-icons/csharp-icon.png",
                title: "C#",
            };
        case "iOS Development":
            return {
                href: "https://developer.apple.com/wwdc24/",
                src: "/skill-icons/ios-icon.png",
                title: "iOS Development",
            };
        case "Android Development":
            return {
                href: "https://play.google.com/console/about/",
                src: "/skill-icons/android-icon.jpg",
                title: "Android Development",
            };
        case "Next JS":
            return {
                href: "https://nextjs.org/",
                src: "/skill-icons/next-icon.jpg",
                title: "Next JS",
            };
        case "React JS":
            return {
                href: "https://react.dev/",
                src: "/skill-icons/react-icon.png",
                title: "React JS",
            };
        case "React Native":
            return {
                href: "https://reactnative.dev/",
                src: "/skill-icons/react-icon.png",
                title: "React Native",
            };
        case "Django":
            return {
                href: "https://www.djangoproject.com/",
                src: "/skill-icons/django-icon.svg",
                title: "Django",
            };
        case "Javascript":
            return {
                href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                src: "/skill-icons/js-icon.png",
                title: "Javascript",
                isSquare: true,
            };
        case "Python":
            return {
                href: "https://www.python.org/",
                src: "/skill-icons/python-icon.png",
                title: "Python",
            };
        case "CSS":
            return {
                href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                src: "/skill-icons/css-icon.svg",
                title: "CSS",
            };
        case "HTML":
            return {
                href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                src: "/skill-icons/html-icon.png",
                title: "HTML",
            };
        case "Java":
            return {
                href: "https://www.java.com/en/",
                src: "/skill-icons/java-icon.png",
                title: "Java",
            };
        case "C++":
            return {
                href: "https://visualstudio.microsoft.com/vs/features/cplusplus/",
                src: "/skill-icons/cpp-icon.jpg",
                title: "C++",
            };
        case "Krita":
            return {
                href: "https://krita.org/en/",
                src: "/skill-icons/krita-icon.svg",
                title: "Krita",
            };
        case "PHP":
            return {
                href: "https://www.php.net/",
                src: "/skill-icons/php-icon.svg",
                title: "PHP",
            };
        case "Firebase":
            return {
                href: "https://firebase.google.com/",
                src: "/skill-icons/firebase-icon.png",
                title: "Firebase",
            };
        case "Databases/SQL":
            return {
                href: "",
                src: "/skill-icons/database-icon.png",
                title: "Databases/SQL",
            };
        case "VS Code":
            return {
                href: "https://code.visualstudio.com/",
                src: "/skill-icons/vscode-icon.png",
                title: "VS Code",
            };
        case "MongoDB":
            return {
                href: "https://www.mongodb.com/",
                src: "/skill-icons/mongo-icon.png",
                title: "MongoDB",
            };
        case "Express JS":
            return {
                href: "https://expressjs.com/",
                src: "/skill-icons/express-icon.png",
                title: "Express JS",
            };
        case "Flask":
            return {
                href: "https://flask.palletsprojects.com/en/stable/",
                src: "/skill-icons/flask-icon.jpg",
                title: "Flask",
            };
        case "ARM":
            return {
                href: "https://www.arm.com/",
                src: "/skill-icons/arm-icon.webp",
                title: "ARM",
            };
        default:
            return {
                href: "",
                src: "/na.png",
                title: "NA",
            };
    }
}
