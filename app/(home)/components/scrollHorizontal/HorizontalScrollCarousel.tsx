"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-neutral-800" style={{marginTop: '-72vh'}}>
      
      <HorizontalScrollCarousel />
      
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-300 bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-450 w-450 overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position:"absolute",
          zIndex: "0", 
          transition: 'transform'
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center"
        style={{position:"absolute",zIndex: "10", display: 'grid', placeContent: "center"}}
      >
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/images/portfolio/le-bar-it.jpg",
    title: "Le bar-IT",
    id: 1,
  },
  {
    url: "/images/portfolio/254.jpg",
    title: "Groupe Batimat",
    id: 2,
  },
  {
    url: "/images/portfolio/msall-design.jpg",
    title: "Msall design",
    id: 3,
  },
  {
    url: "/images/portfolio/msall-design.jpg",
    title: "Clone spotify",
    id: 4,
  },
  {
    url: "/images/miniprojets/clone_spotify/spotify.jpg",
    title: "SW4U",
    id: 5,
  },
  {
    url: "/images/portfolio/sw4u.jpg",
    title: "Fast service",
    id: 6,
  },
  {
    url: "/images/miniprojets/fastservice/fastservice.jpg",
    title: "Title 7",
    id: 7,
  },
];