<?php
include('./vendor/autoload.php');

use Twilio\Twiml;

$response = new Twiml;

// TODO:受け付ける呼び出し元は制限したほうがいい、電話番号が丸見えになる

$number = htmlspecialchars($_REQUEST['To']);
$dial = $response->dial(array('callerId' => $_ENV['TWILIO_CALLER_ID']));

// TODO:名称指定してnumberへの変換をここでしたほうがいいかも(セキュリティ的に)

$dial->number($number);

header('Content-Type: text/xml');
echo $response;