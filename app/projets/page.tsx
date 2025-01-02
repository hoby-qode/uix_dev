import Anchor from "@/components/ui/Anchor";
import { Metadata } from "next";
import styles from "./galerie.module.css";

export const metadata: Metadata = {
  title: "UIX DEV : Portfolio",
  description: "Description de la page portfolio",
};
export default async function Portfolio() {
  // const projects = await getAllProjects();

  return (
    <>
      <div className={`${styles.galleryProject_filter} container`}>
        <Anchor height={30} />
        <h1 className="text-center">
          Mes projets 
        </h1>
        {/* <HomeTopProjects projects={projects} /> */}
        <div className="flex">
          <div className="col-md-4">
            <iframe src="https://www.behance.net/embed/project/183207575?ilo0=1" height="316" style={{width: "100%"}} allowFullScreen loading="lazy" frameBorder="0" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin"></iframe>
          </div>
          <div className="col-md-4">
            <iframe src="https://www.behance.net/embed/project/194813763?ilo0=1" height="316" style={{width: "100%"}} allowFullScreen loading="lazy" frameBorder="0" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin"></iframe>
          </div>
          <div className="col-md-4">
            <iframe src="https://www.behance.net/embed/project/202769917?ilo0=1" height="316" style={{width: "100%"}} allowFullScreen loading="lazy" frameBorder="0" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin"></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
