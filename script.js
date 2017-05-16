let tasks = [
  {
    name:"walk the dog"
  },
  {
    name:"finish the english paper"
  },
  {
    name:"clean my room"
  },
  {
    name:"pick up milk"
  }
];

new Vue({
  el:'#container',
  data: {
    newTask: '',
    tasks: []
  },
  methods: {
    addTask() {
      let myTask = {
        name: this.newTask,
        isActive: false
      }
      this.tasks.push(myTask);
      this.newTask = '';
    }

  }

});
