import {Icon} from "antd";
import React from "react";

export const SVGWrapper = (props) => <div {...props} style={{position: 'relative'}}  />
export const VectorCardSelectedIcon = props => <Icon type="check-circle" size={40} width={'40px'} height={'40px'} theme="filled"  style={{
    position: 'absolute',
    top: 12,
    right: 11,
    color: props.color,
    fontSize: 24,
}} />
export const PROCard = (props) => {
    return (
        <SVGWrapper>
            {props.selected && <VectorCardSelectedIcon color={"#D19C7B"} />}
            <svg xmlns="http://www.w3.org/2000/svg" width="152.215" height="276.867" viewBox="0 0 152.215 276.867">
                <rect id="Rectangle_2" data-name="Rectangle 2" width="150.215" height="274.867" rx="15" transform="translate(1 1)" fill="none" stroke="#b77c4e" strokeWidth="2"/>
                <text id="Social_Me" data-name="Social Me" transform="translate(35.5 175)" fill="#c89e7d" fontSize="12" fontFamily="Montserrat-Regular, Montserrat"><tspan x="0" y="0">Score Tracks</tspan><tspan x="0" y="30">Give Comments</tspan><tspan x="0" y="60">Make Money</tspan></text>
                <text id="Social_Me-2" data-name="Social Me" transform="translate(76.5 131)" fill="#b77c4e" fontSize="16" fontFamily="Montserrat-Bold, Montserrat" fontWeight="700"><tspan x="-59.64" y="0">PRO Requests</tspan></text>
                <g id="line_document" data-name="line/document" transform="translate(42.5 42)">
                    <path id="bg" d="M154.69,25.088a5.767,5.767,0,0,1-2.929,2.2,5.768,5.768,0,0,1,.185-3.658,5.768,5.768,0,0,1-2.2-2.929,5.768,5.768,0,0,1,3.658.185,5.769,5.769,0,0,1,2.929-2.2,5.768,5.768,0,0,1-.185,3.658,5.767,5.767,0,0,1,2.2,2.929A5.768,5.768,0,0,1,154.69,25.088ZM107.32,58.7a3.985,3.985,0,0,1-1.631,1.936,3.988,3.988,0,0,1-.444-2.492,3.985,3.985,0,0,1-1.936-1.631,3.988,3.988,0,0,1,2.492-.444,3.985,3.985,0,0,1,1.631-1.936,3.988,3.988,0,0,1,.444,2.492,3.985,3.985,0,0,1,1.936,1.631A3.988,3.988,0,0,1,107.32,58.7Zm60.309,8.781a4.06,4.06,0,0,1-2.577.085,4.06,4.06,0,0,1,1.584-2.035,4.06,4.06,0,0,1-.085-2.577,4.06,4.06,0,0,1,2.035,1.584,4.06,4.06,0,0,1,2.577-.085,4.06,4.06,0,0,1-1.584,2.035,4.06,4.06,0,0,1,.085,2.577A4.06,4.06,0,0,1,167.629,67.478Z" transform="translate(-103.309 -18.685)" fill="#fff6ef" stroke="#b77c4e" strokeWidth="1" fillRule="evenodd"/>
                    <g id="document" transform="translate(16.606 11.109)">
                        <g id="doc" transform="translate(0 5.739) rotate(-10)">
                            <path id="Rectangle" d="M3.539.241Q7.758,0,11.386,0q4.174,0,8.47.318h0a3.159,3.159,0,0,1,2,.916l9.883,9.873a3.159,3.159,0,0,1,.911,1.918q.4,3.991.4,10.987,0,6.079-.3,10.376h0a3.159,3.159,0,0,1-2.825,2.92,134.165,134.165,0,0,1-13.664.606,118.933,118.933,0,0,1-12.822-.577h0a3.159,3.159,0,0,1-2.8-2.861Q0,27.252,0,17.851,0,8.939.575,3.086h0A3.159,3.159,0,0,1,3.539.241Z" transform="translate(0 0)" fill="#fff6ef" stroke="#b77c4e" strokeLinecap="round" strokeWidth="1"/>
                            <path id="Rectangle-2" d="M0,0,10.987,11.308H1.9A1.9,1.9,0,0,1,0,9.412Z" transform="translate(21.198 0.411)" fill="#fff6ef" stroke="#b77c4e" strokeLinecap="round" strokeWidth="1" fillRule="evenodd"/>
                            <path id="Path" d="M0,.919Q2.526-.78,3.9.661c.548.573,1.64,1.848-1.739,6.354C.246,9.572,2.711,10.85,4.628,9.074,7.406,6.5,8.586,4.647,11.2,5.751c2.451,1.034,2.355,5.609,0,7.417a2.205,2.205,0,0,1-3.136-3.1C9.886,8,12.57,7.086,16.131,8.222" transform="translate(8.48 13.997)" fill="#fff6ef" stroke="#b77c4e" strokeLinecap="round" strokeWidth="1" fillRule="evenodd"/>
                        </g>
                        <g id="pencil" transform="matrix(-0.574, 0.819, -0.819, -0.574, 48.483, 15.838)">
                            <path id="Rectangle-3" d="M2.688.486Q12.029,0,18.2,0q6.24,0,12.48.5h0a11.06,11.06,0,0,1,3.022.676l3.335,1.257a.948.948,0,0,1,0,1.774L33.7,5.461a11.057,11.057,0,0,1-3.022.676q-6.245.5-12.48.5-6.16,0-15.507-.486h0A2.835,2.835,0,0,1,0,3.317H0A2.835,2.835,0,0,1,2.688.486Z" transform="translate(0 0)" fill="#fff6ef" stroke="#b77c4e" strokeLinecap="round" strokeWidth="1" fillRule="evenodd"/>
                        </g>
                    </g>
                </g>
                <g id="circle" transform="translate(21.464 166.333)">
                    <rect id="bounds" width="9" height="9" transform="translate(0.036 -0.333)" fill="#c89e7d" opacity="0"/>
                    <g id="Oval" transform="translate(1.649 1.612)">
                        <circle id="Ellipse_1" data-name="Ellipse 1" cx="2.5" cy="2.5" r="2.5" transform="translate(0.388 0.054)" fill="#c89e7d"/>
                    </g>
                </g>
                <g id="circle-2" data-name="circle" transform="translate(21.464 196.333)">
                    <rect id="bounds-2" data-name="bounds" width="9" height="9" transform="translate(0.036 -0.333)" fill="#c89e7d" opacity="0"/>
                    <g id="Oval-2" data-name="Oval" transform="translate(1.649 1.612)">
                        <circle id="Ellipse_1-2" data-name="Ellipse 1" cx="2.5" cy="2.5" r="2.5" transform="translate(0.388 0.054)" fill="#c89e7d"/>
                    </g>
                </g>
                <g id="circle-3" data-name="circle" transform="translate(21.464 226.333)">
                    <rect id="bounds-3" data-name="bounds" width="9" height="9" transform="translate(0.036 -0.333)" fill="#c89e7d" opacity="0"/>
                    <g id="Oval-3" data-name="Oval" transform="translate(1.649 1.612)">
                        <circle id="Ellipse_1-3" data-name="Ellipse 1" cx="2.5" cy="2.5" r="2.5" transform="translate(0.388 0.054)" fill="#c89e7d"/>
                    </g>
                </g>
                <rect id="Rectangle_20" data-name="Rectangle 20" width="128" height="1" transform="translate(12.5 185)" fill="#b77c4e" opacity="0.2"/>
                <rect id="Rectangle_21" data-name="Rectangle 21" width="128" height="1" transform="translate(12.5 215)" fill="#b77c4e" opacity="0.2"/>
            </svg>

        </SVGWrapper>
    )
}

