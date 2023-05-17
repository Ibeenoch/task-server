import axios from "axios";
import { Request, Response } from "express";
import { request } from "https";


export const getComments = async( req: Request, res: Response ) => {
    try {
        const { limit } = req.query;
        const num: number = Number(limit)
        console.log('limit: ', num, typeof num)
       const url = 'https://jsonplaceholder.typicode.com/comments'
       if(limit){
        const resp = await axios.get(url, {
            params: {
                _limit: num
            }
        });
        const { data } = resp;
        res.status(200).json(data)
        console.log('data : ', data)
       }else{
            const resp = await axios.get(url);
            const { data } = resp;
            
            res.status(200).json(data)
            console.log('data : ', data)
       }
    } catch (error) {
        console.log(error)
    }
}

export const getPosts = async( req: Request, res: Response ) => {
    try {
        const { limit } = req.query;
       const url = 'https://jsonplaceholder.typicode.com/comments';

       const num: number = Number(limit)
       console.log('limit: ', num, typeof num)

       if(limit){
        const resp = await axios.get(url, {
            params: {
                _limit: num
            }
        });
        const { data } = resp;
        res.status(200).json(data)
        console.log('data : ', data)
       }else{
            const resp = await axios.get(url);
            const { data } = resp;
            res.status(200).json(data)
            console.log('data : ', data)
       }
    } catch (error) {
        console.log(error)
    }
}