import type { Metadata } from 'next';
import { WorkIcon } from 'components/icons';
import { Job } from 'components/job';

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

        <Job
          title='Software Engineer'
          company='Roche Diagnostics International AG'
          location='Rotkreuz'
          period='11/2012 – 03/2016'
          description={
            <>
              Software development for state-of-the-art bloodgas Point-of-Care analyzer.
              <ul>
                <li>Responsible for the analyzer measurement control software, which calculates measured values from the sensor or from the oxymetry module, performs the calibration and quality control of the sensor, handles errors in the instrument, controls and monitors all sensors and actuators, etc.</li>
                <li>Supporting the development of the interface module.</li>
              </ul>
            </>
          }
          tech='C++, Qt, Firebird, Linux (RT-preempt patched)'
        />
      </div>
    </section>
  );
}
