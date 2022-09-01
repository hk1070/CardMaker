import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'a',
      company: 'a',
      theme: 'mint',
      title: 'Software Engineer',
      email: 'abc@gmail.com',
      message: 'Hi',
      fileName: 'a',
      fileURL: null,
    },
    {
      id: '2',
      name: 'b',
      company: 'b',
      theme: 'white',
      title: 'Software Engineer',
      email: 'abc@gmail.com',
      message: 'Hi',
      fileName: 'b',
      fileURL: 'b.png',
    },
    {
      id: '3',
      name: 'c',
      company: 'c',
      theme: 'yellow',
      title: 'Software Engineer',
      email: 'abc@gmail.com',
      message: 'Hi',
      fileName: 'c',
      fileURL: null,
    },
  ]);

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
