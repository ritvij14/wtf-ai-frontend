import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { type, prompt } = req.body;
  const data = await fetch(`https://terrible-ai.onrender.com/api/${type}`, {
    method: "POST",
    body: JSON.stringify({
      message: prompt,
    }),
  });
  const resp = await data.json().then((data) => data);

  res.status(200).send(resp.response);
};

export default handler;
