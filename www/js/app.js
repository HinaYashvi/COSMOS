// Initialize your app
var $$ = Dom7;
var app = new Framework7({  
  root: '#app', // App root element
  pushState: true,
  //popupCloseByOutside:true,
  name: 'COSMOS - FO',// App Name
  //id: 'com.phonegap.cosmosfo',       // App id
  id: 'com.phonegap.NEWFO',
  panel: {
    //swipe: 'left', // Enable swipe panel
    closeByBackdropClick : true,    
  },  
  animateNavBackIcon:true,  
  dynamicNavbar: true,  
  //theme:'material',
  //material: true, //enable Material theme
  //materialRipple: false,
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
    //openIn: 'popover', 
  },
  popover: {
    closeByBackdropClick: true,
  },
  /*smartSelect: {
    closeOnSelect:true,
    pageBackLinkText:'<i class="fa fa-arrow-left"></i>',
  },*/
  on:{
    pageInit: function(e, page) {
      ////console.log('pageInit', e.page);
      var app = this;
      var today = new Date();
      var $ = app.$;
      /*var calendarRange = app.calendar.create({
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
      });*/
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
      /*var calendarRange1 = app.calendar.create({
        inputEl: '#join_dt',
        dateFormat: 'dd-mm-yyyy',
        header: true,
        footer: true,
        openIn: 'customModal',
        renderToolbar: function () {   
          return '<div class="toolbar no-shadow"><div class="toolbar-inner"><div class="calendar-month-selector"><a href="#" class="link icon-only calendar-prev-month-button"><i class="f7-icons ">chevron_left</i></a><span class="current-month-value"></span><a href="#" class="link icon-only calendar-next-month-button"><i class="f7-icons ">chevron_right</i></a></div><div class="calendar-year-selector"><a href="#" class="link icon-only calendar-prev-year-button"><i class="f7-icons ">chevron_left</i></a><span class="current-year-value"></span><a href="#" class="link icon-only calendar-next-year-button"><i class="f7-icons ">chevron_right</i></a></div></div></div>'; 
        },
      });*/
      /*var calendarRange2 = app.calendar.create({
        inputEl: '#date_int',
        dateFormat: 'dd-mm-yyyy',
        header: true,
        footer: true,
        openIn: 'customModal',
        renderToolbar: function () {   
          return '<div class="toolbar no-shadow"><div class="toolbar-inner"><div class="calendar-month-selector"><a href="#" class="link icon-only calendar-prev-month-button"><i class="f7-icons ">chevron_left</i></a><span class="current-month-value"></span><a href="#" class="link icon-only calendar-next-month-button"><i class="f7-icons ">chevron_right</i></a></div><div class="calendar-year-selector"><a href="#" class="link icon-only calendar-prev-year-button"><i class="f7-icons ">chevron_left</i></a><span class="current-year-value"></span><a href="#" class="link icon-only calendar-next-year-button"><i class="f7-icons ">chevron_right</i></a></div></div></div>'; 
        },
      }); */
      var pickerInline = app.picker.create({
        //containerEl: '#demo-picker-date-container',
       // inputEl: '#demo-picker-date',
       inputEl: '#demo-picker-custom-toolbar',
        toolbar: false,
        rotateEffect: true,
        value: [
          today.getMonth(),
          today.getDate(),
          today.getFullYear(),
          today.getHours(),
          today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
        ],
        formatValue: function (values, displayValues) {
          //return displayValues[0] + ' ' + values[1] + ', ' + values[2] + ' ' + values[3] + ':' + values[4];
          //return displayValues[0] + '-' + values[1] + '-' + values[2] + ' ' + values[3] + ':' + values[4];
          return values[0] + '-' + displayValues[1] + '-' + values[2] + ' ' + values[3] + ':' + values[4];
        },
        cols: [
          // Days
          {
            values: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
          },
          // Months
          {
            values: ('0 1 2 3 4 5 6 7 8 9 10 11').split(' '),
            //displayValues: ('January February March April May June July August September October November December').split(' '),
            displayValues:[1,2,3,4,5,6,7,8,9,10,11,12],
            textAlign: 'left'
          },
          // Years
          {
            values: (function () {
              var arr = [];
              for (var i = 1950; i <= 2050; i++) { arr.push(i); }
                return arr;
            })(),
          },
          // Space divider
          {
            divider: true,
            content: '&nbsp;&nbsp;'
          },
          // Hours
          {
            values: (function () {
              var arr = [];
              for (var i = 0; i <= 23; i++) { arr.push(i); }
                return arr;
            })(),
          },
          // Divider
          {
            divider: true,
            content: ':'
          },
          // Minutes
          {
            values: (function () {
              var arr = [];
              for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
                return arr;
            })(),
          }
        ],
        on: {
          change: function (picker, values, displayValues) {
            var daysInMonth = new Date(picker.value[2], picker.value[0]*1 + 1, 0).getDate();
            if (values[1] > daysInMonth) {
              picker.cols[1].setValue(daysInMonth);
            }
          },
        }
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
  //alert("HELLO");
  
  pictureSource = navigator.camera.PictureSourceType;
  destinationType = navigator.camera.DestinationType;  
}
// --------------------------- C H E C K  I N T E R N E T  C O N N E C T I O N --------------------- //
function checkConnection(){  
  var networkState = navigator.connection.type;  
  if(networkState=='none'){  
      mainView.router.navigate('/internet/');   
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
  //alert("in checkConnection");
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
function chkStatusAndPwd(){
  checkConnection();  
  var sess_u_id = window.localStorage.getItem("session_uid");  //alert(sess_u_id); 
  if(sess_u_id!=null){ 
    var url = base_url+"liveappcontroller/chkLogedinUserStatusPwd";
    $.ajax({
      'type':'POST',
      'url': url, 
      'data':{'session_u_id':sess_u_id}, 
      success:function(data){ 
        var json = $.parseJSON(data);
         var json_res = json.chkStPwd[0];
         var u_pass = json.chkStPwd[0].u_pass; 
         var u_status = json.chkStPwd[0].is_delete;
         var session_u_status = window.localStorage.getItem("session_u_status");
         var session_u_pwd = window.localStorage.getItem("session_u_pwd");
         //
         //alert(u_status+"="+session_u_status +"***"+u_pass+"="+session_u_pwd);
         if(session_u_status!=u_status){           
          //app.dialog.alert("You are deactivated!");
          /*var notificationFull = app.notification.create({
                icon: '<i class="icon demo-icon">7</i>',
                title: 'User Deactivation',
                titleRightText: 'now',
                subtitle: 'You are deactivated!',
                text: 'Please contact administrator to activate you.',
                closeTimeout: 3000,
              });
              notificationFull.open();*/
          logOut();
          //app.router.navigate("/");           
          //app.views.main.router.navigate("/");
          //logOut(); //app.router.navigate('/');           
         }else if(session_u_pwd!=u_pass){          
          app.dialog.alert("Your password should be changed recently.");
          //app.router.navigate("/"); 
          logOut(); 
          //app.views.main.router.navigate("/"); 
          //logOut(); //app.router.navigate('/');           
         }
      }
    }); 

  }else{
    mainView.router.navigate('/dashboard/');               
  }
}
// ------------------------------------ BROWSE/CAPTURE IMAGE ---------------------------------------------- //
function capturePhoto() { 
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
  quality: 100,
  targetWidth: 600,
  targetHeight: 600,
  destinationType: destinationType.FILE_URI,
  //saveToPhotoAlbum: true
  saveToPhotoAlbum: false,
  correctOrientation: true,
  }); 
}
function openFM(){
 // alert("called");
  //fileChooser.open();
  fileChooser.open(function(uri) {
  //alert(uri);
}); 
}
/*function openFM(){
  alert("called");
  fileChooser.open(function(obj) {
    alert(filePath);
        var filePath = obj.path;
});
}*/
/*function openFileExplorer(){
  app.dialog.alert("CALLED");
  //fileChooser.open(filter, successCallback, failureCallback); 
}
fileChooser.open(function(uri) {
  alert("called"); 
  alert(uri);
});
function openFM(){
  //alert("called");
  var myPath = cordova.file.externalRootDirectory; // We can use the default externalRootDirectory or use a path : file://my/custom/folder
  window.resolveLocalFileSystemURL(myPath, function (dirEntry) {
       var directoryReader = dirEntry.createReader();
       directoryReader.readEntries(onSuccessCallback,onFailCallback);
  });
}
function onSuccessCallback(entries){
  var html = '';        
  for (i=0; i<entries.length; i++) {
    var row = entries[i];
    //alert(row.isDirectory);
     
    if(row.isDirectory){
        //alert(row.nativeURL+" if"+row.name); 
             // We will draw the content of the clicked folder
             html+='<li onclick="openFM('+"'"+row.nativeURL+"'"+');">'+row.name+'</li>';
    }else{
        //alert(row.nativeURL+" else"+row.name); 
        //alert("else");
             // alert the path of file
             html+='<li onclick="getFilepath('+"'"+row.nativeURL+"'"+');">'+row.name+'</li>';
    }      
  }   
  document.getElementById("select-demo").innerHTML = html;     
}
function onFailCallback(e){
  app.dialog.alert('Failed because: ' +e);
  // In case of error
}
function getFilepath(thefilepath){
  app.dialog.alert(thefilepath);
}
function successCallback(uri){
  app.dialog.alert(uri);
}
function failureCallback(message){
  app.dialog.alert('Failed because: ' + message);
}*/
function openPanel(){
  $(".panel-cover").addClass("display-block");
  var sess_user_img = window.localStorage.getItem("session_dp"); 
  if(sess_user_img==''){
    //var path=base_url+"uploads/user_images/";
    var path="img/nouser.png";    
    $("#user_pic").attr("src",path);
  }else{
    var path=base_url+"uploads/user_images/";
    var user_pic = path+sess_user_img;
    $("#user_pic").attr("src",user_pic);
  }
}
function onPhotoDataSuccess(imageURI){
  var cameraImage = document.getElementById('image');
  cameraImage.style.display = 'block';
  cameraImage.src = imageURI;
}

function getPhoto(source) {  
  navigator.camera.getPicture(onPhotoURISuccess, onFail, {
    quality: 100,
    correctOrientation: 1,
    targetWidth: 600,
    targetHeight: 600,
    destinationType: destinationType.FILE_URI,
    sourceType: source
  });
} 
function onPhotoURISuccess(imageURI) {
  var galleryImage = document.getElementById('image');
  //alert(galleryImage);
  galleryImage.style.display = 'block';
  galleryImage.src = imageURI;
}
function onFail(message) {
  app.dialog.alert('Failed because: ' + message);
}
function upload_doc(insert_id,old_doc){ 
  var session_uid = window.localStorage.getItem("session_uid");
  var img = document.getElementById('image'); 
  //app.dialog.preloader('Uploading....');
  var imageURI = img.src;
  //alert("imageURI "+imageURI);
  var options = new FileUploadOptions();
  options.fileKey="file";
  options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
  options.mimeType="image/jpeg";
  options.chunkedMode = false;
  options.headers = {
     Connection: "close"
  };
  var params = {};
  params.fullpath =imageURI;
  params.name = options.fileName;
  var imgfilename = params.name; 
  //alert("imgfilename :: "+imgfilename);
  var split_imgfilename = imgfilename.split("?");
  var actual_imgname = split_imgfilename[0];
  var ft = new FileTransfer();
  var uploadControllerURL = base_url+"liveappcontroller/photoupload/"+session_uid+"/"+insert_id+"/"+old_doc+"/"+imgfilename; 
  //alert(uploadControllerURL);
  ft.upload(imageURI,uploadControllerURL, win, fail, options,true);
}
function win(r) { //alert(r);
    //document.writeln(r.response);      
    var responseCode = r.responseCode;
    if(responseCode==200){
      //app.dialog.alert("User image upload done.");      
      app.dialog.close(); 
    }
}
function fail(error) {
  app.dialog.alert("An error has occurred: Code = " + error.code);
  app.dialog.alert("upload error source " + error.source);
  app.dialog.alert("upload error target " + error.target);
}
// ------------------------------------ BROWSE/CAPTURE IMAGE ENDS ---------------------------------- //
function goback(){
  mainView.router.back();
}
// ------------------------------------ C H E C K   L O G I N -------------------------------------- //
function checklogin(){
    checkConnection();    
    //if (!$('#loginForm')[0].checkValidity()) { 
      //alert("hi");
      //console.log('Check Validity!');  
    //}else{ 
       //alert("hello");
      var form = $(".loginForm").serialize();
      //alert(form);
      var url=base_url+'liveappcontroller/checkLogin'; //console.log(form);     
      var unm=$('input[name="username"]').val(); //console.log(unm); 
      $.ajax({
        'type':'POST',
        'url': url, 
        'data':form,  
        success:function(data){
          //alert(data);
          var json = $.parseJSON(data);
          //console.log("json "+json);
          var json_res = json.loggedin_user[0];
         // console.log("!!!!!!!!"+json_res);//alert(json_res+" success"); 
          //if(json!=0){  
          if(json_res!=undefined){ 
            if(json.loggedin_user[0].is_delete==0){
              app.dialog.alert("You are deactivated!"); 
              /*var notificationFull = app.notification.create({
                icon: '<i class="icon demo-icon">7</i>',
                title: 'User Deactivation',
                titleRightText: 'now',
                subtitle: 'You are deactivated!',
                text: 'Please contact administrator to activate you.',
                closeTimeout: 3000,
              });
              notificationFull.open();*/
            }else{ 
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
              window.localStorage.setItem("session_u_pwd",json.loggedin_user[0].u_pass);
              window.localStorage.setItem("session_u_status",json.loggedin_user[0].is_delete);
              mainView.router.navigate("/dashboard/");
            }
            //app.views.main.router.navigate("/dashboard/");
          //}
          }else{
              $("#username").val("");
              $("#password").val("");
              app.dialog.alert("Authentication Failed!"); 
          }
        }
      });
    //}
}   
$$(document).on('page:init', '.page[data-name="dashboard"]', function (e) { 
//app.dialog.alert("hi"+device.uuid);
/*  cordova.plugins.IMEI(function (err, imei) {
    alert("hihello"); 
  alert('imei'+ imei);
  alert(err);
})*/
//alert(cordova.plugins.uid.IMEI+"****");
  checkConnection();
  chkStatusAndPwd();
  var session_fname = window.localStorage.getItem("session_fname");
  var session_department = window.localStorage.getItem("session_department");
  var session_mobile = window.localStorage.getItem("session_mobile");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  if(session_ulevel == 1){
    $("#daily_visti_rep").removeClass("display-none");
    $("#daily_visti_rep").addClass("display-block");
  }else{
    $("#daily_visti_rep").removeClass("display-block");
    $("#daily_visti_rep").addClass("display-block");
  }
  $("#userName").html("<span class='text-white'>Name : "+session_fname+"</span>");
  $("#userMo").html("<span class='text-white'>Mobile : "+session_mobile+"</span>"); 
  $("#userDept").html("<span class='text-white'>Department : "+session_department+"</span>");  
});
// --------------------------- P R O V I S I O N A L  R E G I S T R A T I O N ----------------------------- //
$$(document).on('page:init', '.page[data-name="provisional_registration"]', function (e) {
    checkConnection();
    chkStatusAndPwd(); 
    var loop_years = '';
    for(var i=0;i<=35;i++){
      loop_years+='<option value="'+i+'">'+i+ ' Years</option>';
    }
    $("#exp_years").html(loop_years);
    var loop_months = '';
    for(var j=0;j<=12;j++){
      loop_months+='<option value="'+j+'">'+j+ ' Months</option>';
    }
    $("#exp_month").html(loop_months);
    
    var dob_days='<option value=""></option>';
    dob_days+='';
    for(var k=1;k<=31;k++){
      if(k<=9){
        k="0"+k;
      }else{
        k=k;
      }
      dob_days+='<option value="'+k+'">'+k+'</option>';
    }
    $("#dob_dt").html(dob_days);

    //var dob_mnth='';
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    dob_mnth+='<option value=""></option>';
    for(var h=0;h<monthNames.length;h++){
      dob_mnth+='<option value="'+(h+1)+'">'+monthNames[h]+'</option>';
    }    
    $("#dob_mnth").html(dob_mnth);

    var currentDate = new Date()
    var curr_year = currentDate.getFullYear();
    var add_years = curr_year + parseInt(2);
    var dob_yr='';
    dob_yr+='<option value=""></option>';
    for(var m=1950;m<=add_years;m++){
      dob_yr+='<option value="'+m+'">'+m+'</option>';
    }    
    $("#dob_yr").html(dob_yr);
    $.ajax({
      type:'POST', 
      url:base_url+'liveappcontroller/provisional_states',
      success:function(states){
        $("#state").html(states);    
      }
    });
  
    /*var timer=null;
    $("#confirm_password").keydown(function(){
      clearTimeout(timer);
      timer = setTimeout(validate, 1000);
    }); */   
});
// ----------------------- C H A N G E  P A S S W O R D  M A T C H  P A S S W O R D ------------------- //
function validate() {
  checkConnection();
  chkStatusAndPwd();  
  var password1 = $("#password").val();
  var password2 = $("#confirm_password").val();
  //console.log(password1+"--"+password2)
  if(password1 == password2) {
    //console.log("if");
    $(".create_btn").removeClass("disabled");
    $("#success-badge").removeClass("display-none");
    $(".unmatch-text").css("display",'none');
    $(".match-text").css("display",'block');
    $(".match-text").text("Passwords match.");        
  }else{
    //console.log("else");
    $(".create_btn").addClass("disabled"); 
    $("#warning-badge").removeClass("display-none");
    $(".match-text").css("display",'none');
    $(".unmatch-text").css("display",'block');
    $(".unmatch-text").text("Passwords do not match!");  
  }    
}
function getDist(stateid){
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/provisional_districts',
    data:{'s_id':stateid},
    success:function(dists){
      $("#district").html(dists);   
    }
  });  
}
function getCity(dist_id){
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/provisional_cities',
    data:{'d_id':dist_id},
    success:function(cities){
      $("#city").html(cities);   
    }
  });  
}
function check_mobileno(primary_mob){
  if (primary_mob.length < 10) {
   return false;
  }
  $.ajax({            
    method: "POST",
    url: base_url+'liveappcontroller/checkPrimaryMobile',
    data: {primary_mob: primary_mob},
    success: function (result) {
      result = $.parseJSON(result);
      if (result.status == 'success') {
          app.dialog.alert("Mobile Number Already Exists...");
          $("#primary_mobile_number").focusout(); 
          $("#primary_mobile_number").val("");          
      }else{        
      }
    }
  });
}
// ---------------------------- B L U E  C O L L A R  P O S I T I O N ----------------------------- //
function getBlueCollarPositionsData(collar_type){
  $.ajax({            
    method: "POST",
    url: base_url+'liveappcontroller/getBlueCollarPositions',
    data: { type: collar_type },
    success: function (result) {
      result = $.parseJSON(result);
      //console.log(result); 
      if (result.status == 'success') {
        $('.pos_html').html("");
        $('.pos_html').html(result.html);        
        //$('.select2append').select2({});
        //$('#resume').prop("required", false);
        //$('.msg_div2').hide();
      } else {        
      }
    }
  });
}
// ---------------------------- W H I T E  C O L L A R  P O S I T I O N ----------------------------- //
function getWhiteCollarPositionsData(collar_type) {
  $.ajax({
    method: "POST",
    url: base_url+'liveappcontroller/getWhiteCollarPositions',
    data: {type: collar_type},
    success: function (result) {
      result = $.parseJSON(result);
      if(result.status == 'success'){
        $('.pos_html').html("");
        $('.pos_html').html(result.html);        
      }else{          
      }
    }
  }); 
}
function setEmail(type) {
  //console.log(type);
  if (type == "BLUE") {
    //$('#email').attr('required', false);
    //$('#email').attr('validate', false);
    $('#email').removeAttr('required');
    $('#email').removeAttr('validate');
  }else{
    $('#email').attr('required', true);
    $('#email').attr('validate', true);
  }
}
// --------------------------------------- P O S I T I O N ------------------------------------------ //
function getPos(collar_type){
  $.ajax({
    method: "POST",
    //url: '<?php echo base_url(); ?>mak/recruitment/getPos/',
    url: base_url+'liveappcontroller/getPositions',
    data: { type: collar_type },
    success: function (result) {
      result = $.parseJSON(result);
      if (result.status == 'Success') {
        $("#userRequest_position").html(result.html);
        //$('#loadingDiv').hide();
      } else { }
    }
  }); 
}
function getBlueCollarDataNewDrop(collar_type){
//  $("#myInput").val("");
//  $(".mdtest").html('');
//  $(".mdtest").slideUp();
  $.ajax({
    method: "POST",
    url: base_url+'liveappcontroller/getBlueCollarDataNew',
    data: { type: collar_type },
    success: function (result) {
      //console.log(result);
      result = $.parseJSON(result);
      if (result.status == 'success') {
 //       $(".mdtest").show();
        //$(".mdtest").fadeIn(200).show(function(e){

        $(".mdtest").html(result.html); 

 //       $("#myInput").val("");
 //       myFunction();       
        //var selectedtext=$('.selected').text();
        //alert(selectedtext);  
        //$("#location_filter").val(selectedtext);                                       
        //});         
      } else {} 
    }
  });
}
function getWhiteCollarDataNewDrop(collar_type){
  //app.dialog.alert(collar_type);
 // $("#myInput").val("");
 // $(".mdtest").html('');
//  $(".mdtest").slideUp();
  $.ajax({ 
    method: "POST",
    url: base_url+'liveappcontroller/getWhiteCollarDataNew',
    data: {type: collar_type}, 
    success: function(result) {
      //console.log(result);
      //app.dialog.alert(result.status);
      //$('<i class="icon icon-back"></i>').replaceWith('<i class="f7-icons">arrow_left</i>');
      result = $.parseJSON(result);
      if(result.status=='success'){  
        //$(".mdtest").show();
        //$(".mdtest").fadeIn(200).show(function(e){
       //   console.log(result.html);
        $(".mdtest").html(result.html);      
   //     $("#myInput").val(""); 
        //myFunction();       
        //var selectedtext=$('.selected').text();
        //alert(selectedtext);  
        //$("#location_filter").val(selectedtext);                                       
        //});         
      } else {} 
    }
  });
}
function setValues(obj) { 
  var selectedValues = obj.val();
  var selectedParent = obj.attr('data-parent');
  var selectedChild = obj.attr('data-name');
  var str = "(" + selectedParent + ") " + selectedChild;
  //console.log(str);
  $("#myInput").val(str);
  //$(".mdtest").hide();
}
function openDiv() {
  //if ($(".mdtest").is(":hidden")) {
  $(".mdtest").fadeIn("slow");
  //}else{
  //  $(".mdtest").hide();
  //}
}
function myFunction(){
  var input, filter, ul, li, a, i, txtValue;
  //input = document.getElementById("myInput");
  input = $("#myInput").val();
  //alert(input);
  filter = input.toUpperCase();
  ul = $("#myUL");
  li = $("li");
  /*if(filter != ''){
    $(".mdtest").slideDown(); 
  }*/
  /*for(i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
   // a = $("#accordion > li >a");
    console.log(a);
    alert("a is "+a);
    txtValue = a.textContent || a.innerText;
    alert("txtValue is "+txtValue);
    res = txtValue.replace(".", "");
    res = res.replace(".", "");     
    if (res.toUpperCase().indexOf(filter) > -1 || txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    }else{
      li[i].style.display = "none";
    }
  }*/
}
var last_valid_selection = null;
function three_jobfun(selected){
  if (selected == null) {
    return false;  
  }
  if(selected.length > 3) {
    $(this).val(last_valid_selection);
    app.dialog.alert("Only three job function are allowed.");
  }else{
    last_valid_selection = $(this).val();
  }

}
/*$("#job_function").change(function(e){
  alert("hiiii");
  var myValues = $(this).val();
  console.log(myValues);
});*/
$$(document).on('page:init', '.page[data-name="dpo_data"]', function (e) { 
  //app.panel.close();  
  //app.panel.destroy(); 
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  //app.dialog.alert(session_uid);
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/dpo_list',
    data:{'uid':session_uid,'session_ulevel':session_ulevel,'session_department':session_department},
    success:function(list_res){
      var json = $.parseJSON(list_res);
      var json_list = json.dpoList;
      var json_vertlist = json.verti;
      var tot_vert = json.tot_vert;  
      var cont_no = json.cont_arr;  
      //console.log(json_list.length); 
      var dpolist=''; 
      var j=1;  
      if(json_list.length==0){
         dpolist+='<tr class=""><td class="text-uppercase fw-600 text-grey font-14">No Data Available.</td></tr>';
      }else{
        for(var i=0;i<json_list.length;i++){
          var company = json_list[i].cs_invoice_name;
          var contact = json_list[i].csd_contact_mobile;
          var cs_id = json_list[i].cs_id; 
          var l_id = json_list[i].l_id;    
          var nocon = cont_no[i][0];
          if(nocon!=''){
            var cont = '<span class="text-muted"><i class="f7-icons font-14">phone</i>&nbsp;:&nbsp'+nocon+'</span>';
          }else{
            var cont = '<span class="text-muted">No Contact Found.</span>';
          }
          /*if(contact!=''){
            var cont = '<span class="text-muted"><i class="f7-icons font-14">phone</i>&nbsp;:&nbsp'+contact+'</span>';
          }else{
            var cont = '<span class="text-muted">No Contact Found.</span>';
          }*/
          
          dpolist+='<tr class="tr-border"><!--td>'+j+'</td--><td class="text-uppercase fw-500 font-12"><a class="" href="#" onclick="viewDPO('+cs_id+')">'+company+'</a><br/>'+cont;
          
          var verticles = json_vertlist[i];
          var tot = tot_vert[i];
          var vert=''; 
          $.each( verticles, function( key, value ) {        
            //console.log( key + ": " + value );
            vert+=key+" "+"("+value+") "; 
          });   
          dpolist+='<br/><i class="f7-icons font-10 text-muted fw-600">layers_fill</i>&nbsp;<span class="text-muted font-10 fw-600">'+vert+'</span><br/></td>';
          dpolist+='<td onclick="viewDPO('+cs_id+')" class="text-muted font-16"><i class="fa fa-eye font-14 text-muted"></i><span class="font-10 fw-600"> - ('+tot+')</span></td></tr>';
          //$("#dpo_list").html(dpolist); 
          j++;
        }
      }
      $("#dpo_list").html(dpolist); 
      app.preloader.hide();
    }
  });  
});
function viewDPO(cs_id){
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  mainView.router.navigate("/dpo_details/");
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/getDPODetails',
    data:{'cs_id':cs_id,'session_department':session_department,'session_uid':session_uid,'session_ulevel':session_ulevel},
    success:function(dpodet){
      var dpo_json = $.parseJSON(dpodet);      
      var details = ''; 
      var company_name = dpo_json.cust_data[0].cs_invoice_name;
      var location = dpo_json.lead.l_name;
      var contact_mobile = dpo_json.lead.contact_no;
      var industies_name = dpo_json.lead.industies_name;
      var website = dpo_json.lead.website;

      if(contact_mobile!= '' && contact_mobile!= null){
        var contact = contact_mobile.split("|");
        if(contact.length > 1){
          if(contact[0]!=''){
            var phone = contact[0]+ ","+contact[1];
          }else{
            var phone = contact[1];
          }
        }
        if(contact.length == 1){
          if(contact[0]!=''){
            var phone = contact[0];
          }else{
            var phone = contact[1];
          }
        }
        var mobile = '<span class="col-33"><span class="text-muted-light font-12"><i class="f7-icons font-14">phone_fill</i>&nbsp;&nbsp;'+phone+'</span></span>&nbsp;&nbsp;&nbsp;&nbsp;';
      }else{
        var mobile = '';
      }
      
      if(location!='' && location!=null){
        var loc = ' - <span class="col-33"><span class="text-muted-light font-12"><i class="fa fa-map-marker font-14"></i>&nbsp;&nbsp;'+location+'</span></span>&nbsp;&nbsp;&nbsp;&nbsp;';
      }else{
        var loc = '';
      }

      if(industies_name!= '' && industies_name!= null){
        var industry = '<span class="col-33"><span class="text-muted-light font-12"><i class="fa fa-bar-chart font-14"></i>&nbsp;&nbsp;'+industies_name+'</span></span>';
      }else{
        var industry = '';
      }

      if(website!= '' && website!= null){
        var web = '<br/><br/><div class="row"><div class="col-100"><span class="text-muted-light font-12"><i class="f7-icons font-14">globe</i>&nbsp;&nbsp;<a class="link external orange-txt text-uppercase linkspace poweredby" href="'+website+'" target="_system">'+website+'</a></span></div></div>';
      }else{
        var web = '';
      }
      
      var block = '<div class="block"><div class="row"><div class="col-100"><div class="grey-txt fw-600"><h3>'+company_name+loc+'</h3></div></div></div><div class="row"><div class="col-100">'+mobile+loc+industry+web+'</div></div></div>'; 
      $("#comp_details").html(block);
      //console.log(dpo_json.custom.length);
      //console.log(dpo_json.lumsum.length);
      //console.log(dpo_json.place.length);
      var list = '';
      list+='<div class="list searchbar-found"><ul>';
      if(dpo_json.custom.length > 0){        
        for(var i=0;i<dpo_json.custom.length;i++){
          var csd_id = dpo_json.custom[i].csd_id;
          var csd_verticle = dpo_json.custom[i].csd_verticle;
          var csd_create_date = dpo_json.custom[i].csd_create_date;
          var headcount = dpo_json.custom[i].csd_head_cnt;
          var split_date = csd_create_date.split(" ");
          var date_csd = split_date[0];
          var split_date_csd = date_csd.split("-");
          var splited_year = split_date_csd[0];
          var splited_month = split_date_csd[1];
          var splited_day = split_date_csd[2]; 
          var final_csd_date = splited_day + "-" + splited_month + "-" + splited_year;
          if(i%2==0){
            var cls = 'light-orange';
          }else{
            var cls = ''; 
          }
          list+='<li class='+cls+'><a href="#" class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell orange-txt font-14"><span class="text-muted-light"></span>'+csd_verticle+'<br/><span class="grey-txt font-12">Dt: '+final_csd_date+'</span></div><div class="item-cell orange-txt text-center"><span class="mr-10"><i class="fa fa-user icon-orange"></i></span><span class="font-12">'+headcount+'</span></div><div class="item-cell"><button class="col button button btn-goutline button-outline text-uppercase font-9 fw-500" onclick="dpoDetail('+csd_id+')">view full dpo</button></div></div></div></a></li>'; 
        }         
      }

      if(dpo_json.lumsum.length > 0){
        for(var j=0;j<dpo_json.lumsum.length;j++){
          var csd_id = dpo_json.lumsum[j].csd_id;
          var csd_verticle = dpo_json.lumsum[j].csd_verticle;
          var csd_create_date = dpo_json.lumsum[j].csd_create_date;
          var headcount = dpo_json.lumsum[j].csd_head_cnt;
          var split_date = csd_create_date.split(" ");
          var date_csd = split_date[0];
          var split_date_csd = date_csd.split("-");
          var splited_year = split_date_csd[0];
          var splited_month = split_date_csd[1];
          var splited_day = split_date_csd[2]; 
          var final_csd_date = splited_day + "-" + splited_month + "-" + splited_year;
          list+='<li class="light-orange"><a href="#" class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell orange-txt font-14"><span class="text-muted-light"></span>'+csd_verticle+'<br/><span class="grey-txt font-12">Dt: '+final_csd_date+'</span></div><div class="item-cell orange-txt text-center"><span class="mr-10"><i class="fa fa-user icon-orange"></i></span><span class="font-12">'+headcount+'</span></div><div class="item-cell"><button class="col button button btn-goutline button-outline text-uppercase font-9 fw-500" onclick="dpoDetail('+csd_id+')">view full dpo</button></div></div></div></a></li>';
        }
      }

      if(dpo_json.place.length > 0){
        for(var k=0;k<dpo_json.place.length;k++){
          var csd_id = dpo_json.place[k].csd_id;
          var csd_verticle = dpo_json.place[k].csd_verticle;
          var csd_create_date = dpo_json.place[k].csd_create_date;
          var headcount = dpo_json.place[k].csd_head_cnt;
          var split_date = csd_create_date.split(" ");
          var date_csd = split_date[0];
          var split_date_csd = date_csd.split("-");
          var splited_year = split_date_csd[0];
          var splited_month = split_date_csd[1];
          var splited_day = split_date_csd[2]; 
          var final_csd_date = splited_day + "-" + splited_month + "-" + splited_year;
          list+='<li class="light-orange"><a href="#" class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell orange-txt font-14"><span class="text-muted-light"></span>'+csd_verticle+'<br/><span class="grey-txt font-12">Dt: '+final_csd_date+'</span></div><div class="item-cell orange-txt text-center"><span class="mr-10"><i class="fa fa-user icon-orange"></i></span><span class="font-12">'+headcount+'</span></div><div class="item-cell"><button class="col button button btn-goutline button-outline text-uppercase font-9 fw-500" onclick="dpoDetail('+csd_id+')">view full dpo</button></div></div></div></a></li>';
        }
      }
      list+='</ul></div><div class="block searchbar-not-found"><div class="block-inner grey-txt fw-500">Nothing found</div></div><div class="block"><button class="col button button form-btn button-outline text-white" type="button" onclick="goback()">Back</button></div>';
      $("#dpo_dets").html(list);
      var searchbar = app.searchbar.create({
        el: '.searchbar',
        searchContainer: '#dpo_dets',
        searchIn: '.item-cell',
        on: {
          search(sb, query, previousQuery) {
            console.log(query, previousQuery);
          }
        }
      });
      app.preloader.hide();
    }    
  });  
}
function dpoDetail(csd_id){
  checkConnection();
  chkStatusAndPwd();
  mainView.router.navigate("/dpo_detail_view/");
  app.preloader.show();
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/dpodetail_view',
    data:{'csd_id':csd_id},
    success:function(dpo_res){
      app.preloader.show();
      var json = $.parseJSON(dpo_res);
      //console.log(json);
      var json_list = json.cust_order;
      var json_design = json.designation;
      var json_preinfo = json.preinfo;
      var json_qutn_type = json.dl_qutn_type;
      var spec_arr_json_np = json.spec_arr;  
      var testmrf = json.testmrf;
      //var spec_blue = json.spec_blue;
      //var spec_white = json.spec_white;
      var spec_qual = json.spec_qual;

      var json_blue = json.blue_hight;
      var json_white = json.white_hight;

      var qlf = json.qlf;

      ///var blue_hight_place = json.blue_hight_place;

      //if(json_qutn_type!='placement'){
        $("#qunt_placement").removeClass("display-block");
        $("#qunt_placement").addClass("display-none");
        $("#qunt_other").removeClass("display-none");
        $("#qunt_other").addClass("display-block");

        var qun_type = json_list[0].qutn_type;
        var qun_id = json_list[0].qutn_id;
        

        // basic info //
        var csd_verticle = json_list[0].csd_verticle;
        var contact_name = json_list[0].csd_contact_name;
        var industry_name = json_list[0].csd_industry;
        var csd_contact_designation = json_list[0].csd_contact_designation;
        var csd_branch_code = json_list[0].csd_branch_code;
        var csd_contact_email = json_list[0].csd_contact_email;
        var csd_head_cnt = json_list[0].csd_head_cnt;
        var csd_contact_mobile = json_list[0].csd_contact_mobile;
        var csd_contact_land = json_list[0].csd_contact_land;

        // billing info //
        var invoice_name =json_list[0].csd_invoice_name;
        var invoice_add = json_list[0].csd_invoice_add;
        var invoice_cycle = json_list[0].csd_invoice_cycle;
        var invcyle_other = json_list[0].csd_invcyle_other;
        var inc_cycle = invoice_cycle +"<br/>"+invcyle_other;
        var salary_slip = json_list[0].csd_salary_slip;
        var pay_termClient = json_list[0].csd_pay_termClient;
        var inv_emp_date = json_list[0].csd_pay_to_emp_date;
        var pay_to_emp = json_list[0].csd_pay_to_emp;
        var csd_attend = json_list[0].csd_attendance;

        // deputation info //
        var point_of_deput = json_list[0].csd_point_of_deput;
        var period_from = json_list[0].csd_period_from;
        var b_name = json_list[0].b_name;
        var deployment_wef = json_list[0].csd_deployment_wef;
        var period_to = json_list[0].csd_period_to;
        $.ajax({
          type:'POST', 
          url:base_url+'liveappcontroller/quoteverticles',
          data:{'qun_id':qun_id,'qun_type':qun_type,'csd_id':csd_id},
          success:function(result){
            var resultjson = $.parseJSON(result);
            if(qun_type=='custom' || qun_type=='lumsum'){
                //console.log(qun_type+" if"+result);
                var json_verticle = resultjson.quote_verticles; 
                         
            }/*else if(qun_type=='placement'){
                console.log(qun_type+" else");
                var json_verticle1 = resultjson.dpo_placement;
                var json_mrfdetail = resultjson.mrfdetail;
                var json_verti = resultjson.verticle; 
                var json_blue = resultjson.blue_hight;
                var json_keyskill = resultjson.keyskill; 
                var josn_qualification = resultjson.h_q_c_s_name;  
                var spec_arr_json = resultjson.spec_arr;
            }*/

            var html = '';
            if(json_qutn_type!='placement'){

              html+='<div class="row"><div class="col-100"><div class="grey-txt fw-600 text-uppercase"><h3>new contract registration</h3></div></div></div>';
            }else{
              html+='<div class="row"><div class="col-100"><div class="grey-txt fw-600 text-uppercase"><h3>new contract registration - level : 5</h3></div></div></div>';
            }
            $(".page_about").html(html);
            //if(json_qutn_type!='placement'){
            //// ============================ basic information ================================= ////
            if(json_qutn_type!='placement'){
              //alert(json_qutn_type+" HELLO");
              var basic_info = '';
              if(csd_verticle!=null && csd_verticle!=''){
                var vertical = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Vertical</div><div class="item-cell text-grey font-12 ml-0">'+csd_verticle+'</div></div></div></li>';
              }else{
                var vertical = '';
              }

              if(contact_name!=null && contact_name!=''){
                var cont_name = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Contact Person</div><div class="item-cell text-grey font-12 ml-0">'+contact_name+'</div></div></div></li>';
              }else{
                var cont_name = '';
              }

              if(industry_name!=null && industry_name!=''){
                var indust = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Industry</div><div class="item-cell text-grey font-12 ml-0">'+industry_name+'</div></div></div></li>';
              }else{
                var indust = '';
              }

              for(var j=0;j<json_design.length;j++){
                if(csd_contact_designation == json_design[j].d_id){
                  var desig = json_design[j].d_name;
                }
              }

              if(desig!=null && desig!=''){
                var desgn = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Designation</div><div class="item-cell text-grey font-12 ml-0">'+desig+'</div></div></div></li>';
              }else{
                var desgn = '';
              }

              if(csd_branch_code!=null && csd_branch_code!=''){
                var branch_code = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Branch Code</div><div class="item-cell text-grey font-12 ml-0">'+csd_branch_code+'</div></div></div></li>';
              }else{
                var branch_code = '';
              }

              if(csd_contact_email!=null && csd_contact_email!=''){
                var cont_email = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Email ID</div><div class="item-cell text-grey font-12 ml-0">'+csd_contact_email+'</div></div></div></li>';
              }else{
                var cont_email = '';
              }

              if(csd_head_cnt!=null && csd_head_cnt!=''){
                var head_cnts = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Headcount - Total </div><div class="item-cell text-grey font-12 ml-0">'+csd_head_cnt+'</div></div></div></li>';
              }else{
                var head_cnts = '';
              }

              if(csd_contact_mobile!=null && csd_contact_mobile!=''){
                var cont_mobile = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Mobile</div><div class="item-cell text-grey font-12 ml-0">'+csd_contact_mobile+'</div></div></div></li>';
              }else{
                var cont_mobile = '';
              }

              basic_info+='<div class="list accordion-list no-margin"><ul><li class="accordion-item light-orange accordion-item-opened"><a href="#" class="item-content item-link"><div class="item-inner "><div class="item-title orange-txt fw-600">Basic Information</div></div><span class="float-right mr-10 orange-txt"><i class="fa fa-user icon-orange"></i></span></a><div class="accordion-item-content nobgclr elevation-1"><div class="list no-hairlines-between"><ul>'+vertical+cont_name+indust+desgn+branch_code+cont_email+head_cnts+cont_mobile+'<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Position</div><div class="item-cell text-grey font-12 ml-0">';

          
              var position = [];
              for(var k=0;k<json_verticle.length;k++){
                var pers_nw = json_verticle[k].pers;
                var desn_nw = json_verticle[k].designation;
                position = pers_nw + " --> " + desn_nw + "<br/>";            
                basic_info+=position;
              }
              if(csd_contact_land!=null && csd_contact_land!=''){
                var landline_no = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Landline No</div><div class="item-cell text-grey font-12 ml-0">'+csd_contact_land+'</div></div></div></li>';;
              }else{
                var landline_no = '';
              }

              basic_info+='</div></div></div></li>'+landline_no+'</ul></div></div></li></ul></div>';
              $("#basic_info").html(basic_info);

              //// ============================ bill information ================================= ////
              var bill_info = '';
              if(invoice_name!=null && invoice_name!=''){
                var inv_name = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Invoice Name</div><div class="item-cell text-grey font-12 ml-0">'+invoice_name+'</div></div></div></li>';
              }else{
                var inv_name = '';
              }

              if(invoice_add!=null && invoice_add!=''){
                var inv_address = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Address required on Invoice</div><div class="item-cell text-grey font-12 ml-0">'+invoice_add+'</div></div></div></li>';
              }else{
                var inv_address = '';
              }

              if(inc_cycle!=null && inc_cycle!=''){
                var inv_cycle = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Invoicing Cycle</div><div class="item-cell text-grey font-12 ml-0">'+inc_cycle+'</div></div></div></li>';
              }else{
                var inv_cycle = '';
              }

              if(salary_slip!=null && salary_slip!=''){
                var slry_slip = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Salary Slip</div><div class="item-cell text-grey font-12 ml-0">'+salary_slip+'</div></div></div></li>';
              }else{
                var slry_slip = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Salary Slip</div><div class="item-cell text-grey font-12 ml-0">NO</div></div></div></li>';
              }

              if(pay_termClient!=null && pay_termClient!=''){
                var client_term = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Payment terms of client</div><div class="item-cell text-grey font-12 ml-0">'+pay_termClient+'</div></div></div></li>';
              }else{
                var client_term = '';
              }

              if(inv_emp_date!=null && inv_emp_date!=''){
                var empinv_date = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Payment to Employee Date</div><div class="item-cell text-grey font-12 ml-0">'+inv_emp_date+'</div></div></div></li>';
              }else{
                var empinv_date = '';
              }

              if(pay_to_emp!=null && pay_to_emp!=''){
                var pay_emp = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Payment to Employee</div><div class="item-cell text-grey font-12 ml-0">'+pay_to_emp+'</div></div></div></li>';
              }else{
                var pay_emp = '';
              }
          
              if(csd_attend!=null && csd_attend!=''){
                var csd_attendance = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Attendance Copy</div><div class="item-cell text-grey font-12 ml-0">'+csd_attend+' Copy</div></div></div></li>';
              }else{
                var csd_attendance = '';
              }

              bill_info+='<div class="list accordion-list no-margin"><ul><li class="accordion-item light-orange"><a href="#" class="item-content item-link"><div class="item-inner "><div class="item-title orange-txt fw-600">Billing Information</div></div><span class="float-right mr-10 orange-txt"><i class="fa fa-file-text-o icon-orange"></i></span></a><div class="accordion-item-content nobgclr elevation-1"><div class="list no-hairlines-between"><ul>'+inv_name+inv_address+inv_cycle+slry_slip+client_term+empinv_date+pay_emp+csd_attendance+'</ul></div></div></li></ul></div>';
              $("#bill_info").html(bill_info);

              //// ============================ deputation information ================================= ////
              var deput_info = '';
              if(point_of_deput!=null && point_of_deput!=''){
                var csd_point_of_deput = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Deputation Address</div><div class="item-cell text-grey font-12 ml-0">'+point_of_deput+'</div></div></div></li>';
              }else{
                var csd_point_of_deput = '';
              }

              var split_pod = point_of_deput.split("|");
              var csd_head_mul = json_list[0].csd_head_mul;
              var exp_head=csd_head_mul.split("|");
              var csd_unit_mul = json_list[0].csd_unit_mul;
              var exp_mul=csd_unit_mul.split("|");
              var design_mul = json_list[0].csd_design_mul;
              var exp_dmul = design_mul.split("|");

              for(var a1=0;a1<split_pod.length;a1++){
                var headcnt_val = exp_head[a1];
                var dsg = exp_dmul[a1];
                var u_name = exp_mul[a1];
                //if(headcnt_val!=null && headcnt_val!=''){
                  var hdcnt = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Headcount</div><div class="item-cell text-grey font-12 ml-0">'+headcnt_val+'</div></div></div></li>';
                //}else{
                  //var hdcnt = '';
                //}

                var desg = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Designation</div><div class="item-cell text-grey font-12 ml-0">'+dsg+'</div></div></div></li>';

                var unit = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Unit Name</div><div class="item-cell text-grey font-12 ml-0">'+u_name+'</div></div></div></li>';
              }

              if(period_from!=null && period_from!=''){
                var csd_period_from = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Period From</div><div class="item-cell text-grey font-12 ml-0">'+period_from+'</div></div></div></li>';
              }else{
                var csd_period_from = '';
              }

              if(deployment_wef!=null && deployment_wef!=''){
                var csd_deployment_wef = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">With Effect From</div><div class="item-cell text-grey font-12 ml-0">'+deployment_wef+'</div></div></div></li>';
              }else{
                var csd_deployment_wef = '';
              }

              if(period_to!=null && period_to!=''){
                var csd_period_to = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Period To</div><div class="item-cell text-grey font-12 ml-0">'+period_to+'</div></div></div></li>';
              }else{
                var csd_period_to = '';
              }
          
              deput_info+='<div class="list accordion-list no-margin"><ul><li class="accordion-item light-orange"><a href="#" class="item-content item-link"><div class="item-inner "><div class="item-title orange-txt fw-600">Deputation Information</div></div><span class="float-right mr-10 orange-txt"><i class="fa fa-users icon-orange"></i></span></a><div class="accordion-item-content nobgclr elevation-1"><div class="list no-hairlines-between"><ul>'+csd_point_of_deput+hdcnt+desg+unit+csd_period_from+csd_deployment_wef+csd_period_to+'</ul></div></div></li></ul></div>';
              $("#deput_info").html(deput_info);
              //// ============================ execution information ================================= ////
              // execution info //
             // console.log(json_preinfo+" #####");
              for(var h=0;h<json_preinfo.length;h++){
                var design = json_preinfo[h].pr_designation;
                var split_design = design.split("|");
                var pr_quantity = json_preinfo[h].pr_quantity;
                var split_qunty = pr_quantity.split("|");
                var pr_education = json_preinfo[h].pr_education;
                var split_educat = pr_education.split("|");
                var pr_experiance = json_preinfo[h].pr_experiance;
                var split_exper = pr_experiance.split("|");
                var pr_skill = json_preinfo[h].pr_skill;
                var split_skills = pr_skill.split("|");
                var pr_food = json_preinfo[h].pr_food;
                var split_food = pr_food.split("|");
                var pr_trasport = json_preinfo[h].pr_trasport;
                var split_transp = pr_trasport.split("|");
                var pr_accomodation = json_preinfo[h].pr_accomodation;
                var split_accomd = pr_accomodation.split("|");
                var pr_uniform = json_preinfo[h].pr_uniform;
                var split_uniform = pr_uniform.split("|");
                var pr_age = json_preinfo[h].pr_age;
                var split_age = pr_age.split("|");
                var pr_gender = json_preinfo[h].pr_gender;
                var split_gender = pr_gender.split("|");
                var pr_gross = json_preinfo[h].pr_gross;
                var split_gross = pr_gross.split("|");
                var pr_takehome = json_preinfo[h].pr_takehome;
                var split_takehome = pr_takehome.split("|");
                var pr_local = json_preinfo[h].pr_local;
                var split_local = pr_local.split("|");
                var pr_weekly = json_preinfo[h].pr_weekly;
                var split_weekly = pr_weekly.split("|");
                var pr_training = json_preinfo[h].pr_training;
                var split_train = pr_training.split("|");
                var pr_duty = json_preinfo[h].pr_duty;
                var split_duty = pr_duty.split("|");
                var pr_shift_time = json_preinfo[h].pr_shift_time;
                var split_shift = pr_shift_time.split("|");
                var pr_tourch = json_preinfo[h].pr_tourch;
                var split_tourch = pr_tourch.split("|");
                var pr_raincoat = json_preinfo[h].pr_raincoat;
                var split_rain = pr_raincoat.split("|");
                var pr_umbrella = json_preinfo[h].pr_umbrella;
                var split_umbrella = pr_umbrella.split("|");
                var pr_stick = json_preinfo[h].pr_stick;
                var split_stick = pr_stick.split("|");
                var pr_safty = json_preinfo[h].pr_safty;
                var split_safty = pr_safty.split("|");
                var pr_material = json_preinfo[h].pr_material;
                var split_material = pr_material.split("|");
                var pr_machinary = json_preinfo[h].pr_machinary;
                var split_machnie = pr_machinary.split("|");
                var pr_other = json_preinfo[h].pr_other;
                var split_other = pr_other.split("|");
                var pr_shoes = json_preinfo[h].pr_shoes;
                var split_shoes = pr_shoes.split("|");
                var pr_metal = json_preinfo[h].pr_metal;
                var split_metal = pr_metal.split("|");
                var pr_gun = json_preinfo[h].pr_gun;
                var split_gun = pr_gun.split("|");
                var tbl = '';
                tbl+='<div class="card data-table"><table><thead class="light-orange"><tr><th class="label-cell text-uppercase table-th"><strong>Company & Contact</strong></th></tr></thead><tbody id="dpo_list"></tbody></table></div>';
                var sub_accord = '';
                for(var i=0;i<split_design.length;i++){
                  var srno = i+parseInt(1);
                  if(split_design!=null && split_design!=''){
                    var lc_design = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Designation</div><div class="item-cell text-grey font-12 ml-0">'+split_design[i]+'</div></div>';
                  }else{
                    var lc_design = '';
                  }

                 // console.log(spec_arr_json_np+"!!!");
                  if(split_educat!=null && split_educat!=''){

                    var educate = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Qualification</div><div class="item-cell text-grey font-12 ml-0">'+spec_arr_json_np[i]+'</div></div>';
                  }else{
                    var educate = '';
                  }

                  if(split_qunty!=null && split_qunty!=''){
                    var qnty = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Quantity</div><div class="item-cell text-grey font-12 ml-0">'+split_qunty[i]+'</div></div>';
                  }else{
                    var qnty = '';
                  }

                  if(split_gross!=null && split_gross!=''){
                    var grosssal = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Gross Salary</div><div class="item-cell text-grey font-12 ml-0">'+split_gross[i]+'</div></div>';
                  }else{
                    var grosssal = '';
                  }

                  if(split_takehome!=null && split_takehome!=''){
                    var ntkhm = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Net Takehome</div><div class="item-cell text-grey font-12 ml-0">'+split_takehome[i]+'</div></div>';
                  }else{
                    var ntkhm = '';
                  }

                  if(split_exper!=null && split_exper!=''){
                    var expr = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Experiance</div><div class="item-cell text-grey font-12 ml-0">'+split_exper[i]+'</div></div>';
                  }else{
                    var expr = '';
                  }

                  if(split_skills!=null && split_skills!=''){
                    var skills = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Skill</div><div class="item-cell text-grey font-12 ml-0">'+split_skills[i]+'</div></div>';
                  }else{
                    var skills = '';
                  }

                  if(split_food!=null && split_food!=''){
                    var food = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Food By</div><div class="item-cell text-grey font-12 ml-0">'+split_food[i]+'</div></div>';
                  }else{
                    var food = '';
                  }


                  if(split_duty!=null && split_duty!=''){
                    var duty = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Duty Hours</div><div class="item-cell text-grey font-12 ml-0">'+split_duty[i]+'</div></div>';
                  }else{
                    var duty = '';
                  }

                  if(split_age!=null && split_age!=''){
                    var age = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Age</div><div class="item-cell text-grey font-12 ml-0">'+split_age[i]+'</div></div>';
                  }else{
                    var age = '';
                  }

                  if(split_transp!=null && split_transp!=''){
                    var transp = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Transportation By</div><div class="item-cell text-grey font-12 ml-0">'+split_transp[i]+'</div></div>';
                  }else{
                    var transp = '';
                  }

                  if(split_local!=null && split_local!=''){
                    var locate = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Location</div><div class="item-cell text-grey font-12 ml-0">'+split_local[i]+'</div></div>';
                  }else{
                    var locate = '';
                  }

                  if(split_gender!=null && split_gender!=''){
                    var gender = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Gender</div><div class="item-cell text-grey font-12 ml-0">'+split_gender[i]+'</div></div>';
                  }else{
                    var gender = '';
                  }

                  if(split_accomd!=null && split_accomd!=''){
                    var accomodate = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Accomodation By</div><div class="item-cell text-grey font-12 ml-0">'+split_accomd[i]+'</div></div>';
                  }else{
                    var accomodate = '';
                  }

                  if(split_shift!=null && split_shift!=''){
                    var s_timing = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Shift Timings</div><div class="item-cell text-grey font-12 ml-0">'+split_shift[i]+'</div></div>';
                  }else{
                    var s_timing = '';
                  }

                  if(split_train!=null && split_train!=''){
                    var t_freq = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Training Frequency</div><div class="item-cell text-grey font-12 ml-0">'+split_train[i]+'</div></div>';
                  }else{
                    var t_freq = '';
                  }

                  if(split_uniform!=null && split_uniform!=''){
                    var unif = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Uniform By</div><div class="item-cell text-grey font-12 ml-0">'+split_uniform[i]+'</div></div>';
                  }else{
                    var unif = '';
                  }

                  if(split_weekly!=null && split_weekly!=''){
                    var wkly = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Weekly Off</div><div class="item-cell text-grey font-12 ml-0">'+split_weekly[i]+'</div></div>';
                  }else{
                    var wkly = '';
                  }

                  if(csd_verticle=='MANPOWER' || csd_verticle=='SECURITY'){
                    if(split_tourch!=null && split_tourch!=''){
                      var torch = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Torch By</div><div class="item-cell text-grey font-12 ml-0">'+split_tourch[i]+'</div></div>';
                    }else{
                      var torch = '';
                    }

                    if(split_rain!=null && split_rain!=''){
                      var rnct = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Raincoat By</div><div class="item-cell text-grey font-12 ml-0">'+split_rain[i]+'</div></div>';
                    }else{
                      var rnct = '';
                    }

                    if(split_umbrella!=null && split_umbrella!=''){
                      var umbrela = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Umbrella By</div><div class="item-cell text-grey font-12 ml-0">'+split_umbrella[i]+'</div></div>';
                    }else{
                      var umbrela = '';
                    }

                    if(split_stick!=null && split_stick!=''){
                      var stick = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Stick By</div><div class="item-cell text-grey font-12 ml-0">'+split_stick[i]+'</div></div>';
                    }else{
                      var stick = '';
                    }
                  }
                  var s_access='',m_detect='',shoes='',s_gun='',mat_by='',mach_by='';
                  if(csd_verticle=='MANPOWER' || csd_verticle=='SECURITY' || csd_verticle=='HOUSEKEEPING'){
                    if(split_safty!=null && split_safty!=''){
                      var s_access = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Safety Accessories</div><div class="item-cell text-grey font-12 ml-0">'+split_safty[i]+'</div></div>';
                    }else{
                      var s_access = '';
                    }
                  }

                  if(csd_verticle=='SECURITY'){
                    if(split_metal!=null && split_metal!=''){
                      var m_detect = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Metal Detector</div><div class="item-cell text-grey font-12 ml-0">'+split_metal[i]+'</div></div>';
                    }else{
                      var m_detect = '';
                    }

                    if(split_shoes!=null && split_shoes!=''){
                      var shoes = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Shoes</div><div class="item-cell text-grey font-12 ml-0">'+split_shoes[i]+'</div></div>';
                    }else{
                      var shoes = '';
                    }

                    if(split_gun!=null && split_gun!=''){
                      var s_gun = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Gun</div><div class="item-cell text-grey font-12 ml-0">'+split_gun[i]+'</div></div>';
                    }else{
                      var s_gun = '';
                    }
                  }

                  if(csd_verticle=='HOUSEKEEPING'){
                    if(split_material!=null && split_material!=''){
                      var mat_by = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Material By</div><div class="item-cell text-grey font-12 ml-0">'+split_material[i]+'</div></div>';
                    }else{
                      var mat_by = '';
                    }
                    if(split_machnie!=null && split_machnie!=''){
                      var mach_by = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Machinary By</div><div class="item-cell text-grey font-12 ml-0">'+split_machnie[i]+'</div></div>';
                    }else{
                      var mach_by = '';
                    }              
                  }

                  if(split_other!=null && split_other!=''){
                    var other = '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Others</div><div class="item-cell text-grey font-12 ml-0">'+split_other[i]+'</div></div>';
                  }else{
                    var other = '';  
                  }

                  sub_accord+='<div class="list accordion-list p-2"><ul><li class="accordion-item light-grey"><a href="#" class="item-content item-link"><div class="item-inner"><div class="item-title">'+srno+'</div></div><span class="float-right mr-10 orange-txt"><i class="fa fa-play icon-orange"></i></span></a><div class="accordion-item-content nobgclr elevation-5 ">'+lc_design+educate+qnty+grosssal+ntkhm+expr+skills+food+duty+age+transp+locate+gender+accomodate+s_timing+t_freq+unif+wkly+torch+rnct+umbrela+stick+s_access+m_detect+shoes+s_gun+mat_by+mach_by+other+'</div></li></ul></div>';


                  }// for loop split_design.length ends //
                } // for loop json_preinfo.length ends //
                var execute_info = '';
                execute_info+='<div class="list accordion-list no-margin"><ul><li class="accordion-item light-orange"><a href="#" class="item-content item-link"><div class="item-inner "><div class="item-title orange-txt fw-600">Execution Information</div></div><span class="float-right mr-10 orange-txt"><i class="fa fa-play icon-orange"></i></span></a><div class="accordion-item-content nobgclr elevation-1"><div class="list no-hairlines-between"><ul>'+sub_accord+'</ul></div></div></li></ul></div>';
                if(json_preinfo.length!=0){
                  $("#execute_info").html(execute_info);
                }else{
                  $("#execute_info").html('');
                }
                //$("#execute_info").html(execute_info);
                app.preloader.hide();  

            }else if(json_qutn_type=='placement'){
                //console.log("placement");
                var resultjson = $.parseJSON(result);
                console.log(resultjson);
                var json_verticle1 = resultjson.dpo_placement;
                var json_mrfdetail = resultjson.mrfdetail;
                var json_verti = resultjson.verticle; 
                
                var json_keyskill = resultjson.keyskill; 
                var josn_qualification = resultjson.h_q_c_s_name;  
                var spec_arr_json = resultjson.spec_arr;
                var spec_arr_json1 = resultjson.spec_arr1;

                

               // var spec_qual = resultjson.spec_qual;

                //onsole.log(spec_qual+"******spec_qual");

                
                //console.log(blue_hight_place+"******blue_hight_place");
                
                //console.log(spec_white+"#####spec_white");
                //console.log("blue_qual  ===="+blue_qual); 
                //console.log("white_qual  ===="+white_qual); 
                
                //console.log(spec_arr_json+"#################-----#################"); 
                //app.dialog.alert("placement");
                $("#qunt_other").removeClass("display-block");
                $("#qunt_other").addClass("display-none");
                $("#qunt_placement").removeClass("display-none");
                $("#qunt_placement").addClass("display-block"); 

                var place_basic_info = '';
                if(csd_verticle!=null && csd_verticle!=''){
                  var vertical = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Vertical</div><div class="item-cell text-grey font-12 ml-0">'+csd_verticle+'</div></div></div></li>';
                }else{
                  var vertical = '';
                }

                if(contact_name!=null && contact_name!=''){
                  var cont_name = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Contact Person</div><div class="item-cell text-grey font-12 ml-0">'+contact_name+'</div></div></div></li>';
                }else{
                  var cont_name = '';
                }

                if(industry_name!=null && industry_name!=''){
                  var indust = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Industry</div><div class="item-cell text-grey font-12 ml-0">'+industry_name+'</div></div></div></li>';
                }else{
                  var indust = '';
                }

                for(var j=0;j<json_design.length;j++){
                  if(csd_contact_designation == json_design[j].d_id){
                    var desig = json_design[j].d_name;
                  }
                }

                if(desig!=null && desig!=''){
                  var desgn = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Designation</div><div class="item-cell text-grey font-12 ml-0">'+desig+'</div></div></div></li>';
                }else{
                  var desgn = '';
                }

                if(csd_branch_code!=null && csd_branch_code!=''){
                  var branch_code = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Branch Code</div><div class="item-cell text-grey font-12 ml-0">'+csd_branch_code+'</div></div></div></li>';
                }else{
                  var branch_code = '';
                }

                if(csd_contact_email!=null && csd_contact_email!=''){
                  var cont_email = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Email ID</div><div class="item-cell text-grey font-12 ml-0">'+csd_contact_email+'</div></div></div></li>';
                }else{
                  var cont_email = '';
                }

                if(csd_head_cnt!=null && csd_head_cnt!=''){
                  var head_cnts = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Headcount - Total </div><div class="item-cell text-grey font-12 ml-0">'+csd_head_cnt+'</div></div></div></li>';
                }else{
                  var head_cnts = '';
                }

                if(csd_contact_mobile!=null && csd_contact_mobile!=''){
                  var cont_mobile = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Mobile</div><div class="item-cell text-grey font-12 ml-0">'+csd_contact_mobile+'</div></div></div></li>';
                }else{
                  var cont_mobile = '';
                }

                place_basic_info+='<div class="list accordion-list no-margin"><ul><li class="accordion-item light-orange accordion-item-opened"><a href="#" class="item-content item-link"><div class="item-inner "><div class="item-title orange-txt fw-600">Basic Information</div></div><span class="float-right mr-10 orange-txt"><i class="fa fa-user icon-orange"></i></span></a><div class="accordion-item-content nobgclr elevation-1"><div class="list no-hairlines-between"><ul>'+vertical+cont_name+indust+desgn+branch_code+cont_email+head_cnts+cont_mobile+'<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Position</div><div class="item-cell text-grey font-12 ml-0">';

          
                  var position = [];
                  
                  if(json_verticle1[0].csd_head_position!=null && json_verticle1[0].csd_head_position!=''){
                    var csd_head_position = json_verticle1[0].csd_head_position;
                    var split_pos = csd_head_position.split("|");
                    for(var k=0;k<split_pos.length;k++){
                      var pers_nw = split_pos[k];                
                      position = pers_nw + " --> " + "<br/>";            
                      place_basic_info+=position;
                    }
                  }
                  if(csd_contact_land!=null && csd_contact_land!=''){
                    var landline_no = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Landline No</div><div class="item-cell text-grey font-12 ml-0">'+csd_contact_land+'</div></div></div></li>';;
                  }else{
                    var landline_no = '';
                  }

                place_basic_info+='</div></div></div></li>'+landline_no+'</ul></div></div></li></ul></div>';
                $("#place_basic_info").html(place_basic_info);
                

                //// ============================ bill information ================================= ////
                var place_bill_info = '';
                if(invoice_name!=null && invoice_name!=''){
                  var inv_name = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Invoice Name</div><div class="item-cell text-grey font-12 ml-0">'+invoice_name+'</div></div></div></li>';
                }else{
                  var inv_name = '';
                }

                if(invoice_add!=null && invoice_add!=''){
                  var inv_address = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Address required on Invoice</div><div class="item-cell text-grey font-12 ml-0">'+invoice_add+'</div></div></div></li>';
                }else{
                  var inv_address = '';
                }

                if(point_of_deput!=null && point_of_deput!=''){
                  var csd_point_of_deput = '<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Deputation Address</div><div class="item-cell text-grey font-12 ml-0">'+point_of_deput+'</div></div></div></li>';
                }else{
                  var csd_point_of_deput = '';
                }

                if(b_name!=null && b_name!=''){
                  var admore = '<li class="item-link item-content light-grey"><div class="item-inner item-cell"><div class="item-row p-1 text-center"><div class="item-cell grey-txt font-14 fw-600 text-capitalize">Cosmos Company(Branch) :'+b_name+'</div></div></div></li>';
                }else{
                  var admore = '';
                }

                place_bill_info+='<div class="list accordion-list no-margin"><ul><li class="accordion-item light-orange"><a href="#" class="item-content item-link"><div class="item-inner "><div class="item-title orange-txt fw-600">Billing Information</div></div><span class="float-right mr-10 orange-txt"><i class="fa fa-file-text-o icon-orange"></i></span></a><div class="accordion-item-content nobgclr elevation-1"><div class="list no-hairlines-between"><ul>'+inv_name+inv_address+csd_point_of_deput+admore+'</ul></div></div></li></ul></div>';
                $("#place_bill_info").html(place_bill_info);

                var mr_position = json_mrfdetail[0].mr_position;
                var split_posit =mr_position.split("|");
                var mr_no_position = json_mrfdetail[0].mr_no_position;
                var split_nopos =mr_no_position.split("|");
                var mr_reportingto = json_mrfdetail[0].mr_reportingto;
                var split_reportingto =mr_reportingto.split("|");
                var mr_qualification = json_mrfdetail[0].mr_qualification;
                //console.log(mr_qualification);
                var split_quali =mr_qualification.split("|");
                var mr_soft_skill = json_mrfdetail[0].mr_soft_skill;
                var split_soft_skill =mr_soft_skill.split("|");
                var mr_experiance = json_mrfdetail[0].mr_experiance;
                var split_exp =mr_experiance.split("|");
                var mr_salary = json_mrfdetail[0].mr_salary;
                var split_sal =mr_salary.split("|");
                var mr_vacancy = json_mrfdetail[0].mr_vacancy;
                var split_vacancy =mr_vacancy.split("|");
                var mr_gender = json_mrfdetail[0].mr_geneder;
                var split_gen =mr_gender.split("|");
                var mr_roles = json_mrfdetail[0].mr_roles;
                var split_role =mr_roles.split("|");
                var mr_working_time = json_mrfdetail[0].mr_working_time;
                var split_wtime =mr_working_time.split("|");
                var mr_total_value = json_mrfdetail[0].mr_total_value;
                var split_tot =mr_total_value.split("|");
                var headcnt_accord = '';
                var pos_title='';
                
                for(b=0;b<split_posit.length;b++){
                  var serial = b+parseInt(1);
                  var desig = [];
                  for(var a=0;a<json_verti.length;a++){
                    if(json_verti[a].vd_id == split_posit[b]){
                      desig = json_verti[a].designation;
                      pos_title=desig;
                    }
                  }
                  
                  if(pos_title!=null && pos_title!=''){
                    pos_title= '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Position / Title</div><div class="item-cell text-grey font-12 ml-0">'+pos_title+'</div></div>';
                  }else{
                    pos_title= '';  
                  }

                  if(split_nopos!=null && split_nopos!=''){
                    var pos_no= '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">No. of Positions</div><div class="item-cell text-grey font-12 ml-0">'+split_nopos[b]+'</div></div>';
                  }else{
                    var pos_no= '';  
                  }

                  if(split_reportingto!=null && split_reportingto!=''){
                    var rep_to= '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Reporting To</div><div class="item-cell text-grey font-12 ml-0">'+split_reportingto[b]+'</div></div>';
                  }else{
                    var rep_to= '';   
                  }                 

                    /*if(spec_arr_json[b]!=null && spec_arr_json[b]!='' && spec_arr_json[b]!=undefined){
                      if(spec_arr_json.length>0){ //console.log("BLUE");
                        var spec='<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Qualification</div><div class="item-cell text-grey font-12 ml-0">'+spec_arr_json[b]+'</div></div>';  
                      }else{
                        var spec= '';    
                      }                  
                    }else{
                      var spec= '';    
                    }*/
                    
                   //var spec='<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Qualification</div><div class="item-cell text-grey font-12 ml-0">'+spec_white[b]+'</div></div>';
                    
                   /* if(spec_arr_json1[b]!=null && spec_arr_json1[b]!='' && spec_arr_json1[b]!=undefined){ 
                      if(spec_arr_json1.length>0){ 
                      //console.log("WHITE");
                        var spec='<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Qualification</div>444<div class="item-cell text-grey font-12 ml-0">'+spec_arr_json1+'</div></div>'; 
                      }else{
                        var spec= '555';    
                      }                   
                    }else{
                      var spec= '666';    
                    }*/
                    
                  /*var qualifi = split_quali[b]; 
                  //console.log("^^^^^^^^^^^^"+qualifi); 
                  var split_qual_plus = qualifi.split("+");
                  console.log("&&&&&&&&&&& "+split_qual_plus);

                  var qul='';
                  if(qualifi!=''){
                    //console.log("BLUE "+json_blue);
                    //console.log("WHITE "+json_white);
                    for(var qm=0;qm<json_blue.length;qm++){
                      for(var q=0;q<split_qual_plus.length;q++){
                        if(json_blue[qm].h_q_c_s_id == split_qual_plus[q]){
                          qul+='<span class="badge">'+json_blue[qm].h_q_c_s_name+'</span>'
                        }
                      }
                    }
                  }

                  var spec='<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Qualification</div>444<div class="item-cell text-grey font-12 ml-0">'+qul+'</div></div>';
*/

                  //console.log(qlf[b]);
                  
                  var spec='<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Qualification</div><div class="item-cell text-grey font-12 ml-0">'+qlf[b]+'</div></div>';


                  var sklsel = split_soft_skill[b];                  
                  var sklone = sklsel.split("+");
                  var k_skill = '';
                  if(sklsel!=''){
                    for(var z=0;z<json_keyskill.length;z++){
                      for(var y=0;y<sklone.length;y++){
                        if(json_keyskill[z].key_id == sklone[y]){
                          k_skill+=json_keyskill[z].key_skill+','; 
                        }
                      }
                    } 
                  }
                 
                  if(split_quali!=null && split_quali!=''){
                    var skil='<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Soft Skill</div><div class="item-cell text-grey font-12 ml-0">'+k_skill+'</div></div>';
                  }else{
                    var skil= '';  
                  }

                  var exper = '';
                  var expye = split_exp[b];
                  var exone=expye.split("+");
                  exper+="From  "+exone[0]+" TO "+exone[1]; 
                  /*for(var x=1;x<=24;x++){
                    if(exone[0]==x){
                      exper+=x+" Year";
                    }
                  }
                  for(var x=0;x<=24;x++){
                    if(exone[1]==x){
                      exper+=x+" Month";
                    }
                  }*/

                  if(split_exp!=null && split_exp!=''){
                    var exp='<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Experience</div><div class="item-cell text-grey font-12 ml-0">'+exper+'</div></div>';
                  }else{
                    var exp= '';  
                  }

                  

                  if(split_sal!=null && split_sal!=''){
                    var salry = split_sal[b];                    
                    var selone = salry.split("&");
                    if(salry!='&'){
                      //console.log("if &"+selone); 
                      if(selone!=null && selone!='' && selone!=undefined){
                        var slr = selone[0]+" To "+selone[1]+" ";                      
                        var sallry='<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Annual CTC</div><div class="item-cell text-grey font-12 ml-0">'+slr+'</div></div>';
                      }
                    }else{
                      var slr = '';  
                      var sallry='';                    
                    }
                  }else{
                    var sallry= '';  
                  }

                  if(split_vacancy!=null && split_vacancy!=''){
                    var vac='<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Type of Vacancy</div><div class="item-cell text-grey font-12 ml-0">'+split_vacancy[b]+'</div></div>';
                  }else{
                    var vac= '';  
                  }

                  if(split_gen!=null && split_gen!=''){
                    var gend='<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Gender</div><div class="item-cell text-grey font-12 ml-0">'+split_gen[b]+'</div></div>';
                  }else{
                    var gend= '';  
                  }

                  if(split_wtime!=null && split_wtime!=''){
                    var w_time='<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Working Time</div><div class="item-cell text-grey font-12 ml-0">'+split_wtime[b]+'</div></div>';
                  }else{
                    var w_time= '';  
                  }

                  if(split_role!=null && split_role!=''){
                    var r_res='<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Roles &amp; Responsibilities</div><div class="item-cell text-grey font-12 ml-0">'+split_role[b]+'</div></div>';
                  }else{
                    var r_res= '<div class="item-row pl-4 pb-3"><div class="item-cell grey-txt font-14 fw-600">Roles &amp; Responsibilities</div><div class="item-cell text-grey font-12 ml-0"></div></div>';  
                  }

                  headcnt_accord+='<div class="list accordion-list p-2"><ul><li class="accordion-item light-grey"><a href="#" class="item-content item-link"><div class="item-inner"><div class="item-title">'+serial+'</div></div><span class="float-right mr-10 orange-txt"><i class="fa fa-play icon-orange"></i></span></a><div class="accordion-item-content nobgclr elevation-5 ">'+pos_title+pos_no+rep_to+spec+skil+exp+sallry+vac+gend+w_time+r_res+'</div></li></ul></div>';

                }// for llop split_posit.length ends //
                var headcnt_info = '';
                headcnt_info+='<div class="list accordion-list no-margin"><ul><li class="accordion-item light-orange"><a href="#" class="item-content item-link"><div class="item-inner "><div class="item-title orange-txt fw-600">Headcount Details</div></div><span class="float-right mr-10 orange-txt"><i class="fa fa-play icon-orange"></i></span></a><div class="accordion-item-content nobgclr elevation-1"><div class="list no-hairlines-between"><ul>'+headcnt_accord+'</ul></div></div></li></ul></div>';
                if(split_posit.length!=0){
                  $("#place_headcnt_info").html(headcnt_info);
                }else{
                  $("#place_headcnt_info").html('');
                }

            } // else ends //
          } // success quoteverticles ends //
        });

      /*}else if(json_qutn_type=='placement'){
        app.dialog.alert("placement");
        $("#qunt_other").removeClass("display-block");
        $("#qunt_other").addClass("display-none");
        $("#qunt_placement").removeClass("display-none");
        $("#qunt_placement").addClass("display-block"); 


      }*/

      app.preloader.hide();
    } // success dpodetail_view ends //
  });
  app.preloader.hide();
}
/*function getgenderimage(sel_gender){
  if(sel_gender=='M'){    
    $("#female_img").html('');
    $("#male_img").html("<img src='img/man.png' height='30' width='30' />");
  }else if(sel_gender=='F'){    
    $("#male_img").html('');
    $("#female_img").html("<img src='img/girl.png' height='30' width='30' />");
  }
}*/
$$(document).on('page:init', '.page[data-name="pro_registrations"]', function (e) { 
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/pro_list',
    data:{'uid':session_uid,'session_ulevel':session_ulevel},
    success:function(pro_res){
      var json = $.parseJSON(pro_res);
      var json_list = json.proList;
      //console.log(json_list); 
      var prolist='';
      var st_int='';
      var j=1; 
      if(json_list.length==0){
         prolist+='<tr class=""><td class="text-uppercase fw-600 text-grey font-14">No Data Available.</td></tr>';
      }else{
        for(var i=0;i<json_list.length;i++){
          var cand_id = json_list[i].cand_id; 
          var cand_fname = json_list[i].cand_fname;
          var cand_mobile = json_list[i].cand_mobile;
          var cand_email = json_list[i].cand_email;  
          var created_by = json_list[i].createname; 
          if(cand_mobile!=''){
            var cont = '<span class="text-muted"><i class="f7-icons font-14">phone_fill</i>&nbsp;:&nbsp'+cand_mobile+'</span>';
          }else{
            var cont = '<span class="text-muted">No Contact Found.</span>';
          }
          if(cand_email!=''){
            var email = '<span class="text-muted"><i class="f7-icons font-14">envelope_fill</i>&nbsp;:&nbsp'+cand_email+'</span>';
          }else{
            var email = '';
          }
          prolist+='<tr class="tr-border" id="pro_tr'+i+'"><td class="text-uppercase fw-600 font-10"><a class="" href="#">'+cand_fname+'</a><br/>'+cont+'<br/><span class="text-lowercase">'+email+'</span></td><td id="btn_'+i+'"></td></tr>';
          int_statusBtn(cand_id,i);
          //$("#provisional_list").html(prolist); 
          j++;
        }
      }
      $("#provisional_list").html(prolist); 
      app.preloader.hide();
    }
  });  
  
});
function int_statusBtn(cand_id,rowid){
  app.preloader.show();
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/statusorinterview',
    data:{'cand_id':cand_id},
    success:function(res){
        if(res==0){
          st_int='<button class="col button btn-goutline button-small button-outline font-8" onclick="add_interview('+cand_id+')"><i class="f7-icons font-12 mr-5">plus</i>Interview</button>';
          $("#btn_"+rowid).html(st_int);
        }else{
          //st_int='<button class="col button color-gray button-small button-outline font-8" onclick="viewStatus('+cand_id+')"><i class="fa fa-eye font-12 mr-5"></i> Status</button>';
          $("#pro_tr"+rowid).remove();
        }
        
        app.preloader.hide();
    }
  });
}
function add_interview(cand_id){
  checkConnection();
  chkStatusAndPwd();
  mainView.router.navigate("/add_interview/");
  var session_department = window.localStorage.getItem("session_department");
  var uid = window.localStorage.getItem("session_uid");
  var u_level = window.localStorage.getItem("session_ulevel");
  var int_days='<option value=""></option>';
  var dt_mnth='';
  for(var k=1;k<=31;k++){
    if(k<=9){
      k="0"+k;
    }else{
      k=k;
    }
    int_days+='<option value="'+k+'">'+k+'</option>';
  }

  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    dt_mnth+='<option value=""></option>';
  for(var h=0;h<monthNames.length;h++){
    dt_mnth+='<option value="'+(h+1)+'">'+monthNames[h]+'</option>';
  }    

  var currentDate = new Date()
  var curr_year = currentDate.getFullYear();
  var add_years = curr_year + parseInt(2);
  var dt_yr='';
  dt_yr+='<option value=""></option>';
  for(var m=1950;m<=add_years;m++){
    dt_yr+='<option value="'+m+'">'+m+'</option>';
  } 

  app.preloader.show();
  $.ajax({ 
    type:'POST',  
    data:{'cand_id':cand_id,'session_department':session_department,'uid':uid,'u_level':u_level},
    url:base_url+'liveappcontroller/getCompany',
    success:function(compres){  
      $("#dt_day").html(int_days); 
      $("#dt_mnth").html(dt_mnth); 
      $("#dt_yr").html(dt_yr);
      var resjson = $.parseJSON(compres);
      var comps_list = resjson.companies;
      var blue_post = resjson.positionsBlueNew;
      var white_post = resjson.positionsWhiteNew;
      var cand = resjson.canddet;
      var intstatus = resjson.interview;
      var comp=''; 
      var positblue='';
      var positwhite='';
      var stsint='';
      console.log(comps_list.length);
      comp+='<option value="">---SELECT---</option>';
      for(var i=0;i<comps_list.length;i++){
        var compid = comps_list[i].cs_id;
        var compnm = comps_list[i].cs_invoice_name;        
        comp+='<option value='+compid+'>'+compnm+'</option>';
      }           
      $("#company").html(comp);
      var cand_fname = cand[0].cand_fname;
      var type = cand[0].cand_collor_type;
      var cand_id = cand[0].cand_id;  
      $("#cand_id").val(cand_id);   
      /*if(type=="BLUE"){
        positblue+='<option value="">---SELECT---</option>';
        for(var j=0;j<blue_post.length;j++){
          var vd_id_blue = blue_post[j].vd_id;
          var vd_designation_blue = blue_post[j].designation;
          positblue+='<option value='+vd_id_blue+'>'+vd_designation_blue+'</option>';
        }
        $("#position").html(positblue);
      }else if(type=="WHITE"){
        positwhite+='<option value="">---SELECT---</option>';
        for(var k=0;k<white_post.length;k++){
          var vd_id_white = white_post[k].vd_id;
          var vd_designation_white = white_post[k].designation;
          positwhite+='<option value='+vd_id_white+'>'+vd_designation_white+'</option>';
        }
        $("#position").html(positwhite);
      }*/
      stsint+='<option value="">---SELECT---</option>';
      for(var m=0;m<intstatus.length;m++){
        var i_id = intstatus[m].i_id;
        var i_status = intstatus[m].i_status;
        var status_hindi = intstatus[m].status_hindi;
        stsint+='<option value='+i_id+'>'+i_status+ " - "+status_hindi+'</option>';
      }
      $("#int_status").html(stsint);
      app.preloader.hide();
      }
  });
}
function customerDesignations(sel_cmp){
  var posit='';
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/customerDesignations',
    data:{'sel_cmp':sel_cmp},
    success:function(pos_result){
      var pos = $.parseJSON(pos_result);
      var posti = pos.posti;
      posit+='<option value="">---SELECT---</option>';
      for(var i=0;i<posti.length;i++){
        var vd_id = posti[i].vd_id;
        var vd_designation = posti[i].designation;
        posit+='<option value='+vd_id+'>'+vd_designation+'</option>';
      }
      $("#position").html(posit);
    }
  });
}
function addInterview(){
  app.preloader.show();
  var add_int = $(".add_int").serialize();
  var session_uid = window.localStorage.getItem("session_uid");
  console.log(add_int);
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/addinterview',
    data:add_int+"&session_uid="+session_uid,
    success:function(int_result){
      //console.log(int_result);
      var toastIcon = app.toast.create({
        icon: app.theme === 'ios' ? '<i class="f7-icons">check_round</i>' : '<i class="f7-icons">check_round</i>',
        text: 'Interview added successfully.',
        position: 'center',
        closeTimeout: 2000,
      });
      app.preloader.hide();
      toastIcon.open();
      mainView.router.navigate("/pro_registrations/");
    }
  });
}
function viewStatus(cand_id){  
  app.preloader.show();
  mainView.router.navigate("/view_status/");
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/candListFind', 
    data:{'cand_id':cand_id},
    success:function(resdata){
      var jsondata = $.parseJSON(resdata);
      var cnt_emp = jsondata.employee; 
      var cnt_int_data = jsondata.int_data;
      var cnt_selection = jsondata.selection;
      //console.log("jsondata "+jsondata);
      console.log(cnt_emp);
      console.log(cnt_int_data);
      console.log(cnt_selection);
      if(cnt_int_data.length==0){
        if(cnt_selection.length==0){
          if(cnt_emp.length!=0){
           // var 
          }
        }
      }
      /*if(cnt_emp.length > 0){
        mainView.router.navigate("/employee_list/");
      }else if(cnt_selection > 0){
        mainView.router.navigate("/selected_candi/");
      }else{
        mainView.router.navigate("/interview_list/");
      }*/
    }
  }); 
  app.preloader.hide();
}
/*function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
    //alert(age);
}*/
function gettotalAge(){
  var dob_dt = $("#dob_dt").val();
  var dob_mnth = $("#dob_mnth").val();
  var dob_yr = $("#dob_yr").val();
  if(dob_dt>=9){
    dob_dt="0"+dob_dt;
  }else{
    dob_dt=dob_dt;
  }
  if(dob_mnth>=9){
    dob_mnth="0"+dob_mnth;
  }else{
    dob_mnth=dob_mnth;
  }
  var dob_dt = dob_yr+"-"+dob_mnth+"-"+dob_dt;
  //console.log(dob_dt);
  var today = new Date();
  var birthDate = new Date(dob_dt);
  console.log(birthDate);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  //return age;
  //alert(age);
  if(age<18){
    app.dialog.alert("Your age should be 18 years to get register with COSMOS");
    $("#dob_dt").val("");
    $("#dob_mnth").val("");
    $("#dob_yr").val("");
  }
}
function candidate_register(){  
  var email=$('input[name="email"]').val(); 
  //console.log(register_form);
  var name = $("#name").val();
  var state = $("#state").val();
  var district = $("#district").val();
  var city = $("#city").val();
  var primary_mobile_number = $("#primary_mobile_number").val();
  var dob_dt = $("#dob_dt").val();
  var dob_mnth = $("#dob_mnth").val();
  var dob_yr = $("#dob_yr").val();
  var myInput = $("#myInput").val();
  
  if(name==''){
    app.dialog.alert("Name should not be empty");
    return false;
  }else if(state==''){
    app.dialog.alert("State should not be empty");
    return false;
  }else if(district==''){
    app.dialog.alert("District should not be empty");
    return false;
  }else if(city==''){
    app.dialog.alert("City should not be empty");
    return false;
  }else if(primary_mobile_number==''){
    app.dialog.alert("Primary phone should not be empty");
    return false;
  }else if(dob_dt==''){
    app.dialog.alert("Select Day of Date of birth");
    return false;
  }else if(dob_mnth==''){
    app.dialog.alert("Select Month of Date of birth");
    return false;
  }else if(dob_yr==''){
    app.dialog.alert("Select Year of Date of birth");
    return false;
  }else if($("input:radio[name='gender']:checked").length == 0){
    app.dialog.alert("Please select gender");
    return false;
  }else if($("input:radio[name='collar_type']:checked").length == 0){
    app.dialog.alert("Please select collar type");
    return false;
  }else if(myInput==''){
    app.dialog.alert("Please select highest qualification");
    return false;
  }else{      
    var register_form = $(".register_me").serialize();
    var session_uid = window.localStorage.getItem("session_uid");     
    $.ajax({
      type:'POST', 
      url:base_url+'liveappcontroller/registerCandidate',
      data:register_form+"&session_uid="+session_uid,
      success:function(reg_result){
        //app.preloader.show(); 
        //app.dialog.alert(reg_result);
        if(reg_result=='exists'){
          app.dialog.alert(email+" is already exists.Please try to register with another email address.");
        }else if(reg_result=='registered'){
          //console.log(reg_result);
          var toastIcon = app.toast.create({
            icon: app.theme === 'ios' ? '<i class="f7-icons">check_round</i>' : '<i class="f7-icons">check_round</i>',
            text: 'Registration done successfully.',
            position: 'center',
            closeTimeout: 2000, 
          });
          app.preloader.hide();
          toastIcon.open(); 
          //app.preloader.hide(); 
          //app.dialog.alert("Registration done successfully.");
          mainView.router.navigate("/pro_registrations/");
        }
      } 
    });  
  } 
}
$$(document).on('page:init', '.page[data-name="newbusiness_dev"]', function (e) { 
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/newBusinessList',    
    success:function(buss_list){
      var json_dev = $.parseJSON(buss_list);
      var json_buslist = json_dev.bus_dev;
      var list='';
      for(var i=0;i<json_buslist.length;i++){
        var bd_id = json_buslist[i].bd_id;
        var bd_company = json_buslist[i].bd_company;
        var bd_industry = json_buslist[i].bd_industry;
        var bd_type = json_buslist[i].bd_type;
        //console.log("***"+bd_type);
        if(bd_industry!=''){
          var ind='<span class="text-muted font-12"><span class="fw-500">Industry:</span> '+bd_industry+'</span>';
        }else{
          var ind='';
        }

        if(bd_type=='Development'){
          var imp_triangle = '<div id="triangle-topleft-dev"><span class="impfont fw-700 r-3">Dev</span></div>';
        }else if(bd_type=='Competitor'){
          var imp_triangle = '<div id="triangle-topleft-comp"><span class="impfont fw-700 r-1">Comp</span></div>';
        }
        
        list+='<tr class="tr-border"><td class="text-capitalize font-12 fw-500"><a class="" href="#" onclick="showBusinessdet('+bd_id+')">'+bd_company+'</a><br/>'+ind+'</td><td onclick="editBusinessData('+bd_id+','+"'"+bd_type+"'"+')"><i class="fa fa-pencil-square-o font-16 text-muted edit-icon"></i>'+imp_triangle+'</td><!--td><i class="fa fa-eye font-16 text-muted orange-txt"></i></td--></tr>';
        
        $("#business_list").html(list); 
        app.preloader.hide();
      }
    }
  });  
});
function editBusinessData(bd_id,bd_type){
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  mainView.router.navigate("/editBusiness/");
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/businessDet',
    data:{'bd_id':bd_id},
    success:function(res){ 
      var json_res = $.parseJSON(res);
      var edit_josn = json_res.business_det;
      var bd_typ = edit_josn[0].bd_type;
      if(bd_typ=='Development'){
        $(".type_title").html("Edit Development");
        $(".form-btn").addClass("devsave_btn");
      }else if(bd_typ=='Competitor'){
        $(".type_title").html("Edit Competitor");
        $(".form-btn").addClass("compsave_btn");
      } 
      var hidd_bd_id = edit_josn[0].bd_id;
      var bd_location = edit_josn[0].bd_location;
      var bd_company = edit_josn[0].bd_company;
      var bd_industry = edit_josn[0].bd_industry;      
      var bd_product = edit_josn[0].bd_product;
      var bd_start_date = edit_josn[0].bd_start_date;
      var bd_person_name = edit_josn[0].bd_person_name;
      var bd_contact = edit_josn[0].bd_contact;
      var bd_email = edit_josn[0].bd_email;
      var bd_web_address = edit_josn[0].bd_web_address;
      var bd_remark = edit_josn[0].bd_remark;   

      var bd_address = edit_josn[0].bd_address; 
      var bd_service = edit_josn[0].bd_service;
      var bd_headcount = edit_josn[0].bd_headcount;
      var bd_salary = edit_josn[0].bd_salary;
      var bd_servicecharge = edit_josn[0].bd_servicecharge;
      var bd_duty_hrs = edit_josn[0].bd_duty_hrs;
      var bd_contact = edit_josn[0].bd_contact;
      var bd_email = edit_josn[0].bd_email;
      var bd_client_ref = edit_josn[0].bd_client_ref;
      var editDiv='';

      if(bd_type=='Development'){ 
        editDiv='<input type="hidden" name="hidd_bd_id" id="hidd_bd_id" value='+hidd_bd_id+' /><input type="hidden" name="hidd_bd_type" id="hidd_bd_type" value='+bd_typ+' /><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Location - स्थान<sup class="redtxt fw-600 ml-1 font-12">*</sup></div><div class="item-input-wrap"><input type="text" name="location" id="location" placeholder="Location" class="form-txtbox p-2" required validate data-error-message="Location should not be empty." value="'+bd_location+'"></div></div></div></li><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Company Name - कंपनी का नाम <sup class="redtxt fw-600 ml-1 font-12">*</sup></div><div class="item-input-wrap"><input type="text" name="company" id="company" placeholder="Company" class="form-txtbox p-2" required validate data-error-message="Company Name should not be empty." value="'+bd_company+'"></div></div></div></li><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Type Of Industry - उद्योग के प्रकार</div><div class="item-input-wrap"><input type="text" name="ind_type" id="ind_typexx" placeholder="Industry Type" class="form-txtbox p-2" value="'+bd_industry+'"></div></div></div></li><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Product - उत्पाद</div><div class="item-input-wrap"><input type="text" name="product" id="product" placeholder="Product" class="form-txtbox p-2" value="'+bd_product+'"></div></div></div></li><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Start Date - आरंभ करने की तिथि</div><div class="item-input-wrap"><input type="text" name="start_date" placeholder="Start Date" class="form-txtbox p-2" id="develop_start_date" value="'+bd_start_date+'"></div></div></div></li><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Contact Person Name - संपर्क व्यक्ति का नाम</div><div class="item-input-wrap"><input type="text" name="cont_person" placeholder="Contact Person" class="form-txtbox p-2" id="cont_person" value="'+bd_person_name+'"></div></div></div></li><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Contact No - संपर्क नंबर</div><div class="item-input-wrap"><input type="text" name="cont_no" placeholder="Contact Person" class="form-txtbox p-2" id="cont_no" value="'+bd_contact+'"></div></div></div></li><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Email ID - ईमेल आईडी</div><div class="item-input-wrap"><input type="email" name="email" id="email" placeholder="Email" class="form-txtbox p-2" value="'+bd_email+'"></div></div></div></li><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Website Address - वेबसाइट का पता</div><div class="item-input-wrap"><input type="text" name="website" placeholder="Website Address" class="form-txtbox p-2" id="website" value="'+bd_web_address+'"></div></div></div></li><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Remarks - मंतव्य</div><div class="item-input-wrap"><textarea name="remarks" id="remarks" class="form-txtbox p-2">'+bd_remark+'</textarea></div></div></div></li>';
      }else if(bd_type=='Competitor'){
        editDiv='<input type="hidden" name="hidd_bd_id" id="hidd_bd_id" value='+hidd_bd_id+' /><input type="hidden" name="hidd_bd_type" id="hidd_bd_type" value='+bd_typ+' /><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Name - नाम<sup class="redtxt fw-600 ml-1 font-12">*</sup></div><div class="item-input-wrap"><input type="text" name="name" id="name" placeholder="Name" class="form-txtbox p-2" required validate data-error-message="Name should not be empty." value="'+bd_company+'"></div></div></div></li><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Address - पता <sup class="redtxt fw-600 ml-1 font-12">*</sup></div><div class="item-input-wrap"><textarea name="address" id="address" class="form-txtbox p-2" required validate data-error-message="Address should not be empty.">'+bd_address+'</textarea></div></div></div></li><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Contact Person Name - संपर्क व्यक्ति का नाम</div><div class="item-input-wrap"><input type="text" name="cont_person" placeholder="Contact Person" class="form-txtbox p-2" id="cont_person" value="'+bd_person_name+'"></div></div></div></li><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Contact No - संपर्क नंबर</div><div class="item-input-wrap"><input type="text" name="cont_no" placeholder="Contact Person" class="form-txtbox p-2" id="cont_no" value="'+bd_contact+'"></div></div></div></li><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Email ID - ईमेल आईडी</div><div class="item-input-wrap"><input type="email" name="email" id="email" placeholder="Email" class="form-txtbox p-2" value="'+bd_email+'"></div></div></div></li><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Services - सेवाएं</div><div class="item-input-wrap"><input type="text" name="services" placeholder="Services" class="form-txtbox p-2" id="services" value="'+bd_service+'"></div></div></div></li><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Headcount - कर्मचारियों की संख्या</div><div class="item-input-wrap"><input type="text" name="headcounts" id="headcounts" placeholder="Headcount" class="form-txtbox p-2" value="'+bd_headcount+'"></div></div></div></li><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Salary - पगार</div><div class="item-input-wrap"><input type="text" name="salary" id="salary" placeholder="Salary" class="form-txtbox p-2" value="'+bd_salary+'"></div></div></div></li><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Service Charge - सेवा शुल्क</div><div class="item-input-wrap"><input type="text" name="service_charge" placeholder="Service Charge" class="form-txtbox p-2" id="service_charge" value="'+bd_servicecharge+'"></div></div></div></li><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Duty Hours - ड्यूटी के घंटे</div><div class="item-input-wrap"><input type="text" name="duty_hours" placeholder="Duty Hours" class="form-txtbox p-2" id="duty_hours" value='+bd_duty_hrs+'></div></div></div></li><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Client Reference - Name/Contact- ग्राहक संदर्भ - नाम / संपर्क</div><div class="item-input-wrap"><input type="text" name="client_ref" placeholder="Client Reference" class="form-txtbox p-2" id="client_ref" value="'+bd_client_ref+'"></div></div></div></li><li><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Remarks - मंतव्य</div><div class="item-input-wrap"><textarea name="remarks" id="remarks" class="form-txtbox p-2">'+bd_remark+'</textarea></div></div></div></li>';
      }
      $("#editDiv").html(editDiv);       
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
      var timer=null;
      $("#location").keydown(enableButton);
      $("#company").keydown(enableButton);
      $("#location").keydown(function(){
        clearTimeout(timer);
        timer = setTimeout(enableButton, 1000);
      });
      $("#company").keydown(function(){
        clearTimeout(timer);
        timer = setTimeout(enableButton, 1000);
      });
      //$("#name").keydown(enableButtonComp);
      //$("#address").keydown(enableButtonComp);
      $("#name").keydown(function(){
        clearTimeout(timer);
        timer = setTimeout(enableButtonComp, 1000);
      });
      $("#address").keydown(function(){
        clearTimeout(timer);
        timer = setTimeout(enableButtonComp, 1000);
      });
    } 
  });
  app.preloader.hide();
}
function edit_development(){ 
  app.preloader.show();
  var edit_dev = $(".edit_dev").serialize();
  var session_uid = window.localStorage.getItem("session_uid");
  //console.log(edit_dev);
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/editDevComp',
    data:edit_dev+"&session_uid="+session_uid,
    success:function(comp_result){   
      if(comp_result=='updated'){
        app.dialog.alert("Data updated successfully.");
      }else if(comp_result=='not'){
        app.dialog.alert("Error Updating Data");
      }
      app.preloader.hide(); 
      mainView.router.navigate("/newbusiness_dev/");      
    }
  });
  app.preloader.hide();
} 
$$(document).on('page:init', '.page[data-name="add_development"]', function (e) { 
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  $("#location").keydown(enableButton);
  $("#company").keydown(enableButton);
  var timer=null;
  $("#location").keydown(function(){
    clearTimeout(timer);
    timer = setTimeout(enableButton, 1000);
  });
  $("#company").keydown(function(){
    clearTimeout(timer);
    timer = setTimeout(enableButton, 1000);
  }); 
  app.preloader.hide();
  var start_day='<option value=""></option>';
  var start_mnth='';
  for(var k=1;k<=31;k++){
    if(k<=9){
      k="0"+k;
    }else{
      k=k;
    }
    start_day+='<option value="'+k+'">'+k+'</option>';
  }
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    start_mnth+='<option value=""></option>';
  for(var h=0;h<monthNames.length;h++){
    start_mnth+='<option value="'+(h+1)+'">'+monthNames[h]+'</option>';
  }    
  var currentDate = new Date()
  var curr_year = currentDate.getFullYear();
  var add_years = curr_year + parseInt(2);
  var start_yr='';
  start_yr+='<option value=""></option>';
  for(var m=1950;m<=add_years;m++){
    start_yr+='<option value="'+m+'">'+m+'</option>';
  }
  $("#start_day").html(start_day); 
  $("#start_mnth").html(start_mnth); 
  $("#start_yr").html(start_yr);
});
function enableButton(){
  var loc = $("#location").val();
  var comp_name = $("#company").val();
  if(loc!='' && comp_name!=''){
    $(".devsave_btn").removeClass("disabled");
  }else{
    $(".devsave_btn").addClass("disabled");
  }
}
function add_development(){
  app.preloader.show();
  var add_dev = $(".add_dev").serialize();
  var session_uid = window.localStorage.getItem("session_uid");
  console.log(add_dev);
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/addDevelopment',
    data:add_dev+"&session_uid="+session_uid,
    success:function(dev_result){
      console.log(dev_result);
      /*if(dev_result=='inserted'){
        app.dialog.alert("Data inserted successfully.");
      }else if(dev_result=='not'){
        app.dialog.alert("Error Inserting Data");
      }
      app.preloader.hide();
      mainView.router.navigate("/newbusiness_dev/"); */     
    }
  });   
}
$$(document).on('page:init', '.page[data-name="add_competitior"]', function (e) { 
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  $("#name").keydown(enableButtonComp);
  $("#address").keydown(enableButtonComp);
  var timer=null;
  $("#name").keydown(function(){
    clearTimeout(timer);
    timer = setTimeout(enableButtonComp, 1000);
  });
  $("#address").keydown(function(){
    clearTimeout(timer);
    timer = setTimeout(enableButtonComp, 1000);
  }); 
  app.preloader.hide();
});
function enableButtonComp(){
  var name = $("#name").val();
  var address = $("#address").val();
  if(name!='' && address!=''){
    $(".compsave_btn").removeClass("disabled");
  }else{
    $(".compsave_btn").addClass("disabled");
  }
}
function add_competitior(){
  app.preloader.show();
  var add_comp = $(".add_comp").serialize();
  var session_uid = window.localStorage.getItem("session_uid");
  //console.log(add_comp);
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/addCompetitior',
    data:add_comp+"&session_uid="+session_uid,
    success:function(comp_result){   
      if(comp_result=='inserted'){
        app.dialog.alert("Data inserted successfully.");
      }else if(comp_result=='not'){
        app.dialog.alert("Error Inserting Data");
      }
      app.preloader.hide(); 
      mainView.router.navigate("/newbusiness_dev/");      
    }
  });
}
function showIcons(){
  /*$(".showtwoBlocks").removeClass("display-none");
  $(".showtwoBlocks").addClass("display-block");
  $(".uploadDiv").removeClass("display-none");
  $(".uploadDiv").addClass("display-block"); */
  $(".showtwoBlocks").removeClass("display-none");
  $(".showtwoBlocks").addClass("display-block");
  $(".imageblock").removeClass("display-none");
  $(".imageblock").addClass("display-block");
  $(".uploadDiv").removeClass("display-none");
  $(".uploadDiv").addClass("display-block"); 
}
function showBusinessdet(bd_id){
  checkConnection();
  chkStatusAndPwd();
  mainView.router.navigate("/business_details/");
  app.preloader.show();
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/businessDet',
    data:{'bd_id':bd_id},
    success:function(busi_res){   
      var json_det = $.parseJSON(busi_res);
      var business_det = json_det.business_det;
      var det_business='';
      for(var i=0;i<business_det.length;i++){  
          var bd_type = business_det[i].bd_type;
          var bd_location = business_det[i].bd_location;
          var bd_company = business_det[i].bd_company;
          var bd_industry = business_det[i].bd_industry;
          var bd_product = business_det[i].bd_product;
          var bd_start_date = business_det[i].bd_start_date;
          var bd_person_name = business_det[i].bd_person_name;
          var bd_contact = business_det[i].bd_contact;
          var bd_email = business_det[i].bd_email;
          var bd_web_address = business_det[i].bd_web_address;
          var bd_remark = business_det[i].bd_remark;   

          var bd_address = business_det[i].bd_address; 
          var bd_service = business_det[i].bd_service;
          var bd_headcount = business_det[i].bd_headcount;
          var bd_salary = business_det[i].bd_salary;
          var bd_servicecharge = business_det[i].bd_servicecharge;
          var bd_duty_hrs = business_det[i].bd_duty_hrs;
          var bd_contact = business_det[i].bd_contact;
          var bd_email = business_det[i].bd_email;
          var bd_client_ref = business_det[i].bd_client_ref;
        if(bd_type=='Development'){          
          det_business+='<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Location - स्थान</div><div class="item-cell text-grey font-14">'+bd_location+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Company Name - कंपनी का नाम</div><div class="item-cell text-grey font-14">'+bd_company+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Type Of Industry - उद्योग के प्रकार</div><div class="item-cell text-grey font-14">'+bd_industry+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Product - उत्पाद</div><div class="item-cell text-grey font-14">'+bd_product+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Start Date - आरंभ करने की तिथि</div><div class="item-cell text-grey font-14">'+bd_start_date+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Contact Person Name - संपर्क व्यक्ति का नाम</div><div class="item-cell text-grey font-14">'+bd_person_name+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Contact No - संपर्क नंबर</div><div class="item-cell text-grey font-14">'+bd_contact+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Email ID - ईमेल आईडी</div><div class="item-cell text-grey font-12">'+bd_email+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Website Address - वेबसाइट का पता</div><div class="item-cell text-grey font-14">'+bd_web_address+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Remarks - मंतव्य</div><div class="item-cell text-grey font-14">'+bd_remark+'</div></div></div></li>';
        }else if(bd_type=='Competitor'){          
          det_business+='<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Name - नाम</div><div class="item-cell text-grey font-14">'+bd_company+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Address - पता</div><div class="item-cell text-grey font-14">'+bd_address+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Services - सेवाएं</div><div class="item-cell text-grey font-14">'+bd_service+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Headcount - कर्मचारियों की संख्या</div><div class="item-cell text-grey font-14">'+bd_headcount+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Salary - पगार</div><div class="item-cell text-grey font-14">'+bd_salary+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Service Charge - सेवा शुल्क</div><div class="item-cell text-grey font-14">'+bd_servicecharge+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Duty Hours - ड्यूटी के घंटे</div><div class="item-cell text-grey font-14">'+bd_duty_hrs+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Contact Person Name - संपर्क व्यक्ति का नाम</div><div class="item-cell text-grey font-14">'+bd_person_name+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Contact No - संपर्क नंबर</div><div class="item-cell text-grey font-14">'+bd_contact+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Email ID - ईमेल आईडी</div><div class="item-cell text-grey font-12">'+bd_email+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Client Reference - Name / Contact ग्राहक संदर्भ - नाम / संपर्क</div><div class="item-cell text-grey font-14">'+bd_client_ref+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Remarks - मंतव्य</div><div class="item-cell text-grey font-14">'+bd_remark+'</div></div></div></li>';
        }
        $("#bus_det").html(det_business);
      }
      app.preloader.hide();             
    }
  });
}
// --------------------------------------------- F E E D B A C K -------------------------------------- //
$$(document).on('page:init', '.page[data-name="feedback"]', function (e) { 
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();  
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel"); 
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/feedbacks',
    data:{'session_ulevel':session_ulevel,'uid':session_uid},
    success:function(feedback_result){   
      var json_feedback = $.parseJSON(feedback_result);
      var feed_list = json_feedback.feedback; 
      var feedDiv='';
      if(feed_list.length==0){
         feedDiv+='<tr class=""><td class="text-uppercase fw-600 text-grey font-14">No Data Available.</td></tr>';
      }else{       
        for(i=0;i<feed_list.length;i++){ 
          var fb_id = feed_list[i].fb_id;
          var cs_invoice_name = feed_list[i].cs_invoice_name;
          var fb_date = feed_list[i].fb_date;
          var fb_contact_person = feed_list[i].fb_contact_person;
          feedDiv+='<tr class="tr-border"><td class="text-capitalize font-12 fw-500" onclick="showFeedback('+fb_id+')"><a class="" href="#">'+cs_invoice_name+'</a><br/><span class="text-muted font-12 fw-600">'+fb_contact_person+'</span></span></td><td><span class="text-muted"><!--i class="f7-icons font-14 mr-5">calendar_fill</i--><span class="text-muted font-12">'+fb_date+'</span><!--i class="fa fa-eye font-16 text-muted"></i--></td></tr>';
          //$("#feedback_list").html(feedDiv);
        }
      }
      $("#feedback_list").html(feedDiv);
      app.preloader.hide();             
    }
  });   
});
function showFeedback(fb_id){
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  mainView.router.navigate("/feedback_details/");
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/feedbk_det',
    data:{'fb_id':fb_id}, 
    success:function(fb_res){  
      var json_fb_res = $.parseJSON(fb_res);
      var json_fb = json_fb_res.f_dets;        
      //console.log(json_fb_res);
      var comp_name = json_fb[0].cs_invoice_name; 
      var site_add = json_fb[0].fb_address; 
      var cont_person = json_fb[0].fb_contact_person; 
      var per_desig = json_fb[0].fb_designation;
      var fb_suggetion = json_fb[0].fb_suggetion;

      var feedback_attach = json_fb[0].fb_feedback_attach;

      var cmt_service = json_fb[0].fb_cmt_services;
      if(cmt_service==1){
        var ser = 'Excellent';
      }else if(cmt_service==2){
        var ser = 'Good';
      }else if(cmt_service==3){
        var ser = 'Satisfactory';
      }else if(cmt_service==4){
        var ser = 'Average';
      }

      var cmt_response = json_fb[0].fb_cmt_response;
      if(cmt_response==1){
        var resp = 'Excellent';
      }else if(cmt_response==2){
        var resp = 'Good';
      }else if(cmt_response==3){
        var resp = 'Satisfactory';
      }else if(cmt_response==4){
        var resp = 'Average';
      }

      var cmt_behaviour = json_fb[0].fb_cmt_behaviour;
      if(cmt_behaviour==1){
        var behave = 'Excellent';
      }else if(cmt_behaviour==2){
        var behave = 'Good';
      }else if(cmt_behaviour==3){
        var behave = 'Satisfactory';
      }else if(cmt_behaviour==4){
        var behave = 'Average';
      }

      var cmt_complain = json_fb[0].fb_cmt_complain;
      if(cmt_complain==1){
        var cmpln = 'Excellent';
      }else if(cmt_complain==2){
        var cmpln = 'Good';
      }else if(cmt_complain==3){
        var cmpln = 'Satisfactory';
      }else if(cmt_complain==4){
        var cmpln = 'Average';
      }

      var cmt_price = json_fb[0].fb_cmt_price;
      if(cmt_price==1){
        var prc = 'Excellent';
      }else if(cmt_price==2){
        var prc = 'Good';
      }else if(cmt_price==3){
        var prc = 'Satisfactory';
      }else if(cmt_price==4){
        var prc = 'Average';
      }

      var cmt_document = json_fb[0].fb_cmt_document;
      if(cmt_document==1){
        var doc = 'Excellent';
      }else if(cmt_document==2){
        var doc = 'Good';
      }else if(cmt_document==3){
        var doc = 'Satisfactory';
      }else if(cmt_document==4){
        var doc = 'Average';
      }

      var cmt_performance = json_fb[0].fb_cmt_performance;
      if(cmt_performance==1){
        var perform = 'Excellent';
      }else if(cmt_performance==2){
        var perform = 'Good';
      }else if(cmt_performance==3){
        var perform = 'Satisfactory';
      }else if(cmt_performance==4){
        var perform = 'Average';
      }

      var feeddetDiv='<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Name Of Company - कंपनी का नाम</div><div class="item-cell text-grey font-14">'+comp_name+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Site Address - साइट का पता</div><div class="item-cell text-grey font-14">'+site_add+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Contact Person - संपर्क व्यक्ति</div><div class="item-cell text-grey font-14">'+cont_person+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Designation - ओहदा</div><div class="item-cell text-grey font-14">'+per_desig+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Service Quality - (सेवा की गुणवत्ता)</div><div class="item-cell text-grey font-14">'+ser+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Response Time - (जवाब देने का समय)</div><div class="item-cell text-grey font-14">'+resp+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Behaviour of person Deputed - (व्यक्ति का व्यवहार निर्भर)</div><div class="item-cell text-grey font-14">'+behave+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Complaint Handling - (शिकायत देखभाल)</div><div class="item-cell text-grey font-14">'+cmpln+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Price - (क़ीमत)</div><div class="item-cell text-grey font-14">'+prc+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Documentation - (प्रलेखन)</div><div class="item-cell text-grey font-14">'+doc+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Overall Performance - (सम्पूर्ण प्रदर्शन)</div><div class="item-cell text-grey font-14">'+perform+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Any other suggetions for improvment - सुधार के लिए कोई अन्य सुझाव</div><div class="item-cell text-grey font-14">'+fb_suggetion+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Feedback Form Copy - फीडबैक फॉर्म कॉपी</div><div class="item-cell text-grey font-14"><a class="link external orange-txt text-uppercase linkspace poweredby font-10" href="'+base_url+feedback_attach+'" target="_system">'+feedback_attach+'</a></div></div></div></li>';

      $("#feedbk_det").html(feeddetDiv);
      app.preloader.hide();
    }
  });
  
}
// ------------------------------------------ A D D  F E E D B A C K ----------------------------------- //
$$(document).on('page:init', '.page[data-name="add_feedback"]', function (e) { 
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();   
  showIcons();  
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel"); 
  var session_department = window.localStorage.getItem("session_department"); 
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/getMasterdata',
    data:{'session_uid':session_uid,'session_ulevel':session_ulevel,'session_department':session_department},
    success:function(comp_data){
      var json_comp = $.parseJSON(comp_data);
      var json_com_list = json_comp.f_comp;
      var comp_name='';
      comp_name+='<option value="">--- SELECT---</option>';
      for(var j=0;j<json_com_list.length;j++){
        var comp_id = json_com_list[j].cs_id;
        var company_nm = json_com_list[j].cs_invoice_name;
        comp_name+='<option value='+comp_id+'>'+company_nm+'</option>';
      }
      $("#name").html(comp_name);
    }
  });
  app.preloader.hide();
});
function add_feedback(){
  //alert("called");
  //name=TEST%20COMPANY&site_address=www.worldwideweb.com&cont_person=cont%20person&designation=design&service=1&response=2&person_behave=3&comp_handle=4&price=2&document=3&performance=2&any_suggestions=No%20suggestions
  var session_uid = window.localStorage.getItem("session_uid");
  app.preloader.show();   
  var fb_form = $(".add_feedback").serialize();
  var old_doc='NULL';
  //console.log(fb_form);
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/addFeedback',
    data:fb_form+"&created_by="+session_uid,
    success:function(data){
      //alert(data+"****");
      upload_doc(data,old_doc); 
      
      /*if(data=='inserted'){
        app.dialog.alert("Data inserted successfully!");
      }else if(data=='not'){
        app.dialog.alert("Error Inserting Data");
      }*/
      var toastIcon = app.toast.create({
        icon: app.theme === 'ios' ? '<i class="f7-icons">check_round</i>' : '<i class="f7-icons">check_round</i>',
        text: 'Feedback added successfully.',
        position: 'center',
        closeTimeout: 2000,
      });
      app.preloader.hide();
      toastIcon.open();       
      mainView.router.navigate("/feedback/"); 
    }
  });
}
$$(document).on('page:init', '.page[data-name="field_visit"]', function (e) { 
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  $.ajax({ 
    type:'POST', 
    //url:base_url+'liveappcontroller/fieldVisit',
    url:base_url+'liveappcontroller/dpo_list',
    data:{'uid':session_uid,'session_ulevel':session_ulevel,'session_department':session_department}, 
    success:function(list_res){  
      var json_field = $.parseJSON(list_res);
      //console.log(json_field);
      var field_list = json_field.dpoList;
      var cont_no = json_field.cont_arr;  
      //console.log(field_list.length);
      var fieldDiv='';
      var dcr='';
      for(i=0;i<field_list.length;i++){
        var cs_id = field_list[i].cs_id;
        var l_id = field_list[i].l_id;
        var cs_invoice_name = field_list[i].cs_invoice_name;        
        var contact = field_list[i].csd_contact_mobile;
        var nocon = cont_no[i][0];
        if(nocon!=''){
          var cont = '<span class="text-muted"><i class="f7-icons font-14">phone</i>&nbsp;:&nbsp'+nocon+'</span>';
        }else{
          var cont = '<span class="text-muted">No Contact Found.</span>';
        }

        /*if(contact!=''){
          var cont = '<span class="text-muted"><i class="f7-icons font-14">phone</i>&nbsp;:&nbsp'+contact+'</span>';
        }else{
          var cont = '<span class="text-muted">No Contact Found.</span>';
        }*/
        fieldDiv+='<tr class="tr-border"><td class="text-capitalize font-12 fw-500"><a class="" href="#">'+cs_invoice_name+'</a><br/><span class="text-muted font-12 fw-600">'+cont+'</span><td id="watch_'+i+'"></td></tr>';
        viewDetails(cs_id,l_id,i,cs_invoice_name);
        $("#fieldvisit_list").html(fieldDiv); 
      }
      app.preloader.hide();             
    }
  });  
}); 
function viewDetails(cs_id,l_id,rowid,cs_invoice_name){
  app.preloader.show();
  var eyeicon='';
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/getdcr',
    data:{'l_id':l_id}, 
    success:function(dcrres){
      var json_dcr = $.parseJSON(dcrres);
      //alert(json_dcr);
      if(json_dcr>0){          
        eyeicon='<span onclick="viewFieldVisit('+cs_id+','+"'"+cs_invoice_name+"'"+')"><i class="fa fa-eye font-16 color-grey fw-600"></i><span class="font-10 fw-600"> - ('+json_dcr+')</span></span>';
      }else{  
        eyeicon='<span onclick="viewFieldVisit('+cs_id+','+"'"+cs_invoice_name+"'"+')"><i class="fa fa-eye font-16 text-muted fw-600"></i><span class="font-10 fw-600"> - ('+json_dcr+')</span></span>';
      }
      $("#watch_"+rowid).html(eyeicon);
      app.preloader.hide();      
    }
  });
}
function viewFieldVisit(cs_id,comp_name){
  checkConnection();
  chkStatusAndPwd();
  mainView.router.navigate("/show_fieldVisit/"); 
  app.preloader.show(); 
  var int_cnt='';
  var list = '';
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/showFieldVisit',
    data:{'cs_id':cs_id}, 
    success:function(datares){
      var json_datares = $.parseJSON(datares);
      var list = json_datares.c_order;
      //console.log(list);
      var tot_ints = list.length;
      var block = '<div class="block"><div class="col-100"><div class="grey-txt fw-600"><h3>'+comp_name+' ('+tot_ints+')</h3></div></div></div>';
      $("#compint_details").html(block);
      var reslist='';
      reslist+='<div class="list searchbar-found"><ul>';
      if(tot_ints==0){
         reslist+='<li class="light-orange"><div class="item-inner item-cell"><div class="item-row ml-10 mt-5"><div class="item-cell orange-txt font-14 fw-600">No interviews.</div></div></li>';
      }else{
        for(var i=0;i<tot_ints;i++){
          var cn_verti = list[i].csd_verticle;
          var csd_create_date = list[i].csd_create_date;
          var csd_head_cnt = list[i].csd_head_cnt;  
          var csd_head_position = list[i].csd_head_position;  
          var csd_id = list[i].csd_id;
          //alert(cand_cmp_id);
          if(i%2==0){
            var cls = 'light-orange';
          }else{
            var cls = ''; 
          }           
          reslist+='<li class='+cls+'><a href="#" class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell orange-txt font-10 fw-500"><span class="grey-txt fw-600">'+cn_verti+' <span class="text-blue">('+csd_head_cnt+')</span></span><br/><i class="f7-icons font-10 text-muted">calendar_fill</i> <span class="grey-txt font-10">'+csd_create_date+'</span></div><div class="item-cell orange-txt text-center font-8 fw-500">';
          var position = [];           
          var split_pos = csd_head_position.split("|");
          for(var k=0;k<split_pos.length;k++){
            var pers_nw = split_pos[k];                
            position = pers_nw + "<br/>";            
            reslist+=position;
          }
          reslist+='</div><div class="item-cell"><button class="col button button-small btn-goutline text-uppercase font-9 mt-5 float-left" onclick="Add_FieldVisit('+csd_id+','+"'"+comp_name+"'"+')"><i class="f7-icons font-12">plus</i></button><span id="view_'+i+'"></span></div></div></div></a></li>';
            showViewIcon(csd_id,comp_name,i);
            //onclick="openStatusAlert('+cs_id+')"            
          }         
        }      
      reslist+='</ul></div>';
      $("#visit_dets").html(reslist);
      var searchbar = app.searchbar.create({
        el: '.searchbar',
        searchContainer: '#visit_dets',
        searchIn: '.item-cell',
        on: {
          search(sb, query, previousQuery) {
            console.log(query, previousQuery);
          }
        }
      });
      app.preloader.hide(); 
    }
  });
}
function showViewIcon(csd_id,comp_name,rowid){ 
  app.preloader.show();
  var viewicon='';
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/getdcrcsd_id',
    data:{'csd_id':csd_id}, 
    success:function(dcrcsdres){
      var json_dcrcsd = $.parseJSON(dcrcsdres);
      //console.log(json_dcrcsd);
      //alert(json_dcr);
      if(json_dcrcsd>0){  
        var totvist=json_dcrcsd;          
        viewicon='<button class="col button btn-goutline button-small color-gray text-uppercase font-9 mt-5 float-right" onclick="openFieldVisit('+csd_id+','+"'"+comp_name+"'"+')"><i class="fa fa-eye font-16 color-grey fw-600"></i> <span class="redtxt">('+totvist+') </span></button>';
      }
      $("#view_"+rowid).html(viewicon);      
      app.preloader.hide();      
    }
  });
} 
function openFieldVisit(csd_id,comp_name){
  checkConnection();
  chkStatusAndPwd();
  mainView.router.navigate("/view_visit/");
  app.preloader.show();  
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var visitdetails='';
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/viewVisit',
    data:{'csd_id':csd_id},
    success:function(visit_res){
      var block = '<div class=""><div class="col-100"><div class="grey-txt fw-600"><h3>'+comp_name+' </h3></div></div></div>';
      $("#compdetails").html(block);
      var res = $.parseJSON(visit_res);
      var result = res.result;
      var present = res.present;
      var problem = res.problem;
      var visit = res.visit;
      var head_attach = res.head_attach;
      //  
     // var vpnm = res.vpnm;
     // console.log(vpnm);

      //var feeddetDiv='<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Name Of Company - कंपनी का नाम</div><div class="item-cell text-grey font-14">'+comp_name+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Site Address - साइट का पता</div><div class="item-cell text-grey font-14">'+site_add+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Contact Person - संपर्क व्यक्ति</div><div class="item-cell text-grey font-14">'+cont_person+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Designation - ओहदा</div><div class="item-cell text-grey font-14">'+per_desig+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Service Quality - (सेवा की गुणवत्ता)</div><div class="item-cell text-grey font-14">'+ser+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Response Time - (जवाब देने का समय)</div><div class="item-cell text-grey font-14">'+resp+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Behaviour of person Deputed - (व्यक्ति का व्यवहार निर्भर)</div><div class="item-cell text-grey font-14">'+behave+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Complaint Handling - (शिकायत देखभाल)</div><div class="item-cell text-grey font-14">'+cmpln+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Price - (क़ीमत)</div><div class="item-cell text-grey font-14">'+prc+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Documentation - (प्रलेखन)</div><div class="item-cell text-grey font-14">'+doc+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Overall Performance - (सम्पूर्ण प्रदर्शन)</div><div class="item-cell text-grey font-14">'+perform+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Any other suggetions for improvment - सुधार के लिए कोई अन्य सुझाव</div><div class="item-cell text-grey font-14">'+fb_suggetion+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Feedback Form Copy - फीडबैक फॉर्म कॉपी</div><div class="item-cell text-grey font-14"><a class="link external orange-txt text-uppercase linkspace poweredby font-10" href="'+base_url+feedback_attach+'" target="_system">'+feedback_attach+'</a></div></div></div></li>';

      //var visitdetails='<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"></div></li>';
      var res_length = result.length;
      if(res_length > 0){
        var k=1;
        for(var i=0;i<res_length;i++){
          var fv_create_on = result[i].fv_create_on;
          var fv_dateTime = result[i].fv_dateTime;
          var fv_person = result[i].fv_person;
          var vp = result[i].fv_purpose;
          var split_vp = vp.split("|");
          if(vp==10){
            var cls= 'display-block';
          }else{
            var cls = 'display-none';
          }
          var fv_purreason = result[i].fv_purreason;
          var fv_remark = result[i].fv_remark;
          var fv_headcount = result[i].fv_headcount;           
          var fv_required = result[i].fv_required;
          var split_fvreq = fv_required.split("|");
          var fv_present = result[i].fv_present;
          var split_fvpres = fv_present.split("|");
          var fv_absent = result[i].fv_absent;
          var split_abs = fv_absent.split("|");
          var fv_new = result[i].fv_new;
          var split_new = fv_new.split("|");
          var fv_vacant = result[i].fv_vacant;
          var split_vac = fv_vacant.split("|");
          var fv_ot = result[i].fv_ot;
          var split_ot = fv_ot.split("|");
          var fv_remarkhead = result[i].fv_remarkhead;
          var split_remhead = fv_remarkhead.split("|");
          var fv_position = result[i].fv_position;
          var split_pos = fv_position.split("|");

          var fv_presentation = result[i].fv_presentation;
          var split_presnt = fv_presentation.split("|");
          //alert(fv_presentation+"^^^^^^^^"+split_presnt.length);  
          var fv_present_txt = result[i].fv_present_txt;
          var split_ptxt = fv_present_txt.split("|");
          
          var fv_problem = result[i].fv_problem;
          var split_fvprob = fv_problem.split("|");
          var fv_problm_txt = result[i].fv_problm_txt;
          var split_prtxt = fv_problm_txt.split("|");

          var fv_patrollling = result[i].fv_patrollling;
          var fv_newjoinee = result[i].fv_newjoinee;
 
          //<div class="block">Headcount<span class="ml-1 redtxt fw-500 headcnts">(3)</span></div>//
          visitdetails+='<div class="light-orange mb-5"><div class="accordion-item accordion-item-opened"><a href="#" class="item-content item-link"><div class="col-66"><div class="item-inner"><div class="item-title grey-txt font-12 fw-500">Visit - '+k+'</div></div></div><div class="col-33"><span class="float-right mr-10 grey-txt font-12 fw-500">'+fv_dateTime+'</span></div></a><div class="accordion-item-content nobgclr elevation-10" style="height: auto;"><ul class="block p-2"><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Person Name</div><div class="item-cell text-grey font-14">'+fv_person+'</div></div></div></li>  <li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Person Visit Purpose</div><div class="item-cell text-grey font-14">';
          if(vp!='10'){ 
            for(var p=0;p<visit.length;p++){
              var vp_id = visit[p].vp_id;
              var vp_name = visit[p].vp_name;
              for(var r=0;r<split_vp.length;r++){
                var exp_purpose = split_vp[r];
                if(vp_id==exp_purpose){
                  visitdetails+=vp_name+", ";
                }
              }
            }
          } 
          visitdetails+='</div></div></div></li>  <li class="item-link item-content '+cls+'"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Reason</div><div class="item-cell text-grey font-14">'+fv_purreason+'</div></div></div></li> <li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Remarks</div><div class="item-cell text-grey font-14">'+fv_remark+'</div></div></div></li> ';

          $(".page-content").after('<div class="popup popup-visit_'+i+'"><div class="block"><p><a class="link popup-close text-uppercase fw-500 text-parrot" href="#">Close</a></p><div id="visitattach_'+i+'"></div></div></div>');  
          var fv_visit_attach = result[i].app_visit_attach;  
          //console.log(fv_visit_attach);
          if(fv_visit_attach!=''){    
            //console.log("if");
            var visit_attachment = base_url+fv_visit_attach;
            visitdetails+='<a class="button popup-open text-parrot" href="#" data-popup=".popup-visit_'+i+'">Visit Attachment</a>'; 
            var visit_attach='<img src="'+visit_attachment+'" height=325 width=325 />';
          }else{      
            //console.log("ELSE");   
            visitdetails+='';
            var visit_attach='';        
          }
          $("#visitattach_"+i).html(visit_attach);     
          visitdetails+='<li class="item-link item-content tr-border"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell redtxt font-14 fw-600 ">Headcounts</div>';

          $(".page-content").after('<div class="popup popup-hcnt_'+i+'"><div class="block"><p><a class="link popup-close text-uppercase fw-500 text-parrot" href="#">Close</a></p><div id="headattach_'+i+'"></div></div></div>'); 
          //console.log("LENGTH"+head_attach[i]);         
          //console.log("*****"+head_attach[i].fd_attach);           
          // var headcnt_attach = head_attach[i].fd_attach_val;  
          if(head_attach[i]!=undefined){ 
          var fd_attach_val =head_attach[i].fd_attach;             
            if(fd_attach_val!=''){ 
              var head_attachment = base_url+fd_attach_val;
              visitdetails+='<a class="button button-fill color-gray popup-open font-9 txtover-init w-100" href="#" data-popup=".popup-hcnt_'+i+'">Attachment</a>';
              var hd_attach='<img src="'+head_attachment+'" height=325 width=325 />';  
            }else if(fd_attach_val==''){  
              visitdetails+='';
              var hd_attach='';   
            }   
          }     
          visitdetails+='</li>';   
          $("#headattach_"+i).html(hd_attach);  
            
            for(var j=0;j<split_fvreq.length;j++){ 
              visitdetails+='<li class="item-link item-content tr-border"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600"><div class="font-12">'+split_pos[j]+'</div></div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Total Strength</div><div class="item-cell text-grey font-14">'+split_fvreq[j]+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Present</div><div class="item-cell text-grey font-14">'+split_fvpres[j]+'</div></div></div></li> <li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Absent</div><div class="item-cell text-grey font-14">'+split_abs[j]+'</div></div></div></li> <li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">New</div><div class="item-cell text-grey font-14">'+split_new[j]+'</div></div></div></li> <li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Vacant</div><div class="item-cell text-grey font-14">'+split_vac[j]+'</div></div></div></li> <li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">OT</div><div class="item-cell text-grey font-14">'+split_ot[j]+'</div></div></div></li> <li class="item-link item-content tr-border"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Remarks</div><div class="item-cell text-grey font-14">'+split_remhead[j]+'</div></div></div></li>';  
            }
            //alert(present.length + "------"+split_presnt.length);   
            if(fv_presentation!=''){
              visitdetails+='<li class="item-link item-content tr-border"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell redtxt font-14 fw-600 ">Presentation</div></li>';
            }        
            for(var a=0;a<split_presnt.length;a++){ 
              for(var b=0;b<present.length;b++){
                var ap_id = present[b].ap_id;  
                var ap_name = present[b].ap_name; 
                if(ap_id==split_presnt[a]){   
                  visitdetails+='<li class="item-link item-content tr-border"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600" ><label class="item-checkbox item-content text-left label-width" ><input type="checkbox" name="presantation[]" value="'+ap_id+'" checked><i class="icon icon-checkbox mr-5"></i><span class="">'+ap_name+'</span></label></div><div class="item-cell text-grey font-14">'+split_ptxt[b]+'</div></div></div></li>';
                }                
              }
            } 
            if(fv_problem!=''){
              visitdetails+='<li class="item-link item-content tr-border"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell redtxt font-14 fw-600 ">Personal Problems</div></li>';
              for(var y=0;y<split_fvprob.length;y++){
                for(var z=0;z<problem.length;z++){
                  var apr_id = problem[z].apr_id;
                  var apr_name = problem[z].apr_name;
                  if(apr_id==split_fvprob[y]){  
                    visitdetails+='<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600"><label class="item-checkbox item-content text-left label-width"><input type="checkbox" name="personal_probs[]" value="'+apr_id+'" checked><i class="icon icon-checkbox mr-5"></i>'+apr_name+'</label></div><div class="item-cell text-grey font-14">'+split_prtxt[z]+'</div></div></div></li>';
                  }
                }
              }
            }
            visitdetails+='<li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Observation During Patrolling</div><div class="item-cell text-grey font-14">'+fv_patrollling+'</div></div></div></li>  <li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">New Joinee Documents Collected</div><div class="item-cell text-grey font-14">'+fv_newjoinee+'</div></div></div></li>';

          visitdetails+=' </ul></div> </div></div>';
          k++;
        }
      } 

      $("#viewVisit").html(visitdetails);
      app.preloader.hide();
    }
  });  
}
function Add_FieldVisit(csd_id,comp_name){
  checkConnection();
  chkStatusAndPwd();
  mainView.router.navigate("/add_visit/");
  app.preloader.show();  
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var vst='';
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/addVisit',
    data:{'uid':session_uid,'session_ulevel':session_ulevel,'csd_id':csd_id}, 
    success:function(visit_res){
      var block = '<div class="block"><div class="col-100"><div class="grey-txt fw-600"><h3>'+comp_name+' </h3></div></div></div>';
      $("#compdetails").html(block);
      var visitsel = $.parseJSON(visit_res);
      var visit = visitsel.visit;
      var company = visitsel.company;
      var presnt = visitsel.present;
      var problem = visitsel.problem;
      var headcnts = company[0].csd_head_cnt;
      var positn = company[0].csd_head_position;
      var lid = company[0].l_id;
      var cs_id = company[0].cs_id;
      $("#csd_id").val(csd_id);
      $("#l_id").val(lid);
      $("#csd_head_cnt").val(headcnts);
      $("#cs_id").val(cs_id);
      var pos = [];
      var hdcnt_acr='';
      vst='<option value="">---SELECT---</option>';
      for(var i=0;i<visit.length;i++){
        var vp_id = visit[i].vp_id;
        var vp_name = visit[i].vp_name;
        var vp_hindi = visit[i].vp_hindi;
        vst+='<option value='+vp_id+'>'+vp_name+" - "+vp_hindi+'</option>';
      }
      $("#visit_purpos").html(vst);
      $(".headcnts").html("("+headcnts+")");
      if(positn!=''){
        var split_pos = positn.split("|");
        var k=1;
        var acc_title = '';
        var pos_string = '';
        var req_val = '';
        var posin = '';
        for(var j=0;j<split_pos.length;j++){
          acc_title=split_pos[j];
          pos_string = acc_title.split("-->");
          req_val = pos_string[0]; 
          posin = pos_string[1];
          hdcnt_acr+='<li class="accordion-item light-orange accordion-item-opened mb-5"><div class="accordion-item-content light-orange  elevation-1" style="height: auto;"><a class="item-content item-link grey-txt fw-500" href="#"><div class="item-inner"><div class="item-title font-12 col-50 grey-txt fw-500">'+acc_title+'</div><div class="float-right font-12">[Required:&nbsp;<span class="badge color-parrot">'+req_val+'</span> ]<input type="hidden" name="required[]" id="required" value="'+req_val+'"/><input type="hidden" name="position[]" id="position" value="'+acc_title+'"/></div></div></a></div><div class="accordion-item-content nobgclr elevation-5 "><div class="row"><div class="col-50"><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Present<sup class="redtxt fw-600 ml-1 font-12">*</sup></div><div class="item-input-wrap"><input type="number" class="form-txtbox p-2" name="present[]" id="present_'+j+'" /></div></div></div><div class="block"><span id="present_msg_'+j+'" class="redtxt font-10 valmsg"></span></div></div><div class="col-50"><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Absent<sup class="redtxt fw-600 ml-1 font-12">*</sup></div><div class="item-input-wrap"><input type="number" class="form-txtbox p-2" name="absent[]" id="absent_'+j+'"/></div></div></div><div class="block"><span id="absent_msg_'+j+'" class="redtxt font-10 valmsg"></span></div></div></div><div class="row"><div class="col-33"><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">New<sup class="redtxt fw-600 ml-1 font-12">*</sup></div><div class="item-input-wrap"><input type="number" class="form-txtbox p-2" name="new[]" id="new_'+j+'"/></div></div></div><div class="block"><span id="new_msg_'+j+'" class="redtxt font-10 valmsg"></span></div></div><div class="col-33"><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Vacant<sup class="redtxt fw-600 ml-1 font-12">*</sup></div><div class="item-input-wrap"><input type="number" class="form-txtbox p-2" name="vacant[]" id="vacant_'+j+'"/></div></div></div><div class="block"><span id="vacant_msg_'+j+'" class="redtxt font-10 valmsg"></span></div></div><div class="col-33"><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">OT<sup class="redtxt fw-600 ml-1 font-12">*</sup></div><div class="item-input-wrap"><input type="number" class="form-txtbox p-2" name="OT[]" id="OT_'+j+'" /></div></div></div><div class="block"><span id="ot_msg_'+j+'" class="redtxt font-10 valmsg"></span></div></div></div><div class="item-content item-input col-100"><div class="item-inner"><div class="item-title item-label form-label">Remark - टिप्पणी</div><div class="item-input-wrap"><textarea name="remark_head[]" id="remark_head" class="form-txtbox p-2"></textarea></div></div></div><input autocomplete="off" type="hidden" name="posin[]" value="'+posin+'" ><div class="row"><div class="col-50"><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">New Requirement</div><div class="item-input-wrap"><input type="number" class="form-txtbox p-2" name="qty[]" /></div></div></div></div><div class="col-50"><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Period</div><div class="item-input-wrap"><select class="form-txtbox form-label p-2 font-12" name="period[]" id="period_'+j+'" onchange="setValue(this.value,'+j+')"><option value="">---SELECT---</option><option value="Temporary" >Temporary days</option><option value="Permanent">Permanent days</option></select></div></div></div></div></div><div class="display-none Datefrom_'+j+'" ><div class="row"><div class="col-33 w-30"><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">From Day</div><div class="item-input-wrap"><select name="from_dt[]" id="from_dt_'+j+'" class="form-txtbox form-label p-2" ><option value=""></option>'; 
            for(var k=1;k<=31;k++){ 
              if(k<=9){ 
                k="0"+k;
              }else{
                k=k;  
              }
              hdcnt_acr+='<option value="'+k+'">'+k+'</option>';
            } 
          hdcnt_acr+='</select><span id="fromdt_msg_'+j+'" class="redtxt font-10 valmsg"></span></div></div></div></div><div class="col-33 w-40"><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">From Month</div><div class="item-input-wrap"><select name="from_mnth[]" id="from_mnth_'+j+'" class="form-txtbox form-label p-2" ><option value=""></option>';
          var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];            
          for(var h=0;h<monthNames.length;h++){
            hdcnt_acr+='<option value="'+(h+1)+'">'+monthNames[h]+'</option>';
          }
          hdcnt_acr+='</select><span id="frommnth_msg_'+j+'" class="redtxt font-10 valmsg"></span></div></div></div></div><div class="col-33 w-30"><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">From Year</div><div class="item-input-wrap"><select name="from_yr[]" id="from_yr_'+j+'" class="form-txtbox form-label p-2" ><option value=""></option>';
            var currentDate = new Date()
            var curr_year = currentDate.getFullYear();
            var add_years = curr_year + parseInt(2);
            for(var m=1950;m<=add_years;m++){
              hdcnt_acr+='<option value="'+m+'">'+m+'</option>';
            }
          hdcnt_acr+='</select><span id="fromyr_msg_'+j+'" class="redtxt font-10 valmsg"></span></div></div></div></div></div>   <div class="row"><div class="col-33 w-30"><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">To Day</div><div class="item-input-wrap"><select name="to_dt[]" id="to_dt_'+j+'" class="form-txtbox form-label p-2" ><option value=""></option>';
          for(var k1=1;k1<=31;k1++){
            if(k1<=9){
              k1="0"+k1;
            }else{
              k1=k1;
            }
            hdcnt_acr+='<option value="'+k1+'">'+k1+'</option>';
          } 
          hdcnt_acr+='</select><span id="todt_msg_'+j+'" class="redtxt font-10 valmsg"></span></div></div></div></div><div class="col-33 w-40"><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">To Month</div><div class="item-input-wrap"><select name="to_mnth[]" id="to_mnth_'+j+'" class="form-txtbox form-label p-2" ><option value=""></option>';
          var monthNames_to = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];            
          for(var h1=0;h1<monthNames_to.length;h1++){
            hdcnt_acr+='<option value="'+(h1+1)+'">'+monthNames_to[h1]+'</option>';
          }
          hdcnt_acr+='</select><span id="tomnth_msg_'+j+'" class="redtxt font-10 valmsg"></span></div></div></div></div><div class="col-33 w-30"><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">To Year</div><div class="item-input-wrap"><select name="to_yr[]" id="to_yr_'+j+'" class="form-txtbox form-label p-2" ><option value=""></option>';
            var currentDate_to = new Date()
            var curr_year_to = currentDate_to.getFullYear();
            var add_years_to = curr_year_to + parseInt(2);
            for(var m1=1950;m1<=add_years_to;m1++){
              hdcnt_acr+='<option value="'+m1+'">'+m1+'</option>';
            }
          hdcnt_acr+='</select><span id="toyr_msg_'+j+'" class="redtxt font-10 valmsg"></span></div></div></div></div></div>         </div></div></li>'; 
          if(j==(split_pos.length-1)){
            hdcnt_acr+='<li class="item-content item-input showtwoBlocks "><div class="item-inner"><span class="item-title item-label form-label mb-15">Attachment - आसक्ति</span><div class="item-input-wrap"><div class="uploadDiv w-100 "><div class="col-100"><div class="row"><div class="20"></div><div class="col-50 picbox text-white" ><span onclick="capturePhoto_activity();" ><div class="innerDiv"><img src="img/icons/photo-camera-1.png" height="30" width="30" /><br/><span class="picbox-text">Capture</span></span></div></div><div class="col-50 picbox text-white" ><a onclick="getPhoto_activity(pictureSource.PHOTOLIBRARY);"><div class="innerDiv"><img src="img/icons/gallery.png" height="30" width="30" /><br/><span class="picbox-text">Photo Gallery</span></div></a></div><div class="20"></div></div></div></div></div></li><li class="item-content item-input imageblock_act display-block" style="width:100%;" id="imageblock_act"><div class="item-inner"><div class="item-input-wrap"><img id="image_activity" src="" style="width:100%;"></div></div></li>  <li><div class="item-content item-input"><div class="item-inner"><div class="item-input-wrap"><div class="row mt-10"><div class="col-33"><button type="button" class="col button btn-goutline button-small button-outline  fw-500 float-left" name="back1" id="back1" onclick="gobackDiv1()">Previous</button></div><div class="col-33"><button type="button" class="col button btn-goutline button-small button-outline  fw-500 float-right" name="next1" id="next1" onclick="getReqfields2('+j+')">Next</button></div></div></div></div></div></li>';
          }
          k++; 
        }        
        $("#head_cnts").html(hdcnt_acr);
      }
      // ------------------------------- P R E S E N T A T I O N --------------------------------- //
      var present_div='';
      for(var a=0;a<presnt.length;a++){
        var ap_id = presnt[a].ap_id;
        var ap_name = presnt[a].ap_name;
        var ap_hindi = presnt[a].ap_hindi;
        var pre_name = ap_name+" - "+ap_hindi;
        present_div+='<div class="w-100 mt-5"><div class="light-orange w-15 d-inline mr-5 mt-0 float-left mb-1" ><label class="item-checkbox item-content"><input type="checkbox" name="presantation[]" value="'+ap_id+'"><i class="icon icon-checkbox"></i></label></div><div class="light-orange w-80 d-inline mb-1"><div class="accordion-item accordion-item-opened"><a href="#" class="item-content item-link"><div class="item-inner"><div class="item-title grey-txt font-12 fw-500">'+pre_name+'</div></div></a><div class="accordion-item-content nobgclr elevation-10"><div class="block p-2"><input type="text" name="present_txt[]" id="present_txt" class="form-txtbox p-2"/></div></div></div></div> <div>';
      }      
      present_div+='<li><div class="item-content item-input"><div class="item-inner"><div class="item-input-wrap"><div class="row mt-10"><div class="col-33"><button type="button" class="col button btn-goutline button-small button-outline  fw-500 float-left" name="back1" id="back1" onclick="gobackDiv2()">Previous</button></div><div class="col-33"><button type="button" class="col button btn-goutline button-small button-outline  fw-500 float-right" name="next1" id="next1" onclick="getReqfields3()">Next</button></div></div></div></div></div></li>';
      $("#presentation").html(present_div);

      // ------------------------------ P E R S O N A L  P R O B L E M ---------------------------- //
      var pers_prob = '';
      for(var b=0;b<problem.length;b++){
        var apr_id = problem[b].apr_id;
        var apr_name = problem[b].apr_name;
        var apr_hindi = problem[b].apr_hindi;
        var prob_name = apr_name+" - "+apr_hindi;
        pers_prob+='<div class="w-100 mt-5"><div class="light-orange w-15 d-inline mr-5 mt-0 float-left mb-1" ><label class="item-checkbox item-content"><input type="checkbox" name="problems[]" value="'+apr_id+'"><i class="icon icon-checkbox"></i></label></div><div class="light-orange w-80 d-inline mb-1"><div class="accordion-item accordion-item-opened"><a href="#" class="item-content item-link"><div class="item-inner"><div class="item-title grey-txt font-12 fw-500">'+prob_name+'</div></div></a><div class="accordion-item-content nobgclr elevation-10"><div class="block p-2"><input type="text" name="problem_txt[]" id="problem_txt" class="form-txtbox p-2"/></div></div></div></div> <div>';
      }              
      pers_prob+='<li><div class="block"><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">Observation During Patrolling - <br/> पैट्रोलिंग के दौरान अवलोकन</div><div class="item-input-wrap"><textarea name="patrolling" id="patrolling" class="form-txtbox p-2"></textarea></div></div></div><div class="item-content item-input"><div class="item-inner"><div class="item-title item-label form-label">New Joinee Documents Collected - <br/> नए जोइन दस्तावेज एकत्रित किए गए</div><div class="item-input-wrap"><textarea name="new_joinee" id="new_joinee" class="form-txtbox p-2"></textarea></div></div></div></div></li>     <li class="item-content item-input showtwoBlocks_visitattach "><div class="item-inner"><span class="item-title item-label form-label mb-15">Visit Attachment - मुलाक़ात आसक्ति</span><div class="item-input-wrap"><div class="uploadDiv_visit w-100 "><div class="col-100"><div class="row"><div class="20"></div><div class="col-50 picbox text-white" ><span onclick="capturePhoto_activityVisit();" ><div class="innerDiv"><img src="img/icons/photo-camera-3.png" height="30" width="30" /><br/><span class="picbox-text">Capture</span></span></div></div><div class="col-50 picbox text-white" ><a onclick="getPhoto_activityVisit(pictureSource.PHOTOLIBRARY);"><div class="innerDiv"><img src="img/icons/gallery-2.png" height="30" width="30" /><br/><span class="picbox-text">Photo Gallery</span></div></a></div><div class="20"></div></div></div></div></div></li><li class="item-content item-input imageblock_actVisit display-block" style="width:100%;" id="imageblock_actVisit"><div class="item-inner"><div class="item-input-wrap"><img id="image_activity_visit" src="" style="width:100%;"></div></div></li>              <li><div class="item-content item-input"><div class="item-inner"><div class="item-input-wrap"><div class="row mt-10"><div class="col-33"><button type="button" class="col button btn-goutline button-small button-outline  fw-500 float-left" name="back2" id="back2" onclick="gobackDiv3()">Previous</button></div><div class="col-33"><button type="button" class="col button btn-goutline button-small button-outline  fw-500 float-right" name="next2" id="next2" onclick="getReqfields4()">Next</button></div></div></div></div></div></li>';
      $("#personal_probs").html(pers_prob);  

      // ------------------------------ C O L L E C T E D  D O C U M E N T S ---------------------------- //
      var coll_docs='';
      var docdiv='';
      var candlist=''; 
      var cs_id = company[0].cs_id;
      $.ajax({ 
        type:'POST', 
        url:base_url+'liveappcontroller/getDocdata',
        data:{'cs_id':cs_id}, 
        success:function(doc_res){
          var docslist = $.parseJSON(doc_res);
          var docs = docslist.docs;
          //console.log(docs);
          //console.log(docs.length);
          if(docs.length > 0){
            docdiv+='<span class="redtxt text-uppercase font-12">collected documents for candidate ('+docs.length+')</span>';
            $(".colldoc").html(docdiv);
            var y=1;
            for(var z=0;z<docs.length;z++){ 
              var cand_id = docs[z].cand_id;
              var cand_fname = docs[z].cand_fname;
              candlist+='<div class="light-orange mb-5"><div class="accordion-item accordion-item-opened"><a href="#" class="item-content item-link"><div class="item-inner"><div class="item-title grey-txt font-12 fw-500">'+y+'. '+cand_fname+'</div><input type="hidden" name="cand_id[]" value="'+cand_id+'"></div></a><div class="accordion-item-content nobgclr elevation-10"><div class="block p-2">';
                getCandDocs(cand_id,z);                
                y++;
                candlist+='<div id="aadhar_chk_'+z+'"></div> <div id="cancelled_chq_'+z+'"></div> <div id="bankpass_'+z+'"></div>  <div id="emppic_'+z+'"></div>  <div id="empresum_'+z+'"></div> <div id="empelectcard_'+z+'"></div> <div id="empleaving_'+z+'"></div> <div id="mrksheet_'+z+'"></div> </div></div></div></div>';
                $("#cand_docs").html(candlist);
            }
          }
        }
      });
    coll_docs+='<li><div class="item-content item-input"><div class="item-inner"><div class="item-input-wrap"><div class="row mt-10"><div class="col-33"><button type="button" class="col button btn-goutline button-small button-outline  fw-500 float-left" name="back1" id="back1" onclick="gobackDiv5()">Previous</button></div><div class="col-33"><button type="button" class="col button button form-btn text-white button-outline float-right" name="save" id="save" onclick="saveDailyActivity()">submit</button></div></div></div></div></div></li>';
    $("#collect_docs").html(coll_docs);
    app.preloader.hide();  
    }
  });
}
// ********************************************************************************************* //
function capturePhoto_activityVisit() { 
  //alert("capturePhoto_activity");
  navigator.camera.getPicture(onPhotoDataSuccVisit, onFail, {
  quality: 100,
  targetWidth: 600,
  targetHeight: 600,
  destinationType: destinationType.FILE_URI,
  saveToPhotoAlbum: false,
  correctOrientation: true,
  }); 
}
function onPhotoDataSuccVisit(imageURI){
  var cameraImage = document.getElementById('image_activity_visit');
  //alert(cameraImage+"-------"+imageURI);
  cameraImage.style.display = 'block';
  cameraImage.src = imageURI;
}

