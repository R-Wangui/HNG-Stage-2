import Accordion from 'react-bootstrap/Accordion';

function ProductDetailsAccordions() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What are you Getting?</Accordion.Header>
        <Accordion.Body>
            <ol style={{fontSize: '14px', fontWeight: '300'}}>
                <li>Gold vermeil: a thick 16k gold layer on sterling silver.</li>
                <li>Band thickness: 4.0 - 12.6mm</li>
            </ol>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Description</Accordion.Header>
        <Accordion.Body>
            <p style={{fontSize: '14px', fontWeight: '300'}}>This is a classic bold design, but we made it ultra - light so that nothing is weighing
            you down ( we wouldn’t want that ). It is handcrafted in vermeil, a thick 16k gold 
            layer on persian bubble design of sterling silver. Pair it with daintier rings to create a basic stack.
            </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ProductDetailsAccordions;