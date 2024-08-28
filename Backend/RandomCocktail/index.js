import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express;
const port = 3000;
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

app.use(bodyParser.urlencoded({ extended: true }));