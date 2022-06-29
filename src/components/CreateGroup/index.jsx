import React from 'react';
import {Link} from 'react-router-dom';

import './CreateGroup.css';
import '../../components.css';

export const CreateGroup = () => {
  return (
    <>
      <div className="create__group_block">
        <Link to="/request-crew">
          <div className="cancel__blue"><span>Cancel</span></div>
        </Link>

        <Link to="/new-flight-group">
          <div className="create__group_link"><span>Create Group</span></div>
        </Link>
      </div>
    </>
  )
}