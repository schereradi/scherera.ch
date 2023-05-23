'use client';

import { useRouter } from 'next/navigation';
import { LocationIcon, EmailIcon, PhoneIcon } from 'components/icons';
import Mailjet from 'node-mailjet';
import { useState, useTransition } from 'react';

export default function Form() {
  const router = useRouter();
  const [isSent, setIsSent] = useState<boolean>(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const email = form.elements.namedItem('email') as HTMLInputElement;
    const first_name = form.elements.namedItem('first') as HTMLInputElement;
    const last_name = form.elements.namedItem('last') as HTMLInputElement;
    const message = form.elements.namedItem('message') as HTMLInputElement;

    const res = await fetch('/api/mail', {
      body: JSON.stringify({
        email: email.value,
        message: message.value,
        last_name: last_name.value,
        first_name: first_name.value
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    setIsSent(true);
  }

  return (
    <>
      {isSent ? (
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          Thank you for your message!
        </p>
      ) : (
        <form
          style={{ opacity: 1 }}
          className="relative max-w-[500px] text-sm"
          onSubmit={onSubmit}
        >
          <div className="pb-4">
            <label 
              htmlFor="email-input"
              className="pl-4"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              required
              className="pl-4 pr-32 py-1 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border border-neutral-400 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 pb-4">
            <div>
              <label 
                htmlFor="first-input"
                className="pl-4"
              >
                First name
              </label>
              <input
                id="first"
                type="text"
                name="first"
                autoComplete="given-name"
                className="pl-4 pr-32 py-1 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border border-neutral-400 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
              />
            </div>
            <div>
              <label 
                htmlFor="last-input"
                className="pl-4"
              >
                Last name
              </label>
              <input
                id="last"
                type="text"
                name="last"
                autoComplete="family-name"
                className="pl-4 pr-32 py-1 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border border-neutral-400 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
              />
            </div>
          </div>
          <div className="pb-4">
            <label 
              htmlFor="message-input"
              className="pl-4"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={10}
              className="pl-4 pr-32 py-1 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border border-neutral-400 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            />
          </div>
          <button
            className="flex items-center justify-center right-1 top-1 px-2 py-2 font-medium h-7 bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded w-full"
            type="submit"
          >
            Send
          </button>
        </form>
      )}
      <div className="max-w-[500px] pt-8">
        <div
          className="flex w-full border border-neutral-200 dark:border-neutral-800 space-x-4 Srounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-center"
        >
          <div title="Fluhgarten 1, CH-6037 Root" className="flex items-center">
            <LocationIcon />
          </div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:scherer.adi@gmail.com"
          >
            <div className="flex items-center">
              <EmailIcon />
            </div>
          </a>
          <div title="+41'79'580'25'84" className="flex items-center">
            <PhoneIcon />
          </div>
        </div>
      </div>
    </>
  );
}
