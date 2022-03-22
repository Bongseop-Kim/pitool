$('.navbar-btn').on('click', function(){
    $('.nav-list').css('transform', 'translateX(0)');
})
$('.close-icon').on('click', function(){
    $('.nav-list').css('transform', 'translateX(-100vw)');
})



// document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', function(){
// document.getElementsByClassName('list-group')[0].classList.toggle('show');
// })


$('.member-plus').on('click', function(){
    $('.modal-screen').addClass('none')
    const plus = 
    `<tr class="td-container">
        <td><button class="table-btn"></button></td>
        <td>4</td>
        <td>김나래</td>
        <td>여자</td>
        <td>24</td>
        <td>10회</td>
        <td onClick="location.href='trainer-management.html'"><img src="icon/eye.png"></td>
        <td onclick="location.href='trainer-member-profile.html'">클릭!</td>
        <td onclick="location.href='trainer-feedback.html'">클릭</td>
    </tr>`;
    $('.member-list').append(plus)
})
$('.modal-close').on('click', function(){
    $('.modal-screen').addClass('none')
})
$('.ti-member-plus-btn').on('click', function(){
    $('.modal-screen').removeClass('none')
})

// 추가되는 값들 


$('.routine-card').on('click', function(){
    $('.list-group-routine-name').toggleClass('none');
})
// 등록된 루틴 확인


$('.trep-exercise-card').on('click', function(){
    $('.exercise-list').toggleClass('none');
})
// 운동 리스트 확인 트레이너





  function method()  {
    settingCount = document.getElementById('setting-value').value;
    document.getElementById('kgcountlist').innerHTML = '';
    for (var i = 0; i < settingCount; i++){
        템플릿 = `<div class="tre-order${i} tre-order-list">
        <div>${i+1}set</div>  
        <div class='input-kg show'><input class="tre-input-line"/>kg</div>  
        <div class='input-count show'><input class="tre-input-line"/>개</div>  
        <div class='input-time show'>
            <input class="tre-input-line"/>
            <span class='hr-mi-se'>초</span>
        </div>`;
        $('#kgcountlist').append(템플릿);
    } 
  };


  $('.btn-kg-count').on('click', function(){
    $('.tre-second-btn').css('background',`white`)
    $('.btn-kg-count').css('background',`var(--color-blue)`)
    $('.input-kg').removeClass('none');
    $('.input-kg').addClass('show');
    $('.input-count').removeClass('none');
    $('.input-count').addClass('show');
    $('.input-time').removeClass('show');
    $('.input-time').addClass('none');
    $('.time-set').html('')
});
  
$('.btn-count').on('click', function(){
    $('.tre-second-btn').css('background',`white`)
    $('.btn-count').css('background',`var(--color-blue)`)
    $('.input-kg').removeClass('show');
    $('.input-kg').addClass('none');
    $('.input-count').removeClass('none');
    $('.input-count').addClass('show');
    $('.input-time').removeClass('show');
    $('.input-time').addClass('none');
    $('.time-set').html('')
});


$('.btn-time').on('click', function(){
    $('.tre-second-btn').css('background',`white`)
    $('.btn-time').css('background',`var(--color-blue)`)
    $('.input-kg').removeClass('show');
    $('.input-kg').addClass('none');
    $('.input-count').removeClass('show');
    $('.input-count').addClass('none');
    $('.input-time').removeClass('none');
    $('.input-time').addClass('show');
    $('.time-set').html('')
    const time = `<button class="btn-hours" type="button" >시간</button>
      <button class="btn-minutes">분</button>
      <button class="btn-seconds">초</button>`
    $('.time-set').append(time)
    $('.btn-hours').on('click',function(){
        $('.hr-mi-se').html('시간');
    })
    $('.btn-minutes').on('click',function(){
        $('.hr-mi-se').html('분');
    })
    $('.btn-seconds').on('click',function(){
        $('.hr-mi-se').html('초');
    })
})

$('.all-set').on('click', function(){
    for ( var i = 0; i < settingCount-1; i++){
    $('.tre-order'+i).addClass('none')
    }
})

$('.different-set').on('click', function(){
    for ( var i = 0; i < settingCount-1; i++){
    $('.tre-order'+i).removeClass('none')
    }
})


// 스톱 워치
let timerId;
let time = 0;
const stopwatch = document.getElementById("stopwatch");
let  hour, min, sec;


function printTime() {
    time++;
    stopwatch.innerText = getTimeFormatString();
}

//시계 시작 - 재귀호출로 반복실행
function startClock() {
    printTime();
    stopClock();
    timerId = setTimeout(startClock, 1000);
}

//시계 중지
function stopClock() {
    if (timerId != null) {
        clearTimeout(timerId);
    }
}

