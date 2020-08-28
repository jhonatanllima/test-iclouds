import React, { useState, useEffect } from 'react';

import api from '../../Services/api';

import { Container, ImgBook } from './styles';

export default function Books() {

  const [items, setItems] = useState([]);

  useEffect(() => {

    async function listBooks() {
      try {    
        const response = await api.get('volumes?q=BATMAN');
        const books = response.data.items;
        setItems(books);
      } 
      catch (error) 
      {
        console.log('Error', error.message);
      }
    }

    listBooks();

  }, []);

  return (
    <Container>

      <ImgBook>
        {items.map(item => (
          <img
            key={item.id}
            src={item.volumeInfo.imageLinks?.smallThumbnail}
            alt={item.volumeInfo.imageLinks?.title}
          />
        ))}
      </ImgBook>

    </Container>
  );
}