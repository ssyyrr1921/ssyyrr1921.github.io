
function changeImage(k){
    var img = document.getElementById('img');
    img.src = k;
            
}
// var audio = document.getElementById('kai');//异议
// var audio2 = document.getElementById('open');//开庭
function play(l){
    var audio = document.getElementById(l);
    audio.play();
}
function endplay(l){
    var audio = document.getElementById(l);
    audio.pause();
}

let say = ["今天，第一次出庭还是有点紧张","不过为了委托人，我必须全力以赴！","放心吧，作为我的徒弟，你一定没问题的。"];
let na = ["李云","李云","白成业",]
let cnt = 2,i = -1;
function ins(n,k){
    cnt++;
    na[cnt] = n;
    say[cnt] = k;
}
ins("白成业","就算有什么突发情况，我也在旁边啊。");
ins("叶建军","请一定要相信我，我是无辜的啊！");
ins("李云","（这就是我第一次出庭的委托人-叶建军）");
ins("白成业","要出庭了，你准备一下。");
ins("","第四人民法院 法庭");
ins("法官","现在开始叶建军一案的审理");
ins("李云","辩方准备完毕。");
ins("亚内","检方准备完毕。");
ins("法官","请检方做开庭陈述");
ins("亚内","死者德川，大约在11点至13点建州游泳馆死亡，被锐物刺伤，失血过多而死");
ins("亚内","但凶器暂未找到");
ins("亚内","不过，有一名目击证人，目睹了行凶的瞬间");
ins("法官","请检方传唤目击证人");
ins("山景川","...");
ins("法官","证人报上姓名，职业");
ins("山景川","山景川 建州游泳馆馆长");
ins("法官","你是否目击到了凶手行凶的瞬间");
ins("山景川","没错！凶手就是被告席上的那人");
ins("法官","那么，请根据你目击的请况，开始证言");
ins(" ","<关于行凶的瞬间>");
ins("山景川","当时大概是12点左右");
ins("山景川","我在泳馆的监控室通过监控目睹了这一切");
ins("山景川","那个小伙子拿起一把刀攻击向了死者");
ins("山景川","死者大概是心脏被刺中，倒进了泳池当中");
ins("白成业","证人的发言中有漏洞，点击指证将其指证出来。");
ins("白成业","如果看不出可以威慑一下");
let end1 = cnt;
ins("李云","你确定你通过监控室看到了行凶的画面？");
ins("山景川","不然呢？");
ins("李云","但是！根据当天的停电报告，监控室在行凶是是不可能有画面的。");
ins("法官","证人，这是怎么回事？");
ins("山景川","。。。");
ins("山景川","oh！我记错了，我是在泳池边目击的。");
ins("法官","请重新证言，不要再记错了！");
ins("法官","那么，请根据你目击的请况，开始证言");
ins("山景川","当时，我在被告的对面");
let start2 = cnt+1;
let end2 = cnt+1+4;
let pd = 0;
let res = 0;
let be_gr = 0;
let blood = 5;
let bj = 0;
let pl = 1;
function sp(){
    if(pl == 1){
        play('kai');
        pl = 0;
    }
    if(be_gr == 1){
        document.getElementById("AA1").style.color = "#00ff00";
        be_gr = 0;
    }
    if(i >cnt)return;
    if(document.getElementById("AA1").value == "刀是什么形状的？"){
        changeImage("js/img/sanjc.png");
        document.getElementById("name").value = "山景川";
        document.getElementById("AA1").value = "我怎么记得";
        return;
    }
    if(document.getElementById("AA1").value == "我怎么记得"){
        changeImage("js/img/kiyun.png");
        document.getElementById("name").value = "李云";
        document.getElementById("AA1").value = "好吧，请继续证言";
        be_gr = 1;
    }
    if(document.getElementById("AA1").value == "真的有目击到行凶的瞬间？"){
        changeImage("js/img/sanjc.png");
        document.getElementById("name").value = "山景川";
        document.getElementById("AA1").value = "有，当时那个小伙直接攻击向了被害人";
        return;
    }
    if(document.getElementById("AA1").value == "有，当时那个小伙直接攻击向了被害人"){
        changeImage("js/img/kiyun.png");
        document.getElementById("name").value = "李云";
        document.getElementById("AA1").value = "（怎么感觉怪怪的）";
        be_gr = 1;
        return;
    }
    
    if(document.getElementById("AA1").value == "确定是12点吗？"||document.getElementById("AA1").value == "没有看错吗？"){
        changeImage("js/img/sanjc.png");
        document.getElementById("name").value = "山景川";
        document.getElementById("AA1").value = "肯定的，我不会记错";
        return;
    }
    if(document.getElementById("AA1").value == "肯定的，我不会记错"){
        changeImage("js/img/kiyun.png");
        document.getElementById("name").value = "李云";
        document.getElementById("AA1").value = "好吧，请继续证言";
        be_gr = 1;
        
        return;
    }
    //威慑
    if(bj){
        changeImage("js/img/cpz.png");
        document.getElementById("name").value = "法官";
        document.getElementById("AA1").value = "我怎么没看出，按照规则我将给辩护人惩罚。";
        blood--;
        document.getElementById("blood").value = blood;
        bj = 0;
        return;
    }
    i++;
    if(na[i] == "李云"){
        changeImage("js/img/kiyun.png");
        
    }
    if(na[i] == "白成业"){
        changeImage("js/img/tea.png");
        
    }
    if(na[i] == "叶建军"){
        changeImage("js/img/wt.png");
        
    }
    if(na[i] == "法官"){
        changeImage("js/img/cpz.png");
        
    }
    if(na[i] == "亚内"){
        changeImage("js/img/yane.png");
        
    }
    if(na[i] == "山景川"||na[i] == " "){
        changeImage("js/img/sanjc.png");
        
    }
    document.getElementById("name").value = na[i];
    document.getElementById("AA1").value = say[i];
    if(say[i] == "如果看不出可以威慑一下"){
        i = res;
        
    }
    if(say[i] == "那么，请根据你目击的请况，开始证言"){
        endplay('kai');
        endplay('music1');
        play('xun');
        be_gr = 1;
        pd = 1;
        res = i;
    }
}
function zz(){
    var di =document.getElementById('zz');
    di.style.display = "block";
}
function back(){
    var di =document.getElementById('zz');
    di.style.display = "none";
}
function yiyi(k){
    if(pd == 1&&document.getElementById("name").value == "山景川"){
        if(k == 3&&document.getElementById("AA1").value == "我在泳馆的监控室通过监控目睹了这一切"){
            i = end1;
            endplay('xun');
            play('music1');
            changeImage("js/img/kiyun.png");
            var di = document.getElementById('zz');
            di.style.display = "none";
            document.getElementById("AA1").style.color = "#00FFFF";
            document.getElementById("name").value = "李云";
            document.getElementById("AA1").value = "异议！";
           
        }
        else{
            changeImage("js/img/kiyun.png");
            document.getElementById("name").value = "李云";
            document.getElementById("AA1").value = "证人的发言有矛盾";
            bj = 1;
            var di = document.getElementById('zz');
            di.style.display = "none";
        }
    }
}
function mada(){
    if(pd == 1&&document.getElementById("name").value == "山景川"){
        if(document.getElementById("AA1").value == "当时大概是12点左右"){
            document.getElementById("AA1").style.color = "#FFFFFF";
            changeImage("js/img/kiyun.png");
            document.getElementById("name").value = "李云";
            document.getElementById("AA1").value = "确定是12点吗？"
        }
        if(document.getElementById("AA1").value == "我在泳馆的监控室通过监控目睹了这一切"){
            changeImage("js/img/kiyun.png");
            document.getElementById("AA1").style.color = "#FFFFFF";
            document.getElementById("name").value = "李云";
            document.getElementById("AA1").value = "真的有目击到行凶的瞬间？"
        }
        if(document.getElementById("AA1").value == "那个小伙子拿起一把刀攻击向了死者"){
            changeImage("js/img/kiyun.png");
            document.getElementById("AA1").style.color = "#FFFFFF";
            document.getElementById("name").value = "李云";
            document.getElementById("AA1").value = "刀是什么形状的？"
        }
        if(document.getElementById("AA1").value == "死者大概是心脏被刺中，倒进了泳池当中"){
            changeImage("js/img/kiyun.png");
            document.getElementById("AA1").style.color = "#FFFFFF";
            document.getElementById("name").value = "李云";
            document.getElementById("AA1").value = "没有看错吗？";
        }
    }
}
