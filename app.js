/*
Vue.js einbinden
Vue-Root-Instanz erzeugen
Mit mount() Verknüpfung zur Dom machen
Daten mit data-Attribut bereitstellen
computed properties
Fks wie Eventltstener in methods
Interpolations {{}} Daten reaktiv ausgeben
v-bind: Daten reaktiv binden
v-on:   eventlisterner/ Methoden binden
v-for="car in cars" 
*/


//Vue komponenten sind leicht pflegbar und wiederverwendbar, verwalten ihre eigene logik, template und styles selbst, Auslagerung von wiederverwendbarem Code
//Es gibt lokale und globale Components: global -> steht in jeder anderen Komponent zur Verfügung

const app = Vue.createApp({ 
  
    data: () =>{    
        return {   
            essenArray: submissions, 
           
        }  
    },
    computed:{  
        totalVotes2(){    
            console.log("computed");                
            return  this.essenArray.reduce((totalvotes, essen)=>{
                return totalvotes + essen.votes;
            }, 0); 
        },
        sortedEssenArray(){ 
            return this.essenArray.sort((a,b)=> b.votes-a.votes);
        },
        changeCss(){
           /*
            return{     //returnt Objekt mit classes
                //'bg-primary': this.totalVotes2 >=70,
                //'text-white':this.totalVotes2 >=70

                //'bg-primary text-white': this.totalVotes2 >=70    //Objektschreibweise
                }
            */
            if(this.totalVotes2 >= 70){                         //Arrayschreibweise
                return ["bg-primary", "text-white"];    //"[totalvotes >= 70? ''"
            }
        },
        changeStyle(){
            return { fontSize: this.totalVotes2+'px'};
        }
    },
   
    watch:{ 


    }       

});    
//erstelle globale Component, ähnlich wie Root-Component vom Aufbau aber eigene Component muss nicht an HTML Element gebunden werden, bei Erstellung Namen festlegen der später als Tag im template benutzt wird
//childcomponent braucht daten von rootcomponent/von außen: props sind spezielle Attribute um Daten von der Elternkomponente an die Kindkomponente zu übergeben
app.component("ListenElement",{
    props:['essen'],   //Wenn du mich benutzen möchtest gib mir einen essenArray über v-bind
    methods:{      
       /* inc2(id){
            console.log(id);
            const essen = this.essenArray.find(
                (essen) => essen.id === id
            );
            essen.votes++;
           
        },  //essenArray auch benötigt, entweder über props übergeben oder*/
        inc2(){     //Kindkomponenten dürfen grundsätzlich keine Änderungen an props (übergenene Daten von Eltern) durchführen
            this.essen.votes++; //Kindelement darf keine Daten der Eltern ändern, weil Eltern darüber informiert weden müssen - nicht automatisch
        }                       //Klappt trz weil essen kein primitiver Datentyp und ein Zeiger ist
     
    },    
    //Achtung Bactics
    template:`
    <div class="d-flex">
    
        <div class="d-shrink-0">
        
            <img v-bind:src="essen.img" alt="" />   
        
        </div>
        <div class="flex-grow-1 ms-3" >
            <h5> {{essen.title}}       
                <span class="float-end text-primary" style="cursor:pointer;"
                v-on:click="inc2()">
            
                <i class="fa fa-chevron-up"></i>
                    <strong>
                        {{essen.votes}}
                    </strong>
                </span>
            </h5>
            

            <div>{{essen.desc}}</div> 
            <small v-html="essen.author" class="text-muted"></small>
            
        </div>
    </div>

    `
});

const vm = app.mount('#app');  //hat return (vue-Model) angelehnt an MVM Pattern, liefert Instanz zur Root Component zurück
