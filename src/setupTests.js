
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

/**
 * Setup para testing
 * npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
 * npm install --save-dev enzyme-to-json
 * npm i --save-dev enzyme
 *
 * y en el archivo setupTest.js
 *
 *
 import Enzyme from 'enzyme';
 import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
 import { createSerializer } from 'enzyme-to-json'

 Enzyme.configure({ adapter: new Adapter() });
 expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
 *
 *
 */