import React from 'react';
import { useParams } from 'react-router-dom';

const EditExpensePage = () => {
  const { id } = useParams();
  return (
    <div>
      This is edit page {id}!
    </div>
  );
};

export default EditExpensePage;
