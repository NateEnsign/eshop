import React from 'react'
import styles from './Checkout.module.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

const Checkout = () => {
  return (
    <div className={styles.checkout}>
        <div className={styles.checkout__left}>
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className={styles.checkout__ad} />
            <div>
                <h2 className={styles.checkout__title} >Your Shopping Basket</h2>
                <CheckoutProduct />
            </div>
        </div>
        <div className={styles.checkout__right}>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout
