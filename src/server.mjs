import Hapi from '@hapi/hapi';
import { addBook, getAllBooks, getBookById, updateBook, deleteBook } from './books.mjs';

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost'
  });

  server.route([
    {
      method: 'POST',
      path: '/books',
      handler: addBook
    },
    {
      method: 'GET',
      path: '/books',
      handler: getAllBooks
    },
    {
      method: 'GET',
      path: '/books/{bookId}',
      handler: getBookById
    },
    {
      method: 'PUT',
      path: '/books/{bookId}',
      handler: updateBook
    },
    {
      method: 'DELETE',
      path: '/books/{bookId}',
      handler: deleteBook
    }
  ]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
