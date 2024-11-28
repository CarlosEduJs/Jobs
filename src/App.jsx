import { useState } from "react";

import jobs from "./data.json";
import { Job } from "./components/Job";

import IconRemove from "./assets/images/icon-remove.svg";

import { useFilters } from "./context/FiltersContext";

import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [initialList] = useState(jobs);
  const { filters, setFilters, removeFromList } = useFilters();

  const filterJobs = (jobs, filters) => {
    if (filters.length === 0) return jobs;

    return jobs.filter((job) => {
      const jobFilters = [job.role, ...job.languages, ...job.tools, job.level];

      return filters.every((filter) => jobFilters.includes(filter.filterName));
    });
  };

  const filteredJobs = filterJobs(initialList, filters);

  return (
    <div className="flex flex-col gap-4 ">
      <header className="header bg-primary-desaturated-dark-cyan"></header>
      <div className="flex flex-col gap-2 py-2 w-full px-[4rem] max-md:px-3">
        <AnimatePresence>
          {filters.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`lg:flex lg:items-center  ${
                filters.length >= 7
                  ? "max-lg:flex-col max-lg:gap-4 "
                  : "max-lg:flex-row"
              } justify-between bg-white px-4 max-md:py-5 md:py-2 rounded-md  shadow-md relative bottom-14`}
            >
              <span className="text-sm font-semibold">
                Filters ({filters.length})
              </span>
              <div className="flex items-center overflow-x-auto gap-3 max-md:grid max-md:grid-cols-5 max-sm:grid-cols-2 max-md:w-fit">
                <AnimatePresence>
                  {filters.map((filter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      className="bg-neutral-light-grayish-cyan-filter w-fit text-primary-desaturated-dark-cyan pl-3 text-xs max-md:text-sm font-bold rounded-md cursor-pointer flex items-center gap-3 "
                    >
                      {filter.filterName}
                      <img
                        src={IconRemove}
                        alt="remove-icon"
                        onClick={() => removeFromList(filter)}
                        className=" bg-primary-desaturated-dark-cyan transition-all duration-500 hover:bg-neutral-very-dark-grayish-cyan p-2 rounded-r"
                      />
                    </motion.span>
                  ))}
                </AnimatePresence>
              </div>
              <span
                onClick={() => setFilters([])}
                className="text-sm text-primary-desaturated-dark-cyan font-bold cursor-pointer hover:underline"
              >
                Clear
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col md:py-6 max-md:py-5 md:gap-4 max-md:gap-10">
          {filteredJobs.map((job) => (
            <Job
              key={job.id}
              company={job.company}
              contract={job.contract}
              location={job.location}
              newJob={job.new}
              languages={job.languages}
              level={job.level}
              featured={job.featured}
              logo={job.logo}
              position={job.position}
              postedAt={job.postedAt}
              role={job.role}
              tools={job.tools}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
