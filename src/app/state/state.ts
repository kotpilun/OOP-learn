export default class State {
  fields: Map<string, string>

  constructor() {
    this.fields = this.loadState();

    window.addEventListener('beforeunload', this.saveState.bind(this));
  }

  setValue(name: string, value: string) {
    this.fields.set(name, value);
  } 

  getValue(name:string) {
    if(this.fields.has(name)) {
      return this.fields.get(name);
    }
    return '';
  }

  saveState() {
    const fields = Object.fromEntries(this.fields.entries());
    localStorage.setItem('spaApp', JSON.stringify(fields));
  }

  loadState(): Map<string, string> {
    const fields = localStorage.getItem('spaApp');
    if (fields) {
      const fieldArray = JSON.parse(fields);

      return new Map(Object.entries(fieldArray)); 
    } 

    return new Map();
  }
}