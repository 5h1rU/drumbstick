import { schema, normalize } from 'normalizr';
import { api } from '../lib/network';

const ticket = new schema.Entity('tickets', {}, { idAttribute: '_id' });
const tickets = [ticket];
const venue = new schema.Entity('venues', {}, { idAttribute: '_id' });
const event = new schema.Entity(
  'events',
  { venue, tickets },
  { idAttribute: '_id' }
);

// const events = new schema.Object({
//   events: [event]
//   venues: [venue]
// });

/**
 * Backend will generate an Cart ID
 *
 */

const cart = new schema.Entity('cart', {}, { idAttribute: '_id' });
export async function getCart() {
  try {
    const response = await api.get('/cart');
    return normalize(response.data.cart, cart);
  } catch (error) {
    throw error;
  }
}

export async function createCart({ productId, quantity, userId = undefined }) {
  try {
    const response = await api.put('/cart', {
      id: productId,
      quantity,
      userId
    });
    return normalize(response.data.cart, cart);
  } catch (error) {
    throw error;
  }
}

const events = [event];

export async function getAllEvents() {
  try {
    const response = await api.get('/events');
    return normalize(response.data.events.docs, events);
  } catch (error) {
    throw error;
  }
}

export async function getEventById(id) {
  try {
    const response = await api.get(`/events/${id}`);
    return normalize(response.data.event, event);
  } catch (error) {
    throw error;
  }
}
