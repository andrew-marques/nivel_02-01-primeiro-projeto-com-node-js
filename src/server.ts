import express from 'express';

const app = express();

// app.use(express.json());

// app.get('/', (REQUEST, RESPONSE) => {
//   response.json({ message: 'Hello World' });
// });

// app.post('/users', (REQUEST, RESPONSE) => {
//   const { name, email } = request.body;

//   const user = {
//     name,
//     email,
//   };

//   return response.json(user);
// });

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
