const letterCounter = (word,letter) => {
    let splitWord = word.split('')
    let count = 0
    splitWord.forEach((e)=>{
        if(e === letter){
            count = count + 1
        }
    })
    console.log(count)
} 

letterCounter('Marcia Sensitiva','a')