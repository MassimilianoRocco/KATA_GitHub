import { reactive } from 'vue';

const data = reactive({

    optionRepo:true,
    optionUsers:false,
    allRepos: [],
    allUsers: [],
    loading:false,
});

export default data;