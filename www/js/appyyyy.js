// Initialize your app
var $$ = Dom7;
var app = new Framework7({  
  root: '#app', // App root element
  pushState: true,
  //popupCloseByOutside:true,
  name: 'COSMOS - FO',// App Name
  id: 'com.phonegap.cosmosfo',       // App id
  panel: {
    //swipe: 'left', // Enable swipe panel
    closeByBackdropClick : true,    
  },  
  //theme:'material',
  //material: true, //enable Material theme
  routes: routes, 
  clicks: { 
    externalLinks: '.external',
  },
  navbar: {
    hideOnPageScroll: false,
    iosCenterTitle: false,
    closeByBackdropClick: true,
  },
  picker: {
    rotateEffect: true,
    openIn: 'popover', 
  },
  popover: {
    closeByBackdropClick: true,
  },
  on:{
    pageInit: function(e, page) {
      ////console.log('pageInit', e.page);
      var app = this;
      var today = new Date();
      var $ = app.$;
      var calendarRange = app.calendar.create({
        inputEl: '#demo-calendar-modal',
        dateFormat: 'dd-mm-yyyy',
        header: true,
        footer: true,
        openIn: 'customModal',
        renderToolbar: function () {   
          return '<div class="toolbar no-shadow"><div class="toolbar-inner"><div class="calendar-month-selector"><a href="#" class="link icon-only calendar-prev-month-button"><i class="f7-icons ">chevron_left</i></a><span class="current-month-value"></span><a href="#" class="link icon-only calendar-next-month-button"><i class="f7-icons ">chevron_right</i></a></div><div class="calendar-year-selector"><a href="#" class="link icon-only calendar-prev-year-button"><i class="f7-icons ">chevron_left</i></a><span class="current-year-value"></span><a href="#" class="link icon-only calendar-next-year-button"><i class="f7-icons ">chevron_right</i></a></div></div></div>'; 
        },
        on:{
          closed: function(c,e){
            //console.log(c.value+"---"+e);
            var date_val = c.value;
            var age_value = getAge(date_val);
            //alert("AGE "+age_value);
            if(age_value<18){
              app.dialog.alert("Your age should be 18 years to get register with COSMOS");
              $("#demo-calendar-modal").val("");
            }
          }
        }
      });
      var calendarRange1 = app.calendar.create({
        inputEl: '#develop_start_date',
        dateFormat: 'dd-mm-yyyy',
        header: true,
        footer: true,
        openIn: 'customModal',
        renderToolbar: function () {   
          return '<div class="toolbar no-shadow"><div class="toolbar-inner"><div class="calendar-month-selector"><a href="#" class="link icon-only calendar-prev-month-button"><i class="f7-icons ">chevron_left</i></a><span class="current-month-value"></span><a href="#" class="link icon-only calendar-next-month-button"><i class="f7-icons ">chevron_right</i></a></div><div class="calendar-year-selector"><a href="#" class="link icon-only calendar-prev-year-button"><i class="f7-icons ">chevron_left</i></a><span class="current-year-value"></span><a href="#" class="link icon-only calendar-next-year-button"><i class="f7-icons ">chevron_right</i></a></div></div></div>'; 
        },
      });      
    },
  },
  // Hide and show indicator during ajax requests
  onAjaxStart: function (xhr) {
    app.showIndicator();
  },
  onAjaxComplete: function (xhr) {
    app.hideIndicator();
  }
});
document.addEventListener("deviceready", checkStorage, false); 
document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener("backbutton", onBackKeyDown, false);

var pictureSource; // picture source
var destinationType;

var base_url = 'https://www.mycosmosjobs.com/erp/cosmos2/'; // LIVE //
var mainView = app.views.create('.view-main');
function onDeviceReady() { 
  pictureSource = navigator.camera.PictureSourceType;
  destinationType = navigator.camera.DestinationType;  
}
// --------------------------- C H E C K  I N T E R N E T  C O N N E C T I O N --------------------- //
function checkConnection(){  
  var networkState = navigator.connection.type;  
  if(networkState=='none'){  
      app.router.navigate('/internet/');   
  }
}
function onBackKeyDown() {
  if(app.views.main.router.history.length==2 || app.views.main.router.url=='/'){
    app.dialog.confirm('Do you want to Exit ?', function () {
      navigator.app.clearHistory(); navigator.app.exitApp();
    });
  }else{ 
    $$(".back").click();
  } 
}
// -------------------------------------- C H E C K  S T O R A G E --------------------------------- //
function checkStorage(){
  checkConnection();  
  var version=1;  
  /*$.ajax({
    url: base_url+'app_controller/chk_version/'+version, 
    success: function(result){ 
      //alert(result);
      if(result==0 && result!=""){
          app.dialog.confirm('A new update is available for Your Collector. Please update your app.', function () { 
                navigator.app.clearHistory(); 
                navigator.app.exitApp();
          });  
      }
  }});*/
  var session_uid = window.localStorage.getItem("session_uid");
  //alert(sess_u_id); 
  /*if(session_uid==null){ 
    //var session_uid = window.localStorage.getItem("session_admin_u_id");  
  }else{
    var session_uid = window.localStorage.getItem("session_uid");
  }  */
  if(session_uid==null){
    mainView.router.navigate('/');   
    //app.views.main.router.navigate("/");
  }else{  
    //app.router.navigate('/dashboard/'); 
    mainView.router.navigate('/dashboard/');
    //app.views.main.router.navigate("/dashboard/");
  }
}
// ------------------------------------ C H E C K   L O G I N -------------------------------------- //
function checklogin(){
  checkConnection();
  if (!$$('#loginForm')[0].checkValidity()) { 
     // alert('Check Validity!'); // //console.log('Check Validity!');
    }else{ 
      var form = $(".loginForm").serialize();
      alert(form);
      //var url=base_url+'liveappcontroller/checkLogin'; ////console.log(form);     
      var unm=$('input[name="username"]').val();
      $.ajax({
        type:'POST', 
        url:base_url+'liveappcontroller/checkLogin',
        data:form,
        success:function(data){ 
          var json = $.parseJSON(data);
          if(json){
            alert(json);
          var json_res = json.loggedin_user[0];   
          ////console.log("!!!!!!!!"+json_res);          
          if(json_res!=undefined){ 
            window.localStorage.setItem("session_uid",json.loggedin_user[0].u_id);
            window.localStorage.setItem("session_fname",json.loggedin_user[0].fname);
            window.localStorage.setItem("session_lname",json.loggedin_user[0].lname);
            window.localStorage.setItem("session_uname",json.loggedin_user[0].u_name);
            window.localStorage.setItem("session_ulevel",json.loggedin_user[0].u_level);
            window.localStorage.setItem("session_department",json.loggedin_user[0].u_department);
            window.localStorage.setItem("session_mobile",json.loggedin_user[0].mobile);
            window.localStorage.setItem("session_email",json.loggedin_user[0].u_email);
            window.localStorage.setItem("session_loc",json.loggedin_user[0].location);
            window.localStorage.setItem("session_dp",json.loggedin_user[0].image);
            mainView.router.navigate("/dashboard/");
            //app.views.main.router.navigate("/dashboard/");
          }}else{
            $("#username").val("");
            $("#password").val("");
            app.dialog.alert("Authentication Failed!");   
          }
      }
    });
  }
}