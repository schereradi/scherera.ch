import type { Metadata } from 'next';
import Image from 'next/image';
import { name, about, bio, avatar } from 'lib/info';

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
    </section>
  );
}
