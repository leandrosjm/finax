import React from 'react';

import { RiArrowRightSLine } from 'react-icons/ri';

import { Link } from 'react-router-dom';
import useUtc from '../../../hooks/useUtc';
import { BreadCrumbUi } from './style';

interface IBreadcrumb {
  title: string;
  url: string;
}

interface IBreadcrumbProps {
  routesBradCrumb: IBreadcrumb[];
}

const Breadcrumb: React.FC<IBreadcrumbProps> = ({ routesBradCrumb }: IBreadcrumbProps) => {
  const timestamp = useUtc();
  return (
    <BreadCrumbUi>
      <ul>
        {routesBradCrumb.length > 1 ? (
          routesBradCrumb.map((route, idx) => {
            if (idx > 0) {
              return (
                <li key={`${route.title}`}>
                  <RiArrowRightSLine />
                  <span>
                    {routesBradCrumb.length === idx + 1 ? route.title : <Link to={route.url}>{route.title}</Link>}
                  </span>
                </li>
              );
            }

            return (
              <li key={`${route.title}`}>
                <Link to={route.url}>{route.title}</Link>
              </li>
            );
          })
        ) : (
          <li key="id-001">{routesBradCrumb[0].title}</li>
        )}
      </ul>
      <div className="clock">{timestamp}</div>
    </BreadCrumbUi>
  );
};

export default Breadcrumb;
