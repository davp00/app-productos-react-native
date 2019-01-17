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

    @get getToken()
    {
        if ( this.user )
            return `Bearer ${ this.user.account.token }`;
        return null;
    }

    @action LoginUser( LoginData )
    {
        this.setUser( LoginData );
        AsyncStorage.setItem('user', JSON.stringify(this.user));
    }

    @action LogOut()
    {
        this.setUser( undefined );
        AsyncStorage.removeItem( 'user' );
    }
}

const userStore = new UserStore();

export default userStore;