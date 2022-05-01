//diese Datei ist in der index.html eingebunden und hat auch Zugriff auf seed.js

const app = Vue.createApp({ //konfiguriere Root-Komponent
    //optionen
    data: () =>{     //erwartet Funktion die bei Erstellung der Instanz aufgerufen wird
        return {    //deklariere reaktive Daten, Ändern sich die Daten, ändert sich das template
            essenArray: submissions, //aus seed.js
        }  
    },
        methods:{       //Objekt mit Funktionen
            //inc: function(){},
            //inc: () => !!!! Achtung bei .this in arrowfk ist this ungebunden!!! Hier keine arrowfks
            inc(){
                console.log(this);  //mit this Zugriff auf fast alles der rootinstanz
                this.essenArray[0].votes++;
            }
        }       

});    

//erstelle und konfiguriere vue-root-Instanz mit dem Vue-Object, Konfiguriere durch ein Objekt im param
//Mit vue instanz kann man auch "globals" registrieren die wir in ganzer Anwendung (auch Components) verwenden können

//Anwendung muss wissen an welches Element in der Dom sie sich binden soll
//Möchte man nur Teile oder die ganze Anwendung mit vue steuern? -> gehe ins äußerste div der index html und umschließe es mit neuem div mit id="app"
//heißt vue.js 3 bindet sich an dieses div
//Binde die konfigurierte App an dieses Div
const vm = app.mount('#app');  //hat return (vue-Model) angelehnt an MVM Pattern, liefert Instanz zur Root Component zurück

//holen wir vm in der Browserkonsole ist unter anderem Target dabei
/*
<target>: Object { essenArray: Getter & Setter, … }
"$": 
"$attrs": 
"$data": 
​​"$el": 
​​"$emit": 
​​"$forceUpdate": 
​​"$nextTick": 
​​"$options": 
​​"$parent": 
​​"$props": 
​​"$refs": 
​​"$root": 
​​"$slots": 
​​"$watch": 
​​_: 
​​__v_skip: true
​​
essenArray: Array(4) [ {…}, {…}, {…}, … ] Ahaaa
<get essenArray()>: function get()​​
<set essenArray()>: function NOOP()
*/