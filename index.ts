import { readdirSync, createReadStream } from "fs";
import Fastify from "fastify";
const fastify = Fastify();
const port: number = Number(process.env.PORT) || 8080;
const _dirname = process.cwd();

fastify.get('/', function(request, reply){
reply.send('Hello Oni-chan')
})

fastify.get('/random', function (request, reply) {
  const directory = "/images/";
  const files = readdirSync(_dirname + directory);
  let randomFile = files[Math.floor(Math.random() * files.length)];
  reply.header('Content-Type', 'image/jpeg');
  reply.send(createReadStream(_dirname + `${directory}${randomFile}`));
});
fastify.get('*', function (request, reply) {
  reply.redirect('/random')
})
fastify.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});