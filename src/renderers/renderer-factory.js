import getEmojiRenderer from './emoji-renderer';
import getEmojiImageRenderer from './emoji-image-renderer';
import getUnicodeRenderer from './unicode-renderer';

const rendererForOutputFormat = {
    emoji: getEmojiRenderer,
    unicode: getUnicodeRenderer,
    'emoji-image': getEmojiImageRenderer
};

const getRenderer = (config) => {
    const renderer = rendererForOutputFormat[config.output] || rendererForOutputFormat.emoji;
    return renderer(config);
};

export default getRenderer;
