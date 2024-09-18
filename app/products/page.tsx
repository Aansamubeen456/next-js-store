// useSearachParams  is used in client based components

import ProductsContainer from '@/components/products/ProductsContainer';

// searachParams is used in server based components
function ProductPage({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) {
  // console.log(searchParams);
  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || '';
  console.log(`layout is: ${layout}`);

  return <ProductsContainer layout={layout} search={search} />;
}

export default ProductPage;
