function _assert_(exp) {
  if(!exp) {
    // The expression
    const stackTrace = new Error().stack;
    console.log(_assert_.caller);
  }
};

export default {
  _assert_
};