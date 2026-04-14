import React from 'react';
import IndoWesternSection from '../components/IndoWesternSection';

const data = [
  { index: "01", title: "Custom Saree", image: "", layoutType: "1", link: "/collection" },
  { index: "02", title: "Bespoke Drape", image: "", backgroundColor: "#ffaec0", layoutType: "2", link: "/gownsaree" },
  { index: "03", title: "Tailored Cape", image: "", backgroundColor: "#eeb5c4", layoutType: "3" },
  { index: "04", title: "Custom Kurti", image: "", backgroundColor: "#ffffff", layoutType: "4" },
  { index: "05", title: "Signature Gown", image: "", backgroundColor: "#fad1df", layoutType: "5" },
  { index: "06", title: "Made To Measure", image: "", backgroundColor: "#faeaed", layoutType: "6" },
  { index: "07", title: "Handloom Custom", image: "", backgroundColor: "#efaec3", layoutType: "7" },
  { index: "08", title: "Bridal Custom", image: "", backgroundColor: "#ffffff", layoutType: "8" },
];

const Customised = () => {
  return <IndoWesternSection title="CUSTOMISED" items={data} />;
};

export default Customised;