function getPhoto_activityVisit(source) {
  //alert("called getPhoto_activity"); 
  navigator.camera.getPicture(onPhotoURISuccVisit, onFail, {
    quality: 100,
    correctOrientation: 1,
    targetWidth: 600,
    targetHeight: 600,
    destinationType: destinationType.FILE_URI,
    sourceType: source
  });
} 
function onPhotoURISuccVisit(imageURI) {
  var galleryImage = document.getElementById('image_activity_visit');
  //alert(galleryImage+"^^^^^^"+imageURI);
  galleryImage.style.display = 'block';
  galleryImage.src = imageURI;
}
// ********************************************************************************************* //






function capturePhoto_activity() { 
  //alert("capturePhoto_activity");
  navigator.camera.getPicture(onPhotoDataSucc, onFail, {
  quality: 100,
  targetWidth: 600,
  targetHeight: 600,
  destinationType: destinationType.FILE_URI,
  saveToPhotoAlbum: false,
  correctOrientation: true,
  }); 
}
function onPhotoDataSucc(imageURI){
  var cameraImage = document.getElementById('image_activity');
  //alert(cameraImage+"-------"+imageURI);
  cameraImage.style.display = 'block';
  cameraImage.src = imageURI;
}

function getPhoto_activity(source) {
  //alert("called getPhoto_activity"); 
  navigator.camera.getPicture(onPhotoURISucc, onFail, {
    quality: 100,
    correctOrientation: 1,
    targetWidth: 600,
    targetHeight: 600,
    destinationType: destinationType.FILE_URI,
    sourceType: source
  });
} 
function onPhotoURISucc(imageURI) {
  var galleryImage = document.getElementById('image_activity');
  //alert(galleryImage+"^^^^^^"+imageURI);
  galleryImage.style.display = 'block';
  galleryImage.src = imageURI;
}
function saveDailyActivity(){
  //alert("called")
  checkConnection(); 
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var add_acti_from = $(".add_acti").serialize();
  //console.log(add_acti_from); 
  var session_uid = window.localStorage.getItem("session_uid");
  var old_doc_act = 'NULL';
  var old_doc_visit = 'NULL';
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/addDailyActivity',
    data:add_acti_from+"&session_uid="+session_uid,
    success:function(save_result){
      //alert("^^^^"+save_result);  
      var res = $.parseJSON(save_result);
      var res_fdid = res.fd_id; 
      var res_fvid = res.fv_id;  
      //alert("res_fdid = "+res_fdid+"^^^^res_fvid="+res_fvid);  
      /*upload_doc_activity(save_result,old_doc_act);
      upload_doc_activityVisit(save_result,old_doc_visit);*/
      upload_doc_activity(res_fdid,old_doc_act);
      upload_doc_activityVisit(res_fvid,old_doc_visit);
      mainView.router.navigate("/field_visit/"); 
    }
  });
  app.preloader.hide();
}
function upload_doc_activityVisit(insert_id,old_doc_visit){ 
  //alert("Upload function "+insert_id);
  var session_uid = window.localStorage.getItem("session_uid");
  var img = document.getElementById('image_activity_visit'); 
  //app.dialog.preloader('Uploading....');
  var imageURI = img.src;
  //alert("imageURI "+imageURI);
  var options = new FileUploadOptions();
  options.fileKey="file";
  options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
  options.mimeType="image/jpeg";
  options.chunkedMode = false;
  options.headers = {
     Connection: "close"
  };
  var params = {};
  params.fullpath =imageURI;
  params.name = options.fileName;
  var imgfilename = params.name; 
  //alert("imgfilename :: "+imgfilename);
  var split_imgfilename = imgfilename.split("?");
  var actual_imgname = split_imgfilename[0];
  var ft = new FileTransfer(); 
  //var uploadControllerURL = base_url+"liveappcontroller/photoupload_activityVisit/"+session_uid+"/"+insert_id+"/"+old_doc_visit+"/"+imgfilename; 
  var uploadControllerURL = base_url+"liveappcontroller/photoupload_activityVisit/"+session_uid+"/"+insert_id+"/"+old_doc_visit+"/"+actual_imgname;  
  //alert(uploadControllerURL);
  ft.upload(imageURI,uploadControllerURL, win, fail, options,true);
}
function upload_doc_activity(insert_id,old_doc){  
 // alert("Upload function "+insert_id);
  var session_uid = window.localStorage.getItem("session_uid");
  var img = document.getElementById('image_activity'); 
  //app.dialog.preloader('Uploading....');
  var imageURI = img.src;
  //alert("imageURI "+imageURI);
  var options = new FileUploadOptions();
  options.fileKey="file";
  options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
  options.mimeType="image/jpeg";
  options.chunkedMode = false;
  options.headers = {
     Connection: "close" 
  };
  var params = {}; 
  params.fullpath =imageURI;
  params.name = options.fileName;
  var imgfilename = params.name; 
  //alert("imgfilename :: "+imgfilename);
  var split_imgfilename = imgfilename.split("?");
  var actual_imgname = split_imgfilename[0];
  var ft = new FileTransfer();
  var uploadControllerURL = base_url+"liveappcontroller/photoupload_activity/"+session_uid+"/"+insert_id+"/"+old_doc+"/"+imgfilename; 
  //alert(uploadControllerURL);
  ft.upload(imageURI,uploadControllerURL, win, fail, options,true);
}
 
