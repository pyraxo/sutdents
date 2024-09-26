export type Link = {
  name: string;
  url: string;
  emoji: string;
};

export type Category = {
  name: string;
  emoji: string;
  links: Link[];
};

export const categories: Category[] = [
  {
    name: "Academic",
    emoji: "📚",
    links: [
      { name: "MyPortal", url: "https://myportal.sutd.edu.sg/", emoji: "🏫" },
      { name: "eDimension", url: "https://edimension.sutd.edu.sg/", emoji: "🖥️" },
      { name: "Calendar", url: "https://www.sutd.edu.sg/academic-calendar", emoji: "📅" },
      { name: "GEMS", url: "https://sutd-csm.symplicity.com/", emoji: "📈" },
    ]
  },
  {
    name: "Facilities",
    emoji: "🏢",
    links: [
      { name: "Housing Portal", url: "https://hms.sutd.edu.sg/studentportal", emoji: "🏠" },
      { name: "Library", url: "https://mylibrary.sutd.edu.sg/", emoji: "📚" },
      { name: "FabLab", url: "https://edbooking.sutd.edu.sg/fablabbooking/Web/", emoji: "🖥️" },
    ]
  },
  {
    name: "Campus Life",
    emoji: "🌳",
    links: [
      { name: "ROOT", url: "https://root.sutd.edu.sg/", emoji: "🌟" },
      { name: "Fifth Rows", url: "https://root.sutd.edu.sg/student-life/fifth-row-directory", emoji: "👥" },
    ]
  },
  {
    name: "Tools",
    emoji: "🛠️",
    links: [
      { name: "Cal/ICS", url: "https://t.me/sutd_ics_bot", emoji: "📅" },
      { name: "SAM", url: "https://t.me/SUTDMapBot", emoji: "🗺️" },
    ]
  },
]