const modules = import.meta.glob("./pages/*.jsx", { eager: true });

const routes = Object.values(modules)
  .map((module) => {
    const Component = module.default;

    return {
      ...Component.route,
      element: <Component />,
    };
  })
  .sort((a, b) => a.order - b.order);

export default routes;
