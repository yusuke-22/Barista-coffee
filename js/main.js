$(function () {
    /*=================================================
    ハンバーガ―メニュー
    ===================================================*/
    $('.toggle-btn').click(function () {
        $('header').toggleClass('open');
    });
    $(".header-nav a").on("click", function () {
        $("header").toggleClass("open");
    });

    // 全てのラジオボタンを取得
    const radioButtons = document.querySelectorAll('input[type="radio"]');

    radioButtons.forEach((radio) => {
        radio.addEventListener('change', (event) => {
            // 全てのspanをデフォルトの色にリセット
            document.querySelectorAll('span').forEach((span) => {
                span.style.color = '';
            });

            // チェックされたラジオボタンの隣のspanを黒に変更
            const span = event.target.nextElementSibling;
            if (span) {
                span.style.color = 'black';
            }
        });
    });

    const radioButton = document.querySelectorAll('input[type="radio"][name="gender"]');

    // イベントリスナーを追加
    radioButton.forEach(radio => {
        radio.addEventListener('change', () => {
            // 他のラジオボタンの選択状態をリセット
            radioButton.forEach(otherRadio => {
                if (otherRadio !== radio) {
                    otherRadio.checked = false;
                }
            });
        });
    });

    const dateInput = document.getElementById('dateInput');

    // 初期状態で placeholder の色をグレーに
    dateInput.addEventListener('input', function () {
        if (dateInput.value) {
            // 日付が選択されたら黒にする
            $('input').addClass('black');
        } else {
            // 日付が未選択の場合はグレーに戻す
            $('input').removeClass('black');
        }
    });

    $(window).scroll(function () {
        $(".employee1").each(function () {

            var scroll = $(window).scrollTop();

            var target = $(this).offset().top;

            var windowHeight = $(window).height();

            if (scroll > target - windowHeight + $(this).outerHeight()) {
                // outerHeight()はpaddingを含めた高さを取得する
                $(this).addClass("employee1-left");
            }
        });
    });

    $(window).scroll(function () {
        $(".employee2").each(function () {

            var scroll = $(window).scrollTop();

            var target = $(this).offset().top;

            var windowHeight = $(window).height();

            if (scroll > target - windowHeight + $(this).outerHeight()) {
                // outerHeight()はpaddingを含めた高さを取得する
                $(this).addClass("employee2-right");
            }
        });
    });

});  