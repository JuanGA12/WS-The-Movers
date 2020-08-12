<template>
    <v-container>   
        <v-row justify="center">
            <v-col cols="6" md="3" sm="5" xs="6" lg="3" xl="3" justify="center" align="center"
                class="pt-5 pb-5"
                v-for="cliente in Clientes" :key="cliente.Nombre"
            >
                <v-card   width="210">
                    <v-img class="align-center" :src="cliente.Imagen"/>
                    <v-divider class="mx-4" color=#000000 />
                    <v-card-actions class="justify-center" >
                        <v-chip
                            
                            color=#5C6BC0
                            outlined
                        >
                            <v-icon left>mdi-file-document-outline</v-icon>
                            <h1 class="font-weight-bold caption">Recomendación</h1>
                        </v-chip>
                    </v-card-actions>
                </v-card>
                
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

export default {
    data() {
        return {
           
            Clientes: [
                {Nombre:'Abbott', Imagen: require('../../assets/Clientes/Abbott.jpg')},
                {Nombre:'Bata', Imagen: require('../../assets/Clientes/Bata.jpg')},
                {Nombre:'Belatrix', Imagen: require('../../assets/Clientes/Belatrix.jpg')},
                {Nombre:'Binswanger', Imagen: require('../../assets/Clientes/Binswanger.jpg')},
                {Nombre:'Boehringer Ingelheim', Imagen: require('../../assets/Clientes/Boehringer.png')},
                {Nombre:'Calida', Imagen: require('../../assets/Clientes/Calida.jpg')},
                {Nombre:'Capella & Delgado Abogados', Imagen: require('../../assets/Clientes/Capella.jpg')},
                {Nombre:'Corporacion Financiera de Inversiones', Imagen: require('../../assets/Clientes/Cfi.jpg')},
                {Nombre:'General Electric', Imagen: require('../../assets/Clientes/Ge.png')},
                {Nombre:'Gerens', Imagen: require('../../assets/Clientes/Gerens.jpg')},
                {Nombre:'Gruas PM', Imagen: require('../../assets/Clientes/Gruaspm.jpg')},
                {Nombre:'Gtech', Imagen: require('../../assets/Clientes/Gtech.jpg')},
                {Nombre:'Hamburg Süd', Imagen: require('../../assets/Clientes/Hamburgsud.jpg')},
                {Nombre:'Huawei', Imagen: require('../../assets/Clientes/Huawei.jpg')},
                {Nombre:'International Institute for Democracy and Electoral Assistance', Imagen: require('../../assets/Clientes/Idea.png')},
                {Nombre:'Statkraft Perú S.A.', Imagen: require('../../assets/Clientes/Statkraft.jpg')},
                {Nombre:'Sunarp', Imagen: require('../../assets/Clientes/Sunarp.jpg')},
                {Nombre:'Troy & Ginnette Doudy', Imagen: require('../../assets/Clientes/Troy.png')},
                {Nombre:'Victor Medina', Imagen: require('../../assets/Clientes/VictorM.png')},
                {Nombre:'Viva GyM S.A.', Imagen: require('../../assets/Clientes/Vivagym.jpg')},
            ]
        }
    },
    methods:{
        Pdf(){
           
        }
    }
}
</script>

<style>

</style>