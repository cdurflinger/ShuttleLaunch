(function () {

    const DOM = {
        launchDate: document.getElementsByClassName('launchDate'),
        topOfPageButton: document.getElementById('topOfPageButton'),
    }


    //shorten the launchDate by removing the UTC time.
    for(let i = 0; i < DOM.launchDate.length; i++){
        DOM.launchDate[i].textContent = DOM.launchDate[i].textContent.slice(0, -13);
    }

    window.onscroll = () => {
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            DOM.topOfPageButton.style.display = "block";
        } else {
            DOM.topOfPageButton.style.display = "none";
        }
    }

    DOM.topOfPageButton.addEventListener('click', () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;  
    })
})();

