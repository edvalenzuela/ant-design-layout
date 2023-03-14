import React from 'react';
import { Row, Col, Divider } from 'antd';

const App = () => {
  return (
		<div className='container'>
			<Divider orientation="center">align center</Divider>
			<Row wrap="false" justify="center">
				<Col xs={4} sm={4} md={5} lg={5} xl={5}>#1</Col>
				<Col xs={4} sm={4} md={5} lg={5} xl={5}>#2</Col>
				<Col xs={4} sm={4} md={5} lg={5} xl={5}>#3</Col>
				<Col xs={4} sm={4} md={5} lg={5} xl={5}>#4</Col>
			</Row>
		</div>
  );
};

export default App;