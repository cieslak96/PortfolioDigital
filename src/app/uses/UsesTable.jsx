import UsesSection from './UsesSection';

const items = [
  {
    groupName: 'Workstation',
    items: [
      {
        title: 'Item Name',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.',
      },
      {
        title: 'Item Name',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.',
      },
      {
        title: 'Item Name',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.',
      },
      {
        title: 'Item Name',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.',
      },
      {
        title: 'Item Name',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.',
      },

    ],
  },
  {
    groupName: 'Development Tools',
    items: [
      {
        title: 'Item Name',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.',
      },
      {
        title: 'Item Name',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.',
      },
      {
        title: 'Item Name',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.',
      },
    ],
  },
  {
    groupName: 'Design',
    items: [
      {
        title: 'Whimsical',
        description:
          'I use Whimsical for all of my wireframing and flowcharting. It’s fast, has great collaboration features, and is highly customizable.',
      },
      {
        title: 'Figma',
        description:
          'I use Figma for all of my design work. It’s fast, has great collaboration features, and is highly customizable.',
      },

    ],
  },
  {
    groupName: 'Productivity',
    items: [
      {
        title: 'Notion',
        description:
          'I use Notion for all of my note-taking and knowledge management. It’s fast, has great collaboration features, and is highly customizable.',
      },
      {
        title: 'Alfred',
        description:
          'I use Alfred for all of my productivity needs. It’s fast, has great features, and is highly customizable.',
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
