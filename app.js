const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      // fullname: '',
    };
  },
  // All Methods are updated everytime any method needs updating therefore only use methods when you know that you want to recalculate other methods when anything on the page changes
  // Methods ae good when you have events and you want to trigger certain actions ie. add(), reduce) below...
  // You should only use methods for bind events (@click, @keyup.enter, etc.)
  methods: {
    add(num) {
      return this.counter = this.counter + num;
    },
    reduce(num) {
      return this.counter = this.counter - num;
    },
    // This method is using the native event object (event) as well as another parameter
    setName(event, lastName) {
      return this.name = event.target.value;
    },
    resetInput() {
      return this.name = '';
    },
    outputFullName() {
      return this.name === '' ? '': `${this.name} Strong`;
      }
    },
  // Computed properties are only updated when the specific method is updated which makes them more performant than Methods 
  // Computed properties should be named just like you would a data property, also we don't call () them in the HTML, we just used the name ie. fullname
  // Only really use Computed properties for outputting something like the fullname below
  computed: {
    fullname() {
      return this.name === '' ? '': `${this.name} Strong`;
    }
  },
  watch: {
    // // Watchers connects the 'name' data property with the 'name' watcher method
    // // value equal to current value of name
    // // this particular watcher requires a data property of fullname
    // name(value) {
    //   // we don't return anything but we can run logic that runs when name changes
    //   value === '' ? '': this.fullname = value + ' ' + 'Malone';
    // },
    // This is a better use case for a watcher; Here we are watching the data property 'counter' to see if it is greater than 50 and if so we want to reset it to 0 
    // Therefore watchers are good for things like http request if certain data changes or timers like setTimeout see below
    counter(value) {
      if (value > 50) {
        // We work around the fact that 'this' will no longer refer to the data object of this.counter above but storing 'this' in another variable outside of the setTimeout function like so (see below)
        const that = this;
        setTimeout(function () {
          that.counter = 0; // referring to the global vue app 'this' by grabbing the 'that variable created above (it's janky workaround but it works). Now try to raise the counter above 50 and 2 seconds later it will run reset counter to 0
        }, 2000);
      }
    },
  },
}).mount('#events');