function getCandDocs(cand_id,rowid){
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/candDocs',
    data:{'cand_id':cand_id}, 
    success:function(cand_docs){ 
      var doccand = $.parseJSON(cand_docs);
      var canddocs1 = doccand.docscandi; 
      var len = canddocs1.length;       
      //if(len > 0){                      
        var aadhar =  canddocs1[0].cd_doc_aadharcard;    
        var chkbook = canddocs1[0].cd_doc_cheqe;
        var passbook = canddocs1[0].cd_doc_passbook;
        var empphoto = canddocs1[0].cd_doc_photo;
        var resume = canddocs1[0].cd_doc_resume;
        var election_card = canddocs1[0].cd_doc_election;
        var leaving_certi = canddocs1[0].cd_doc_leavingcerti;
        var marksheet = canddocs1[0].cd_doc_marksheet;

        // AADHAR CARD // 
        if(len > 0 && aadhar == 1){          
        }else{
          $("#aadhar_chk_"+rowid).html('<div class="block mb-5"><label class="checkbox"><input type="checkbox" name="aadhar_'+cand_id+'[]" value="1"><i class="icon icon-checkbox"></i></label><span class="ml-5">Aadhar Card</span></div>');
        }
        if(len == 0){
          var datachk='display-block';
        }else{
          if(chkbook == 1 || passbook == 1){ 
            var datachk='display-none';
          }else{
            var datachk='display-block';
          }
        } 
        // CHEQUE BOOK //
        $("#cancelled_chq_"+rowid).html('<div class="block mb-5 '+datachk+'""><label class="checkbox"><input type="checkbox" name="cheqe_'+cand_id+'[]" value="1" class="onlyone_chkbox" id="1" onclick="selectOnlyThis(this.id)" ><i class="icon icon-checkbox"></i></label><span class="ml-5">Cancelled Cheque</span></div>');

        // BANK PASS BOOK //
        $("#bankpass_"+rowid).html('<div class="block mb-5 '+datachk+'"><label class="checkbox"><input type="checkbox" name="bank_'+cand_id+'[]" value="1" class="onlyone_chkbox" id="2" onclick="selectOnlyThis(this.id)" ><i class="icon icon-checkbox"></i></label><span class="ml-5">Bank Pass Book First Page</span></div>');  
     
        // EMPLOYEE PHOTO //
        if(len > 0 && empphoto == 1){           
        }else{
          $("#emppic_"+rowid).html('<div class="block mb-5"><label class="checkbox"><input type="checkbox" name="photo_'+cand_id+'[]" value="1"><i class="icon icon-checkbox"></i></label><span class="ml-5">Employee Photo </span></div>');
        }

        // RESUME //
        if(len > 0 && resume == 1){
        }else{
          $("#empresum_"+rowid).html('<div class="block mb-5"><label class="checkbox"><input type="checkbox" name="resume_'+cand_id+'[]" value="1"><i class="icon icon-checkbox"></i></label><span class="ml-5">Resume</span></div>');
        }

        // ELECTION CARD //
        if(len > 0 && election_card == 1){
        }else{
          $("#empelectcard_"+rowid).html('<div class="block mb-5"><label class="checkbox"><input type="checkbox" name="election_'+cand_id+'[]" value="1"><i class="icon icon-checkbox"></i></label><span class="ml-5">Election Card</span></div>');
        }
        // SCHOOL LEAVING CERTIFICATE //
        if(len > 0 && leaving_certi == 1){
        }else{
          $("#empleaving_"+rowid).html('<div class="block mb-5"><label class="checkbox"><input type="checkbox" name="leaving_'+cand_id+'[]" value="1"><i class="icon icon-checkbox"></i></label><span class="ml-5">School Leaving Certificate</span></div>');
        }
        // MARKSHEET //
        if(len > 0 && marksheet == 1){ 
        }else{
          $("#mrksheet_"+rowid).html('<div class="block mb-5"><label class="checkbox"><input type="checkbox" name="mark_'+cand_id+'[]" value="1"><i class="icon icon-checkbox"></i></label><span class="ml-5">Marksheet Copy</span></div>');    
        }
    }
  });
} 
function selectOnlyThis(id) { 
    for (var i = 1;i <= 2; i++){
        document.getElementById(i).checked = false;
    }
    document.getElementById(id).checked = true;
}  
/*
function onlyone_chk(obj){    
  alert("called");       
  //$('.onlyone_chkbox').not(this).prop('checked', false);  
  if($(obj).is(":checked")) { 
  $(obj).addAttr("checked");       
    alert("called****^^^^^^^^^ ");      
      $(".onlyone_chkbox").not($(this)).each(function () {
        console.log("hi"); 
          //$(this).removeAttr("checked");
          $(obj).removeAttr("checked");  
      }) 
  }
}       
*/
//$('input.onlyone_chkbox').on('change', function() {
/*function onlyone_chk(){   
  alert("called--*******"); 
    $('input.onlyone_chkbox').not(this).prop('checked', false);   
} */

