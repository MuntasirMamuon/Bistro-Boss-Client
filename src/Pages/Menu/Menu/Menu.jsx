import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Sheared/Cover/Cover";
import menuImg from '../../../assets/menu/menu-bg.png'
import DessertsImg from '../../../assets/menu/dessert-bg.jpeg'
import PizzaImg from '../../../assets/menu/pizza-bg.jpg'
import SaladImg from '../../../assets/menu/salad-bg.jpg'
import SoupImg from '../../../assets/menu/soup-bg.jpg'

import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const[menu]=useMenu();
  const desserts=menu.filter(item=>item.category==='dessert')
  const soup=menu.filter(item=>item.category==='soup')
  const salad=menu.filter(item=>item.category==='salad')
  const pizza=menu.filter(item=>item.category==='pizza')
  const offered=menu.filter(item=>item.category==='offered')
  return (
    <div>
      <Helmet>
        <title>Bistro Boss| Menu</title>
        
      </Helmet>
      <Cover menuImg={menuImg} title='Our menu'></Cover>
      <SectionTitle subHeading={"Dont's Miss"} heading={"Today's Offer"}></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={desserts} coverImg={DessertsImg} title='dessert'></MenuCategory>
      <MenuCategory items={pizza} coverImg={PizzaImg} title='pizza'></MenuCategory>
      <MenuCategory items={soup} coverImg={PizzaImg} title='soup'></MenuCategory>
      <MenuCategory items={salad} coverImg={PizzaImg} title='salad'></MenuCategory>
    </div>
  );
};

export default Menu;
