import fs from 'fs';

let content = fs.readFileSync('src/data/products.js', 'utf8');
content = content.replace('export const products = ', '').trim();
if (content.endsWith(';')) {
    content = content.slice(0, -1);
}
const data = JSON.parse(content);

const sarees = data.filter(p => p.category === 'sarees');
const traditional = sarees.map(p => ({...p, category: 'traditional-croptops', id: 'trad_crop_' + p.id}));
const western = sarees.map(p => ({...p, category: 'western-croptops', id: 'west_crop_' + p.id}));

data.push(...traditional);
data.push(...western);

fs.writeFileSync('src/data/products.js', 'export const products = ' + JSON.stringify(data, null, 2) + ';');
console.log('Seeded traditional-croptops and western-croptops.');
