'use server';

import Mailjet from 'node-mailjet';

export async function sendEmail(email: string, message: string, firstName?: string, lastName?: string) {
  const mailjet = new Mailjet({
    apiKey: process.env.MJ_APIKEY_PUBLIC,
    apiSecret: process.env.MJ_APIKEY_PRIVATE
  });
  const request = mailjet
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
          Subject: "[scherera.ch] " + lastName??'' + ' ' + firstName??'' + ': ' + email,
          TextPart: message
        }
      ]
    }).catch((err) => {
        return {
        notFound: true
        }
    });
}
