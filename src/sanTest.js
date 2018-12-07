/**
 * @file sanTest
 * @author Waifang
 */

import './index.styl';
import {jsLoad} from './loader';

let test = '';
let flag = true;
let scritptEleTbO = document.createElement('script');
        scritptEleTbO.setAttribute('type', 'text/javascript');
        scritptEleTbO.setAttribute('src', 'https://wappass.baidu.com/static/touch/js/api/wrapper.js');
        document.getElementsByTagName('head')[0].appendChild(scritptEleTbO);
export default {
    template: `
        <section class="sanTest">
            <p class="top"></p>
            <div class="main">
                
            </div>
            <br>
            <button class="starclick" on-click="starclick">开始</button>
            <div class="block">
                <div class="dice" s-ref="dice">
                    <p class="page page{{item}}" s-for="item, index in listMin">{{item}}</p>
                </div>
            </div>
            <div class="wrapball">
                <div class="ball"></div>
            </div>
            <div class="box">
                <span class='aaa{{item}}' s-for="item, inx in list"></span>
            </div>
            <br>
            <div id="qrcodeTable"></div>
        </section>
    `,
    initData() {
	    return {
	     	online: [],
	     	list: [],
	     	createTime: 20180808,
            name: 'haode',
            listMin: [1,2,3,4,5,6],
            list: [1,2]
	    };
	},
    page: 1,
    starclick() {
        if (flag) {
            $('.dice').addClass('begin');
            flag = false;
        }
        else {
            $('.dice').removeClass('begin');
            flag = true;
        }
        
    },
	inited() {
        let arr = [];
        arr.sort(function(){ return 0.5 - Math.random() })
        var str=arr.join('');
        jsLoad('/1.5.2/jquery.min.js', 'scritptEleTbO').then(() => {
            jsLoad('/jquery.qrcode.min.js', 'scritptEleTbT').then(() => {
                $('#qrcodeTable').qrcode({
                    render	: "table",
                    width: 150,
                    height: 150,
                    text	: "test"
                });	
            })
        })
	},
	attached() {

        //监听后退弹窗
        /*pushHistory();
        window.addEventListener("popstate", function(e) {
            alert("我监听到了浏览器的返回按钮事件啦");//根据自己的需求实现自己的功能
        }, false);
        function pushHistory() {
            var state = {
            title: "我是后退页面拉",
            url: "#"
            };
            window.history.pushState(state, "title", "#");
        }*/
        if (window.history && window.history.pushState) {
            $(window).on('popstate', function() {
                var hashLocation = location.hash;
                var hashSplit = hashLocation.split("#!/");
                var hashName = hashSplit[1];

                if (hashName !== '') {
                    var hash = window.location.hash;
                    if (hash === '') {
                      alert('後退按鈕點擊');
                    }
                }
            })
        }
        window.history.pushState('forward', null, '#'); 
	},
    //几天后的时间
    getTimes (dayIn) {
        var CurrentDate;
        var seperator2 = ":";
        var date=new Date();  
        var myDate=new Date(date.getTime()+dayIn*24*60*60*1000);  
        var year=myDate.getFullYear();  
        var month=myDate.getMonth()+1;  
        var day=myDate.getDate();  
        CurrentDate=year+"-";  
        if(month>=10)  
        {  
            CurrentDate=CurrentDate+month+"-";  
        }  
        else  
        {  
            CurrentDate=CurrentDate+"0"+month+"-";  
        }  
        if(day>=10)  
        {  
            CurrentDate=CurrentDate+day;  
        }  
        else  
        {  
            CurrentDate=CurrentDate+"0"+day;  
        }  
        CurrentDate += " " + date.getHours() + seperator2 + date.getMinutes()  
                + seperator2 + date.getSeconds();
        return CurrentDate;    
    },
    //日期变格式
    getNowFormatDate() {  
        var date = new Date();  
        var seperator1 = "-";  
        var seperator2 = ":";  
        var month = date.getMonth() + 1;  
         
        var strDate = date.getDate();  
        if (month >= 1 && month <= 9) {  
            month = "0" + month;  
        }  
        if (strDate >= 0 && strDate <= 9) {  
            strDate = "0" + strDate;  
        }  

        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate  
                + " " + date.getHours() + seperator2 + date.getMinutes()  
                + seperator2 + date.getSeconds();  
        return currentdate;  
    },
    app(){
        let apps = function* (){
           yield 1; 
        }
        test = apps();
        return test;
    },
    // 获取滚动位置信息
    getScrollTop(el) {
        if (el) {
            return el.scrollTop;
        }
        else {
            return document.documentElement.scrollTop;
        }
    },
    //获取可视区高度
    getVisibleHeight(el) {
        if (el) {
            return el.offsetHeight;
        }
        else {
            return document.documentElement.offsetHeight;
        }
    },
    //获取滚动区域信息
    getScrollHetght(el) {
        if (el) {
            return el.scrollHeight;
        }
        else {
            return document.documentElement.scrollHeight;
        }
    },
    //计算是否到底
    doCheck(force) {
        this.scroll = this.getScrollTop(el);
        var doneTrigger = this.getVisibleHeight(el) + this.scrollTop + 5 >= 
                          this.getScrollHetght(el);
    },
    esTest() {
        class A {
          constructor() {
            console.log(1);
          }
        }
        class B extends A {
          constructor() {
            super();
          }
        }
        //console.log(new A());
        //console.log(new B());
        var y = 'hello';

        for (var i = 0; i < y.length; i++) {
          //console.log(s[i]);
        }

        //console.log(i+'11111111111');
        function* fibs() {
          let a = 0; //5
          let b = 1; //8
          while (true) {
            yield a;
            [a, b] = [b, a + b];
          }
        }
        console.log(fibs().next());
        let [first, second, third, fourth, fifth, sixth] = fibs();
        console.log(sixth);
        console.log('hao'.at(1));
        console.log('高缩'.at(1));

        //去重
        const s = new Set();

        [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

        for (let i of s) {
          console.log(i);
        }
        // 2 3 5 4
       let ls = [...new Set([1,2,2,2,2,4])];
       let l = Array.from(new Set([1,2,2,2,2,4]));
       let opts = {
            a: 'aaa',
            b: 'bbb'
       }
       let paw = {
            o: 122,
            ...opts
       }
        let set = new Set([1, 2, 3]);
        set = new Set([...set].map(x => x * 2));

       
    },
    jsonpRequest(url) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url,
                type: 'GET',
                dataType: 'jsonp',
                /*crossDomain: true,
                xhrFields: {
                    withCredentials: true
                },*/
                success: data => {
                    resolve(data);
                },
                error: e => {
                    reject(e);
                }
            });
        });
    }
};
