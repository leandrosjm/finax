import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MdFilterList, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { HeaderInfoContainer } from './style';

import {
  MdAddShoppingCart,
} from 'react-icons/md';

interface ITitlePagesProps {
  data?: {
    company_name: string;
    model_code: string;
  } | null;
  showAction?: boolean;
  arrowAction?: boolean;
  open?: boolean;
  handleOpen?: () => void;
  title: string;
  className?: string | 'mb-8';
  icon?: any;
  section?: string;
}

const TitlePages: React.FC<ITitlePagesProps> = ({
  data,
  showAction,
  open,
  handleOpen,
  title,
  className,
  arrowAction,
  icon,
  section
}: ITitlePagesProps) => (
  <Grid container className={className || 'mb-8'}>
    <Grid item xs={12}>
      <HeaderInfoContainer>
        <Grid container alignItems="center">
          <Grid item xs={11} sm={11} lg={11}>
            <div className="title-health">
            {icon}<h2>  {section} / {title}</h2>
              {data ? (
                <h6>
                  - {data.company_name} / {data.model_code}
                </h6>
              ) : null}
            </div>
          </Grid>
          {showAction ? (
            arrowAction ? (
              <Grid item xs={1} sm={1} lg={1}>
                <div className="icon-info-aircraft">
                  <button type="button" onClick={handleOpen}>
                    {open ? (
                      <MdKeyboardArrowUp
                        color="#292927
                      "
                      />
                    ) : (
                      <MdKeyboardArrowDown
                        color="#292927
                      "
                      />
                    )}
                  </button>
                </div>
              </Grid>
            ) : (
              <Grid item xs={1} sm={1} lg={1}>
                <div className="icon-info-aircraft">
                  <button type="button" onClick={handleOpen}>
                    {open ? <MdFilterList color="#1473E6" /> : <MdFilterList color="#d5d5d5" />}
                  </button>
                </div>
              </Grid>
            )
          ) : null}
        </Grid>
      </HeaderInfoContainer>
    </Grid>
  </Grid>
);

export default TitlePages;
