import digital_root from './solution'
  describe('digital_root :', () => {
    it.each`
      digits    | result
      ${16}      | ${7}
      ${456}     | ${6}
      ${0}       |  ${0}
    `('should return $result when $digits is received', ({digits, result}) => {
        expect(digital_root(digits)).toEqual(result);
    });
  });
