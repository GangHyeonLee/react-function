import React,{ Component } from "react";


class Ad extends Component{
    render(){
        console.log('Ad render');
        return(
          
    
           
            <div class="container">
                <div class="col-sm-12">
                    <form class="form-horizontal">
                        <h1 class="signup">회 원 가 입</h1>
        
                     
                        <div class="signup_board_outside">
                            <div class="signup_board_inside">
        
                                <div class="form-group">
                                <label for="inputEmail3" class="col-sm-2 control-label">ID</label>
                                <div class="col-sm-5">
                                    <input class="form-control signup_id1" type="text" placeholder="아이디를 입력하세요." ></input>
                                    <button type="submit" class=" btn btn-default signup_id2">중복확인</button>
                                </div>
                                
                                </div>
                                <div class="form-group">
                                <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
                                <div class="col-sm-5">
                                    <input type="password" class="form-control signup_pw1" id="inputPassword3" placeholder="Password"></input>
                                    
                                </div>
                                </div>
                                <div class="form-group">
                                <label for="inputName3" class="col-sm-2 control-label">이름</label>
                                <div class="col-sm-5">
                                    <input type="text" class="form-control" id="inputName3" placeholder="Name"></input>
                                </div>
                                </div>
                                <div class="form-group">
                                <label for="inputAddress3" class="col-sm-2 control-label">주소</label>
                                <button type="submit" class="btn btn-default">우편번호</button>
                                <div class="col-sm-5">
                                    <input type="text" class="form-control"></input>
                                    <input type="text" class="form-control" placeholder="상세주소를 입력하세요."></input>
                                </div>
                                </div>
                                <div class="form-group">
                                <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                                <div class="col-sm-5">
                                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email"></input>
                                </div>
                                </div>
                                <div class="form-group">
                                <label for="inputPhone3" class="col-sm-2 control-label">전화</label>
                                <div class="col-sm-5">
                                    <input type="text" class="form-control" id="inputPhone3" placeholder="숫자만 입력( ' - ' 제외 )"></input>
                                </div>
                                </div>
                                <div class="form-group">
                                <label for="inputAlarm3" class="col-sm-2 control-label">SMS 수신여부</label>
                                <div class="col-sm-2">
                                    <input type="radio" id="inputAlarm3"></input>
                                    <label for="inputAlarm3" class="control-label">수신함</label>
                                </div>
                                <div class="col-sm-2">
                                    <input type="radio" id="inputAlarm3"></input>
                                    <label for="inputAlarm3" class="control-label">수신거절</label>
                                </div>
                                </div>
                                <div class="form-group">
                                <div class="col-sm-offset-2 col-sm-5">
                                    
                                </div>
                                </div>
                                <div class="form-group signup_signin">
                                <div class="col-sm-offset-2 col-sm-10">
                                    <button type="submit" class="btn btn-default">Sign in</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
                       
        );
    }

}

export default Ad;