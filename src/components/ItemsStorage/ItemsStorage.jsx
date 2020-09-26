import React from 'react';
import { FileEarmarkRuledFill } from 'react-bootstrap-icons';

export function ItemsStorage({ fileName, fileDate, fileSize }) {
  return (
    <>
      <td>
        <FileEarmarkRuledFill color="black" size={24} />
      </td>
      <td>{fileName}</td>
      <td>{fileDate}</td>
      <td>{fileSize}</td>
    </>
  );
}
