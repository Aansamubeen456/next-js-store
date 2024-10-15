import EmptyList from '@/components/global/EmptyList';
import { deleteProductAction, fetchAdminProductsAction } from '@/utils/actions';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import { formatCurrency } from '@/utils/format';
import { IconButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';

async function AdminProductsPage() {
  const products = await fetchAdminProductsAction();

  if (products.length === 0) return <EmptyList />;
  return (
    <section>
      <Table>
        <TableCaption>Total Products: {products.length}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="capitalize">product name</TableHead>
            <TableHead className="capitalize">company</TableHead>
            <TableHead className="capitalize">price</TableHead>
            <TableHead className="capitalize">actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            const { id: productId, company, price, name } = product;
            return (
              <TableRow key={productId}>
                <TableCell>
                  <Link
                    href={`/products/${productId}`}
                    className="text-muted-foreground capitalize tracking-wide underline"
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell>{company}</TableCell>
                <TableCell>{formatCurrency(price)}</TableCell>
                <TableCell className="flex items-center gap-x-2">
                  <Link href={`/admin/products/${productId}/edit`}>
                    <IconButton actionType="edit" />
                  </Link>
                  <DeleteProduct productId={productId} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}

function DeleteProduct({ productId }: { productId: string }) {
  const deleteProduct = deleteProductAction.bind(null, { productId });
  // console.log(deleteProduct);

  return (
    <FormContainer action={deleteProduct}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}

export default AdminProductsPage;
