<template>
    <div>
    <NavBar />
    </div>
    <div class="calendar-page">
      
      <div class="calendar">
        <h2>{{ currentMonth }}</h2>
        <div class="calendar-nav">
          <button @click="prevMonth">&lt;</button>
          <button @click="nextMonth">&gt;</button>
        </div>
        <div class="calendar-grid">
          <div v-for="(week, index) in calendar" :key="index" class="calendar-week">
            <div v-for="(day, idx) in week" :key="idx" class="calendar-day" @click="handleDayClick(day)">
              <div class="date">{{ day.date.toLocaleDateString('en-US', dateOptions) }}</div>
              <div class="subject">{{ day.subject || 'No subject' }}</div>
            </div>
          </div>
        </div>
        <div v-if="selectedDate" class="modal">
          <h3>Select Subject for {{ selectedDate.date.toLocaleDateString('en-US', dateOptions) }}</h3>
          <input type="text" v-model="selectedSubject" placeholder="Enter subject">
          <button @click="saveSubject">Save</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  
  export default {
    components: {
      NavBar
    },
    data() {
      return {
        calendar: [],
        selectedDate: null,
        selectedSubject: '',
        currentMonthIndex: new Date().getMonth(),
        dateOptions: { weekday: 'short', month: 'long', day: 'numeric' }
      };
    },
    computed: {
      currentMonth() {
        const date = new Date();
        date.setMonth(this.currentMonthIndex);
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      }
    },
    mounted() {
      this.generateCalendar();
    },
    methods: {
      generateCalendar() {
        const startDate = new Date();
        startDate.setDate(1);
        startDate.setMonth(this.currentMonthIndex);
        startDate.setHours(0, 0, 0, 0);
  
        const endDate = new Date(startDate);
        endDate.setMonth(endDate.getMonth() + 1);
        endDate.setDate(0);
  
        const calendar = [];
        const currentDate = new Date(startDate);
        while (currentDate <= endDate) {
          const week = [];
          for (let i = 0; i < 7; i++) {
            week.push({
              date: new Date(currentDate),
              subject: ''
            });
            currentDate.setDate(currentDate.getDate() + 1);
          }
          calendar.push(week);
        }
        this.calendar = calendar;
      },
      prevMonth() {
        this.currentMonthIndex--;
        this.generateCalendar();
      },
      nextMonth() {
        this.currentMonthIndex++;
        this.generateCalendar();
      },
      handleDayClick(day) {
        this.selectedDate = day;
      },
      saveSubject() {
        if (this.selectedDate) {
          this.selectedDate.subject = this.selectedSubject;
          this.selectedDate = null;
          this.selectedSubject = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .calendar-page {
    padding-top: 50px;
  }
  
  .calendar {
    margin: 0 auto;
    max-width: 800px;
  }
  
  .calendar h2 {
    text-align: center;
    margin-bottom: 10px;
  }
  
  .calendar-nav {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  
  .calendar-nav button {
    margin: 0 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .calendar-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .calendar-week {
    display: flex;
  }
  
  .calendar-day {
    width: 12vw;
    height: 12vh; 
    border: 1px solid #ccc;
    margin: 4px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  
  
  .calendar-day:hover {
    background-color: #f0f0f0;
  }
  
  .date {
    font-weight: bold;
    font-size: 18px;
  }
  
  .subject {
    font-size: 14px;
  }
  
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border: 1px solid #ccc;
  }
  
  .modal input {
    margin-bottom: 10px;
    width: 100%;
    padding: 5px;
  }
  
  .modal button {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  </style>
  