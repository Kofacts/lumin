import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/layouts/navbar';
import Footer from '../components/layouts/footer'
import Cart from '../components/cart/index';
import AddCart from '../components/cart/add';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,useMutation,
  gql
} from "@apollo/client";
import client from "../apollo-client";

export const ALL_PRODUCTS_QUERY = gql`
  query ExampleQuery($priceCurrency: Currency) {
    currency
    products {
      id
      title
      image_url
      price(currency: $priceCurrency)
    }
  }
`;
const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;
export default function Home() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      priceCurrency: 'USD',
    },
  });

  return (
    <div className="relative">
      <Navbar />
      {/* <Cart /> */}
      <Head>
        <title>Lumin Frontend</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
            rel="preload"
            href="/fonts/bau-regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/freight-display.otf"
            as="font"
            crossOrigin=""
          />
      </Head>

      <section className="">
        <div className="p-36 pt-20 pb-20 flex flex-row justify-between items-center">
          <div>
            <h1 className="text-5xl">All Products</h1>
            <h6 className="mt-6 text-major text-lumin-dark">A 360° look at Lumin</h6>
          </div>
          <div>
            <select className="custom">
              <option disabled selected>Filter by</option>
              <option>All Products</option>
            </select>
          </div>
        </div>
        <div className="bg-lumin-lightgreen p-36 pt-20 pb-20">
        <div className="grid grid-cols-3 gap-5">
            {data && data.products.map((product) => (
            <div>
              <div className="w-100 h-32 text-center">
                <Image className="w-100 h-32 object-contain text-center" src="/products/age-management.png" width="auto" height="auto" />
              </div>
              <div className="mt-20 text-center w-100">
                <h4 className="text-major text-lumin">{product.title}</h4>
                <p className="mt-3">
                  <h3 className="text-major">From {product.price}</h3>
                </p>
                {/* <AddCart id={product.id} /> */}
                <button  className="mt-7 w-100 bg-lumin-button text-white p-4 pl-16 pr-16 hover:bg-lumin"><h6 className="text-minor">Add to Cart</h6></button>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
   
      <Footer />
    </div>
  )
}
