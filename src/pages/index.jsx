import React from 'react';
import Section from '../components/section'; 
import './index.css';

import solarTag from '../assets/solar_tag.svg'; 
import pepicon from '../assets/pepicons.svg'; 
import diamond from '../assets/diamond.svg'; 
import bulletPoint from '../assets/bullet-point.svg'; 
import shoppingCart from '../assets/cart.svg'; 

const Index = () => {
  return (
    <div className='banner_container'>
        <div className="banner_section pricing">
            {pricingList.map((pricing, index) => (
                <Section
                key={index}
                type='type1'
                icon={pricing.icon}
                title={pricing.title}
                subTitle={pricing.subTitle}
                active={pricing.active}
                />
            ))}

        </div>
        <div className="banner_section features">
            <div className="heading">Features</div>
            {FeatureList.map((feature, index) => (
                <Section
                key={index}
                type='type2'
                icon={bulletPoint}
                subTitle={feature.subTitle}
                />
            ))}
            <div className="button unfilled">
                Know More
            </div>
        </div>
        <div className="banner_section price">
            <span>
            <div className="heading">Price</div>
            <div className="subHeading">Value for money pack</div>
            </span>
            <div className="price_value">$ 499</div>
            <span className="button icon_filled">
                <div className="text">Buy Now</div>
                <img className='icon' src={shoppingCart} alt="" />
            </span>
        </div>
    </div>
  );
};
const pricingList = [
    {
      icon: solarTag,
      title: 'Entry Level',
      subTitle: 'Best for small scale business',
      active: true,
    },
    {
      icon: pepicon,
      title: 'Premium',
      subTitle: 'Best for medium size business',
      active: false,
    },
    {
      icon: diamond,
      title: 'Enterprise',
      subTitle: 'Best for large scale business',
      active: false,
    },
  ];
  
const FeatureList = [
    {
      subTitle: 'Online Access to Software 24/7',
    },
    {
      subTitle: 'Free Funded Referral',
    },
    {
      subTitle: '24/7 Online Support',
    },
    {
      subTitle: '10 User Accounts',
    },
    {
      subTitle: 'Free E-Files',
    },
];
  


export default Index;
