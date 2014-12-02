(function () {
    "use strict";

    var textBox = document.querySelector('.content'),
        sendBtn = document.querySelector('input[type=button]'),
        textInput = document.querySelector('input[type=text]');

    function refreshData() {
        qwest.get('server/getData.php', {}, {'responseType': 'text'})
             .then(function (response) {
                textBox.innerHTML = response;
            });
    }

    function sendData(data) {
        qwest.post('server/postData.php', {"text":data}, {'responseType': 'text'})
             .then(function () {
                refreshData();
                textInput.value = "";
            });
    }

    window.addEventListener('load', function () {
        setInterval(refreshData, 700);

        sendBtn.addEventListener('click', function () {
            sendData(textInput.value);
        });

        textInput.addEventListener('keypress', function (e) {
            if (e.keyCode === 13) {
                sendData(textInput.value);
            }
        });
    });

})();