/*$(".onlyone_chk").click(function() {
    alert("called"); 
    $(this).siblings('input:checkbox').prop('checked', false);
});*/
  

function setValue(val,rowid) {
  if(val == 'Temporary') {
    $('.Datefrom_'+rowid).removeClass('display-none');
    $('.Datefrom_'+rowid).addClass('display-block');   
    $('#from_dt_'+rowid).prop('required',true);
    $('#from_mnth_'+rowid).prop('required',true);
    $('#from_yr_'+rowid).prop('required',true);
    $('#to_dt_'+rowid).prop('required',true);
    $('#to_mnth_'+rowid).prop('required',true);
    $('#to_yr_'+rowid).prop('required',true);
  }else{
    $('.Datefrom_'+rowid).removeClass('display-block');
    $('.Datefrom_'+rowid).addClass('display-none');
    $('#from_dt_'+rowid).prop('required',false);
    $('#from_mnth_'+rowid).prop('required',false);
    $('#from_yr_'+rowid).prop('required',false);
    $('#to_dt_'+rowid).prop('required',false);
    $('#to_mnth_'+rowid).prop('required',false);
    $('#to_yr_'+rowid).prop('required',false);
    //$('#from_temp_'+rowid).prop('false',true);
    //$('#to_temp_'+rowid).prop('false',true);
  }
}
function getReqfields1(){
  //app.preloader.show();
  var name = $("#name").val();
  var visit_purpos = $("#visit_purpos").val();
  //alert(name+"****"+visit_purpos);
  if(name==''){
    app.dialog.alert("Name should not be empty.");
    return false;
  }else if(visit_purpos==''){
    app.dialog.alert("Visit Purpose is required.");
    return false;
  }else{
    $("#wiz-1").addClass("display-none");
    $("#wiz-1").slideUp();
    $("#wiz-2").removeClass("display-none");
    $("#wiz-2").addClass("display-block");
    //app.preloader.hide();
  }
}
   
