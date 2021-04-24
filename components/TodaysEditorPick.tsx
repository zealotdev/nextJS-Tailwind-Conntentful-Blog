import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import CategoryRender from './CategoryRender';

export default function TodaysEditorPick({ todaysPick, categories }) {
  // console.log(todaysPick);
  return (
    <div className="lg:text-center">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
        Featured Posts
      </h2>

      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Today's Editor Pick
      </p>
      <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 my-6 shadow-md hover:bg-gray-200 transition ease-in-out duration-500 transform hover:-translate-y-1 hover:scale-104">
        <img
          className="w-32 h-32 md:w-48 md:max-h-80 md:h-auto rounded-full md:rounded-none md:rounded-l-xl mx-auto"
          src={todaysPick.image.fields.file.url}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {todaysPick.title}
            </p>
            <div className="text-lg font-semibold text-gray-600">
              {documentToReactComponents(todaysPick.introduction)}
            </div>
            <a className="block text-blue-500">READ MORE ...</a>
          </blockquote>
          <figcaption className="font-medium">
            <small className="text-gray-500">23 Feb, 2021</small>
            {/* {todaysPick.category.map((cat) => {
              console.log(cat.sys.id);
            })} */}
            <CategoryRender
              categoriesToBeRendered={todaysPick.category}
              categoryList={categories}
            />
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
