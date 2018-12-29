import authReducer from '../../reducers/auth';

test('should set uid at login', () => {
    const action = {
        type: 'LOGIN',
        uid: 123
    }
    const state = authReducer(undefined, action);
    expect(state.uid).toBe(123);
});

test('should remove uid at logout', () => {
    const state = authReducer({ uid: '123' }, { type: 'LOGOUT' });
    expect(state).toEqual({});
});