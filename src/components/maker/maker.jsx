import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

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

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
