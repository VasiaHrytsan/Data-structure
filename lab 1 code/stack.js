class Stack {
	constructor() {
	  this.items = [];
	}
  
	addToStack(street, houseNumber, apartmentNumber) {
	  this.items.push({ street, houseNumber, apartmentNumber });
	}
  
	delete() {
		if(this.items.length === 0) {
			console.log("Стек і так пустий");
		}
	  return this.items.pop();
	}
  
	numberOfElements() {
	  return this.items[this.items.length - 1];
	}
  
	clearStack() {
	  return this.items.length === 0;
	}
  
	size() {
	  return this.items.length;
	}
  
	display() {
	  console.log("Список квартир у стеку:");
	  this.items.forEach((item, index) => {
		console.log(`${index + 1}: Вулиця ${item.street}, Будинок ${item.houseNumber}, Квартира ${item.apartmentNumber}`);
	  });
	}
  
	countHousesOnStreet(targetStreet) {
	  const uniqueHouses = new Set(
		this.items.filter(item => item.street === targetStreet).map(item => item.houseNumber)
	  );
	  return `Кількість квартир на одній вулиці: ${uniqueHouses.size}` ;
	}
  }
  
 
  const apartmentsStack = new Stack();
  apartmentsStack.addToStack("Шевченка", 10, 5);
  apartmentsStack.addToStack("Минайська", 7, 8);
  apartmentsStack.addToStack("Шевченка", 10, 15);
  apartmentsStack.addToStack("Грушевського", 5, 3);
  apartmentsStack.addToStack("Шевченка", 14, 2);
  console.log(apartmentsStack.countHousesOnStreet("Шевченка"));
  console.log(apartmentsStack.size());
  apartmentsStack.display();