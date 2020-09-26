import React, { useState } from 'react';


const Story = () => {

    const storiesData = [
        { title: 'Super Man', story: 'super man A quick brown fox jumps over the lazy dog.' },
        { title: 'Iron Man', story: 'iron man A quick brown fox jumps over the lazy dog.' },
        { title: 'Thor', story: 'thor A quick brown fox jumps over the lazy dog.' },
        { title: 'Hulk', story: 'hulk A quick brown fox jumps over the lazy dog.' },
        { title: 'Loki', story: 'loki A quick brown fox jumps over the lazy dog.' },
        { title: 'Thanos', story: 'thanos A quick brown fox jumps over the lazy dog.' },

    ]
    const [stories, setStories] = useState(storiesData);
    const [initIndex, setInitIndex] = useState(0);

    const nextStory = () => {
        let initIndexClone = initIndex;
        initIndexClone++;
        if (storiesData.length <= initIndexClone) {
            initIndexClone = 0;
        }
        setInitIndex(initIndexClone);
    }
    const prevStory = () => {
        let initIndexClone = initIndex;
        initIndexClone--;
        if (initIndexClone < 0) {
            initIndexClone = stories.length - 1;
        }
        setInitIndex(initIndexClone);
    }

    return (
        <div>
            <h1>{stories[initIndex].title}</h1>
            <p>{stories[initIndex].story}</p>
            <button onClick={prevStory}>Back</button>
            <button onClick={nextStory}>Next</button>
        </div>
    )
}

export default Story;