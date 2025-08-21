const SectionHeader = ({ SectionHeaderContent, centeredText }) => {
  return (
    <div className={`relative w-fit ${centeredText ? "mx-auto" : null}`}>
      <h2
        className={`font-stretch-expanded font-extrabold uppercase text-gray-200 text-6xl sm:text-[5rem]`}
      >
        {SectionHeaderContent.backgroundTitle}
      </h2>
      <div
        className={
          centeredText
            ? "w-full flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            : "absolute top-1/2 left-0 -translate-y-1/2 origin-left"
        }
      >
        <strong
          className={`uppercase text-xs sm:text-sm font-bold text-orange-500 `}
        >
          {SectionHeaderContent.foregroundSubtitle}
        </strong>
        <h4 className={`text-sm sm:text-2xl capitalize`}>
          {SectionHeaderContent.foregroundTitle}
        </h4>
      </div>
    </div>
  );
};

export default SectionHeader;
