document.getElementById('countButton').addEventListener('click', function (e) {
    var number=document.getElementById('numberText').value;
    if (number <2){alert('Input number have to be more than 1')}
    var shedegi=1;
    var ricxvebi=new Array();
    ricxvebi.push(2);


    for (var i=3;i<=number;i+=2){
        for (var j = 2; j < number; j++)
            if (i%j==0){
                break;
            } else if (i==j+1)
            {

                shedegi+=1;
                ricxvebi.push(i);
            }


    }
    //console.log(shedegi);
    //console.log(ricxvebi);
        if (number>1) {
            document.getElementById('answer').textContent = `Until ${number} is ${shedegi} Prime numbers`;
            document.getElementById('appearedButton').addEventListener('click', function () {
                document.getElementById('primeNumbers').textContent=ricxvebi;

            })

        }else {
            document.getElementById('answer').textContent='';
            document.getElementById('primeNumbers').textContent='';
        }

//WASASHLELI
document.getElementById('numberText').addEventListener('input', function (e) {
    if (String(e.target.value)==0){
        document.getElementById('answer').textContent='';
        document.getElementById('primeNumbers').textContent='';
    }

})



})