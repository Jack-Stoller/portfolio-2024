import { ImageCarouselClientComponent } from '../display/ImageCarousel';
import { Section } from '../display/Section';
import { A } from '../input/A';
import { Chip } from '../input/Chip';

export const ProjectsSection = () => {
  return (
    <Section title='Projects' id='projects'>
      <div class='mb-16'>
        <div class='flex gap-4 mb-4'>
          <h2 class='flex-1 text-2xl font-bold text-forest-800'>
            Map Utilities
          </h2>
          <h4 class='flex-none w-36 text-forest-500 text-end'>February 2024</h4>
        </div>

        <div class='flex flex-wrap mb-2'>
          <Chip class='flex-none'>Go</Chip>
          <Chip class='flex-none'>Web Scraping</Chip>
          <Chip class='flex-none'>goroutines</Chip>
          <Chip class='flex-none'>Google Maps API</Chip>
        </div>

        <p class='text-forest-800 leading-5 indent-6 text-justify mb-4'>
          A suite of map generation tools in Go. They could create maps from a
          variety of sources such as Google Maps and worked by fetching the
          individual titles in parallel, caching them locally before stitching
          them together. With these tools I was able to generate many extremely
          detailed maps. So large in-fact most high end systems couldn't even
          open them due to memory constrains and had to be downsized. These maps
          were then used with a CO2 laser to produce detailed, intricate
          physical copies.
        </p>

        <ImageCarouselClientComponent
          images={[
            '/images/projects/map-utilities-01.webp',
            '/images/projects/map-utilities-02.webp',
            '/images/projects/map-utilities-03.webp',
            '/images/projects/map-utilities-04.webp',
          ]}
        />
      </div>

      <div class='mb-16'>
        <div class='flex gap-4 mb-4'>
          <h2 class='flex-1 text-2xl font-bold text-forest-800'>
            ClickHouse Data Analysis
          </h2>
          <h4 class='flex-none w-36 text-forest-500 text-end'>February 2024</h4>
        </div>

        <div>
          <div class='flex flex-wrap mb-2'>
            <Chip>Go</Chip>
            <Chip>Postgres</Chip>
            <Chip>ClickHouse</Chip>
            <Chip>Oracle Cloud</Chip>
            <Chip>goroutines</Chip>
            <Chip>Grafana</Chip>
          </div>
          <div class='flex gap-4'>
            <img
              src='/images/projects/clickhouse-logo.svg'
              alt='ClickHouse Data Analysis'
              width='180'
              height='156'
              class='flex-none m-8 opacity-75'
            />
            <p class='text-forest-800 leading-5 indent-6 text-justify'>
              This project initially started as a traditional Postgres database,
              but moved to Clickup to leverage it's column based database
              solution to store and analyze billions of records. The records
              were pull from a public API using a Go worker and then inserted
              into ClickHouse in batches. The worker was designed to be able to
              scale both vertically and horizontally. It featured multi phase
              data deduplication and batched database updates. The data was then
              analyzed with optimized ClickHouse queries and visualized using
              Grafana. The project was hosted on Oracle Cloud.
            </p>
          </div>
        </div>
      </div>

      <div class='mb-16'>
        <div class='flex gap-4 mb-4'>
          <h2 class='flex-1 text-2xl font-bold text-forest-800'>SwimXO</h2>
          <h4 class='flex-none w-36 text-neutral-500 text-end'>
            February 2024
          </h4>
        </div>

        <div class='mb-4'>
          <div class='flex flex-wrap mb-2'>
            <Chip>Firebase</Chip>
            <Chip>React</Chip>
            <Chip>Websockets</Chip>
            <Chip>HTML / CSS / Javascript</Chip>
          </div>
          <div class='flex gap-4'>
            <p class='flex-1 text-forest-800 leading-5 indent-6 text-justify'>
              SwimXO is a management system for swim instructors. It tracks
              student progress, schedules, courses, and payments. It uses
              Firebase as a backend for authentication and data storage.
              Websockets are used to provide real-time updates to the interface
              as changes are made. The code for this project is available on{' '}
              <A to='#'>GitHub</A>.
            </p>
            <img
              src='/images/projects/swimxo-logo.svg'
              alt='ClickHouse Data Analysis'
              width='180'
              height='150'
              class='flex-none m-8'
            />
          </div>
        </div>

        <ImageCarouselClientComponent
          images={[
            '/images/projects/swimxo-01.webp',
            '/images/projects/swimxo-02.webp',
          ]}
        />
      </div>

      <div>
        <div class='mb-4'>
          <h2 class='text-2xl font-bold text-forest-800 mb-2'>
            Encryption Report
          </h2>
          <div class='flex flex-wrap mb-2'>
            <Chip>Three.js</Chip>
            <Chip>Web Components</Chip>
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>JavaScript</Chip>
          </div>
          <p class='text-forest-800 leading-5 indent-6 text-justify'>
            An interactive and visual report that examines the evolution of U.S.
            government regulation on data security, encryption and user privacy.
            It was originally created as a capstone project in one of my
            undergraduate courses. The code for this project is available on{' '}
            <A to='#'>GitHub</A>. A live version of the report can be viewed{' '}
            <A to='#'>here</A>.
          </p>
        </div>

        <ImageCarouselClientComponent
          images={[
            '/images/projects/encryption-01.webp',
            '/images/projects/encryption-02.webp',
            '/images/projects/encryption-03.webp',
            '/images/projects/encryption-04.webp',
          ]}
        />
      </div>
    </Section>
  );
};
