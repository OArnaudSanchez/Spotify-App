<template>
    <div class="m-4 container">
        
        <div class="row animated fadeIn">
            <div class="col-2">
                <img :src="Artist.images[1].url" alt="" class="img-thumbnail img-circle" >
            </div>

            <div class="col">
                <h3>{{ Artist.name }}</h3>

                <p>
                    <a :href="Artist.external_urls.spotify" target="_blank">Ir a la pagina del Artista</a>
                </p>

                <strong>Generos:</strong>
                <ul>
                    <li v-for="(artista, id) of Artist.genres" :key="id">{{artista}}</li>
                </ul>
            </div>

            <div class="col-4 text-right">

                <router-link :to="{ name: 'home' }">
                    <button class="btn btn-outline-danger">Volver</button>
                </router-link>

            </div>

            <Cargando v-if="OpcionCargar && !AnyError"></Cargando>
            <Error v-else-if="AnyError"/>

            <div class="row m-5" v-else>
                <div class="col">
                    <table class="table"> 

                        <thead>
                            <tr class="text-white">
                                <th>Foto</th>
                                <th>Album</th>
                                <th>Cancion</th>
                                <th>Fecha de Estreno</th>
                                <th>Vista previa</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="( track,id ) of TopTracks" :key="id" class="text-white">
                                <td><img :src="track.album.images[1].url" alt="" class="img-thumb"></td>
                                <td>{{ track.album.name }}</td>
                                <td>{{ track.name }}</td>
                                <td>{{ track.album.release_date }}</td>
                                <td><audio :src="track.preview_url" controls></audio></td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { mapActions, mapState} from 'vuex';
import Cargando from '@/components/Cargando';
import Error from '@/components/Error'

export default {
    name: 'Artista',
    components:{
        Cargando,
        Error
    },
    data() {
        return {
            ParametroRuta: this.$route.params.id,

        }
    },
    methods: {
        ...mapActions( 'datos',[ 'GetArtist','GetArtistTopTracks' ] )
    },
    created() {
        this.GetArtist( this.ParametroRuta );
        this.GetArtistTopTracks( this.ParametroRuta );
    },
    computed: {
        ...mapState( 'datos',[ 'Artist','OpcionCargar','TopTracks', 'AnyError' ] ),
    },
    

}
</script>