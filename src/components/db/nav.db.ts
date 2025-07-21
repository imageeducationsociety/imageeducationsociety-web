export type MenuItem = {
  title: string;
  href: {
    id: string;
    duration?: number;
  };
};

export const menu: MenuItem[] = [
  {
    title: "About",
    href: {
      id: "About",
      duration: 1,
    },
  },

  {
    title: "Gallery",
    href: {
      id: "Gallery",
      duration: 1,
    },
  },
  {
    title: "Services",
    href: {
      id: "Services",
      duration: 1,
    },
  },
  {
    title: "Team",
    href: {
      id: "Team",
      duration: 1,
    },
  },
  {
    title: "Contact",
    href: {
      id: "Contact",
      duration: 1,
    },
  },
];
