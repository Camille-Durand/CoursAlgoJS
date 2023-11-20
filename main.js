function chocolatine() {
    choco = parseInt(prompt("Cmb de choco?"));
    total = 0;
        if (choco < 10){
            total = 1.4 * choco;
        } else if(choco <= 20) {
            total = 1.4 * 10 + (choco -10)*1.3;
        } else if (choco > 20) {
            total = 1.4 * 10 + (10)*1.3 + (choco -20)*1.2;
        }
    console.log("Pour",choco,"choco, le prix est:",total.toFixed(2),"€");
}
