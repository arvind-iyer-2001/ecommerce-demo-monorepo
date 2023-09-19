import getBillboards from '@/actions/get-billboards'
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container'

export default async function Home() {
  const billboards = await getBillboards();
  const products = await getProducts({ isFeatured: true });
  return (
    <div>
      <Container>
        <div className="space-y-10 pb-10">
          {billboards.map((billboard) =>
            <Billboard key={billboard.id} data={billboard} />
          )}
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </Container>
    </div>
  )
}
