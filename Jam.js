var jam, tarikh, bulan = ["1","2","3","4","5","6","7","8","9","10","11","12"], hariMinggu = ["日","月","火","水","木","金","土"]

function ticker(){
    jam = document.getElementById("jam");
    tarikh = document.getElementById("tarikh");
    hari = document.getElementById("hari");

    setInterval(update, 1000/30);
}
 
function update(){
    var ima = new Date();
    var minutes = (ima.getMinutes()<10)?("0" + ima.getMinutes()):(ima.getMinutes());
    var seconds = (ima.getSeconds()<10)?("0" + ima.getSeconds()):(ima.getSeconds());
    jam.innerHTML = ima.toLocaleTimeString("ja-JP");
    hari.innerHTML = hariMinggu[ima.getDay()];
    tarikh.innerHTML = ima.getFullYear() + "年" + bulan[ima.getMonth()] + "月" + ima.getDate() + "日";
}