const show = () =>{
    let sname=document.getElementById('name').value;
    let sphy=document.getElementById('phy').value;
    let schem=document.getElementById('chem').value;
    let sbio=document.getElementById('bio').value;
    let smath=document.getElementById('math').value;
    let grade=" ";

    let total= parseFloat(sphy)+parseFloat(schem)+parseFloat(smath)+parseFloat(sbio); 
    let perc=parseFloat((total/400)*100);
    
    if(perc>=90){
        grade='EX';

    }
    else if(perc<90&&perc>=80){
        grade='A';

    }
    else if(perc<80&&perc>=70){
        grade='B';
    }
    else if(perc<70&&perc>=60){
        grade='C'
    }
    else if(perc<60&&perc>=50){
        grade='D'
    }
    else{
        grade='F';
    }

    if(sname=='' || sphy==''||schem==''||smath==''||sbio==''){
        alert('You did not enter anything so enter something');
    }
    else{
        document.getElementById('result').innerHTML=`Dear ${sname} you have got ${total} marks <br> your percentage is ${perc}% and your grade is ${grade} <br> `
    }
    
}

