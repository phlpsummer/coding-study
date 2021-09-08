window.addEventListener("load",()=>{
    // isotope 플러그인 호출 구문
    const grid = new Isotope("section",{  // 배치할 요소를 감싸고 있는 부모 요소명
        itemSelector:"article",  //배치할 요소명
        columnWidth:"article",  //너비값을 구할 요소명
        transitionDuration:"0.5s"  //화면 재배치시 요소가 움직이는 속도
    });

    // 클릭한 모든 버튼 요소를 변수에 저장
    const btns = document.querySelectorAll("main ul li");

    // 각 버튼마다 적용
    for(let el of btns) {
        el.addEventListener("click",(e)=>{
            e.preventDefault();
            
            //변수 sort에 클릭한 대상의 a요소의 href 속성값을 저장
            const sort = e.currentTarget.querySelector("a").getAttribute("href");

            //gird에 저장된 결과값을 불러와서 재정렬 기능 연결
            grid.arrange({
                //옵션값으로 sort변수값 지정
                filter:sort
            });

            //버튼에 on 활성화
            for(let el of btns) {
                el.classList.remove("on");
            }
            e.currentTarget.classList.add("on");
        });
    }

});