export class Project {
  title: string;
  subtitle: string;
  img: { src: string, alt: string };
  content: string;
  tools: { prefix: string, icon: string, url: string }[];
  url: string;
}
