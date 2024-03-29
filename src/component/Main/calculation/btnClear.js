/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';

/**
 * C 혹은 CE 누르면 입력된 숫자 지우기
 * @prop {Object} states { calWay, calNum, calPrev, calNew }
 * @prop {String} value C 혹은 CE
 * @prop {*} sideClass 추가 클래스명
 */
export default function btnClear(props) {
  // Props
  const { value, sideClass, states } = props;
  const { calWay, calNum, calPrev, calNew } = states;

  // 0이면 입력칸 그대로
  if (calNum.state !== '0') {
    calNum.set('0');
  }
  // C눌렀는데, calWay에 내용 있으면 지움
  if (value === 'C' && calWay.value !== '') {
    document.querySelector('.button_use')?.classList.remove('button_use');
    calWay.set('');
    calPrev.set('');
    calNew.set('clear');
    document.querySelector('.right .body.log').innerHTML = '';
  }
}
