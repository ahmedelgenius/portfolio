import React from "react";
import "./portfolio.css";
import image1 from "../../assets/chatapp.png";
import image2 from "../../assets/forkify.png";
import image3 from "../../assets/orderfood.png";
import image4 from "../../assets/banksit.png";
import image5 from "../../assets/mapty.png";
import image6 from "../../assets/pig game.png";

const data = [
  {
    id: 1,
    image: image1,
    title: "Chat App",
    github:
      "https://github.com/ahmedelgenius/Kalbonyan-Elmarsos/tree/main/02-Udemy/-04-Nodejs-Andrew/Projects/Chat-App",
    demo: "https://chatproject1.herokuapp.com/",
  },
  {
    id: 2,
    image: image2,
    title: "Forkify",
    github:
      "https://github.com/ahmedelgenius/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Forkify",
    demo: "https://forkify-ahmedhany.netlify.app/",
  },
  {
    id: 3,
    image: image3,
    title: "Order-food App",
    github:
      "https://github.com/ahmedelgenius/Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/order-food-app/S11-project",
    demo: "https://sec11.netlify.app/",
  },
  {
    id: 4,
    image: image4,
    title: "Bankist",
    github:
      "https://github.com/ahmedelgenius/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Bankist-Site",
    demo: "https://bankist-site-ahmed.netlify.app/",
  },
  {
    id: 5,
    image: image5,
    title: "Mapty",
    github:
      "https://github.com/ahmedelgenius/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Mapty",
    demo: "https://mapty-ahmed.netlify.app/",
  },
  {
    id: 6,
    image: image6,
    title: "Pig Game App",
    github:
      "https://github.com/ahmedelgenius/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Pig-Game",
    demo: "https://piggame-ahmedhany.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title} </h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
