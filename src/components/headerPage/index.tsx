import styles from "./styles.module.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import HeaderImage from "@/public/images/18.jpg";
import Cursor from "@/src/components/cursor";
import Link from 'next/link'
import Magnetic from '@/src/components/magnetic'

const HeaderPage = () => {
	const title = useRef<HTMLHeadingElement>(null);
	const headerPage = useRef<HTMLDivElement>(null);
	const headerPageTexte = useRef<HTMLDivElement>(null);
	const imageHeader = useRef<HTMLDivElement>(null);
	const headerImage = useRef<HTMLImageElement>(null);
	const [showCursor, setShowCursor] = useState(false);
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: headerPage.current,
				start: " top top",
				end: "+=300px",
				scrub: true,
			},
		});
		gsap.set(imageHeader.current, { clipPath: "inset(30%)" });
		timeline
			.from(imageHeader.current, { clipPath: "inset(30%)" })
			.to(imageHeader.current, { clipPath: "inset(0%)" })
			.to(headerImage.current, { objectPosition: "0% 0%" });

		gsap.to(title.current, {
			fontSize: ".5vw",
			scrollTrigger: {
				trigger: headerPage.current,
				start: "top top",
				end: window.innerHeight / 0.8,
				scrub: true,
			},
		});

		gsap.to(headerPageTexte.current, {
			top: "70vh",
			scrollTrigger: {
				trigger: headerPage.current,
				start: "top top",
				end: "bottom bottom",
				scrub: true,
			},
		});
	});

	const changeFontVariable = (e: React.MouseEvent<HTMLDivElement>) => {
		title.current!.style.fontVariationSettings = `"wght" ${
			e.clientY * 1.5
		}, "wdth" ${e.clientX * 0.11}`;
	};
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<div
			className={`${styles.headerPage} headerPage`}
			ref={headerPage}
			onMouseMove={changeFontVariable}
			data-scroll-container
			onMouseEnter={() => {
				setShowCursor(true);
			}}
			onMouseLeave={() => {
				setShowCursor(false);
			}}
		>
			<Link href="#projets" className={styles.linkProject} passHref>
				<Magnetic>
					Projets
				</Magnetic>
			</Link>
			<div className={styles.headerPageText} ref={headerPageTexte}>
				<p>Bienvenue sur</p>
				<h1 ref={title}>UIX_DEV</h1>
			</div>

			<div className={`${styles.imageHeader} cover`} ref={imageHeader}>
				<Image src={HeaderImage} alt="Qual-IT" priority ref={headerImage} />
				{/* <video
            data-scroll
            data-scroll-speed="0.5"
            controls={false}
            autoPlay
            muted
          >
            <source src="/video.mp4" />
          </video> */}
			</div>
			<Cursor
				cible={headerPage}
				size={{ w: 500, h: 500 }}
				active={showCursor}
				color="white"
			/>
		</div>
	);
};
export default HeaderPage;
