import React from 'react';
import IndoWesternSection from '../components/IndoWesternSection';

const data = [
  { index: "01", title: "Ready Made Item 1", image: "", layoutType: "1", link: "#" },
  { index: "02", title: "Ready Made Item 2", image: "", backgroundColor: "#ffaec0", layoutType: "2", link: "#" },
  { index: "03", title: "Ready Made Item 3", image: "", backgroundColor: "#eeb5c4", layoutType: "3", link: "#" },
  { index: "04", title: "Ready Made Item 4", image: "", backgroundColor: "#ffffff", layoutType: "4", link: "#" },
  { index: "05", title: "Ready Made Item 5", image: "", backgroundColor: "#fad1df", layoutType: "5", link: "#" },
  { index: "06", title: "Ready Made Item 6", image: "", backgroundColor: "#faeaed", layoutType: "6", link: "#" },
  { index: "07", title: "Ready Made Item 7", image: "", backgroundColor: "#efaec3", layoutType: "7", link: "#" },
  { index: "08", title: "Ready Made Item 8", image: "", backgroundColor: "#ffffff", layoutType: "8", link: "#" },
];

const ReadyMade = () => {
  return <IndoWesternSection title="READY MADE" items={data} />;
};

export default ReadyMade;
