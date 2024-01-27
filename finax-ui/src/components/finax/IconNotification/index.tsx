import { Grid } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState, useRef } from 'react';
import { MdClose, MdNotificationsNone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import NoData from '../../NoData';
import LoadingPages from '../LoadingPages';
import { SimpleTable } from '../SimpleTable';
import { filesErrorHeaders } from './initial-state';
import { IconNotificationContainer } from './style';
let statusModal = '';
const IconNotification = () => {
  const ref = useRef(null);
  const [showMsgs, setShowMsgs] = useState(false);
  const [tabId, setTabId] = useState(3);
  const [filesErrorRows, setFilesErrorRows] = useState<any[]>([]);
  const [operatorsFilter, setOperatorsFilter] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickShowHiddenMsgs = () => {
    statusModal = showMsgs ? 'close' : 'show-message';
    setShowMsgs(!showMsgs);
  };

  const handleSetTabId = (id: number) => {
    setTabId(id);
  };

  const handleChangeOperator = (event: ChangeEvent<any>, newValue: any | null) => {
    event.preventDefault();
    setOperatorsFilter(newValue);
    statusModal = 'show-message';
  };

  const loadInitialData = () => {
  };

  useEffect(() => {
    loadInitialData();
  }, [operatorsFilter]);

  const getDetailUrl = (fileErrorRow: any) => {
    const params: string[] = [];
    if (fileErrorRow.company_id) params.push(`companyId=${fileErrorRow.company_id}`);
    if (fileErrorRow.company_name && fileErrorRow.company_name !== 'Finax S.A.')
      params.push(`companyName=${fileErrorRow.company_name}`);
    if (fileErrorRow.type) params.push(`type=${fileErrorRow.type}`);
    return `/files-error?${params.join('&')}`;
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleClickOutside = (e: any) => {
    if (statusModal === 'close') {
      setShowMsgs(false);
    } else {
      //const hasMessage = e.path.find((x: { id: string }) => x.id === 'show-message');
      const hasMessage = e.path?.find((x: { id: string }) => x.id === 'show-message');
      if (hasMessage && (statusModal === 'show-message' || statusModal === '')) {
        setShowMsgs(true);
      } else if (!hasMessage && statusModal === 'show-message') {
        setShowMsgs(true);
      } else {
        setShowMsgs(false);
      }
      statusModal = '';
    }
  };

  return (
    <IconNotificationContainer id="show-message">
      <button type="button" onClick={handleClickShowHiddenMsgs}>
        <div className="new-msg" />
        <MdNotificationsNone />
      </button>

      <div className={showMsgs ? 'show-messages' : 'show-messages show-messages-close'}>
        <div className="arrow-top" />

        <div className="close-notification">
          <button type="button" id="close-notification" onClick={handleClickShowHiddenMsgs}>
            <MdClose />
          </button>
        </div>
        <div className="tabs">
          <div className={tabId === 3 ? 'tab active' : 'tab'}>
            <button onClick={() => handleSetTabId(3)} type="button">
              Files Error
            </button>
          </div>
        </div>

        <div className="tab-body">
          {tabId === 3 && (
            <div ref={ref}>
              <div className="tab-row">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <h6>Period Last 7 days</h6>
                  </Grid>
                  <Grid item xs={12}>
                    {/* <SelectOperators value={operatorsFilter} handleChangeOperator={handleChangeOperator} /> */}
                  </Grid>
                  <Grid item xs={12}>
                    {isLoading ? (
                      <LoadingPages height="100px" />
                    ) : filesErrorRows.length > 0 ? (
                      <SimpleTable
                        tHeadCols={filesErrorHeaders}
                        tBodyCols={filesErrorRows.map((fileErrorRow) => ({
                          ...fileErrorRow,
                          type: fileErrorRow.type.toUpperCase(),
                          label: `${fileErrorRow.company_name} ${
                            fileErrorRow.company_dir ? fileErrorRow.company_dir : ''
                          }`,
                          details: (
                            <Link
                              to={() => getDetailUrl(fileErrorRow)}
                              style={{ color: '#00a8ff', textDecoration: 'none' }}
                            >
                              Details
                            </Link>
                          ),
                          padding: '0px 0px 0px 8px',
                        }))}
                        hasBackground={false}
                        height="140px"
                        padding="0px 0px 0px 8px"
                      />
                    ) : (
                      <NoData height="100px" />
                    )}
                  </Grid>
                </Grid>
              </div>
            </div>
          )}
        </div>
      </div>
    </IconNotificationContainer>
  );
};

export default IconNotification;
