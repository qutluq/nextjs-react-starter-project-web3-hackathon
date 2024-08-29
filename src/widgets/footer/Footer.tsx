type PropTypes = {
  currentPage: string;
};
export const Footer = ({ currentPage }: PropTypes) => {
  return (
    <div className="h-24 p-4 w-full flex items-center justify-center">
      <div className="flex flex-row justify-center items-center rounded-lg overflow-hidden">
        Footer menu of {currentPage}
      </div>
    </div>
  );
};
