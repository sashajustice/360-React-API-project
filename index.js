// const http = require('http');
// const meetup = require('meetup-api')({ key: 'd47538034411e4526726eb4345543' });
// const url = require('url');
//
// http.createServer(function(req, res){
//   // respone.writeHead(200, {'Content-type':'text/plan'});
//   // response.write('Hello Node JS Server Response');
//   // response.end( );
//   const pathName = url.parse(req.url).pathname;
//
//   switch (pathName) {
//     case '/meetup':
//       console.log('Whaddup');
//
//       return meetup.getEvents({ topic: 'blockchain' }, function(err, response) {
//         if (err) return res.end(err)
//         console.log('RESPONSE :: ==>', response)
//
//         // return res.end(response)
//       });
//
//     default:
//       res.end('You suck!!')
//   }
// }).listen(7000);
