/*
    usableCache() checks if there is an old cache, returning valid cache name 
    or deleting the old cache if it is more than 24 hours older
*/
async function usableCache() {
    const keys = await caches.keys();
    for (const key of keys) {
        if ("articles" === key.substr(0, 8)) {
            const cacheDate = parseInt(key.substr(9));
            if (Date.now() - cacheDate > 86400000) {
                caches.delete(key);
            } else {
                return key;
            }
        }
    }
    return null;
}

export default async function getCachedNews(url) {
    const hasCache = await usableCache();
    const validCache = hasCache
        ? await caches.open(hasCache)
        : await caches.open(`articles-${Date.now()}`);
    let cacheResults;

    if (!(await validCache.match(url))) {
        await validCache.add(url);
    }

    cacheResults = await validCache.match(url);
    console.log(cacheResults);
    return cacheResults;
}
