import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='Featured-Item  bg-fixed text-white pt-10 my-20'>
            <SectionTitle subHeading={'Check it Out'} heading={'Featured Item'}></SectionTitle>

          <div className='md:flex bg-opacity-60 bg-slate-500 justify-center items-center pb-20 pt-12 px-36'>
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className='md:ml-10'>
        <p>Aug 20,20023</p>
        <p className='uppercase'>Where can i get some?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusantium sunt, libero fugit eos itaque!</p>

        <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
            </div>
          </div>

        </div>
    );
};

export default Featured;