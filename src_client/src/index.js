/** @type {import('@ragempcommunity/types-client')} */

mp.events.add('playerReady', () => {
    mp.gui.chat.push('index.js is loaded...');
});

import('./gameLogic');