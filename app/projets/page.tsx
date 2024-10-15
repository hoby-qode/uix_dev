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
          Mes projets <br /> 2023
        </h1>
        {/* <HomeTopProjects projects={projects} /> */}
      </div>
    </>
  );
}