export const HITCard = (props) => {
    return (
        <SVGWrapper>
            {props.selected && <VectorCardSelectedIcon color={"#1B3543"} />}
            <svg xmlns="http://www.w3.org/2000/svg" width="152.215" height="276.867" viewBox="0 0 152.215 276.867">
                <rect id="Rectangle_1" data-name="Rectangle 1" width="150.215" height="274.867" rx="15" transform="translate(1 1)" fill="none" stroke="#1b3543" strokeWidth="2"/>
                <text id="Social_Me" data-name="Social Me" transform="translate(76.5 131)" fill="#1b3543" fontSize="16" fontFamily="Montserrat-Bold, Montserrat" fontWeight="700"><tspan x="-55.264" y="0">HIT Requests</tspan></text>
                <text id="Social_Me-2" data-name="Social Me" transform="translate(35.5 175)" fill="#1b3543" fontSize="12" fontFamily="Montserrat-Regular, Montserrat"><tspan x="0" y="0">Rate Tracks</tspan><tspan x="0" y="30">Earn Points</tspan><tspan x="0" y="60">Get Rewards</tspan></text>
                <g id="circle" transform="translate(21.464 166.333)">
                    <rect id="bounds" width="9" height="9" transform="translate(0.036 -0.333)" fill="#1b3543" opacity="0"/>
                    <g id="Oval" transform="translate(1.649 1.612)">
                        <circle id="Ellipse_1" data-name="Ellipse 1" cx="2.5" cy="2.5" r="2.5" transform="translate(0.388 0.054)" fill="#1b3543"/>
                    </g>
                </g>
                <g id="circle-2" data-name="circle" transform="translate(21.464 196.333)">
                    <rect id="bounds-2" data-name="bounds" width="9" height="9" transform="translate(0.036 -0.333)" fill="#1b3543" opacity="0"/>
                    <g id="Oval-2" data-name="Oval" transform="translate(1.649 1.612)">
                        <circle id="Ellipse_1-2" data-name="Ellipse 1" cx="2.5" cy="2.5" r="2.5" transform="translate(0.388 0.054)" fill="#1b3543"/>
                    </g>
                </g>
                <g id="circle-3" data-name="circle" transform="translate(21.464 226.333)">
                    <rect id="bounds-3" data-name="bounds" width="9" height="9" transform="translate(0.036 -0.333)" fill="#1b3543" opacity="0"/>
                    <g id="Oval-3" data-name="Oval" transform="translate(1.649 1.612)">
                        <circle id="Ellipse_1-3" data-name="Ellipse 1" cx="2.5" cy="2.5" r="2.5" transform="translate(0.388 0.054)" fill="#1b3543"/>
                    </g>
                </g>
                <g id="line_phone-hand" data-name="line/phone-hand" transform="translate(-72.866 28.199)">
                    <path id="bg" d="M176.006,114.03a5.333,5.333,0,0,1-2.313,2.472,5.332,5.332,0,0,1-.419-3.36,5.332,5.332,0,0,1-2.472-2.313,5.332,5.332,0,0,1,3.36-.419,5.331,5.331,0,0,1,2.313-2.472,5.331,5.331,0,0,1,.419,3.36,5.332,5.332,0,0,1,2.472,2.313A5.332,5.332,0,0,1,176.006,114.03Zm-54.429-2.478a3.686,3.686,0,0,1-2.211-.766,3.685,3.685,0,0,1,2-1.209,3.686,3.686,0,0,1,.766-2.211,3.685,3.685,0,0,1,1.209,2,3.686,3.686,0,0,1,2.211.766,3.686,3.686,0,0,1-2,1.209,3.686,3.686,0,0,1-.766,2.211A3.687,3.687,0,0,1,121.577,111.552Zm8.2,26.181a3.685,3.685,0,0,1-2.328.24,3.686,3.686,0,0,1,1.3-1.942,3.687,3.687,0,0,1-.24-2.328,3.685,3.685,0,0,1,1.942,1.3,3.687,3.687,0,0,1,2.328-.24,3.685,3.685,0,0,1-1.3,1.942,3.685,3.685,0,0,1,.24,2.328A3.686,3.686,0,0,1,129.778,137.732Z" transform="translate(0 -69.281)" fill="#d5edf1" fillRule="evenodd"/>
                    <g id="hand" transform="matrix(0.94, -0.342, 0.342, 0.94, 123.422, 29.121)">
                        <path id="Combined-Shape" d="M7.46,9.855s7.267,8.368,2.029,8.368A9.5,9.5,0,0,1,1.9,14.465,8.874,8.874,0,0,1,0,8.829C.1,5.881,6.75,9.6,7.46,9.855ZM11.6,0c1.839.655,3.906,2.4,3.906,4.442l.393,6.41-4.3-.3Q11.1-.177,11.6,0Z" transform="translate(14.292 32.111)" fill="#fff" stroke="#1b3543" strokeLinecap="round" strokeWidth="1" fillRule="evenodd"/>
                        <g id="phone" transform="translate(17.07 0) rotate(26)">
                            <g id="Group_103" data-name="Group 103" transform="translate(0 0)">
                                <path id="Combined-Shape-2" data-name="Combined-Shape" d="M2.434,0H21.9a2.434,2.434,0,0,1,2.434,2.434V36.505A2.434,2.434,0,0,1,21.9,38.939H2.434A2.434,2.434,0,0,1,0,36.505V2.434A2.434,2.434,0,0,1,2.434,0Zm.73,5.6V34.8H21.416V5.6Z" fill="#eefafc" stroke="#1b3543" strokeLinecap="round" strokeWidth="1" fillRule="evenodd"/>
                                <path id="Line" d="M4.381,0H0" transform="translate(9.978 2.677)" fill="none" stroke="#1b3543" strokeLinecap="round" strokeWidth="1" strokeDasharray="1 8 10" fillRule="evenodd"/>
                            </g>
                        </g>
                        <path id="Combined-Shape-3" data-name="Combined-Shape" d="M9.79,8.123c3.919,1.291,3.668,5.21,3.668,6.26a22.635,22.635,0,0,1-1.435,6.523H1.987a33.914,33.914,0,0,1-.321-7.02A13.667,13.667,0,0,1,2.5,10.645a4.927,4.927,0,0,0-.34-4.192L.281,3.174A2.128,2.128,0,0,1,3.969,1.05L6.39,5.262A6.333,6.333,0,0,0,9.79,8.123Z" transform="translate(16.73 28.87)" fill="#fff" stroke="#1b3543" strokeLinecap="round" strokeWidth="1" fillRule="evenodd"/>
                        <path id="Rectangle-9-Copy-4" d="M1.16.7,11.222,0a1.246,1.246,0,0,1,1.33,1.156s0,.006,0,.009L12.66,2.9a3.582,3.582,0,0,1-2.179,3.522,11.178,11.178,0,0,1-3.494.8,12.874,12.874,0,0,1-4.175-.327h0a3.583,3.583,0,0,1-2.7-3.238L0,2.028A1.246,1.246,0,0,1,1.16.7Z" transform="translate(17.704 48.096)" fill="#eefafc" stroke="#1b3543" strokeLinecap="round" strokeWidth="1" fillRule="evenodd"/>
                    </g>
                    <g id="bubble" transform="translate(126.641 32.511) rotate(-14)">
                        <path id="Combined-Shape-4" data-name="Combined-Shape" d="M0,9.652a7.751,7.751,0,0,0,7.666,7.833,7.751,7.751,0,0,0,7.666-7.833c0-3.553-2.415-6.367-6.12-7.671L3.639.083C2.72-.23,2.1.38,2.4,1.3l.673,2.079A7.88,7.88,0,0,0,0,9.652Z" transform="translate(15.333 17.486) rotate(180)" fill="#fff" stroke="#1b3543" strokeLinecap="round" strokeWidth="1"/>
                        <path id="Shape" d="M5.841,0,1.825,4.259,0,2.8" transform="translate(5.243 5.759) rotate(10)" fill="#fff" stroke="#1b3543" strokeLinecap="round" strokeWidth="1" fillRule="evenodd"/>
                    </g>
                </g>
                <rect id="Rectangle_18" data-name="Rectangle 18" width="128" height="1" transform="translate(12.5 185)" fill="#1b3543" opacity="0.2"/>
                <rect id="Rectangle_19" data-name="Rectangle 19" width="128" height="1" transform="translate(12.5 215)" fill="#1b3543" opacity="0.2"/>
            </svg>
        </SVGWrapper>
    )
}
export const MapIcon = props => (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <g id="map-pin" transform="translate(0.5 0.5)" >
                <rect id="bounds" width="29" height="29" fill="none" stroke="#344356" strokeWidth="1" opacity="0"/>
                <g id="Group_1" data-name="Group 1" transform="translate(6.042 4.229)">
                    <path id="Shape" d="M16.917,8.651c0,6.728-8.458,12.5-8.458,12.5S0,15.379,0,8.651A8.556,8.556,0,0,1,8.458,0,8.556,8.556,0,0,1,16.917,8.651Z" transform="translate(0 0)" fill="none" stroke="#344356" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fillRule="evenodd"/>
                    <ellipse id="Oval" cx="2.819" cy="2.884" rx="2.819" ry="2.884" strokeWidth="2" transform="translate(5.639 5.767)" stroke="#344356" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </g>
            </g>
        </svg>
    </div>

)

export const TagIcon = (props) => {
    return (
        <svg id="tag" xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39">
            <rect id="bounds" width="39" height="39" fill="none" opacity="0"/>
            <g id="Shape" transform="translate(7.225 7.225)">
                <path id="Path_1" data-name="Path 1" d="M23.132,14.2,14.21,23.119a2.489,2.489,0,0,1-3.521,0L0,12.443V0H12.443L23.132,10.689A2.489,2.489,0,0,1,23.132,14.2Z" fill="none" stroke="rgba(52,67,86,0.3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fillRule="evenodd"/>
            </g>
        </svg>

    )
}
export const X = props => <div  style={{marginLeft: 14,}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="8.847" height="8.847" viewBox="0 0 8.847 8.847">
        <g id="x" transform="translate(5.414 0.414)">
            <path id="Shape" d="M6.019,0,0,6.019" transform="translate(-4 1)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
            <path id="Shape-2" data-name="Shape" d="M0,0,6.019,6.019" transform="translate(-4 1)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
        </g>
    </svg>
</div>

