import OpenAI from 'openai';
import { OPENAI_key } from './constant';
export const openai = new OpenAI({
  apiKey: OPENAI_key,          // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true ,
  timeout:5*1000 ,
});

