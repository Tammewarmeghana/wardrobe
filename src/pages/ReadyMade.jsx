import React from 'react';
import IndoWesternSection from '../components/IndoWesternSection';

const data = [
  { index: "01", title: "Short\nFrocks", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1777471959/4c45102df21633ae42ad2d1e4198d6b9-removebg-preview_knwkdn.png", layoutType: "1", link: "/readymade-item-1" },
  { index: "02", title: "Kurthis", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1777471959/08f719e7a81561ef7101579b8f11a318-removebg-preview_t6nahv.png", backgroundColor: "#ffaec0", layoutType: "2", link: "/readymade-item-2" },
  { index: "03", title: "Peplum Tops", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1777471960/ee05f958aeaa4d0754af788d5b3b8810-removebg-preview_ebk6rl.png", backgroundColor: "#eeb5c4", layoutType: "3", link: "/readymade-item-3" },
  { index: "04", title: "Plazzo Tops", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1777471960/d4d83e2a155957e57d9e0ae3e2c1b594-removebg-preview_dficus.png", backgroundColor: "#ffffff", layoutType: "4", link: "/readymade-item-4" },
  { index: "05", title: "Skirts", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1777471959/710d6bc86e6ec1c87242e2d3b839dfdc-removebg-preview_elvf0h.png", backgroundColor: "#fad1df", layoutType: "5", link: "/readymade-item-5" },
  { index: "06", title: "Jump\nsuits", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1777471959/4240072a9a3be5539e494326f74feee8-removebg-preview_rxtzrp.png", backgroundColor: "#faeaed", layoutType: "6", link: "/readymade-item-6" },
  { index: "07", title: "Cotton Kaftan", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1777471959/121afa69717c92e7188ce2aa4ed9dc63-removebg-preview_xgrio7.png", backgroundColor: "#efaec3", layoutType: "7", link: "/readymade-item-7" },
  { index: "08", title: "Warp Dresses", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1777471959/2a7d321e51e4d965f3d8d5749f8e7479-removebg-preview_pii4zp.png", backgroundColor: "#ffffff", layoutType: "8", link: "/readymade-item-8" },
];

const ReadyMade = () => {
  return <IndoWesternSection title="READY MADE" items={data} />;
};

export default ReadyMade;
