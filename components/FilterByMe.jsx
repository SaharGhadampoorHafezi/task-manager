// import { useState } from 'react';
// import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
// import DateFilter from './HandleDataChange';

// export default function TableData({ data }) {
//   const [recentDate, setRecentDate] = useState(null);

//   const handleDateChange = date => {
//     setRecentDate(date);
//   };

//   const filteredData = recentDate ? data.filter(d => d.date >= recentDate) : data;

//   return (
//     <>
//       <DateFilter onChange={handleDateChange} />
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Item</TableCell>
//             <TableCell>Price</TableCell>
//             <TableCell>Date</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {filteredData.map(d => (
//             <TableRow key={d.id}>
//               <TableCell>{d.item}</TableCell>
//               <TableCell>{d.price}</TableCell>
//               <TableCell>{d.date}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

export default function Filter() {
  const [filterText, setFilterText] = useState("");

  
    const handleFilterChange = (event) => {
      setFilterText(event.target.value);
    }

  return (
    <div>
      <TextField
        label="Filter Text"
        value={filterText}
        onChange={handleFilterChange}
      />
    </div>
  );
}
