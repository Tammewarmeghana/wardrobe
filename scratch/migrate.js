import fs from 'fs';
import path from 'path';

const categories = [
    { file: 'src/pages/Sarees.jsx', cat: 'sarees', type: 'traditional' },
    { file: 'src/pages/Lehengas.jsx', cat: 'lehengas', type: 'traditional' },
    { file: 'src/pages/TraditionalCroptops.jsx', cat: 'traditional-croptops', type: 'traditional' },
    { file: 'src/pages/KurthiSets.jsx', cat: 'kurthisets', type: 'traditional' },
    { file: 'src/pages/Anarkalis.jsx', cat: 'anarkalis', type: 'traditional' },
    { file: 'src/pages/SalwarKamis.jsx', cat: 'salwarkamis', type: 'traditional' },
    { file: 'src/pages/GagraCholi.jsx', cat: 'gagracholi', type: 'traditional' },
    { file: 'src/pages/indiangowns.jsx', cat: 'indiangowns', type: 'traditional' },
    
    { file: 'src/pages/Bodycons.jsx', cat: 'bodycon', type: 'western' },
    { file: 'src/pages/Sportswear.jsx', cat: 'sportswear', type: 'western' },
    { file: 'src/pages/MaxiDresses.jsx', cat: 'maxidress', type: 'western' },
    { file: 'src/pages/WesternCroptops.jsx', cat: 'western-croptops', type: 'western' },
    { file: 'src/pages/Blazers.jsx', cat: 'blazers', type: 'western' },
    { file: 'src/pages/MaxiSkirts.jsx', cat: 'maxiskirts', type: 'western' },
    { file: 'src/pages/Formals.jsx', cat: 'formals', type: 'western' },
    { file: 'src/pages/KoreanDresses.jsx', cat: 'koreanwear', type: 'western' },
    
    { file: 'src/pages/GownSaree.jsx', cat: 'gownsaree', type: 'indowestern' },
    { file: 'src/pages/JacketLehenga.jsx', cat: 'jacket-lehenga', type: 'indowestern' },
    { file: 'src/pages/DhotiCropTop.jsx', cat: 'dhoticroptop', type: 'indowestern' },
    { file: 'src/pages/CorsetLehenga.jsx', cat: 'corset-lehenga', type: 'indowestern' },
    { file: 'src/pages/ShararaPeplum.jsx', cat: 'sharara-peplum', type: 'indowestern' },
    { file: 'src/pages/PeplumPantsuit.jsx', cat: 'peplum-pantsuit', type: 'indowestern' },
    { file: 'src/pages/IndoWesternFrocks.jsx', cat: 'indowestern-frocks', type: 'indowestern' },
    { file: 'src/pages/AsymmetricKurtas.jsx', cat: 'asymmetric-kurtas', type: 'indowestern' },
    
    { file: 'src/pages/ReadyMadeItem1.jsx', cat: 'readymade-item-1', type: 'readymade' },
    { file: 'src/pages/ReadyMadeItem2.jsx', cat: 'readymade-item-2', type: 'readymade' },
    { file: 'src/pages/ReadyMadeItem3.jsx', cat: 'readymade-item-3', type: 'readymade' },
    { file: 'src/pages/ReadyMadeItem4.jsx', cat: 'readymade-item-4', type: 'readymade' },
    { file: 'src/pages/ReadyMadeItem5.jsx', cat: 'readymade-item-5', type: 'readymade' },
    { file: 'src/pages/ReadyMadeItem6.jsx', cat: 'readymade-item-6', type: 'readymade' },
    { file: 'src/pages/ReadyMadeItem7.jsx', cat: 'readymade-item-7', type: 'readymade' },
    { file: 'src/pages/ReadyMadeItem8.jsx', cat: 'readymade-item-8', type: 'readymade' },
];

categories.forEach(c => {
    const componentName = path.basename(c.file, '.jsx');
    const content = `import React from 'react';
import CategoryTemplate from '../components/CategoryTemplate';

function ${componentName}() {
    return <CategoryTemplate category=\"${c.cat}\" sidebarType=\"${c.type}\" />;
}

export default ${componentName};
`;
    fs.writeFileSync(c.file, content);
    console.log(`Migrated ${c.file}`);
});
