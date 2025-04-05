import React from 'react';
import { pageLink } from '../data';

const PageLink = ({groupClass, itemClass}) => {
  return (
    <ul className={groupClass}>
        {pageLink.map(({id,href,text}) => {
            return ( <li>
                <a key={id} href={href} className={itemClass}>
                    {text}
                </a>
            </li>);
        })}
        </ul>
  )
};

export default PageLink