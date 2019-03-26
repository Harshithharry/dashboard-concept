
import React from 'react';
import { TablePagination } from 'react-pagination-table';
 


const TableComponent = (props) =>
    <div className="tableWrapper">
        <TablePagination
  
            data={ props.tableData }
            columns="text.name"
            perPageItemCount={ 10 }
            totalCount={ props.tableData.length }
            arrayOption={ [["size", 'all', ' ']] }
        />
    </div>


export default TableComponent;