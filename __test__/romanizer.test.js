import {transform} from "../src/romanizer";

describe('transform', () => {
    it('should return X when romanize 10', () => {
        const result = transform(10);

        expect(result).toEqual('X');
    });
});