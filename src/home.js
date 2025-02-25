import banner from "./assets/cristi-ursea-TRcTy_qdBQY-unsplash.jpg";
import one from "./assets/chantel-E2n6-GuBGYo-unsplash.jpg";
import two from "./assets/aleisha-kalina-MjuzZ5os-xI-unsplash.jpg";
import three from "./assets/yucel-moran-MNctbZ6pa5c-unsplash.jpg";
import four from "./assets/krisztian-tabori-ZQf4jzkpz1k-unsplash.jpg";

export const renderHome = () => {
    const content = document.querySelector("#content");

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const image = document.createElement("div");
    image.className = "image";  
    image.style.gridRow = "1 / 2";
    image.style.backgroundImage = `url(${banner})`;
    image.style.backgroundSize = "cover";
    image.style.backgroundPosition = "0px -190px";
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
    
    const quote = document.createElement("div");
    quote.textContent = '"The Best Tacos in New York"';
    quote.style.fontSize = "80px";
    quote.style.fontStyle = "italic";
    quote.style.fontWeight = "bold";
    
    const quotee = document.createElement("div");
    quotee.textContent = "- Some Random Chef";
    quotee.style.fontSize = "25px";
    
    upper.appendChild(quote);
    upper.appendChild(quotee);
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
        card.style.backgroundColor = "grey";
        card.style.display = "flex";
        card.style.flexDirection = "column";

        const img = document.createElement("img");
        img.src = src;
        img.style.height = "280px";
        img.style.width = "100%";  
        
        card.appendChild(img);
        lowerGrid.appendChild(card);
    });

    lower.appendChild(lowerGrid);
    container.appendChild(lower);
};