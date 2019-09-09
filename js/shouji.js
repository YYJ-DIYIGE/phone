const PAGE = {
   data:{
      post: 'https://www.jevescript.com/api/task/mobile',
      message:null,
    },
  init:function(){
    this.bing();
  },
  bing:function(){
    $('#play').on('touchstart',this.playVideo);
     $('#close').on('touchstart',this.closeVideo);
    $('#getBtn').on('touchstart',this.getBtnPOST);
    $('#getTel').on('focus',this.getTelfocus);
    $('#getTel').on('blur',this.getTelblur);
    $('.scrollTop').on('touchstart',this.scrollTop);
  },
  scrollTop:function(){
    $('html,body').animate({scrollTop:0},1000);
  },
  getTelblur:function(){
     $('.bottom-fixed').css('display','block');
  },
  getTelfocus:function(){
    $('.bottom-fixed').css('display','none');
  },
  playVideo:function(){
    $('.video-mask').css('display','block');
    $('#video').get(0).play();
  },
  closeVideo:function(){
    $('.video-mask').css('display','none');
    $('#video').get(0).pause();
  },
  getBtnPOST:function(){
    let getTelValue = $('#getTel').val();
    $.ajax({
      type: 'POST',
      url: PAGE.data.post,
      data:{
         phone: getTelValue
      },
      success: ( res )=>{
       let message = res.message;
        PAGE.Tips(message);
      }
    })
  },
  Tips:function(message){
    console.log(message)
    switch (message){
      case '手机号不能为空':
          $("#Tips").text('手机号不能为空');
          break;
      case '手机格式错误' :
          $("#Tips").text('手机格式错误');
          break;
      case '提交成功' :
          $(".home-page").css('display','none')
          $('.success-page').css('display','block')
          break;
    }
  }
}
PAGE.init();