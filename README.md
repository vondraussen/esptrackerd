# EspTracker Message Parser
This is a EspTracker GPS Tracker message parser implementation. It can be used to implement your own server.
It parses the messages received from the device into a object for further use.

## Usage
``` javascript
const EspTracker = require('esptracker');
const net = require('net');

var server = net.createServer((client) => {
  var tracker = new EspTracker();
  console.log('client connected');

  client.on('data', (data) => {
    let msg = '';
    try {
      msg = tracker.parse(data);
    }
    catch (e) {
      console.log('err', e);
      return;
    }
    console.log(msg);
  });
});

server.listen(serverPort, () => {
  console.log('started server on port:', 4711);
});

```
