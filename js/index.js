/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};



//使用讀取網址方式變相監聽物理返回鍵
//測試後 ==> 取消  返回鍵  動作
$(function(pkg, undefined){
    var STATE = 'x-back';
    var element;

    var onPopState = function(event){
        event.state === STATE && fire();
        record(STATE);  //初始化事件时，push一下
    }

    var record = function(state){
        history.pushState(state, null, location.href);
    }

    var fire = function(){
        var event = document.createEvent('Events');
        event.initEvent(STATE, false, false);
        element.dispatchEvent(event);
    }

    var listen = function(listener){
        element.addEventListener(STATE, listener, false);
    }

    !function(){
        element = document.createElement('span');
        window.addEventListener('popstate', onPopState);
        this.listen = listen;
        record(STATE);  
    }.call(window[pkg] = window[pkg] || {});

}('XBack'));

XBack.listen(function(){
    alert('請使用HOME鍵離開');
});



$(function(){
    var J_welcome = $(".welcome"),
        J_anniversary = $(".anniversary"),
        J_btn_welcome = $(".btn_welcome");

    var WTIAPP = 'WTI_1.2.0 測試版';
    J_welcome.find('span').append('<em>'+WTIAPP+'</em>');

/*    $.getJSON("js/number.json", function(data) {
        Json_loing = data;*/
    var Json_loing = [
        {
          "My_id": [
            "watpure" , "novia"     , "nico"   , "ava"    , "peterpan" , "sue"    , "chuck" , "vance" , "cloe"   ,
            "jay"     , "annabelle" , "marco"  , "lamber" , "silvia"   , "amanda" , "ellyc" ,
            "cemily"  , "joe"       , "nicky"  , "frank"  , "tmeng"    , "annies" , "tinay" , "joyce" , "vernaL" ,
            "alisonl" , "bess"      , "arielh" , "jeffs"
          ],
          "Store_adr": [
            {
              "test"       : "start_1",
              "sjeff"      : "start_1",
              "skmtps"     : "start_1",
              "skma8"      : "start_1",
              "febc"       : "start_1",
              "dhouse"     : "start_1",
              "skmhsinchu" : "start_1",
              "skmcg"      : "start_1",
              "skmsm"      : "start_1",
              "ktunite"    : "start_1",
              "skmsd"      : "start_1",
              "chhola"     : "start_2",
              "clhola"     : "start_2",
              "mlhola"     : "start_2",
              "tchola"     : "start_2",
              "zdhola"     : "start_2",
              "zyhola"     : "start_2"
            }
          ]
        }
        ];

        var My_id = Json_loing[0].My_id,
            Store_adr = Json_loing[0].Store_adr[0];

        KEYON();
        function KEYON(){
            $(window).keydown(function(event){
                if( event.which == 13 ) {
                    welcome();
                }
            });
        };

        J_btn_welcome.on('touchend , click', welcome );

        function welcome() {
            var isName = false ,
                isStore = false ;
        
            var J_myname = $(".myname"),
                MyName = J_myname.val().toLowerCase();
            var J_mystore = $(".mystore"),
                MyStore = J_mystore.val().toLowerCase();

            var J_swiper6 = $(".swiper-container6");

            J_welcome.find('p').html("");
            Name_ck(MyName);
            Store_img(MyStore);

            function Name_ck(MyName){

                var Chek_id = My_id.some(function (value, index, array) {
                    return value == MyName ? isName = true : J_welcome.find('p').append('查無此員工 ; ');
                });
            }

            function Store_img(MyStore){

                var J_wrap = $(".wrap"),
                    MyStore =  Store_adr[MyStore];
                if(MyStore){
                    // console.log("移除"+MyStore);
                    J_wrap.find("."+MyStore).remove();
                    isStore = true ;
                    return ;
                }else{
                    J_welcome.find('p').append('查無門市 ; ');
                    J_mystore.val("");
                }     
            }

            if(isStore==true && isName==true){
                J_welcome.fadeOut(1000,function(){
                    Watpure();
                    $(window).off(KEYON());
                    $(window).off(welcome());
                    J_welcome.remove();
                });
            }
        }
/*    });*/


})


