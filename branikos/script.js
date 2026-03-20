// KLICKER COUNT A BUTTON
    let upgrade = 100
    let clicker = 0
    const counter = document.getElementById("couter")
    const tlacitko = document.getElementById('mojeTlacitko');

    tlacitko.onclick = function() {
        console.log("Tlačítko bylo stisknuto!");
        clicker++;
        clicker = clicker + upgrade;
        counter.innerText = clicker
    };
// -----------------------------SHOP---------------------
    const shop = document.getElementById("shop")
    const shopDiv = document.getElementById("shop_div")
    const shopImg = document.getElementById("shop_img")
    let odd = 1

    shop.onclick = function(){
        odd++;
        console.log(odd)
        console.log("shop");
        if (odd == 10){
            odd = odd * 0;
        }

        if (odd % 2 == 0){
            shopDiv.style.display = "block";
            shopImg.src = "shop_exit.webp";
        }else{
            shopDiv.style.display = "none";
            shopImg.src = "shop.png";

        }
    };  
//---------------------upgrade-------------------------
    const ketamineUpgrade = document.getElementById("ketamine_upgrade")
    const ketaminCounter = document.getElementById("ketamine_counter")

    ketamineUpgrade.onclick = function(){
        if (clicker >= 100){
            upgrade++;
            clicker = clicker - 100
            counter.innerText = clicker
            ketaminCounter.innerText = upgrade
        }else{
            alert("NOT ENOUGH MONEY")
        }
    };
    
//-----------------------------SKIN SHOP -------------------------------------------
    const skinShopButton = document.getElementById("skin_shop")
    const skinShopDiv = document.getElementById("skin_shop_div")
    let skinShopOdd = 1

    skinShopButton.onclick = function(){
        console.log("SKIN SHOP TEST")
        skinShopOdd++
        if (skinShopDiv == 10){
            skinShopOdd == skinShopOdd * 0
        }

        if (skinShopOdd % 2 == 0){
            skinShopDiv.style.display = "block";    
        }else{
            skinShopDiv.style.display = "none"
        }
    }

//----wide branikos---
    const wideBranikos = document.getElementById("wide_branikos")
    const branikos = document.getElementById("branikos")

    wideBranikos.onclick = function(){
        if (clicker >= 1500){
            branikos.src = "wide_branikos_bck.webp"
            clicker = clicker - 1500
            counter.innerText = clicker
        }
    }