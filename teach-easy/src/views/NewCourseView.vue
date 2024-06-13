<template>
    <main>
        <div>
            <NavBar/>
        </div>
        <h1>NEW SUBJECT</h1>
        
        <h2>NAME OF SUBJECT</h2>
        <div class="top-container">
            <div class="top-container-shape">
                <input v-model="subjectName" :style="{ color: subjectColor }" placeholder="Enter subject name">
            </div>
        </div>
        
        <h2>CHOOSE COLOR</h2>
        <div class="low-container">
            <div class="low-container-shape">
                <CustomSelect
                    :options="['Blue', 'Red', 'Green', 'Orange']"
                    :default="'Blue'"
                    class="select"
                    @input="handleSelection"
                />
            </div>
        </div>
        <div class="button-container">
            <button class="navigate-button-back" @click="goBackPage">CANCEL</button>
            <button class="navigate-button-next" @click="create_subject">NEXT</button>
        </div>
    </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CustomSelect from "@/components/CustomSelect.vue";

export default {
    components: {
        NavBar,
        CustomSelect,
    },
    data() {
        return {
            subjectName: '',
            subjectColor: 'blue', 
        };
    },
    methods: {
        handleSelection(option) {
            switch (option) {
                case 'Blue':
                    this.subjectColor = 'blue';
                    break;
                case 'Red':
                    this.subjectColor = 'red';
                    break;
                case 'Green':
                    this.subjectColor = 'green';
                    break;
                case 'Orange':
                    this.subjectColor = 'orange';
                    break;
                default:
                    this.subjectColor = 'black';
            }
        },
        goBackPage() {
            this.$router.push('/');
            
        },
        goToAnotherPage() {
            this.$router.push('/newclass');
            
        },
        create_subject () {
            let url = 'http://localhost:8080/api/create/subject';

            let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "title" : this.subjectName })
            };

            fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));

            window.location.replace("/newclass")
        }
    },
};
</script>

<style scoped>
h1 {
    text-align: center;
    font-size: 2em;
    margin: 2em auto;
}
.top-container {
    text-align: center;
    margin: auto;
    width: 35%;
    margin: 2em auto;
}
.low-container {
    text-align: center;
    margin: 2em auto;
}
h2 {
    font-size: 1em;
    text-align: center;
}
.select {
    display: inline-block;
    margin-top: 10px;
}
.top-container-shape input {
    padding: 10px;
    font-size: 1em;
    width: 80%;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.button-container {
    display: flex;
    justify-content: space-between; 
     
    width: 35%;
    margin: auto; 
}

button[class="navigate-button-back"],
button[class="navigate-button-next"] {
    padding: 1em 3em;
    border: none;
    border-radius: 0.3em;
    background-color: #5580ED;
    font-size: 15px;
    font-family: "Roboto";
    color: white;
    cursor: pointer;
    height: 3em; 
    width: 40%; 
}

.navigate-button-next {
    margin-right: 5%; 
}

.navigate-button-back {
    margin-left: 5%; 
}
</style>