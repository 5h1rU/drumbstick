import io from 'socket.io-client';
import store from '../store/configureStore';
import { getUserId } from '../store/user/actions';

const socket = io.connect('http://localhost:1234');
console.log(store());
export const confirmation = socket.on('news', function(data) {
  console.log('DATA FROM SOCKETS=====>', data);
  store().dispatch(getUserId(data));
  socket.emit('my other event', { my: 'data' });
});

export default confirmation;
