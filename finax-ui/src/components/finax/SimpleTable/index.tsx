import { Checkbox, Radio, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { Container, SimpleTableContainer, SimpleTableData, SimpleTableRow } from './style';

export type THeadColsProps = {
  title: string;
  key: string;
  width?: string;
  showCheck?: boolean;
  checked?: boolean;
  checkDisabled?: boolean;
  align?: 'left' | 'center' | 'right';
  disabled?: boolean;
  showEmpty?: boolean;
};

type SimpleTableProps = {
  tHeadCols: THeadColsProps[];
  tBodyCols: any;
  hasBackground?: boolean;
  height?: string;
  systemSelected?: string;
  padding?: string;
  setCheck?: (row: any, rowId: number, isCheckAll?: boolean) => void;
  setCheckRadio?: (row: any, rowId: number, checked: boolean) => void;
};

export function SimpleTable({
  tHeadCols,
  tBodyCols,
  hasBackground = true,
  height,
  padding,
  setCheck,
  setCheckRadio,
  systemSelected,
}: SimpleTableProps) {
  const checkRowsSelected = (systemSelected: string, key: string) => {
    if (systemSelected === key) return true;

    return false;
  };

  return (
    <Container background={hasBackground} height={height}>
      <SimpleTableContainer stickyHeader paddingfirstchild={padding}>
        <TableHead>
          <TableRow>
            {tHeadCols.map((th, idxCol) => (
              <>
                {th.showEmpty && idxCol === 0 ? (
                  <TableCell variant="head" key={`check-first-${idxCol}`}></TableCell>
                ) : null}
                {th.showCheck && idxCol === 0 ? (
                  <TableCell variant="head" key={`check-first-${idxCol}`}>
                    <Checkbox
                      color="primary"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                      size="small"
                      checked={th.checked}
                      disabled={th.checkDisabled}
                      onChange={() => setCheck && setCheck(th, idxCol, true)}
                    />
                  </TableCell>
                ) : null}

                <TableCell
                  style={{
                    width: `${th.width ? th.width : 'auto'}`,
                  }}
                  align={th.align}
                  key={`head-${th.key}-${idxCol}`}
                  variant="head"
                >
                  {th.title}
                </TableCell>
              </>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tBodyCols.map(
            (
              row: {
                key: string;
                valueRadio: string;
                showCheck?: boolean;
                isChecked?: boolean;
                showRadio?: boolean;
                checked?: boolean;
                checkDisabled?: boolean;
                padding?: string;
                onClick?: () => any;
              },
              idxRow: number
            ) => (
              <SimpleTableRow
                key={`simp-table-row-${row.key}-${idxRow}`}
                onClick={row.onClick && row.onClick}
                hasonclick={!!row.onClick ? 'pointer' : 'auto'}
                paddingprop={row.padding}
                rowselected={checkRowsSelected(systemSelected as string, row.key)}
              >
                {tHeadCols.map((th, idxCol) => (
                  <>
                    {row.showCheck && idxCol === 0 ? (
                      <TableCell key={`col-ch-${th.key}-${idxRow}-${idxCol}`} variant="body">
                        <Checkbox
                          color="primary"
                          inputProps={{
                            'aria-label': 'primary checkbox',
                          }}
                          size="small"
                          disabled={row.checkDisabled}
                          checked={row.checked}
                          onChange={() => setCheck && setCheck(row, idxRow)}
                        />
                      </TableCell>
                    ) : null}

                    {row.showRadio && idxCol === 0 ? (
                      <TableCell key={`col-rd-${th.key}-${idxRow}-${idxCol}`} variant="body">
                        <Radio
                          color="primary"
                          inputProps={{ 'aria-label': 'primary radio' }}
                          size="small"
                          onChange={() => setCheckRadio && setCheckRadio(row, idxRow, row.key === row.valueRadio)}
                          checked={row.key === row.valueRadio}
                          value={row.key}
                        />
                      </TableCell>
                    ) : null}

                    <SimpleTableData
                      key={`col-tt-${th.key}-${idxRow}-${idxCol}`}
                      variant="body"
                      style={th.align === 'center' ? { textAlign: 'center' } : { textAlign: 'inherit' }}
                    >
                      {typeof tBodyCols[idxRow][th.key] === 'function'
                        ? tBodyCols[idxRow][th.key]()
                        : tBodyCols[idxRow][th.key]}
                    </SimpleTableData>
                  </>
                ))}
              </SimpleTableRow>
            )
          )}
        </TableBody>
      </SimpleTableContainer>
    </Container>
  );
}
