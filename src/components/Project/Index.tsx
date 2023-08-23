import style from "./style.module.css";
import Project from "./Item";
import Modal from "./Modal";
import { useState } from "react";

const projectsData = [
	{
		title: "Le bar-IT",
		desc: "Agence web&créative spécialisée dans la conception de site internet, application web, iOS et android",
		picture: "/images/portfolio/le-bar-it.jpg",
		link: "/projects/le-bar-it",
		category: [
			{
				0: "UI/UX Design",
				2: "Développement",
				1: "Intégration",
			},
		],
	},
	{
		title: "Groupe Batimat",
		desc: "Un leader dans la distribution de matériaux de construction depuis plus de 30ans sur le continent africain.",
		picture: "/images/portfolio/254.jpg",
		link: "/projects/groupe-batimat",
		category: [
			{
				0: "UI/UX Design",
			},
		],
	},
	{
		title: "Msall design",
		desc: "une marque de gamme de meubles créée par une ivoiro-sénégalaise basée à Abidjan.",
		picture: "/images/portfolio/msall-design.jpg",
		link: "/projects/msall-design",
		category: [
			{
				0: "UI/UX Design",
				2: "Développement",
				1: "Intégration",
			},
		],
	},
];
const Projects = () => {
	const [modal, setModal] = useState({ active: false, index: 0 });
	return (
		<>
			<div className={`${style.projects} container`} data-scroll-container>
				{projectsData.map((project, index) => {
					return (
						<Project
							index={index}
							setModal={setModal}
							title={project.title}
							desc={project.desc}
							link={project.link}
							// category={project.category}
							key={index}
						/>
					);
				})}
			</div>
			<Modal projects={projectsData} modal={modal} />
		</>
	);
};

export default Projects;
