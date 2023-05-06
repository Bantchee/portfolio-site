import portfolioImg from "../img/portfolio.jpg";
import gymsharkImg from "../img/gymshark.jpg";
import inventoryImg from "../img/inventory-app.jpg";

const projects = [
    {
        title: "Developer Portfolio",
        description: "My portfolio site",
        imgUrl: portfolioImg,
        siteLink: "https://stevenjarrett.netlify.app/",
        codeLink: "https://github.com/Bantchee/portfolio-site",
    },
    {
        title: "Gymshark Store",
        description: "An online store selling gymshark clothing",
        imgUrl: gymsharkImg,
        siteLink: "https://bantchee.github.io/shopping-cart/",
        codeLink: "https://github.com/Bantchee/shopping-cart",
    },
    {
        title: "Grocery Inventory App",
        description: "An CRUD application for documenting foods in stores and on farms.",
        imgUrl: inventoryImg,
        siteLink: "",
        codeLink: "https://github.com/Bantchee/grocery-inventory-app",
    },
];

export default projects;