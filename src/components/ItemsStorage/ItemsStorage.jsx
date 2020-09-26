import React from 'react';

export function ItemsStorage({ fileIcon, fileName, fileDate, fileSize }) {
  return (
    <>
      <td>{fileIcon}</td>
      <td>{fileName}</td>
      <td>{fileDate}</td>
      <td>{fileSize}</td>
    </>
  );
}
