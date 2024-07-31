import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import mainLogo from './assets/Zamazon.jpg'
import './App.css';

const App = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Redmi A3 (Olive Green, 6GB RAM, 128GB Storage)',
      price: 8999,
      oldPrice: '₹11,999',
      description: 'Premium Halo Design | 90Hz Display | Powerful 4G G36 Processor',
      rating: 4,
      img: "https://m.media-amazon.com/images/I/41jNSbEamYL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
      id: 2,
      name: 'OnePlus Nord CE4 Lite 5G (Mega Blue, 8GB RAM, 128GB Storage)',
      price: 19999,
      oldPrice: '₹20,999',
      description: '(Mega Blue, 8GB RAM, 128GB Storage)',
      rating: 4,
      img: "https://m.media-amazon.com/images/I/5155PFA2N+L._SX679_.jpg"
    },
    {
      id: 3,
      name: 'Samsung Galaxy M35 5G (DayBreak Blue,6GB RAM,128GB Storage)',
      price: 33300,
      oldPrice: '₹50,990',
      description: 'Corning Gorilla Glass Victus+ | Vapour Cooling Chamber | 6000mAh Battery | 120Hz Super AMOLED Display| without Charger',
      rating: 3.5,
      img: "https://m.media-amazon.com/images/I/81bjSZL8tNL._SX679_.jpg"
    },
    {
      id: 4, name: 'Apple iPad (10th generation)',
      price: 32900,
      description: 'with A14 Bionic chip, 27.69 cm (10.9″) Liquid Retina display, 64GB, Wi-Fi 6, 12MP front/12MP back camera, Touch ID, all-day battery life – Blue',
      img: "https://m.media-amazon.com/images/I/31qx8K0wm+L._MCnd_AC_.jpg",
      rating: 5
    },
    {
      id: 5,
      name: 'ASUS Vivobook Go 15 (2023)',
      price: 47990,
      description: 'AMD Ryzen 5 7520U, 15.6" (39.62 cm) FHD, Thin & Light Laptop (16GB/512GB SSD/Windows 11/Office 2021/Alexa Built-in/Mixed Black/1.63 kg)',
      rating: 4,
      img: "https://m.media-amazon.com/images/I/4131DuYd2ML._MCnd_AC_.jpg"
    },
    {
      id: 6,
      name: 'HP Laptop 15s',
      price: 42085,
      oldPrice: '₹62,753.20',
      description: 'AMD Ryzen 5 5500U, 15.6-inch (39.6 cm), FHD, 16GB DDR4, 512GB SSD, AMD Radeon graphics, 720p HD camera, Backlit KB, Thin & Light (Win 11, MSO 2021, Silver, 1.69 kg)',
      rating: 4,
      img: "https://m.media-amazon.com/images/I/41fkX++tBSL._MCnd_AC_.jpg"
    },
    {
      id: 7,
      name: 'ASUS Vivobook Go 14 (2023)',
      price: 33300,
      oldPrice: '₹50,990',
      description: 'AMD Ryzen 3 7320U, 14-inch (35.56 cm) FHD, Thin & Light Laptop (8GB/512GB SSD/Windows 11/Office 2021/Alexa Built-in/Grey Green/1.38 kg)',
      rating: 3.5,
      img: "https://m.media-amazon.com/images/I/41qdnUhX8RL._MCnd_AC_.jpg"
    },
    {
      id: 8, name: 'GIGABYTE Nvidia GeForce ® GTX 1650 D6 pci_e_x16',
      price: 32900,
      description: 'WINDFORCE OC 4GD Graphics Card with Integrated 4GB GDDR6 Memory (GV-N1656WF2OC-4GD)',
      img: "https://m.media-amazon.com/images/I/71qxEY6PtiL._SX679_.jpg",
      rating: 5
    },
    {
      id: 9,
      name: 'Nikon D850 45.7MP Digital SLR Camera (Black)',
      price: 249990,
      oldPrice: '₹2,71,950',
      description: 'with AF-S Nikkor 24-120mm F/4G ED VR Lens and 64GB Memory Card',
      rating: 4,
      img: "https://m.media-amazon.com/images/I/81WtQ64-SOL._SX679_.jpg"
    },
    {
      id: 10,
      name: 'Canon EOS R6 Body Digital Camera [Black]',
      price: 211300,
      oldPrice: '₹2,71,950',
      description: 'Approx. 20.1MP full-frame CMOS sensor + 4K video | Canon Digital Camera EOS R6(IN)BODY With Mount Adapter EF-EOS R & Canon 3 Way Bag',
      rating: 4,
      img: "https://m.media-amazon.com/images/I/31z0rrDcIqL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
      id: 11, name: 'GIGABYTE Nvidia GeForce ® GTX 1650 D6 pci_e_x16',
      price: 32900,
      description: 'WINDFORCE OC 4GD Graphics Card with Integrated 4GB GDDR6 Memory (GV-N1656WF2OC-4GD)',
      img: "https://m.media-amazon.com/images/I/71qxEY6PtiL._SX679_.jpg",
      rating: 5
    },
    {
      id: 12,
      name: 'ASUS Vivobook Go 14 (2023)',
      price: 33300,
      oldPrice: '₹50,990',
      description: 'AMD Ryzen 3 7320U, 14-inch (35.56 cm) FHD, Thin & Light Laptop (8GB/512GB SSD/Windows 11/Office 2021/Alexa Built-in/Grey Green/1.38 kg)',
      rating: 3.5,
      img: "https://m.media-amazon.com/images/I/41qdnUhX8RL._MCnd_AC_.jpg"
    }
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (product) => {
    if (cartItems.some(item => item.id === product.id)) {
      setCartItems(cartItems.filter(item => item.id !== product.id));
      setTotal(total - product.price)
    } else {
      setCartItems([...cartItems, product]);
      setTotal(total + product.price)
    }
  };

  const handleRemoveFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
    setTotal(total - product.price)
  };

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  return (
    <div className="App">
      <div className='container'>
        <nav className="navbar navbar-default navbar-fixed-top">

          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 mt-4 d-flex">
            <img src={mainLogo} className="img-fluid navbar-brand d-flex img-eff" />
          </div>

          <div className="d-flex justify-content-end">
            <Button variant="btn btn-outline-dark btn-eff btn-lg" className="mt-4" onClick={handleShowCart}>
              🛒 My Cart <span className="badge bg-dark text-white">{cartItems.length}</span>
            </Button>
          </div>

        </nav>
      </div>



      <header className="bg-dark text-white text-center py-5 position-relative">
        <h1>Zamazon Great Indian Sale📢</h1>
        <p>Starts early for our Zamazon Prime Customers... Big Savings for everyone!!!</p>
      </header>

      <div className="container my-5">
        <ProductList products={products} onAddToCart={handleAddToCart} cartItems={cartItems} />
      </div>

      <Modal show={showCart} onHide={handleCloseCart}>

        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Cart cartItems={cartItems} total={total} onRemoveFromCart={handleRemoveFromCart} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={handleCloseCart}>
            Close
          </Button>
        </Modal.Footer>

      </Modal>

      <header className="bg-dark text-white text-center py-5 position-relative">
        <span>Copyright @Zamazon.com 2024. All rights reserved</span>
      </header>

    </div>

  );
};

export default App;