function gobackDiv1(){  
  app.preloader.show();
  $("#wiz-2").addClass("display-none");
  $("#wiz-2").removeClass("display-block");
  $("#wiz-1").removeClass("display-none");
  $("#wiz-1").addClass("display-block");
  app.preloader.hide();
}
function gobackDiv2(){
  app.preloader.show();
  $("#wiz-3").addClass("display-none");
  $("#wiz-3").removeClass("display-block");
  $("#wiz-2").removeClass("display-none");
  $("#wiz-2").addClass("display-block");
  app.preloader.hide();
}
function gobackDiv3(){
  app.preloader.show();
  $("#wiz-4").addClass("display-none");
  $("#wiz-4").removeClass("display-block");
  $("#wiz-3").removeClass("display-none");
  $("#wiz-3").addClass("display-block");
  app.preloader.hide();
}
function getReqfields2(rowids){
  var flag=0;
  for(var rowid=rowids;rowid>=0;rowid--){
    var present = $("#present_"+rowid).val();
    var absent = $("#absent_"+rowid).val();
    var newemp = $("#new_"+rowid).val();
    var vac = $("#vacant_"+rowid).val();
    var OT = $("#OT_"+rowid).val();
    var period = $("#period_"+rowid).val();
    var to_dt = $("#to_dt_"+rowid).val();
    var to_mnth = $("#to_mnth_"+rowid).val();
    var to_yr = $("#to_yr_"+rowid).val();
    var from_dt = $("#from_dt_"+rowid).val();
    var from_mnth = $("#from_mnth_"+rowid).val();
    var from_yr = $("#from_yr_"+rowid).val();
    //$(".valmsg").html("");
    if(period=='Temporary'){
      if(to_yr==''){
        $("#to_yr_"+rowid).focus();
        $("#toyr_msg_"+rowid).html('Select to year');
        flag++;
      }else{
        $("#toyr_msg_"+rowid).html('');
      }
      if(to_mnth==''){
        $("#to_mnth_"+rowid).focus();
        $("#tomnth_msg_"+rowid).html('Select to month');
        flag++;
      }else{
        $("#tomnth_msg_"+rowid).html('');
      }
      if(to_dt==''){
        $("#to_dt_"+rowid).focus();
        $("#todt_msg_"+rowid).html('Select to day');
        flag++;
      }else{
        $("#todt_msg_"+rowid).html('');
      }
      if(from_yr==''){
        $("#from_yr_"+rowid).focus();
        $("#fromyr_msg_"+rowid).html('Select from year');
        flag++;
      }else{
        $("#fromyr_msg_"+rowid).html('');
      }
      if(from_mnth==''){
        $("#from_mnth_"+rowid).focus();
        $("#frommnth_msg_"+rowid).html('Select from month');
        flag++;
      }else{
        $("#frommnth_msg_"+rowid).html('');
      }
      if(from_dt==''){
        $("#from_dt_"+rowid).focus();
        $("#fromdt_msg_"+rowid).html('Select from day');
        flag++;
      }else{
        $("#fromdt_msg_"+rowid).html('');
      }          
    }

    if(OT==''){
      $("#OT_"+rowid).focus();
      $("#ot_msg_"+rowid).html("OT should not be empty");
      flag++;
    }else{
      $("#ot_msg_"+rowid).html("");
    }
    if(vac==''){
      $("#vacant_"+rowid).focus();
      $("#vacant_msg_"+rowid).html("Vacant should not be empty");
      flag++;
    }else{
      $("#vacant_msg_"+rowid).html("");
    }
    if(newemp==''){
      $("#new_"+rowid).focus();
      $("#new_msg_"+rowid).html("New should not be empty");
      flag++;
    }else{
      $("#new_msg_"+rowid).html("");
    }
    if(absent==''){
      $("#absent_"+rowid).focus();
      $("#absent_msg_"+rowid).html("Absent should not be empty");
      flag++;
    }else{
      $("#absent_msg_"+rowid).html("");
    }    
    if(present==''){
      $("#present_"+rowid).focus();
      $("#present_msg_"+rowid).html("Present should not be empty");
      flag++;
    }else{
      $("#present_msg_"+rowid).html("");
    }    
  }
  if(flag==0){
    app.preloader.show();
    $("#wiz-2").addClass("display-none");
    $("#wiz-2").slideUp();
    $("#wiz-3").removeClass("display-none");
    $("#wiz-3").addClass("display-block");
    app.preloader.hide();
  }else{
    return false;
  }
}
function getReqfields3(){
  app.preloader.show();
  $("#wiz-3").addClass("display-none");
  $("#wiz-3").slideUp();
  $("#wiz-4").removeClass("display-none");
  $("#wiz-4").addClass("display-block");
  app.preloader.hide();
}
function getReqfields4(){
  app.preloader.show();
  $("#wiz-4").addClass("display-none");
  $("#wiz-4").slideUp();
  $("#wiz-5").removeClass("display-none");
  $("#wiz-5").addClass("display-block");
  app.preloader.hide();
}
function gobackDiv5(){
  app.preloader.show();
  $("#wiz-5").addClass("display-none");
  $("#wiz-5").removeClass("display-block");
  $("#wiz-4").removeClass("display-none");
  $("#wiz-4").addClass("display-block");
  app.preloader.hide();
}
$$(document).on('page:init', '.page[data-name="interview_list"]', function (e) { 
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/interviewList',
    data:{'uid':session_uid,'session_ulevel':session_ulevel,'session_department':session_department}, 
    success:function(intervw_res){
      var json_field = $.parseJSON(intervw_res);
      var intrvw_list = json_field.int_list;
      console.log(intrvw_list.length);
      var intrvw_info='';
      var int_cnt = '';
      if(intrvw_list.length==0){
         intrvw_info+='<tr class=""><td class="text-uppercase fw-600 text-grey font-14">No Data Available.</td></tr>';
      }else{
        for(var k=0;k<intrvw_list.length;k++){
          var comp_name= intrvw_list[k].cs_invoice_name;
          var cs_id = intrvw_list[k].cs_id;
          if(k==0){
            var cls = 'accordion-item-opened';
          }else{
            var cls = '';
          } 
          intrvw_info+='<tr class="tr-border" id="comp_tr_'+k+'" onclick="getInterview('+cs_id+','+"'"+comp_name+"'"+')"><td class="text-uppercase font-12 fw-500"><a class="" href="#">'+comp_name+'</a></td><td class="text-center"><span class="badge" id="cnt_'+k+'"></span></td></tr>';        
          getintCounts(cs_id,k);       
          //$("#intervw_info").html(intrvw_info);
                 
        }
      }
      $("#intervw_info").html(intrvw_info);
      app.preloader.hide();   
    }
  });
}); 
function getintCounts(cs_id,rowid){
  app.preloader.hide(); 
  var int_cnt='';
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/interviewStatus',
    data:{'cs_id':cs_id}, 
    success:function(intervw_status){
      var json_status = $.parseJSON(intervw_status);
      //console.log(json_status);
      var status_list = json_status.int_status;
      var tot_ints = status_list.length;
      if(tot_ints==0){
        $("#comp_tr_"+rowid).remove();
      }else{
        $("#cnt_"+rowid).html(tot_ints);
      }
     // int_cnt+='<span class="badge">'+tot_ints+'</span>';
      //$("#cnt_"+rowid).html(tot_ints);
      app.preloader.hide(); 
    }
  });
}
function getInterview(cs_id,comp_name){
  checkConnection();
  chkStatusAndPwd();
  mainView.router.navigate("/comp_interviews/");
  app.preloader.show(); 
  var int_cnt='';
  var list = '';
  $.ajax({ 
    type:'POST',   
    url:base_url+'liveappcontroller/interviewStatus',
    data:{'cs_id':cs_id}, 
    success:function(intervw_status){
      var json_status = $.parseJSON(intervw_status);
      var status_list = json_status.int_status;
      console.log(status_list);
      var tot_ints = status_list.length;
      var block = '<div class="block"><div class="col-100"><div class="grey-txt fw-600"><h3>'+comp_name+' ('+tot_ints+')</h3></div></div></div>';
      $("#compint_details").html(block);
      list+='<div class="list searchbar-found"><ul>';
      if(tot_ints==0){
         list+='<li class="light-orange"><div class="item-inner item-cell"><div class="item-row ml-10 mt-5"><div class="item-cell orange-txt font-14 fw-600">No interviews.</div></div></li>';
      }else{ 
        for(var i=0;i<tot_ints;i++){
          var fnm = status_list[i].cand_fname;
          var lnm = status_list[i].cand_lname;
          if(fnm!=null){
            var cn_nm = fnm+" "+lnm;
          }else{
            var cn_nm='';
          }  
          var cn_dob = status_list[i].cand_dob;
          var cn_mob = status_list[i].cand_mobile;
          var cn_intdt_tm = status_list[i].int_date_time;  
          var cn_int_status = status_list[i].i_status;  
          var cand_cmp_id = status_list[i].cand_cmp_id;
          var positn = status_list[i].designation;
          if(positn!='' && positn!=null){
            positn='<span class="redtxt fw-500 font-9">('+positn+')</span>';
          }else{
            positn='';
          }
          if(cn_mob!=null){
            var cn_mob=cn_mob;
          }else{
            var cn_mob='';
          }
          if(cn_dob!=null && cn_dob!='0000-00-00'){
            var cn_dob=cn_dob;
          }else{
            var cn_dob='';
          }

          if(cn_intdt_tm!=null && cn_intdt_tm!='0000-00-00'){
            var cn_intdt_tm = 'Int. Dt: '+cn_intdt_tm;
          }else{
            var cn_intdt_tm = '';
          }
         
          //alert(cand_cmp_id);
            if(i%2==0){
              var cls = 'light-orange';
            }else{
              var cls = ''; 
            }
            //list+='<li class='+cls+'><a href="#" class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell orange-txt font-10 fw-500"><span class="text-muted-light"></span>'+cn_nm+'<br/><span class="grey-txt font-10">DOB: '+cn_dob+'</span><br/><i class="f7-icons font-10 text-muted">phone_fill</i> <span class="grey-txt font-10">'+cn_mob+'</span></div><div class="item-cell orange-txt text-center"><span class="font-10">Int. Dt: '+cn_intdt_tm+'<br><span class="badge color-blue font-10">'+cn_int_status+'</span></span></div><div class="item-cell"><button class="col button button color-orange button-outline text-uppercase font-8 popup-open" data-popup=".popup-status" onclick="getStatus('+cs_id+','+cand_cmp_id+','+"'"+comp_name+"'"+')">Status Update</button></div></div></div></a></li>';
            list+='<li class='+cls+'><a href="#" class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell orange-txt font-10 fw-500"><span class="text-muted-light"></span>'+cn_nm+ positn+'<br/><span class="grey-txt font-10">DOB: '+cn_dob+'</span><br/><i class="f7-icons font-10 text-muted">phone_fill</i> <span class="grey-txt font-10">'+cn_mob+'</span></div><div class="item-cell orange-txt text-center"><span class="font-10">'+cn_intdt_tm+'<br><span class="badge color-blue font-9">'+cn_int_status+'</span></span></div><div class="item-cell"><button class="col button button btn-goutline button-outline text-uppercase font-8" onclick="getStatus('+cs_id+','+cand_cmp_id+','+"'"+comp_name+"'"+')">Status Update</button></div></div></div></a></li>';
            //onclick="openStatusAlert('+cs_id+')"
            
          }         
        }      
      list+='</ul></div>';
      $("#int_dets").html(list);
      var searchbar = app.searchbar.create({
        el: '.searchbar',
        searchContainer: '#int_dets',
        searchIn: '.item-cell',
        on: {
          search(sb, query, previousQuery) {
            console.log(query, previousQuery);
          }
        }
      });
      app.preloader.hide(); 
    }
  });
}
function getStatus(cs_id,cand_cmp_id,comp_name){
  checkConnection();
  chkStatusAndPwd();
  mainView.router.navigate("/update_compStatus/");
  app.preloader.show();
  //alert("called");
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/inter_Status',
    data:{'cs_id':cs_id}, 
    success:function(intervw_status){
      $("#hidd_cand_cmp_id").val(cand_cmp_id);
      $("#hidd_cs_id").val(cs_id);
      $("#hidd_cmp_nm").val(comp_name);
      var st_int = $.parseJSON(intervw_status);
      var json_stlist = st_int.inter_status;
      var list='';
      list+='<option value="" class="disabled">---SELECT---</option>';
      for(var k=0;k<json_stlist.length;k++){
        var iid = json_stlist[k].i_id;
        var st = json_stlist[k].i_status+" - "+json_stlist[k].status_hindi;
        list+='<option value='+iid+'>'+st+'</option>';
        
      }
      list+='<option value="YES">YES - हाॅं</option><option value="NO">NO - नही</option>';
      $("#int_st").html(list);
      app.preloader.hide();
    }
  });
}
function getStatusval(st_val){  
  if(st_val == 1){
    $(".int_date_time").removeClass('display-none');
    $(".int_date_time").addClass('display-block');
    $("#reason").val("");
    $(".int_reason").removeClass('display-block');
    $(".int_reason").addClass('display-none');
  }else if (st_val == "3" || st_val == "4" || st_val == "5" || st_val == "6" || st_val == "7"){
    $(".int_reason").removeClass('display-none');
    $(".int_reason").addClass('display-block');
    $(".int_date_time").removeClass('display-block');
    $(".int_date_time").addClass('display-none');
    $("#demo-picker-custom-toolbar").val("");
  }else{   
    $(".int_reason").removeClass('display-block');
    $(".int_reason").addClass('display-none');
    $("#reason").val("");
    $(".int_date_time").removeClass('display-block');
    $(".int_date_time").addClass('display-none');
    $("#demo-picker-custom-toolbar").val("");
  }
}
function add_InterViewStatus(){
  var form_compintform = $(".compintform").serialize();
  var hidd_cs_id=$('input[name="hidd_cs_id"]').val();
  var hidd_cmp_nm=$('input[name="hidd_cmp_nm"]').val();
  //alert(hidd_cs_id+"---"+hidd_cmp_nm);
  //console.log(form_compintform);
  var session_uid = window.localStorage.getItem("session_uid");
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/addInterviewStatus',
    data:form_compintform+"&session_uid="+session_uid,
    success:function(status_result){
      //console.log(status_result);
      /*if(status_result=='inserted'){
        app.dialog.alert("Data inserted successfully.");
      }else if(status_result=='not'){
        app.dialog.alert("Error Inserting Data");
      }*/
      var toastIcon = app.toast.create({
        icon: app.theme === 'ios' ? '<i class="f7-icons">check_round</i>' : '<i class="f7-icons">check_round</i>',
        text: 'Interview status changed successfully.',
        position: 'center',
        closeTimeout: 2000,
      });
      app.preloader.hide();
      getInterview(hidd_cs_id,hidd_cmp_nm);
      //mainView.router.navigate("/comp_interviews/"); 

    }
  }); 
}
$$(document).on('page:init', '.page[data-name="selected_candi"]', function (e) { 
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/selCandidateList', 
    data:{'uid':session_uid,'session_ulevel':session_ulevel,'session_department':session_department}, 
    success:function(candi_res){
      var json_field = $.parseJSON(candi_res);
      var candi_list = json_field.candidates_sel;
      //console.log(candi_list);
      var selcan_info='';
      var int_cnt = '';
      if(candi_list.length==0){
         selcan_info+='<tr class=""><td class="text-uppercase fw-600 text-grey font-14">No Data Available.</td></tr>';
      }else{
        for(var k=0;k<candi_list.length;k++){
          var comp_name= candi_list[k].cs_invoice_name;
          var cs_id = candi_list[k].cs_id;
          if(k==0){
            var cls = 'accordion-item-opened';
          }else{
            var cls = '';
          } 
          selcan_info+='<tr class="tr-border" id="candi_'+k+'" onclick="getCandisel('+cs_id+','+"'"+comp_name+"'"+')"><td class="text-capitalize font-12 fw-500"><a class="" href="#">'+comp_name+'</a></td><td class="text-center"><span class="badge" id="cntcandi_'+k+'"></span></td></tr>';    
          getCandiintCounts(cs_id,k);       
          //$("#selected_info").html(selcan_info);
          //app.preloader.hide();         
        }
      }
      $("#selected_info").html(selcan_info);
      app.preloader.hide();      
    }
  });
}); 
function getCandiintCounts(cs_id,rowid){
  app.preloader.hide(); 
  var int_cnt='';
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/candselStatus',
    data:{'cs_id':cs_id}, 
    success:function(sel_status){
      var json_cstatus = $.parseJSON(sel_status);
      //console.log(json_status);
      var status_clist = json_cstatus.selc_status;
      var tot_cints = status_clist.length;
      if(tot_cints==0){
        $("#candi_"+rowid).remove();
      }else{
        $("#cntcandi_"+rowid).html(tot_cints);
      }
      app.preloader.hide(); 
    }
  });
}

