import { Tproduct2 } from '~/types/product2'

type TProps = {
  products: Tproduct2[]
}

const Product = (props: TProps) => {

  return (
    <div>
      {props.products.map((product) => (
        <div key={product.id}>
          <section className='MenuSection' id='menu-id'>
            <h1>OUR SPECIALTIES</h1>
            <p>Fresh Bakery Items with the Finest Ingredients</p>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-3 col-md-4 col-sm-6 col-12 mx-auto Bakery-menu'>
                  <img src={product.images} alt={product.name} className='container-fluid'></img>
                  <h3>{product.name}</h3>
                  <h6>
                    ${product.price}
                    <span id='Weight'>{product.klo}</span>
                  </h6>
                  <a href='#'>Order</a>
                </div>
                {/* <div className='col-lg-3 col-md-4 col-sm-6 col-12 mx-auto Bakery-menu'>
                  <img
                    src='https://th.bing.com/th/id/R.f8428e8af4e7b0275075f057bf380a86?rik=c9OFWy8ZQkyyGQ&riu=http%3a%2f%2fwww.taste.com.au%2fimages%2frecipes%2fsfi%2f2009%2f06%2f22696.jpg&ehk=zE5Xry3p%2fKDXWIY%2b95TEO4udv3LdJ2wGKQXDIW7Thj4%3d&risl=&pid=ImgRaw&r=0'
                    alt=''
                    className='container-fluid'
                  ></img>
                  <h3>Carmel Crunch cake</h3>
                  <h6>
                    $20.00<span id='Weight'> 2.5 Pound</span>
                  </h6>
                  <a href='#'>Order</a>
                </div> */}
                {/* <div className='col-lg-3 col-md-4 col-sm-6 col-12 mx-auto Bakery-menu'>
                  <img
                    src='https://th.bing.com/th/id/OIP.b_Gbvbf7Afd02OZSXSkkbAHaHa?rs=1&pid=ImgDetMain'
                    alt=''
                    className='container-fluid'
                  ></img>
                  <h3>Chewy Fudgy Brownie Cake Bucket</h3>
                  <h6>
                    $5.00<span id='Weight'>Per Bucket</span>
                  </h6>
                  <a href='#'>Order</a>
                </div> */}
                {/* <div className='col-lg-3 col-md-4 col-sm-6 col-12 mx-auto Bakery-menu'>
                  <img
                    src='https://th.bing.com/th/id/OIP.gI-KbVsyLl61oPbHpNlRjgHaFj?rs=1&pid=ImgDetMain'
                    alt=''
                    className='container-fluid'
                  ></img>
                  <h3>Chocolate and Wallnut Biscuits</h3>
                  <h6>
                    $35.00<span id='Weight'>Per Kg</span>
                  </h6>
                  <a href='#'>Order</a>
                </div> */}
                {/* <div className='col-lg-3 col-md-4 col-sm-6 col-12 mx-auto Bakery-menu'>
                  <img
                    src='https://i.pinimg.com/originals/a4/70/fe/a470fefcda1f459f3d9d5c3b5aa1a502.jpg'
                    alt=''
                    className='container-fluid'
                  ></img>
                  <h3>Julab Jaman (Brown)</h3>
                  <h6>
                    $8.00<span id='Weight'> Per Kg</span>
                  </h6>
                  <a href='#'>Order</a>
                </div> */}
                {/* <div className='col-lg-3 col-md-4 col-sm-6 col-12 mx-auto Bakery-menu'>
                  <img
                    src='https://i.pinimg.com/originals/07/75/59/077559ff4f1427c0cb9d537b5afd9437.jpg'
                    alt=''
                    className='container-fluid'
                  ></img>
                  <h3>KitKat $ MnM Molten Dessert Box</h3>
                  <h6>
                    $5.00<span id='Weight'> Per Box</span>
                  </h6>
                  <a href='#'>Order</a>
                </div> */}
                {/* <div className='col-lg-3 col-md-4 col-sm-6 col-12 mx-auto Bakery-menu'>
                  <img
                    src=' https://th.bing.com/th/id/OIP.PQUFWVKebONZE_-oKR-mpgHaHa?rs=1&pid=ImgDetMain'
                    alt=''
                    className='container-fluid'
                  ></img>
                  <h3>Milky Malt cake</h3>
                  <h6>
                    $15.00<span id='Weight'> 2.5 Pound</span>
                  </h6>
                  <a href='#'>Order</a>
                </div> */}
                {/* <div className='col-lg-3 col-md-4 col-sm-6 col-12 mx-auto Bakery-menu'>
                  <img
                    src='https://th.bing.com/th/id/OIP.DIftqb1sz-WxnFb0x_mW5gHaF5?rs=1&pid=ImgDetMain'
                    alt=''
                    className='container-fluid'
                  ></img>
                  <h3>Mix Nimco</h3>
                  <h6>
                    $2.00<span id='Weight'> Per Pack</span>
                  </h6>
                  <a href='#'>Order</a>
                </div> */}
                {/* <div className='col-lg-3 col-md-4 col-sm-6 col-12 mx-auto Bakery-menu'>
                  <img
                    src='https://images.unsplash.com/photo-1584796101179-52cfea2e6f52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG9hZiUyMG9mJTIwYnJlYWR8ZW58MHx8MHx8&w=1000&q=80'
                    alt=''
                    className='container-fluid'
                  ></img>
                  <h3>Fresh Bread</h3>
                  <h6>
                    $2.00<span id='Weight'> Per Pack</span>
                  </h6>
                  <a href='#'>Order</a>
                </div> */}
                {/* <div className='col-lg-3 col-md-4 col-sm-6 col-12 mx-auto Bakery-menu'>
                  <img
                    src='https://s.marketwatch.com/public/resources/images/MW-BS913_butter_MG_20140120151235.jpg'
                    alt=''
                    className='container-fluid'
                  ></img>
                  <h3>Pure Butter</h3>
                  <h6>
                    $50.00<span id='Weight'> Per Kg</span>
                  </h6>
                  <a href='#'>Order</a>
                </div> */}
                {/* <div className='col-lg-3 col-md-4 col-sm-6 col-12 mx-auto Bakery-menu'>
                  <img
                    src=' https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg'
                    alt=''
                    className='container-fluid'
                  ></img>
                  <h3>Desi Eggs</h3>
                  <h6>
                    $4.00<span id='Weight'> per Dozen</span>
                  </h6>
                  <a href='#'>Order</a>
                </div> */}
                {/* <div className='col-lg-3 col-md-4 col-sm-6 col-12 mx-auto Bakery-menu'>
                  <img
                    src='https://c4.wallpaperflare.com/wallpaper/319/276/863/cheese-milk-cheese-milk-wallpaper-preview.jpg'
                    alt=''
                    className='container-fluid'
                  ></img>
                  <h3>Organic Milk</h3>
                  <h6>
                    $5.00<span id='Weight'> Per liter</span>
                  </h6>
                  <a href='#'>Order</a>
                </div> */}
              </div>
            </div>
          </section>
          <section className='Gallery' id='Gallery-Id'>
            <h1>Gallery</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maiores illo numquam, distinctio
              exercitationem reiciendis!
            </p>

            <div className='main-carousel' data-flickity='{ "cellAlign": "left", "contain": true }'>
              <div className='carousel-cell'>
                <img src='https://images.unsplash.com/photo-1605807646983-377bc5a76493?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'></img>
                <a href='#'>Ice Cake</a>
              </div>

              <div className='carousel-cell'>
                <img src='https://media.istockphoto.com/photos/indian-sweets-in-a-plate-includes-gulab-jamun-rasgulla-kaju-katli-picture-id1054228718?k=20&m=1054228718&s=612x612&w=0&h=OFcioOdcbacinr2F7M0hULoAr3egWnU_BIt5XLmznf0='></img>
                <a href='#'>Sweets</a>
              </div>

              <div className='carousel-cell'>
                <img src='https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'></img>
                <a href='#'>Biscuits</a>
              </div>

              <div className='carousel-cell'>
                <img src='https://w0.peakpx.com/wallpaper/754/603/HD-wallpaper-chocolate-ice-cream-close-up-sweets-ice-cream-balls-ice-cream.jpg'></img>
                <a href='#'>Ice Cream</a>
              </div>
            </div>
          </section>
          <section className='Feedback' id='Feedback'>
            <h1>Feedback</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, distinctio!</p>
            <div className='feedback-background'>
              <div className='center-heading'>
                <p>
                  Have feedback about our products or service<br></br> Please contact Baker's Kitchen directly
                </p>
                <a href='C:\Users\acs\Desktop\new\feedback.html'>Send Feedback Now</a>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  )
}

export default Product
