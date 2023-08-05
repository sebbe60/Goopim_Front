import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchLogsComponent = () => {
  const [searchLogs, setSearchLogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = (page) => {
    axios
      .get(`/searchlogs?page=${page}`)
      .then((response) => {
        setSearchLogs(response.data.data);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => console.error(error));
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <h2>Search Logs</h2>
      {searchLogs.map((searchlog) => (
        <div key={searchlog.id}>
          <p>ID: {searchlog.id}</p>
          <p>Text: {searchlog.text}</p>
          <p>Creation Date: {searchlog.creation_date}</p>
        </div>
      ))}
      <div>
        {currentPage > 1 && <button onClick={handlePrevPage}>Previous</button>}
        {currentPage < totalPages && (
          <button onClick={handleNextPage}>Next</button>
        )}
      </div>
    </div>
  );
};

export default SearchLogsComponent;
