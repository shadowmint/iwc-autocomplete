/// <reference path="../../bower_components/iwcjs/defs/iwc.d.ts"/>
/// <reference path="../../defs/jquery/jquery.d.ts"/>
/// <amd-dependency='jquery'/>
import $ = require('jquery');
import iwc = require('iwc');
declare var data;

/** Autocomplete instance */
export class Autocomplete {

    /** Component root node */
    public root:any;

    /** The component data model */
    public data:any;

    /** Raw template for this component */
    public content():any {
        console.log(data.markup);
        return data.markup;
    }

    /** Run on start up */
    public init():void {
        console.log(this.data);
    }
}

/** Autocomplete factory */
export class AutocompleteFactory {

    /** Inline styles */
    public stylesheet:string = data.styles;

    /** Find root nodes */
    public query(root:any):any {
        return $(root).find('.component--iwc-autocomplete');
    }

    /** New instance */
    public factory():any {
        return new Autocomplete();
    }
}

// Actually register
iwc.register(new AutocompleteFactory());
