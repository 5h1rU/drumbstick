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
const events = [event];

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

export async function createUser() {
  try {
    const response = await api.get('/account');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createCart(payload) {
  try {
    const response = await api.put('/cart', [...payload]);
    return normalize(response.data.cart, cart);
  } catch (error) {
    throw error;
  }
}

export async function getAllEvents() {
  try {
    const response = await api.get('/events');
    return normalize(response.data.event.docs, events);
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
