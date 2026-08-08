import Fastify from 'fastify';
import cors from '@fastify/cors';

const app = Fastify({ logger: true });

await app.register(cors, {
    origin: true,
});

app.get('/health', async () => {
    return { status: 'ok' };
});

const start = async () => {
    try {
        await app.listen({ port: 4000, host: '0.0.0.0' });
        console.log('Server running on http://localhost:4000');
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();