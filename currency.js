
/*************  4  **************/ 

class Currency{

    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency
        this.secondCurrency= secondCurrency

        this.url = `https://api.exchangerate.host/latest?base=`
        this.amount = null
    }


    /*************  4  **************/ 
    exchange(){

               /*************  8  **************/

               return new Promise((resolve,reject)=>{

                fetch(this.url+this.firstCurrency)
                .then(response => response.json())
        
        
                /*************  7  **************/
                
                // .then(data => console.log(data))
                .then(data => {
                    const parity = data.rates[this.secondCurrency] 
                    const amount2 = Number(this.amount)
        
                    let total = amount2*parity
                    
                    console.log(data)
        
                    resolve(total)
        
                })
                // .catch(err => console.log(err))
                .catch(err => reject(err))



               })

       
    }


        /*************  6  **************/
    amountChange(amount){
    this.amount= amount
    }

    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency
    }

    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency
    }
}

