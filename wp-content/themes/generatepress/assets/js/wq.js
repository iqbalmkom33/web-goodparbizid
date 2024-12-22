let curUrl = window.location.href;   
console.log(curUrl);

let wqreferer = document.referrer;
console.log("referer="+wqreferer);

if(curUrl.includes("?wqqs=")){
    //console.log("Lanjut Refresh untuk hilangkan QS");
    let arrQs   = curUrl.split('?wqqs=');
    let linkArtikel = arrQs[0];
    
    console.log(arrQs);
    console.log(linkArtikel);

    console.log("masuk atas");
    window.location.href = linkArtikel;
}else{
    if(wqreferer != undefined){
        if(curUrl.includes("?wqqs=")){
            let arrQsReferer   = wqreferer.split('?wqqs=');
            let linkUang        = arrQsReferer[1].split("wqslash").join("/")
                                .split("wqcolon").join(":")
                                .split("wqmark").join("?")
                                //.split("wqdot").join(".")
                                //.split("wqunder").join("_")
                                .split("wqequal").join("=");;

            console.log("Setelah Redirect Dari QS ke linkuang="+linkUang);
            //alert("linkuang="+linkUang);
            //window.location.href = linkUang;
        }else{console.log("not wqqs");}
    }else{console.log("not ref");}
}