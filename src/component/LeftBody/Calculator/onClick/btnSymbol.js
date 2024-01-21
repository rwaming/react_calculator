/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from 'react';

/**
 * 계산 기호 버튼을 클릭했을 때 실행하는 함수
 * @prop {Object} states { calWay, calNum, calPrev, calNew }
 * @prop {String} value 계산 기호 (+, -...)
 * @prop {*} sideClass 추가 클래스명
 */
export default function btnSymbol(props) {
  const { value, sideClass } = props;
  const { calWay, calNum, calPrev, calNew } = props.states;

  // 심볼 클릭시
  // 1. calNum : calPrev랑 calNum이랑 계산한 것
  // 2. calPrev : calNum
  // 3. calWay : calNum + value
  // 4. 기록
  //   4-1. calWay에 아무것도 없었음 : X
  //   4-2. calWay에 무언가 있음 : calPrev + 기호 + 입력숫자 + '=' + 결과

  // 그다음 숫자 입력시
  // 1. calNum : 새 입력

  const add = String(Number(calPrev.state) + Number(calNum.state));

  if (!Number.isNaN(Number(calPrev.state))) {
    calNum.set(add); // 입력된 숫자란
  }
  calPrev.set(add); // 결과값 저장
  calWay.set(`${add}${value}`); // 식에 결과값, 기호
}
