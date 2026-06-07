import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Server is Healthy' });
});


const PORT = process.env.PORT ?? 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});