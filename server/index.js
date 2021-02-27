import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import mongodb from 'mongodb';
import cors from 'cors';

import postRoutes from './routes/posts.js';


const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes);
const CONNECTION_URL = 'mongodb+srv://mahmoud:mahmoud123@crudwars.dihx0.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5002;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port:" ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set(`useFindAndModify`, false);
