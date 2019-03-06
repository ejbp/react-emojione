import React from 'react';
import {codepointToShort} from '../utils/emoji-format-conversion';

const Emoji = ({codepoint, style = {}, assetPath, onClick}) => {
    const filename = `${codepoint.split('-').filter(c => !['200d', 'fe0f'].includes(c)).join('-')}.png`;
    return (
        <img
            src={`${assetPath}/${filename}`}
            onClick={onClick}
            style={style}
            title={codepointToShort.get(codepoint)}
        />
    );
};

const getRenderer = ({style, onClick, assetPath}) => (codepoint, key) => (
    <Emoji
        codepoint={codepoint}
        style={style}
        assetPath={assetPath}
        onClick={onClick}
        key={key}
    />
);

export default getRenderer;
