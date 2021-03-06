import React, { memo, useState } from "react";
import { renderRoutes } from "react-router-config";
import {  Input  } from "antd";
import  {
    SearchOutlined 
} from "@ant-design/icons";

import {
    MainWrapper,
    MainHeaderWrapper,
    MainFooterWrapper
} from "./style";
import logo from "@/assets/img/logo.png"

function Main(props) {
    const history = props.history
    const { routes } = props.route
    
    const [searchValue, setSearchValue] = useState('')

    function inputChange(e) {
        setSearchValue(e.target.value)
    }

    function inputPressEnter() {
        history.push('/main/search', {keyWord: searchValue})
    }
 
    return (
        <MainWrapper>
            <MainHeaderWrapper>
                <div className='main-header'>
                    <div className='main-logo'>  
                        <img src={logo} alt='logo...'/>
                    </div> 
                    <Input 
                        placeholder='  please input' 
                        size='large'
                        prefix = {<SearchOutlined />}
                        onChange = {e => { inputChange(e) }}
                        value = {searchValue}
                        onPressEnter = {() => { inputPressEnter() }}
                    />
                </div>
            </MainHeaderWrapper>
            <MainFooterWrapper>
                {renderRoutes(routes)}
            </MainFooterWrapper>
        </MainWrapper>
    )
}

export default memo(Main)
