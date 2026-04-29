import React from 'react';
import IndoWesternSection from '../components/IndoWesternSection';

const data = [
  { index: "01", title: "Short Frocks", image: "", layoutType: "1", link: "/readymade-item-1" },
  { index: "02", title: "Kurthis", image: "", backgroundColor: "#ffaec0", layoutType: "2", link: "/readymade-item-2" },
  { index: "03", title: "Peplum Tops", image: "", backgroundColor: "#eeb5c4", layoutType: "3", link: "/readymade-item-3" },
  { index: "04", title: "Plazzo Tops", image: "", backgroundColor: "#ffffff", layoutType: "4", link: "/readymade-item-4" },
  { index: "05", title: "Skirts", image: "", backgroundColor: "#fad1df", layoutType: "5", link: "/readymade-item-5" },
  { index: "06", title: "Jumpsuits", image: "", backgroundColor: "#faeaed", layoutType: "6", link: "/readymade-item-6" },
  { index: "07", title: "Cotton Kaftan", image: "", backgroundColor: "#efaec3", layoutType: "7", link: "/readymade-item-7" },
  { index: "08", title: "Warp Dresses", image: "", backgroundColor: "#ffffff", layoutType: "8", link: "/readymade-item-8" },
];

const ReadyMade = () => {
  return <IndoWesternSection title="READY MADE" items={data} />;
};

export default ReadyMade;
