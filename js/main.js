window.addEventListener("load",()=>{
    // isotope 플러그인 호출 구문
    const grid = new Isotope("section",{  // 배치할 요소를 감싸고 있는 부모 요소명
        itemSelector:"article",  //배치할 요소명
        columnWidth:"article",  //너비값을 구할 요소명
        transitionDuration:"0.5s"  //화면 재배치시 요소가 움직이는 속도
    });
});