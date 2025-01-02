import { Metadata } from "next";
import React from "react";
import HomeTopProjects from "./components/topProjects/HomeTopProjects";
import HeaderPage from "./components/headerPage";
import About from "./components/about";
import Offers from "./components/offer";
import Competence from "./components/competence";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UIX-DEV ",
  description:
    "Salut, moi c'est H. Marcel UI/UX & Dev, Je suis un Développeur web avec 4ans d'expérience, dont les 2 dernières années ont été consacrées à perfectionner mes compétences dans Wordpress, react.js et Next.js",
  keywords:
    "Designer Ui/Ux , Devéloppeur front-end, react.js, next.js, wordpress, php",
};
export default async function Home() {
  // const projects = await getAllProjects();
  const projects = [
    {
      title: { rendered: "Verdeo" },
      slug: "https://verdeo.fr/",
      content: { rendered: "La plus grande base de projets régénératifs vérifiés, contrôlés et traçables. En tant que développeur front-end de ce projet, j'ai conçu et développé l'interface utilisateur de Verdeo, en mettant l'accent sur l'accessibilité, l'expérience utilisateur (UX) et la performance." },
      _embedded: {
        'wp:featuredmedia': [
          { source_url: "/images/verdeo.jpg" }
        ],
        'wp:term': [
          [{ name: "Développement web" }, { name: "Recherche UX" }, { name: "Accessibilité SEO" }],
          [{ name: "ReactJS", slug: "react-js" }, { name: "Symfony", slug: "symfony"},{ name: "Figma", slug: "figma" }, { name: "Photoshop", slug: "photoshop" },{ name: "Jira", slug: "jira" }, { name: "Slack", slug: "slack"}, { name: "Docker", slug: "docker"}, { name: "Gitlab", slug: "gitlab"}]
        ]
      }
    },
    {
      title: { rendered: "App design ecommerce SW4U" },
      slug: "https://www.behance.net/gallery/202769917/Page-de-connexion-et-dinscription",
      content: { rendered: "Une page de connexion et d'inscription élégante et conviviale. Ce design met l'accent sur la simplicité et l'utilisabilité, garantissant une expérience utilisateur fluide." },
      _embedded: {
        'wp:featuredmedia': [
          { source_url: "/images/sw4u.jpg" }
        ],
        'wp:term': [
          [{ name: "UI/UX Design" }, { name: "Web design" }],
          [{ name: "Figma", slug: "figma" }, { name: "Photoshop", slug: "photoshop" }]
        ]
      }
    },
    {
      title: { rendered: "Fast pay service" },
      slug: "https://www.behance.net/gallery/194813763/Fast-pay-service",
      content: { rendered: "Une refonte d'un site de paiement destiné aux touristes. J'ai apporté une touche moderne au projet et je suis très fier du résultat final 😎 " },
      _embedded: {
        'wp:featuredmedia': [
          { source_url: "/images/fast-pay.jpg" }
        ],
        'wp:term': [
          [{ name: "Redesign" }, { name: "Web design" } , { name: "UI/UX design" }],
          [{ name: "Figma", slug: "figma" }, { name: "Photoshop", slug: "photoshop" }]
        ]
      }
    }
    
  ];
  return (
    <main>
      <HeaderPage />

      <About />

      <HomeTopProjects projects={projects} />
      <div className="flex justify-content-center">
        <Link href="/projets" className="btn btn-primary">
          Tous mes projets
        </Link>
      </div>
      <Offers />

      <Competence />
    </main>
  );
}
