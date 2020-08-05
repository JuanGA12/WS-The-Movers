<template>
    <div>
        <v-tooltip left color="black">
            <template v-slot:activator="{ on, attrs }">
                <v-btn bottom right fixed 
                    v-bind="attrs"
                    v-on="on"
                    large fab color="red"
                    @click="dialog = true"
                >
                    <v-icon color="white">mdi-comment-question-outline</v-icon>
                </v-btn>
            </template>
            <span class="body-1 font-weight-bold">¿Sabias que?</span>
        </v-tooltip>
        <v-dialog v-model="dialog" persistent>
            <v-card color=#EEEEEE>
                <v-card-title class="justify-center pb-0" justify="center" align="center">
                    <h4 class="font-weight-medium headline" 
                    style="color:#283593"
                    >
                        Mudanza Destacada
                    </h4>
                </v-card-title>
                <v-container  class="pb-0 pt-0">
                    <v-divider color=#90A4AE />
                </v-container>
                <v-card-subtitle class="justify-center pt-3" 
                    justify="center" align="center" 
                    style="color:#283593"
                >
                    <h3 class="font-weight-medium">
                        Traslado del señor Sipan y piezas de arte precolombinas a Korea
                    </h3>
                </v-card-subtitle>
                <v-card-text>
                    <v-row  justify="center">
                        <v-col md="6" sm="12" xs="12" lg="6" xl="6" justify="center" align="center"
                        v-for="image in images" :key="image.img">
                            <v-hover v-slot:default="{ hover }">
                                <v-card :elevation="hover ? 24 : 4" shaped>
                                    <v-img class="white--text align-end" :src="image.img"/>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-divider color=#90A4AE />
                <v-card-actions class="justify-end">
                    <v-btn @click="dialog = false"
                    text
                    color=#283593
                    >
                        <h3 class="font-weight-medium">
                            Cerrar
                        </h3>
                    </v-btn>
                </v-card-actions>
            </v-card>
      </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'Mudanza_Des',
    data (){
        return{
            dialog: false,
            images: [
            { img: require('../../assets/s_sipan1.png')},
            { img: require('../../assets/s_sipan2.png') }      
            ],
        }
    }

}
</script>

<style>

</style>