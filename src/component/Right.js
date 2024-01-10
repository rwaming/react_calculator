/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';

import RightHead from './Right/RightHead';
import Log from './Right/RightBody/Log';

export default function Right() {
  return (
    <div className='colunm right'>
      <RightHead />
      <Log />
    </div>
  );
}