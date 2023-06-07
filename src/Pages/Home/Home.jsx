import React from "react";
import { Banner } from "../../Components/Home/Banner";
import HoaffiliateTabs from "../../Components/Home/HoaffiliateTabs";
import { Homegallery } from "../../Components/Home/Homegallery";
import OurBlog from "../../Components/Home/OurBlog";
import OurServices from "../../Components/Home/OurServices";
import Service from "../../Components/Home/Service";
import { Whowe } from "../../Components/Home/Whowe";
import Whychoose from "../../Components/Home/Whychoose";

export const Home = () => {
  return (
    <>
      <Banner />
      <Whychoose />
      <Whowe />
      <Homegallery />
      <Service />
      <OurServices />
    
      <HoaffiliateTabs/>
      <OurBlog />
    </>
  );
};
