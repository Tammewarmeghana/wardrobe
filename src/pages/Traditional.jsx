import React from 'react';
import IndoWesternSection from '../components/IndoWesternSection';

const data = [
  { index: "01", title: "Sarees", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776144747/88d50b60094a908d9e448369c98d38fc-removebg-preview_ccsfab.png", layoutType: "1", link: "/sarees" },
  { index: "02", title: "Lehengas", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776144747/4b8cdb9c714368443f060be4eb428b2d-removebg-preview_dfmbxd.png", backgroundColor: "#ffaec0", layoutType: "2", link: "/lehengas" },
  { index: "03", title: "Croptops", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776144747/b29e1a16757dfb6807a2291d373ecde4-removebg-preview_n1wepp.png", backgroundColor: "#eeb5c4", layoutType: "3", link: "/croptops" },
  { index: "04", title: "Kurthi\nSets", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776144747/8b70aff64402ce9a2a80f49a03986809-removebg-preview_jqxsdg.png", backgroundColor: "#ffffff", layoutType: "4", link: "/kurthisets" },
  { index: "05", title: "Anarkalis", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776144747/1921752bfeb287de376de1e64f49e729-removebg-preview_ghnsnt.png", backgroundColor: "#fad1df", layoutType: "5", link: "/anarkalis" },
  { index: "06", title: "Salwar Kamis", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776144746/0930828925953b5ed480fa40c39efab7-removebg-preview_d0vihc.png", backgroundColor: "#faeaed", layoutType: "6", link: "/salwarkamis" },
  { index: "07", title: "Gagra Choli", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776145681/gagra-removebg-preview_klq5qz.png", backgroundColor: "#efaec3", layoutType: "7", link: "/gagracholi" },
  { index: "08", title: "Indian Gowns", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776144746/efab885c5dc76fe9cd2a0b98efa3b2be-removebg-preview_l5dfkd.png", backgroundColor: "#ffffff", layoutType: "8", link: "/indiangowns" },
];

const Traditional = () => {
  return <IndoWesternSection title="TRADITIONAL" items={data} />;
};

export default Traditional;
