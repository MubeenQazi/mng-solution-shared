/** @format */
import React, { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import "./Table.scss";

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
        ColumnSortedAscendingIcon: ArrowDropUpIcon,
        ColumnSortedDescendingIcon: ArrowDropDownIcon,
      }}
    />
  );
};
export default TableGrid;
