import SectionTitle from '@/components/global/SectionTitle';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatDate } from '@/utils/format';
import { fetchUserOrders } from '@/utils/actions';

async function OrdersPage() {
  const orders = await fetchUserOrders();

  return (
    <>
      <SectionTitle text="your orders" />
      <div>
        <Table>
          <TableCaption>Total Orders: {orders.length}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Products</TableHead>
              <TableHead>Order Total</TableHead>
              <TableHead>Tax</TableHead>
              <TableHead>Shipping</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {orders.map((order) => {
              const { id, products, shipping, tax, orderTotal, createdAt } =
                order;
              return (
                <TableRow key={id}>
                  <TableCell>{products}</TableCell>
                  <TableCell>{orderTotal}</TableCell>
                  <TableCell>{tax}</TableCell>
                  <TableCell>{shipping}</TableCell>
                  <TableCell>{formatDate(createdAt)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default OrdersPage;