function getCandisel(cs_id,comp_name){
  checkConnection();
  chkStatusAndPwd();
  mainView.router.navigate("/sel_candidates/");
  app.preloader.show(); 
  var int_cnt='';
  var sel_dets = '';
  var join_days='<option value=""></option>';
  var join_mnth='';
  for(var k=1;k<=31;k++){
    if(k<=9){
      k="0"+k;
    }else{
      k=k;
    }
    join_days+='<option value="'+k+'">'+k+'</option>';
  }

  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    join_mnth+='<option value=""></option>';
  for(var h=0;h<monthNames.length;h++){
    join_mnth+='<option value="'+(h+1)+'">'+monthNames[h]+'</option>';
  }    

  var currentDate = new Date()
  var curr_year = currentDate.getFullYear();
  var add_years = curr_year + parseInt(2);
  var join_yr='';
  join_yr+='<option value=""></option>';
  for(var m=1950;m<=add_years;m++){
    join_yr+='<option value="'+m+'">'+m+'</option>';
  }
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/candselStatus',
    data:{'cs_id':cs_id}, 
    success:function(clist_status){
      $("#hidd_cs_id").val(cs_id);
      $("#hidd_compnm").val(comp_name);
      $("#join_day").html(join_days); 
      $("#join_mnth").html(join_mnth); 
      $("#join_yr").html(join_yr);
      var json_status = $.parseJSON(clist_status);
      var candi_list = json_status.selc_status;
      //console.log(candi_list);
      var tot_ints = candi_list.length;
      var block = '<div class="block"><div class="col-100"><div class="grey-txt fw-600"><h3>'+comp_name+' ('+tot_ints+')</h3></div></div></div>';
      $("#compint_details").html(block);
      sel_dets+='<div class="list"><ul>';
      if(tot_ints==0){
         sel_dets+='<li class=""><div class="item-inner item-cell"><div class="item-row ml-10 mt-5"><div class="item-cell orange-txt font-14 fw-600">No Employees.</div></div></div></li><li></li>';
      }else{
        for(var i=0;i<tot_ints;i++){
          var cn_nm = candi_list[i].cand_fname+" "+candi_list[i].cand_lname;
          var cn_dob = candi_list[i].cand_dob;
          var cn_mob = candi_list[i].cand_mobile;
          var cn_intdt_tm = candi_list[i].int_date_time;  
          var cn_int_status = candi_list[i].i_status;  
          var cand_cmp_id = candi_list[i].cand_cmp_id;
          var reg_num = candi_list[i].reg_num;
          var positn = candi_list[i].designation;
          if(positn!='' && positn!=null){
            positn='<span class="redtxt fw-500">('+positn+')</span>';
          }else{
            positn='';
          }

          //alert(cand_cmp_id);
            if(i%2==1){
              var cls = 'light-orange';
            }else{
              var cls = ''; 
            }
          //  sel_dets+='<tr class="tr-border"><td class="text-capitalize font-10 fw-500"><a class="" href="#">'+cn_nm+'</a><br/><span class="grey-txt font-10">DOB: '+cn_dob+'</span><br/><i class="f7-icons font-10 text-muted">phone_fill</i> <span class="grey-txt font-10">'+cn_mob+'</span></td><td class="text-center"><button class="col button button color-orange button-outline text-uppercase font-8 popup-open" data-popup=".popup-joindt" onclick="getdatePopup('+cand_cmp_id+')">Enter Date</button></td></tr>';    

          sel_dets+='<tr class="tr-border"><td class="text-capitalize font-10 fw-500"><a class="" href="#">'+cn_nm+ positn+'</a><br/><span class="grey-txt font-10">Reg No: '+reg_num+'</span></td><td class="text-center"><button class="col button button btn-goutline button-outline text-uppercase font-8 popup-open" data-popup=".popup-joindt" onclick="getdatePopup('+cand_cmp_id+')">Enter Date</button></td></tr>';    
          }         
        }      
      sel_dets+='</ul></div>';
      $("#sel_dets").html(sel_dets);
      app.preloader.hide(); 
    }
  });
}
function add_joiningDate(){
  var joiningform = $(".joiningform").serialize();
  //console.log(joiningform);
  var session_uid = window.localStorage.getItem("session_uid");
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/addCandJoinDate',
    data:joiningform+"&session_uid="+session_uid,
    success:function(status_result){
      //console.log(status_result);
      if(status_result=='updated'){
        app.dialog.alert("Joining Date Entered successfully");
      }else if(status_result=='not'){
        app.dialog.alert("Error Inserting Joining Date");
      }
      app.preloader.hide();
    }
  });
}
function getdatePopup(cand_cmp_id){
  checkConnection();
  chkStatusAndPwd();
  $("#hidd_cand_id").val(cand_cmp_id);
}
$$(document).on('page:init', '.page[data-name="employee_list"]', function (e) { 
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/employeeList',
    data:{'uid':session_uid,'session_ulevel':session_ulevel,'session_department':session_department}, 
    success:function(emp_res){
      var json_field = $.parseJSON(emp_res);
      var emp_list = json_field.emp_list;
      console.log(emp_list);
      var emp_info='';  
      var int_cnt = '';
      if(emp_list.length==0){
         emp_info+='<tr class=""><td class="text-uppercase fw-600 text-grey font-14">No Data Available.</td></tr>';
      }else{
        for(var k=0;k<emp_list.length;k++){
          var comp_name= emp_list[k].cs_invoice_name;
          var cs_id = emp_list[k].cs_id;
          if(k==0){
            var cls = 'accordion-item-opened';
          }else{
            var cls = '';
          } 
          emp_info+='<tr class="tr-border" onclick="getEmps('+cs_id+','+"'"+comp_name+"'"+')"><td class="text-uppercase font-12 fw-500"><a class="" href="#">'+comp_name+'</a></td><td class="text-center"><span class="badge" id="cntemp_'+k+'"></span></td></tr>';              
          getempcnts(cs_id,k);
          //$("#emp_info").html(emp_info);
          //app.preloader.hide();         
        }
      }
      $("#emp_info").html(emp_info);
      app.preloader.hide();    
    }
  });
}); 
function getempcnts(cs_id,rowid){
  app.preloader.hide(); 
  var int_cnt='';
  $.ajax({ 
    type:'POST',  
    url:base_url+'liveappcontroller/totEmps',
    data:{'cs_id':cs_id}, 
    success:function(emps){
      var json_emps = $.parseJSON(emps);
      //console.log(json_status);
      var elist = json_emps.totemps;
      var tot_eints = elist.length;
      /*if(tot_eints==0){
        $("#candi_"+rowid).remove();
      }else{
        $("#cntemp_"+rowid).html(tot_cints);
      }*/
      $("#cntemp_"+rowid).html(tot_eints);
      app.preloader.hide(); 
    }
  });
}
function getEmps(cs_id,comp_name){
  checkConnection();
  chkStatusAndPwd();
  mainView.router.navigate("/employees/");
  app.preloader.show(); 
  var int_cnt='';
  var emp_dets = '';
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/totEmps',
    data:{'cs_id':cs_id}, 
    success:function(empslist){
      $("#hidd_csid").val(cs_id);
      $("#hidd_comp").val(comp_name);
      var json_emps = $.parseJSON(empslist);
      var elist = json_emps.totemps;
      var tot_eints = elist.length;
      var block = '<div class="block"><div class="col-100"><div class="grey-txt fw-600"><h3>'+comp_name+' ('+tot_eints+')</h3></div></div></div>';
      $("#compint_details").html(block);
      emp_dets+='<div class="list"><ul>';
      if(tot_eints==0){
         emp_dets+='<li class=""><div class="item-inner item-cell"><div class="item-row ml-10 mt-5"><div class="item-cell orange-txt font-14 fw-600">No Employees.</div></div></li>';
      }else{
        for(var i=0;i<tot_eints;i++){
          var fnm = elist[i].cand_fname;
          var lnm = elist[i].cand_lname;
          if(fnm!=null){
            var cn_nm = fnm+" "+lnm;
          }else{
            var cn_nm='';
          }  
         // var cn_nm = elist[i].cand_fname+" "+elist[i].cand_lname;
          var cn_dob = elist[i].cand_dob;
          var cn_mob = elist[i].cand_mobile;
          var cn_intdt_tm = elist[i].int_date_time;  
          var cn_int_status = elist[i].i_status;  
          var cand_cmp_id = elist[i].cand_cmp_id;
          var reg_num = elist[i].reg_num;
          var int_joineedate = elist[i].int_joineedate;
          var positn = elist[i].designation;
          if(positn!='' && positn!=null){
            positn='<span class="redtxt fw-500 font-10">('+positn+')</span>';
          }else{
            positn='';
          }
          if(reg_num!='' && reg_num!=null){
            reg_num=reg_num
          }else{
            reg_num='';
          }
          //alert(cand_cmp_id);
            if(i%2==1){
              var cls = 'light-orange';
            }else{
              var cls = ''; 
            }
           // emp_dets+='<tr class="tr-border"><td class="text-capitalize font-10 fw-500"><a class="" href="#">'+cn_nm+'</a><br/><span class="grey-txt font-10">DOB: '+cn_dob+'</span><br/><i class="f7-icons font-10 text-muted">phone_fill</i> <span class="grey-txt font-10">'+cn_mob+'</span></td><td class="text-center grey-txt font-12 font-500">'+int_joineedate+'</td></tr>';
            emp_dets+='<tr class="tr-border"><td class="text-capitalize font-12 fw-500"><a class="" href="#">'+cn_nm+ positn+'</a><br/><span class="grey-txt font-10">Reg No: '+reg_num+'</span><br/></td><td class="text-center grey-txt font-12 font-500">'+int_joineedate+'</td></tr>';    
          }         
        }      
      emp_dets+='</ul></div>';
      $("#emp_dets").html(emp_dets);
      app.preloader.hide(); 
    }
  });
}
$$(document).on('page:init', '.page[data-name="daily_activity_list"]', function (e) { 
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/dailtyActivity_list',
   // data:{'cs_id':cs_id}, 
    success:function(actlist){
      var json_emps = $.parseJSON(actlist);
      var act_list = json_emps.dailyActivity;   
      var activityList = '';
      for(var i=0;i<act_list.length;i++){
        var comp = act_list[i].cs_invoice_name;
        var cs_id = act_list[i].cs_id;
        var cn_mob = 
        activityList+='<tr class="tr-border" onclick="dailyActDetails('+cs_id+')"><td class="text-capitalize font-12 fw-500"><a class="" href="#">'+comp+'</a><br/><span id="mob_'+i+'"></span></td><td class="text-center"><i class="fa fa-eye font-16 text-muted"></i></td></tr>';
        getDailyActPhone(cs_id,i); 
        $("#activity_list").html(activityList);
        app.preloader.hide(); 
      }
    }
  });
  
});
function getDailyActPhone(cs_id,rowid){
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/dailtyActivity_phone',
    data:{'cs_id':cs_id}, 
    success:function(phonelist){
      var json_emps = $.parseJSON(phonelist); 
      var cont_list = json_emps.dailyConts; 
      //alert(cont_list.length);
      for(var k=0;k<cont_list.length;k++){
        var mob = cont_list[k].csd_contact_mobile; 
        if(mob!=''){
          var cont ='<i class="f7-icons font-12 text-muted">phone_fill</i> <span class="grey-txt font-12">'+mob+'</span>';
        }else{
          var cont = '<span class="grey-txt font-12">No contact available</span>';
        }
        $("#mob_"+rowid).html(cont);
         app.preloader.hide(); 
      }
    }
  }); 
}
function dailyActDetails(cs_id){
  mainView.router.navigate("/dailyAct_details/")
  app.preloader.show();
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/dailtyActivityData',
    data:{'cs_id':cs_id}, 
    success:function(datalist){
      var json_data = $.parseJSON(datalist); 
      var dailydata_list = json_data.detailData; 
      //console.log(dailydata_list);
      var actlist = '';
      actlist+='<div class="list"><ul>';           
      for(var k=0;k<dailydata_list.length;k++){
        var company_name = dailydata_list[k].csd_invoice_name;
        var csd_id = dailydata_list[k].csd_id;
        var cs_id = dailydata_list[k].cs_id;
        var l_id = dailydata_list[k].l_id;
        var csd_verticle = dailydata_list[k].csd_verticle;
        var csd_head_cnt = dailydata_list[k].csd_head_cnt;
        var csd_head_position = dailydata_list[k].csd_head_position;
        var split_hdpos = csd_head_position.split("|");
        var position = [];
        var csd_create_date = dailydata_list[k].csd_create_date;
        var block = '<div class="block"><div class="col-100"><div class="grey-txt fw-600 text-uppercase"><h3>'+company_name+'</h3></div></div></div>'; 
        $("#comp_details").html(block);  
        //actlist+='<li class="light-orange"><a href="#" class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell orange-txt font-12"><span class="text-muted-light fw-600"></span>'+csd_verticle+'<br/><span class="grey-txt font-10">Dt: '+csd_create_date+'</span></div><div class="item-cell orange-txt text-center"><span class="mr-10"><i class="fa fa-user icon-orange"></i></span><span class="font-12">'+csd_head_cnt+'</span></div><div class="item-cell orange-txt text-center"><span class="font-12">'+posit+'</span></div><div class="item-cell"><button class="col button button button-small color-orange button-outline text-uppercase font-9 w-auto mt-5" onclick="addActivity('+csd_id+')"><i class="f7-icons font-12 color-orange">add</i></button></div></div></div></a></li>'; 
        actlist+='<li class="tr-border"><a href="#" class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell orange-txt font-12"><span class="text-muted-light fw-600"></span>'+csd_verticle+' <span class="fw-600 text-blue">('+csd_head_cnt+')</span><br/><span class="grey-txt font-10">Dt: '+csd_create_date+'</span></div><div class="item-cell text-grey font-10 ml-5">'; 
        for(var j=0;j<split_hdpos.length;j++){
          position = split_hdpos[j]+"<br/>";   
          actlist+=position;   
        }
        actlist+='</div><div class="item-cell "><button class="col button button-fill button button-small color-orange text-uppercase font-9 w-auto mt-5 float-left" onclick="addActivity('+csd_id+','+"'"+csd_verticle+"'"+','+"'"+company_name+"'"+','+l_id+','+cs_id+')"><i class="f7-icons font-12 color-orange">add</i></button><button class="ml-5 col button button-fill button button-small color-blue text-uppercase font-9 w-auto mt-5 float-right display-none" id="view_'+k+'" onclick="viewActivity('+csd_id+','+"'"+csd_verticle+"'"+','+"'"+company_name+"'"+','+l_id+','+cs_id+')"><i class="fa fa-eye font-12"></i></button></div></div></div></a></li>'; 

        viewIcon(csd_id,k);
        app.preloader.hide(); 
      }
        actlist+='</ul></div>';
        $("#act_dets").html(actlist); 
    }
  });
}
function viewIcon(csd_id,rowid){
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/getDCRcnt',
    data:{'csd_id':csd_id}, 
    success:function(dcrcnt){
      console.log(dcrcnt);
      //var dcr = $.parseInt(dcrcnt);
      //var dcr_cnt
      if(dcrcnt>0){
        $("#view_"+rowid).removeClass("display-none");
        $("#view_"+rowid).addClass("display-block");
      }
    }
  });
}
function addActivity(csd_id,csd_verticle,company_name,l_id,cs_id){
  checkConnection();
  chkStatusAndPwd();
  mainView.router.navigate("/add_activity/");
  app.preloader.show(); 
   $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/masterDataAddactivity',
    data:{'csd_id':csd_id}, 
    success:function(datalist){
      var cmp='<div class="block"><div class="col-100"><div class="grey-txt fw-600 text-uppercase"><h3>'+company_name+'</h3><br/>Verticle : '+csd_verticle+'</div></div></div>';  
      $("#compdetails").html(cmp);
      $("#hidd_verticle").val(csd_verticle);
      $("#hidd_csd").val(csd_id);
      $("#hidd_lid").val(l_id);
      $("#hidd_cs_id").val(cs_id);

      var json_data = $.parseJSON(datalist); 
      var incident_list = json_data.incident; 
      var complain_list = json_data.complain; 
      var incident='';
      incident+='<option value="">---SELECT---</option>';
      for(var i=0;i<incident_list.length;i++){
        var inc_id = incident_list[i].inc_id;
        var inc_name = incident_list[i].inc_name;        
        incident+='<option value='+inc_id+'>'+inc_name+'</option>';
      }
      $("#incident").html(incident);
      var complaint='';
      complaint+='<option value="">---SELECT---</option>';
      for(var j=0;j<complain_list.length;j++){
        var dco_id = complain_list[j].dco_id;
        var dco_name = complain_list[j].dco_name;        
        complaint+='<option value='+dco_id+'>'+dco_name+'</option>';
      }
      $("#complaint").html(complaint);
      app.preloader.hide();
    }
  }); 
}
function add_activity(){
  app.preloader.show(); 
  var add_acti = $(".add_acti").serialize();
  //console.log(add_acti);
  var hidd_cs_id = $("#hidd_cs_id").val();
  var session_uid = window.localStorage.getItem("session_uid");
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/add_activity',
    data:add_acti+"&session_uid="+session_uid,
    success:function(result){
      if(result=='inserted'){
        app.dialog.alert("Data Entered successfully");
      }else if(result=='not'){
        app.dialog.alert("Error Inserting Data");
      }
      dailyActDetails(hidd_cs_id);
      app.preloader.hide();
    }
  });
}
function viewActivity(csd_id,csd_verticle,company_name,l_id,cs_id){
  checkConnection();
  chkStatusAndPwd();
  mainView.router.navigate("/view_activity/");
  app.preloader.show(); 
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/view_activity',
    data:{'csd_id':csd_id},
    success:function(result){
      var viewact = $.parseJSON(result);
      var viewact_list = viewact.viewactivity;
      console.log(viewact_list);
      var viewactdiv='';
      var i=1;
      viewact_list+'<div class="list accordion-list no-margin"><ul>';
      for(var k=0;k<viewact_list.length;k++){
        var da_create_on = viewact_list[k].da_create_on;
        var verticle = viewact_list[k].verticle;
        var da_shiftA = viewact_list[k].da_shiftA;
        var da_shiftB = viewact_list[k].da_shiftB;
        var da_shiftC = viewact_list[k].da_shiftC;
        var total_shifts = viewact_list[k].da_total;
        var new_joinees = viewact_list[k].da_new_joinee;
        var incident = viewact_list[k].inc_name;
        var incident_rem = viewact_list[k].da_incedent_remark;
        var compln = viewact_list[k].dco_name;
        var comp_rem = viewact_list[k].da_complain_remark;
        if(k==0){
          var cls="no-margin";
        }else{
          var cls="";
        }
        viewactdiv+='<div class="list accordion-list '+cls+'"><ul><li class="accordion-item light-orange accordion-item-opened"><a href="#" class="item-content item-link"><div class="item-inner"><div class="item-title orange-txt fw-500">Activity - '+i+'</div></div><i class="fa fa-calendar grey-txt fw-500 font-12"></i><span class="float-right grey-txt fw-500 font-10 w-30 ml-1">'+da_create_on+'</span></a><div class="accordion-item-content nobgclr elevation-1"><div class="list no-hairlines-between"><ul><li class="item-link item-content text-center"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Vertical</div><div class="item-cell text-grey font-12 ml-0">'+verticle+'</div></div></div></li><hr/><li><div class="data-table int_tbl"><table><thead class="light-grey"><tr><th class="label-cell text-uppercase grey-txt"><strong>Shifts</strong></th><th class="label-cell text-uppercase grey-txt"><strong>Autorised Headcounts</strong></th></tr></thead><tbody><tr><td class="text-muted fw-600 font-10">Day - 12 hrs - Shift A</td><td class="text-muted font-10">'+da_shiftA+'</td></tr><tr><td class="text-muted fw-600 font-10">Night - 12 hrs - Shift B</td><td class="text-muted font-10">'+da_shiftB+'</td></tr><tr><td class="text-muted fw-600 font-10">Other - 8 hrs - Shift C</td><td class="text-muted font-10">'+da_shiftC+'</td></tr><tr class="tr-border"><td class="text-muted fw-600 font-10">Total</td><td class="text-muted font-10">'+total_shifts+'</td></tr></tbody></table></div></li><li class="item-link item-content "><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-500">New Joinees</div><div class="item-cell text-grey font-12 ml-0">'+new_joinees+'</div></div></div></li><li class="item-link item-content "><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-500">Incident</div><div class="item-cell text-grey font-12 ml-0">'+incident+'</div></div></div></li><li class="item-link item-content "><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-500">Incident Remarks</div><div class="item-cell text-grey font-12 ml-0">'+incident_rem+'</div></div></div></li><li class="item-link item-content "><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-500">Complain</div><div class="item-cell text-grey font-12 ml-0">'+compln+'</div></div></div></li><li class="item-link item-content "><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-500">Complain Remarks</div><div class="item-cell text-grey font-12 ml-0">'+comp_rem+'</div></div></div></li></ul></div></div></div></li></ul></div>';
        i++;
      }
      //viewactdiv+='</ul></div>';
      //viewactdiv+='</div></div></div></li></ul></div></div></li></ul></div>';
      $("#viewAct").html(viewactdiv);
      app.preloader.hide();
    }
  });   
}
$$(document).on('page:init', '.page[data-name="complain_list"]', function (e) { 
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/complainList',
    data:{'uid':session_uid,'session_ulevel':session_ulevel}, 
    success:function(comp_res){
      var json_comp = $.parseJSON(comp_res);
      var comp_list = json_comp.comp_list;
      //console.log(comp_list);
      var comp_info='';
      var int_cnt = '';
      for(var k=0;k<comp_list.length;k++){
        var comp_name= comp_list[k].cs_invoice_name;
        var cm_id = comp_list[k].cm_id; 
        var cm_company = comp_list[k].cm_company;
        var cm_contact_person = comp_list[k].cm_contact_person;
        var createname = comp_list[k].createname;
        var cm_user = comp_list[k].cm_user;
        var cm_create_on = comp_list[k].cm_create_on;  

        comp_info+='<tr class="tr-border" id="comp_tr_'+k+'" onclick="showComplain('+cm_id+','+"'"+comp_name+"'"+','+cm_company+','+"'"+cm_contact_person+"'"+','+"'"+createname+"'"+','+"'"+cm_user+"'"+','+"'"+cm_create_on+"'"+')"><td class="text-uppercase font-12 fw-500"><a class="" href="#">'+comp_name+'</a><br/><span class="text-grey font-10"><i class="fa fa-calendar mr-5"></i>'+cm_create_on+'</span></td><td class="text-center" ><i class="fa fa-eye font-14 text-grey"></i></td></tr>'; 

        /*comp_info+='<div class="list"><ul>';
        if(k%2==0){
          var cls = 'light-orange';
        }else{
          var cls = ''; 
        }
        //comp_info+='<li class="block "'+cls+'"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell orange-txt font-10 fw-500"><span class="text-blue"></span>'+comp_name+'<br/><span class="grey-txt font-10"><i class="fa fa-user font-10"></i>: '+cm_contact_person+'</span><br/><sapn class="font-10 text-muted">created by:</span> <span class="grey-txt font-10">'+createname+'</span></div><div class="item-cell orange-txt text-center"><span class="font-10">Create. Dt: '+cm_create_on+'<br><span class="badge color-blue font-9">'+cm_user+'</span></span></div><div class="item-cell" onclick="getCompDetails('+cm_id+','+"'"+comp_name+"'"+')"><i class="fa fa-eye font-14 text-grey"></i></div></div></div></li>';

        //comp_info+='<li class='+cls+'><a href="#" class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell orange-txt font-10 fw-500"><span class="text-muted-light"></span>'+comp_name+'<br/><span class="grey-txt font-10">DOB: test2</span><br/><i class="f7-icons font-10 text-muted">phone_fill</i> <span class="grey-txt font-10">test3</span></div><div class="item-cell orange-txt text-center"><span class="font-10">Int. Dt: test4<br><span class="badge color-blue font-9">test5</span></span></div><div class="item-cell"><button class="col button button btn-goutline button-outline text-uppercase font-8" >Status Update</button></div></div></div></a></li>'; 
          

        comp_info+='</ul></div>'; */     
        $("#complain_list").html(comp_info);
        app.preloader.hide();         
      }
    }
  });
}); 
function showComplain(cm_id,comp_name,cm_company,cm_contact_person,createname,cm_user,cm_create_on){ 
  checkConnection();
  chkStatusAndPwd(); 
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  mainView.router.navigate("/complain_details/");
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/view_complain',
    data:{'uid':session_uid,'session_ulevel':session_ulevel,'cm_id':cm_id}, 
    success:function(viewCompres){
      var json_cres = $.parseJSON(viewCompres);
      var det_comp = json_cres.company;
      var det_cust = json_cres.customer;
      var det_empl = json_cres.employee;
      var det_rslt = json_cres.result; 
      var det_vert = json_cres.vertical;
      //console.log(det_rslt);  
      //console.log(det_vert);                
      if(cm_contact_person!=''){
        var cont_per = '<i class="fa fa-user font-14 mr-5 color-grey"></i><span class="text-muted fw-500">'+cm_contact_person+'</span><br/>';
      }else{
        var cont_per = '';   
      }  
  
      if(det_rslt[0].v_id!=0 || det_rslt[0].v_id!=''){     
        for(var vt=0;vt<det_vert.length;vt++){
        if(det_rslt[0].v_id == det_vert[vt].v_id){
          var v_name = det_vert[vt].vertical_name;
          //alert(v_name);  
          var vrtcl='<i class="f7-icons font-10 color-grey mr-5">layers_fill</i><span class="text-muted fw-500 font-12">'+v_name+'</span><br/>';
          }
        }
      }else{       
        var vrtcl='';
      }   
      if(vrtcl!=undefined){
        var vert=vrtcl;
      }else{
        var vert='';
      }
      var c_details = '<div class="block"><div class="row"><div class="col-100"><div class="grey-txt fw-600"><h3>'+comp_name+'<span class="ml-10 badge color-blue fs-10">'+cm_user+'</span></h3></div></div></div><div class="row"><div class="col-100">'+cont_per+vert+'<i class="fa fa-calendar font-13 mr-5 color-grey"></i><span class="text-muted fw-500 font-12">'+cm_create_on+'</span><br/><span class="text-grey fw-600 text-uppercase font-12">created by: '+createname+'</span></div></div></div>';     
      // ---------------------------- EMPLOYEE ----------------------------- //
      if(det_rslt[0].cm_complain=='Employee'){
        $("#complain_emp").removeClass("display-none");
        $("#complain_emp").addClass("display-block");
        var emps = det_rslt[0].cm_employee_chk;
        var split_emp = emps.split("|");
        var emp_txt = det_rslt[0].cm_employee_detail;
        var split_etxt = emp_txt.split("|");
        var emp_comp_div='';
        for(var k=0;k<det_empl.length;k++){
          var ct_id = det_empl[k].ct_id;
          var ct_name = det_empl[k].ct_name;
          var ct_select = det_empl[k].ct_select;
          if(split_emp.indexOf(ct_id) != -1){  
            // element found
            var chked='checked';
          }else{
            var chked='';
          }

          emp_comp_div+='<div class="w-100 mt-5"><div class="light-orange w-15 d-inline mr-5 mt-0 float-left mb-1" ><label class="item-checkbox item-content"><input type="checkbox" name="employee[]" value="'+ct_id+'" '+chked+'><i class="icon icon-checkbox"></i></label></div> <div class="light-orange w-80 d-inline mb-1"><div class="accordion-item accordion-item-opened"><a href="#" class="item-content item-link"><div class="item-inner"><div class="item-title grey-txt font-12 fw-500">'+ct_name+'</div></div></a><div class="accordion-item-content nobgclr elevation-10 p-2"><div class="block"><span class="font-12" id="employee_txtnm_'+k+'"></span>';
          var emptxt=split_etxt[k]; 
          if(ct_select=='yes'){                
              if(emptxt.indexOf("+") != -1){  
                var ids = split_etxt[k];
                getNames(ids,k);
              }else {
                if(emptxt!=''){
                  var ids = split_etxt[k];                  
                  getno_emps(ids,k);
                }
              }
            }else{
              emp_comp_div+='<span class="fw-500 text-blue text-capitalize" id="employee_txtnm_'+k+'">'+emptxt+'</span>';
             
            }
            if(ct_name=='Work not as informed'){
              var infrom = det_rslt[0].cm_inform;
              emp_comp_div+='<br/><span id="inform_txt_'+k+'" class="fw-500 text-blue text-capitalize">'+infrom+'</span>'; 
            }
          emp_comp_div+='</div></div></div></div> <div>';          
          //$("#emp_div").html(emp_comp_div);
        } 
        $("#emp_div").html(emp_comp_div);
      }

      // ---------------------------- CUSTOMER ----------------------------- //
      if(det_rslt[0].cm_complain=='Customer'){
        $("#complain_cus").removeClass("display-none");
        $("#complain_cus").addClass("display-block");
        var custs = det_rslt[0].cm_customer_chk;
        var split_cust = custs.split("|");
        var cust_txt = det_rslt[0].cm_customer_detail;
        var split_ctxt = cust_txt.split("|");
        var cust_comp_div='';
        for(var h=0;h<det_cust.length;h++){
          var cust_ct_id = det_cust[h].ct_id;
          var cust_ct_name = det_cust[h].ct_name;
          var cust_ct_select = det_cust[h].ct_select;
          if(split_cust.indexOf(cust_ct_id) != -1){  
            // element found
            var chked_cust='checked';
          }else{
            var chked_cust='';
          }
          cust_comp_div+='<div class="w-100 mt-5"><div class="light-orange w-15 d-inline mr-5 mt-0 float-left mb-1" ><label class="item-checkbox item-content"><input type="checkbox" name="customer[]" value="'+cust_ct_id+'" '+chked_cust+'><i class="icon icon-checkbox"></i></label></div> <div class="light-orange w-80 d-inline mb-1"><div class="accordion-item accordion-item-opened"><a href="#" class="item-content item-link"><div class="item-inner"><div class="item-title grey-txt font-12 fw-500">'+cust_ct_name+'</div></div></a><div class="accordion-item-content nobgclr elevation-10 p-2"><div class="block"><span class="font-12" id="customer_txtnm_'+h+'"></span>';           
          var custtxt=split_ctxt[h];
          var ids_cust = split_ctxt[h]; 
          getNm_cust(ids_cust,h); 
          cust_comp_div+='</div></div></div></div> <div>';      
        }
        $("#cust_div").html(cust_comp_div);
      }       
      $("#c_details").html(c_details);
    }
  });
  app.preloader.hide();    
}
function getNm_cust(ids_cust,h){
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/getEmpNamesComp_cust',
    data:{'ids':ids_cust,"pos":h}, 
    success:function(shownames){ 
      $("#customer_txtnm_"+h).html(shownames);
    }
  });
}
function getNames_cust(ids,h){
  
}
function getNames(ids,k){
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/getEmpNamesComp',
    data:{'ids':ids,"pos":k}, 
    success:function(shownames){ 
      //console.log(shownames);
      //$("#employee_txt_"+k).val(shownames); 
      $("#employee_txtnm_"+k).html(shownames); 
      //arr.push(shownames); 
    }
  });
}
function getno_emps(ids,k){
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/getEmpCompnames',
    data:{'ids':ids,"pos":k}, 
    success:function(shownames){ 
      //console.log(shownames);
      //$("#employee_txt_"+k).val(shownames); 
      $("#employee_txtnm_"+k).html(shownames); 
      //arr.push(shownames); 
    }
  });
}
function getno_emps_cust(ids,h){
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/getEmpCompnames',
    data:{'ids':ids,"pos":h}, 
    success:function(shownames){  
      $("#customer_txtnm_"+h).html(shownames); 
    }
  });
}
$$(document).on('page:init', '.page[data-name="add_complain"]', function (e) {
  checkConnection();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/add_compform',
    data:{'uid':session_uid,'session_ulevel':session_ulevel,'session_department':session_department}, 
    success:function(dropres){
      var json_res = $.parseJSON(dropres);
      var det_comp = json_res.assign_cmpy;
      var det_cust = json_res.customer;
      var det_empl = json_res.employee;
      var det_vert = json_res.vertical;

      //console.log(det_empl);
      var comps='';
      comps+='<option value="">---SELECT---</option>';
      for(var k=0;k<det_comp.length;k++){
        var csid = det_comp[k].cs_id;
        var cs_invoice_name = det_comp[k].cs_invoice_name;
        comps+='<option value='+csid+'>'+cs_invoice_name+'</option>';
      }
      $("#company_name").html(comps);


      var verti='';
      verti+='<option value="">---SELECT---</option>';
      for(var v=0;v<det_vert.length;v++){
        var v_id = det_vert[v].v_id;
        var vertical_name = det_vert[v].vertical_name;
        verti+='<option value='+v_id+'>'+vertical_name+'</option>';
      }
      $("#comp_verti").html(verti);   

      var dynamic_chks = '';
      for(var h=0;h<det_empl.length;h++){
        var ct_id = det_empl[h].ct_id;
        var ct_name = det_empl[h].ct_name;
        var ct_mail = det_empl[h].ct_mail;
        var acc_item = ct_name;
        var ct_select = det_empl[h].ct_select;
        if(acc_item=='Work not as informed'){
          var txt_inform = '<div class="mb-5"><input type="text" name="inform" class="form-txtbox p-2"></div>';
        }else{
          var txt_inform = '';
        }
        if(ct_select=='yes'){
          var multi_emp = '';
          var multi='<input type="hidden" name="multi_emp[]" value="'+ct_id+'" class="form-txtbox p-2">';
        }else{
          var multi_emp = '<div class="mb-5"><input type="hidden" name="onlytxt_emp[]" value="'+ct_id+'" class="form-txtbox p-2"><input type="text" name="employee_txt[]" class="form-txtbox p-2 mb-5"></div>';
          var multi='';
        }
        
        
        /*if(acc_item=='Other - CR'){
          var employee_txt = ''; 
        }else{
          var employee_txt = '';
        }*/
        dynamic_chks+='<div class="w-100 mt-5"><div class="light-orange w-15 d-inline mr-5 mt-0 float-left mb-1" ><label class="item-checkbox item-content"><input type="checkbox" name="employee[]" value="'+ct_id+'"><i class="icon icon-checkbox"></i></label></div> <div class="light-orange w-80 d-inline mb-1"><div class="accordion-item"><a href="#" class="item-content item-link"><div class="item-inner"><div class="item-title grey-txt font-12 fw-500">'+ct_name+' - '+ct_mail+'</div></div></a><div class="accordion-item-content nobgclr elevation-10"><div class="block"><a href="#" class="item-link smart-select" data-searchbar="true" data-searchbar-placeholder="Search Position">';
        if(acc_item!='Other'){
          dynamic_chks+='<select name="emp_candi_'+h+'[]" id="emp_list_'+h+'" class="form-txtbox p-2" multiple ></select><div class="item-content"><div class="item-inner"><div class="item-title">SELECT EMPLOYEE</div></div></div>';
        }
        dynamic_chks+= '</a>'+multi_emp+txt_inform+multi+'</div></div></div></div> <div>';
      }
      $("#emp_div").html(dynamic_chks);
      var cust_dynamic_chks='';
      for(var k=0;k<det_cust.length;k++){
        var cust_ct_id = det_cust[k].ct_id;
        var cust_ct_name = det_cust[k].ct_name;
        var cust_ct_mail = det_cust[k].ct_mail;
        var cust_acc_item = cust_ct_name;
        var cust_ct_select = det_cust[k].ct_select;
        if(cust_ct_select=='yes'){
          var multi_candi = '';
          var multi='<input type="hidden" name="multi[]" value="'+cust_ct_id+'" class="form-txtbox p-2">';
        }else{
          var multi_candi = '<div class="mb-5"><input type="text" name="customer_txt[]" class="form-txtbox p-2"><input type="hidden" name="onlytxt[]" value="'+cust_ct_id+'" class="form-txtbox p-2"></div>';
          var multi='';
        }
        

        cust_dynamic_chks+='<div class="w-100 mt-5"><div class="light-orange w-15 d-inline mr-5 mt-0 float-left mb-1" ><label class="item-checkbox item-content"><input type="checkbox" name="customer[]" value="'+cust_ct_id+'"><i class="icon icon-checkbox"></i></label></div> <div class="light-orange w-80 d-inline mb-1"><div class="accordion-item"><a href="#" class="item-content item-link"><div class="item-inner"><div class="item-title grey-txt font-12 fw-500">'+cust_ct_name+" - "+cust_ct_mail+'</div></div></a><div class="accordion-item-content nobgclr elevation-10"><div class="block"><a href="#" class="item-link smart-select" data-searchbar="true" data-searchbar-placeholder="Search Position">';
          if(cust_acc_item!='Short supply' && cust_acc_item!='Uninformed Leave' && cust_acc_item!='Field Officer not visiting site' && cust_acc_item!='Stability' && cust_acc_item!='Theft' &&cust_acc_item!='Fire' &&cust_acc_item!='Other'){
            cust_dynamic_chks+='<select name="cust_candi_'+k+'[]" id="cust_list_'+k+'" class="form-txtbox p-2" multiple ></select><div class="item-content"><div class="item-inner"><div class="item-title">SELECT EMPLOYEE</div></div></div>';
          }
          cust_dynamic_chks+='</a>'+multi_candi+multi+'</div></div></div></div> <div>';
      }
      $("#cust_div").html(cust_dynamic_chks);
    }
  });
  app.preloader.hide();
});
function comp_type(comptype){
  var sel_comp = $("#company_name").val();
  if(comptype=='Employee'){
    $('#complain_cus').removeClass("display-block");
    $('#complain_cus').addClass("display-none");
    $('#complain_emp').removeClass("display-none");
    $('#complain_emp').addClass("display-block");
  }else if(comptype=='Customer'){
    $('#complain_cus').removeClass("display-none");
    $('#complain_cus').addClass("display-block");
    $('#complain_emp').removeClass("display-block");
    $('#complain_emp').addClass("display-none");
  }
  $.ajax({
    method: "POST",
    url: base_url+'liveappcontroller/getcompEmps',
    data: {'sel_comp': sel_comp },
    success: function (result) {
      var res = $.parseJSON(result);
      var det_empl = res.employee;
      var comp_emp = res.comp_emp;
      var det_cust = res.customer;

      //console.log("@@@"+det_empl);
      //console.log("@@@"+comp_emp);
      /*for(var a=0;a<det_empl.length;a++){
        var ct_select = det_empl[a].ct_select;
        if(ct_select=='yes'){
          if(result.length>0){                    
            if (res.status == 'Success') {
              if(comptype=='Employee'){  
                $("#emp_list_"+a).html(res.html);
              }else if(comptype=='Customer'){
                $("#cust_list_"+a).html(res.html);
              }                   
            }
          }
        }
      }  */   
      //alert(comptype);
      if(comptype=='Employee'){  
        for(var a=0;a<det_empl.length;a++){
          var ct_select = det_empl[a].ct_select;
          if(ct_select=='yes'){
            if(result.length > 0){
              if (res.status == 'Success') {
                $("#emp_list_"+a).html(res.html);
              }
            }else{
              if (res.status == 'Success') {
               $("#emp_list_"+a).html('<select name="emp_candi_'+a+'[]" id="emp_list_'+a+'" class="form-txtbox p-2"></select>');
             }
            }
          }
        }
      }else if(comptype=='Customer'){
        //console.log(comp_emp);
        //console.log(det_cust);
        //alert(comp_emp.length);
        for(var a=0;a<det_cust.length;a++){
          var ct_select = det_cust[a].ct_select;
          if(ct_select=='yes'){
            if(result.length > 0){
              if (res.status == 'Success') {
                $("#cust_list_"+a).html(res.html);
              }
            }else{
              if (res.status == 'Success') {
                $("#cust_list_"+a).html('<select name="cust_candi_'+a+'[]" id="cust_list_'+a+'" class="form-txtbox p-2"></select>');
              }
            }
          }
        }
      }            
    }  
  });
}
function getContPerson(sel_comp){
  var comp_type = $("#complain_type").val();
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/getContPer',
    data:{'sel_comp':sel_comp}, 
    success:function(res){
      var jsonres = $.parseJSON(res);
      var json_cont = jsonres.lead_data;
      //console.log(json_cont);
      if(json_cont.length==0){
      }else{
        var cont_person = json_cont[0].contact_person;
        var split_cper = cont_person.split("|");
        var cp_list='';
        cp_list='<option value="">---SELECT---</otion>';
        for(var k=0;k<split_cper.length;k++){
          cp_list+='<option value="'+split_cper[k]+'">'+split_cper[k]+'</option>';
        }    
        $("#cont_person").html(cp_list);    
      }
    }
  });

  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/assignedPayroll',
    data:{'sel_comp':sel_comp,'assingn_type':'PR','u_department':'Payroll'}, 
    success:function(pr_per){
      var jsonpr_per = $.parseJSON(pr_per);
      var json_oprn_person = jsonpr_per.oprn_person;
      //console.log(json_oprn_person);
      var op_person = [];
      var op_uid = [];       
      var prp_list='';        
      for(var k=0;k<json_oprn_person.length;k++){
        op_person.push(json_oprn_person[k].fname);
        op_uid.push(json_oprn_person[k].u_id);
      }    
      var opperson=op_person.join(" - ");
      var opuid=op_uid.join("|");   
      $("#payroll_person").val(opperson);
      $("#hidd_payroll_person").val(opuid);
    }
  });

  $.ajax({
    type:'POST',      
    url:base_url+'liveappcontroller/assignedPayroll',
    data:{'sel_comp':sel_comp,'assingn_type':'MK','u_department':'Recruitment'}, 
    success:function(pr_per){ 
      var jsonpr_per_rec = $.parseJSON(pr_per);
      var json_oprn_person_rec = jsonpr_per_rec.oprn_person;
      var op_person_rec = [];
      var op_uid_rec = [];      
      var prp_list='';        
      for(var a=0;a<json_oprn_person_rec.length;a++){
        //alert(json_oprn_person_rec[a].fname);          
        op_person_rec.push(json_oprn_person_rec[a].fname);
        op_uid_rec.push(json_oprn_person_rec[a].u_id);
      }    
      var mkperson = op_person_rec.join(" - ");
      var mkuid = op_uid_rec.join("|");      
      $("#recrutment_person").val(mkperson);    
      $("#hidd_recrutment_person").val(mkuid); 
    }
  });


  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/cosmosOPperson',
    data:{'sel_comp':sel_comp}, 
    success:function(res){
      var jsonpr_res = $.parseJSON(res);
      var json_cosmos_per = jsonpr_res.FLDperson;
      var json_cosmos_perid = jsonpr_res.Flduid;   
      //alert(json_cosmos_per+"----"+json_cosmos_perid);   
      $("#operation_name").val(json_cosmos_per);
      $("#operation_id").val(json_cosmos_perid); 
    }
  });

  /*$.ajax({
    method: "POST",
    url: base_url+'liveappcontroller/getcompEmps',
    data: {'sel_comp': sel_comp },
    success: function (result) {
      var res = $.parseJSON(result);
      var det_empl = res.employee;
      console.log("@@@"+det_empl);
      for(var a=0;a<det_empl.length;a++){
        var ct_select = det_empl[a].ct_select;
        alert(ct_select);
        alert(comp_type);
        if(ct_select=='yes'){
          if(result.length>0){                    
            if (res.status == 'Success') {
              if(comp_type=='Employee'){  
                $("#emp_list_"+a).html(res.html);
              }else if(comp_type=='Customer'){
                $("#cust_list_"+a).html(res.html);
              }                   
            }
          }
        }
      }                
    }  
  });*/
}
function add_complain(){
  var company_name = $("#company_name").val();
  var cont_person = $("#cont_person").val();
  var complain_type = $("#complain_type").val();
  if(company_name==''){
    app.dialog.alert("Select company");
    return false;
  }else if(cont_person==''){
    app.dialog.alert("Select contact person");
    return false;
  }else if(complain_type==''){
    app.dialog.alert("Select complain type");
    return false;
  }else{
    var session_uid = window.localStorage.getItem("session_uid");
    var session_ulevel = window.localStorage.getItem("session_ulevel");
    var add_comp_form = $(".add_comp").serialize();
    //console.log(add_comp_form);
    $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/add_Complain',
    data:add_comp_form+"&session_uid="+session_uid,
    success:function(comp_ins){
      console.log(comp_ins);
      if(comp_ins=='inserted'){
        var toastIcon = app.toast.create({
          icon: app.theme === 'ios' ? '<i class="f7-icons">check_round</i>' : '<i class="f7-icons">check_round</i>',
          text: 'Complain added successfully.',
          position: 'center',
          closeTimeout: 5000,
        });        
        app.preloader.hide();
        toastIcon.open();
      }else if(comp_ins=='not'){ 
        var toastIcon = app.toast.create({
          icon: app.theme === 'ios' ? '<i class="f7-icons">check_round</i>' : '<i class="f7-icons">check_round</i>',
          text: 'Problem in adding complain.',
          position: 'center',
          closeTimeout: 6000,
        });
        app.preloader.hide();
        toastIcon.open();
      }     
      mainView.router.navigate("/complain_list/");
    }
  });
  }
}
$$(document).on('page:init', '.page[data-name="add_person"]', function (e) {
  checkConnection();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/add_person',
    data:{'uid':session_uid,'session_ulevel':session_ulevel,'session_department':session_department}, 
    success:function(dropres){
      var json_res = $.parseJSON(dropres);
      var compny = json_res.cmpny;
      var design = json_res.designation;
      //console.log(design);
      var comps='';
      var designation='';
      comps+='<option value="">---SELECT---</option>';
      for(var k=0;k<compny.length;k++){
        var csid = compny[k].cs_id;
        var cs_invoice_name = compny[k].cs_invoice_name;
        comps+='<option value='+csid+'>'+cs_invoice_name+'</option>';
      }
      $("#company_name").html(comps);      
      designation+='<option value="">---SELECT---</option>';
      for(var h=0;h<design.length;h++){
        var d_id = design[h].d_id;
        var d_name = design[h].d_name;
        designation+='<option value='+d_id+'>'+d_name+'</option>';
      }
      designation+='<option value="other_opt">Other</option>';
      $("#contact_designation").html(designation); 
      app.preloader.hide();
    } 
  });  
});
function getDesign(sel_design){
  if(sel_design=='other_opt'){
    $('#other_desi').removeClass("display-none");
    $('#other_desi').addClass("display-block");
  }else{
    $('#other_desi').removeClass("display-block");
    $('#other_desi').addClass("display-none");
  }
}
function add_person(){
  checkConnection();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var add_person_from = $(".add_person").serialize();
  //console.log(add_person_from); 
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/addPerson',
    data:add_person_from+"&session_uid="+session_uid,
    success:function(prsn_ins){
      //console.log(prsn_ins); 
      app.dialog.alert("Person added successfully!");
      app.preloader.hide();
      mainView.router.navigate("/complain_list/");
      /*if(comp_ins=='inserted'){
        var toastIcon = app.toast.create({
          icon: app.theme === 'ios' ? '<i class="f7-icons">check_round</i>' : '<i class="f7-icons">check_round</i>',
          text: 'Pserson added successfully.',
          position: 'center',
          closeTimeout: 5000,
        });        
        app.preloader.hide();
        toastIcon.open();
      }else if(comp_ins=='not'){ 
        var toastIcon = app.toast.create({
          icon: app.theme === 'ios' ? '<i class="f7-icons">check_round</i>' : '<i class="f7-icons">check_round</i>',
          text: 'Problem in adding pserson.',
          position: 'center',
          closeTimeout: 6000,
        });
        app.preloader.hide();
        toastIcon.open();
      }
      mainView.router.navigate("/complain_list/");*/    
    }  
   });      
}

