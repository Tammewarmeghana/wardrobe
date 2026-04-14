import React from 'react';
import IndoWesternSection from '../components/IndoWesternSection';

const data = [
  { index: "01", title: "The Saree\nGown", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776091831/de6b4a2ae957af6292dbb09ef3a4f20b-removebg-preview_r3pxsx.png", layoutType: "1", link: "/gownsaree" },
  { index: "02", title: "Jacket Style\nLehangas", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776091912/5f9525d8948a4c5d315034bed7fe28f3-removebg-preview_wzycnv.png", backgroundColor: "#ffaec0", layoutType: "2", link: "/jacket-lehenga" },
  { index: "03", title: "Dhoti Pants with Crop tops", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776091912/a1feafa35bbca368bc473c30a42314f5-removebg-preview_z4myff.png", backgroundColor: "#eeb5c4", layoutType: "3",link:"/dhoti-croptop" },
  { index: "04", title: "Sharara\nSet with\npeplum\ntops", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776091911/6be61c20f6978bdf21a9ac33094ab90c-removebg-preview_yvka6i.png", backgroundColor: "#ffffff", layoutType: "4", link: "/sharara-peplum" },
  { index: "05", title: "Indo-\nWestern\nGowns", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776091911/3bf0d12f82bc02ca5673c9012b1e1f04-removebg-preview_jdrzlv.png", backgroundColor: "#fad1df", layoutType: "5", link: "/indowestern-frocks" },
  { index: "06", title: "Bridal\nCorset\nLehengas", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776091911/33d44358aff6ae416449f1e21763539c-removebg-preview_arijt5.png", backgroundColor: "#faeaed", layoutType: "6" ,link:"/corset-lehenga" },
  { index: "07", title: "Asymmetrical\nHemline Kurtis", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776091908/cbd379554f413775a122a45d3eb7bedf-removebg-preview_xldxup.png", backgroundColor: "#efaec3", layoutType: "7", link: "/asymmetric-kurtas" },
  { index: "08", title: "Peplum\nPantsuit", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776140411/f549314ab8671c33d2490248aa1caf8a-removebg-preview_yr6uaq.png", backgroundColor: "#ffffff", layoutType: "8", link: "/peplum-pantsuit" },
];

const IndoWestern = () => {
  return <IndoWesternSection title="INDO-WESTERN" items={data} />;
};

export default IndoWestern;
