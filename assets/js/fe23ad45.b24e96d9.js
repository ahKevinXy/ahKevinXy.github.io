"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[61570],{34705:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>S,frontMatter:()=>l,metadata:()=>d,toc:()=>A});var E=t(85893),T=t(11151);const l={title:"MySQL\u4e2dDATE_FORMAT()\u51fd\u6570\u7684\u8bf4\u660e\u548c\u7b80\u4ecb",tags:["mysql","\u57fa\u7840\u77e5\u8bc6"],authors:"ahKevinXy",description:"MYSQL \u65f6\u95f4\u51fd\u6570\u5904\u7406 MYSQL \u65f6\u95f4\u7ba1\u7406",image:"https://img.opencodes.top/blog/cmb/wx.png"},s="Mysql \u65e5\u671f\u5904\u7406\u51fd\u6570",d={permalink:"/blog/2023/05/23/mysql",source:"@site/blog/2023/05/23/mysql.md",title:"MySQL\u4e2dDATE_FORMAT()\u51fd\u6570\u7684\u8bf4\u660e\u548c\u7b80\u4ecb",description:"MYSQL \u65f6\u95f4\u51fd\u6570\u5904\u7406 MYSQL \u65f6\u95f4\u7ba1\u7406",date:"2023-05-23T00:00:00.000Z",formattedDate:"2023\u5e745\u670823\u65e5",tags:[{label:"mysql",permalink:"/blog/tags/mysql"},{label:"\u57fa\u7840\u77e5\u8bc6",permalink:"/blog/tags/\u57fa\u7840\u77e5\u8bc6"}],readingTime:11.97,hasTruncateMarker:!0,authors:[{name:"ahKevinXy",title:"\u4f5c\u8005",url:"https://github.com/ahKevinXy",email:"ahkevinxy@gmail.com",imageURL:"/img/headers.png",key:"ahKevinXy"}],frontMatter:{title:"MySQL\u4e2dDATE_FORMAT()\u51fd\u6570\u7684\u8bf4\u660e\u548c\u7b80\u4ecb",tags:["mysql","\u57fa\u7840\u77e5\u8bc6"],authors:"ahKevinXy",description:"MYSQL \u65f6\u95f4\u51fd\u6570\u5904\u7406 MYSQL \u65f6\u95f4\u7ba1\u7406",image:"https://img.opencodes.top/blog/cmb/wx.png"},unlisted:!1,prevItem:{title:"\u62db\u5546\u94f6\u884c\u94f6\u4f01\u76f4\u8054 go sdk",permalink:"/blog/2023/05/25/go-cmb"},nextItem:{title:"CPU \u8be6\u89e3",permalink:"/blog/2023/05/18/cpu"}},i={authorsImageUrls:[void 0]},A=[{value:"\u83b7\u53d6\u65f6\u95f4",id:"\u83b7\u53d6\u65f6\u95f4",level:2},{value:"NOW() \u83b7\u53d6\u5f53\u524d\u65f6\u95f4",id:"now-\u83b7\u53d6\u5f53\u524d\u65f6\u95f4",level:3},{value:"curdate \u83b7\u53d6\u5f53\u524d\u65e5\u671f",id:"curdate-\u83b7\u53d6\u5f53\u524d\u65e5\u671f",level:3},{value:"CURTIME() \u83b7\u53d6\u5f53\u524d\u65f6\u95f4",id:"curtime-\u83b7\u53d6\u5f53\u524d\u65f6\u95f4",level:3},{value:"\u83b7\u53d6\u5e74\u6708\u65e5",id:"\u83b7\u53d6\u5e74\u6708\u65e5",level:3},{value:"\u65f6\u95f4\u5904\u7406",id:"\u65f6\u95f4\u5904\u7406",level:2},{value:"\u65e5\u671f\u589e\u52a0 \u51cf\u5c11",id:"\u65e5\u671f\u589e\u52a0-\u51cf\u5c11",level:3},{value:"\u65e5\u671f\u683c\u5f0f\u5316\u3001\u5b57\u7b26\u4e32\u8f6c\u65e5\u671f",id:"\u65e5\u671f\u683c\u5f0f\u5316\u5b57\u7b26\u4e32\u8f6c\u65e5\u671f",level:2},{value:"DATE_FORMAT",id:"date_format",level:3},{value:"\u5176\u5b83\u53c2\u8003",id:"\u5176\u5b83\u53c2\u8003",level:2},{value:"\u683c\u5f0f\u5316\u53c2\u6570",id:"\u683c\u5f0f\u5316\u53c2\u6570",level:2}];function r(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,T.a)(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(n.h2,{id:"\u83b7\u53d6\u65f6\u95f4",children:"\u83b7\u53d6\u65f6\u95f4"}),"\n",(0,E.jsx)(n.h3,{id:"now-\u83b7\u53d6\u5f53\u524d\u65f6\u95f4",children:"NOW() \u83b7\u53d6\u5f53\u524d\u65f6\u95f4"}),"\n",(0,E.jsx)(n.pre,{children:(0,E.jsx)(n.code,{className:"language-sql",children:"select NOW(); -- 2023-05-25 13:17:50\n"})}),"\n",(0,E.jsx)(n.h3,{id:"curdate-\u83b7\u53d6\u5f53\u524d\u65e5\u671f",children:"curdate \u83b7\u53d6\u5f53\u524d\u65e5\u671f"}),"\n",(0,E.jsx)(n.pre,{children:(0,E.jsx)(n.code,{className:"language-sql",children:"SELECT CURDATE(); --2023-05-25\n"})}),"\n",(0,E.jsx)(n.h3,{id:"curtime-\u83b7\u53d6\u5f53\u524d\u65f6\u95f4",children:"CURTIME() \u83b7\u53d6\u5f53\u524d\u65f6\u95f4"}),"\n",(0,E.jsx)(n.pre,{children:(0,E.jsx)(n.code,{className:"language-sql",children:"SELECT CURTIME();  --  13:17:50\n"})}),"\n",(0,E.jsx)(n.h3,{id:"\u83b7\u53d6\u5e74\u6708\u65e5",children:"\u83b7\u53d6\u5e74\u6708\u65e5"}),"\n",(0,E.jsx)(n.pre,{children:(0,E.jsx)(n.code,{className:"language-sql",children:"SELECT EXTRACT(YEAR FROM NOW(); -- \u83b7\u53d6\u5e74 2023\nSELECT EXTRACT(MONTH FROM NOW()); -- \u83b7\u53d6\u6708 5\nSELECT EXTRACT(DAY FROM NOW()); -- \u65e5 25\nSELECT EXTRACT(HOUR FROM NOW()); -- \u83b7\u53d6\u65f6\u95f4 13\nSELECT EXTRACT(MINUTE FROM NOW()); -- 17\n\nSELECT EXTRACT(SECOND FROM NOW()); -- \u79d229\n\n--  \u6216\u8005\u4ece\u65e5\u671f\u683c\u5f0f\u5b57\u7b26\u4e32\u4e2d\u83b7\u53d6\nSELECT EXTRACT(SECOND FROM '2023-05-25 13:17:50');  -- 14\n\n\n"})}),"\n",(0,E.jsx)(n.h2,{id:"\u65f6\u95f4\u5904\u7406",children:"\u65f6\u95f4\u5904\u7406"}),"\n",(0,E.jsx)(n.h3,{id:"\u65e5\u671f\u589e\u52a0-\u51cf\u5c11",children:"\u65e5\u671f\u589e\u52a0 \u51cf\u5c11"}),"\n",(0,E.jsx)(n.pre,{children:(0,E.jsx)(n.code,{className:"language-sql",children:"-- \u65f6\u95f4\u51cf\u5c11\u4e00\u4e2a\u5c0f\u65f6\nselect date_sub(now(), INTERVAL 1 hour);\n\n-- \u65f6\u95f4\u52a0\u4e00\u5929 \nselect date_add(now(), INTERVAL 1 day);\n-- \u5176\u4ed6\u95f4\u9694\nINTERVAL 1 YEAR\nINTERVAL 1 MONTH\nINTERVAL 1 DAY\nINTERVAL 1 HOUR\nINTERVAL 1 MINUTE\nINTERVAL 1 SECOND\n\n"})}),"\n",(0,E.jsx)(n.h2,{id:"\u65e5\u671f\u683c\u5f0f\u5316\u5b57\u7b26\u4e32\u8f6c\u65e5\u671f",children:"\u65e5\u671f\u683c\u5f0f\u5316\u3001\u5b57\u7b26\u4e32\u8f6c\u65e5\u671f"}),"\n",(0,E.jsx)(n.h3,{id:"date_format",children:"DATE_FORMAT"}),"\n",(0,E.jsx)(n.p,{children:"\u683c\u5f0f\u5316 datetime timestamp"}),"\n",(0,E.jsxs)(n.ul,{children:["\n",(0,E.jsx)(n.li,{children:"date \u662f\u8981\u683c\u5f0f\u5316\u7684\u6709\u6548\u65e5\u671f"}),"\n",(0,E.jsx)(n.li,{children:"format \u9884\u5b9a\u4e49\u7684\u8bf4\u660e\u7b26"}),"\n"]}),"\n",(0,E.jsx)(n.pre,{children:(0,E.jsx)(n.code,{className:"language-sql",children:"-- \u683c\u5f0f\u5316\u53c2\u8003\uff1a\nselect DATE_FORMAT(now(),'%Y-%m-%d %H:%i:%s');\nselect DATE_FORMAT(now(),'%Y-%m-%d %H:00:00');\n\n-- \u5b57\u7b26\u4e32\u8f6c\u65e5\u671f\nselect str_to_date('2023-05-25 13:17:50', '%Y-%m-%d %H:%i:%s'); -- 2023-05-25 13:17:50\n\n"})}),"\n",(0,E.jsx)(n.h2,{id:"\u5176\u5b83\u53c2\u8003",children:"\u5176\u5b83\u53c2\u8003"}),"\n",(0,E.jsx)(n.pre,{children:(0,E.jsx)(n.code,{className:"language-sql",children:"-- MySQL\u65e5\u671f\u65f6\u95f4\u5904\u7406\u51fd\u6570\n-- \u5f53\u524d\u65e5\u671f\uff1a2017-05-12\uff08\u7a81\u7136\u53d1\u73b0\u4eca\u5929512\uff0c\u662f\u4e0d\u662f\u4f1a\u62c9\u9632\u7a7a\u8b66\u62a5\uff09\nSELECT NOW() FROM DUAL;-- \u5f53\u524d\u65e5\u671f\u65f6\u95f4\uff1a2017-05-12 11:41:47\n-- \u5728MySQL\u91cc\u4e5f\u5b58\u5728\u548cOracle\u91cc\u7c7b\u4f3c\u7684dual\u865a\u62df\u8868\uff1a\u5b98\u65b9\u58f0\u660e\u7eaf\u7cb9\u662f\u4e3a\u4e86\u6ee1\u8db3select ... from...\u8fd9\u4e00\u4e60\u60ef\u95ee\u9898\uff0cmysql\u4f1a\u5ffd\u7565\u5bf9\u8be5\u8868\u7684\u5f15\u7528\u3002\n-- \u90a3\u4e48MySQL\u4e2d\u5c31\u4e0d\u7528DUAL\u4e86\u5427\u3002\nSELECT NOW();-- \u5f53\u524d\u65e5\u671f\u65f6\u95f4\uff1a2017-05-12 11:41:55\n-- \u9664\u4e86 now() \u51fd\u6570\u80fd\u83b7\u5f97\u5f53\u524d\u7684\u65e5\u671f\u65f6\u95f4\u5916\uff0cMySQL \u4e2d\u8fd8\u6709\u4e0b\u9762\u7684\u51fd\u6570\uff1a\nSELECT CURRENT_TIMESTAMP();-- 2017-05-15 10:19:31\nSELECT CURRENT_TIMESTAMP;-- 2017-05-15 10:19:51\nSELECT LOCALTIME();-- 2017-05-15 10:20:00\nSELECT LOCALTIME;-- 2017-05-15 10:20:10\nSELECT LOCALTIMESTAMP();-- 2017-05-15 10:20:21(v4.0.6)\nSELECT LOCALTIMESTAMP;-- 2017-05-15 10:20:30(v4.0.6)\n-- \u8fd9\u4e9b\u65e5\u671f\u65f6\u95f4\u51fd\u6570\uff0c\u90fd\u7b49\u540c\u4e8e now()\u3002\u9274\u4e8e now() \u51fd\u6570\u7b80\u77ed\u6613\u8bb0\uff0c\u5efa\u8bae\u603b\u662f\u4f7f\u7528 now()\u6765\u66ff\u4ee3\u4e0a\u9762\u5217\u51fa\u7684\u51fd\u6570\u3002\n \nSELECT SYSDATE();-- \u5f53\u524d\u65e5\u671f\u65f6\u95f4\uff1a2017-05-12 11:42:03\n-- sysdate() \u65e5\u671f\u65f6\u95f4\u51fd\u6570\u8ddf now() \u7c7b\u4f3c\uff0c\n-- \u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff1anow() \u5728\u6267\u884c\u5f00\u59cb\u65f6\u503c\u5c31\u5f97\u5230\u4e86;sysdate() \u5728\u51fd\u6570\u6267\u884c\u65f6\u52a8\u6001\u5f97\u5230\u503c\u3002\n-- \u770b\u4e0b\u9762\u7684\u4f8b\u5b50\u5c31\u660e\u767d\u4e86\uff1a\nSELECT NOW(), SLEEP(3), NOW();\nSELECT SYSDATE(), SLEEP(3), SYSDATE();\n \n \nSELECT CURDATE();-- \u5f53\u524d\u65e5\u671f\uff1a2017-05-12\nSELECT CURRENT_DATE();-- \u5f53\u524d\u65e5\u671f\uff1a\u7b49\u540c\u4e8e CURDATE()\nSELECT CURRENT_DATE;-- \u5f53\u524d\u65e5\u671f\uff1a\u7b49\u540c\u4e8e CURDATE()\n \nSELECT CURTIME();-- \u5f53\u524d\u65f6\u95f4\uff1a11:42:47\nSELECT CURRENT_TIME();-- \u5f53\u524d\u65f6\u95f4\uff1a\u7b49\u540c\u4e8e CURTIME()\nSELECT CURRENT_TIME;-- \u5f53\u524d\u65f6\u95f4\uff1a\u7b49\u540c\u4e8e CURTIME()\n \n-- \u83b7\u5f97\u5f53\u524d UTC \u65e5\u671f\u65f6\u95f4\u51fd\u6570\nSELECT UTC_TIMESTAMP(), UTC_DATE(), UTC_TIME()\n-- MySQL \u83b7\u5f97\u5f53\u524d\u65f6\u95f4\u6233\u51fd\u6570\uff1acurrent_timestamp, current_timestamp()\nSELECT CURRENT_TIMESTAMP, CURRENT_TIMESTAMP();-- 2017-05-15 10:32:21 | 2017-05-15 10:32:21\n \n \n-- MySQL \u65e5\u671f\u65f6\u95f4 Extract\uff08\u9009\u53d6\uff09 \u51fd\u6570\nSET @dt = '2017-05-15 10:37:14.123456';\nSELECT DATE(@dt);-- \u83b7\u53d6\u65e5\u671f\uff1a2017-05-15\nSELECT TIME('2017-05-15 10:37:14.123456');-- \u83b7\u53d6\u65f6\u95f4\uff1a10:37:14.123456\nSELECT YEAR('2017-05-15 10:37:14.123456');-- \u83b7\u53d6\u5e74\u4efd\nSELECT MONTH('2017-05-15 10:37:14.123456');-- \u83b7\u53d6\u6708\u4efd\nSELECT DAY('2017-05-15 10:37:14.123456');-- \u83b7\u53d6\u65e5\nSELECT HOUR('2017-05-15 10:37:14.123456');-- \u83b7\u53d6\u65f6\nSELECT MINUTE('2017-05-15 10:37:14.123456');-- \u83b7\u53d6\u5206\nSELECT SECOND('2017-05-15 10:37:14.123456');-- \u83b7\u53d6\u79d2\nSELECT MICROSECOND('2017-05-15 10:37:14.123456');-- \u83b7\u53d6\u6beb\u79d2\nSELECT QUARTER('2017-05-15 10:37:14.123456');-- \u83b7\u53d6\u5b63\u5ea6\nSELECT WEEK('2017-05-15 10:37:14.123456');-- 20 (\u83b7\u53d6\u5468)\nSELECT WEEK('2017-05-15 10:37:14.123456', 7);-- ****** \u6d4b\u8bd5\u6b64\u51fd\u6570\u5728MySQL5.6\u4e0b\u65e0\u6548\nSELECT WEEKOFYEAR('2017-05-15 10:37:14.123456');-- \u540cweek()\nSELECT DAYOFYEAR('2017-05-15 10:37:14.123456');-- 135 (\u65e5\u671f\u5728\u5e74\u5ea6\u4e2d\u7b2c\u51e0\u5929)\nSELECT DAYOFMONTH('2017-05-15 10:37:14.123456');-- 5 (\u65e5\u671f\u5728\u6708\u5ea6\u4e2d\u7b2c\u51e0\u5929)\nSELECT DAYOFWEEK('2017-05-15 10:37:14.123456');-- 2 (\u65e5\u671f\u5728\u5468\u4e2d\u7b2c\u51e0\u5929\uff1b\u5468\u65e5\u4e3a\u7b2c\u4e00\u5929)\nSELECT WEEKDAY('2017-05-15 10:37:14.123456');-- 0\nSELECT WEEKDAY('2017-05-21 10:37:14.123456');-- 6(\u4e0edayofweek()\u90fd\u8868\u793a\u65e5\u671f\u5728\u5468\u7684\u7b2c\u51e0\u5929\uff0c\u53ea\u662f\u53c2\u8003\u6807\u51c6\u4e0d\u540c\uff0cweekday()\u5468\u4e00\u4e3a\u7b2c0\u5929\uff0c\u5468\u65e5\u4e3a\u7b2c6\u5929)\nSELECT YEARWEEK('2017-05-15 10:37:14.123456');-- 201720(\u5e74\u548c\u5468)\n \nSELECT EXTRACT(YEAR FROM '2017-05-15 10:37:14.123456');\nSELECT EXTRACT(MONTH FROM '2017-05-15 10:37:14.123456');\nSELECT EXTRACT(DAY FROM '2017-05-15 10:37:14.123456');\nSELECT EXTRACT(HOUR FROM '2017-05-15 10:37:14.123456');\nSELECT EXTRACT(MINUTE FROM '2017-05-15 10:37:14.123456');\nSELECT EXTRACT(SECOND FROM '2017-05-15 10:37:14.123456');\nSELECT EXTRACT(MICROSECOND FROM '2017-05-15 10:37:14.123456');\nSELECT EXTRACT(QUARTER FROM '2017-05-15 10:37:14.123456');\nSELECT EXTRACT(WEEK FROM '2017-05-15 10:37:14.123456');\nSELECT EXTRACT(YEAR_MONTH FROM '2017-05-15 10:37:14.123456');\nSELECT EXTRACT(DAY_HOUR FROM '2017-05-15 10:37:14.123456');\nSELECT EXTRACT(DAY_MINUTE FROM '2017-05-15 10:37:14.123456');-- 151037(\u65e5\u65f6\u5206)\nSELECT EXTRACT(DAY_SECOND FROM '2017-05-15 10:37:14.123456');-- 15103714(\u65e5\u65f6\u5206\u79d2)\nSELECT EXTRACT(DAY_MICROSECOND FROM '2017-05-15 10:37:14.123456');-- 15103714123456(\u65e5\u65f6\u5206\u79d2\u6beb\u79d2)\nSELECT EXTRACT(HOUR_MINUTE FROM '2017-05-15 10:37:14.123456');-- 1037(\u65f6\u5206)\nSELECT EXTRACT(HOUR_SECOND FROM '2017-05-15 10:37:14.123456');-- 103714(\u65f6\u5206\u79d2)\nSELECT EXTRACT(HOUR_MICROSECOND FROM '2017-05-15 10:37:14.123456');-- 103714123456(\u65e5\u65f6\u5206\u79d2\u6beb\u79d2)\nSELECT EXTRACT(MINUTE_SECOND FROM '2017-05-15 10:37:14.123456');-- 3714(\u5206\u79d2)\nSELECT EXTRACT(MINUTE_MICROSECOND FROM '2017-05-15 10:37:14.123456');-- 3714123456(\u5206\u79d2\u6beb\u79d2)\nSELECT EXTRACT(SECOND_MICROSECOND FROM '2017-05-15 10:37:14.123456');-- 14123456(\u79d2\u6beb\u79d2)\n-- MySQL Extract() \u51fd\u6570\u9664\u4e86\u6ca1\u6709date(),time() \u7684\u529f\u80fd\u5916\uff0c\u5176\u4ed6\u529f\u80fd\u4e00\u5e94\u5177\u5168\u3002\n-- \u5e76\u4e14\u8fd8\u5177\u6709\u9009\u53d6\u2018day_microsecond' \u7b49\u529f\u80fd\u3002\n-- \u6ce8\u610f\u8fd9\u91cc\u4e0d\u662f\u53ea\u9009\u53d6 day \u548c microsecond\uff0c\u800c\u662f\u4ece\u65e5\u671f\u7684 day \u90e8\u5206\u4e00\u76f4\u9009\u53d6\u5230 microsecond \u90e8\u5206\u3002\n \n \nSELECT DAYNAME('2017-05-15 10:37:14.123456');-- Monday(\u8fd4\u56de\u82f1\u6587\u661f\u671f)\nSELECT MONTHNAME('2017-05-15 10:37:14.123456');-- May(\u8fd4\u56de\u82f1\u6587\u6708\u4efd)\nSELECT LAST_DAY('2016-02-01');-- 2016-02-29 (\u8fd4\u56de\u6708\u4efd\u4e2d\u6700\u540e\u4e00\u5929)\nSELECT LAST_DAY('2016-05-01');-- 2016-05-31\n \n-- DATE_ADD(date,INTERVAL expr type) \u4ece\u65e5\u671f\u52a0\u4e0a\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\n-- type\u53c2\u6570\u53ef\u53c2\u8003\uff1ahttp://www.w3school.com.cn/sql/func_date_sub.asp\nSELECT DATE_ADD('2017-05-15 10:37:14.123456',INTERVAL 1 YEAR);-- \u8868\u793a\uff1a2018-05-15 10:37:14.123456\nSELECT DATE_ADD('2017-05-15 10:37:14.123456',INTERVAL 1 QUARTER);-- \u8868\u793a\uff1a2017-08-15 10:37:14.123456\nSELECT DATE_ADD('2017-05-15 10:37:14.123456',INTERVAL 1 MONTH);-- \u8868\u793a\uff1a2017-06-15 10:37:14.123456\nSELECT DATE_ADD('2017-05-15 10:37:14.123456',INTERVAL 1 WEEK);-- \u8868\u793a\uff1a2017-05-22 10:37:14.123456\nSELECT DATE_ADD('2017-05-15 10:37:14.123456',INTERVAL 1 DAY);-- \u8868\u793a\uff1a2017-05-16 10:37:14.123456\nSELECT DATE_ADD('2017-05-15 10:37:14.123456',INTERVAL 1 HOUR);-- \u8868\u793a\uff1a2017-05-15 11:37:14.123456\nSELECT DATE_ADD('2017-05-15 10:37:14.123456',INTERVAL 1 MINUTE);-- \u8868\u793a\uff1a2017-05-15 10:38:14.123456\nSELECT DATE_ADD('2017-05-15 10:37:14.123456',INTERVAL 1 SECOND);-- \u8868\u793a\uff1a2017-05-15 10:37:15.123456\nSELECT DATE_ADD('2017-05-15 10:37:14.123456',INTERVAL 1 MICROSECOND);-- \u8868\u793a\uff1a2017-05-15 10:37:14.123457\n \n \n-- DATE_SUB(date,INTERVAL expr type) \u4ece\u65e5\u671f\u51cf\u53bb\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\nSELECT DATE_SUB('2017-05-15 10:37:14.123456',INTERVAL 1 YEAR);-- \u8868\u793a\uff1a2016-05-15 10:37:14.123456\nSELECT DATE_SUB('2017-05-15 10:37:14.123456',INTERVAL 1 QUARTER);-- \u8868\u793a\uff1a2017-02-15 10:37:14.123456\nSELECT DATE_SUB('2017-05-15 10:37:14.123456',INTERVAL 1 MONTH);-- \u8868\u793a\uff1a2017-04-15 10:37:14.123456\nSELECT DATE_SUB('2017-05-15 10:37:14.123456',INTERVAL 1 WEEK);-- \u8868\u793a\uff1a2017-05-08 10:37:14.123456\nSELECT DATE_SUB('2017-05-15 10:37:14.123456',INTERVAL 1 DAY);-- \u8868\u793a\uff1a2017-05-14 10:37:14.123456\nSELECT DATE_SUB('2017-05-15 10:37:14.123456',INTERVAL 1 HOUR);-- \u8868\u793a\uff1a2017-05-15 09:37:14.123456\nSELECT DATE_SUB('2017-05-15 10:37:14.123456',INTERVAL 1 MINUTE);-- \u8868\u793a\uff1a2017-05-15 10:36:14.123456\nSELECT DATE_SUB('2017-05-15 10:37:14.123456',INTERVAL 1 SECOND);-- \u8868\u793a\uff1a2017-05-15 10:37:13.123456\nSELECT DATE_SUB('2017-05-15 10:37:14.123456',INTERVAL 1 MICROSECOND);-- \u8868\u793a\uff1a2017-05-15 10:37:14.123455\n \n-- \u7ecf\u7279\u6b8a\u65e5\u671f\u6d4b\u8bd5\uff0cDATE_SUB(date,INTERVAL expr type)\u53ef\u653e\u5fc3\u4f7f\u7528\nSELECT DATE_SUB(CURDATE(),INTERVAL 1 DAY);-- \u524d\u4e00\u5929\uff1a2017-05-11\nSELECT DATE_SUB(CURDATE(),INTERVAL -1 DAY);-- \u540e\u4e00\u5929\uff1a2017-05-13\nSELECT DATE_SUB(CURDATE(),INTERVAL 1 MONTH);-- \u4e00\u4e2a\u6708\u524d\u65e5\u671f\uff1a2017-04-12\nSELECT DATE_SUB(CURDATE(),INTERVAL -1 MONTH);-- \u4e00\u4e2a\u6708\u540e\u65e5\u671f\uff1a2017-06-12\nSELECT DATE_SUB(CURDATE(),INTERVAL 1 YEAR);-- \u4e00\u5e74\u524d\u65e5\u671f\uff1a2016-05-12\nSELECT DATE_SUB(CURDATE(),INTERVAL -1 YEAR);-- \u4e00\u5e74\u540e\u65e5\u671f\uff1a20178-06-12\n-- MySQL date_sub() \u65e5\u671f\u65f6\u95f4\u51fd\u6570 \u548c date_add() \u7528\u6cd5\u4e00\u81f4\uff0c\u5e76\u4e14\u53ef\u4ee5\u7528INTERNAL -1 xxx\u7684\u5f62\u5f0f\u4e92\u6362\u4f7f\u7528\uff1b\n-- \u53e6\u5916\uff0cMySQL \u4e2d\u8fd8\u6709\u4e24\u4e2a\u51fd\u6570 subdate(), subtime()\uff0c\u5efa\u8bae\uff0c\u7528 date_sub() \u6765\u66ff\u4ee3\u3002\n \n-- MySQL \u53e6\u7c7b\u65e5\u671f\u51fd\u6570\uff1aperiod_add(P,N), period_diff(P1,P2)\n-- \u51fd\u6570\u53c2\u6570\u201cP\u201d \u7684\u683c\u5f0f\u4e3a\u201cYYYYMM\u201d \u6216\u8005 \u201cYYMM\u201d\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u201cN\u201d \u8868\u793a\u589e\u52a0\u6216\u51cf\u53bb N month\uff08\u6708\uff09\u3002\n-- MySQL period_add(P,N)\uff1a\u65e5\u671f\u52a0/\u51cf\u53bbN\u6708\u3002\nSELECT PERIOD_ADD(201705,2), PERIOD_ADD(201705,-2);-- 201707  20170503\n-- period_diff(P1,P2)\uff1a\u65e5\u671f P1-P2\uff0c\u8fd4\u56de N \u4e2a\u6708\u3002\nSELECT PERIOD_DIFF(201706, 201703);-- \n-- datediff(date1,date2)\uff1a\u4e24\u4e2a\u65e5\u671f\u76f8\u51cf date1 - date2\uff0c\u8fd4\u56de\u5929\u6570\nSELECT DATEDIFF('2017-06-05','2017-05-29');-- 7\n-- TIMEDIFF(time1,time2)\uff1a\u4e24\u4e2a\u65e5\u671f\u76f8\u51cf time1 - time2\uff0c\u8fd4\u56de TIME \u5dee\u503c\nSELECT TIMEDIFF('2017-06-05 19:28:37', '2017-06-05 17:00:00');-- 02:28:37\n \n \n-- MySQL\u65e5\u671f\u8f6c\u6362\u51fd\u6570\nSELECT TIME_TO_SEC('01:00:05'); -- 3605\nSELECT SEC_TO_TIME(3605);-- 01:00:05\n \n-- MySQL \uff08\u65e5\u671f\u3001\u5929\u6570\uff09\u8f6c\u6362\u51fd\u6570\uff1ato_days(date), from_days(days)\nSELECT TO_DAYS('0000-00-00'); -- NULL \nSELECT TO_DAYS('2017-06-05'); -- 736850\nSELECT FROM_DAYS(0);           -- '0000-00-00' \nSELECT FROM_DAYS(736850);      -- '2017-06-05'\n \n-- MySQL Str to Date \uff08\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u65e5\u671f\uff09\u51fd\u6570\uff1astr_to_date(str, format)\n \nSELECT STR_TO_DATE('06.05.2017 19:40:30', '%m.%d.%Y %H:%i:%s');-- 2017-06-05 19:40:30\nSELECT STR_TO_DATE('06/05/2017', '%m/%d/%Y');                  -- 2017-06-05\nSELECT STR_TO_DATE('2017/12/3','%Y/%m/%d')\t\t       -- 2017-12-03\nSELECT STR_TO_DATE('20:09:30', '%h:%i:%s')\t\t       -- NULL(\u8d85\u8fc712\u65f6\u7684\u5c0f\u65f6\u7528\u5c0f\u5199h\uff0c\u5f97\u5230\u7684\u7ed3\u679c\u4e3aNULL)\n \n-- \u65e5\u671f\u65f6\u95f4\u683c\u5f0f\u5316\nSELECT DATE_FORMAT('2017-05-12 17:03:51', '%Y\u5e74%m\u6708%d\u65e5 %H\u65f6%i\u5206%s\u79d2');-- 2017\u5e7405\u670812\u65e5 17\u65f603\u520651\u79d2(\u5177\u4f53\u9700\u8981\u4ec0\u4e48\u683c\u5f0f\u7684\u6570\u636e\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u6765;\u5c0f\u5199h\u4e3a12\u5c0f\u65f6\u5236;)\nSELECT TIME_FORMAT('2017-05-12 17:03:51', '%Y\u5e74%m\u6708%d\u65e5 %H\u65f6%i\u5206%s\u79d2');-- 0000\u5e7400\u670800\u65e5 17\u65f603\u520651\u79d2(time_format()\u53ea\u80fd\u7528\u4e8e\u65f6\u95f4\u7684\u683c\u5f0f\u5316)\n-- STR_TO_DATE()\u548cDATE_FORMATE()\u4e3a\u4e92\u9006\u64cd\u4f5c\n \n-- MySQL \u83b7\u5f97\u56fd\u5bb6\u5730\u533a\u65f6\u95f4\u683c\u5f0f\u51fd\u6570\uff1aget_format()\n-- MySQL get_format() \u8bed\u6cd5\uff1aget_format(date|time|datetime, 'eur'|'usa'|'jis'|'iso'|'internal'\n-- MySQL get_format() \u7528\u6cd5\u7684\u5168\u90e8\u793a\u4f8b\uff1a\nSELECT GET_FORMAT(DATE,'usa');   \t-- '%m.%d.%Y' \nSELECT GET_FORMAT(DATE,'jis');   \t-- '%Y-%m-%d' \nSELECT GET_FORMAT(DATE,'iso');   \t-- '%Y-%m-%d' \nSELECT GET_FORMAT(DATE,'eur');   \t-- '%d.%m.%Y' \nSELECT GET_FORMAT(DATE,'internal');   \t-- '%Y%m%d' \nSELECT GET_FORMAT(DATETIME,'usa');   \t-- '%Y-%m-%d %H.%i.%s' \nSELECT GET_FORMAT(DATETIME,'jis');   \t-- '%Y-%m-%d %H:%i:%s' \nSELECT GET_FORMAT(DATETIME,'iso');   \t-- '%Y-%m-%d %H:%i:%s' \nSELECT GET_FORMAT(DATETIME,'eur');   \t-- '%Y-%m-%d %H.%i.%s' \nSELECT GET_FORMAT(DATETIME,'internal'); -- '%Y%m%d%H%i%s' \nSELECT GET_FORMAT(TIME,'usa');   \t-- '%h:%i:%s %p' \nSELECT GET_FORMAT(TIME,'jis');   \t-- '%H:%i:%s' \nSELECT GET_FORMAT(TIME,'iso');   \t-- '%H:%i:%s' \nSELECT GET_FORMAT(TIME,'eur');   \t-- '%H.%i.%s' \nSELECT GET_FORMAT(TIME,'internal');     -- '%H%i%s'\n \n \n-- MySQL \u62fc\u51d1\u65e5\u671f\u3001\u65f6\u95f4\u51fd\u6570\uff1amakdedate(year,dayofyear), maketime(hour,minute,second)\nSELECT MAKEDATE(2017,31);   -- '2017-01-31' \nSELECT MAKEDATE(2017,32);   -- '2017-02-01'\nSELECT MAKETIME(19,52,35);  -- '19:52:35'\n \n-- MySQL \u65f6\u533a\uff08timezone\uff09\u8f6c\u6362\u51fd\u6570\uff1aconvert_tz(dt,from_tz,to_tz)\nSELECT CONVERT_TZ('2017-06-05 19:54:12', '+08:00', '+00:00'); -- 2017-06-05 11:54:12\n \n \n-- MySQL \uff08Unix \u65f6\u95f4\u6233\u3001\u65e5\u671f\uff09\u8f6c\u6362\u51fd\u6570\n-- unix_timestamp(), unix_timestamp(date), from_unixtime(unix_timestamp), from_unixtime(unix_timestamp,format)\n-- \u5c06\u5177\u4f53\u65f6\u95f4\u65f6\u95f4\u8f6c\u4e3atimestamp\nSELECT UNIX_TIMESTAMP();-- \u5f53\u524d\u65f6\u95f4\u7684\u65f6\u95f4\u6233\uff1a1494815779\nSELECT UNIX_TIMESTAMP('2017-05-15');-- \u6307\u5b9a\u65e5\u671f\u7684\u65f6\u95f4\u6233\uff1a1494777600\nSELECT UNIX_TIMESTAMP('2017-05-15 10:37:14');-- \u6307\u5b9a\u65e5\u671f\u65f6\u95f4\u7684\u65f6\u95f4\u6233\uff1a1494815834\n \n-- \u5c06\u65f6\u95f4\u6233\u8f6c\u4e3a\u5177\u4f53\u65f6\u95f4\nSELECT FROM_UNIXTIME(1494815834);-- 2017-05-15 10:37:14\nSELECT FROM_UNIXTIME(1494815834, '%Y\u5e74%m\u6708%d\u65e5 %h\u65f6%\u5206:%s\u79d2');-- \u83b7\u53d6\u65f6\u95f4\u6233\u5bf9\u5e94\u7684\u683c\u5f0f\u5316\u65e5\u671f\u65f6\u95f4\n \n-- MySQL \u65f6\u95f4\u6233\uff08timestamp\uff09\u8f6c\u6362\u3001\u589e\u3001\u51cf\u51fd\u6570\nSELECT TIMESTAMP('2017-05-15');-- 2017-05-15 00:00:00\nSELECT TIMESTAMP('2017-05-15 08:12:25', '01:01:01');-- 2017-05-15 09:13:26\nSELECT DATE_ADD('2017-05-15 08:12:25', INTERVAL 1 DAY);-- 2017-05-16 08:12:25\nSELECT TIMESTAMPADD(DAY, 1, '2017-05-15 08:12:25');-- 2017-05-16 08:12:25; MySQL timestampadd() \u51fd\u6570\u7c7b\u4f3c\u4e8e date_add()\u3002\n \nSELECT TIMESTAMPDIFF(YEAR, '2017-06-01', '2016-05-15');-- -1\nSELECT TIMESTAMPDIFF(MONTH, '2017-06-01', '2016-06-15');-- -11\nSELECT TIMESTAMPDIFF(DAY, '2017-06-01', '2016-06-15');-- -351\nSELECT TIMESTAMPDIFF(HOUR, '2017-06-01 08:12:25', '2016-06-15 00:00:00');-- -8432\nSELECT TIMESTAMPDIFF(MINUTE, '2017-06-01 08:12:25', '2016-06-15 00:00:00');-- -505932\nSELECT TIMESTAMPDIFF(SECOND, '2017-06-01 08:12:25', '2016-06-15 00:00:00');-- -30355945\n\n"})}),"\n",(0,E.jsx)(n.h2,{id:"\u683c\u5f0f\u5316\u53c2\u6570",children:"\u683c\u5f0f\u5316\u53c2\u6570"}),"\n",(0,E.jsxs)(n.blockquote,{children:["\n",(0,E.jsx)(n.p,{children:"\u4f8b\u5b50\u683c\u5f0f\u5316 \u57fa\u4e8e 2023-05-25 13:54:00"}),"\n"]}),"\n",(0,E.jsxs)(n.table,{children:[(0,E.jsx)(n.thead,{children:(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.th,{style:{textAlign:"center"},children:"\u683c\u5f0f"}),(0,E.jsx)(n.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,E.jsxs)(n.tbody,{children:[(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%a"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u7f29\u5199\u661f\u671f\u540d  eg:(Thu)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%b"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u7f29\u5199\u6708\u540d   eg:(May)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%c"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u6708 \u6570\u5b57     eg:(5)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%D"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u5e26\u6709\u82f1\u6587\u524d\u7f00\u7684\u6708\u4e2d\u7684\u5929  eg:(25th)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%d"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u6708\u7684\u5929(00-31)  eg:(25)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%e"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u6708\u7684\u5929 (0-31)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%f"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u5fae\u79d2   eg:(000000)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%H"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u5c0f\u65f6(00-23)  eg:(13)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%h"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u5c0f\u65f6(01-12)  eg:(01)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%I"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u5c0f\u65f6(01-12)  eg:(01)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%i"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u5206\u949f(0-59)    eg:(55)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%j"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u5e74\u7684\u5929\u6570(001-366) eg:(145)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%k"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u5c0f\u65f6(0-23 )     eg:(13)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%l"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u5c0f\u65f6(1-12)       eg:(1)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%M"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u6708\u540d           eg:(May)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%m"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u6708\uff0c\u6570\u503c(00-12)       eg:(05)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%p"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"AM \u6216 PM  eg:(PM)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%r"}),(0,E.jsxs)(n.td,{style:{textAlign:"left"},children:["\u65f6\u95f4\uff0c12-\u5c0f\u65f6\uff08hh:mm",":ss"," AM \u6216 PM\uff09 eg:01:50:07 PM"]})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%S"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u79d2(00-59)          eg:(14)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%s"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u79d2(00-59)            eg:(29)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%T"}),(0,E.jsxs)(n.td,{style:{textAlign:"left"},children:["\u65f6\u95f4, 24-\u5c0f\u65f6 (hh:mm",":ss",")  eg:(13:58:25)"]})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%U"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u5468 (00-53) \u661f\u671f\u65e5\u662f\u4e00\u5468\u7684\u7b2c\u4e00\u5929   eg:(21)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%u"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u5468 (00-53) \u661f\u671f\u4e00\u662f\u4e00\u5468\u7684\u7b2c\u4e00\u5929  eg:(21)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%V"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u5468(01-53) \u661f\u671f\u5929\u662f\u4e00\u5468\u7684\u7b2c\u4e00\u5929,\u4e0e%X\u4f7f\u7528   eg:(21)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%v"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u5468(01-53) \u661f\u671f\u4e00\u662f\u4e00\u5468\u7684\u7b2c\u4e00\u5929,\u4e0e%x\u4f7f\u7528   eg:(21)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%W"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u661f\u671f\u540d           eg:(Thursday)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%w"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u5468\u7684\u5929            eg:(4)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%X"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u5e74\u5176\u4e2d\u7684\u661f\u671f\u65e5\u662f\u5468\u7684\u7b2c\u4e00\u5929,4\u4f4d \u4e0e%V\u4f7f\u7528   eg:(202321)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%x"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u5e74 \u5176\u4e2d\u7684\u661f\u671f\u4e00\u662f\u5468\u7684\u4e00\u5929,4\u4f4d\u4e0e%v\u4f7f\u7528    eg:(202321)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%Y"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u5e74,4\u4f4d            eg:(2023)"})]}),(0,E.jsxs)(n.tr,{children:[(0,E.jsx)(n.td,{style:{textAlign:"center"},children:"%t"}),(0,E.jsx)(n.td,{style:{textAlign:"left"},children:"\u5e74,2\u4f4d             eg:(23)"})]})]})]})]})}function S(e={}){const{wrapper:n}={...(0,T.a)(),...e.components};return n?(0,E.jsx)(n,{...e,children:(0,E.jsx)(r,{...e})}):r(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>s});var E=t(67294);const T={},l=E.createContext(T);function s(e){const n=E.useContext(l);return E.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(T):e.components||T:s(e.components),E.createElement(l.Provider,{value:n},e.children)}}}]);