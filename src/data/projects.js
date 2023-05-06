import portfolioImg from "../img/portfolio.jpg";
import gymsharkImg from "../img/gymshark.jpg";
import inventoryImg from "../img/inventory-app.jpg";

const projects = [
    {
        title: "Developer Portfolio",
        description: "My portfolio site",
        projectType: "Full Stack",
        imgUrl: portfolioImg,
        siteLink: "https://stevenjarrett.netlify.app/",
        codeLink: "https://github.com/Bantchee/portfolio-site",
    },
    {
        title: "Gymshark Store",
        description: "An online store selling gymshark clothing.",
        projectType: "Front End",
        imgUrl: gymsharkImg,
        siteLink: "https://bantchee.github.io/shopping-cart/",
        codeLink: "https://github.com/Bantchee/shopping-cart",
    },
    {
        title: "Grocery Inventory App",
        description: "An CRUD application for documenting foods in stores and on farms.",
        projectType: "Back End",
        imgUrl: inventoryImg,
        siteLink: "",
        codeLink: "https://github.com/Bantchee/grocery-inventory-app",
    },
];

export default projects;