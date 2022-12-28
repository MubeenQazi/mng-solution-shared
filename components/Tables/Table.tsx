/** @format */
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import DownloadButton from "../DownloadButton/DownloadButton";
import SearchBar from "../SearchBar/SearchBar";
import "./Table.scss";

const Table = ({
  getRows,
  getColumns,
  ALL_COLUMNS,
  TABLET_COLUMNS,
  MOBILE_COLUMNS,
  DownloadColumns,
  FileName,
}: any) => {
  const [rows, setRows] = useState(getRows);
  const [searched, setSearched] = useState<string>("");
  const [columnVisible, setColumnVisible] = useState(ALL_COLUMNS);

  const location = useLocation();
  const navigate = useNavigate();
  const columns: GridColDef[] = getColumns;

  const clickableRow = (row: any) => {
    navigate(`detail/${row.id}`, {
      state: { ...row, ...{ activeSideBar: location.state?.activeSideBar } },
    });
  };

  const requestSearch = (searchedVal: string) => {
    const filteredRows = rows.filter((row: any) => {
      return row.offer_name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const onChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSearched(event.target.value as string);
    requestSearch(event.target.value as string);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const tableMatch = useMediaQuery(theme.breakpoints.up("md"));

  React.useEffect(() => {
    const newColumns = tableMatch
      ? ALL_COLUMNS
      : matches
      ? TABLET_COLUMNS
      : MOBILE_COLUMNS;
    setColumnVisible(newColumns);
  }, [matches, tableMatch]);

  return (
    <div>
      <Box sx={{ textAlign: `right`, marginBottom: `30px` }}>
        <DownloadButton
          rows={rows}
          columns={DownloadColumns}
          filename={FileName}
        />
      </Box>
      <Box>
        <SearchBar value={searched} onChange={onChange} />
        <Box>
          <DataGrid
            rows={rows}
            columns={columns}
            disableSelectionOnClick={true}
            autoHeight={true}
            autoPageSize={true}
            hideFooter={true}
            disableColumnMenu={true}
            pageSize={5}
            headerHeight={60}
            rowHeight={70}
            columnVisibilityModel={columnVisible}
            onRowClick={(rowData) => clickableRow(rowData.row)}
          />
        </Box>
      </Box>
    </div>
  );
};
export default Table;
