import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';

const app = express();

app.use(cors({ origin: 'https://example.com' })); 


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100, 
    message: "Trop de requêtes effectuées depuis cette IP, veuillez réessayer après 15 minutes."
});


app.use(limiter);

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello world' });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
