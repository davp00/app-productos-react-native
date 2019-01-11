import { observable, action, set, get } from 'mobx';
import Locale from "../locale/Locale.class";
import { NativeModules } from 'react-native';
import { AsyncStorage } from 'react-native';

class UserStore {
    @observable user            = undefined;

    @observable currentLang     = NativeModules.I18nManager.localeIdentifier.split('_')[0];
    @observable locale          = new Locale( this.currentLang );

    @set setUser ( user )
    {
        this.user = user;
    }

    @get getUser = async () =>
    {
        if ( !this.user ) {
            const userString = await AsyncStorage.getItem( 'user' );
            if ( userString )
            {

                this.setUser( JSON.parse(userString) );
            }else return undefined;
        }
        return this.user;

    };

    @action setLang( lang )
    {
        this.currentLang = lang;
        this.locale.set( this.currentLang );
    }

    @action getToken()
    {
        return `Bearer ${ this.user.account.token }`
    }

    @action async LoginUser( LoginData )
    {
        this.user = LoginData;
        await AsyncStorage.setItem('user', JSON.stringify(this.user));
    }
}

const userStore = new UserStore();

export default userStore;