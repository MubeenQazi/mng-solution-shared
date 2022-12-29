/** @format */
import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "./Table.scss";

const TableGrid = ({
  gridRows,
  gridColumns,
  checkboxEnable,
  columnVisible,
  rowAction,
  gridClass,
}: any) => {
  const columns: GridColDef[] = gridColumns;
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
    />
  );
};
export default TableGrid;
