
let popup;

    function openPop(){
        popup = window.open('../html/mainIndex.html',
        'testPopup','width=1000px, height=800px, scrollbars=yes, top=100px, left=200px');
    }

    function closeBtn(){
        popup = window.close();
    }
