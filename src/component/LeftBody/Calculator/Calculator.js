/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

// Component
import CalButtonBox from './CalButtonBox';

// Function
import fontsizeVwHalfvh from '../../../responsive/fontsizeVwHalfvh';
import makeObjState from '../../makeObjState';

/**
 * 계산기 컴포넌트
 */
export default function Calculator() {
  // State
  const calWay = makeObjState();
  const calPrev = makeObjState();
  const calNum = makeObjState('0');
  const calNew = makeObjState('first');

  // Effect
  // .cal_num 요소의 font-size 반응형
  useEffect(() => {
    const props = {
      target: document.querySelector('.cal_num'),
      ref: document.querySelector('.left'),
      refSize: 700,
      vwh: 9,
    };
    window.addEventListener('load', (e) => fontsizeVwHalfvh(e, props));
    window.addEventListener('resize', (e) => fontsizeVwHalfvh(e, props));
  }, []);

  // Return
  const states = { calWay, calNum, calPrev, calNew };
  return (
    <div className='body calculator colunm'>
      <div className='cal_output colunm'>
        <p className='cal_way'>{calWay.state}</p>
        <p className='cal_num'>{calNum.state}</p>
      </div>
      <CalButtonBox states={states} />
    </div>
  );
}
