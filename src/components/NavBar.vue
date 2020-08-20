<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">

            <router-link :to="{name: 'home'}" class="navbar-brand">
                <img src="@/assets/logo.png" width="30" height="30" 
                class="d-inline-block align-top" alt="" loading="lazy">
                Spotify App
            </router-link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <ul class="navbar-nav mr-auto">
                    <li class="nav-item" routerLinkActive="active">
                        <router-link :to="{name: 'home'}" class="navbar-brand">Home</router-link>
                    </li>

                   <li class="nav-item" routerLinkActive="active">
                        <router-link :to="{name: 'search'}" class="navbar-brand">Search</router-link>
                    </li>
                </ul>  

            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>