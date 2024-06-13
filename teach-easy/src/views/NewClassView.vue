<template>
    <main>
      <div>
        <NavBar/>
      </div>
      <h1>NEW CLASS</h1>
      <h2>NAME OF CLASS</h2>
      <div class="top-container">
        <div class="top-container-shape">
          <input v-model="subjectName" :style="{ color: subjectColor }" placeholder="Enter class name">
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
      <StudentInformation
        :student-name="studentName"
        :telephone="telephone"
        :date-of-birth="dateOfBirth"
      />
      <!-- Navigation buttons -->
      <div class="button-container">
        <button class="navigate-button-back" @click="goBackPage">BACK</button>
        <button class="navigate-button-next" @click="save">NEXT</button>
      </div>
    </main>
  </template>


<script>
import NavBar from "@/components/NavBar.vue";
import CustomSelect from "@/components/CustomSelect.vue";
import StudentInformation from "@/components/StudentInformation.vue";

export default {
    components: {
        NavBar,
        CustomSelect,
        StudentInformation,
    },
    data() {
        return {
            subjectName: '',
            subjectColor: 'blue',
            telephone: '',
            studentName: '',
            dateOfBirth: '',
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
            this.$router.push('/new');
        },
        goToAnotherPage() {
            this.$router.push('/calendar');
        },
        save() {
            let url = 'http://localhost:8080/api/create/class';

            let options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/9.2.0'},
            body: JSON.stringify({ "name" : this.subjectName})
            };

            fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));

            window.location.replace("/calendar");
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
.student-container {
    text-align: center;
    margin: 2em auto;
}
.student-container h3 {
    font-size: 1.5em;
    margin-bottom: 1em;
}
.info-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.info-item {
    margin: 0 1em;
}
.info-item label {
    display: block;
    margin-bottom: 0.5em;
}
.info-item input {
    padding: 10px;
    font-size: 1em;
    width: 200px; /* Adjust width as needed */
    border: 1px solid #ccc;
    border-radius: 5px;
}
.button-container {
    display: flex;
    justify-content: space-between; 
    width: 35%;
    margin: auto; 
}
.button-container button {
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

