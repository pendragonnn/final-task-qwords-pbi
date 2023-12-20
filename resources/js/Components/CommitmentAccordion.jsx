import { Accordion } from 'flowbite-react';

export default function CommitmentAccordion({ commitmentData }) {
  return (
    <Accordion collapseAll className='my-1'>
      <Accordion.Panel>
        <Accordion.Title className='bg-orange-500 text-white hover:bg-orange-500'>{commitmentData.title}</Accordion.Title>
        <Accordion.Content >
          <p>{commitmentData.description}</p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
