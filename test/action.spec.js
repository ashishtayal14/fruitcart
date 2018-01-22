import React from 'react';
import * as types from '../src/js/constants/constants';
import * as actionTypes from '../src/js/actions/actions';

describe('actions', () => {
    it('should get shopping details', () => {
        const data = { };
        const expectedAction = {
            type: types.GET_DATA_SUCCESS,
           data:data
        };
        expect(actionTypes.getDataSuccess(data)).toEqual(expectedAction)
    })
});


