import getEmojiRenderer from './emoji-renderer';
import getEmojiImageRenderer from './emoji-image-renderer';
import getEmojiImageSrcRenderer from './emoji-image-src';
import getUnicodeRenderer from './unicode-renderer';

const rendererForOutputFormat = {
    emoji: getEmojiRenderer,
    unicode: getUnicodeRenderer,
    'emoji-image': getEmojiImageRenderer,
    'emoji-src': getEmojiImageSrcRenderer
};

const getRenderer = (config) => {
    const renderer = rendererForOutputFormat[config.output] || rendererForOutputFormat.emoji;
    return renderer(config);
};

export default getRenderer;
