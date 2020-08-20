<template>
    <div class="m-5">

        <div>
            <Cargando v-if="OpcionCargar"></Cargando>
        </div>
        
        <div class="card-columns puntero">
            <div class="card" @click="InformacionArtista(release)" v-for="(release,id) of NewReleases" :key=id >

                <img :src="release.images[1].url" class="card-img-top" alt="...">

                <div class="card-body">
                    <h5 class="card-title">{{ release.name }}</h5>
                    
                    <p class="card-text">
                        <span class="badge badge-pill badge-primary" v-for="(artista,id) of release.artists" :key=id>
                            {{artista.name}}
                        </span>
                    </p>
                </div>

            </div>

        </div>
    </div>  

</template>


<script>
import {mapActions, mapState} from 'vuex';
import Cargando from '@/components/Cargando';
import router from '@/router'

export default {
    name: 'Home',
    components:{
        Cargando
    },
    computed: {
        ...mapState('datos',['NewReleases','OpcionCargar'])
    },
    methods:{
        ...mapActions('datos',['GetNewReleases']),
        InformacionArtista(data){
            //Si el tipo de card en el que hacemos click, es un album y tiene mas de 1 artista, enviamos el id
            //del primer artista
    
            let idArtista;
            if(data.type == 'album'){     
                idArtista = data.artists[0].id;
                router.push({name: 'artista', params:{id: idArtista}})
            }
        }
    },
    created(){
        this.GetNewReleases();
    }
}
</script>