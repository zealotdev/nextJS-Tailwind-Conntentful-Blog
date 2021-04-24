export default function FeaturedSection() {
  return (
    <div className="py-12 bg-white rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    Personal Financial
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
