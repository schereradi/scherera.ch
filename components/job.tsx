import React, { ReactNode } from 'react';
import { SmallDateIcon, WorkIcon, SmallLocationIcon } from 'components/icons';

interface JobProps {
  title: string;
  company?: string;
  location: string;
  period: string;
  description: ReactNode;
  tech?: string;
}

export const Job: React.FC<JobProps> = ({
  title, location, company, period, description, tech
}) => {
  return (
    <div className="py-3">
      <h3 className='text-sm md:text-base'>
        <span className="rounded-md px-2 bg-neutral-800 text-neutral-100">
          {title}
        </span>
        {company && (
          <span> at {company}</span>
        )}
      </h3>
      <div className="mt-1 tracking-wide flex items-center text-xs md:text-sm">
        <SmallLocationIcon />
        <div className="pr-2">{location}</div>
        <SmallDateIcon />
        <div className="mt-1">{period}</div>
      </div>
      <div className="mt-1 prose prose-neutral dark:prose-invert text-xs md:text-sm max-w-fit">
        {description}
      </div>
      {tech && (
        <div className="mt-1 prose prose-neutral dark:prose-invert text-xs md:text-sm max-w-fit">
          <span className="font-bold">Tech-Stack: </span>{tech}
        </div>
      )}

    </div>
  );
};