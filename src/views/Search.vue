<template>
    <div class="m-5">
        <div class="row">
            <div class="col">
                <input type="text" name="" class="form-control" id="" placeholder="Search" v-model="busqueda"
                 @keyup="GetSearchArtists( busqueda )">
            </div>
        </div>

        <Cargando v-if="OpcionCargar && !AnyError"></Cargando>
        <Error v-else-if="AnyError && busqueda.length > 0"/>

        <div class="card-columns mt-3" v-if="busqueda && AnyError == false && OpcionCargar == false">
            <div class="card puntero" @click="InformacionArtista( artista )" v-for="( artista,id ) of DataArtists" 
            :key=id>
                <img v-if="artista.images[1]" :src="artista.images[1].url" class="card-img-top" :alt="artista.name">
                
                <div class="card-body">
                    <h5 class="card-title">{{ artista.name }}</h5>
                </div>

            </div>
        </div>
        
    </div>
    
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Cargando from '@/components/Cargando';
import router from '@/router';
import Error from '@/components/Error'

export default {
    name: 'Search',
    components:{
        Cargando,
        Error
    },
    data() {
        return {
            busqueda:'',

        }
    },
    methods: {
        ...mapActions( 'datos',['GetSearchArtists'] ),
        InformacionArtista( data ){
            //Si el tipo de card en el que hacemos click, es un album y tiene mas de 1 artista, enviamos el id
            //del primer artista
    
            let idArtista;
            if( data.type == 'artist' ){     
                idArtista = data.id;
                router.push( {name: 'artista', params:{id: idArtista} } )
            }
            
        }
    },
    computed: {
        ...mapState('datos',[ 'DataArtists','OpcionCargar', 'AnyError' ]),

    },
}
</script>