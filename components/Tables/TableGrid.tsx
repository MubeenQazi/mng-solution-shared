/** @format */
import React, { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./Table.scss";

const SortingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10.686"
      height="15.299"
      viewBox="0 0 10.686 15.299"
    >
      <g
        id="Group_12695"
        data-name="Group 12695"
        transform="translate(1959.02 7549)"
      >
        <path
          id="Path_11665"
          data-name="Path 11665"
          d="M200.454,68.133l3.785-3.825,3.845,3.845a.9.9,0,0,0,1.262,0,.881.881,0,0,0,0-1.262l-4.5-4.475a.912.912,0,0,0-.631-.256.95.95,0,0,0-.631.256l-4.4,4.475a.917.917,0,0,0,0,1.262.9.9,0,0,0,1.262-.02Z"
          transform="translate(-2157.945 -7611.159)"
          fill="#fff"
        />
        <path
          id="Path_11666"
          data-name="Path 11666"
          d="M198.778,320.873l4.475,4.456a.912.912,0,0,0,.631.256.95.95,0,0,0,.631-.256l4.416-4.475a.892.892,0,1,0-1.262-1.262l-3.805,3.864-3.825-3.845a.892.892,0,0,0-1.262,1.262Z"
          transform="translate(-2157.531 -7859.286)"
          fill="#fff"
        />
      </g>
    </svg>
  );
};
const TableGrid = ({
  gridRows,
  gridColumns,
  gridDesktopColumns,
  gridTabletColumns,
  gridMobileColumns,
  checkboxEnable,
  rowAction,
  gridClass,
}: any) => {
  const columns: GridColDef[] = gridColumns;
  const [columnVisible, setColumnVisible] = useState(gridDesktopColumns);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const tableMatch = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    const newColumns = tableMatch
      ? gridDesktopColumns
      : matches
      ? gridTabletColumns
      : gridMobileColumns;
    setColumnVisible(newColumns);
  }, [matches, tableMatch]);

  return (
    <DataGrid
      rows={gridRows}
      columns={columns}
      disableSelectionOnClick={true}
      autoHeight={true}
      autoPageSize={true}
      hideFooter={true}
      disableColumnMenu={true}
      pageSize={5}
      headerHeight={60}
      rowHeight={70}
      checkboxSelection={checkboxEnable}
      columnVisibilityModel={columnVisible}
      onRowClick={rowAction}
      className={gridClass}
      components={{
        ColumnSortedAscendingIcon: SortingIcon,
        ColumnSortedDescendingIcon: SortingIcon,
      }}
    />
  );
};
export default TableGrid;