$$(document).on('page:init', '.page[data-name="daily_visit_report"]', function (e) {
  checkConnection();
  chkStatusAndPwd();
  var session_fname = window.localStorage.getItem("session_fname");
  var session_department = window.localStorage.getItem("session_department");
  var session_mobile = window.localStorage.getItem("session_mobile");
  var session_ulevel = window.localStorage.getItem("session_ulevel"); 
  var session_uid =  window.localStorage.getItem("session_uid");

  var d = new Date();
  var month = d.getMonth()+1;
  var day = d.getDate();
  var output = ((''+day).length<2 ? '0' : '') + day + '/' +
      ((''+month).length<2 ? '0' : '') + month + '/' +
      d.getFullYear();  

  var from_days='<option value="">FROM DATE</option>';
  var to_days='<option value="">TO DATE</option>';
  from_days+='';
  to_days+='';
  for(var k=1;k<=31;k++){
    if(k<=9){
      k="0"+k; 
    }else{
      k=k;
    }
    if(day==k){
      var selected='selected';
    }else{
      var selected='';
    }
    from_days+='<option value="'+k+'" '+selected+'>'+k+'</option>';
    to_days+='<option value="'+k+'" '+selected+'>'+k+'</option>';
  }
  $("#from_dt").html(from_days);
  $("#to_dt").html(to_days);

  //var dob_mnth='';
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  from_mnth+='<option value="">FROM MONTH</option>';
  to_mnth+='<option value="">TO MONTH</option>';
  for(var h=0;h<monthNames.length;h++){
    var monthno=h+1;
    if(month == monthno){
      var sel_month = 'selected';
    }else{
      var sel_month = '';
    }
    from_mnth+='<option value="'+(h+1)+'" '+sel_month+'>'+monthNames[h]+'</option>';
    to_mnth+='<option value="'+(h+1)+'" '+sel_month+'>'+monthNames[h]+'</option>';
  }    
  $("#from_mnth").html(from_mnth);
  $("#to_mnth").html(to_mnth);

  var currentDate = new Date()
  var curr_year = currentDate.getFullYear();
  var add_years = curr_year + parseInt(2);
  var from_yr='';
  var to_yr='';
  from_yr+='<option value="">FROM YEAR</option>';
  to_yr+='<option value="">TO YEAR</option>'; 
  for(var m=1950;m<=add_years;m++){
    if(d.getFullYear() == m){
      var sel_year = 'selected';
    }else{
      var sel_year = '';
    }
    from_yr+='<option value="'+m+'" '+sel_year+'>'+m+'</option>';
    to_yr+='<option value="'+m+'" '+sel_year+'>'+m+'</option>';
  }    
  $("#from_yr").html(from_yr);
  $("#to_yr").html(to_yr);  

  var f_yr = $("#from_yr").val();
  var f_mnth = $("#from_mnth").val();
  var f_dt = $("#from_dt").val();

  var t_yr = $("#to_yr").val();
  var t_mnth = $("#to_mnth").val();
  var t_dt = $("#to_dt").val();

  var today_from = f_yr+"/"+f_mnth+"/"+f_dt; 
  var today_to = t_yr+"/"+t_mnth+"/"+t_dt;

  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/getTodayFieldVisit',
    data:{'today_from':today_from,'today_to':today_to,'session_ulevel':session_ulevel,'session_department':session_department,'session_uid':session_uid},
    success:function(today_vis){ 
      var vis_res= $.parseJSON(today_vis);
      var res_vis = vis_res.today_visit;
      //console.log(res_vis+"@@@@");
      var rep_tr='';
      var tot_data='';
      if(res_vis.length==0){
          rep_tr='<tr><td class="text-uppercase text-grey fw-600 font-14">No Visits.</td><td></td></tr>';
      }else{  
        tot_data+='<div class="block redtxt fw-500">Total Visits: ('+res_vis.length+')</div>'; 
        for(var i=0;i<res_vis.length;i++){
          var add_from='';
          var csd_id = res_vis[i].csd_id;
          var csd_invoice_name = res_vis[i].csd_invoice_name;
          var fv_dateTime = res_vis[i].fv_dateTime;
          var created_name = res_vis[i].created_name;
          var fv_from = res_vis[i].fv_from;
          if(session_ulevel == 1 || session_ulevel == 2 || session_ulevel == 3){
            $(".add_from").removeClass("display-none");
            $(".add_from").addClass("display-block");
            add_from+='</td><td class="text-muted font-10">'+created_name+'<strong>['+fv_from+']</strong>';
          }else{
            add_from='';  
          } 
          rep_tr+='<tr><td class="text-uppercase fw-500 font-10"><a href="#">'+csd_invoice_name+'</a><br/><i class="f7-icons font-10 text-muted mr-5">calendar_fill</i><span class="text-muted font-12">'+fv_dateTime+'</span></td>'+add_from+'</tr>';              
        } 
        $("#tot_data").html(tot_data); 
        $("#report_list").html(rep_tr); 
      } 
    }
  });
}); 

function inbetween_fieldvisit(){
  checkConnection();
  chkStatusAndPwd();
  var session_fname = window.localStorage.getItem("session_fname");
  var session_department = window.localStorage.getItem("session_department");
  var session_mobile = window.localStorage.getItem("session_mobile");
  var session_ulevel = window.localStorage.getItem("session_ulevel"); 
  var session_uid =  window.localStorage.getItem("session_uid");

  var f_yr = $("#from_yr").val();
  var f_mnth = $("#from_mnth").val();
  var f_dt = $("#from_dt").val();

  var t_yr = $("#to_yr").val();
  var t_mnth = $("#to_mnth").val();
  var t_dt = $("#to_dt").val(); 

  var today_from = f_yr+"/"+f_mnth+"/"+f_dt; 
  var today_to = t_yr+"/"+t_mnth+"/"+t_dt;

  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/getTodayFieldVisit',
    data:{'today_from':today_from,'today_to':today_to,'session_ulevel':session_ulevel,'session_department':session_department,'session_uid':session_uid},
    success:function(today_vis){ 
      var vis_res= $.parseJSON(today_vis);
      var res_vis = vis_res.today_visit;
      //console.log(res_vis+"@@@@");
      var rep_tr='';
      var tot_data='';
      if(res_vis.length==0){
          rep_tr='<tr><td class="text-uppercase text-grey fw-600 font-14">No Visits.</td><td></td></tr>';
      }else{
        tot_data+='<div class="block redtxt fw-500">Total Visits: ('+res_vis.length+')</div>'; 
        for(var i=0;i<res_vis.length;i++){ 
          
        //console.log(tot_data);  
          var add_from='';
          var csd_id = res_vis[i].csd_id;
          var csd_invoice_name = res_vis[i].csd_invoice_name;
          var fv_dateTime = res_vis[i].fv_dateTime;
          var created_name = res_vis[i].created_name;
          var fv_from = res_vis[i].fv_from;
          if(session_ulevel == 1 || session_ulevel == 2 || session_ulevel == 3){
            $(".add_from").removeClass("display-none");
            $(".add_from").addClass("display-block");
            add_from+='<td class="text-muted font-10">'+created_name+'<strong>['+fv_from+']</strong></td>';
          }else{
            add_from='';  
          } 
          
          rep_tr+='<tr><td class="text-uppercase fw-500 font-10"><a href="#">'+csd_invoice_name+'</a><br/><i class="f7-icons font-10 text-muted mr-5">calendar_fill</i><span class="text-muted font-12">'+fv_dateTime+'</span></td>'+add_from+'</tr>';              
        } 
        $("#tot_data").html(tot_data);  
        $("#report_list").html(rep_tr); 
      }
    }
  });


}

function searchCandidate(){
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var search_mob = $("#search_mob").val();
  //console.log(search_mob.length);
  if(search_mob.length==0){
    //console.log("empty");
    app.preloader.hide();
  }else{
    $.ajax({
      type:'POST', 
      url:base_url+'liveappcontroller/searchCandbyMob',
      data:{'search_mob':search_mob},
      success:function(search_res){      
        var search_cand = $.parseJSON(search_res);
        var list_search = search_cand.search_res_mob;
        //console.log(list_search.length); 
        var search_data='';
        $("#searchdata").removeClass("display-none");
        $("#searchdata").addClass("display-block");
        //alert("****"+list_search.length); 
        if(list_search.length == 0){
          search_data+='<tr><td class="text-capitalize redtxt font-12">No data found</td><td></td></tr>';
          $(".searchcnts").html("Total 0 result(s) found.");
        }else{
          var i=1;
          for(var m=0;m<list_search.length;m++){
            var name = list_search[m].cand_fname+" "+list_search[m].cand_lname;
            var reg_type = list_search[m].reg_type;
            var cand_id = list_search[m].cand_id;
            //console.log(reg_type+cand_id);
            if(reg_type!='NULL' && reg_type!=null && reg_type!='null'){ 
              //console.log("if");
              reg_type=reg_type; 
            }else{
              //console.log("else");
              reg_type='-';
            }
            search_data+='<tr onclick="showCandDetsandIntDets('+cand_id+')"><td class="font-10 fw-600"><a href="#">'+name+'</a></td><td class="font-10">'+reg_type+'</td></tr>'; 
            i++;
            $(".searchcnts").html("Total "+list_search.length+" result(s) found.");
          }
        }
        $("#search_info").html(search_data);
        app.preloader.hide();
      }
    });
  }
}
function showCandDetsandIntDets(cand_id){
  //alert(cand_id);  
  checkConnection();
  chkStatusAndPwd();
  mainView.router.navigate("/search_caninterview/");
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/searchcanddets',
    data:{'cand_id':cand_id,'session_uid':session_uid,'session_ulevel':session_ulevel,'session_department':session_department},
    success:function(res){
      var data='';
      var result = $.parseJSON(res);
      var searchintList = result.searchintList;
      //console.log("*************"+searchintList.length); 
      if(searchintList.length!=0){ 
        if(searchintList[0].cand_fname!=undefined){
          var fname = searchintList[0].cand_fname;
        }else{
          var fname = '';
        } 
        if(searchintList[0].cand_lname!=undefined){
          var lname = searchintList[0].cand_lname;
        }else{
          var lname = '';
        }
        if(searchintList[0].reg_type!=undefined){
          var regtype = searchintList[0].reg_type
        }else{
          var regtype = '';
        }
        if(searchintList[0].reg_num!=undefined){
          var regno = searchintList[0].reg_num;
        }else{
          var regno = '';
        }
        if(searchintList[0].cand_collor_type!=undefined){
          var coll_type = searchintList[0].cand_collor_type;
        }else{
          var coll_type = '';
        }
        if(searchintList[0].cand_mobile!=undefined){
          var cmob = searchintList[0].cand_mobile;
        }else{
          var cmob = '';
        } 
      }
      
      var name = fname+" "+lname;
      var reg_type = regtype;
      var reg_num = regno;
      var cand_collor_type = coll_type;
      var cand_mobile = cmob;   
      data+='<input type="hidden" name="hidd_candid" id="hidd_candid" value='+cand_id+' /><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Name</div><div class="item-cell text-grey font-14">'+name+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Type</div><div class="item-cell text-grey font-14">'+reg_type+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Reg code</div><div class="item-cell text-grey font-14">'+reg_num+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Collar type</div><div class="item-cell text-grey font-14">'+cand_collor_type+'</div></div></div></li><li class="item-link item-content"><div class="item-inner item-cell"><div class="item-row"><div class="item-cell grey-txt font-14 fw-600">Mobile</div><div class="item-cell text-grey font-14">'+cand_mobile+'</div></div></div></li>'; 
      data+='<div class="block"><div class="col-100"><div class="grey-txt fw-600"><h3>CANDIDATE INTERVIEW DETAILS</h3></div><div class="row mb-5"><div id="addintbtnDiv"></div></div><div class="data-table int_tbl"><table ><thead class="light-orange"><tr><th class="label-cell text-uppercase table-th"><strong># </strong></th><th class="label-cell text-uppercase table-th"><strong>Company details</strong></th></tr></thead><tbody id="intdetails"></tbody></table></div></div>';
      interviewDetails(cand_id);         
      $("#interview_det").html(data); 
      app.preloader.hide();
    }
  });
}
function interviewDetails(cand_id){
  checkConnection();
  chkStatusAndPwd();  
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  var tabledata='';
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/candCompInterviewsall',
    data:{'cand_id':cand_id},
    success:function(res){      
     var json_parse = $.parseJSON(res); 
     var intercand = json_parse.intercand;  
     //console.log("json_parse:::::::"+json_parse);        
     //console.log("intercand @@@@"+intercand);             
     //var datainter = json_parse.datainter;        
      var j=1;
      if(intercand.length > 0){
        var st_array = [];
        var add_intbtn  = ''; 
        for(var i=0;i<intercand.length;i++){        
          var company_name = intercand[i].company_name;
          var designation = intercand[i].designation;
          var STATUSNAME = intercand[i].STATUSNAME;
          var cand_id= intercand[i].cand_id;
          //console.log(STATUSNAME+" :: STATUSNAME");
          st_array.push(STATUSNAME);               
          //console.log(st_array+" :: st_array"+cand_id); 
          if(jQuery.inArray("SELECTED", st_array) != -1) {
            //console.log("is in array");
            add_intbtn='';
            $("#addintbtnDiv").html(add_intbtn);       
          } else {   
            //console.log("is NOT in array give interview button");  
            add_intbtn = '<button class="col button btn-goutline button-small button-outline font-8" onclick="add_interview('+cand_id+')"><i class="f7-icons font-12 mr-5">plus</i>Interview</button>';      
            $("#addintbtnDiv").html(add_intbtn);  
            //var add_intbtn = 'BUTTN HERE';          
          }        
                         
          var calledBY = intercand[i].calledBY;
          var cand_fname = intercand[i].cand_fname;
          var cand_email = intercand[i].cand_email;
          var cand_id = intercand[i].cand_id;
          //console.log(calledBY);  
          if(designation!=undefined && designation!=null){  
            var desig='<br/><span class="text-uppercase font-10 fw-500">Position : &nbsp;</span><span class="badge font-9 fw-600 mb-1">'+designation+'</span>';  
          }else{
            var desig='';    
          }
          if(STATUSNAME!=undefined && STATUSNAME!=null){   
            var stus='<br/><span class="text-uppercase font-10 fw-500 mt-5">Last Status : &nbsp;</span><span class="badge color-parrot font-9 fw-600 mb-1">'+STATUSNAME+'</span>';  
          }else{ 
            var stus='';      
          }
          if(calledBY!=undefined && calledBY!=null){   
            var caldby='<br/><span class="text-uppercase font-10 fw-500 mt-5">created by : &nbsp;</span><span class="badge color-blue font-9 fw-600 mb-1">'+calledBY+'</span>';  
          }else{ 
            var caldby='';          
          }

          tabledata+='<tr><td class="text-uppercase font-10 fw-500">'+j+'</td><td class="text-uppercase font-10 fw-500">'+company_name+desig+stus+caldby+'</td></tr>';    
          $("#intdetails").html(tabledata);                  
          app.preloader.hide();
          j++;
        }      
      }else{
        tabledata+='<tr><td class="text-uppercase font-10 fw-500">No Interviews</td></tr>';    
          $("#intdetails").html(tabledata);            
          app.preloader.hide();   
      }
    }
  });   
}

