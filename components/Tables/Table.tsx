/** @format */
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import DownloadButton from "../DownloadButton/DownloadButton";
import SearchBar from "../SearchBar/SearchBar";
import TableGrid from "./TableGrid";
import "./Table.scss";

const Table = ({
  getRows,
  getColumns,
  getDesktopColumns,
  getTabletColumns,
  getMobileColumns,
  getDownloadColumns,
  getDownloadFileName,
  checkboxEnable,
}: any) => {
  const [rows, setRows] = useState(getRows);
  const [searched, setSearched] = useState<string>("");

  const location = useLocation();
  const navigate = useNavigate();

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

  return (
    <div>
      <Box sx={{ textAlign: `right`, marginBottom: `30px` }}>
        <DownloadButton
          rows={rows}
          columns={getDownloadColumns}
          filename={getDownloadFileName}
        />
      </Box>
      <Box>
        <SearchBar value={searched} onChange={onChange} />
        <Box>
          <TableGrid
            gridRows={rows}
            gridColumns={getColumns}
            gridDesktopColumns={getDesktopColumns}
            gridTabletColumns={getTabletColumns}
            gridMobileColumns={getMobileColumns}
            checkboxEnable={checkboxEnable}
            rowAction={(rowData: any) => clickableRow(rowData.row)}
            gridClass="datagrid-table"
          />
        </Box>
      </Box>
    </div>
  );
};
export default Table;
