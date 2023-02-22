// node_modules에 있는 express 관련 파일 가져옴
const express = require('express')
const fs = require('fs')

//express 함수 반환값 변수에 저장
const app = express()

// 8080포트로 서버 오픈
app.listen(8080, function(){
    console.log('server start on 8080 열음 드가자')
});

app.get('/', function(req, res){
    try {
        const data = fs.readFileSync('C:/Users/antiwater/Downloads/vscodeTest_01/html/indextwo.html', 'utf8')
        res.send(data)
      } catch (err) {
        console.error(err)
      }
   
});

app.get('/img', function(req, res){
    try {
        const data = fs.readFileSync('C:/Users/antiwater/Downloads/vscodeTest_01/JRcommander.jpg', 'utf8')
        res.send(data)
      } catch (err) {
        console.error(err)
      }
   
});