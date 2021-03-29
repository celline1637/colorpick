const button = document.querySelector('button');
const h1 = document.querySelector(`h1`);
const p = document.querySelector('p');



button.addEventListener('click', function(){
    const newColor = makeRandColor();
    document.getElementById('icon').setAttribute('style', `color : ${newColor}`)
    p.innerText = `${newColor}입니다!`;
    h1.innerText = '오늘의 pick은';

   
}) 

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
        if(r+g+b < 200){
            h1.style.color = 'black';
            p.style.color = 'black';
            document.body.style.backgroundColor  = '#a7c5eb';
            

        } else {
            h1.style.color = 'white';
            p.style.color = 'white';
            document.body.style.backgroundColor = '#1e212d';
            
            

        }
    return `rgb(${r},${g},${b})`;

}

