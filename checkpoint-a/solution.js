
import { findAllOrders } from "./orders-db.js";

// 1. Load all orders
export async function loadOrders() {
  return await findAllOrders();
}

// 2. Find pending orders from Mansoura
export function myOrders(orders) {
  return orders.filter((order) =>
    order.city === "Mansoura" && order.status === "pending"
  );
}

// 3. Calculate the total number of items
export function summarize(orders) {
  return orders.reduce((total, order) => total + order.quantity, 0);
}

// 4. Describe an order by its ID
export async function describeOrder(id) {
  try {
    const orders = await findAllOrders();
    const order = orders.find((order) => order.id === id);

    if (!order) {
      return `Order ${id} not found`;
    }

    return `${order.quantity} x ${order.item} for ${order.student}`;
  } catch (error) {
    return `Order ${id} not found`;
  }
}

// 5. Convert orders into JSON text
export function toJsonLines(orders) {
  const result = orders.map((order) => ({
    item: order.item,
    price: order.price
  }));

  return JSON.stringify(result);
}
