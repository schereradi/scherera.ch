import type { NextApiRequest, NextApiResponse } from "next";
import Mailjet from 'node-mailjet';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, message, first_name, last_name } = req.body;

  const mailjet = new Mailjet({
    apiKey: process.env.MJ_APIKEY_PUBLIC,
    apiSecret: process.env.MJ_APIKEY_PRIVATE
  });

  try {
    const result = await mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: "adrian.scherer@inacta.ch",
              Name: "Scherer Adrian"
            },
            To: [
              {
                Email: "scherer.adi@gmail.com"
              }
            ],
            Subject: "[scherera.ch] " + last_name + ' ' + first_name + ': ' + email,
            TextPart: message
          }
        ]
      })
    return res.status(200).json({ error: null });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to send email!' });
  }
}