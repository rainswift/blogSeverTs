// import Vue from 'vue';
// import Vuex from 'vuex';
import userModule from './module/user';
import { createStore } from 'vuex'

interface State{
    count:number
}
export const store=createStore<State>({
    state(){
        return{
            count:1
        }
    },
    mutations:{
        increment(state){
            state.count++
        }
    }
})
