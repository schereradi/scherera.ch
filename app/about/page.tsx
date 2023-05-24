import type { Metadata } from 'next';
import Image from 'next/image';
import { name, about, bio, avatar } from 'lib/info';
import { GitHubIcon, SquashIcon, GymIcon, StackOverflowIcon, ArrowIcon } from 'components/icons';

export const metadata: Metadata = {
  title: 'About',
  description: 'Full-stack software engineer from Switzerland.',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 max-w-[580px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
      </div>
      <p className="my-5 max-w-[580px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <p className="my-12 max-w-[580px] text-neutral-800 dark:text-neutral-200">
        Here some links to places where I spend my time:
      </p>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 max-w-[580px]">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/schereradi"
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <GitHubIcon />
            <div className="ml-3">GitHub</div>
          </div>
          <ArrowIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://stackoverflow.com/"
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <StackOverflowIcon />
            <div className="ml-3">Stack Overflow</div>
          </div>
          <ArrowIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.urban-gym.ch/"
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <GymIcon />
            <div className="ml-3">Urban Gym Hochdorf</div>
          </div>
          <ArrowIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://sqcp.ch/"
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <SquashIcon />
            <div className="ml-3">Squash Club Kriens</div>
          </div>
          <ArrowIcon />
        </a>
       </div>
    </section>
  );
}
