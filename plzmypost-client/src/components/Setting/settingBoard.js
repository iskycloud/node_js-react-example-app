import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom";
import axios from 'axios'
import server_url from '../../url.json';
import './setting.css'
import {Helmet} from 'react-helmet'
class settingBoard extends Component {
state ={
  userName: '',
  confirmUN : false
}

_getAddress = () => {
    const daum = window.daum;
    //load함수를 이용하여 core스크립트의 로딩이 완료된 후, 우편번호 서비스를 실행합니다.
    daum.postcode.load(function(){
        new daum.Postcode({
            oncomplete: function(data) {
                console.log(data);
            }
        }).open();
    });
}


render (){
  return (
    <div>
      <form>
        <button onClick={this._getAddress}></button>
      </form>
  </div> 
  )
}
}

export default settingBoard;