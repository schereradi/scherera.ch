import type { Metadata } from 'next';
import { WorkIcon, EducationIcon, CertificateIcon, SmallLocationIcon, SmallDateIcon, ProgressIcon, MembershipIcon } from 'components/icons';
import { Job } from 'components/job';

export const metadata: Metadata = {
  title: 'Curriculum Vitae',
  description: 'Full-stack software engineer from Switzerland.',
};

export default function CvPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Curriculum Vitae</h1>

      <p className="text-xs md:text-sm my-5 text-neutral-800 dark:text-neutral-200">
          Solidly grounded in technology. Never satisfied, always learning. Friendly and enthusiastic team
          player and passionate about product quality and reliability. Whether working in a team or alone, concentrates on
          delivering positive, timely outcomes with an high degree of flexibility.
      </p>

      <div className="py-5 text-neutral-900 dark:text-neutral-100">

        <div className="flex justify-center text-center">
          <h2 className="text-lg md:text-xl">
            <div className="flex items-center gap-2">
              <WorkIcon />
              <div>Professional Experience</div>
            </div>
          </h2>
        </div>

        <Job
          title='Freelancer'
          location='Switzerland'
          period='03/2024 – now'
          description={
            <>
              Lending my skills and talents as a (Java) Software Engineer to clients on a flexible basis.
            </>
          }
        />
        <Job
          title='Senior Software Engineer'
          company='Inacta AG'
          location='Zug'
          period='11/2020 – 01/2024'
          description={
            <>
              Full-stack software development of cloud applications.
              <ul>
                <li>Remaining time: Implementation of a SaaS investment platform for issuing and managing token in the capital market, which is ISAE 3402 and ISO 27001 certified and complies with FINMA and GDPR regulations. (Java 17, Quarkus, Postgres, Next.js, RabbitMQ).</li>
                <li>07/2023 - 01/2024: Implementation of a 'world carbon map' for an international energy supplier with multiple data layers using DIDs and verifiable credentials on the Hedera network to increase transparency in CO₂ compensation projects (Java 17, Quarkus, Postgres, Next.js).</li>
                <li>06/2022 - 03/2023: Implementation of a new output management system for an insurance company (Kotlin, Spring Boot, Camunda, Angular, OpenShift, Oracle, Gitlab, ArgoCD).</li>
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
          tech='Java 11, Oracle/Db2, WildFly/WebSphere, IBM MQ, Jenkins 2'
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
              Software development within the business unit 'Propulsion &amp; Controls' of train control and management systems.
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

        <div className="flex justify-center text-center pt-6">
          <h2 className="text-lg md:text-xl">
            <div className="flex items-center gap-2">
              <EducationIcon />
              <div>Education</div>
            </div>
          </h2>
        </div>

        <h3 className='text-sm md:text-base pt-3'>
          <span>Master of Science in Electrical Engineering and Information Technology</span>
        </h3>
        <div className="mt-1 tracking-wide flex items-center text-xs md:text-sm">
          <SmallLocationIcon />
          <div className="pr-2">ETH Zurich</div>
          <SmallDateIcon />
          <div className="mt-1">09/2007 - 02/2010</div>
        </div>
        <h3 className='text-sm md:text-base pt-3'>
          <span>Bachelor of Science in Electrical Engineering and Information Technology</span>
        </h3>
        <div className="mt-1 tracking-wide flex items-center text-xs md:text-sm">
          <SmallLocationIcon />
          <div className="pr-2">ETH Zurich</div>
          <SmallDateIcon />
          <div className="mt-1">09/2003 - 08/2007</div>
        </div>
        <h3 className='text-sm md:text-base pt-3'>
          <span>High School</span>
        </h3>
        <div className="mt-1 tracking-wide flex items-center text-xs md:text-sm">
          <SmallLocationIcon />
          <div className="pr-2">Seetal High School</div>
          <SmallDateIcon />
          <div className="mt-1">1997 - 2003</div>
        </div>

        <div className="flex justify-center text-center pt-8">
          <h2 className="text-lg md:text-xl">
            <div className="flex items-center gap-2">
              <ProgressIcon />
              <div>Further education</div>
            </div>
          </h2>
        </div>
        <h3 className='text-sm md:text-base pt-3'>
          <span>Master of Advanced Studies in Business Administration and Engineering</span>
        </h3>
        <div className="mt-1 tracking-wide flex items-center text-xs md:text-sm">
          <SmallLocationIcon />
          <div className="pr-2">Lucerne University of Applied Sciences and Arts</div>
          <SmallDateIcon />
          <div className="mt-1">10/2016 - 10/2018</div>
        </div>

        <div className="flex justify-center text-center pt-8">
          <h2 className="text-lg md:text-xl">
            <div className="flex items-center gap-2">
              <CertificateIcon />
              <div>Certificates</div>
            </div>
          </h2>
        </div>
        <div className="mt-1 prose prose-neutral dark:prose-invert text-xs md:text-sm max-w-fit">
          <ul>
            <li>2018: <span className="font-bold">Certified Project Management Associate IPMA - Level D</span>, VZPM.</li>
            <li>2018: <span className="font-bold">Oracle Certified Associate Java SE 8 Programmer</span>, Oracle University.</li>
            <li>2017: <span className="font-bold">Certified Professional for Usability and User Experience - FL</span>, SAQ.</li>
            <li>2016: <span className="font-bold">Certified Professional for Software Architecture - FL</span>, iSAQB.</li>
            <li>2016: <span className="font-bold">Certified Scrum Master</span>, Scrum Alliance.</li>
            <li>2015: <span className="font-bold">Certified Professional for Requirements Engineering - FL</span>, iSQI.</li>
          </ul>
        </div>

        <div className="flex justify-center text-center pt-8">
          <h2 className="text-lg md:text-xl">
            <div className="flex items-center gap-2">
              <MembershipIcon />
              <div>Memberships</div>
            </div>
          </h2>
        </div>
        <div className="mt-1 prose prose-neutral dark:prose-invert text-xs md:text-sm max-w-fit">
          <ul>
            <li><a href="https://www.jug.ch/" target="_blank" rel="noopener noreferrer" className="hover:underline">Java User Group Switzerland</a></li>
            <li><a href="https://www.alumni.ethz.ch/" target="_blank" rel="noopener noreferrer" className="hover:underline">ETH Alumni</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
