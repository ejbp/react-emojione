const getRenderer = () => (codepoint) => {
    const filename = `${codepoint.split('-').filter(c => !['200d', 'fe0f'].includes(c)).join('-')}.png`;
    return filename;
};

export default getRenderer;
