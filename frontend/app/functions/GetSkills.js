export function getSkill(skillName) {
  switch (skillName) {
    case "Unity":
      return {
        href: "https://unity.com/",
        src: "/unity-icon.png",
        title: "Unity",
      };
    case "C#":
      return {
        href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        src: "/csharp-icon.png",
        title: "C#",
      };
    case "iOS Development":
      return {
        href: "https://developer.apple.com/wwdc24/",
        src: "/ios-icon.png",
        title: "iOS Development",
      };
    case "Android Development":
      return {
        href: "https://play.google.com/console/about/",
        src: "/android-icon.jpg",
        title: "Android Development",
      };
    case "Next JS":
      return {
        href: "https://nextjs.org/",
        src: "/next-icon.jpg",
        title: "Next JS",
      };
    case "React JS":
      return {
        href: "https://react.dev/",
        src: "/react-icon.png",
        title: "React JS",
      };
    case "Django:":
      return {
        href: "https://www.djangoproject.com/",
        src: "/django-icon.svg",
        title: "Django",
      };
    case "Javascript":
      return {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        src: "/js-icon.png",
        title: "Javascript",
        isSquare: true,
      };
    case "Python":
      return {
        href: "https://www.python.org/",
        src: "/python-icon.png",
        title: "Python",
      };
    case "CSS":
      return {
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        src: "/css-icon.svg",
        title: "CSS",
      };
    case "HTML":
      return {
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        src: "/html-icon.png",
        title: "HTML",
      };
    case "Java":
      return {
        href: "https://www.java.com/en/",
        src: "/java-icon.png",
        title: "Java",
      };
    case "C++":
      return {
        href: "https://visualstudio.microsoft.com/vs/features/cplusplus/",
        src: "/cpp-icon.jpg",
        title: "C++",
      };
    case "Krita":
      return {
        href: "https://krita.org/en/",
        src: "/krita-icon.svg",
        title: "Krita",
      };
    case "PHP":
      return {
        href: "https://www.php.net/",
        src: "/php-icon.svg",
        title: "PHP",
      };
    case "Firebase":
      return {
        href: "https://firebase.google.com/",
        src: "/firebase-icon.png",
        title: "Firebase",
      };
    case "Databases/SQL":
      return {
        href: "",
        src: "/database-icon.png",
        title: "Databases/SQL",
      };
    case "VS Code":
      return {
        href: "https://code.visualstudio.com/",
        src: "/vscode-icon.png",
        title: "VS Code",
      };
    default:
      return {
        href: "",
        src: "/na.png",
        title: "NA",
      };
  }
}
