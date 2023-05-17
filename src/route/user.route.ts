import express, { Express, Router } from "express";
import { getComments, getPosts } from "../controller/user.controller";

const route: Router = express.Router();

route.get('/api/comments', getComments)
route.get('/api/posts', getPosts)

export default route;