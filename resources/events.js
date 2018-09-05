import { schema, normalize } from 'normalizr';
import { api } from '../lib/network';

const venue = new schema.Entity('venues', {}, { idAttribute: '_id' });
const event = new schema.Entity('events', { venue }, { idAttribute: '_id' });

const events = [event];
// const venues = [venue];

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
