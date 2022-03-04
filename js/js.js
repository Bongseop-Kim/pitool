$('.navbar-toggler').on('click', function(){
    $('.list-group').toggleClass('show');
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
    $('.list-group-routine-name').toggleClass('show');
})
// 등록된 루틴 확인