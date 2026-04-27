const socket = io();
if (!socket) { console.error('Error importing socket io')}

function createMessage(message) {
  const $item = document.createElement('li');
  const $text = document.createElement('p');
  $item.classList.add('item', 'message');
  $text.classList.add('text', 'message--text', 'item--text');
  $text.textContent = message;
  $item.appendChild($text);
  return $item;
}

function handleInput() {
  const $form = document.querySelector('#send')
  const $input = document.querySelector('#send--message')

  return $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if ($input.value) {
      socket.emit('message', $input.value);
      $input.value = '';
    }
  })
}

handleInput()

socket.on('message', (msg) => {
    const $messages = document.querySelector('#messages');
    const $window = document.querySelector('#window');
    const $item = createMessage(msg);
    $messages.appendChild($item);
    window.scrollTo(0, $window.scrollHeight);
})

