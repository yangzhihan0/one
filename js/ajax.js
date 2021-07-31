    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', './渲染.json', true);
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                console.log(ajax_.responseText);
                var data = JSON.parse(ajax_.responseText)
                console.log(JSON.parse(ajax_.responseText));
                c(data);
            }
        }
    }

    function c(data) {
        var html_ = template('tmp', {

            value: data

        })
        lis.innerHTML = html_;
    }