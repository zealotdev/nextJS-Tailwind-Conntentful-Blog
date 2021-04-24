export default function TodaysEditorPick({ todaysPick }) {
  return (
    <div className="lg:text-center">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
        Featured Posts
      </h2>

      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Today's Editor Pick
      </p>
      <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 my-6 cursor-pointer shadow-md hover:bg-gray-200 transition ease-in-out duration-500 transform hover:-translate-y-1 hover:scale-105">
        <img
          className="w-32 h-32 md:w-48 md:max-h-80 md:h-auto rounded-full md:rounded-none md:rounded-l-xl mx-auto"
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
  );
}
