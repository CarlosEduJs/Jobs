import { useFilters } from "../context/FiltersContext";
import { motion, AnimatePresence } from "framer-motion";

export const Job = ({
  logo,
  company,
  position,
  newJob = false,
  featured = false,
  postedAt,
  level,
  contract,
  location,
  languages,
  tools,
  role,
}) => {
  const { addFilter, filters } = useFilters();

  return (
    <AnimatePresence>
      <motion.div
        key={company + position}
        initial={{ opacity: 0, x: -50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0, y: 20 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
        className={`flex md:items-center max-md:flex-col max-md:gap-2 justify-between bg-white rounded-md px-6 md:py-4 max-md:pb-5 shadow-md ${
          newJob && featured
            ? "border-l-4 border-primary-desaturated-dark-cyan"
            : ""
        }`}
      >
        <div className="flex md:items-center gap-4 max-md:flex-col max-md:border-b">
          <img
            src={logo}
            className="w-14 max-md:relative max-md:bottom-5"
            alt={`logo-${company}`}
          />
          <div className="flex flex-col gap-2 max-md:relative max-md:bottom-5">
            <div className="flex items-center gap-2">
              <span aria-label="company" className="text-primary-desaturated-dark-cyan font-bold text-xs max-md:text-sm">
                {company}
              </span>
              {newJob && (
                <span aria-label="new job" className="bg-primary-desaturated-dark-cyan text-[9px] max-md:text-xs rounded-xl text-white px-2 font-semibold">
                  NEW!
                </span>
              )}
              {featured && (
                <span aria-label="featured" className="bg-neutral-very-dark-grayish-cyan text-[9px] max-md:text-xs rounded-xl text-white px-1 font-semibold">
                  FEATURED
                </span>
              )}
            </div>
            <button
              onClick={() => addFilter({ filterName: level })}
              aria-label={`filter by position: ${position}`}
              className="text-xl font-bold max-md:text-2xl transition-all duration-500 hover:text-primary-desaturated-dark-cyan cursor-pointer w-fit bg-transparent border-none"
            >
              {position}
            </button>
            <ul className="flex items-center gap-2">
              <li className="text-neutral-400 text-xs max-md:text-sm">
                {postedAt}
              </li>
              <li className="text-neutral-400 text-xs max-md:text-sm list-disc list-inside">
                {contract}
              </li>
              <li className="text-neutral-400 text-xs max-md:text-sm list-disc list-inside">
                {location}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-4 max-md:grid max-md:grid-cols-5 max-sm:grid-cols-3 max-md:w-fit max-md:gap-2">
          <button
            onClick={() => addFilter({ filterName: role })}
            className={`transition-all duration-300 ${
              filters.some((filter) => filter.filterName === role)
                ? "hover:bg-neutral-light-grayish-cyan-filter hover:text-primary-desaturated-dark-cyan bg-primary-desaturated-dark-cyan text-white"
                : "bg-neutral-light-grayish-cyan-filter text-primary-desaturated-dark-cyan hover:bg-primary-desaturated-dark-cyan hover:text-white"
            } text-xs max-md:text-sm font-bold px-2 py-1 rounded-md cursor-pointer w-fit outline-primary-desaturated-dark-cyan border-none`}
          >
            {role}
          </button>
          <button
            onClick={() => addFilter({ filterName: level })}
            className={`transition-all duration-300 ${
              filters.some((filter) => filter.filterName === level)
                ? "hover:bg-neutral-light-grayish-cyan-filter hover:text-primary-desaturated-dark-cyan bg-primary-desaturated-dark-cyan text-white"
                : "bg-neutral-light-grayish-cyan-filter text-primary-desaturated-dark-cyan hover:bg-primary-desaturated-dark-cyan hover:text-white"
            } text-xs max-md:text-sm font-bold px-2 py-1 rounded-md cursor-pointer w-fit outline-primary-desaturated-dark-cyan border-none`}
          >
            {level}
          </button>

          {tools.map((tool, index) => (
            <button
              key={index}
              onClick={() => addFilter({ filterName: tool })}
              className={`transition-all duration-300 ${
                filters.some((filter) => filter.filterName === tool)
                  ? "hover:bg-neutral-light-grayish-cyan-filter hover:text-primary-desaturated-dark-cyan bg-primary-desaturated-dark-cyan text-white"
                  : "bg-neutral-light-grayish-cyan-filter text-primary-desaturated-dark-cyan hover:bg-primary-desaturated-dark-cyan hover:text-white"
              } text-xs max-md:text-sm font-bold px-2 py-1 rounded-md cursor-pointer w-fit outline-primary-desaturated-dark-cyan border-none`}
            >
              {tool}
            </button>
          ))}
          {languages.map((language, index) => (
            <button
              key={index}
              onClick={() => addFilter({ filterName: language })}
              className={`transition-all duration-300 ${
                filters.some((filter) => filter.filterName === language)
                  ? "hover:bg-neutral-light-grayish-cyan-filter hover:text-primary-desaturated-dark-cyan bg-primary-desaturated-dark-cyan text-white"
                  : "bg-neutral-light-grayish-cyan-filter text-primary-desaturated-dark-cyan hover:bg-primary-desaturated-dark-cyan hover:text-white"
              } text-xs max-md:text-sm font-bold px-2 py-1 rounded-md cursor-pointer w-fit outline-primary-desaturated-dark-cyan border-none`}
            >
              {language}
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
