document.querySelector(".increment").addEventListener("click",function(){
    pricePhoneHandler(true);
});

document.querySelector(".decrement").addEventListener("click",function(){
    pricePhoneHandler(false);
});


document.querySelector(".increment2").addEventListener("click",function(){
    casingPriceHandle(true);
});

document.querySelector(".decrement2").addEventListener("click",function(){
    casingPriceHandle(false);
});


function pricePhoneHandler(isClick)
{
    const PhoneValue = document.querySelector(".value");
    const currentPhoneValue = parseInt(PhoneValue.innerHTML);
    let newPhoneValue = currentPhoneValue;
    if(isClick==true)
    {
        newPhoneValue = currentPhoneValue + 1;
         document.querySelector(".price").innerText="1219$";
    }
    if(isClick==false && currentPhoneValue > 0 )
    {
        newPhoneValue = currentPhoneValue - 1;
    }
    PhoneValue.innerHTML = newPhoneValue;
    const totalPhoneCost = newPhoneValue * 1219;
    document.querySelector(".SubTotal").innerText=totalPhoneCost + "$";
    calculateTotal()
}


function casingPriceHandle(isClick)
{
    const cassingInput = document.querySelector(".value2");
    const currentcaseValue = parseInt(cassingInput.innerHTML);
    let newCaseValue = 0 ;
    if(isClick==true)
    {
        newCaseValue = currentcaseValue + 1;
    }
    if(isClick==false && currentcaseValue > 0 )
    {
        newCaseValue = currentcaseValue - 1;
    }
    cassingInput.innerHTML=newCaseValue;
    const totalCasevalue = newCaseValue * 59;
    document.querySelector(".Casing").innerText=totalCasevalue + "$";
    calculateTotal()
}

function calculateTotal()
{
    const phoneInput = document.querySelector(".value");
    const phoneCount = parseInt(phoneInput.innerHTML);

    const caseInput = document.querySelector(".value2");
    const caseCount = parseInt(caseInput.innerHTML);

    const totalPrice = phoneCount * 1219 + caseCount * 59 ;

    document.querySelector(".Total").innerText=totalPrice + "$";
    document.querySelector(".SubTotal").innerText=totalPrice + "$";
}


document.querySelector(".reset").addEventListener("click",function(){
    resetValue(true)
});

document.querySelector(".reset2").addEventListener("click",function(){
    resetValue(false)
});

function resetValue(isReset) {
    if(isReset==true)
    {
        document.querySelector(".value").innerText=0;
        document.querySelector(".SubTotal").innerText="";
        document.querySelector(".Total").innerText="";
        document.querySelector(".price").innerText="";
    }
    if(isReset==false)
    {
        document.querySelector(".value2").innerText=0;
        document.querySelector(".Casing").innerText="";
        document.querySelector(".price2").innerText="";
    }
}