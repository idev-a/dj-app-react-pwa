import React from "react";
import {Typography} from "antd";
import setting from "../../assets/img/discover/setting.png"
import ringBell from "../../assets/img/discover/ringbell.png"
import mainMenu from "../../assets/img/discover/main.png"

const { Title, Text,  } = Typography;

export const BottomMenu = (props) => {
    return (
        <div className="activityContainer mainMenuPadding">
            <div>
                <div className="mainmenuContainer">
                    <img className={'activiyButton'} src={setting}/>
                </div>
            </div>
            <div>
                <div className="mainmenuContainer mainMenuSelected">
                    <img className={'activiyButton '} src={mainMenu}/>
                </div>
            </div>
            <div>                    
                <div className="mainmenuContainer">
                    <img className={'activiyButton'} src={ringBell}/>
                </div>
            </div>
        </div>
    )
}
