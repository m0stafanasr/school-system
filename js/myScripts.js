function showModal(){
    $("#exampleModal").modal()
    
}

$(document).ready(function(){
    
  $('.carousel').carousel({
      pause: "hover",
    }),
  
  

      

      $(function(){
          $('.calendar-container').calendar();
        });
      $('.calendar-container').calendar({
          
          // text for prev/next buttons
          prevButton: "Prev",
          nextButton: "Next",
        
          // custom separator between the month and the year in the month view.
          monthYearSeparator: " ",
        
          // false = 4 months in a row
          showThreeMonthsInARow: true,
        
          // whether to change either month or year
          enableMonthChange: true,
        
          // whether to disable year view
          enableYearView: true,
        
          // shows a Today button on the bottom of the calendar
          showTodayButton: true,
          todayButtonContent: "Today",
        
          // highlights all other dates with the same week-day
          highlightSelectedWeekday: true,
        
          // highlights the selected week that contains the selected date
          highlightSelectedWeek: true,
        
          // whether to enable/disable the year selector
          showYearDropdown: false,
        
          // min/max dates
          // Date Object or Date String
          min: null,
          max: null,
        
          // start on Sunday instead
          startOnMonday: false,
          
        });
        
    });

    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      sliderPerView: 1,
      spaceBetween: 0,
      mousewheel: true,
      pagination: {
          el:'.swiper-pagination',
          type: 'progressbar',
      }
  }) 