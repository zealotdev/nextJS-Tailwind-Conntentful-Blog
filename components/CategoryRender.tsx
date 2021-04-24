export default function CategoryRender({
  categoriesToBeRendered,
  categoryList,
}) {
  let categoryObj = [];

  categoriesToBeRendered.map((cat) => {
    var categoryToRender = categoryList.filter(
      (el) => el.sys.id === cat.sys.id
    );

    categoryToRender.map((el) => {
      let name = el.fields.externalName;
      let color = el.fields.color;
      categoryObj.push({
        name,
        color,
      });
    });
  });

  return (
    <div className="text-gray-600 text-sm">
      Category:{' '}
      {categoryObj.map((cat) => {
        return (
          <button
            className={`btn bg-${cat.color}-400 rounded-xl text-xs px-4 text-white py-1 shadow mr-1`}
            key={cat.name}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
}
