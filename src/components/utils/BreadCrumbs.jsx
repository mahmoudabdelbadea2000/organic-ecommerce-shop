import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div key={crumb} className="last:text-primary">
          <Link to={currentLink} className="font-extralight">
            <p>
              <span className="text-gray-400">{`>`}</span> {crumb}
            </p>
          </Link>
        </div>
      );
    });

  return (
    <section className="bg-bread-crumbs bg-cover bg-no-repeat w-full h-fit py-4 text-gray-400 flex items-center">
      <div className="container">
        <div className="flex items-center gap-1">
          <Link to="/">
            <BiHomeAlt className="text-xl" />
          </Link>
          {crumbs}
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbs;
