
var name1;
var name2;
$(function(){
	
	name1="胡骏,刘凌艳,袁国珍,陆俊,吕谅,陶晨,包盟,严明艳,王鹏,苏冰,王进,夏仕兵," +
        "何涛,逄田,张婧,战树梅,于学君,王一冰,路伟伟,王诗潇,马明,马丽娅,李昆光," +
        "刘毅,赵丽芳,李泽冰,池思思,花展艳,杨爱萍,赵奎廷,罗漪,岑羽,张岚,冯徐,林秀梅,冯亚红," +
        "刘东明,杨昕,俞亚雯,朱丹丹,谢超";
   
	
    name2="何兵,赵敏,吕钢,赵建忠,孙梦,鲍燕悦,任科美,史从锦,邵瑞英,陈名汉,陈晓辉,石志强," +
        "吴文超,张振国,于霞,邹迎霞,魏战美,周卫军,于云生,叶民勤,童金云,蒋国伟,郭洁茹," +
        "朱德福,张伯勤,陆锡琴,沈瑜,卞勇,郭振海,陈金风,马俊,陈茂义,柯向雷,周利花,吴东,汪玲," +
        "佘琳轶,周坤,曾立立,沈晓洁,邓安琪,张小利,陈素兰,陆源,刁彩琴,张薇薇,于洋";
    
    name3="刘叶林,夏靖,张诚,王顺达,王艺霖,盛俊耀,沈忠文,倪建英,罗琴,袁伟华,刘惠玲,姜胜练";
    
    
});
function keyLogin(){
	 if (event.keyCode==13){
		 $("#submit2").click(); 
	 }  
}

function login(){
    var flag=false;
    var userName= $("#username").val();
    var userPassword= $("#password").val();
    var name1List= name1.split(",");
	var name2List= name2.split(",");
	var name3List= name3.split(",");
	var nameStatus=0;
	var nStatus=0;
    for(var f1 in name1List){
        if(name1List[f1].indexOf(userName)>=0){
            flag=true;
            nameStatus=1;
            break;
        }
    }
    if(nameStatus==1){
    	nStatus=1;
    }
	 for(var f1 in name2List){
        if(name2List[f1].indexOf(userName)>=0){
            flag=true;
            nameStatus=2;
            break;
        }
    }
	if(nameStatus==2){
	    nStatus=2;
	}
	for(var f1 in name3List){
        if(name3List[f1].indexOf(userName)>=0){
            flag=true;
            nameStatus=3;
            break;
        }
	}
	if(nameStatus==3){
	    nStatus=3;
	}
/*	if(nameStatus==2&&nStatus==1){
		nameStatus=10;
	}*/
    if(flag){
    }else{
        alert("用户姓名不存在，请从新确认");
        return;
    }
    if(userPassword==20170101||userPassword=="vcspark2016"){
    }else{
    	alert("密码不正确，请从新输出！");
        return;
    }
    var str=userName+",登录成功!";
    localStorage.setItem("realName",str); //写缓存
	localStorage.setItem("nameStatus",nameStatus);
    document.getElementById("userDownload").innerHTML= realName;
}
function quit(){
    localStorage.removeItem("realName");//删除
	localStorage.removeItem("nameStatus");//删除
    localStorage.setItem("realName","未登录"); //写缓存
    window.location.reload();
}
function download(type) {
    var content = localStorage.getItem("realName");
	var nameStatus = localStorage.getItem("nameStatus");
	if(content==null){
		alert("请您先登录！");
        return;
	}else if (content.indexOf("登录成功") >= 0) {
		if (Number(type) == 1&&nameStatus==1) {
			window.location.href = "11.pdf";
			return;
		}
		if (Number(type) == 2&&nameStatus==1) {
			window.location.href = "12.pdf";
			return;
		}
		if (Number(type) == 3&&nameStatus==1) {
			window.location.href = "13.pdf";
			return;
		}
		if (Number(type) == 4&&nameStatus==2) {
			window.location.href = "23.pdf";
			return;
		}
		if (Number(type) == 5&&nameStatus==2) {
			window.location.href = "24.pdf";
			return;
		}
		if (Number(type) == 6&&nameStatus==2) {
			window.location.href = "25.pdf";
			return;
		}
		if (Number(type) == 7&&nameStatus==3) {
			window.location.href = "31.pdf";
			return;
		}
		if(nameStatus==2&&(Number(type) == 1||Number(type) == 2||Number(type) == 3)){
  			 alert("您不是星火1号基金用户，无法查看下载！");
  			 return;
		}
		if(nameStatus==1||nameStatus==3&&(Number(type) == 4||Number(type) == 5||Number(type) == 6)){
			 alert("您不是星火2号基金用户，无法查看下载！");
			 return;
		}
		if(nameStatus==1||nameStatus==2&&Number(type) == 7){
			 alert("您不是星书基金用户，无法查看下载！");
			 return;
		}
    } else {
        alert("请您先登录！");
        return;
    }
}
