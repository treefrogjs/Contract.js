import { assert } from 'chai';
import { _assert_ } from '../src';

describe('Assertion', () => {
  it('handles false', () => {
    const expectedVal = 'I am the Default Awesome Function, fellow comrade! - Dinesh';
    _assert_(false);
  });
});
