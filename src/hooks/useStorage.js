const STORAGE_PREFIX = 'photo_';

export const storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Storage set error:', e);
            return false;
        }
    },

    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Storage get error:', e);
            return null;
        }
    },

    delete: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Storage delete error:', e);
            return false;
        }
    },

    list: (prefix = STORAGE_PREFIX) => {
        try {
            const items = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(prefix)) {
                    const value = JSON.parse(localStorage.getItem(key));
                    items.push({ key, value });
                }
            }
            return items.sort((a, b) => (b.value.timestamp || 0) - (a.value.timestamp || 0));
        } catch (e) {
            console.error('Storage list error:', e);
            return [];
        }
    },

    clear: (prefix = STORAGE_PREFIX) => {
        try {
            const keysToDelete = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(prefix)) {
                    keysToDelete.push(key);
                }
            }
            keysToDelete.forEach(key => localStorage.removeItem(key));
            return true;
        } catch (e) {
            console.error('Storage clear error:', e);
            return false;
        }
    },

    savePhoto: (imageData, frameId, frameName) => {
        const key = `${STORAGE_PREFIX}${Date.now()}`;
        const data = {
            imageData,
            frameId,
            frameName,
            timestamp: Date.now()
        };
        return storage.set(key, data) ? key : null;
    },

    getPhotos: () => {
        return storage.list(STORAGE_PREFIX);
    },

    deletePhoto: (key) => {
        return storage.delete(key);
    },

    clearAllPhotos: () => {
        return storage.clear(STORAGE_PREFIX);
    }
};
