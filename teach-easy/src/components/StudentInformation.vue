<template>
  <div class="student-container">
    <h3>STUDENT'S INFORMATION</h3>
    <div class="info-container">
      <div class="info-item">
        <label for="student-name">Student Name:</label>
        <input type="text" v-model="studentName" placeholder="Enter student name">
      </div>
      <div class="info-item">
        <label for="date-of-birth">Date of Birth:</label>
        <input type="date" v-model="dateOfBirth">
      </div>
      <div class="info-item">
        <label for="telephone">Telephone Number:</label>
        <input type="tel" v-model="telephone" placeholder="Enter telephone number">
      </div>
    </div>
    <div class="button">
      <button class="save" @click="save" type = "reset">SAVE</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['update:studentName', 'update:telephone', 'update:dateOfBirth', 'save'],
  data() {
    return {
      studentName: this.studentName,
      telephone: this.telephone,
      dateOfBirth: this.dateOfBirth,
    };
  },
  methods: {
    save() {
      let url = 'http://localhost:8080/api/create/student';

      let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/9.2.0'},
        body: JSON.stringify({"first_name" : this.studentName,"last_name" : this.studentName, "birthday" : this.dateOfBirth, "emergency_number" : this.telephone })
      };

  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));

    this.studentName = "";
    this.dateOfBirth = "";
    this.telephone = "";

    },
  },
};
</script>

  
  <style scoped>
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
    margin: 1.5em 1em;
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
  
  .button {
    margin-top: 1em;
  }
  
  .button button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #5580ED;
    font-size: 15px;
    font-family: "Roboto";
    color: white;
    cursor: pointer;
  }
  
  .button button:hover {
    background-color: #3366CC;
  }
  </style>
  