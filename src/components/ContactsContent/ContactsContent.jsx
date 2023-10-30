'use client';
import styles from './contactsContent.module.css';
import { BsLinkedin } from 'react-icons/bs';
import {
  FaTelegram,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import { AiOutlineMail, AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import { fredericka } from '@/src/app/fonts';

const ContactsContent = () => {
  return (
    <section className={fredericka.className}>
      <div className={styles.contactsWrapper}>
        <h2 className={styles.contactsTitle}>My Contacts</h2>
        <div className={styles.contactImgWrapper}>
          <Image
            src="https://res.cloudinary.com/dlllyuipi/image/upload/v1697891201/testfon1_iitvzu.webp"
            alt="photo user"
            width={550}
            height={590}
            sizes="(max-width: 768px) 50vw ,100vw"
            className={styles.contactImg}
            style={{ objectFit: 'cover' }}
            placeholder="blur"
          />
        </div>
        <ul className={styles.contactsList}>
          <li>
            <Link
              className={styles.contactsListLink}
              href="https://github.com/DmitriyUshkvarok"
              target="_blank"
            >
              <AiFillGithub size={50} />
            </Link>
          </li>
          <li>
            <Link
              className={styles.contactsListLink}
              href="https://www.linkedin.com/in/dmitriy-ushkvarok/"
              target="_blank"
            >
              <BsLinkedin size={50} />
            </Link>
          </li>
          <li>
            <Link
              href="https://t.me/Dmitriy_Ushkvarok"
              target="_blank"
              className={styles.contactsListLink}
            >
              <FaTelegram size={50} />
            </Link>
          </li>
          <li>
            <Link
              href="https://wa.me/80957453646"
              target="_blank"
              className={styles.contactsListLink}
            >
              <FaWhatsapp size={50} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/profile.php?id=100033147623156"
              target="_blank"
              className={styles.contactsListLink}
            >
              <FaFacebook size={50} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/dmitriy_ushkvarok/"
              target="_blank"
              className={styles.contactsListLink}
            >
              <FaInstagram size={50} />
            </Link>
          </li>
          <li>
            <Link
              href="mailto:dmitriy.ushkvarok@gmail.com"
              target="_blank"
              className={styles.contactsListLink}
            >
              <AiOutlineMail size={50} />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactsContent;
