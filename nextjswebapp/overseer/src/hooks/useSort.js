import { useState } from "react";

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const sortColumn = (colName) => {
    if (sortBy && colName !== sortBy) {
      setSortOrder("asc");
      setSortBy(colName);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(colName);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(colName);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  // only sort data if sortOrder && sortBy are not null
  // make a copy of the data prop
  // Find the correct sortValue function and use it to sort
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    sortOrder,
    sortBy,
    sortedData,
    sortColumn,
  };
}

export default useSort;
