import { ImageCarouselClientComponent } from '../display/ImageCarousel';
import { P } from '../display/P';
import { Project } from '../display/Project';
import { Section } from '../display/Section';
import { A } from '../input/A';
import { Chip } from '../input/Chip';

export const ProjectsSection = () => {
  return (
    <Section title='Projects' id='projects'>
      <Project
        title='Map Utilities'
        date='February 2024'
        skills={['Go', 'Web Scraping', 'goroutines', 'Google Maps API']}
      >
        <P class='mb-4'>
          A suite of map generation tools in Go. They could create maps from a
          variety of sources such as Google Maps and worked by fetching the
          individual titles in parallel, caching them locally before stitching
          them together. With these tools I was able to generate many extremely
          detailed maps. So large in-fact most high end systems couldn't even
          open them due to memory constrains and had to be downsized. These maps
          were then used with a CO2 laser to produce detailed, intricate
          physical copies.
        </P>

        <ImageCarouselClientComponent
          images={[
            '/images/projects/map-utilities-01.webp',
            '/images/projects/map-utilities-02.webp',
            '/images/projects/map-utilities-03.webp',
            '/images/projects/map-utilities-04.webp',
          ]}
        />
      </Project>

      <Project
        title='ClickHouse Data Analysis'
        date='February 2024'
        skills={[
          'Go',
          'Postgres',
          'ClickHouse',
          'Oracle Cloud',
          'goroutines',
          'Grafana',
        ]}
      >
        <div class='flex gap-8'>
          <img
            src='/images/projects/clickhouse-logo.svg'
            alt='ClickHouse Data Analysis'
            width='180'
            height='156'
            class='hidden sm:block flex-none m-8 opacity-75'
          />
          <P>
            This project initially started as a traditional Postgres database,
            but moved to ClickHouse to leverage it's column based database
            solution to store and analyze billions of records. The records were
            pull from a public API using a Go worker and then inserted into
            ClickHouse in batches. The worker was designed to be able to scale
            both vertically and horizontally. It featured multi phase data
            deduplication and batched database updates. The data was then
            analyzed with optimized ClickHouse queries and visualized using
            Grafana. The project was hosted on Oracle Cloud.
          </P>
        </div>
      </Project>

      <Project
        title='SwimXO'
        date='February 2024'
        skills={[
          'Firebase',
          'ReactJS',
          'Websockets',
          'HTML',
          'CSS',
          'JavaScript',
        ]}
      >
        <div class='flex gap-4 mb-4'>
          <p class='flex-1 text-forest-800 leading-5 indent-6 text-justify'>
            SwimXO is a management system for swim instructors. It assists
            swimming instructors by tracking student progress, schedules,
            courses, and payments. The front end is a responsive webapp written
            in ReactJS. It uses Firebase as a backend for authentication and
            data storage. Websockets are used to provide real-time updates to
            the interface as changes are made. The code for this project is
            available on <A to='#'>GitHub</A>.
          </p>
          <img
            src='/images/projects/swimxo-logo.svg'
            alt='ClickHouse Data Analysis'
            width='180'
            height='150'
            class='hidden sm:block flex-none mx-8'
          />
        </div>

        <ImageCarouselClientComponent
          images={[
            '/images/projects/swimxo-01.webp',
            '/images/projects/swimxo-02.webp',
          ]}
        />
      </Project>

      <Project
        title='Encryption Report'
        date='February 2024'
        skills={['Three.js', 'Web Components', 'HTML', 'CSS', 'JavaScript']}
      >
        <P class='mb-4'>
          An interactive and visual report that examines the evolution of U.S.
          government regulation on data security, encryption and user privacy.
          It was originally created as a capstone project in one of my
          undergraduate courses. It uses Three.js to show interactive 3d
          models.X The code for this project is available on{' '}
          <A to='#'>GitHub</A>. A live version of the report can be viewed{' '}
          <A to='#'>here</A>.
        </P>

        <ImageCarouselClientComponent
          images={[
            '/images/projects/encryption-01.webp',
            '/images/projects/encryption-02.webp',
            '/images/projects/encryption-03.webp',
            '/images/projects/encryption-04.webp',
          ]}
        />
      </Project>
    </Section>
  );
};
