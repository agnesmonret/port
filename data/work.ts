export type WorkCardType = {
  title: string;
  description: string;
  authors?: string[];
  href?: string;
  company?: string;
  img?: string;
  h?: string;
};

export const works: WorkCardType[] = [
  {
    title: "Coming soon",
    description: "New project coming soon!",
  },
];
