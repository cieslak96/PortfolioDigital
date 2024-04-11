import React from 'react';
import PropTypes from 'prop-types';
import UsesCard from './UsesCard';

const UsesSection = ({ items }) => {
  return (
    <section className="flex flex-col p-4 md:p-8">
      <div className="flex flex-col gap-y-8 md:gap-y-16">
        {items.map((group, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start gap-x-8 pl-4 border-l-2 border-gray-300">
            <h2 className="text-xl font-bold min-w-[250px]">{group.groupName}</h2>
            <div className="flex flex-col gap-y-8">
              {group.items.map((item, idx) => (
                <UsesCard
                  key={idx}
                  title={item.title}
                  content={item.description}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

UsesSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
        })
      ),
    })
  ),
};

UsesSection.defaultProps = {
  items: [],
};

export default UsesSection;
