# scherera.ch

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)

## Local development

This application requires Node.js v16.13+.

```bash
git clone https://github.com/schereradi/scherera.ch.git
cd scherera.ch
npm install
npm run dev
```

## Deployment

- **Azure**: [Azure Static Web Apps CLI](https://github.com/Azure/static-web-apps-cli)

```bash
npm run build
swa deploy dist --env production -d <secret>
```
