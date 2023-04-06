function deterX(){
    const metX_num1_x = document.getElementById("num1").value;
    const metX_num2_x = document.getElementById("num2").value;
    const metX_num1_y = document.getElementById("num3").value;
    const metX_num2_y = document.getElementById("num4").value;
    document.getElementById("res").textContent = (metX_num1_x * metX_num2_y) - (metX_num2_x * metX_num1_y);
}