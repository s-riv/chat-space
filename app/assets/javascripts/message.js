$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="MessageList">
          <div class="MessageHead">
            <div class="MessageHead__UserName">
              ${message.user_name}
            </div>
            <div class="MessageHead__Date">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__Content">
              ${message.content}
            </p>
            <img class="Message__Image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="MessageList">
        <div class="MessageHead">
          <div class="MessageHead__UserName">
            ${message.user_name}
          </div>
          <div class="MessageHead__Date">
            ${message.created_at}
          </div>
        </div>
        <div class="Message">
          <p class="Message__Content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.ChatMain__MessageList').append(html);      
      $('form')[0].reset();
      $('.ChatMain__MessageList').animate({ scrollTop: $('.ChatMain__MessageList')[0].scrollHeight});
      $('.Form__Submit').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.Form__Submit').prop("disabled", false);
  });

  });
});