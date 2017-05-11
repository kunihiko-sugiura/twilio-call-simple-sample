# Twilio & Heroku Serverを利用して無料でブラウザから電話通話するシンプルな方法

## Twilioを無料登録
https://twilio.kddi-web.com/

## phpが動くサーバを用意（今回はherokuを利用)
https://heroku.com/


## アカウント情報の準備
### アカウントSID
プライマリ Twilio アカウント識別子 - 調べるにはコンソールのここにアクセスします。
https://jp.twilio.com/console

### 認証トークン
上記同様、認証に使用されます。ここからご確認ください。
https://jp.twilio.com/console

### TwiML App SID
このアプリケーションの動作するサーバーにアクセスするよう構成されたVoice URLをともなうTwiMLアプリケーションです。
コンソールから作成可能です。
また、サーバーが正常稼働したらTwiML App上でVoice「REQUEST URL」を設定しておく必要があります。
https://jp.twilio.com//console/phone-numbers/dev-tools/twiml-apps

### Twilio電話番号
E.164形式で記述された電話番号です。
- ここから取得できます
https://jp.twilio.com/console/phone-numbers/incoming

## Server設定
### アプリケーション作成

### 環境変数の追加
Personal apps -> twilio-sugi -> Settings -> Config Variables

Twilioで設定した値を設定します。
+ TWILIO_ACCOUNT_SID
+ TWILIO_AUTH_TOKEN
+ TWILIO_CALLER_ID
+ TWILIO_TWIML_APP_SID

### デプロイ設定
Personal apps -> twilio-sugi -> Deployment

+ Deployment method
Herokuのgit使うもよし、git hub使うもよし

Automatic deploysで自動デプロイ設定可能

### 実行
テキストボックスの電話番号欄は国番号+81をつける必要あり