import type { Metadata } from 'next';
import { StarIcon } from 'components/icons';

export const metadata: Metadata = {
  title: 'Technology Stack and Skills',
  description: 'Full-stack software engineer from Switzerland.',
};

export default function TechPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Technology &amp; Skills</h1>

      <div className="overflow-auto relative mt-6">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center gap-2">
                  <span className="flex items-center">
                    <StarIcon /><StarIcon /><StarIcon />
                  </span>
                  <span className="mt-2">Proficient</span>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center gap-2">
                  <span className="flex items-center">
                    <StarIcon /><StarIcon />
                  </span>
                  <span className="mt-2">Comfortable</span>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 w-1/2">
                <div className="flex items-center gap-2">
                  <span className="flex items-center">
                    <StarIcon />
                  </span>
                  <span className="mt-2">Familiar</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                Programming<br/>languages
              </th>
              <td className="px-6 py-4">
                Java, Kotlin, SQL,<br/>
                JavaScript/TypeScript,<br/>
                HTML, CSS, XML,<br/>
                Shell script (Bash)
              </td>
              <td className="px-6 py-4">
                C/C++, Python
              </td>
              <td className="px-6 py-4">
                Delphi
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                Backend<br/>frameworks
              </th>
              <td className="px-6 py-4">
                Jakarta EE, Quarkus,<br/>
                Spring, Hibernate<br/>
              </td>
              <td className="px-6 py-4">
                Vert.x
              </td>
              <td className="px-6 py-4">
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                Frontend<br/>frameworks
              </th>
              <td className="px-6 py-4">
                Next.js, React
              </td>
              <td className="px-6 py-4">
                Vaadin, Qt
              </td>
              <td className="px-6 py-4">
                Angular, SvelteKit,<br/>
                Bootstrap
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                Libraries
              </th>
              <td className="px-6 py-4">
                Apache Commons, Guava,<br/>
                Lombok, Jackson, JAXB<br/>
                RESTEasy, Freemarker,<br/>
                MapStruct, Liquibase,<br/>
                Flyway
              </td>
              <td className="px-6 py-4">
                STL, Camunda BPM,<br/>
                Caffeine, Infinispan,<br/>
                RxJava, Reactor,<br/>
                SmallRye, Lucene,<br/>
                gRPC
              </td>
              <td className="px-6 py-4">
                Kafka, jOOQ, <br/>
                Hazelcast, Pandas,<br/>
                NumPy, TensorFlow
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                Tools
              </th>
              <td className="px-6 py-4">
                Git, Subversion, Matlab,<br/>
                Atlassian, Maven, Gradle,<br/>
                Jenkins, Gitlab, Docker,<br/>
                Kubernetes, Prometheus, <br/>
                Grafana, ArgoCD,<br/>
                Keycloak, Sonar<br/>
              </td>
              <td className="px-6 py-4">
                VisualVM, LabVIEW,<br/>
                Elasticsearch
              </td>
              <td className="px-6 py-4">
                Valgrind, JProfiler,<br/>
                JMeter, Gatling,<br/>
                Simulink
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                Databases
              </th>
              <td className="px-6 py-4">
                Oracle, Db2, PostgreSQL,<br/>
                H2
              </td>
              <td className="px-6 py-4">
                MongoDB
              </td>
              <td className="px-6 py-4">
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                Testing
              </th>
              <td className="px-6 py-4">
                JUnit, Mockito, Selenium,<br/>
                Serenity, Cucumber,<br/>
                Hamcrest, TestContainers,<br/>
                REST Assured, AssertJ
              </td>
              <td className="px-6 py-4">
                Jest, Cypress,<br/>
                ArchUnit, WireMock
              </td>
              <td className="px-6 py-4">
                PowerMock
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                Architecture &amp;<br/>Design
              </th>
              <td className="px-6 py-4">
                Patterns, Clean code,<br/>
                OOP, Microservices, TDD, <br/>
                Functional programming,<br/>
                Reactive programming,<br/>
                Hexagonal architecture
              </td>
              <td className="px-6 py-4">
                UML, DDD, BDD
              </td>
              <td className="px-6 py-4">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
