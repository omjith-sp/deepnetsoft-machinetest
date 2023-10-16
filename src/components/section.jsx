import React from 'react';
import './section.css';

const Section = ({ type, icon, title, subTitle, active }) => {
  if (type === 'type1') {
    return (
      <div className={`section type1 ${active ? 'active' : ''}`}>
        <div className="icon">
          <img src={icon} alt="Icon" />
        </div>
        <div className="content">
          <div className="title">{title}</div>
          <div className="sub_title">{subTitle}</div>
        </div>
      </div>
    );
  }

  if (type === 'type2') {
    return (
      <div className='section type2'>
            <img className="bullet_icon"src={icon} alt="Icon" />
            <div className="text">{subTitle}</div>
      </div>
    );
  }
  return null;
};

export default Section;
