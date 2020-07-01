const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const { User } = require("./models/User");

const config = require("./config/key");

// application/x-www-form-urlencoded 이런 데이터를 분석
app.use(bodyParser.urlencoded({extended:true}));
// application/json 이런 타입의 데이터를 분석 
app.use(bodyParser.json());


mongoose.connect(config.mongoURI,{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World! 서버 종료 명령어: ctrl + c, npm명령어, mongoDB, mongoose, postman:client의 역할을 해 서버에 요청을 보낼 수 있는 놈,\
 body-parser:요청/응답 가능하게 만들어주는 놈 ,git,github, nodemon:소스변경을 재가동없이 반영해주는 놈, 비밀설정정보:config 파일참조 를 배웠다!'))

app.post('/register',(req,res) => {
    // 회원 가입에 필요한 정보를 client에서 가져오면 
    // 그것을 데이터베이스에 넣어준다.

    const user = new User(req.body)
    // req.body는 body parser을 통해 client에서 받은 데이터의 내용을 의미한다.

    user.save((err,userInfo) => {
        if(err) return res.json({ success:false, err })
        return res.status(200).json({
            success:true
        })
    })

})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))