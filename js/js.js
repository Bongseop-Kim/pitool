$('.navbar-toggler').on('click', function(){
    $('.list-group').toggleClass('nav-list');
})


// document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', function(){
// document.getElementsByClassName('list-group')[0].classList.toggle('show');
// })


$('.member-plus').on('click', function(){
    const plus = 
    `<tr>
        <th>4</th>
        <td>김나래</td>
        <td>여자</td>
        <td>24</td>
        <td>10회</td>
        <td onClick="location.href='trainer-management.html'">클릭!</td>
        <td>클릭!</td>
        <td>삭제</td>
    </tr>`;
    $('.member-list').append(plus)
})

// 추가되는 값들 


$('.routine-name').on('click', function(){
    $('.list-group-routine-name').toggleClass('none');
})
// 등록된 루틴 확인


$('.exercise-plus-list').on('click', function(){
    $('.exercise-list').toggleClass('none');
})
// 운동 리스트 확인 트레이너





  function method()  {
    settingCount = document.getElementById('setting-value').value;
    document.getElementById('kgcountlist').innerHTML = '';
    for (var i = 0; i < settingCount; i++){
        템플릿 = `<div class="order${i}">${i+1}set  <span class='input-kg show'><input class="input-box"/>kg</span>  
        <span class='input-count show'><input class="input-box"/>개</span>  
        <span class='input-time show'><input class="input-box"/><span class="hr-mi-se">초</span></span> <br><br>`;
        $('#kgcountlist').append(템플릿);
    } 
  };


  $('.btn-kg-count').on('click', function(){
      $('.input-kg').removeClass('none');
    $('.input-kg').addClass('show');
    $('.input-count').removeClass('none');
    $('.input-count').addClass('show');
    $('.input-time').removeClass('show');
    $('.input-time').addClass('none');
    $('.time-set').html('')
});
  
$('.btn-count').on('click', function(){
    $('.input-kg').removeClass('show');
    $('.input-kg').addClass('none');
    $('.input-count').removeClass('none');
    $('.input-count').addClass('show');
    $('.input-time').removeClass('show');
    $('.input-time').addClass('none');
    $('.time-set').html('')
});


$('.btn-time').on('click', function(){
    $('.input-kg').removeClass('show');
    $('.input-kg').addClass('none');
    $('.input-count').removeClass('show');
    $('.input-count').addClass('none');
    $('.input-time').removeClass('none');
    $('.input-time').addClass('show');
    $('.time-set').html('')
    const time = `<br><button class="btn btn-info btn-hours" type="button" >시간</button>
      <button class="btn btn-info btn-minutes">분</button>
      <button class="btn btn-info btn-seconds">초</button>`
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
    $('.order'+i).addClass('none')
    }
})

$('.different-set').on('click', function(){
    for ( var i = 0; i < settingCount-1; i++){
    $('.order'+i).removeClass('none')
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
    $('.check-count'+counterVal).addClass('check')
    $('.exercise-count').html(counterVal)
}