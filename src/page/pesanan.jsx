import { useState } from 'react'

import bgHome from '../assets/image/bg-home.png'
import ramen from '../assets/image/ramen.png'
import ads from '../assets/image/apps-ads.png'
import Sandwich from '../assets/image/Crispy-Sandwich.png'
import sate from '../assets/image/sate.png'
import bgFooter from '../assets/image/bg-footer.png'
import pizza from '../assets/image/pizza.png'
import bike from '../assets/icon/bike.png'
import bag from '../assets/icon/bag.png'
import location from '../assets/icon/location.png'
import bell from '../assets/icon/bell.png'
import pay from '../assets/icon/pay.png'
import next from '../assets/icon/next.png'
import donut from '../assets/icon/donut.png'
import clock from '../assets/icon/clock.png'
import burger from '../assets/image/burger.png'
import CardSwiper from '../component/card-swiper/card-swiper'
import Popup from 'reactjs-popup';

function Pesanan() {

  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([])
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(cartItems)

  const dummy = [
    {
      id: 1,
      name: "Cheese Burger",
      price: 10000,
      desc: "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, "
    },
    {
      id: 2,
      name: "Toffe’s Cake",
      price: 10000,
      desc: "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, "
    },
    {
      id: 3,
      name: "Dancake",
      price: 10000,
      desc: "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, "
    },
    {
      id: 4,
      name: "Crispy Sandwitch",
      price: 10000,
      desc: "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, "
    },
    {
      id: 5,
      name: "Thai Soup",
      price: 10000,
      desc: "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, "
    },
    {
      id: 6,
      name: "Cheese Burger",
      price: 10000,
      desc: "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, "
    },
    {
      id: 7,
      name: "Cheese Burger",
      price: 10000,
      desc: "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, "
    },
  ]

  const dummy2 = [
    {
      id: 1,
      title: 'Best deals Crispy Sandwiches',
      subtitle: 'Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.',
      img: Sandwich
    },
    {
      id: 2,
      title: 'Best deals Crispy Sandwiches',
      subtitle: 'Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.',
      img: sate
    },
    {
      id: 3,
      title: 'Best deals Crispy Sandwiches',
      subtitle: 'Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.',
      img: pizza
    },
  ]

  const addProduct = (item) => {
    const existingProduct = cartItems.find(cartItem => cartItem.id === item.id)

    if (existingProduct) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ))
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  }

  const removeProduct = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        setCartItems(cartItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ));
      } else {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
      }
    }
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleConfirm = () => {
    if (!name || !number) {
      alert("Please fill in all fields."); // Validasi sederhana
      return;
    }

    setIsConfirmOpen(true);
    setIsOpen(!isOpen);
    toggleModal();
  };

  const handleCloseConfirm = () => {
    setIsConfirmOpen(false); // Tutup pop-up konfirmasi
  };

  return (
    <>

      {/* Modal Form */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 transition-all m-3">
          <div className="fixed inset-0 bg-black bg-opacity-75"></div>
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 z-50">
            <h2 className="text-xl font-medium mb-4">Detail Pemesanan</h2>
            <form>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full border-2 border-neutral-300 rounded p-2 ps-4'
                placeholder='Nama Pemesan'
              />
              <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className='w-full border-2 border-neutral-300 rounded p-2 ps-4 my-2'
                placeholder='No Pemesan'
              />
            </form>
            <div className="mt-4 flex justify-end items-center gap-3">
              <button onClick={toggleModal} className="bg-red-500 text-white px-4 py-2 rounded-md">
                Close
              </button>
              <button onClick={handleConfirm} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Lanjutkan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pop-up Konfirmasi */}
      {isConfirmOpen && (
        // <Popup open={isConfirmOpen} onClose={handleCloseConfirm}>
        //   <div className="modal">
        //     <h2 className="text-xl font-medium">Detail Pemesanan</h2>
        //     <p>Nama: {name}</p>
        //     <p>No Pemesan: {number}</p>
        //     <p>Produk yang dibeli:</p>
        //     <ul>
        //       {cartItems.map(item => (
        //         <li key={item.id}>{item.name} - {item.quantity} x Rp. {item.price}</li>
        //       ))}
        //     </ul>
        //     <p>Total Harga: Rp. {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
        //     <button onClick={handleCloseConfirm} className="bg-red-500 text-white px-4 py-2 rounded-md">
        //       Close
        //     </button>
        //   </div>
        // </Popup>
        <div className="fixed inset-0 flex items-center justify-center z-50 transition-all m-3">
          <div className="fixed inset-0 bg-black bg-opacity-75"></div>
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 z-50">
            <h2 className="text-xl font-medium mb-4">Detail Pemesanan</h2>
            {(
              <div>
                <div className='flex items-center justify-between border-b-2 py-2'>
                  <h1>Nama Pemesan: </h1>
                  <p className='font-semibold'>{name}</p>
                </div>
                <div className='flex items-center justify-between border-b-2 py-2'>
                  <h1>Nomer Pemesan: </h1>
                  <p className='font-semibold'>{number}</p>
                </div>
                <div className='h-60 overflow-y-auto'>
                  {
                    cartItems.map((item, index) => (
                      <div className='mt-2 bg-[#F17228] text-white p-3 rounded'>
                        <div className='flex items-center justify-between'>
                          <div>
                            <h1 className='font-semibold'>{item.name}</h1>
                            <h1>{item.price * item.quantity}</h1>
                          </div>

                          <div className='bg-white py-1 px-3 rounded-full flex items-center gap-2'>
                            <button className='border-2 rounded-full px-2 border-[#F17228] text-[#F17228] font-bold' onClick={() => removeProduct(item)}> - </button>
                            <p className='text-black'>{cartItems.find(cartItem => cartItem.id === item.id)?.quantity || 0}</p>

                            <button className='border-2 rounded-full px-2 h-[32px] bg-[#F17228] text-white font-medium' onClick={() => addProduct(item)}> + </button>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div className='text-black mt-4'>
                  <div className='flex justify-between border-b-2 py-2'>
                    <h1>Total Pemesanan : </h1>
                    <p className=' font-semibold'>
                      Rp. {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
                    </p>
                  </div>
                  <div className='flex justify-between border-b-2 py-2'>
                    <h1>Potongan Diskon : </h1>
                    <p className=' font-semibold'>
                      Rp. 0
                    </p>
                  </div>
                  <div className='flex justify-between border-b-2 py-2'>
                    <h1>Grand Total : </h1>
                    <p className=' font-semibold'>
                      Rp. {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="mt-4 flex justify-end items-center gap-3">
              <button className=" text-red-600 font-semibold px-4 py-2 rounded-md w-full" onClick={handleCloseConfirm}>
                Batalkan Pesanan
              </button>
              <button className="bg-[#F17228] text-white font-semibold px-4 py-2 rounded-md w-full">
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      )}


      {
        cartItems.length > 0 && (
          <div className='bg-[#FFB20E] fixed w-full z-10 bottom-0 flex items-center p-3 justify-between hover:bg-[#edb742] transition-all' onClick={toggleModal}>
            <div className='text-white'>
              <h1>{cartItems.reduce((acc, item) => acc + item.quantity, 0)} item(s)</h1>
              <p className='text-white font-semibold'>
                Rp. {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
              </p>
            </div>
            <button className='text-white font-semibold'>Lihat Pesanan</button>
          </div>
        )
      }


      {/* Section 1 */}
      <section className='h-fit bg-cover bg-center flex'
        style={{ backgroundImage: `url(${bgHome})` }}>
        <div className=' h-fit m-auto w-full sm:w-[90%] flex flex-col sm:flex-row pt-32 pb-10 items-center justify-around gap-0 sm:gap-28'>
          {/* left */}
          <div className='w-3/5 max-lg:w-[90%]'>
            <h1 className='text-white text-6xl font-bold'>Are you starving ?</h1>
            <p className='font-medium opacity-55 my-2'>Within a few clicks, find meals that are accessible near you</p>

            <div className='py-5 bg-white shadow-md my-6 rounded-md p-5'>
              <div className='flex gap-5 items-center'>
                <div className='bg-[#f1722846] rounded-[8px] flex items-center p-2 px-4 gap-2'>
                  <img src={bike} alt="ramen" />
                  <h2 className='text-[#F17228] font-bold'>Delivery</h2>
                </div>

                <div className='hover:bg-[#f1722846] transition-all rounded-[8px] flex items-center p-2 px-4 gap-2'>
                  <img src={bag} alt="ramen" />
                  <h2 className='opacity-50 font-bold'>Pickup</h2>
                </div>
              </div>
              <hr className='my-5' />

              <div className='w-full flex flex-col justify-around gap-2'>
                <form action="" className='bg-slate-100 p-2 flex items-center px-4 w-full'>
                  <img src={bag} alt="ramen" />
                  <input type="text" name="" id="" className='bg-transparent outline-none px-2' placeholder='Enter Your Address' />
                </form>
                <button className='flex w-1/2 bg-gradient-to-r from-[#FF7A7A] to-[#F65900] items-center px-3 py-2 rounded-md justify-center gap-3 text-center'>
                  <img src={bag} alt="ramen" className='brightness-150' />
                  <h2 className='text-white font-bold'>Find Food</h2>
                </button>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className='drop-shadow-2xl w-2/5 max-lg:w-2/4'>
            <img src={ramen} alt="" className='brightness-125 drop-shadow-2xl' />
          </div>

        </div>
      </section>

      {/* Section 2 */}
      <section className='p-4 sm:p-10'>
        <div className=' h-fit'>
          <h1 className='text-3xl font-bold text-[#F17228] text-center'>How does it work</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-3/4 m-auto justify-center gap-8 my-14'>
            <div className=''>
              <img src={location} alt="" className='h-40 m-auto' />
              <div className='text-center'>
                <h2 className=' font-bold -tracking-tight'>Location</h2>
                <p className='opacity-45'>Choose the location where your food will be delivered.</p>
              </div>
            </div>
            <div className=''>
              <img src={bell} alt="" className='h-40 m-auto' />
              <div className='text-center'>
                <h2 className=' font-bold -tracking-tight'>Choose order</h2>
                <p className='opacity-45'>Check over hundreds of menus to pick your favorite food</p>
              </div>
            </div>
            <div className=''>
              <img src={pay} alt="" className='h-40 m-auto' />
              <div className='text-center'>
                <h2 className=' font-bold -tracking-tight'>Pay advanced</h2>
                <p className='opacity-45'>It's quick, safe, and simple. Select several methods of payment</p>
              </div>
            </div>
            <div className=''>
              <img src={donut} alt="" className='h-40 m-auto' />
              <div className='text-center'>
                <h2 className=' font-bold -tracking-tight'>Enjoy meals</h2>
                <p className='opacity-45'>Food is made and delivered directly to your home.</p>
              </div>
            </div>
          </div>


          <div className='m-auto h-fit md:px-10 my-10'>
            <div className='mb-5'>
              <h1 className='text-2xl font-bold'>Popular items</h1>
              <p>Makanan yang sering dibeli</p>
            </div>
            <CardSwiper />
          </div>


          <div className='m-auto h-fit md:px-10'>
            <div>
              <h1 className='text-2xl font-bold'>Makanan yang banyak disukai</h1>
              <p>Makanan yang banyak disukai</p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-5 items-center gap-2 sm:gap-5'>
              {dummy.map((item, index) => {
                return (
                  <div className='bg-white shadow-xl rounded-lg max-h-[675px] h-full'>
                    <div className='relative'>
                      <div className='p-2'>
                        <img src={burger} alt="" className='bg-centers object-cover w-full' />
                      </div>
                      <div className='bg-white py-1 px-3 rounded-full flex items-center absolute top-4 left-4 gap-2'>
                        <button className='border-2 rounded-full px-2 border-[#F17228] text-[#F17228] font-bold' onClick={() => removeProduct(item)}> - </button>
                        <p>{cartItems.find(cartItem => cartItem.id === item.id)?.quantity || 0}</p>

                        <button className='border-2 rounded-full px-2 h-[32px] bg-[#F17228] text-white font-bold' onClick={() => addProduct(item)}> + </button>
                      </div>
                    </div>
                    <div className='p-3'>
                      <div className='max-h-[200px] h-[100px] sm:h-[120px]'>
                        <div className='flex items-center justify-between my-1'>
                          <h1 className="text-sm md:text-lg font-semibold truncate max-w-[65%]" title={item.name}>
                            {item.name || 'Unnamed Item'}
                          </h1>
                          <h4 className='text-sm font-medium'>Rp. {item.price}</h4>
                        </div>
                        <p className='text-justify mb-2 text-[10px] sm:text-[14px] font-medium opacity-55'>The salad is fresh!!! Don't ask about the sauce again, it's really delicious, </p>
                      </div>
                        <button className='w-full bg-[#F17228] text-white font-medium p-1 rounded-[5px] text-sm shadow-md shadow-[#f1722858]'>Lihat Detail</button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className='h-fit bg-center bg-contain bg-no-repeat' >
        <img src={ads} alt="" />
      </section>

      {/* Section 4 */}
      <section className='h-fit'>
        {dummy2.map((item, index) => {
          if (index % 2 == 0) {
            return (
              <div className='h-fit w-3/4 m-auto my-8 shadow-xl shadow-[#ffb30e24] hover:shadow-[#ffb30e4b] transition-all hover:scale-105 duration-300'>
                <div className='bg-white flex flex-col items-center sm:flex-row rounded-lg'>
                  <div className='py-5 px-3 sm:p-14 order-2 sm:order-1'>
                    <h1 className='text-3xl font-bold w-3/4'>Best deals <span className='text-[#FFB30E]'>Crispy Sandwiches</span></h1>
                    <p className='font-medium opacity-55 my-3'>Enjoy the large size of sandwiches. Complete
                      perfect slice of sandwiches.</p>

                    <button className='w-full bg-[#FFB30E] my-3 p-2 rounded-md text-white font-bold shadow-sm shadow-[#FFB30E]'>Proceed to order</button>
                  </div>
                  <div className='order-1 sm:order-2'>
                    <img src={item.img} alt="" className='h-full object-cover rounded-t-md' />
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div className='h-fit w-3/4 m-auto my-8 shadow-xl shadow-[#ffb30e24] hover:shadow-[#ffb30e4b] transition-all hover:scale-105 duration-300'>
                <div className='bg-white flex flex-col items-center sm:flex-row rounded-lg'>
                  <div className='py-5 px-3 sm:p-14 order-1 sm:order-2'>
                    <h1 className='text-3xl font-bold w-3/4'>Best deals <span className='text-[#FFB30E]'>Crispy Sandwiches</span></h1>
                    <p className='font-medium opacity-55 my-3'>Enjoy the large size of sandwiches. Complete
                      perfect slice of sandwiches.</p>

                    <button className='w-full bg-[#FFB30E] my-3 p-2 rounded-md text-white font-bold shadow-sm shadow-[#FFB30E]'>Proceed to order</button>
                  </div>
                  <div className=''>
                    <img src={item.img} alt="" className='h-full w-full object-cover rounded-t-md' />
                  </div>
                </div>
              </div>
            )
          }
        })}
      </section>

      <section className='h-full py-28 bg-center bg-cover' style={{ backgroundImage: `url(${bgFooter})` }}>
        <div className='text-center m-auto w-full sm:w-1/3'>
          <h1 className='text-4xl text-white font-bold'>Are you ready to order with the best deals?</h1>
          <br />
          <button className='m-auto px-6 bg-[#F17228] p-2 rounded-md text-white font-bold shadow-sm shadow-[#FFB30E] flex items-center justify-center gap-4'>
            Proceed to order
            <img src={next} alt="ramen" />
          </button>
        </div>
      </section>
    </>
  )
}
export default Pesanan
