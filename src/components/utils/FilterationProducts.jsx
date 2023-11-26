import { Disclosure } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";

const FilterationProducts = ({ title, content }) => {
  return (
    <div className="mx-auto w-full max-w-md bg-white p-2">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between items-center rounded-lg px-4 py-2 text-left font-medium focus:outline-none focus-visible:ring focus-visible:ring-primary">
              <span className="text-xl">{title}</span>
              <FaAngleDown
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-hard-primary`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
              {content}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default FilterationProducts;
