(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{70:function(n,e,t){"use strict";t.r(e);var i=t(1),a=t(0),r=t.n(a),o=t(18),s=t.n(o),c=t(11),d=t(9),x=t(3),p=t(4),l=t.p+"static/media/planet_4k_8k-7680x4320.ec2a3ff0.jpg";function h(){var n=Object(x.a)(["\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n.App{\n    position: relative;\n    overflow: hidden;\n}\n\nbody{\n    background-image: url(",");\n   background-repeat: no-repeat;\n   background-size: cover;\n   background-position: center;\n    color: #fefffc;\n    font-family: 'Alien';\n}\n\np{\n    font-family:'Stellar'\n}\n\n\n"]);return h=function(){return n},n}var m=Object(p.a)(h(),l),b=t.p+"static/media/AlienLeagueBold-1WRj.0d59cafe.woff",j=t.p+"static/media/AlienLeagueBold-1WRj.3431cd8f.woff2",g=t.p+"static/media/Stellar-Regular.a0eedb4c.woff",u=t.p+"static/media/Stellar-Regular.cd81649f.woff2";function f(){var n=Object(x.a)(["\n    @font-face {\n        font-family: 'Alien';\n        src: local('Alien'), local('Alien'),\n        url(",") format('woff2'),\n        url(",") format('woff');\n        font-weight: 300;\n        font-style: normal;\n    }\n    @font-face {\n        font-family: 'Stellar';\n        src: local('Stellar'), local('Stellar'),\n        url(",") format('woff2'),\n        url(",") format('woff');\n        font-weight: 300;\n        font-style: normal;\n    }\n"]);return f=function(){return n},n}var w=Object(p.a)(f(),j,b,u,g);function O(){var n=Object(x.a)(["\n\n    min-height: 80px;\n    display: flex;\n    margin: auto;\n    justify-content: space-around;\n    align-items: center;\n    background: #282828;\n    position: fixed;\n    width: 100%;\n    top: 0;\n    opacity: 0.7;\n    z-index: 10;\n   \n    ul{\n      list-style: none;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      .home{\n          font-size: 2rem;\n      }\n      li{\n      cursor: pointer;\n      margin: auto;\n      padding: 1rem 1.25rem;\n      font-size: 1.25rem;\n      transition: all 0.5s ease;\n      &:hover{\n          color: #18DA3B;\n          text-shadow:  6px 4px 7px rgba(140, 150, 150, 0.7);\n        }\n      }\n    }\n    @media (max-width: 600px){\n        flex-direction: column;\n        min-height: 7vh;\n        ul li{\n            font-size: 1rem;\n            padding: 0.5rem 1rem 0.5rem 1rem;\n        }\n        ul .home{\n            font-size: 1.5rem;\n        }\n    }\n"]);return O=function(){return n},n}var y=p.b.div(O()),v=t(13),k=t(5),S=t(7),z=function(n){var e=n.timeUpdateHandler,t=n.isPlaying,r=n.setIsPlaying,o=Object(a.useRef)(null),s=Object(a.useState)(!1),c=Object(d.a)(s,2),x=c[0],p=c[1];return Object(i.jsxs)(y,{children:[Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{className:"home",children:Object(i.jsx)(v.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-1100,duration:500,children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)(k.a,{onClick:function(){!0===t?(o.current.pause(),r(!t)):(o.current.play(),r(!t))},icon:t?S.c:S.e,className:"play"})}),Object(i.jsx)("li",{children:Object(i.jsx)(k.a,{onClick:function(){p(!x)},icon:x?S.g:S.h,className:"mute"})}),Object(i.jsx)("audio",{onTimeUpdate:e,ref:o,src:"https://drive.google.com/uc?export=download&id=19pCBKiEbXqg7CwUZzbBW1uQ4bPQn7e1x",loop:!0,muted:x})]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(v.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-100,duration:500,children:"About Me"})}),Object(i.jsx)("li",{children:Object(i.jsx)(v.Link,{activeClass:"active",to:"myworks",spy:!0,smooth:!0,offset:0,duration:500,children:"My Works"})}),Object(i.jsx)("li",{children:Object(i.jsx)(v.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:0,duration:500,children:"Contact"})})]})]})},C=t.p+"static/media/03_48_bw.00a21bab.jpg",I=t.p+"static/media/planet.ebc2793b.png",A=t(6);function M(){var n=Object(x.a)(["\n        text-align: inherit;\n        .html-wrapper{\n            padding: 3px;\n            background-color: rgba(241, 101, 36, 0.7);\n            border-radius: 5px;\n        }\n        .css-wrapper{\n            padding: 3px;\n            background-color: rgba(1, 111, 186, 0.7);\n            border-radius: 5px;\n        }\n        .js-wrapper{\n            padding: 3px;\n            background-color: rgba(232, 200, 37, 0.7);\n            border-radius: 5px;\n        }\n        .react-wrapper{\n            padding: 3px;\n            background-color: rgba(33, 33, 33, 0.7);\n            border-radius: 5px;\n        }\n        \n        li{\n            font-family: 'Stellar';\n            list-style: none;\n        }\n       \n        @media (max-width: 640px){\n               line-height: 0.9rem;\n            \n            p, li{\n                font-size: 0.8rem;\n            }\n        }\n        @media (max-width: 560px){\n            height:  270px;\n               line-height: 0.9rem;\n            h3{\n                font-size: 0.8rem;\n            }\n            p, li{\n                font-size: 0.6rem;\n            }\n        }\n        @media (max-width: 360px){\n            line-height: 0.7rem;\n            h3{\n                font-size: 0.9rem;\n            }\n            p, li{\n                font-size: 0.6rem;\n            }\n        }\n      \n    "]);return M=function(){return n},n}function P(){var n=Object(x.a)(["\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-around;\n        text-align: center;\n        background-color: rgba(93, 149, 223, 0.5);\n        border-radius: 15px;\n        padding: 25px;\n        height: 500px;\n        h3{\n                font-size: 2rem;\n            }\n        .intro-wrapper{\n            padding: 30px;\n            background-color: rgba(33, 33, 33, 0.7);\n            border-radius: 5px;\n            line-height: 1.7rem;\n            p{\n           \n            text-align: justify;\n            }\n        }\n        img{\n            width: 150px;\n            box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);\n            border-radius: 15%;\n        }\n        span{\n            color: #2D9E4A;\n            background: rgba(50,50,50,0.74);\n            border-radius: 5px;\n            text-shadow: none;\n        }\n        @media (max-width: 760px){\n            height: 400px;\n            h3{\n                font-size: 2rem;\n            }\n            .intro-wrapper{\n                padding: 20px;\n                line-height: 1.4rem;\n            }\n            img{\n                width: 125px;\n            }\n        }\n        @media (max-width: 640px){\n            height: 340px;\n            line-height: 1.2rem;\n            .intro-wrapper{\n                padding: 10px;\n                line-height: 1.2rem;\n            }\n            img{\n                width: 100px;\n            }\n            h1{\n                font-size:1.6rem;\n                line-height: 2rem;\n            }\n            h3{\n                font-size: 1.5rem;\n            }\n            p{\n                font-size: 0.8rem;\n            }\n        }\n        @media (max-width: 560px){\n            height:  270px;\n            padding: 5px;\n            .intro-wrapper{\n                padding: 8px;\n                line-height: 1rem;\n            }\n           \n            h1{\n                font-size: 1.4rem;\n                line-height: 1.7rem;\n            }\n            h3{\n                font-size: 1rem;\n            }\n            p{\n                font-size: 0.7rem;\n            }\n            img{\n                width: 70px;\n            }\n        }\n        @media (max-width: 360px){\n            .intro-wrapper{\n                padding: 6px;\n                line-height: 0.8rem;\n            }\n            h1{\n                font-size: 1.2rem;\n                line-height: 1.6rem;\n            }\n            h3{\n                font-size: 0.9rem;\n            }\n            p{\n                font-size: 0.6rem;\n            }\n            img{\n                width: 65px;\n            }\n        }\n"]);return P=function(){return n},n}function N(){var n=Object(x.a)(["\n      margin-top: 1vh;\n      text-align: center;\n      padding: 5px;\n      margin-bottom: 10px;\n      background:rgba(168, 161, 153, 0.6);\n      border-radius: 15px;\n      text-shadow: 2px 2px 2px rgba(100, 100, 100, 1);\n      transition: all 0.5s ease;\n      cursor: pointer;\n      animation: shadowKey 1.3s linear infinite;\n        @keyframes shadowKey{  \n            0%{box-shadow: 7px 7px 12px 0px rgba(255, 0, 0, 0.75); }\n            50%{box-shadow: 7px 7px 5px 0px rgba(255, 0, 0, 0.75); }\n            100%{box-shadow: 7px 7px 12px 0px rgba(255, 0, 0, 0.75); }\n        }\n      &:hover{\n        transform: scale(1.15); \n      }\n        svg{\n            filter:drop-shadow(2px 2px 2px rgba(100, 100, 100, 1));\n        } \n    "]);return N=function(){return n},n}function L(){var n=Object(x.a)(["\n        position: absolute;\n        z-index: -2;\n        transition: 0.5s;\n        .rotate {\n            animation: rotation 118s infinite linear;\n        }\n        @keyframes rotation {\n            from {\n                transform: rotate(0deg);\n            }\n            to {\n                transform: rotate(359deg);\n            }\n        }\n        .rotate-pause{\n            animation: rotation 118s infinite linear;\n            animation-play-state: paused;\n        }\n        @media (max-width: 1000px), (max-height: 1000px){\n            img{\n                width: 865px;\n            }\n        }\n        @media (max-width: 900px), (max-height: 900px){\n            img{\n                width: 740px;\n            }\n        }\n        @media (max-width: 760px), (max-height: 800px){\n            img{\n                width: 620px;\n            }\n        }\n        @media (max-width: 640px), (max-height: 700px){\n            img{\n                width: 540px;\n            }\n        }\n        @media (max-width: 560px), (max-height: 600px){\n            img{\n                width: 440px;\n            }\n        }\n        @media (max-width: 460px), (max-height: 520px){\n            img{\n                width: 340px;\n            }\n        }\n        @media (max-width: 358px), (max-height: 520px){\n            img{\n                width: 300px;\n            }\n        }\n        @media (max-width: 320px),  (max-height: 380px){\n            img{\n                width: 240px;\n            }\n        }\n        @media  (max-height: 330px){\n            img{\n                width: 200px;\n            }\n        }\n    "]);return L=function(){return n},n}function T(){var n=Object(x.a)(["\n   padding-top: 80px;\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   justify-content: center;\n   min-height: 100vh;\n   width: 100%;\n    .slider{\n        width: 500px;\n        height: 500px;\n        margin: 1rem auto 0 auto;\n        box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);\n        border-radius: 15px;\n        @media (max-width: 900px){\n            width: 450px;\n        }\n        @media (max-width: 760px){\n            width: 400px;\n            height: 400px;\n        }\n        @media (max-width: 640px){\n            width: 350px;\n            height: 340px;\n        }\n        @media (max-width: 560px){\n            width: 300px;\n            height: 270px;\n        }\n         @media (max-width: 460px){\n            width: 250px;\n        }\n        @media (max-width: 360px){\n            width: 200px;\n        }\n        @media (max-width: 320px){\n            width: 175px;\n        }\n        .slick-next:before, .slick-prev:before {\n            color: red;\n            animation: btnShadow 1.2s linear infinite;\n                    @keyframes btnShadow{\n                        0%{filter:drop-shadow(2px 2px 2px red)}; \n                        50%{filter:drop-shadow(6px 4px 6px red)}; \n                        100%{filter:drop-shadow(2px 2px 2px red)}; \n                    }\n        }\n        .slick-dots li.slick-active button:before {\n            color:  #329555!important;\n            font-size: 0.7rem;\n            animation: btnShadowActive 1.2s linear infinite;\n                        @keyframes btnShadowActive{\n                            0%{filter:drop-shadow(2px 2px 2px #329555)}; \n                            50%{filter:drop-shadow(6px 4px 6px #329555)}; \n                            100%{filter:drop-shadow(2px 2px 2px #329555)}; \n                        }\n        }\n        .slick-dots li button::before {\n            color:red ;\n            opacity:0.8;\n            font-size: 0.7rem;\n            animation: btnShadow 1.2s linear infinite;\n                    @keyframes btnShadow{\n                        0%{filter:drop-shadow(2px 2px 2px red)}; \n                        50%{filter:drop-shadow(6px 4px 6px red)}; \n                        100%{filter:drop-shadow(2px 2px 2px red)}; \n                    }\n        }\n    }  \n"]);return T=function(){return n},n}var B=p.b.div(T()),W=p.b.div(L()),K=p.b.h1(N()),F=Object(p.b)(A.c.div)(P()),R=Object(p.b)(F)(M()),H=t(8),J=(t(53),t(54),t(35)),D=t.n(J),U=function(n){var e=n.satelliteStatusAboutMe,t=n.setSatelliteStatusAboutMe,a=n.isPlaying;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(B,{id:"about",children:[Object(i.jsx)(W,{children:Object(i.jsx)("img",{className:a?"rotate":"rotate-pause",src:I,alt:"palenet"})}),Object(i.jsx)(K,{children:Object(i.jsxs)("span",{onClick:function(){return t(!e)},children:["About Me...",Object(i.jsx)(k.a,{className:"satellite",icon:S.f})]})}),Object(i.jsx)(A.a,{children:e&&Object(i.jsxs)(D.a,Object(c.a)(Object(c.a)({className:"slider"},{dots:!0,fade:!0,speed:800,slidesToShow:1,slidesToScroll:1,arrows:!0,infinite:!0}),{},{children:[Object(i.jsx)(A.b,{children:Object(i.jsxs)(F,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[Object(i.jsx)("img",{src:C,alt:"sandor"}),Object(i.jsxs)("h1",{children:["Hi, i am",Object(i.jsx)("br",{}),Object(i.jsx)("span",{children:"Sandor Kovacs"}),","]}),Object(i.jsx)("h3",{children:"and i'm going to be a frontend developer"}),Object(i.jsx)("p",{children:"That is the reason why I fight with codes every day at full time since 2020 October and I love it."}),Object(i.jsx)("p",{children:"If you are interested in more information about me, please click on the arrows."})]})}),Object(i.jsx)(A.b,{children:Object(i.jsx)(F,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:Object(i.jsxs)("div",{className:"intro-wrapper",children:[Object(i.jsx)("h1",{children:"introduction"}),Object(i.jsxs)("p",{children:["My first meet with programming was in a university course. We made some geographic projects and demographic maps. I liked it but I had no brave to change my studies. I got master's degree in earth science at University of Szeged in 2019. I worked as a geologist for a year but I didn't find my happiness in this field. So, I realized what I actually want. I want to be a programmer. I enrolled in ",Object(i.jsx)("strong",{children:" CodeBerry Programming School"})," and I got the basics of html, css and javascript, after this I self-taught React.js from english courses. Please click on the arrow and check my skills."]})]})})}),Object(i.jsx)(A.b,{children:Object(i.jsxs)(R,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[Object(i.jsx)("h3",{children:"My Skills"}),Object(i.jsxs)("div",{className:"html-wrapper",children:[Object(i.jsxs)("p",{children:["HTML: ",Object(i.jsx)(k.a,{icon:H.c})]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Basics, Structure construction"}),Object(i.jsx)("li",{children:"Forms and validation"})]})]}),Object(i.jsxs)("div",{className:"css-wrapper",children:[Object(i.jsxs)("p",{children:["CSS: ",Object(i.jsx)(k.a,{icon:H.a})]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Basics, responsive desing with media queries"}),Object(i.jsx)("li",{children:"Flex-box, animations, keyframes, hover effects"})]})]}),Object(i.jsxs)("div",{className:"js-wrapper",children:[Object(i.jsxs)("p",{children:["JavaScript ",Object(i.jsx)(k.a,{icon:H.d})]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Syntax and basic construct"}),Object(i.jsx)("li",{children:"DOM manipulation with vanila JS and jQuery, CSS in JS"})]})]}),Object(i.jsxs)("div",{className:"react-wrapper",children:[Object(i.jsxs)("p",{children:["React.js: ",Object(i.jsx)(k.a,{icon:H.f})]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"JSX, Installing and use dependencies"}),Object(i.jsx)("li",{children:"Create, manipulate and lifting components"}),Object(i.jsx)("li",{children:"Styled-components, basics of Sass, framer-motion and slick"})]})]})]})})]}))})]})})},_=t.p+"static/media/planet2.2cefb050.png",E=t.p+"static/media/musicplayer.05c9aeaf.png",Q=t.p+"static/media/myportfolio.80ff65a9.png",q=t.p+"static/media/todolist.721d62a3.png";function X(){var n=Object(x.a)(["\n        background-image: url(",");\n        border-radius: 0 0 15px 15px ;\n    "]);return X=function(){return n},n}function G(){var n=Object(x.a)(["\n        background-image: url(",");\n        border-radius:  0;\n    "]);return G=function(){return n},n}function Z(){var n=Object(x.a)(["\n        display: inline-flex;\n        justify-content: space-around;\n        align-items: center;\n        height: 33.3%;\n        border-radius: 15px 15px 0 0;\n        background-image: url(",");\n        background-size: cover;\n        filter: grayscale(100%);\n        opacity: 0.7;\n        transition: all 0.4s ease;\n        &:hover{\n            filter: grayscale(0%);\n            opacity: 1;\n        }\n        p{\n            font-size: 2rem;\n            color: black;\n            padding: 5px;\n            background: white;\n            box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);\n        }\n        a{\n            text-decoration: none;\n            background-color: black;\n            padding: 4px;\n            border-radius: 10px;\n            border: 1px solid white; \n            color: white;\n            transition: all 0.5s ease;\n            cursor:pointer;\n            &:hover{\n                transform: scale(1.15);\n                color: black;\n                background-color: white;\n                border: 1px solid black; \n            }\n        }\n        @media (max-width: 560px){\n            p{\n                font-size: 1rem;\n            }\n        }\n        \n        \n        \n    "]);return Z=function(){return n},n}function V(){var n=Object(x.a)(["\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        background-color: rgba(93, 149, 223, 0.5);\n        text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);\n        box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);\n        border-radius: 15px;\n        height: 500px;\n        width: 500px;\n        @media (max-width: 760px){\n            height: 400px;\n            width: 400px;\n        }\n        @media (max-width: 640px){\n            height: 340px;\n            width: 340px;\n        }\n        @media (max-width: 560px){\n            height:  270px;\n            width:  270px;\n        }\n  "]);return V=function(){return n},n}function Y(){var n=Object(x.a)(["\n      margin-top: 1vh;\n      text-align: center;\n      padding: 5px;\n      margin-bottom: 10px;\n      background:rgba(168, 161, 153, 0.6);\n      border-radius: 15px;\n      box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);\n      transition: all 0.5s ease;\n      cursor: pointer;\n      animation: shadowKey 1.3s linear infinite;\n        @keyframes shadowKey{  \n            0%{box-shadow: 7px 7px 12px 0px rgba(255, 0, 0, 0.75); }\n            50%{box-shadow: 7px 7px 5px 0px rgba(255, 0, 0, 0.75); }\n            100%{box-shadow: 7px 7px 12px 0px rgba(255, 0, 0, 0.75); }\n        }\n      &:hover{\n        transform: scale(1.15);\n      }\n        svg{\n            filter:drop-shadow(2px 2px 2px rgba(100, 100, 100, 1));\n        }\n  "]);return Y=function(){return n},n}function $(){var n=Object(x.a)(["\nposition: absolute;\nz-index: -2;\ntransition: 0.5s;\n.rotate {\n  animation: rotation 118s infinite linear;\n}\n\n@keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n.rotate-pause{\n    animation: rotation 118s infinite linear;\n    animation-play-state: paused;\n}\n@media (max-width: 1000px), (max-height: 1000px){\n    img{\n        width: 865px;\n    }\n}\n@media (max-width: 900px), (max-height: 900px){\n    img{\n        width: 740px;\n        \n    }\n}\n@media (max-width: 760px), (max-height: 800px){\n    img{\n        width: 620px;\n    }\n}\n@media (max-width: 640px), (max-height: 700px){\n    img{\n        width: 540px;\n    }\n}\n@media (max-width: 560px), (max-height: 600px){\n    img{\n        width: 440px;\n    }\n}\n@media (max-width: 460px), (max-height: 520px){\n    img{\n        width: 340px;\n    }\n}\n@media (max-width: 358px), (max-height: 520px){\n    img{\n        width: 300px;\n    }\n}\n@media (max-width: 320px),  (max-height: 380px){\n    img{\n        width: 240px;\n    }\n}\n@media  (max-height: 330px){\n    img{\n        width: 200px;\n    }\n}\n"]);return $=function(){return n},n}function nn(){var n=Object(x.a)(["\n   padding-top: 80px;\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   justify-content: center;\n   min-height: 100vh;\n   width: 100%;\n   \n    \n"]);return nn=function(){return n},n}var en=p.b.div(nn()),tn=p.b.div($()),an=p.b.h1(Y()),rn=Object(p.b)(A.c.div)(V()),on=p.b.div(Z(),E),sn=Object(p.b)(on)(G(),Q),cn=Object(p.b)(on)(X(),q),dn=function(n){var e=n.satelliteStatusMyWorks,t=n.setSatelliteStatusMyWorks,a=n.isPlaying;return Object(i.jsxs)(en,{id:"myworks",children:[Object(i.jsx)(tn,{children:Object(i.jsx)("img",{className:a?"rotate":"rotate-pause",src:_,alt:"palenet2"})}),Object(i.jsxs)(an,{onClick:function(){return t(!e)},children:["My Works...",Object(i.jsx)(k.a,{icon:S.f})]}),Object(i.jsx)(A.a,{children:e&&Object(i.jsx)(A.b,{children:Object(i.jsxs)(rn,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[Object(i.jsxs)(on,{children:[Object(i.jsx)("p",{children:"Music Player "}),Object(i.jsxs)("a",{href:"https://sadap93.github.io/musicplayer/",target:"blank",rel:"noreferrer",children:[Object(i.jsx)(k.a,{icon:S.a})," demo"]}),Object(i.jsxs)("a",{href:"https://github.com/Sadap93/musicplayer",target:"blank",rel:"noreferrer",children:[Object(i.jsx)(k.a,{icon:H.b})," code"]})]}),Object(i.jsxs)(sn,{children:[Object(i.jsx)("p",{children:"My Portfolio "}),Object(i.jsxs)("a",{href:"https://sadap93.github.io/my-portfolio/",target:"blank",rel:"noreferrer",children:[Object(i.jsx)(k.a,{icon:S.a})," demo"]}),Object(i.jsxs)("a",{href:"https://github.com/Sadap93/my-portfolio",target:"blank",rel:"noreferrer",children:[Object(i.jsx)(k.a,{icon:H.b})," code"]})]}),Object(i.jsxs)(cn,{children:[Object(i.jsx)("p",{children:"Todo List "}),Object(i.jsxs)("a",{href:"https://sadap93.github.io/react-todo/",target:"blank",rel:"noreferrer",children:[Object(i.jsx)(k.a,{icon:S.a})," demo"]}),Object(i.jsxs)("a",{href:"https://github.com/Sadap93/react-todo",target:"blank",rel:"noreferrer",children:[Object(i.jsx)(k.a,{icon:H.b})," code"]})]})]})})})]})},xn=t.p+"static/media/planet3.cc92edfc.png";function pn(){var n=Object(x.a)(["\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        align-items: center;\n        text-align: center;\n        box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);\n        background-color: rgba(93, 149, 223, 0.5);\n        text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);\n        border-radius: 15px;\n        padding: 5px;\n        height: 500px;\n        width: 500px;\n        animation:shadow 1.2s linear infinite;\n            @keyframes shadow{\n                0%{text-shadow:2px 2px 2px red }\n                50%{text-shadow:3px 5px 6px red }\n                100%{text-shadow:2px 2px 2px red }\n        }\n        p{   \n        color: inherit;\n        transition: all 0.4s ease;\n        font-size: 1.5rem;\n        cursor: pointer;\n            &:hover{\n                transform: scale(1.1);\n                color:red;\n            }\n        }\n        svg{\n            text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);\n            animation: satelliteShadow 1.2s linear infinite;\n                @keyframes satelliteShadow{\n                    0%{filter:drop-shadow(2px 2px 2px red)}; \n                    50%{filter:drop-shadow(3px 5px 6px red)}; \n                    100%{filter:drop-shadow(2px 2px 2px red)}; \n                }\n        }\n        a{\n            color: inherit;\n            text-decoration: none; \n        }\n\n        @media (max-width: 760px){\n            height: 400px;\n            width: 400px;\n        }\n        @media (max-width: 640px){\n            height: 340px;\n            width: 340px;\n            p{\n                font-size: 1rem;\n            }\n        }\n        @media (max-width: 560px){\n            height:  210px;\n            width:  240px;\n        }\n"]);return pn=function(){return n},n}function ln(){var n=Object(x.a)(["\n      margin-top: 1vh;\n      text-align: center;\n      padding: 5px;\n      margin-bottom: 10px;\n      background:rgba(168, 161, 153, 0.6);\n      border-radius: 15px;\n      text-shadow: 2px 2px 2px rgba(100, 100, 100, 1);\n      transition: all 0.5s ease;\n      cursor: pointer;\n      animation: shadowKey 1.3s linear infinite;\n        @keyframes shadowKey{  \n            0%{box-shadow: 7px 7px 12px 0px rgba(255, 0, 0, 0.75); }\n            50%{box-shadow: 7px 7px 5px 0px rgba(255, 0, 0, 0.75); }\n            100%{box-shadow: 7px 7px 12px 0px rgba(255, 0, 0, 0.75); }\n        }\n      &:hover{\n        transform: scale(1.15); \n      }\n        svg{\n            filter:drop-shadow(2px 2px 2px rgba(100, 100, 100, 1));\n        }\n"]);return ln=function(){return n},n}function hn(){var n=Object(x.a)(["\n    position: absolute;\n    z-index: -2;\n    transition: 0.5s;\n    img{\n        width: 900px;\n    }\n    .rotate {\n        animation: rotation 118s infinite linear;\n    }\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg);\n        }\n        to {\n            transform: rotate(359deg);\n        }\n    }\n    .rotate-pause{\n        animation: rotation 118s infinite linear;\n        animation-play-state: paused;\n    }\n    @media (max-width: 1000px), (max-height: 1000px){\n        img{\n            width: 835px;\n        }\n    }\n    @media (max-width: 900px), (max-height: 900px){\n        img{\n            width: 740px;\n        }\n    }\n    @media (max-width: 760px), (max-height: 800px){\n        img{\n            width: 620px;\n        }\n    }\n    @media (max-width: 640px), (max-height: 700px){\n        img{\n            width: 540px;\n        }\n    }\n    @media (max-width: 560px), (max-height: 600px){\n        img{\n            width: 440px;\n        }\n    }\n    @media (max-width: 460px), (max-height: 520px){\n        img{\n            width: 340px;\n        }\n    }\n    @media (max-width: 358px), (max-height: 520px){\n        img{\n            width: 300px;\n        }\n    }\n    @media (max-width: 320px),  (max-height: 380px){\n        img{\n            width: 240px;\n        }\n    }\n    @media  (max-height: 330px){\n        img{\n            width: 200px;\n        }\n    }\n"]);return hn=function(){return n},n}function mn(){var n=Object(x.a)(["\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   justify-content: center;\n   padding-top: 80px;\n   min-height: calc(100vh - 50px);\n   width: 100%;\n"]);return mn=function(){return n},n}var bn=p.b.div(mn()),jn=p.b.div(hn()),gn=p.b.h1(ln()),un=Object(p.b)(A.c.div)(pn()),fn=function(n){var e=n.satelliteStatusContact,t=n.setSatelliteStatusContact,a=n.isPlaying;return Object(i.jsxs)(bn,{id:"contact",children:[Object(i.jsx)(jn,{children:Object(i.jsx)("img",{className:a?"rotate":"rotate-pause",src:xn,alt:"palenet3"})}),Object(i.jsxs)(gn,{onClick:function(){return t(!e)},children:["Contact...",Object(i.jsx)(k.a,{icon:S.f})]}),Object(i.jsx)(A.a,{children:e&&Object(i.jsx)(A.b,{children:Object(i.jsxs)(un,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[Object(i.jsx)("p",{children:Object(i.jsxs)("a",{href:"mailto: sadap93@gmail.com",children:[Object(i.jsx)(k.a,{icon:S.b})," sadap93@gmail.com"]})}),Object(i.jsx)("p",{children:Object(i.jsxs)("a",{href:"tel: +36706349269",children:[Object(i.jsx)(k.a,{icon:S.d})," +36706349269"]})}),Object(i.jsx)("p",{children:Object(i.jsxs)("a",{href:"https://github.com/Sadap93?tab=repositories",target:"blank",rel:"noreferrer",children:[Object(i.jsx)(k.a,{icon:H.b})," GitHub"]})}),Object(i.jsx)("p",{children:Object(i.jsxs)("a",{href:"https://www.linkedin.com/in/sandor-kovacs93/",target:"blank",rel:"noreferrer",children:[Object(i.jsx)(k.a,{icon:H.e})," LinkedIn"]})})]})})})]})};function wn(){var n=Object(x.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nheight: 25px;\nbackground: #282828;\ncolor: #fefffc;\n/* position: absolute; */\n\n/* bottom: -4vh; */\nwidth: 100%;\np{\n    font-family: 'Alien';\n    letter-spacing:2px;\n    \n    @media (max-width:600px){\n        font-size:0.7rem;\n    }\n    @media (max-width: 350px){\n        letter-spacing: 1.4px;\n    }\n}\na{\n    text-decoration:none;\n    color:red;\n    transition: all 0.5s ease;\n    &:hover{\n        text-shadow:2px 2px 2px red;\n    }\n}\n"]);return wn=function(){return n},n}var On=p.b.div(wn()),yn=function(){return Object(i.jsx)(On,{children:Object(i.jsxs)("p",{children:["Created and Designed by  ",Object(i.jsx)("a",{href:"mailto:sadap93@gmail.com",children:"Sandor Kovacs"})," in 2021."]})})};var vn=function(){var n=Object(a.useState)(!1),e=Object(d.a)(n,2),t=e[0],r=e[1],o=Object(a.useState)(!1),s=Object(d.a)(o,2),x=s[0],p=s[1],l=Object(a.useState)(!1),h=Object(d.a)(l,2),b=h[0],j=h[1],g=Object(a.useState)(!1),u=Object(d.a)(g,2),f=u[0],O=u[1],y=Object(a.useState)({currentTime:0}),v=Object(d.a)(y,2),k=v[0],S=v[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(w,{}),Object(i.jsx)(m,{}),Object(i.jsx)(z,{timeUpdateHandler:function(n){var e=n.target.currentTime;S(Object(c.a)(Object(c.a)({},k),{},{currentTime:e}))},isPlaying:f,setIsPlaying:O}),Object(i.jsx)(U,{isPlaying:f,songInfo:k,satelliteStatusAboutMe:t,setSatelliteStatusAboutMe:r}),Object(i.jsx)(dn,{satelliteStatusMyWorks:x,setSatelliteStatusMyWorks:p,isPlaying:f}),Object(i.jsx)(fn,{satelliteStatusContact:b,setSatelliteStatusContact:j,isPlaying:f}),Object(i.jsx)(yn,{})]})},kn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,71)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),i(n),a(n),r(n),o(n)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(vn,{})}),document.getElementById("root")),kn()}},[[70,1,2]]]);
//# sourceMappingURL=main.5821f445.chunk.js.map