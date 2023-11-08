const nullDataCleaning = (elements) =>{
    let cleaningData = []
    
    Object.keys(elements).forEach((item)=>{
        if(elements[item] !== null && elements[item] !== undefined){
            cleaningData[item] = elements[item]
        }
    })
    console.log(cleaningData)
}

nullDataCleaning({name:'Lucas Manoel',age:25,lastName:null})