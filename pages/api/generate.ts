import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { type, prompt } = req.body;
  console.log(prompt);
  const message = JSON.stringify({
    message: prompt,
  });
  console.log(message);

  const data = await fetch(`https://terrible-ai.onrender.com/api/${type}`, {
    method: "POST",
    body: message,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const resp = await data.json().then((data) => data);
  console.log(resp.response);

  res.status(200).send(resp.response);
};

export default handler;
