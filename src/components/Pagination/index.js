import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ pagesTo, setContando }) {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    setContando(value);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={pagesTo}
        page={page}
        onChange={handleChange}
        /* onClick={() => setContando(page)} */
      />
    </Stack>
  );
}
