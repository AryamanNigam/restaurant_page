import banner from "./assets/fernando-andrade-s6SOj6uYjXI-unsplash (1).jpg";
import one from "./assets/chantel-E2n6-GuBGYo-unsplash.jpg";
import two from "./assets/aleisha-kalina-MjuzZ5os-xI-unsplash.jpg";
import three from "./assets/yucel-moran-MNctbZ6pa5c-unsplash.jpg";
import four from "./assets/krisztian-tabori-ZQf4jzkpz1k-unsplash.jpg";

export const renderMenu = () => {
    const content = document.querySelector("#content");

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const image = document.createElement("div");
    image.className = "image";  
    image.style.gridRow = "1 / 2";
    image.style.backgroundImage = `url(${banner})`;
    image.style.backgroundSize = "cover";
    image.style.backgroundPosition = "0px -130px";
    content.appendChild(image);

    const container = document.createElement("div");
    container.style.display = "grid";
    container.style.gridTemplateRows = "1fr 4fr";
    container.style.backgroundColor = "#443c3d";
    content.appendChild(container);

    const upper = document.createElement("div");
    upper.style.display = "flex";
    upper.style.flexDirection = "column";
    upper.style.justifyContent = "center";
    upper.style.color = "#F9FAFB";
    upper.style.textAlign = "center";
    
    const top = document.createElement("div");
    top.textContent = 'Explore our exciting menu';
    top.style.fontSize = "80px";
    top.style.fontStyle = "italic";
    top.style.fontWeight = "bold";
    
    upper.appendChild(top);
    container.appendChild(upper);

    const lower = document.createElement("div");
    lower.style.padding = "15px";
    lower.style.color = "#F9FAFB";
    
    const lowerGrid = document.createElement("div");
    lowerGrid.style.display = "grid";
    lowerGrid.style.gridTemplateColumns = "500px 500px";
    lowerGrid.style.gridTemplateRows = "280px 280px";
    lowerGrid.style.gap = "30px";
    lowerGrid.style.justifyContent = "center";
    lowerGrid.style.paddingTop = "20px";

    const images = [one, two, three, four];  

    images.forEach(src => {
        const card = document.createElement("div");
        card.style.display = "flex";
        card.style.flexDirection = "column";

        const img = document.createElement("img");
        img.src = src;
        img.style.height = "260px";
        img.style.width = "100%";  
        
        const cardText = document.createElement("div");
        cardText.innerText = "This is a menu item";
        cardText.style.textAlign = "center";

        card.appendChild(img);
        card.appendChild(cardText);
        lowerGrid.appendChild(card);
    });

    lower.appendChild(lowerGrid);
    container.appendChild(lower);
};