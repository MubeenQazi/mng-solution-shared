/** @format */

import Button from "@mui/material/Button";
import { CsvBuilder } from "filefy";
import "./GlobalButton.scss";

const DownloadButton = ({ rows, columns, filename }: any) => {
  const downloadCSV = () => {
    const filteredRows = rows.map((row: any) => {
      let rowCopy = { ...row };
      rowCopy.line_items = JSON.stringify(rowCopy.lineItem);
      return Object.values(rowCopy);
    });
    new CsvBuilder(filename)
      .setColumns(columns)
      .addRows(Object.values(filteredRows))
      .exportFile();
  };

  return (
    <Button
      className="ms-global-button"
      size="small"
      variant="contained"
      onClick={downloadCSV}
    >
      Download
    </Button>
  );
};

export default DownloadButton;
