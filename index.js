const express = require('express');
const app=express();
const host = "0.0.0.0";
const port=process.env.PORT||8080;

var goc="aáàạảãăắằặẳẵâấầậẩẫbcdđeéèẹẻẽêếềệểễfghiíìịỉĩjklmnoóòọỏõôốồộổỗơớờợởỡpqrstuúùụủũưứừựửữvwxyAÁÀẠẢÃĂẮẰẶẲẴÂẤẦẬẨẪBCDĐEÉÈẸẺẼÊẾỀỆỂỄFGHIÍÌỊỈĨJKLMNOÓÒỌỎÕÔỐỒỘỔỖƠỚỜỢỞỠPQRSTUÚÙỤỦŨƯỨỪỰỬỮVWXY0123456789~`!@#$%^&*()-_.:';,/?<>[]{}=+ ";
var P=goc.split("");

app.get("/MaHoatuSinh",(req,res)=>{
    let goc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let banNguon=goc.split("");

    let data="CLASS"; //req
    let banRo=data.split("");

    let khoa=19; //req
    let dangSo=[];
    let khoaZ=[];
    khoaZ.push(khoa);
    let MOD=[];
    
    // Dạng Số
    for(let i=0;i<banRo.length;i++){
        for(let j=0;j<banNguon.length;j++){
            if(banRo[i]==banNguon[j]){
                dangSo.push(j);
            }
        }
    }

    // Khóa Z
    for(let i=0;i<dangSo.length-1;i++){
        khoaZ.push(dangSo[i]);
    }
    
    // mod 26
    for(let i=0;i<banRo.length;i++){
        let result=(dangSo[i]+khoaZ[i])%26;
        MOD.push(result);
    }


    let KQ="";
    for(let i=0;i<MOD.length;i++){
        KQ+=banNguon[MOD[i]];
    }
    res.json({
        Ban_ro:data,
        Ban_ma_y:KQ
    })



})

app.get("/GiaiMaHoatuSinh",(req,res)=>{
    let goc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let banNguon=goc.split("");

    let data="VNLSK"; //req
    let banRo=data.split("");

    let khoa=19; //req
    let Y=[];
    let Z=[];
    Z.push(khoa);
    let YZ=[];
    let YZM=[];
    
    // Dạng Số
    for(let i=0;i<banRo.length;i++){
        for(let j=0;j<banNguon.length;j++){
            if(banRo[i]==banNguon[j]){
                Y.push(j);
            }
        }
    }

    for(let i=0;i<Y.length;i++){
        let rl=Y[i]-Z[i];
        YZ.push(rl);
        Z.push(rl);
        if(rl<0){
            YZM.push(26+(rl));
        }else{
            YZM.push(rl%26);
        }

    }


    let KQ="";
    for(let i=0;i<YZM.length;i++){
        KQ+=banNguon[YZM[i]];
    }

    res.json({
        Ban_ro:data,
        KQ:KQ,
    })



})

app.get("/MaHoaDichVong",(req,res)=>{

    let data="Nguyễn Văn Thành"; //req
    let banRo=data.split("");

    let K=5; //req
    let X=[];
    let Y="";
    let tam=[];
    
    // Dạng Số
    for(let i=0;i<banRo.length;i++){
        for(let j=0;j<banNguon.length;j++){
            if(banRo[i]===banNguon[j]){
                X.push(j);
            }
        }
    }
    for(let i=0;i<X.length;i++){
        let rl=(X[i]+K)%26;
        tam.push(rl);
        Y+=banNguon[rl];
    }
    res.json({
        BanRo:X,
        BanMa: Y,
        tam:tam,
        banNguon:banNguon.length
    });
})
app.get("/GiaiMaHoaDichVong",(req,res)=>{
    let goc="aáàạảãăắằặẳẵâấầậẩẫbcdđeéèẹẻẽêếềệểễfghiíìịỉĩjklmnoóòọỏõôốồộổỗơớờợởỡpqrstuúùụủũưứừựửữvwxyAÁÀẠẢÃĂẮẰẶẲẴÂẤẦẬẨẪBCDĐEÉÈẸẺẼÊẾỀỆỂỄFGHIÍÌỊỈĨJKLMNOÓÒỌỎÕÔỐỒỘỔỖƠỚỜỢỞỠPQRSTUÚÙỤỦŨƯỨỪỰỬỮVWXY0123456789~`!@#$%^&*()-_.:';,/?<>[]{}=+ ";
    let banNguon=goc.split("");

    let data="ặầèấâaẳcẵaẳăậắaậ"; //req
    let BanMa=data.split("");

    let K=5; //req
    let Y=[];
    let BanRo="";
    
    // Dạng Số
    for(let i=0;i<BanMa.length;i++){
        for(let j=0;j<banNguon.length;j++){
            if(BanMa[i]===banNguon[j]){
                Y.push(j);
                console.log(BanMa[i]+"--"+banNguon[j])
            }
        }
    }

    for(let i=0;i<Y.length;i++){
        let rl=(Y[i]-K)%26;
        BanRo+=banNguon[rl];
    }
    res.json({
        BanMa:data,
        BanRo:BanRo,
        Y:Y
    });
})

app.get("/MH_DV",(req,res)=>{
 

    let data="Nguyễn Văn Thành"; //req
    let banRo=data.split(""); // biến bản rõ thành mảng
    let l=banRo.length;

    let temp = [];
    let roso = [];
    let j = 0;
    let k=5; // khóa k, khóa dịch vòng

    let KQ="";

    while (j < l)
    {
        for (let i = 0; i < P.length; i++) // duyệt từ đầu đến cuối bản nguồn
        {
            if (P[i] === banRo[j]) // nếu bản nguồn bằng bản rõ
            {
                roso.push(i);
                let a=(roso[j] + k);
                let b=a%P.length;
                temp.push(P[b]);
                KQ+=P[b];
            }
        }
        j++;

    }
    console.log(KQ)
    
    res.json({
        banRo:banRo,
        Ban_Ma:temp
    });
})


app.get("/GM_DV",(req,res)=>{
    let data="ỎịũẢíỏả1ẵỏảỦỉắỏỉ"; //req
    let BanMa=data.split(""); // biến bản rõ thành mảng
    let l=BanMa.length;

    let temp = [];
    let roso = [];
    let j = 0;
    let k=5; // khóa k, khóa dịch vòng
    let KQ="";

    while (j < l)
    {
        for (let i = 0; i < P.length; i++) // duyệt từ đầu đến cuối bản nguồn
        {
            if (P[i] === BanMa[j]) // nếu bản nguồn bằng bản rõ
            {
                roso.push(i);
                let a=(roso[j] +P.length - k );
                let b=a%P.length;
                temp.push(P[b]);
                KQ+=P[b];

            }
        }
        j++;

    }

    
    res.json({
        Ban_Ma:data,
        Result:KQ
    });
})



app.listen(port, host, () => {
    console.log("Server running - port:" + port);
});
