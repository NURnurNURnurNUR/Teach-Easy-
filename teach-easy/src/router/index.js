import { createRouter, createWebHistory} from "vue-router";
import MainPage from "../views/MainPageView.vue";
import NewCourse from "../views/NewCourseView.vue";
import LoginPage from "../views/LoginPageView.vue";
import SignUpPage from "../views/SignUpPageView.vue";
import ProfilePage from "../views/ProfilePageView.vue";
import NewClass from "../views/NewClassView.vue";

const isAuthenticated = () => {
  
  return localStorage.getItem('authToken') !== null;
};

const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes:
        [
            {
              path: "/",
              component: MainPage,
              name: "mainpage"
            },

            {
              path:"/new",
              component: NewCourse,
              name: "newcourse"
            },

            {
              path:"/login",
              component: LoginPage,
              name: "loginpage"
            },

            {
              path:"/signup",
              component: SignUpPage,
              name: "signuppage"
            },

            {
              path:"/profile",
              component: ProfilePage,
              name: "profilepage",
              //meta: { requiresAuth: true } 
            },
            
            {
              path:"/newclass",
              component: NewClass,
              name: "newclasspage"
            },

           
            
        ]
    }
)

router.beforeEach(async (to, from) => {
  if (
    
    !isAuthenticated &&
    
    to.name !== 'loginpage'
  ) {
    
    return { name: 'loginpage' }
  }
})


export default router