#  LiveFeedbackApp
##  Description:
    Die LiveFeedApp bietet die Möglichkeit Fragen/Umfragen an andere Nutzer der App zu senden.
    s
    
##  Dependencys:
    Ionic2
    Npm
    Cordova
    Node.js
    
    
##  Steps to install app
    create Ordner LiveFeedback
    cd LiveFeedback
    create Ordner app
    cd app
    git clone https://github.com/DanielThomae/LiveFeedbackApp.git
    npm install
    
##  Steps to install server
    cd LiveFeedback
    create Ordner server
    cd server
    git clone https://github.com/DanielThomae/LiveFeedbackServer.git
    npm install

##  Start Server
    auf den Server(zb Xampp) livefeedback.json aus LiveFeedbackServer(https://github.com/DanielThomae/LiveFeedbackServer.git) importieren
    cd LiveFeedback
    cd server
    node index.js

##  Start App
    cd LiveFeedback
    cd app
    ionic serve
    go to http://localhost:8100/

