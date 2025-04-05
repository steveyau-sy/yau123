import React from 'react';
import { socialLinks } from '../data';

const SocialLink = ({groupClass}) => {
  return (
    <ul className={groupClass}>
        {socialLinks.map(({id,href,icon})=>{
            return (
                <li>
                <a key={id} href={href} target="'_blank">
                <i className={icon}></i></a>
                </li>
                )
              })}
              </ul>
              );
            };

export default SocialLink