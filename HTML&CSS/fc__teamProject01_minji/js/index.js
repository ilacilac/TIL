// 네비게이션
const navBtnOpen = document.querySelector('.nav__btn--open'); // 메뉴 햄버거 열기 버튼
const navBtnClose = document.querySelector('.nav__btn--close'); // 햄버거 닫기 버튼
const nav = document.querySelector('.nav'); // 네비게이션


navBtnOpen.addEventListener('click', function() {
    nav.classList.add('active');
});


navBtnClose.addEventListener('click', function() {
    nav.classList.remove('active');
});

// 메인 콘텐츠 영역
const drinkList = document.querySelectorAll('.drink__list li');
const drinkListArray = [].slice.call(drinkList);

drinkListArray.forEach(function (v){
    // 맨 처음 눌렀을 때
    v.querySelector('.drink__info').addEventListener('click', function() {
        v.classList.add('active');
        console.log('asd');
    });

    // 메뉴클릭시 상세정보에 뜨는 닫기버튼
    const detailBtnClose = v.querySelector('.detail__btn--close');  
    detailBtnClose.addEventListener('click', function() {
        v.classList.remove('active');
    });
});



// 네비게이션 포커스아웃 이슈
$('nav').keydown(function (e) {    
    e = e || window.event;
    var code = e.which || e.keyCode;

    if (e.which == 9 || code == 13) { // tab
        if ($('.nav__btn--close').is(':focus')) {
            $(this).parent().find('li:first-child a').focus();
            e.preventDefault();
            console.log('aa');
        }
        console.log('dd');
    }
});

// 사파리 테이블 이슈
var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (is_safari) {
    $('.detail__table--ingre').css({
        'width': 'calc(100% + 40px)'
    });
}
