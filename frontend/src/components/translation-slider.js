const TranslationSlider = () => {
  return (
    <div className="absolute top-10 right-10 flex items-center justify-center ">
      <div className="flex items-center justify-center w-full mb-12">
        <label
          htmlFor="translation-toggle"
          className="flex items-center cursor-pointer"
        >
          <div className="mr-3 text-gray-700 font-medium">English</div>
          <div className="relative">
            <input
              id="translation-toggle"
              type="checkbox"
              className="sr-only"
            />
            <div className="w-10 h-4 bg-theme-teal bg-opacity-25 rounded-full shadow-inner"></div>
            <div className="dot absolute w-6 h-6 bg-theme-teal rounded-full shadow -left-1 -top-1 transition"></div>
          </div>
          <div className="ml-3 text-gray-700 font-medium">한국어</div>
        </label>
      </div>
    </div>
  );
};

export default TranslationSlider;
