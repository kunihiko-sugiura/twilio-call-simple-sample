<?php
include('./vendor/autoload.php');

use Twilio\Jwt\ClientToken;

$capability = new ClientToken($_ENV['TWILIO_ACCOUNT_SID'], $_ENV['TWILIO_AUTH_TOKEN']);
$capability->allowClientOutgoing($_ENV['TWILIO_TWIML_APP_SID']);

// ** みじかければ短い程よい、実用の際は発信直前にtoken取得して有効期限は秒単位にしたほうがいいかも
$token = $capability->generateToken( 20 );

header('Content-Type: application/json');
echo json_encode(array(
    'token' => $token,
));
