import React from 'react';
import IndoWesternSection from '../components/IndoWesternSection';

const data = [
  { index: "01", title: "Bodycon", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776143938/26ce0861cb2d8f33168eaf50d71148ba-removebg-preview_y2h0af.png", layoutType: "1", link: "/bodycon" },
  { index: "02", title: "SportWear", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776143407/56334b7499eb7220ba830be04d6ca5fc-removebg-preview_pxi8kt.png", backgroundColor: "#ffaec0", layoutType: "2", link: "/sportswear" },
  { index: "03", title: "Maxidress", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776143406/2adbe9a868c141c79d929e1c3c27ec8a-removebg-preview_ei8amj.png", backgroundColor: "#eeb5c4", layoutType: "3", link: "/maxidress" },
  { index: "04", title: "Korean\nwear", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776143937/27c833aa2ab4cd9a09c46bf2dd600d58-removebg-preview_puucoc.png", backgroundColor: "#ffffff", layoutType: "4", link: "/koreanwear" },
  { index: "05", title: "Croptops", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776143406/f364895828d03bcde483f86e9b0d4674-removebg-preview_mddfp0.png", backgroundColor: "#fad1df", layoutType: "5", link: "/western-croptops" },
  { index: "06", title: "Maxi Skirts", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776143406/a17ccd7c23edb6ee9803b2d22efa9fb9-removebg-preview_l2ni2z.png", backgroundColor: "#faeaed", layoutType: "6", link: "/maxiskirts" },
  { index: "07", title: "Blazers", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776143406/886a35e7fac655ee4aefacd4826946a1-removebg-preview_odz1gn.png", backgroundColor: "#efaec3", layoutType: "7", link: "/blazers" },
  { index: "08", title: "Formals", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1776143406/2bac12782b28318ed4eb8b50d72ca255-removebg-preview_xd1nbw.png", backgroundColor: "#ffffff", layoutType: "8", link: "/formals" },
];

const Western = () => {
  return <IndoWesternSection title="WESTERN" items={data} />;
};

export default Western;
