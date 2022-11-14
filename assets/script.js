$('.saveBtn').click(function (event) {
    var text = $(event.target).prev().val();
    var dateKey = $(event.target).parent().attr("id");
  
    localStorage.setItem(dateKey, text);
  })  
  
  
  // Date Added
  
  function setDate() {
    $("#currentDay").html(moment().format('dddd, MMMM Do YYYY, h:mm a'));
  }
  setDate();
  
  // Color coardination 
  $(".time-block").each(function () {
    var timeSlot = moment().hour();
    var timeBlock = parseInt($(this).attr("id"));
    
  $(this).children("textarea").val(localStorage.getItem(timeBlock));
    if (timeBlock < timeSlot) {
        $(this).addClass("past");
    }
    else if (timeBlock === timeSlot) {
        $(this).removeClass("past");
        $(this).addClass("present");
    }
  
    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
  })