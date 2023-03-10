import { GoChevronUp, GoChevronDown } from "react-icons/go";
import useSort from "../hooks/useSort";
import Table from "./TableSortable";

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, sortColumn } = useSort(data, config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => sortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return (
    <div>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div className="text-[10px] pr-1">
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div className="text-[10px] pr-1">
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div className="text-[10px] pr-1">
        <GoChevronUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div className="text-[10px] pr-1">
        <GoChevronDown />
      </div>
    );
  }
}

export default SortableTable;
