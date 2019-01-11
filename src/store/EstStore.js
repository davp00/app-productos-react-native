import { observable, action, set, get } from 'mobx';


class EstablishmentStorage {
    @observable selected = null;
}


const estStore = new EstablishmentStorage();


export default estStore;