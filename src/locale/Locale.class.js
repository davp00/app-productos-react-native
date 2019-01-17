import es from './es';
import en from './en';

const locales = { en, es };

export default class Locale {

    constructor( lang )
    {
        this.set( lang );
    }

    set ( lang )
    {
        this.strings = locales[ lang ] || locales[ 'es' ];
    }

    get( module, string )
    {
        return (this.strings[module] && this.strings[module][string])? this.strings[module][string] : module + '.' + string ;
    }
}