
/*************  1  **************/

const amountElement = document.querySelector("#amount") 
const firstSelect = document.querySelector("#firstCurrency")
const secondSelect = document.querySelector("#secondCurrency")
/*************  5  **************/
const currency = new Currency("USD", "TRY")

/*************  10  **************/

const ui = new UI(firstSelect,secondSelect)

/*************  2  **************/
addEventListeners()

function addEventListeners(){

    amountElement.addEventListener("input",exchangeCurrency)

    firstSelect.onchange = function(){
        /*************  6  **************/
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent)

        ui.changeFirst()
    }

    secondSelect.onchange = function(){
        /*************  6  **************/
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent)

        ui.changeSecond()
    }

}

/*************  3  **************/
function exchangeCurrency(){

    /*************  6  **************/
    currency.amountChange(amountElement.value)

    // console.log("event oluştu")

        /*************  9  **************/
    currency.exchange()
    // .then(result=>console.log(result))
    .then(result=>{
        ui.displayResult(result)
    })
    .catch(err => console.log(err))


}