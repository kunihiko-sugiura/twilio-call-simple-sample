"use strict";

function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fnReady);
    }
}

function fnReady(){
    document.getElementById('btn-hangup').style.display = 'none';

    document.getElementById('btn-call').onclick = function () {
        axios.get('/token.php')
            .then(function (response) {
                var data = response.data;

                // ** Setup
                console.log('Twilio.Device.setup:Token: ' + data.token);
                Twilio.Device.setup(data.token);

                Twilio.Device.ready(function (device) {
                    console.log('Twilio.Device.ready');

                    // ** Call
                    console.log('Calling ' + params.To + '...');
                    Twilio.Device.connect(params);
                });

                Twilio.Device.error(function (error) {
                    console.log('Twilio.Device.error');
                });

                Twilio.Device.connect(function (conn) {
                    console.log('Twilio.Device.connect');

                    document.getElementById('btn-call').style.display = 'none';
                    document.getElementById('btn-hangup').style.display = 'inline';
                });

                Twilio.Device.disconnect(function (conn) {
                    console.log('Twilio.Device.disconnect');

                    document.getElementById('btn-call').style.display = 'inline';
                    document.getElementById('btn-hangup').style.display = 'none';
                });

                Twilio.Device.incoming(function (conn) {
                    console.log('Twilio.Device.incoming:From' + conn.parameters.From);

                    conn.accept();
                });
            })
            .catch(function (error) {
                console.log('Could not get a token from server' + conn.parameters.From);
                console.log(error);
            });

        var params = {
            To: document.getElementById('call-to').value
        };
    };
    document.getElementById('btn-hangup').onclick = function () {
        console.log('Hanging up');

        Twilio.Device.disconnectAll();
    };
}

ready(fnReady);
