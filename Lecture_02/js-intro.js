const studentName = "Lars"

const lars = {
   name: studentName,
   birthYear: 1992,
   isNew: false,
   role: "student" 
}

const students = [
   lars,
   {
      name: "Trude",
      birthYear: 1991,
      isNew: true,
      role: "admin",
   },
   {
      name: "Ali",
      birthYear: 1989,
      isNew: true,
      role: "superadmin",
   },
   {
      name: "Simone",
      birthYear: 2001,
      isNew: true,
      role: "student",
   },
];

const getStudentAboveBirthYear = (students = [], birthYear) => {
   return students.filter ((student) => student.birthYear > birthYear)
}

const studentsAbove = getStudentAboveBirthYear(students, 1991) 

const transformStudents = students => students.map(student => ({
   ...students,
   age: new Date().getFullYear - student.birthYear
})) 


const studentsWithAge = transformStudents(students) 

// find() returns only one value
// in case you want to return many values you use filter
const findStudent = (students, name) => {
   return students.find(student => student.name.toLowerCase() === name?.toLowerCase() )
}

const studentFound = findStudent(students, "lars")

const roles = ["admin", "superadmin"];

const hasAccess = (roles, students) => {
   return students.filter((student) => {
      return roles.includes(student.role);
   });
};
 
const adminRoles = hasAccess (['admin'], students)
const studentRoles = hasAccess (['student'], students)
const superadminRoles = hasAccess(['superadmin'], students)

const omitName = (students) =>
{
   return students.map(student => {
      const { name, ...rest } = student
      return rest
   })
}

// A shorter version of omitName()-function where you drop "return" and {}
const omitNameSimple = students => students.map(({name, ...rest}) => rest)

const studentNameOmitted = omitName(students)


// to copy a list, use "spread" method => [...ListName]
const studentCopy = [...students]
studentCopy[1].name = "Name changed"

// to copy an object, use "spread" method => {...ObjectName}
const larsCopy = { ...lars }
larsCopy.name = "Lars Changed"

// 
const hiofLocation = {
   name: "HIOF",
   street: "Haldenveien 1",
   postal: "1520",
   contact: {
      email: "halden@email.no",
   },
};

//! when "copieng" an object that has a nested object, and make changes on the nested object, you effect the original "nested" object
const hiofLocationCopy = { ...hiofLocation }
hiofLocationCopy.contact.email = 'demo'

//? Extends "lars" object and adds a new key (location) and retrieve its value from "hiofLocation"
//! If you write "...hiofLocation" and if "...hiofLocation" has a ket called name and lars too, the the name in lars will be changed from the one retrieved from "hiofLocation"
const studentWithHiofDate = {
   ...lars,
   location: hiofLocation
}

