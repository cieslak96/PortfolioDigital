import PropTypes from "prop-types";

const UsesCard = ({ title, content }) => {
  return (
    <div className={"flex flex-col gap-y-4 w-full md:max-w-[800px] mx-auto"}>
      <h3 className={"m-0 text-lg md:text-lg font-semibold"}>{title}</h3>
      <p className={"m-0 text-sm md:text-base font-sans"}>{content}</p>
    </div>
  );
};

UsesCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default UsesCard;
