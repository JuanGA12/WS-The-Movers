<template>
    <v-row justify="center"  class="pb-5 pt-5">
        <v-col justify="center" align="center" cols="12">
            <h1 class="display-1 font-weight-bold pb-3" style="color:#01579B" >Mudanza Destacada</h1>
            <p class="font-weight-medium" style="color:#01579B">Traslado del señor Sipan y piezas de arte precolombinas a Korea</p>
        </v-col>
        <v-col md="6" sm="12" xs="12" lg="6" xl="6" justify="center" align="center"
            v-for="image in images" :key="image.img">
            <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 16 : 3" shaped>
                <v-img class="white--text align-end" :src="image.img"/>
            </v-card>
            </v-hover>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Mudanza_Des',
    data (){
        return{
            images: [
            { img: require('../../assets/s_sipan1.png')},
            { img: require('../../assets/s_sipan2.png') }      
            ],
        }
    },
}
</script>

<style>

</style>>