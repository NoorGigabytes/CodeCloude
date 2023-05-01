import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;
      const isLastCrumb = index === array.length - 1;

      const crumbText = crumb.includes('-') ? crumb.replace(/-/g, ' ') : crumb;

      return (
        <div className="" key={crumb}>
          <Link
            to={currentLink}
            className={`md:text-lg text-md capitalize transition-all duration-300 ease-out tracking-wide ${
              isLastCrumb ? "cursor-default" : "hover:text-sky-400"
            }`}
          >
            {crumbText}
          </Link>
          {!isLastCrumb && <span className="mx-1">/</span>}
        </div>
      );
    });

  // Add the Home link at the beginning of the crumbs array
  crumbs.unshift(
    <div className="" key="home">
      <Link
        to="/"
        className={`md:text-lg text-md capitalize transition-all duration-300 ease-out tracking-wide hover:text-sky-400`}
      >
        Home
      </Link>
      <span className="mx-1">/</span>
    </div>
  );

  return <div className="flex mt-5">{crumbs}</div>;
}
