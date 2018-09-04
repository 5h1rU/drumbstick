import { schema, normalize } from 'normalizr';
import { api } from '../lib/network';

// const unattendedChats = new schema.Entity('unattendedChats');
// const event = new schema.Entity('chats', {
//   patient: new schema.Entity('patients'),
//   organization: new schema.Entity('organizations'),
//   participants: [new schema.Entity('users')]
// });

const event = new schema.Entity('events', {}, { idAttribute: '_id' });
// const event = new schema.Entity('events');
const events = new schema.Array(event);
// const chats = new schema.Object({
//   active: [chat],
//   scheduledForFollowUp: [scheduledForFollowUp],
//   unattended: [unattendedChats]
// });

export async function getAllEvents() {
  try {
    const response = await api.get('/events');
    return normalize(response.data.events.docs, events);
  } catch (error) {
    throw error;
  }
}

export function getEventById(id) {
  return api.get(`/events/${id}`).then(response => response.data.event);
}

export function createChatById(id) {
  return api
    .post(`/events/${id}`)
    .then(response => normalize(response.data, event));
}
