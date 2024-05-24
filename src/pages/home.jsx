/* eslint-disable no-unused-vars */
import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { Link } from 'react-router-dom';
import Featuredproducts from '../components/featuredproducts';
import Newarrivals from '../components/newarrivals'
import banner from '../assets/images/banner/b17.jpg'
import banner1 from '../assets/images/banner/b10.jpg'
import blog1 from '../assets/images/blog/blog-1.jpg'
import blog2 from '../assets/images/blog/blog-2.jpg'
import blog3 from '../assets/images/blog/blog-3.jpg'
import blog4 from '../assets/images/blog/blog-4.jpg'
import Newsletter from '../components/newsletter';
import Hero from '../components/hero';


const home = () => {
  return <>
    <section className="banner">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="d-flex flex-column justify-content-center ">
              <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className='back-details'>
                    {/* <p className='mb-3 text'>Trade in offer</p> */}
                    <h1>Super Value Deals</h1>
                    <h2>On all products</h2>

                    <p className='mb-3'>Save more today with Apneck</p>

                    {/* <Link to='/shop' className='btn btn-primary' id='button-link'>Shop Now</Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Hero />

    <section className="featured-products p-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Featured Products</h1>
            <p>All Weather New Modern Designs</p>
          </div>
          <Featuredproducts />
        </div>
      </div>
    </section>

    <section className="repair-services p-5">
      <div className="container-xxl">
        <div className="row ">
          <div className="repair-details text-center align-items-center">
            <h5 className='mb-3 text-white'>Repair Services</h5>
            <h2 className='mb-3 text-white'>On 70% Off on All Products And Accessories</h2>
            <button>Explore Now</button>
          </div>
        </div>
      </div>
    </section>

    <section className="new-arrivals p-4">
      <div className="container-xxl">
        <div className="row">
          <div className="d-flex align-items-center justify-content-center flex-column">
            <h1>New Arrivals</h1>
            <p>Your Best Designer Outfits</p>
          </div>
          <Newarrivals />
        </div>
      </div>
    </section>
    <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-6 d-flex">
            <div className="card m-auto mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={banner} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Hot Deals</h5>
                    <h2 className="card-text mb-2">Buy One get One free.</h2>
                    <p className="card-text mb-2"><small className="text-body-secondary">The latest best collection in our closet <br />Feel Cute with our outfits.</small></p>
                    <Link to='blog'>
                      <button className='mt-4'>Learn more</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col-md-6 d-flex">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={banner1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Season-In</h5>
                    <h2 className="card-text mb-2">All Weather Attire</h2>
                    <p className="card-text mb-2"><small className="text-body-secondary">It never matter which season it is <br />We got you covered</small></p>
                    <Link to='blog'>
                      <button className='mt-4'>Learn more</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section className="blogs p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="mb-3">What our customers say...</h1>
            <p className="mb-4">Our customers never miss a bit on providing feedback</p>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src={blog1} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5>Ravi Sharma, Mumbai</h5>
                <p className="card-text">VividWear has completely transformed my wardrobe! The funky designs are a hit, and the quality is outstanding. Every piece I own feels unique and stylish. I highly recommend VividWear to anyone looking to add a splash of creativity to their outfits.</p>
                {/* <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link> */}
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src={blog2} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5>Aisha Khan, Bangalore</h5>
                <p className="card-text">I love how VividWear combines comfort with trendy designs. The t-shirts are perfect for both casual outings and laid-back days at home. Plus, the attention to detail in each design is remarkable. It's my go-to brand for standout fashion</p>
                
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src={blog3} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5>Vikram Patel, Ahmedabad</h5>
                <p className="card-text">VividWear's collection is a breath of fresh air! The vibrant colors and quirky patterns make every outfit pop. I've received so many compliments whenever I wear VividWear. It's a must-have for anyone who loves to express themselves through fashion.</p>
               
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src={blog4} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5>Meera Nair, Delhi</h5>
                <p className="card-text">I'm thrilled with my VividWear purchases. The medium-priced range is perfect for my budget, and I don't have to compromise on style or quality. The funky designs are just I needed to spice up my wardrobe. VividWear has definitely become my favorite clothing brand!</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Newsletter />
  </>;
}

export default home