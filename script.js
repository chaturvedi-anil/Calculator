let string = " ";
let buttons = document.querySelectorAll(".btn");
var input = document.querySelector("input");
Array.from(buttons).forEach((btn)=>
{
    btn.addEventListener("click", (e)=>
    {
        if(e.target.innerHTML == "=")
        {
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == "AC")
        {
            string = " "
            input.value=string;
        }
        else
        {
            // console.log(e.target);
            string = string + e.target.innerHTML;
            input.value = string;
        }

    });
});