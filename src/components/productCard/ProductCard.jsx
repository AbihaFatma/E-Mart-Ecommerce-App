import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function ProductCard() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Our Latest Collection
          </h1>
          <div class="h-1 w-20 bg-green-900 rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/4  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://landing-page-backend.s3.ap-south-1.amazonaws.com/blog_page_prodimages/ebe28102-88be-4cfe-8af2-bf0b0224a7c3/safeimagekit-shutterstock_589577570-scaled_lar.png"
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Western Wear
                </h2>
                <h1
                  className="title-font text-lg font-medium text-gray-900 mb-3"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Up To 25% Off
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p
                  className="leading-relaxed mb-3"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹ 800
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-900 hover:bg-green-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/4  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://media.istockphoto.com/id/1878762903/photo/trendy-blue-jeans-trousers-on-a-rack-in-a-fashion-store.jpg?s=612x612&w=0&k=20&c=NjbVvxfAXqk26naPGQK-nIbWtCBIPc8GhfIjtk_NM1Q="
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Super-Stylish Finds
                </h2>
                <h1
                  className="title-font text-lg font-medium text-gray-900 mb-3"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Bestsellers
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p
                  className="leading-relaxed mb-3"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹ 900
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-900 hover:bg-green-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/4  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://as1.ftcdn.net/v2/jpg/03/34/79/68/1000_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg"
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Bestselling Casuals
                </h2>
                <h1
                  className="title-font text-lg font-medium text-gray-900 mb-3"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Up To 30% Off
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p
                  className="leading-relaxed mb-3"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹ 1000
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-900 hover:bg-green-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/4  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://imgmedia.lbb.in/media/2022/11/637f1198aadafc2ed15c706c_1669271960936.jpg"
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Winter Wear
                </h2>
                <h1
                  className="title-font text-lg font-medium text-gray-900 mb-3"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Up To 50% Off
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p
                  className="leading-relaxed mb-3"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹ 1500
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-900 hover:bg-green-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
