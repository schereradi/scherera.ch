import Link from 'next/link';
import { name } from 'lib/info';
import { NerdIcon } from 'components/icons';

export const revalidate = 60;

export default async function HomePage() {

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Welcome to {name}’s website</h1>
      <p className="my-5 max-w-[580px] text-neutral-800 dark:text-neutral-200">
        This is my own personal website. It's just a playground for experimentation, a place to try new techniques and learn new tools.
        There is no primary use-case for this website... <span className="inline-block"><NerdIcon /></span>
      </p>
      <p className="my-5 max-w-[580px] text-neutral-800 dark:text-neutral-200">
        This site is built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Next.js</a> and hosted on <a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Azure</a>.
      </p>
      <footer className="fixed bottom-5 z-20 text-neutral-800 dark:text-neutral-200">
        © {new Date().getFullYear() } {name}. Made in Switzerland.
      </footer>
    </section>
  );
}
