import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

function App() {
  const [books, setBooks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
     /* const result = await axios(
        'https://jsonplaceholder.typicode.com/users',
      );*/
      const result = {
        books: [
          {
            url: "https://google.com",
            title: "Artiom blyat"
          },
          {
            url: "https://google.com",
            title: "Artiom2 blyat"
          }
        ]
      }

      setBooks(result.books);
    };

    fetchData();
  }, [isLoaded]);

  if (isLoaded) {
    return (
      <div>
        <ul>
          {books.map(book => (
            <li>
              <a href={book.url}>{book.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  else {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={setIsLoaded}>get books</Button>
      </div>
    );
  }

}

export default App;