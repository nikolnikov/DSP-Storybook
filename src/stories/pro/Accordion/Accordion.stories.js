import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Accordion } from './Accordion';

export default {
    title: 'Professional/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
        controls: {
            disable: true
        },
        actions: {
            disable: true
        },
        docs: {
            page: () => (
                <>
                    <Canvas of={Single} sourceState="none" />
                    <Controls />
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <Accordion {...args} />;

export const Single = Template.bind({});
Single.args = {
    accordionContent: [
        {
            header: 'Title 1',
            icon: 'ds-icon--question',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.'
        },
        {
            header: 'Title 2',
            icon: 'ds-icon--question',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin.'
        }
    ],
    openSingleItem: true
};
Single.argTypes = {
    customClasses: { table: { disable: true } },
    isExpanded: { table: { disable: true } }
};
