import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { type, prompt } = req.body;

    const { data } = await axios.post(`https://terrible-ai.onrender.com/api/${type}}`, { message: prompt })
    res.status(200).send(data)
}