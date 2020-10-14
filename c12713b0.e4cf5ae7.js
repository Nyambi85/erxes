(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(2),a=n(6),i=(n(0),n(138)),o={id:"android-sdk",title:"Android SDK",sidebar_label:"Android SDK"},l={unversionedId:"developer/android-sdk",id:"developer/android-sdk",isDocsHomePage:!1,title:"Android SDK",description:"These steps indicate how to install the Android SDK, for that you must follow the instructions explained below.",source:"@site/docs/developer/android-sdk.md",slug:"/developer/android-sdk",permalink:"/developer/android-sdk",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/developer/android-sdk.md",version:"current",lastUpdatedBy:"Munkhjargal",lastUpdatedAt:1590570298,sidebar_label:"Android SDK",sidebar:"docs",previous:{title:"Push notifications",permalink:"/developer/push-notifications"},next:{title:"iOS SDK",permalink:"/developer/ios-sdk"}},s=[{value:"Installation",id:"installation",children:[{value:"Installation with Gradle",id:"installation-with-gradle",children:[]},{value:"Permissions",id:"permissions",children:[]},{value:"Requirement",id:"requirement",children:[]}]},{value:"Usage",id:"usage",children:[{value:"Default configuration",id:"default-configuration",children:[]},{value:"Start Erxes SDK",id:"start-erxes-sdk",children:[]}]}],d={rightToc:s};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"These steps indicate how to install the Android SDK, for that you must follow the instructions explained below."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("h3",{id:"installation-with-gradle"},"Installation with Gradle"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add the JitPack repository to your build file\nAdd it in your root build.gradle at the end of repositories:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-gradle"}),"allprojects {\n    repositories {\n        ...\n        maven { url 'https://jitpack.io' }\n    }\n}\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Add the dependency")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"dependencies {\n        implementation 'com.github.erxes:erxes-android-sdk:{latest-version}'\n}\n")),Object(i.b)("p",null,"Click ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/erxes/erxes-android-sdk/releases"}),"here")," to show erxes-android-sdk latest version."),Object(i.b)("h3",{id:"permissions"},"Permissions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"To enable file send and receiving feature you have to add the following code to the",Object(i.b)("inlineCode",{parentName:"li"}," AndroidManifest.xml"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />\n<uses-permission android:name="android.permission.INTERNET" />\n<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />\n<uses-permission android:name="android.permission.RECORD_AUDIO" />\n<uses-permission android:name="android.permission.CAMERA" />\n<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />\n<uses-feature\n    android:name="android.hardware.camera"\n    android:required="true" />\n')),Object(i.b)("h3",{id:"requirement"},"Requirement"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"minSdkVersion is 15")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"You must add the library in the app gradle:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"implementation 'androidx.multidex:multidex:2.x.x'\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"After, add in the defaultConfig of the app gradle:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"multiDexEnabled true\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("h3",{id:"default-configuration"},"Default configuration"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"brandCode - generated unique code of your brand"),Object(i.b)("li",{parentName:"ul"},"apiHost - erxes-widgets-api server url"),Object(i.b)("li",{parentName:"ul"},"subsHost - erxes-api subscription url"),Object(i.b)("li",{parentName:"ul"},"uploadUrl - erxes-api server url")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class CustomActivity extends AppCompatActivity {\n    Config config;\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        config = new Config.Builder("brandid")\n                .setApiHost("https://url/graphql")\n                .setSubscriptionHost("wss://url/subscriptions")\n                .setUploadHost("https://url/upload-file")\n                .build(this);\n    }\n }\n')),Object(i.b)("h3",{id:"start-erxes-sdk"},"Start Erxes SDK"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Call a ErxesSdk with login form")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"    config.Start();\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"following example user will log-in to erxes with email without login form")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'    config.Start_login_email("example@email.com");\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"following example user will log-in to erxes with phoneNumber without login form")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'    config.Start_login_email("phoneNumber");\n```}\n\n\n')))}c.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),c=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||p[b]||i;return n?a.a.createElement(m,l(l({ref:t},d),{},{components:n})):a.a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);