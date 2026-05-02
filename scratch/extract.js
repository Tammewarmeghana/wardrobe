import fs from 'fs';
import path from 'path';

function extractProducts(filePath, category) {
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return [];
    }
    const content = fs.readFileSync(filePath, 'utf8');
    const products = [];
    
    // Split into cards
    const cardBlocks = content.split(/<div className=\"product-card\"/);
    cardBlocks.shift(); 

    cardBlocks.forEach((block, index) => {
        // More robust attribute extraction
        const idMatch = block.match(/id: \"(.*?)\"/);
        const titleMatch = block.match(/title: \"(.*?)\"/);
        const wlImageMatch = block.match(/image: \"(.*?)\"/);
        const brandMatchWl = block.match(/brand: \"(.*?)\"/);
        
        const imgTagMatch = block.match(/<img src=\"(.*?)\"/);
        const brandTagMatch = block.match(/<h3 className=\"brand-name\">(.*?)<\/h3>/s);
        const titleTagMatch = block.match(/<p className=\"product-title\">(.*?)<\/p>/s);
        const priceTagMatch = block.match(/<span className=\"price\">.*?₹.*?<\/span>(.*?)<\/span>/s) || block.match(/<span className=\"price\">(.*?)<\/span>/s);
        const originalPriceTagMatch = block.match(/<span className=\"original-price\">₹(.*?)<\/span>/s);
        const ratingTagMatch = block.match(/<span className=\"rating-count\">(.*?)<\/span>/s);

        if (idMatch || titleMatch) {
            const rawId = idMatch ? idMatch[1] : `prod_${category}_${index}`;
            const id = rawId.includes('_') ? rawId.split('_')[1] : rawId;
            const title = titleMatch ? titleMatch[1] : (titleTagMatch ? titleTagMatch[1].replace(/<.*?>/g, '').trim() : "");
            const image = (wlImageMatch && wlImageMatch[1]) ? wlImageMatch[1] : (imgTagMatch ? imgTagMatch[1] : "");
            const brand = brandMatchWl ? brandMatchWl[1] : (brandTagMatch ? brandTagMatch[1].replace(/<.*?>/g, '').trim() : "");
            
            let priceText = priceTagMatch ? priceTagMatch[1].replace(/<.*?>/g, '') : "0";
            const price = parseInt(priceText.replace(/[^0-9]/g, '')) || 0;
            
            let origPriceText = originalPriceTagMatch ? originalPriceTagMatch[1].replace(/<.*?>/g, '') : null;
            const originalPrice = origPriceText ? parseInt(origPriceText.replace(/[^0-9]/g, '')) : null;
            
            const ratingCount = ratingTagMatch ? parseInt(ratingTagMatch[1].replace(/[^0-9]/g, '')) : 0;

            const allPossibleColors = ['Pink', 'Blue', 'Black', 'Red', 'Green', 'Yellow', 'White', 'Brown', 'Navy', 'Maroon', 'Peach', 'Olive', 'Gold', 'Silver', 'Grey'];
            let colors = [];
            
            // Assign color based on title if possible
            allPossibleColors.forEach(c => {
                if (title.toLowerCase().includes(c.toLowerCase())) {
                    colors.push(c);
                }
            });

            // Add some random variety if too few colors
            if (colors.length < 2) {
                const randomColors = allPossibleColors.filter(c => !colors.includes(c));
                colors.push(...randomColors.sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 2)));
            }

            products.push({
                id,
                category,
                title,
                brand,
                price,
                originalPrice,
                rating: 4,
                ratingCount,
                colors,
                fabric: ['Silk', 'Georgette', 'Chiffon', 'Cotton', 'Satin', 'Crepe'][Math.floor(Math.random() * 6)],
                image
            });
        }
    });
    
    return products;
}

const categories = [
    { file: 'src/pages/Sarees.jsx', cat: 'sarees' },
    { file: 'src/pages/Lehengas.jsx', cat: 'lehengas' },
    { file: 'src/pages/TraditionalCroptops.jsx', cat: 'traditional-croptops' },
    { file: 'src/pages/KurthiSets.jsx', cat: 'kurthisets' },
    { file: 'src/pages/Anarkalis.jsx', cat: 'anarkalis' },
    { file: 'src/pages/SalwarKamis.jsx', cat: 'salwarkamis' },
    { file: 'src/pages/GagraCholi.jsx', cat: 'gagracholi' },
    { file: 'src/pages/indiangowns.jsx', cat: 'indiangowns' },
    { file: 'src/pages/Bodycons.jsx', cat: 'bodycon' },
    { file: 'src/pages/Sportswear.jsx', cat: 'sportswear' },
    { file: 'src/pages/MaxiDresses.jsx', cat: 'maxidress' },
    { file: 'src/pages/WesternCroptops.jsx', cat: 'western-croptops' },
    { file: 'src/pages/Blazers.jsx', cat: 'blazers' },
    { file: 'src/pages/MaxiSkirts.jsx', cat: 'maxiskirts' },
    { file: 'src/pages/Formals.jsx', cat: 'formals' },
    { file: 'src/pages/KoreanDresses.jsx', cat: 'koreanwear' },
    { file: 'src/pages/GownSaree.jsx', cat: 'gownsaree' },
    { file: 'src/pages/JacketLehenga.jsx', cat: 'jacket-lehenga' },
    { file: 'src/pages/DhotiCropTop.jsx', cat: 'dhoticroptop' },
    { file: 'src/pages/CorsetLehenga.jsx', cat: 'corset-lehenga' },
    { file: 'src/pages/ShararaPeplum.jsx', cat: 'sharara-peplum' },
    { file: 'src/pages/PeplumPantsuit.jsx', cat: 'peplum-pantsuit' },
    { file: 'src/pages/IndoWesternFrocks.jsx', cat: 'indowestern-frocks' },
    { file: 'src/pages/AsymmetricKurtas.jsx', cat: 'asymmetric-kurtas' },
    { file: 'src/pages/ReadyMadeItem1.jsx', cat: 'readymade-item-1' },
    { file: 'src/pages/ReadyMadeItem2.jsx', cat: 'readymade-item-2' },
    { file: 'src/pages/ReadyMadeItem3.jsx', cat: 'readymade-item-3' },
    { file: 'src/pages/ReadyMadeItem4.jsx', cat: 'readymade-item-4' },
    { file: 'src/pages/ReadyMadeItem5.jsx', cat: 'readymade-item-5' },
    { file: 'src/pages/ReadyMadeItem6.jsx', cat: 'readymade-item-6' },
    { file: 'src/pages/ReadyMadeItem7.jsx', cat: 'readymade-item-7' },
    { file: 'src/pages/ReadyMadeItem8.jsx', cat: 'readymade-item-8' },
];

const allProducts = [];
categories.forEach(c => {
    const products = extractProducts(c.file, c.cat);
    console.log(`Extracted ${products.length} from ${c.file}`);
    allProducts.push(...products);
});

fs.writeFileSync('src/data/products.js', 'export const products = ' + JSON.stringify(allProducts, null, 2) + ';');
console.log(`Total Extracted: ${allProducts.length}`);
const emptyImages = allProducts.filter(p => !p.image).length;
console.log(`Products with empty images: ${emptyImages}`);
const categoriesFound = [...new Set(allProducts.map(p => p.category))];
console.log(`Categories with data: ${categoriesFound.join(', ')}`);
