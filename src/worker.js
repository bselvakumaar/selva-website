export default {
    async fetch(request, env) {
        return env.LOCAL_ASSETS.fetch(request);
    },
};
