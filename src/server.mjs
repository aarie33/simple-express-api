import express from 'express';
import {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
// eslint-disable-next-line import/extensions
} from './books.mjs';

const app = express();
app.use(express.json());

const port = 9000;

app.post('/books', addBook);
app.get('/books', getAllBooks);
app.get('/books/:bookId', getBookById);
app.put('/books/:bookId', updateBook);
app.delete('/books/:bookId', deleteBook);

app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});