$$(document).on('page:init', '.page[data-name="expense_mgmt"]', function (e) {  
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_fname = window.localStorage.getItem("session_fname");
  var session_department = window.localStorage.getItem("session_department");
  var session_mobile = window.localStorage.getItem("session_mobile");
  var session_ulevel = window.localStorage.getItem("session_ulevel"); 
  var session_uid =  window.localStorage.getItem("session_uid");
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/expense_list',
    data:{'session_ulevel':session_ulevel,'session_department':session_department,'session_uid':session_uid},
    success:function(expense_res){ 
      var parse_exp = $.parseJSON(expense_res);
      var expense_data = parse_exp.expense;
      var expense_master = parse_exp.expense_master;
      var exp_data = '';
      if(expense_data.length==0){
        exp_data = '<tr><td class="text-uppercase text-grey fw-600 font-14">No Data available.</td><td></td></tr>';
      }else{        
        for(var i=0;i<expense_data.length;i++){
          var ex_id = expense_data[i].ex_id;
          var ex_status = expense_data[i].ex_status;
          var exuser = expense_data[i].exuser;
          var ex_travel_mode = expense_data[i].ex_travel_mode;
          var ex_purpose = expense_data[i].ex_purpose;
          var ex_other = expense_data[i].ex_other;
          var ex_date_from = expense_data[i].ex_date_from;
          var ex_km = expense_data[i].ex_km;

          if(session_ulevel==1 && session_department=='All'){
            if(ex_status!=''){    
              var chk ='<div id="triangle-topleft-dev"><span class="impfont fw-700 r-3"><i class="material-icons done_chk_approve font-12" style="transform:rotate(315deg);position: absolute;right:-4px;">done_all</i></span></div>';               
            }else{
              var chk='';         
            }     
          } 
          if(ex_purpose == 15){
            var ex_oth = ex_other;
          }else{
            for(var j= 0 ;j<expense_master.length;j++){
              var ep_id = expense_master[j].ep_id;
              var ep_name = expense_master[j].ep_name;
              if(ex_purpose == ep_id){
                var ex_oth = ep_name;
              }  
            }   
          }  
          if(ex_km!=''){                   
            var km='<br/><span class="text-muted">KM:<span class="ml-5 badge font-10 mb-5">'+ex_km+'</span>';    
          }else{            
            var km='';                 
          }     

          if(ex_travel_mode=='Two Wheeler'){     
            var t_mode = '<img src="img/icons/motor-sports.svg" class="wh-22"/>';  
          }else if(ex_travel_mode=='Auto'){
            var t_mode = '<img src="img/icons/rickshaw.svg" class="wh-20" />'; 
          }else if(ex_travel_mode=='Four Wheeler'){
            var t_mode = '<img src="img/icons/car.svg" class="wh-22"/>'; 
          }else if(ex_travel_mode=='Cab-Taxi'){
            var t_mode = '<img src="img/icons/taxi.svg" class="wh-20"/>';    
          }else if(ex_travel_mode=='Bus'){    
            var t_mode = '<img src="img/icons/bus.svg" class="wh-22"/>';  
          }else if(ex_travel_mode=='Train'){
            var t_mode = '<img src="img/icons/train.svg" class="wh-20"/>';
          }else if(ex_travel_mode=='Flight'){
            var t_mode = '<img src="img/icons/air-freight (1).svg" class="wh-16"/>';    
          }                  
                            
          //exp_data+='<tr><td class="text-uppercase fw-600 font-10"><a href="#" class="">'+chk+'</a><span class="ml-5">'+exuser+'</span><br/><span class=""><i class="f7-icons font-12 text-parrot ">calendar_fill</i></span><span class="ml-5">'+ex_date_from+'</span><br/>'+km+'<span class="ml-10">'+t_mode+'</span></span></td><td class="text-muted font-10"><a href="#" class="">'+ex_oth+'</a></td></tr>'; 
          exp_data+='<tr class="tr-border"><td class="text-uppercase fw-600 font-12"><a href="#" class=""><span class="">'+exuser+'</span></a>'+km+'<span class="ml-10">'+t_mode+'</span></span></td><td class="text-muted fw-500"><span class=""><i class="f7-icons font-14 text-parrot ">calendar_fill</i></span><span class="ml-5 text-muted font-11">'+ex_date_from+'</span><br/><span class="font-10">'+ex_oth+'</span>'+chk+'</td></tr>';        
          $("#exp_list").html(exp_data);     
          app.preloader.hide();                     
        }
      }    
    }
  });
});
function Traveltype(sel_ttype){
  if(sel_ttype==1){
    $('.for_local').removeClass("display-none");
    $('.for_local').addClass("display-block");
    $('.for_outstation').removeClass("display-block");
    $('.for_outstation').addClass("display-none")
  }else{
    $('.for_local').removeClass("display-block");
    $('.for_local').addClass("display-none");
    $('.for_outstation').removeClass("display-none");
    $('.for_outstation').addClass("display-block");
  }
} 
function TravelMode(select_tmode){ 
  if(select_tmode=='Four Wheeler' || select_tmode=='Two Wheeler'){
    $(".veh_typ").removeClass("display-none");
    $(".veh_typ").addClass("display-block");
    $('.vehicle').prop('required',true);
    $('.veh_other').removeClass("display-block");
    $('.veh_other').addClass("display-none");
    $('.vehother').prop('required',false);
    if(select_tmode=='Two Wheeler'){      
      $(".vehicle option[value='Diesel']").prop("disabled",true);
      $(".vehicle option[value='CNG']").prop("disabled",true);
    }else{
      $(".vehicle option[value='Diesel']").prop("disabled",false);
      $(".vehicle option[value='CNG']").prop("disabled",false);
    }
  }else if(select_tmode=='Flight'){
    $(".veh_typ").removeClass("display-block");
    $(".veh_typ").addClass("display-none");
    $('.vehicle').prop('required',false);
    $('.veh_other').removeClass("display-block");
    $('.veh_other').addClass("display-none");
    $('.vehother').prop('required',false);
  }else{
    $(".veh_typ").removeClass("display-block");
    $(".veh_typ").addClass("display-none");
    $('.vehicle').prop('required',false);
    $('.veh_other').addClass("display-block");
    $('.veh_other').removeClass("display-none");
    $('.vehother').prop('required',true);
  }
}
function fromcmp_other(selectcomp){
  var fromcompany = $("#fromcompany").val();
  if(fromcompany==00){
    $('.from_other').removeClass("display-none");
    $('.from_other').addClass("display-block");
  }else{
    $('.from_other').removeClass("display-block");
    $('.from_other').addClass("display-none");
    $.ajax({
      method: "POST",
      url: base_url+"liveappcontroller/get_deputation",
      data: {'cs_id': fromcompany},
      success: function (result) {
        var res = $.parseJSON(result);
        var unit_nm = res.unit_nm;
        var unit_div='';
        for(var i=0;i<unit_nm.length;i++){
          var dp_id = unit_nm[i].dp_id;
          var dp_unit_name = unit_nm[i].dp_unit_name;
          unit_div+='<option value="'+dp_id+'">'+dp_unit_name+'</option>';
          $(".deputation_div").html(unit_div);          
        }
      }
    });
  }
}
$$(document).on('page:init', '.page[data-name="add_expense"]', function (e) {  
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_fname = window.localStorage.getItem("session_fname");
  var session_department = window.localStorage.getItem("session_department");
  var session_mobile = window.localStorage.getItem("session_mobile");
  var session_ulevel = window.localStorage.getItem("session_ulevel"); 
  var session_uid =  window.localStorage.getItem("session_uid");
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/add_expenseform',    
    success:function(res){ 
      var parsdata = $.parseJSON(res);
      var company_data = parsdata.company;
      var expense_data = parsdata.expense; 
      var comp_dropdown = '';

      for(var i=0;i<company_data.length;i++){
        var cs_id = company_data[i].cs_id;
        var cs_invoice_name = company_data[i].cs_invoice_name; 
        comp_dropdown+='<option value="'+cs_id+'">'+cs_invoice_name+'</option>';        
      }
      comp_dropdown+='<option value="00">Other</option>';
      $(".fromcompany").html(comp_dropdown);
    }
  });
  app.preloader.hide();    
});

// -------------------------------------- SEARCH PROVISIONAL REG ------------------------------- //
function searchProreg(){
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var search_pro = $("#search_pro").val();
  $.ajax({
    type:'POST', 
    url:base_url+'liveappcontroller/searchregPRO',
    data:{'search_pro':search_pro,'uid':session_uid,'session_ulevel':session_ulevel},
    success:function(search_res){      
      var search_cand = $.parseJSON(search_res);
      var list_search = search_cand.proList;
      //console.log(list_search.length); 
      var st_int='';
      var j=1; 
      var search_data='';
      $("#searchdata").removeClass("display-none");
      $("#searchdata").addClass("display-block");
      //alert("****"+list_search.length); 
      if(list_search.length == 0){
        search_data+='<tr class=""><td class="text-uppercase fw-600 text-grey font-14">No Data Available.</td></tr>';
        $(".searchcnts").html("Total 0 result(s) found.");
      }else{
        var i=1;
        for(var m=0;m<list_search.length;m++){
          var cand_id = list_search[m].cand_id; 
          var cand_fname = list_search[m].cand_fname;
          var cand_mobile = list_search[m].cand_mobile;
          var cand_email = list_search[m].cand_email;  
          var created_by = list_search[m].createname;
          if(cand_mobile!=''){
            var cont = '<span class="text-muted"><i class="f7-icons font-14">phone_fill</i>&nbsp;:&nbsp'+cand_mobile+'</span>';
          }else{
            var cont = '<span class="text-muted">No Contact Found.</span>';
          }
          if(cand_email!=''){
            var email = '<span class="text-muted"><i class="f7-icons font-14">envelope_fill</i>&nbsp;:&nbsp'+cand_email+'</span>';
          }else{
            var email = '';
          }
          search_data+='<tr class="tr-border" id="pro_tr'+m+'"><td class="text-uppercase fw-600 font-10"><a class="" href="#">'+cand_fname+'</a><br/>'+cont+'<br/><span class="text-lowercase">'+email+'</span></td><td id="btn_'+m+'"></td></tr>';
          int_statusBtn(cand_id,m);
          $(".searchcnts").html("Total "+list_search.length+" result(s) found.");
        }
      }
      $("#provisional_list").html(search_data); 
      app.preloader.hide();
    }
  }); 
}

function searchDPO(){
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  var search_dpo = $("#search_dpo").val();
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/searchdpo',
    data:{'uid':session_uid,'session_ulevel':session_ulevel,'session_department':session_department,'search_dpo':search_dpo},
    success:function(list_res){
      var json = $.parseJSON(list_res);
      var json_list = json.dpoList;
      var json_vertlist = json.verti;
      var tot_vert = json.tot_vert;  
      var cont_no = json.cont_arr;  
      //console.log(json.cont_arr); 
      var dpolist=''; 
      var j=1;  
      if(json_list.length==0){
         dpolist+='<tr class=""><td class="text-uppercase fw-600 text-grey font-14">No Data Available.</td></tr>';
      }else{
        for(var i=0;i<json_list.length;i++){
          var company = json_list[i].cs_invoice_name;
          var contact = json_list[i].csd_contact_mobile;
          var cs_id = json_list[i].cs_id; 
          var l_id = json_list[i].l_id;    
          var nocon = cont_no[i][0];
          if(nocon!=''){
            var cont = '<span class="text-muted"><i class="f7-icons font-14">phone</i>&nbsp;:&nbsp'+nocon+'</span>';
          }else{
            var cont = '<span class="text-muted">No Contact Found.</span>';
          }
          dpolist+='<tr class="tr-border"><!--td>'+j+'</td--><td class="text-uppercase fw-500 font-12"><a class="" href="#" onclick="viewDPO('+cs_id+')">'+company+'</a><br/>'+cont;
          
          var verticles = json_vertlist[i];
          var tot = tot_vert[i];
          var vert=''; 
          $.each( verticles, function( key, value ) {        
            //console.log( key + ": " + value );
            vert+=key+" "+"("+value+") "; 
          });   
          dpolist+='<br/><i class="f7-icons font-10 text-muted fw-600">layers_fill</i>&nbsp;<span class="text-muted font-10 fw-600">'+vert+'</span><br/></td>';
          dpolist+='<td onclick="viewDPO('+cs_id+')" class="text-muted font-16"><i class="fa fa-eye font-14 text-muted"></i><span class="font-10 fw-600"> - ('+tot+')</span></td></tr>';
          //$("#dpo_list").html(dpolist); 
          j++;
        }
      }
      $("#dpo_list").html(dpolist); 
      app.preloader.hide();
    }
  });
}

//------------------------------------- SEARCH INTERVIEW & PLACEMENT --------------------------------- //
function searchintPlace(){
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  var search_intp = $("#search_intp").val();
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/searchInterPlace',
    data:{'uid':session_uid,'session_ulevel':session_ulevel,'search_intp':search_intp,'session_department':session_department}, 
    success:function(intervw_res){
      var json_field = $.parseJSON(intervw_res);
      var intrvw_list = json_field.int_list;
      //console.log(intrvw_list);
      var intrvw_info='';
      var int_cnt = '';
      if(intrvw_list.length==0){
         intrvw_info+='<tr class=""><td class="text-uppercase fw-600 text-grey font-14">No Data Available.</td></tr>';
      }else{
        for(var k=0;k<intrvw_list.length;k++){
          var comp_name= intrvw_list[k].cs_invoice_name;
          var cs_id = intrvw_list[k].cs_id;
          if(k==0){
            var cls = 'accordion-item-opened';
          }else{
            var cls = '';
          } 
          intrvw_info+='<tr class="tr-border" id="comp_tr_'+k+'" onclick="getInterview('+cs_id+','+"'"+comp_name+"'"+')"><td class="text-uppercase font-12 fw-500"><a class="" href="#">'+comp_name+'</a></td><td class="text-center"><span class="badge" id="cnt_'+k+'"></span></td></tr>';        
          getintCounts(cs_id,k);       
          //$("#intervw_info").html(intrvw_info);
                 
        }
      }
      $("#intervw_info").html(intrvw_info);
      app.preloader.hide();   
    }
  });
}

function searchselcandi(){
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  var search_candi = $("#search_candi").val();
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/searchselCandidateList', 
    data:{'uid':session_uid,'session_ulevel':session_ulevel,'search_candi':search_candi,'session_department':session_department}, 
    success:function(candi_res){
      var json_field = $.parseJSON(candi_res);
      var candi_list = json_field.candidates_sel;
      console.log(candi_list.length);
      var selcan_info='';
      var int_cnt = '';
      if(candi_list.length==0){
         selcan_info+='<tr class=""><td class="text-uppercase fw-600 text-grey font-14">No Data Available.</td></tr>';
      }else{
        for(var k=0;k<candi_list.length;k++){
          var comp_name= candi_list[k].cs_invoice_name;
          var cs_id = candi_list[k].cs_id;
          if(k==0){
            var cls = 'accordion-item-opened';
          }else{
            var cls = '';
          } 
          selcan_info+='<tr class="tr-border" id="candi_'+k+'" onclick="getCandisel('+cs_id+','+"'"+comp_name+"'"+')"><td class="text-capitalize font-12 fw-500"><a class="" href="#">'+comp_name+'</a></td><td class="text-center"><span class="badge" id="cntcandi_'+k+'"></span></td></tr>';    
          getCandiintCounts(cs_id,k);       
          //$("#selected_info").html(selcan_info);
          //app.preloader.hide();         
        }
      }
      $("#selected_info").html(selcan_info);
      app.preloader.hide();      
    }
  });
}
// --------------------------------------------- EMPLOYEE LIST SEARCH --------------------------------- //
function searchEmp(){
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  var search_emp = $("#search_emp").val();
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/searchemployeeList',
    data:{'uid':session_uid,'session_ulevel':session_ulevel,'session_department':session_department,'search_emp':search_emp}, 
    success:function(emp_res){
      var json_field = $.parseJSON(emp_res);
      var emp_list = json_field.emp_list;
      console.log(emp_list);
      var emp_info='';  
      var int_cnt = '';
      if(emp_list.length==0){
         emp_info+='<tr class=""><td class="text-uppercase fw-600 text-grey font-14">No Data Available.</td></tr>';
      }else{
        for(var k=0;k<emp_list.length;k++){
          var comp_name= emp_list[k].cs_invoice_name;
          var cs_id = emp_list[k].cs_id;
          if(k==0){
            var cls = 'accordion-item-opened';
          }else{
            var cls = '';
          } 
          emp_info+='<tr class="tr-border" onclick="getEmps('+cs_id+','+"'"+comp_name+"'"+')"><td class="text-uppercase font-12 fw-500"><a class="" href="#">'+comp_name+'</a></td><td class="text-center"><span class="badge" id="cntemp_'+k+'"></span></td></tr>';              
          getempcnts(cs_id,k);
          //$("#emp_info").html(emp_info);
          //app.preloader.hide();         
        }
      }
      $("#emp_info").html(emp_info);
      app.preloader.hide();    
    }
  });
}
// -------------------------------------- DAILY ACTIVITY SEARCH -------------------------------- //
function searchDailyAct(){
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  var search_dpo = $("#search_dpo").val();
  $.ajax({ 
    type:'POST', 
    //url:base_url+'liveappcontroller/fieldVisit',
    url:base_url+'liveappcontroller/searchdpo',
    data:{'uid':session_uid,'session_ulevel':session_ulevel,'session_department':session_department,'search_dpo':search_dpo}, 
    success:function(list_res){  
      var json_field = $.parseJSON(list_res);
      //console.log(json_field+"*******");
      var field_list = json_field.dpoList;
      var json_vertlist = json_field.verti;
      var tot_vert = json_field.tot_vert;  
      var cont_no = json_field.cont_arr; 
      var j=1;  
      //console.log(cont_no);  
      var fieldDiv='';
      var dcr='';
      if(field_list.length==0){
         fieldDiv+='<tr class=""><td class="text-uppercase fw-600 text-grey font-14">No Data Available.</td></tr>';
      }else{
        for(i=0;i<field_list.length;i++){
          var cs_id = field_list[i].cs_id;
          var l_id = field_list[i].l_id;
          var cs_invoice_name = field_list[i].cs_invoice_name;        
          var contact = field_list[i].csd_contact_mobile;
          var nocon = cont_no[i][0];  
          //console.log("CONTACT "+nocon);          
          if(nocon!=''){
            var cont= '<span class="text-muted"><i class="f7-icons font-14">phone</i>&nbsp;:&nbsp'+nocon+'</span>';
          }else{ 
            var cont= '<span class="text-muted">No Contact Found.</span>';
          }  

          /*if(contact!=''){
            var cont = '<span class="text-muted"><i class="f7-icons font-14">phone</i>&nbsp;:&nbsp'+contact+'</span>';
          }else{
            var cont = '<span class="text-muted">No Contact Found.</span>';
          }*/
          fieldDiv+='<tr class="tr-border"><td class="text-capitalize font-12 fw-500"><a class="" href="#">'+cs_invoice_name+'</a><br/><span class="text-muted font-12 fw-600">'+cont+'</span><td id="watch_'+i+'"></td></tr>';
          viewDetails(cs_id,l_id,i,cs_invoice_name);
          $("#fieldvisit_list").html(fieldDiv); 
          j++;
        }
      }
      app.preloader.hide();             
    }
  });
}
// --------------------------------------------- COMPLAIN SEARCH -------------------------------------- //
function searchCmpln(){
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  var search_comp = $("#search_comp").val();
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/searchcomplainList',
    data:{'uid':session_uid,'session_ulevel':session_ulevel,'search_comp':search_comp}, 
    success:function(comp_res){
      var json_comp = $.parseJSON(comp_res);
      var comp_list = json_comp.comp_list;
      //console.log(comp_list);
      var comp_info='';
      var int_cnt = '';
      for(var k=0;k<comp_list.length;k++){
        var comp_name= comp_list[k].cs_invoice_name;
        var cm_id = comp_list[k].cm_id; 
        var cm_company = comp_list[k].cm_company;
        var cm_contact_person = comp_list[k].cm_contact_person;
        var createname = comp_list[k].createname;
        var cm_user = comp_list[k].cm_user;
        var cm_create_on = comp_list[k].cm_create_on;
        comp_info+='<tr class="tr-border" id="comp_tr_'+k+'" onclick="showComplain('+cm_id+','+"'"+comp_name+"'"+','+cm_company+','+"'"+cm_contact_person+"'"+','+"'"+createname+"'"+','+"'"+cm_user+"'"+','+"'"+cm_create_on+"'"+')"><td class="text-uppercase font-12 fw-500"><a class="" href="#">'+comp_name+'</a><br/><span class="text-grey font-10"><i class="fa fa-calendar mr-5"></i>'+cm_create_on+'</span></td><td class="text-center" ><i class="fa fa-eye font-14 text-grey"></i></td></tr>';             
        $("#complain_list").html(comp_info);
        app.preloader.hide();         
      }
    }
  });
}
// --------------------------------------------- FEEDBACK SEARCH -------------------------------------- //
function searchFB(){
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  var search_feedback = $("#search_feedback").val();
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/searchfeedbacks',
    data:{'session_ulevel':session_ulevel,'uid':session_uid,'search_feedback':search_feedback},
    success:function(feedback_result){   
      var json_feedback = $.parseJSON(feedback_result);
      var feed_list = json_feedback.feedback; 
      var feedDiv='';
      if(feed_list.length==0){
         feedDiv+='<tr class=""><td class="text-uppercase fw-600 text-grey font-14">No Data Available.</td></tr>';
      }else{       
        for(i=0;i<feed_list.length;i++){ 
          var fb_id = feed_list[i].fb_id;
          var cs_invoice_name = feed_list[i].cs_invoice_name;
          var fb_date = feed_list[i].fb_date;
          var fb_contact_person = feed_list[i].fb_contact_person;
          feedDiv+='<tr class="tr-border"><td class="text-capitalize font-12 fw-500" onclick="showFeedback('+fb_id+')"><a class="" href="#">'+cs_invoice_name+'</a><br/><span class="text-muted font-12 fw-600">'+fb_contact_person+'</span></span></td><td><span class="text-muted"><!--i class="f7-icons font-14 mr-5">calendar_fill</i--><span class="text-muted font-12">'+fb_date+'</span><!--i class="fa fa-eye font-16 text-muted"></i--></td></tr>';
          //$("#feedback_list").html(feedDiv);
        }
      }
      $("#feedback_list").html(feedDiv);
      app.preloader.hide();             
    }
  });
}
// --------------------------------- NEW BUSINESS DEV & COMP SEARCH ----------------------------------- //
function searchNewBC(){
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  var search_newb = $("#search_newb").val();
  $.ajax({
    type:'POST', 
    data:{'search_newb':search_newb},
    url:base_url+'liveappcontroller/searchnewBusinessList',    
    success:function(buss_list){
      var json_dev = $.parseJSON(buss_list);
      var json_buslist = json_dev.bus_dev;
      var list='';
      for(var i=0;i<json_buslist.length;i++){
        var bd_id = json_buslist[i].bd_id;
        var bd_company = json_buslist[i].bd_company;
        var bd_industry = json_buslist[i].bd_industry;
        var bd_type = json_buslist[i].bd_type;
        //console.log("***"+bd_type);
        if(bd_industry!=''){
          var ind='<span class="text-muted font-12"><span class="fw-500">Industry:</span> '+bd_industry+'</span>';
        }else{
          var ind='';
        }

        if(bd_type=='Development'){
          var imp_triangle = '<div id="triangle-topleft-dev"><span class="impfont fw-700 r-3">Dev</span></div>';
        }else if(bd_type=='Competitor'){
          var imp_triangle = '<div id="triangle-topleft-comp"><span class="impfont fw-700 r-1">Comp</span></div>';
        }
        
        list+='<tr class="tr-border"><td class="text-capitalize font-12 fw-500"><a class="" href="#" onclick="showBusinessdet('+bd_id+')">'+bd_company+'</a><br/>'+ind+'</td><td onclick="editBusinessData('+bd_id+','+"'"+bd_type+"'"+')"><i class="fa fa-pencil-square-o font-16 text-muted edit-icon"></i>'+imp_triangle+'</td><!--td><i class="fa fa-eye font-16 text-muted orange-txt"></i></td--></tr>';
        
        $("#business_list").html(list); 
        app.preloader.hide();
      }
    }
  });
}
// -------------------------------------------SELELCTED CANDIDATE SUBLIST SEARCH ---------------------- //
function searchCandidatesselcted(){
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  var search_selemp = $("#search_selemp").val();
  var cs_id =$("#hidd_cs_id").val();
  var comp_name = $("#hidd_compnm").val();
  var sel_dets='';
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/SearchcandselStatus',
    data:{'cs_id':cs_id,'search_selemp':search_selemp}, 
    success:function(clist_status){
      var json_status = $.parseJSON(clist_status);
      var candi_list = json_status.selc_status;
      //console.log(candi_list);
      var tot_ints = candi_list.length;
      var block = '<div class="block"><div class="col-100"><div class="grey-txt fw-600"><h3>'+comp_name+' ('+tot_ints+')</h3></div></div></div>';
      $("#compint_details").html(block);
      sel_dets+='<div class="list"><ul>';
      if(tot_ints==0){
         sel_dets+='<li class=""><div class="item-inner item-cell"><div class="item-row ml-10 mt-5"><div class="item-cell orange-txt font-14 fw-600">No Employees.</div></div></div></li><li></li>';
      }else{
        for(var i=0;i<tot_ints;i++){
          var cn_nm = candi_list[i].cand_fname+" "+candi_list[i].cand_lname;
          var cn_dob = candi_list[i].cand_dob;
          var cn_mob = candi_list[i].cand_mobile;
          var cn_intdt_tm = candi_list[i].int_date_time;  
          var cn_int_status = candi_list[i].i_status;  
          var cand_cmp_id = candi_list[i].cand_cmp_id;
          var reg_num = candi_list[i].reg_num;
          var positn = candi_list[i].designation;
          if(positn!='' && positn!=null){
            positn='<span class="redtxt fw-500">('+positn+')</span>';
          }else{ 
            positn='';
          }
          if(i%2==1){
            var cls = 'light-orange';
          }else{
            var cls = ''; 
          }
          sel_dets+='<tr class="tr-border"><td class="text-capitalize font-10 fw-500"><a class="" href="#">'+cn_nm+ positn+'</a><br/><span class="grey-txt font-10">Reg No: '+reg_num+'</span></td><td class="text-center"><button class="col button button btn-goutline button-outline text-uppercase font-8 popup-open" data-popup=".popup-joindt" onclick="getdatePopup('+cand_cmp_id+')">Enter Date</button></td></tr>';    
          }         
        }      
      sel_dets+='</ul></div>';
      $("#sel_dets").html(sel_dets);
      app.preloader.hide(); 
    }
  });
}
// --------------------------------------------- EMPLOYEE LIST SUB LIST SEARCH ------------------------ //
function searchEmployees(){
  checkConnection();
  chkStatusAndPwd();
  app.preloader.show();
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  var search_empl = $("#search_empl").val();
  var cs_id = $("#hidd_csid").val();
  var comp_name = $("#hidd_comp").val();
  var int_cnt='';
  var emp_dets = '';
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/searchtotEmps',
    data:{'cs_id':cs_id,'search_empl':search_empl}, 
    success:function(empslist){
      var json_emps = $.parseJSON(empslist);
      var elist = json_emps.totemps;
      var tot_eints = elist.length;
      var block = '<div class="block"><div class="col-100"><div class="grey-txt fw-600"><h3>'+comp_name+' ('+tot_eints+')</h3></div></div></div>';
      $("#compint_details").html(block);
      emp_dets+='<div class="list"><ul>';
      if(tot_eints==0){
         emp_dets+='<li class=""><div class="item-inner item-cell"><div class="item-row ml-10 mt-5"><div class="item-cell orange-txt font-14 fw-600">No Employees.</div></div></li>';
      }else{
        for(var i=0;i<tot_eints;i++){
          var fnm = elist[i].cand_fname;
          var lnm = elist[i].cand_lname;
          if(fnm!=null){
            var cn_nm = fnm+" "+lnm;
          }else{
            var cn_nm='';
          }  
         // var cn_nm = elist[i].cand_fname+" "+elist[i].cand_lname;
          var cn_dob = elist[i].cand_dob;
          var cn_mob = elist[i].cand_mobile;
          var cn_intdt_tm = elist[i].int_date_time;  
          var cn_int_status = elist[i].i_status;  
          var cand_cmp_id = elist[i].cand_cmp_id;
          var reg_num = elist[i].reg_num;
          var int_joineedate = elist[i].int_joineedate;
          var positn = elist[i].designation;
          if(positn!='' && positn!=null){
            positn='<span class="redtxt fw-500 font-10">('+positn+')</span>';
          }else{
            positn='';
          }
          if(reg_num!='' && reg_num!=null){
            reg_num=reg_num
          }else{
            reg_num='';
          }
          //alert(cand_cmp_id);
            if(i%2==1){
              var cls = 'light-orange';
            }else{
              var cls = ''; 
            }
           // emp_dets+='<tr class="tr-border"><td class="text-capitalize font-10 fw-500"><a class="" href="#">'+cn_nm+'</a><br/><span class="grey-txt font-10">DOB: '+cn_dob+'</span><br/><i class="f7-icons font-10 text-muted">phone_fill</i> <span class="grey-txt font-10">'+cn_mob+'</span></td><td class="text-center grey-txt font-12 font-500">'+int_joineedate+'</td></tr>';
            emp_dets+='<tr class="tr-border"><td class="text-capitalize font-12 fw-500"><a class="" href="#">'+cn_nm+ positn+'</a><br/><span class="grey-txt font-10">Reg No: '+reg_num+'</span><br/></td><td class="text-center grey-txt font-12 font-500">'+int_joineedate+'</td></tr>';    
          }         
        }      
      emp_dets+='</ul></div>';
      $("#emp_dets").html(emp_dets);
      app.preloader.hide(); 
    }
  });
}
// --------------------------------------------- L O G O U T ------------------------------------------ //
function logOut(){
  checkConnection();
  chkStatusAndPwd();
  $(".popover-backdrop.backdrop-in").css("visibility","hidden");
  $(".popover.modal-in").css("display","none"); 
  window.localStorage.removeItem("session_uid"); 
  window.localStorage.removeItem("session_fname"); 
  window.localStorage.removeItem("session_lname"); 
  window.localStorage.removeItem("session_uname");
  window.localStorage.removeItem("session_ulevel");
  window.localStorage.removeItem("session_department");
  window.localStorage.removeItem("session_mobile");
  window.localStorage.removeItem("session_email"); 
  window.localStorage.removeItem("session_loc");
  window.localStorage.removeItem("session_dp");  
  window.localStorage.removeItem("session_u_pwd");
  window.localStorage.removeItem("session_u_status");   
  //app.router.navigate('/');   
  app.panel.close();
  app.panel.destroy();  
  //mainView.router.navigate("/");   
  //app.views.main.router.navigate("/");
  //mainView.router.navigate('/');
  window.location.href="index.html";
} 
/*function openStatusAlert(cs_id){
  var inputOptionsPromise = new Promise(function(resolve) {
    // get your data and pass it to resolve()
    setTimeout(function() {
      $.getJSON(base_url+"liveappcontroller/intStatusMaster", function(data) {
        var len = data.stat;
        for(var i=0;i<len.length;i++){
          console.log(len[i]);
        }
        resolve(len)
      });
    }, 1000)
  });

  const { value: status } =  Swal.fire({
    title: '<span class="font-18">Update Interview Status</span>',
    input: 'select',
    inputOptions: inputOptionsPromise,
    inputPlaceholder: 'Select Status',
    showCancelButton: true,    
  }) 
}*/



/*$$(document).on('page:init', '.page[data-name="inf_scroll"]', function (e) {
  var session_uid = window.localStorage.getItem("session_uid");
  var session_ulevel = window.localStorage.getItem("session_ulevel");
  var session_department = window.localStorage.getItem("session_department");
  var html = '';
  $.ajax({ 
    type:'POST', 
    url:base_url+'liveappcontroller/interviewList',
    data:{'uid':session_uid,'session_ulevel':session_ulevel,'session_department':session_department}, 
    success:function(intervw_res){
      var json_field = $.parseJSON(intervw_res);
      var intrvw_list = json_field.int_list;
      console.log(intrvw_list.length);
      // var intrvw_info='';      
      var int_cnt = '';
      if(intrvw_list.length==0){
         html+='<tr class=""><td class="text-uppercase fw-600 text-grey font-14">No Data Available.</td></tr>';
      }else{
        // Loading flag
        var allowInfinite = true;  
        // Last loaded index
        //var lastItemIndex = $$('.list li').length;
        var lastItemIndex = $$('#intervw_info td').length; 
        // Max items to load
        var maxItems = 200;
        // Append items per load 
        var itemsPerLoad = 20;

        // Attach 'infinite' event handler
$$('.infinite-scroll-content').on('infinite', function () {
  // Exit, if loading in progress
  if (!allowInfinite) return;

  // Set loading flag
  allowInfinite = false;

  // Emulate 1s loading
  setTimeout(function () { 
    // Reset loading flag
    allowInfinite = true;

    if (lastItemIndex >= maxItems) {
      // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
      app.infiniteScroll.destroy('.infinite-scroll-content');
      // Remove preloader
      $$('.infinite-scroll-preloader').remove();
      return;  
    }
    var tot = parseInt(lastItemIndex) + parseInt(itemsPerLoad); 
    
        for(var k=lastItemIndex + 1; k<=intrvw_list.length ;k++){
          var comp_name= intrvw_list[k].cs_invoice_name;
          var cs_id = intrvw_list[k].cs_id;
          if(k==0){
            var cls = 'accordion-item-opened';
          }else{ 
            var cls = '';
          } 
          html+='<tr class="tr-border" id="comp_tr_'+k+'" onclick="getInterview('+cs_id+','+"'"+comp_name+"'"+')"><td class="text-uppercase font-12 fw-500"><a class="" href="#">'+comp_name+'</a></td><td class="text-center"><span class="badge" id="cnt_'+k+'"></span></td></tr>';        
          getintCounts(cs_id,k);       
          //$("#intervw_info").html(intrvw_info);
                 $$('#intervw_info').html(html); 
        } 
      
      //$("#intervw_info").html(html); 
      
      lastItemIndex = $$('#intervw_info td').length;
  }, 1000); 
});
      app.preloader.hide();   
    } 
  }     

});
});*/