import { observable, action, set, get } from 'mobx';
import { AsyncStorage } from 'react-native';

class EstablishmentStorage {
    @observable selected = null;
    @observable saveSelected = true;


    @set setSelected( value, save )
    {
        this.selected = value;
        this.saveSelected = save;
        if ( this.saveSelected )
        {
            AsyncStorage.setItem( 'EstSelected', this.selected.toString() );
        }
    }
}


const estStore = new EstablishmentStorage();


export default estStore;