import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import imageAbout from '@/public/images/imageAbout.jpg'
import Styles from '@/src/pages/home/styles.module.css'

const About = () => {
  const about = useRef(null)
  const [pageActive, setPageActive] = useState(null)
  const [initScroll, setInitScroll] = useState(null)
  const texte =
    "Moi c'est Rakotonialy Hobitiana <span> Marcel </span>. <br/> Je suis un père marié et je fais de l'ui/ux design et aussi du développement web."
  const [description, setDescription] = useState([])
  // useEffect(()=> {
  //     const arrTexte = texte.split('');
  //     var html = [];
  //     arrTexte.forEach(function(lettre){
  //         if (lettre != " ") {
  //             var span = [lettre]
  //         } else {
  //             var span = ""
  //         }
  //         html.push(span)
  //     })
  //     setDescription(html);

  //     // var lettres = $(this).text().split('');
  //     // var h2 = $(this);
  //     // // Videz la phrase
  //     // $(this).empty();

  //     // $.each(lettres, function(index, lettre) {

  //     //     if (lettre != " ") {
  //     //         var span = $('<span>').html(lettre);
  //     //     } else {
  //     //         var span = $('<span>').html('');
  //     //     }
  //     //     h2.append(span);
  //     // });
  // })
  return (
    <div className={`about ${Styles.about} `} ref={about} id="apropos">
      <div className={`container ${Styles.aboutItem}`}>
        <div className={`${Styles.aboutItem__content}`}>
          <h2>
            <span>Qui suis-je ?</span>
          </h2>
          <div className="desc">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <Image src={imageAbout} alt="Image apropos" priority />
    </div>
  )
}
export default About
