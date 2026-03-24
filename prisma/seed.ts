import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.order.deleteMany({});
  await prisma.customer.deleteMany({});
  await prisma.product.deleteMany({});

  const p1 = await prisma.product.create({
    data: { name: 'Hand-poured Soy Candle', price: 24.0, stock: 42, status: 'Active' },
  });

  const p2 = await prisma.product.create({
    data: { name: 'Ceramic Coffee Mug', price: 18.5, stock: 3, status: 'Low Stock' },
  });

  const p3 = await prisma.product.create({
    data: { name: 'Linen Throw Blanket', price: 89.0, stock: 15, status: 'Active' },
  });

  const p4 = await prisma.product.create({
    data: { name: 'Organic Cotton Tee', price: 35.0, stock: 0, status: 'Out of Stock' },
  });

  const c1 = await prisma.customer.create({
    data: { name: 'Sarah Jenkins', email: 'sarah.j@example.com' },
  });

  const c2 = await prisma.customer.create({
    data: { name: 'David Chen', email: 'david.c@example.com' },
  });

  const c3 = await prisma.customer.create({
    data: { name: 'Emily Wright', email: 'emily.w@example.com' },
  });

  await prisma.order.create({
    data: { customerId: c1.id, total: 45.0, status: 'Fulfilled' },
  });

  await prisma.order.create({
    data: { customerId: c2.id, total: 120.5, status: 'Pending' },
  });

  await prisma.order.create({
    data: { customerId: c3.id, total: 34.99, status: 'Shipped' },
  });

  await prisma.order.create({
    data: { customerId: c3.id, total: 89.0, status: 'Pending' },
  });

  console.log('Database seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
