const FilterGroup = ({ title, inputType, options = [] }) => {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">{title}</h3>
      <hr className="mb-2 border-gray-300" />
      <div className="flex flex-column gap-2">
        {options.map((option, index) => (
          <label
            key={index}
            className="flex align-items-center gap-2 text-sm text-gray-700"
          >
            <input
              type={inputType}
              value={option.value || option.text}
              name={title}
              className="w-2rem h-2rem appearance-none border-2 border-gray-300 checked:border-none checked:bg-primary cursor-pointer"
            />
            {option.text}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;
