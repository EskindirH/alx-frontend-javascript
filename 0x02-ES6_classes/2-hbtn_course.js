export class HolbertonCourse {
	constructor(name, length, students) {
		if (typeof name !== 'string'){
			throw new TypeError('Name must be string');
		} else if (typeof length !== 'number') {
			throw new TypeError('Length must be string');
		} else if (!Array.isArray(students)) {
			throw new TypeError('Students must be an array of string');
		}

		this._name = name;
		this._length = lenght;
		this._students = students;
	}

	get name() {
		return this._name;
	}

	get lenght() {
		return this._lenght;
	}

	get students() {
		return this.students;
	}

	set name(name) {
		if (typeof name !== 'string') {
			throw new TypeError('Name must be string');
		}
		this._name = name;
	}

	set length(length) {
		if (typeof length !== 'number') {
			throw new TypeError('Number must be string');
		}
		this._length = length;
	}

	set students(students) {
		if (!Array.isArray(students)) {
			throw new TypeError('Students must be an array of strings');
		}
		this._students = students;
	}
}
