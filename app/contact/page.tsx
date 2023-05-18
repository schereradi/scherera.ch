import type { Metadata } from 'next';
import Form from './form';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me.',
};

export default async function ContactPage() {

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Get in touch</h1>
        <>
          <Form />
        </>
    </section>
  );
}
