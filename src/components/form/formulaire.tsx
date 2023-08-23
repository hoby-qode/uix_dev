import styles from './styles.module.css'
import Input from '@/src/components/form/input'
import Textarea from '@/src/components/form/textarea'
import Magnetic from '@/src/components/magnetic';
import { useState } from 'react'
// import nodemailer from 'nodemailer';

const Formulaire = () => {
    const [formData, setFormData] = useState({
        name: '',
        mail: '',
        message: '',
    });
    
    const handleOnChange = (e:any) => {
    const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        // Créer un transporteur Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Remplacez par le service de votre choix
            auth: {
                user: 'houbby22@gmail.com',
                pass: 'Vadikotiako22',
            },
        });

    // const mailOptions = {
    //     from: 'houbby22@gmail.com',
    //     to: 'marcel@medialibs.com', // L'adresse à laquelle vous souhaitez envoyer l'e-mail
    //     subject: 'Test',
    //     text: `
    //     Nom: ${formData.name} 
    //     Email: ${formData.mail}
    //     Message: ${formData.message}
    //     `,
    // };

    // // Envoyer l'e-mail
    // try {
    //     await transporter.sendMail(mailOptions);
    //     console.log('E-mail envoyé avec succès');
    //     // Réinitialiser le formulaire après l'envoi
    //     setFormData({
    //     name: '',
    //     mail: '',
    //     message: '',
    //     });
    // } catch (error) {
    //     console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    // }
    };
    
  return (
    <form className={`${styles.formulaire} row`} onSubmit={handleSubmit}>
    <Input type="text" label="Nom & prénom" name="name" size="col-md-6" onChange={handleOnChange} />
    <Input type="email" label="Adresse mail" name="mail" size="col-md-6" onChange={handleOnChange} />
    <Textarea label="Votre message" name="message" size="col-md-6" onChange={handleOnChange} />
    <div className='col-md-6 text-right'>
        <Magnetic>
        <button
            type="submit"
            className={styles.btnPrimary}
        >
            <span>Envoyer</span>
        </button>
        </Magnetic>
    </div>
    </form>
  )
}
export default Formulaire
