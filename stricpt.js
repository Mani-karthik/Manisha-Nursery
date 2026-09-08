// Sample Plant Data (Database / API ద్వారా కూడా తెచ్చుకోవచ్చు)
const plants = [
    {
        id: 1,
        name: "మామిడి మొక్క (Mango Plant)",
        price: "₹250",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400",
        details: "తీపి పండ్ల కోసం పెరట్లో పెంచుకోవడానికి అనువైన మొక్క.",
        care: "ఎండ: 6-8 గంటలు · నీరు: వారానికి 2-3 సార్లు"
    },
    {
        id: 2,
        name: "స్నేక్ ప్లాంట్ (Snake Plant)",
        price: "₹199",
        image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bac?w=400",
        details: "తక్కువ వెలుతురులో కూడా చక్కగా పెరిగే అందమైన ఇండోర్ మొక్క.",
        care: "ఎండ: పరోక్ష వెలుతురు · నీరు: 10-14 రోజులకు ఒకసారి"
    },
    {
        id: 3,
        name: "మల్లె మొక్క (Jasmine Plant)",
        price: "₹120",
        image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400",
        details: "సువాసనగల పూలతో ఇంటికి అందం మరియు ఆహ్లాదం తీసుకొస్తుంది.",
        care: "ఎండ: 4-6 గంటలు · నీరు: మట్టి పొడిగా ఉన్నప్పుడు"
    }
];

let cartCount = 0;

const categoryDetails = {
    plants: {
        title: "మొక్కలు",
        description: "మామిడి, స్నేక్ ప్లాంట్, మల్లె మరియు ఇంటి కోసం మరెన్నో ఆరోగ్యకరమైన మొక్కలు మా దగ్గర అందుబాటులో ఉన్నాయి."
    },
    pots: {
        title: "కుండీలు & ప్లాంటర్లు",
        description: "ఇండోర్ మరియు అవుట్‌డోర్ మొక్కలకు సరిపోయే అందమైన కుండీలు, ప్లాంటర్లు మరియు డ్రైనేజ్ ఎంపికలు అందుబాటులో ఉన్నాయి."
    },
    decor: {
        title: "గార్డెన్ డెకర్",
        description: "మీ బాల్కనీ, ఇంటి ప్రవేశద్వారం మరియు గార్డెన్‌ను ప్రత్యేకంగా మార్చే సహజమైన డెకర్ వస్తువులు మా దగ్గర ఉన్నాయి."
    },
    pebbles: {
        title: "పెబుల్స్ & సాండ్",
        description: "పాట్ అలంకరణ, డ్రైనేజ్ మరియు ల్యాండ్‌స్కేపింగ్ కోసం వివిధ రంగులు మరియు పరిమాణాల్లో పెబుల్స్, ఇసుక లభిస్తాయి."
    },
    care: {
        title: "ప్లాంట్ కేర్",
        description: "మట్టి, ఎరువులు, పురుగు నియంత్రణ మరియు మొక్కల రోజువారీ సంరక్షణపై మా సలహా మరియు అవసరమైన ఉత్పత్తులు పొందండి."
    },
    seeds: {
        title: "విత్తనాలు",
        description: "కూరగాయలు, పూలు మరియు పండ్ల మొక్కల కోసం మంచి నాణ్యత కలిగిన విత్తనాలతో మీ స్వంత గార్డెన్‌ను ప్రారంభించండి."
    },
    services: {
        title: "నర్సరీ సేవలు",
        description: "మొక్కల ఎంపిక, పాటింగ్ మరియు మీ ఇంటికి సరిపోయే గ్రీన్ స్పేస్ ఏర్పాటులో Manisha Nursery మీకు సహాయం చేస్తుంది."
    },
    maintenance: {
        title: "గార్డెన్ మెయింటెనెన్స్",
        description: "మీ గార్డెన్ ఎప్పుడూ పచ్చగా, ఆరోగ్యంగా ఉండేందుకు క్రమమైన సంరక్షణ మరియు నిర్వహణ సేవలు అందిస్తాము."
    }
};

// Render Products
function displayProducts() {
    const productContainer = document.getElementById("product-list");
    productContainer.innerHTML = plants.map(plant => `
        <div class="card">
            <img src="${plant.image}" alt="${plant.name}">
            <h3>${plant.name}</h3>
            <p class="plant-details">${plant.details}</p>
            <p class="plant-care">${plant.care}</p>
            <p>${plant.price}</p>
            <button onclick="addToCart('${plant.name}')">Add to Cart</button>
        </div>
    `).join('');
}

// Add to Cart Action
function addToCart(plantName) {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
    alert(`${plantName} కార్ట్‌కి యాడ్ అయింది!`);
}

function scrollToShop() {
    document.getElementById("plants").scrollIntoView({ behavior: 'smooth' });
}

function showCategoryDetails(category) {
    const details = categoryDetails[category];
    if (!details) {
        return;
    }

    document.getElementById("category-title").innerText = details.title;
    document.getElementById("category-description").innerText = details.description;
}

document.querySelectorAll("[data-category]").forEach(link => {
    link.addEventListener("click", () => showCategoryDetails(link.dataset.category));
});

// Load products on start
displayProducts();