import type { Metadata } from 'next';
import Image from 'next/image';
import { DateIcon, WorkIcon } from 'components/icons';

export const metadata: Metadata = {
  title: 'Curriculum Vitae',
  description: 'Full-stack software engineer from Switzerland.',
};

export default function CvPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Curriculum Vitae</h1>

      <div className="py-12 text-neutral-900 dark:text-neutral-100">

        <div className="flex justify-center text-center">
          <h2 className="text-lg md:text-xl">
            <div className="flex items-center gap-2">
              <WorkIcon />
              <div>Professional Experience</div>
            </div>
          </h2>
        </div>

        <div className="py-6">
          <h3 className='text-sm md:text-base'>
            <span className="rounded-md px-2 bg-neutral-800 text-neutral-100">
              Software Engineer
            </span>
            <span> at Roche Diagnostics International AG</span>
          </h3>
          <div className="mt-1 tracking-wide flex items-center text-xs md:text-sm">
            <DateIcon />
            <div className="mt-1">11/2012 – 03/2016</div>
          </div>
          <div className="mt-1 prose prose-neutral dark:prose-invert text-xs md:text-sm max-w-fit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Neque viverra justo nec ultrices. Urna nunc id cursus metus aliquam eleifend mi in nulla. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Tristique senectus et netus et malesuada fames ac.
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Neque viverra justo nec ultrices.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
