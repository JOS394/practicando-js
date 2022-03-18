/*const precioOriginal = 120;
const descuento = 18;*/



function calcularPrecioConDescuento(precio,descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
    }  
    function onClickButtonPriceDiscount() {
        const inputPrice = document.getElementById("InputPrice");
        const priceValue = inputPrice.value;
        
        //const inputDiscount = document.getElementById("InputDiscount");
        //const discountValue = inputDiscount.value;

        const inputCoupon = document.getElementById("InputCoupon");
        const discountCouponValue = inputCoupon.value;

        const coupons=[
            "Coupon1",
            "Coupon2",
            "Coupon3"
        ]
let descuento;
        switch (discountCouponValue) {
            case coupons[0]:
                descuento=15
                break;
            case coupons[1]:
                descuento=10
                break;
            case coupons[3]:
                descuento=30
                break;
            default:
                break;
        }
      
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
    
    
        const resultP = document.getElementById("ResultP");
       resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
    
     
    /*
    console.log({
     precio,
     descuento,
     porcentajePrecioConDescuento,
     precioConDescuento,
     });
     */