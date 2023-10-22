const question = [{

    'Que': 'Which of the following is markup language?',

    'a': 'HTML',
    'b': 'CSS',
    'c': 'JAVASCRIPT',
    'd': 'PHP',
    'correct': 'a'

},
{
    'Que': 'Which of the following in BEST YOUTUBER ?',

    'a': 'CARRY',
    'b': 'TRIGGERED INSAAN',
    'c': 'AASHISH',
    'd': 'HARSH BENIWAAL',
    'correct': 'b'
},
{
    'Que': 'Which of the following in best cricketer?',

    'a': 'steve smith',
    'b': 'joe root',
    'c': 'kl rahul',
    'd': 'virat kohli',
    'correct': 'd'
},
{
    'Que': 'Which of the following is not a cricketer?',

    'a': ' Nelson Model',
    'b': 'joe root',
    'c': 'kl rahul',
    'd': 'virat kohli',
    'correct': 'a'
},
{
    'Que': 'Which of the following is Best footballer?',

    'a': 'Ronaldo',
    'b': 'Messi',
    'c': 'Neymar',
    'd': 'Mbappe',
    'correct': 'b'
}

]
let index = 0;
let total=question.length;
let right=0;
let wrong=0;
const quebox = document.getElementById('quebox');
const optioninp = document.querySelectorAll('.option')

const loadquestion = () => {

    if(index==total){
        return endQuiz();
    }
    reset()
    const data = question[index]
    quebox.innerText = `${index+1})${data.Que}`;

    optioninp[0].nextElementSibling.innerText = data.a;
    optioninp[1].nextElementSibling.innerText = data.b;
    optioninp[2].nextElementSibling.innerText = data.c;
    optioninp[3].nextElementSibling.innerText = data.d;

}
const submitQuiz = () => {
    const data = question[index]

    const ans = getanswer()
    if(ans==data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadquestion();
 return;
}

const getanswer = () => {
    let answer;
    optioninp.forEach(
        (input) => {
            if
            (input.checked)
                answer= input.value;
        }
    
)
return answer;

}
 const reset=()=>{
    optioninp.forEach(
        (input) => {
                input.checked=false;
            
           
        }
    )

 }
  const endQuiz=()=>{
    document.getElementById('box').innerHTML=
    `<h3>Thank you for playing the Quiz</h3>
    <h2> ${right}/${total} are correct</h2>
    `
  }


loadquestion();