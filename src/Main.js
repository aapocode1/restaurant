function Main() {
  return (
    <main>
      <section>
        <h2>This weeks specials!</h2>
        <button type="button">Online Menu</button>
        <br/>
        <br/>

        <article>
            <img src="./images/greek-salad.jpg" alt="greek-salad" width={200} height={200}/>
            <h3>Greek Salad</h3>
            <h3>$ 12.99</h3>
            <p>
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons.
            </p>
            <p>Order a delivery
                <img src="./images/delivery-bike.png" alt= "delivery-icon" width={25} height={25}/>
            </p>
        </article>

        <article>
            <img src="./images/bruchetta.jpg" alt="bruchetta" width={200} height={200}/>
            <h3>Bruchetta</h3>
            <h3>$ 5.99</h3>
            <p>
            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. 
            </p>
            <p>Order a delivery
                <img src="./images/delivery-bike.png" alt= "delivery-icon" width={25} height={25}/>
            </p>
        </article>

        <article>
            <img src="./images/lemon-dessert.jpg" alt="lemon-dessert" width={200} height={200}/>
            <h3>Lemon Dessert</h3>
            <h3>$ 5.00</h3>
            <p>
                TThis comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
            </p>
            <p>Order a delivery
                <img src="./images/delivery-bike.png" alt= "delivery-icon" width={25} height={25}/>
            </p>
        </article>
    </section>
    <hr/>
    </main>
  );
}

export default Main;
