import OpenAI from 'openai';
// import 'dotenv/config';
import { OPENAI_key } from './constant';

require('dotenv').config();
// 
// const secretKey = process.env.OPENAI_key;

// console.log("secret",secretKey)


 const openai = new OpenAI({
  apiKey: OPENAI_key,          // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true ,
  timeout:5*1000 ,
});
