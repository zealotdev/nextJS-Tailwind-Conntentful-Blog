export default function FeaturedSection() {
  return (
    <div className="py-12 bg-white rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Featured Posts
          </h2>

          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Today's Editor Pick
          </p>
          <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 my-6 cursor-pointer shadow-md hover:bg-gray-200 transition ease-in-out duration-500 transform hover:-translate-y-1 hover:scale-105">
            <img
              className="w-32 h-32 md:w-48 md:h-auto rounded-full md:rounded-none md:rounded-l-xl mx-auto"
              src="/blockchain.jpeg"
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  The Impact of blockchain on society.
                </p>
                <p className="text-lg font-semibold text-gray-600">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </p>
                <a className="block text-blue-500">READ MORE ...</a>
              </blockquote>
              <figcaption className="font-medium">
                <small className="text-gray-500">23 Feb, 2021</small>
                <div className="text-gray-600 text-sm">
                  Category:{' '}
                  <button className="btn bg-indigo-400 rounded-xl text-xs px-4 text-white py-1 shadow mr-1">
                    Technology
                  </button>
                </div>
              </figcaption>
            </div>
          </figure>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-400 ease-in-out">
              <dt>
                <small className="text-gray-500">23 Feb, 2021</small>
                <div className="text-gray-600 text-sm my-1">
                  Category:{' '}
                  <button className="btn bg-yellow-400 rounded-xl text-xs px-4 text-white py-1 shadow mr-1">
                    Lifestyle
                  </button>
                </div>
                <p className="text-lg leading-6 font-medium text-gray-900">
                  Competitive exchange rates
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
                <a className="block text-blue-500">READ MORE ...</a>
              </dd>
            </div>

            <div className="relative cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-400 ease-in-out">
              <dt>
                <small className="text-gray-500">23 Feb, 2021</small>
                <div className="text-gray-600 text-sm my-1">
                  Category:{' '}
                  <button className="btn bg-blue-400 rounded-xl text-xs px-4 text-white py-1 shadow mr-1">
                    Programming
                  </button>
                  <button className="btn bg-indigo-400 rounded-xl text-xs px-4 text-white py-1 shadow mr-1">
                    Technology
                  </button>
                </div>

                <p className="text-lg leading-6 font-medium text-gray-900">
                  ReactJS Learning Curve
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
                <a className="block text-blue-500">READ MORE ...</a>
              </dd>
            </div>

            <div className="relative cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-400 ease-in-out">
              <dt>
                <small className="text-gray-500">23 Feb, 2021</small>
                <div className="text-gray-600 text-sm my-1">
                  Category:{' '}
                  <button className="btn bg-green-400 rounded-xl text-xs px-4 text-white py-1 shadow mr-1">
                    Personal Business
                  </button>
                </div>
                <p className="text-lg leading-6 font-medium text-gray-900">
                  Competitive exchange rates
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
                <a className="block text-blue-500">READ MORE ...</a>
              </dd>
            </div>

            <div className="relative cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-400 ease-in-out">
              <dt>
                <small className="text-gray-500">23 Feb, 2021</small>
                <div className="text-gray-600 text-sm my-1">
                  Category:{' '}
                  <button className="btn bg-indigo-400 rounded-xl text-xs px-4 text-white py-1 shadow mr-1">
                    Technology
                  </button>
                </div>
                <p className="text-lg leading-6 font-medium text-gray-900">
                  Competitive exchange rates
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
                <a className="block text-blue-500">READ MORE ...</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
