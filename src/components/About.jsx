import React from 'react';
import aboutImg from "../images/greecepic6.jpeg";
import Title from './Title';

const About = () => {
  return (
    <section className="about" id="about">
            <Title title='about' subTitle ='us'/>
            <div className="about-content">
                <div className="about-img">
                    <div className="about-img-before">
                        <img className="img-about" src={aboutImg} alt=""/>
                    </div>
                </div>
                <div className="about-info">
                    <article className="about-artcile">
                        <h3>explore the difference</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, earum!</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, consectetur!</p>
                    </article>
                    <a href="#home" className="btn">read more</a>
                </div>
            </div>
        </section>
  )
};

export default About