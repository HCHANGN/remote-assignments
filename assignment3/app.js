const express=require('express');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');

const app=express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.set('view engine','pug');

app.get('/',function(req,res){
    res.send("Hello, My Server!");
});

app.get('/getData',function(req,res){
    if(req.query.number==undefined){
        res.send("Lack of Parameter");
    }
    else if(isNaN(parseInt(req.query.number))){
        res.send("Wrong Parameter");
    }
    else{
        var sum=0;
        for(let i=1;i<=parseInt(req.query.number);i++){
            sum+=i;
        }
        res.send(`${sum}`);
    }
    
});

//Cookie assignment

app.get('/myName',function(req,res){
    res.render('index',{username:req.cookies.username});
});

app.post('/myName',function(req,res){
    console.log(req.body.username);
    res.redirect(`/trackName?name=${req.body.username}`);
});

app.get('/trackName',function(req,res){
    res.cookie('username',req.query.name);
    res.redirect('/myName');
});

app.post('/logout',function(req,res){
    res.clearCookie('username');
    console.log('cookie cleared!');
    res.redirect("/myName");
});

app.listen(3000,()=>{
    console.log("server start and listen port 3000!");
});