function Watpure(){

    var J_body = $("body"),
        J_wrap = $(".wrap"),
        J_wrap_width = J_wrap.width() |0;
     
    var J_menu = $(".menu"),
        J_wrap_section = $(".wrap > section"),
        J_wrap_div = $(".wrap > div"),
        J_menu_ul_li = $(".menu").find("ul > li"),
        J_cover = $(".cover");

    var J_mask = $(".mask "),
        J_mask_div = J_mask.find('div'),
        J_mask_div_length = J_mask_div.length,
        width = J_mask_div.width(),
        isMouseDown = false,
        moving = 300,
        padding = 40,
        MENU_NEW = 0;

    J_menu_ul_li.on('click', function(event) {
        var Index = $(this).index();
        var This = $(this);
        Menu(Index,This);
    });
    function Menu(Index,This){
        if(Index == MENU_NEW) {
            return;
        }else if(Index == 3) {
            MENU_NEW = Index;
            return;
        }

        This.addClass('cover')
            .siblings('li').removeClass('cover');
        J_wrap_section.eq(Index).fadeIn().addClass('zindex')
            .siblings('section').fadeOut(200,function(){
                swiper1.slideTo(0);
                swiper2.slideTo(0);
                swiper3.slideTo(0);
                swiper4.slideTo(0);
                J_wrap_section.find('div').scrollTop(0);
            }).removeClass('zindex');

        MENU_NEW = Index;
    }

    var J_pro_good = $(".pro_good");
    var J_good_mask_div = $(".pro_good > .mask >div");

    $.getJSON("js/products_goods.json", function(data) {
        Json_good = data;
        
        J_good_mask_div.each(function(index, el) {
            var GoodCon = Json_good[index].GoodCon,
                GoodName = GoodCon[0].GoodName,
                GoodID = Json_good[index].GoodID,
                GoodSet = GoodCon[0].GoodSet,
                Img = GoodCon[0].Img,
                BuyAddr = GoodCon[0].BuyAddr,
                Compare = GoodCon[0].Compare,
                CtherSet = GoodCon[0].CtherSet,
                GoodHtml = GoodCon[0].GoodHtml;

            J_good_mask_div.eq(index).css({"background-image": "url("+Compare+")"})
                .append('<b class="">'+GoodName+'</b><p class="">'+GoodSet+'</p>')
                .append('<span class="goodbox"><span class="btn_in" title="'+GoodID+'">詳細內容</span></span>');

            for (var i = 0; i < Img.length; i++) {
                var Img_index = Img[0];
                var Img_box = '<img src="'+Img[i]+'" />';
                J_good_mask_div.eq(index).find('.goodbox').append(Img_box);
            }

        });
        

        var J_goodbox = $(".goodbox");
        var J_good_html = $(".good_html");

        J_goodbox.on('click',"span", function(event) {
            event.preventDefault();
            var This = $(this).attr('title')|0,
                GoodCon = Json_good[This].GoodCon,
                GoodHtml = GoodCon[0].GoodHtml;
                
            $.get(GoodHtml, function(data) {
                Good_html = '<div class="good_html slideUp"><section>'+data+'</section></div><span class="clo"></span>';

                J_body.append(Good_html);

                var J_good_html = $(".good_html"),
                    J_good_html_clo = $(".clo");

                J_good_html_clo.on('click', function(event) {
                    J_good_html.remove();
                    J_good_html_clo.remove();
                });
                var J_good_html_h = J_good_html.height(),
                    J_good_section_h = J_good_html.find('section').height();

                if ( J_good_section_h > J_good_html_h ){
                    J_good_html.append('<i></i>');
                }
            });

        });

        var J_goodbox_img = J_goodbox.find("img");

        J_goodbox_img.on('click', function(event) {
            var THIS_leg = $(this).parents("span.goodbox").find('img').length;
            var NN = $(this).index(),
                Pic_src = $(this).attr('src');
            var WHO = $(this).parents("span.goodbox");

            Big_pic = '<div class="big_pic"><img class="slideUp" src="'+Pic_src+'" ><span class="clo"></span></div>';

            J_body.append(Big_pic);

            AUTO_CLO();
            AutoTuch(THIS_leg,WHO);
            // console.log(WHO);
        });

    });


    var J_know_nemu = $(".know_nemu");
    J_know_nemu.find("b").on('click',KnowNemu );
    
    function KnowNemu(event) {    
        var NN = $(this).index();

        var MY_data = $(".my_data");
        MY_data.html("");

        var J_knowlede_data = $(".knowlede_data");        

        J_menu_ul_li.eq(3).addClass('cover')
            .siblings('li').removeClass('cover');
        J_wrap_section.eq(3).fadeIn().addClass('zindex')
            .siblings('section').fadeOut(200,function(){
                swiper1.slideTo(0);
                swiper2.slideTo(0);
                swiper3.slideTo(0);
                swiper4.slideTo(0);
                J_wrap_section.find('div').scrollTop(0);
            }).removeClass('zindex');

        if( NN == 3 ){
            J_knowlede_data.find('div h2').html("比較表");
            for(i=0;i<7;i++){
                var BEGE = '<div class="bege"><img src="img/pro_goods/goods/wti_compare_0'+(i+1)+'.jpg" ></div>';
                MY_data.append(BEGE);
            }
            var J_bege = $(".bege");

            J_bege.on('click', function(event) {
                var QQ = $(this).index();
                var  Compare = '<div class="big_pic"><div class="slideUp"><img src="img/pro_goods/goods/wti_compare_0'+(QQ+1)+'.jpg" ></div><span class="clo"></span></div>';
                J_body.append(Compare);
                AUTO_CLO();                  

            });
            return;
        }

        var NOBR = {
            "0": ["js/health.json","健康新聞"],
            "1": ["js/life.json","環保議題"],
            "2": ["js/harm.json","環境污染"]
        };
        var GoodIndex = NOBR[NN][0],
            GoodTitle = NOBR[NN][1];

        J_knowlede_data.find('div h2').html(GoodTitle);

        $.getJSON(GoodIndex, function(data){
            var Json_health = data;

            var Length = Json_health.length;
            for(var i = Length-1; i >= 0; i--){

                var Health_id = Json_health[i].Health_id,
                    Health_title = Json_health[i].Health_title,
                    Health_data = Json_health[i].Health_data,
                    Health_img = Json_health[i].Health_img,
                    Health_adrs = Json_health[i].Health_adrs;

                var THIS = $(this);

                var TITLE = '<h3 title="'+Health_id+'">'+Health_title+'</h3>',
                    DATA = '<p>'+Health_data+'</p>',
                    IMG = '<img src="'+Health_img+'">';

                HTML = 1 > Health_img ? TITLE + DATA : TITLE + IMG;

                MY_data.append('<div class="news">'+HTML+'<em>詳細內容</em></div>');
            }

            MY_data.find('div').on('click', function(event) {

                var SS = $(this).find('h3').attr('title');
                var Health_adrs = Json_health[SS].Health_adrs;

                $.get(Health_adrs, function(data) {
                    var SS_data = data;
                    SS_html = '<div class="good_html slideUp know_name"><section><img class="news_title" src="img/knowlede/tittl_news.jpg"><h4>'+GoodTitle+'</h4><div>'+SS_data+'</div><img class="news_footer" src="img/knowlede/tittl_footer.jpg"></section></div><span class="clo"></span>';

                    J_body.append(SS_html);

                    var J_good_html = $(".good_html");
                    var J_good_html_clo = $(".clo");
                    $(".good_html").find('a').click(function(event) {
                        event.preventDefault();
                        return false;
                    });
                    
                    var J_img = J_good_html.find('section > div img');
                    J_img.each(function(index, el) {
                        J_img.parents('p').addClass('img_center');
                    })

                    J_good_html_clo.on('click', function(event) {
                        J_good_html.remove();
                        J_good_html_clo.remove();
                    });
                    var J_good_html_h = J_good_html.height();
                    var J_good_section_h = J_good_html.find('section').height();

                    if ( J_good_section_h > J_good_html_h ){
                        J_good_html.append('<i></i>');
                    }
                });
            });

        });

    };




    var J_vdo = $(".vdo");
    var J_go_line = $(".go_line");

    J_vdo.find('span').on('click', MY_VDO );
    J_vdo.find('em').on('click', MY_PIC );
    J_go_line.on('click', MY_QRC );

     
    function MY_VDO(event) { 

        var This = $(this),
            SRC = This.find('img').attr('alt'),
            GO_vdo = '<div class="big_pic"><video src="img/vdo/'+SRC+'.mp4" autoplay controls ></video><span class="clo"></span></div>';

        J_body.append(GO_vdo);

        AUTO_CLO();
    };

    function MY_PIC(event) { 

        var This = $(this),
            This_index = This.parents(".vdo").find('em').index();
            PP = This.find('p').html(),
            SRC = This.find('img').attr('alt'),
            GO_pic = '<div class="big_pic"><img class="slideUp" src="img/vdo/'+SRC+'.jpg" ><p>'+PP+'</p><span class="clo"></span></div>';

        J_body.append(GO_pic);
        
        AUTO_CLO();
        MY_TOCH(This_index);
    };

    function MY_QRC(event) { 

        var This = $(this),
            GO_qrc = '<div class="big_pic"><img class="slideUp" src="img/line_qrc.jpg" ><span class="clo"></span></div>';

        J_body.append(GO_qrc);

        AUTO_CLO();
    };

    function AUTO_CLO(){

        var J_big_pic = $(".big_pic"),
            J_good_html_clo = $(".clo");
        J_good_html_clo.on('click', function(event) {
            var My_vdo = J_big_pic.find('video');
            if( My_vdo.length > 0 ){
                My_vdo.get(0).pause();
                // console.log(My_vdo);
            }
            J_big_pic.fadeOut('slow/400/fast', function() {
                J_big_pic.remove();
            });
            J_good_html_clo.remove();
            $(window).off( MY_TOCH() );
            $(window).off( AutoTuch() );
        });

    };


    function MY_TOCH(This_index) {
        var J_big_pic_img = $(".big_pic img");
        var J_big_pic = $(".big_pic");
        // var II = This_index;
        J_big_pic_img.swipe( {

            swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                // console.log(II);

                var qq = $(this).attr('src');
                var SS = qq.substr(-6,2)|0;
                var leg_em = J_vdo.find("em").length;
                var MY_QQ , MY_PP;

                if(direction == "left"){
                    //因為這邊+1
                    var MY_SS = SS < 9 ? MY_SS = "0" + (SS+1) : MY_SS = (SS+1)|0 ;
                    MY_QQ = MY_SS > leg_em ? MY_QQ = "01" : MY_QQ = MY_SS ;
                    // console.log("右"+MY_QQ); 
                    
                }else if(direction == "right"){
                    var MY_SS = SS < 10 ? MY_SS = "0" + (SS-1) : MY_SS = (SS-1)|0 ;
                    MY_QQ = MY_SS < 1 ? MY_QQ = (leg_em<10?leg_em="0"+leg_em:leg_em=leg_em) : MY_QQ = MY_SS ;
                    // console.log("左"+MY_QQ); 
                }else{
                    return;
                }
                MY_PP = (MY_QQ|0) + This_index-1;
                var J_vdo_pp = J_vdo.children().eq(MY_PP).find('p').html();
                J_big_pic.find("p").html(J_vdo_pp);
                // console.log(J_vdo_pp);
                J_big_pic_img.attr('src', 'img/vdo/pic_'+MY_QQ+'.jpg');
            },
            threshold:0
        });
    };

    function AutoTuch(THIS_leg,WHO){

        var J_big_pic_img = $(".big_pic img");
        J_big_pic_img.swipe( {

            swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                var qq = $(this).attr('src');
                var SS = qq.substr(-6,2)|0;
                var leg_em = THIS_leg;
                var MY_QQ;
                // console.log(SS);
                if(direction == "left"){
                    //因為這邊+1
                    var MY_SS = SS < 9 ? MY_SS = "0" + (SS+1) : MY_SS = (SS+1)|0 ;
                    MY_QQ = MY_SS > leg_em ? MY_QQ = "01" : MY_QQ = MY_SS ;
                    // console.log("右"+MY_QQ); 
                }else if(direction == "right"){
                    var MY_SS = SS < 10 ? MY_SS = "0" + (SS-1) : MY_SS = (SS-1)|0 ;
                    MY_QQ = MY_SS < 1 ? MY_QQ = (leg_em<10?leg_em="0"+leg_em:leg_em=leg_em) : MY_QQ = MY_SS ;
                    // console.log("左"+MY_QQ); 
                }else{
                    return;
                }
                // console.log((MY_QQ|0)-1);
                WHOPIC = WHO.find('img').eq((MY_QQ|0)-1).attr('src');
                J_big_pic_img.attr('src', WHOPIC );
            },
            threshold:0
        });
            
    }



}

