import React from 'react';
import { Label, Col, Input } from 'reactstrap';
export default function GenerateColumns(props) {
  const F = props.Field;
  
  return props.columnList.map((item, index) => {
    if (item['COLUMN_NAME'] !== 'Guid') {
      return (
        <>
          <F colname={item['COLUMN_NAME']}/>
        </>
      );
    }
  });
}
