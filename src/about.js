import banner from "./assets/cristi-ursea-TRcTy_qdBQY-unsplash.jpg";

let string = `Welcome to The Taco Truck, a vibrant slice of Mexico nestled in the heart of New York City. We're more than just a taco joint; we're a culinary journey, a celebration of authentic flavors, and a testament to the enduring magic of the humble taco. From the bustling streets of our beloved city, we bring you a taste of sunshine, warmth, and the kind of food that makes you feel like you're home, even if you're thousands of miles away.

Our story began with a simple dream: to share the vibrant tapestry of Mexican cuisine with the discerning palates of New York. We believe that tacos are more than just a quick bite; they're a cultural ambassador, a handheld masterpiece that encapsulates centuries of tradition and culinary innovation. That's why we're committed to honoring the roots of Mexican cooking while adding our own unique New York flair.



At The Taco Truck, we believe in the power of fresh, high-quality ingredients. We source our produce from local farms whenever possible, ensuring that every bite is bursting with flavor and freshness. Our proteins are carefully selected, from succulent slow-cooked carnitas to tender grilled carne asada. We take pride in our meticulous preparation, ensuring that every taco is crafted with passion and precision.

Our menu is a carefully curated selection of classic Mexican favorites and innovative creations. We've spent countless hours perfecting our recipes, drawing inspiration from traditional family recipes and the diverse culinary landscape of Mexico. We offer a range of tacos to satisfy every craving, from the traditional street tacos with cilantro and onion to our signature creations that push the boundaries of flavor.`

export const renderAbout = () => {
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
    container.style.backgroundColor = "#443c3d";
    container.style.display = "grid";
    container.style.gridTemplateRows = "1fr 4fr";
    container.style.color = "#F9FAFB";
    content.appendChild(container);

    const upper = document.createElement("div");
    upper.style.display = "flex";
    upper.style.flexDirection = "column";
    upper.style.justifyContent = "center";
    upper.style.textAlign = "center";
    upper.textContent = "About Us";
    upper.style.fontSize = "80px";
    upper.style.fontWeight = "bold";
    upper.style.fontFamily = "Marck Script";
    container.appendChild(upper);

    const lower = document.createElement("div");
    lower.style.display = "flex";
    lower.style.flexDirection = "column";
    lower.style.alignItems = "center";
    lower.style.padding = "10px";
    lower.style.fontSize = "20px";
    lower.textContent = `${string}`;
    container.appendChild(lower);
    
}