// 시계 초기화
function resetClock() {
    stopClock()
    stopwatch.innerText = "00:00:00";
    time = 0;
}

// 시간(int)을 시, 분, 초 문자열로 변환
function getTimeFormatString() {
    hour = parseInt(String(time / (60 * 60)));
    min = parseInt(String((time - (hour * 60 * 60)) / 60));
    sec = time % 60;

    return String(hour).padStart(2, '0') + ":" + String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
}



// 운동 진행 횟수 카운터

let counterVal = 0;

function clickCounter (){
    counterVal ++;
    if (counterVal <= 5) {
    $('.check-count'+counterVal).addClass('check')
    $('.exercise-count').html(counterVal)
    } else {
        $('.exercise-count').html(5)
    }
}



$(document).ready(function() {
    calendarInit();
});
/*
    달력 렌더링 할 때 필요한 정보 목록 

    현재 월(초기값 : 현재 시간)
    금월 마지막일 날짜와 요일
    전월 마지막일 날짜와 요일
*/

function calendarInit() {

    // 날짜 정보 가져오기
    var date = new Date(); // 현재 날짜(로컬 기준) 가져오기
    var utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000); // uct 표준시 도출
    var kstGap = 9 * 60 * 60 * 1000; // 한국 kst 기준시간 더하기
    var today = new Date(utc + kstGap); // 한국 시간으로 date 객체 만들기(오늘)
  
    var thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    // 달력에서 표기하는 날짜 객체
  
    
    var currentYear = thisMonth.getFullYear(); // 달력에서 표기하는 연
    var currentMonth = thisMonth.getMonth(); // 달력에서 표기하는 월
    var currentDate = thisMonth.getDate(); // 달력에서 표기하는 일

    // kst 기준 현재시간
    // console.log(thisMonth);

    // 캘린더 렌더링
    renderCalender(thisMonth);

    function renderCalender(thisMonth) {

        // 렌더링을 위한 데이터 정리
        currentYear = thisMonth.getFullYear();
        currentMonth = thisMonth.getMonth();
        currentDate = thisMonth.getDate();

        // 이전 달의 마지막 날 날짜와 요일 구하기
        var startDay = new Date(currentYear, currentMonth, 0);
        var prevDate = startDay.getDate();
        var prevDay = startDay.getDay();

        // 이번 달의 마지막날 날짜와 요일 구하기
        var endDay = new Date(currentYear, currentMonth + 1, 0);
        var nextDate = endDay.getDate();
        var nextDay = endDay.getDay();

        // console.log(prevDate, prevDay, nextDate, nextDay);

        // 현재 월 표기
        $('.year-month').text(currentYear + '.' + (currentMonth + 1));

        // 렌더링 html 요소 생성
        calendar = document.querySelector('.dates')
        calendar.innerHTML = '';
        
        // 지난달
        for (var i = prevDate - prevDay + 1; i <= prevDate; i++) {
            calendar.innerHTML = calendar.innerHTML + '<div class="day prev disable">' + i + '</div>'
        }
        // 이번달
        for (var i = 1; i <= nextDate; i++) {
            calendar.innerHTML = calendar.innerHTML + '<div class="day current">' + i + '</div>'
        }
        // 다음달
        for (var i = 1; i <= (7 - nextDay == 7 ? 0 : 7 - nextDay); i++) {
            calendar.innerHTML = calendar.innerHTML + '<div class="day next disable">' + i + '</div>'
        }

        // 오늘 날짜 표기
        if (today.getMonth() == currentMonth) {
            todayDate = today.getDate();
            var currentMonthDate = document.querySelectorAll('.dates .current');
            currentMonthDate[todayDate -1].classList.add('today');
        }
    }

    // 이전달로 이동
    $('.go-prev').on('click', function() {
        thisMonth = new Date(currentYear, currentMonth - 1, 1);
        renderCalender(thisMonth);
    });

    // 다음달로 이동
    $('.go-next').on('click', function() {
        thisMonth = new Date(currentYear, currentMonth + 1, 1);
        renderCalender(thisMonth); 
    });
}

// intensity 체크


$('.intensity-circle').on('click',function(){
    $('.intensity-circle').removeClass('ic-check');
})
// 누르면 일단 다 지우고 위에 씌우는 방법.... 이런 컴퓨팅사고가 필요함을 느낌
// 안지우고 하려니 하드코딩 하게 됨
for (let icCount = 0; icCount < 5; icCount++) {
    $($('.intensity-circle')[icCount]).on('click', function(){
        for (let j = 0; j <icCount+1; j++){
            $($('.intensity-circle')[j]).addClass('ic-check');
            }
    })
};
