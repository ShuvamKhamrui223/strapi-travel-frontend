const SectionHeader = ({ SectionHeaderContent, centeredText }) => {
  return (
    <div className="relative w-fit">
      <h2
        className={`font-stretch-expanded font-black uppercase text-gray-200 text-[5rem]`}
      >
        {SectionHeaderContent.backgroundTitle}
      </h2>
      <div
        className={
          centeredText
            ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            : "absolute top-1/2 left-0 -translate-y-1/2 origin-left"
        }
      >
        <strong className="uppercase text-sm font-bold text-orange-500">
          {SectionHeaderContent.foregroundSubtitle}
        </strong>
        <h4
          className={`text-lg capitalize ${
            centeredText ? "text-center" : "text-left"
          }`}
        >
          {SectionHeaderContent.foregroundTitle}
        </h4>
      </div>
    </div>
  );
};

export default SectionHeader;
