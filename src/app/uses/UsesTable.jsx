import UsesSection from "./UsesSection";

const items = [
  {
    groupName: "Workstation",
    items: [
      {
        title: "Apple Products",
        description:
          "Most of my life Lenovo had the first place on my podium, but Apple with it`s new M1/M2 gainned mu heart.the interconnectivity between devices makes my life beautiful ",
      },
      {
        title: "Philips Headphone",
        description:
          "Its a pitty those are so underated. Considering price, song quility and isolation its beats JBL in each catgory.",
      },
    ],
  },

  {
    groupName: "Design",
    items: [
      {
        title: "Whimsical",
        description:
          "I use Whimsical for all of my wireframing and flowcharting. It’s fast, has great collaboration features, and is highly customizable.",
      },
      {
        title: "Figma",
        description:
          "I use Figma for all of my design work. It’s fast, has great collaboration features, and is highly customizable.",
      },
    ],
  },
  {
    groupName: "Productivity",
    items: [
      {
        title: "Trello",
        description: "Trello makes organizing my to-do list fun and practical",
      },
      {
        title: "Red Bull",
        description: "This delicious energy drink enhances my focus and keeps sme awake on those long coders nights.",
      },
    ],
  },
  {
    groupName: "Inspirations",
    items: [
      {
        title: "Anonymous",
        description: "Because of course",
      },
      {
        title: "Mr. Robot - (just the 2 first seasons)",
        description:
          "Available on Amazon prime, it has as the main carachther a coder. I like it because it does not show coding like most of Hollywood where we can hack FBI in 2 minutes. It talks about coding and also about mental healthy",
      },
    ],
  },
];

function UsesTable() {
  return (
    <>
      <UsesSection items={items} />
    </>
  );
}

export default UsesTable;
