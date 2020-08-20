<template>
    <div class="m-5">
        <h1 class="mb-4">New Releases - Spotify</h1>
         
        <Cargando v-if="OpcionCargar && !AnyError"></Cargando>
        <Error v-if="AnyError"/>
        <div class="card-columns puntero" v-else>
            
            <div class="card" @click="InformacionArtista( release )" v-for="( release,id ) of NewReleases" :key=id >
                <img :src="release.images[1].url" class="card-img-top" alt="...">

                <div class="card-body">
                    <h5 class="card-title">{{ release.name }}</h5>

                    <p class="card-text">
                        <span class="badge badge-pill badge-primary" v-for="( artista,id ) of release.artists" :key=id>
                            {{ artista.name }}
                        </span>
                    </p>

                </div>

            </div>

        </div>
    </div>    
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Cargando from '@/components/Cargando';
import router from '@/router'
import Error from '@/components/Error'

export default {
    name: 'Home',
    components:{
        Cargando,
        Error
    },
    computed: {
        ...mapState( 'datos',[ 'NewReleases','OpcionCargar', 'AnyError' ] )
    },
    methods:{
        ...mapActions( 'datos',[ 'GetNewReleases' ] ),

        InformacionArtista(data){
            //Si el tipo de card en el que hacemos click, es un album y tiene mas de 1 artista, enviamos el id
            //del primer artista
    
            let idArtista;
            if( data.type == 'album' ){     
                idArtista = data.artists[0].id;
                console.log(data);
                router.push( {name: 'artista', params:{id: idArtista} } )
            }
        }
    },
    created(){
        this.GetNewReleases();
    }
}
</script>