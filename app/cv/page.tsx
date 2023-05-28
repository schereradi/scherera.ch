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
          title='Senior Software Engineer'
          company='Inacta AG'
          location='Zug'
          period='11/2020 – 08/2023'
          description={
            <>
              Full-stack software development of cloud applications.
              <ul>
                <li>Remaining time: Implementation of an investment platform for FIAT and cryptocurrencies (Java 17, Quarkus, Postgres, Next.js, RabbitMQ).</li>
                <li>06/2022 - 03/2023: Implementation of a new output management system (Kotlin, Spring Boot, Camunda, Angular, OpenShift, Oracle, Gitlab, ArgoCD).</li>
                <li>11/2020 - 12/2021: Implementation of an onboarding platform (Java 11, Quarkus, Postgres, Vaadin, RabbitMQ).</li>
              </ul>
            </>
          }
        />
        <Job
          title='Senior Software Engineer'
          company='Löwenfels Partner AG'
          location='Luzern'
          period='04/2016 – 10/2020'
          description={
            <>
              Full-stack software development of a comprehensive AHV solution to support the compensation offices in handling their core processes.
            </>
          }
          tech='Java, Oracle/Db2, WildFly/WebSphere'
        />
        <Job
          title='Software Engineer'
          company='Roche Diagnostics International AG'
          location='Rotkreuz'
          period='11/2012 – 03/2016'
          description={
            <>
              Software development for state-of-the-art bloodgas Point-of-Care analyzer.
              <ul>
                <li>Main responsibility for the analyzer measurement control software.</li>
                <li>Supporting the development of the interface module.</li>
              </ul>
            </>
          }
          tech='C++, Qt, Firebird, Linux (RT-preempt patched)'
        />
        <Job
          title='Software Engineer'
          company='Bombardier Transportation AG'
          location='Zurich'
          period='08/2009 – 10/2012'
          description={
            <>
              Software development within the business unit 'Propulsion & Controls' of train control and management systems.
              <ul>
                <li>Programming of applications for vehicle control, the driver's cab displays and locomotive simulators.</li>
                <li>Requirements engineering and preparation of offers.</li>
                <li>Testing and commissioning both on simulators and railway vehicles (worldwide).</li>
              </ul>
            </>
          }
          tech='C/C++, Qt, Linux (RT-preempt patched), Matlab'
        />
        <Job
          title='Intern'
          company='Levitronix GmbH'
          location='Zurich'
          period='01/2009 – 08/2009'
          description={
            <>
              Development, design, layout and implementation of a new magnetically levitated, bearingless, 'integrated' pump.
            </>
          }
          tech='C, Altium Designer'
        />
        <Job
          title='Intern'
          company='Moelbert Datentechnik AG'
          location='Hochdorf'
          period='08/2006 – 10/2006'
          description={
            <>
              Feature implementation for a energy distribution software of a load flow calculation to simulate the effects of a switching operation.
            </>
          }
          tech='Delphi'
        />
      </div>
    </section>
  );
}
