<template>
    <main>
        
           <NavBar />
        
        <div class="shape-container">
            <div class="shape">
                <div class="text-container">
                    <h1>Sign Up</h1>
                    <p>Create the account</p>
                </div>
                <form class = "flex-column" method="post" enctype="multipart/form-data" @submit.prevent = "handle_submit">
                    <div class="form-container">
                        <div class="email-container">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required v-model = "email_ref">
                        </div>
            
                        <div class="message-container">
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" required v-model = "password_ref">
                        </div>
                        <button type="submit" class="btn">Sign Up</button>
                    </div>
          
                </form>
                <a href="/login" button class="account">Already have an account? LOGIN</a>
            </div>
        </div>
    
    </main>
    </template>
    
    <script setup>
    import NavBar from "@/components/NavBar.vue";
   
    import router from "@/router/index";
    import { ref } from "vue";
    import { useStore } from "vuex";

    const store = useStore();
    const email_ref = ref("");
    const password_ref = ref("");

    const handle_submit = async (event) => {
    try {
        let url = 'http://localhost:8080/api/auth/signup';
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Credentials": true
            },
            body: JSON.stringify({ "email" : email_ref.value, "password" : password_ref.value })
        };
        const user = await fetch(url, options);
        if(user.status === 201) {
            store.commit("change", true);
            console.log(user);
            router.push("/profile");
            window.location.replace("/login");
        }
    }
    catch(error) {
        console.log(error);
    };
};
    
    </script>
    
    <style scoped>
    main {
      width: 100%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      font-family: 'Roboto';
    }
    
    .shape-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 95%;
    }
    
    .shape {
      height: 590px;
      width: 450px;
      border-radius: 5%;
      background-color: #FFFFFF;
      opacity: 0.9;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
    .text-container {
      text-align: center;
      margin-bottom: -1em;
    }
    
    .text-container h1 {
      margin: 0;
      padding: 1em;
      color: black;
      font-size: 40px;
      letter-spacing: 0.2em;
      font-style: bold;
    }
    
    .text-container p {
      margin: 0;
      font-size: 25px;
      color: black;
    }
    
    .form-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding-bottom: 4em;
    }
    
    .email-container,
    .message-container {
      text-align: center;
      align-items: center;
      margin-top: 2.5em; 
    }
    
    label {
      color: white;
      font-size: 20px;
      font-weight: bold;
      
    }
    
    .email-container label {
      color: #000;
    }
    
    .message-container label {
      color: #000;
    }
    
    
    input[type="email"],
    input[type="password"] {
      width: 90%;
      padding: 17px; 
      border-radius: 5px;
      border: 1px solid #ccc;
      background-color: #fff;
      z-index: 1;
    }
    
    
    button[type="submit"] {
      padding: 10px 50px;
      margin-top: 2em; 
      border: none;
      border-radius: 5px;
      background-color: #5580ED;
      color: white;
      cursor: pointer;
      font-size: 18px;
    }
    
    
    .account {
      color: #000;
      
      font-weight: bold;
      letter-spacing: 0.1em;
      margin-bottom:4em;
    }
    
    .account:hover {
      background-color: #59C4AF;
      color: white;
    }
    </style>