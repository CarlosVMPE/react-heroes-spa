import { mount } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";

describe('Pruebas en LoginScreen', () => {

    const history = {
        replace: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginScreen history={history} />
        </AuthContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de realizar el dispatch y la navegación', () => {
        // verificar que llame al dispatch
        const handleClick = wrapper.find('button').prop('onClick');

        handleClick();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Carlos'
            }
        });

        expect(history.replace).toHaveBeenCalledWith('/');
        localStorage.setItem('lastPath', '/dc');
        handleClick();
        expect(history.replace).toHaveBeenCalledWith('/dc');
    })


})
